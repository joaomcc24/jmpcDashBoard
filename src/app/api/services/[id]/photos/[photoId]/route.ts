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
    // Buscar a foto no banco para obter o caminho do arquivo
    const photo = await prisma.foto.findUnique({
      where: {
        id: parseInt(photoId)
      }
    })
    
    if (!photo) {
      return NextResponse.json(
        { error: "Foto não encontrada" },
        { status: 404 }
      )
    }
    
    // Remover arquivo do sistema de arquivos
    if (photo.url) {
      const filePath = join(process.cwd(), 'public', photo.url)
      try {
        await unlink(filePath)
      } catch (fileError) {
        console.error('Erro ao remover arquivo:', fileError)
        // Continuar mesmo se não conseguir remover o arquivo
      }
    }
    
    // Remover registro do banco de dados
    await prisma.foto.delete({
      where: {
        id: parseInt(photoId)
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
