// src/app/api/services/[id]/route.ts
import { NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id

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
  { params }: { params: { id: string } }
) {
  const id = params.id
  
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
  { params }: { params: { id: string } }
) {
  const id = params.id
  
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