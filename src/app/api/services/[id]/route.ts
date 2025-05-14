import { NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id


  if (id === "new") {
    return NextResponse.json(
      { error: "Rota não encontrada" },
      { status: 404 }
    )
  }

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
      data: body
    })
    
    return NextResponse.json(service)
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao atualizar serviço" },
      { status: 500 }
    )
  }
}