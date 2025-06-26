// src/app/api/services/[id]/route.ts
import { NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params

  try {
    const service = await prisma.servico.findUnique({
      where: {
        id: id,
      },
      include: {
        cliente: true,
        equipamento: true,
        historico: true,
        fotos: true,
        pecas: true,
        maoDeObra: true,
        deslocacao: true,
      },
    })
    
    if (!service) {
      return NextResponse.json(
        { error: "Serviço não encontrado" },
        { status: 404 }
      )
    }
    
    return NextResponse.json(service)
  } catch (error) {
    console.error('Erro ao buscar serviço:', error)
    return NextResponse.json(
      { error: "Erro ao buscar serviço" },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  
  try {
    const body = await request.json()
    
    // Separar dados do equipamento dos dados do serviço
    const {
      equipamentoTipo,
      equipamentoMarca,
      equipamentoModelo,
      equipamentoNumeroSerie,
      equipamentoDataCompra,
      ...serviceData
    } = body
    
    // Atualizar usando transação para garantir consistência
    const service = await prisma.$transaction(async (tx) => {
      // Primeiro, buscar o serviço para obter o ID do equipamento
      const currentService = await tx.servico.findUnique({
        where: { id },
        include: { equipamento: true }
      })
      
      if (!currentService) {
        throw new Error("Serviço não encontrado")
      }
      
      // Atualizar equipamento se houver dados
      if (equipamentoTipo || equipamentoMarca || equipamentoModelo || equipamentoNumeroSerie !== undefined || equipamentoDataCompra !== undefined) {
        await tx.equipamento.update({
          where: { id: currentService.equipamento.id },
          data: {
            ...(equipamentoTipo && { tipo: equipamentoTipo }),
            ...(equipamentoMarca && { marca: equipamentoMarca }),
            ...(equipamentoModelo && { modelo: equipamentoModelo }),
            ...(equipamentoNumeroSerie !== undefined && { numeroSerie: equipamentoNumeroSerie || null }),
            ...(equipamentoDataCompra !== undefined && { dataCompra: equipamentoDataCompra ? new Date(equipamentoDataCompra) : null }),
          }
        })
      }
      
      // Atualizar serviço
      const updatedService = await tx.servico.update({
        where: { id },
        data: serviceData,
        include: {
          cliente: true,
          equipamento: true,
          historico: true,
          fotos: true,
          pecas: true,
          maoDeObra: true,
          deslocacao: true,
        }
      })
      
      return updatedService
    })
    
    return NextResponse.json(service)
  } catch (error) {
    console.error('Erro ao atualizar serviço:', error)
    return NextResponse.json(
      { error: "Erro ao atualizar serviço" },
      { status: 500 }
    )
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  
  try {
    const body = await request.json()
    
    const service = await prisma.servico.update({
      where: {
        id: id,
      },
      data: body,
      include: {
        cliente: true,
        equipamento: true,
        historico: true,
        fotos: true,
        pecas: true,
        maoDeObra: true,
        deslocacao: true,
      }
    })
    
    return NextResponse.json(service)
  } catch (error) {
    console.error('Erro ao atualizar serviço:', error)
    return NextResponse.json(
      { error: "Erro ao atualizar serviço" },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  
  try {
    await prisma.$transaction(async (tx) => {
      // Delete related records in the correct order
      await tx.historico.deleteMany({
        where: { servicoId: id }
      })
      
      await tx.foto.deleteMany({
        where: { servicoId: id }
      })
      
      await tx.peca.deleteMany({
        where: { servicoId: id }
      })
      
      await tx.maoDeObra.deleteMany({
        where: { servicoId: id }
      })
      
      await tx.deslocacao.deleteMany({
        where: { servicoId: id }
      })
      
      await tx.servico.delete({
        where: { id: id }
      })
    })
    
    return NextResponse.json({ message: "Serviço eliminado com sucesso" })
  } catch (error) {
    console.error('Erro ao eliminar serviço:', error)
    return NextResponse.json(
      { error: "Erro ao eliminar serviço" },
      { status: 500 }
    )
  }
}