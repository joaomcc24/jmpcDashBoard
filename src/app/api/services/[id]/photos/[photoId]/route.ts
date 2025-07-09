import { NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { unlink } from 'fs/promises'
import { join } from 'path'

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string; photoId: string }> }
) {
  const { photoId } = await params
  
  try {
    const photo = await prisma.foto.findUnique({
      where: {
        id: photoId
      }
    })
    
    if (!photo) {
      return NextResponse.json(
        { error: "Foto não encontrada" },
        { status: 404 }
      )
    }
    
    if (photo.url) {
      const filePath = join(process.cwd(), 'public', photo.url)
      try {
        await unlink(filePath)
      } catch (fileError) {
        console.error('Erro ao remover arquivo:', fileError)
      }
    }
    
    await prisma.foto.delete({
      where: {
        id: photoId
      }
    })
    
    return NextResponse.json({ message: "Foto removida com sucesso" })
  } catch (error) {
    console.error('Erro ao remover foto:', error)
    return NextResponse.json(
      { error: "Erro ao remover foto" },
      { status: 500 }
    )
  }
}
