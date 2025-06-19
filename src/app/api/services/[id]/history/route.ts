import { NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  
  try {    const body = await request.json()
    const { acao, autor } = body
    
    const now = new Date()
    const hora = now.toLocaleTimeString('pt-PT', { 
      hour: '2-digit', 
      minute: '2-digit' 
    })
    
    const historicoEntry = await prisma.historico.create({
      data: {
        servicoId: id,
        data: now, // Usar DateTime completo
        hora,
        acao,
        autor
      }
    })
    
    return NextResponse.json(historicoEntry)
  } catch (error) {
    console.error('Erro ao adicionar entrada no histórico:', error)
    return NextResponse.json(
      { error: "Erro ao adicionar entrada no histórico" },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const url = new URL(request.url)
  const entryId = url.searchParams.get('entryId')
  
  if (!entryId) {
    return NextResponse.json(
      { error: "ID da entrada do histórico é obrigatório" },
      { status: 400 }
    )
  }
  
  try {
    await prisma.historico.delete({
      where: {
        id: parseInt(entryId)
      }
    })
    
    return NextResponse.json({ message: "Entrada do histórico removida com sucesso" })
  } catch (error) {
    console.error('Erro ao remover entrada do histórico:', error)
    return NextResponse.json(
      { error: "Erro ao remover entrada do histórico" },
      { status: 500 }
    )
  }
}
