import { NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string; partId: string }> }
) {
  const { id, partId } = await params
  
  try {
    await prisma.peca.delete({
      where: {
        id: parseInt(partId)
      }
    })
    
    return NextResponse.json({ message: "Peça removida com sucesso" })
  } catch (error) {
    console.error('Erro ao remover peça:', error)
    return NextResponse.json(
      { error: "Erro ao remover peça" },
      { status: 500 }
    )
  }
}
