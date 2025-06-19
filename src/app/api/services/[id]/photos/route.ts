import { NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { writeFile } from 'fs/promises'
import { join } from 'path'

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  
  try {
    const formData = await request.formData()
    const photo = formData.get('photo') as File
    const description = formData.get('description') as string
    
    if (!photo || !description) {
      return NextResponse.json(
        { error: "Foto e descrição são obrigatórias" },
        { status: 400 }
      )
    }
    
    // Criar nome único para o arquivo
    const bytes = await photo.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const fileName = `${Date.now()}-${photo.name}`
    const uploadPath = join(process.cwd(), 'public', 'uploads', 'photos', fileName)
    
    // Salvar arquivo
    await writeFile(uploadPath, buffer)
    
    // Salvar informação no banco de dados
    const photoRecord = await prisma.foto.create({
      data: {
        servicoId: id,
        descricao: description,
        url: `/uploads/photos/${fileName}`
      }
    })
    
    return NextResponse.json(photoRecord)
  } catch (error) {
    console.error('Erro ao adicionar foto:', error)
    return NextResponse.json(
      { error: "Erro ao adicionar foto" },
      { status: 500 }
    )
  }
}
