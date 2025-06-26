import { NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
import { existsSync } from 'fs'

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
    
    // Verificar se é um arquivo válido
    if (!photo.type.startsWith('image/') && photo.type !== 'application/pdf') {
      return NextResponse.json(
        { error: "Formato de arquivo não suportado. Use apenas imagens ou PDF." },
        { status: 400 }
      )
    }
    
    // Criar nome único para o arquivo com extensão correta
    const bytes = await photo.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const fileExt = photo.name.split('.').pop() || 'jpg'
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`
    
    // Garantir que o diretório de upload existe
    const uploadDir = join(process.cwd(), 'public', 'uploads', 'photos')
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true })
    }
    
    const uploadPath = join(uploadDir, fileName)
    
    // Salvar arquivo
    await writeFile(uploadPath, buffer)
    console.log(`Arquivo salvo em: ${uploadPath}`)
    
    // Salvar informação no banco de dados
    const photoRecord = await prisma.foto.create({
      data: {
        servicoId: id,
        descricao: description,
        url: `/uploads/photos/${fileName}`
      }
    })
    
    console.log(`Foto registrada no BD: ${photoRecord.url}`)
    return NextResponse.json(photoRecord)
  } catch (error) {
    console.error('Erro ao adicionar foto:', error)
    return NextResponse.json(
      { error: "Erro ao adicionar foto: " + (error as Error).message },
      { status: 500 }
    )
  }
}
