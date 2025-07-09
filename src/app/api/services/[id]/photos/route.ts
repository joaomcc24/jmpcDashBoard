import { NextRequest, NextResponse } from "next/server"
import { v2 as cloudinary } from 'cloudinary'
import prisma from "@/lib/prisma"

// Configurar Cloudinary sempre
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: serviceId } = await params

  try {
    const formData = await request.formData()
    const file = formData.get('file') as File || formData.get('photo') as File

    if (!file) {
      return NextResponse.json(
        { error: "Nenhum arquivo recebido" },
        { status: 400 }
      )
    }

    // Verificar tamanho do arquivo (máx 4MB)
    if (file.size > 4 * 1024 * 1024) {
      return NextResponse.json(
        { error: "Arquivo muito grande. Máximo 4MB." },
        { status: 400 }
      )
    }

    // Verificar tipo de arquivo
    if (!file.type.startsWith('image/') && file.type !== 'application/pdf') {
      return NextResponse.json(
        { error: "Por favor, selecione apenas arquivos de imagem ou PDF." },
        { status: 400 }
      )
    }

    const description = formData.get('description') as string || file.name
    
    // Converter file para buffer
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Upload para Cloudinary SEMPRE
    interface CloudinaryUploadResult {
      secure_url: string
      public_id: string
    }

    const uploadResult = await new Promise<CloudinaryUploadResult>((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          folder: `jmpc-services/${serviceId}`,
          resource_type: "auto",
          quality: "auto:good",
          fetch_format: "auto",
        },
        (error, result) => {
          if (error) {
            console.error('Erro no Cloudinary:', error)
            reject(error)
          } else if (result) {
            resolve(result as CloudinaryUploadResult)
          } else {
            reject(new Error('Resultado do upload é undefined'))
          }
        }
      ).end(buffer)
    })

    // Salvar na base de dados
    const photoData = {
      servicoId: serviceId,
      url: uploadResult.secure_url,
      descricao: description,
      ...(uploadResult.public_id && { publicId: uploadResult.public_id })
    }

    const newPhoto = await prisma.foto.create({
      data: photoData,
    })

    return NextResponse.json({
      id: newPhoto.id,
      url: newPhoto.url,
      descricao: newPhoto.descricao,
      message: "Foto carregada com sucesso!"
    })

  } catch (error) {
    console.error('Erro ao fazer upload da foto:', error)
    return NextResponse.json(
      { error: "Erro ao fazer upload da foto" },
      { status: 500 }
    )
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: serviceId } = await params

  try {
    const photos = await prisma.foto.findMany({
      where: { servicoId: serviceId },
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json(photos)

  } catch (error) {
    console.error('Erro ao buscar fotos:', error)
    return NextResponse.json(
      { error: "Erro ao buscar fotos" },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest
) {
  try {
    const { searchParams } = new URL(request.url)
    const photoId = searchParams.get('photoId')

    if (!photoId) {
      return NextResponse.json(
        { error: "ID da foto é obrigatório" },
        { status: 400 }
      )
    }

    // Buscar a foto na base de dados
    const photo = await prisma.foto.findUnique({
      where: { id: parseInt(photoId) }
    })

    if (!photo) {
      return NextResponse.json(
        { error: "Foto não encontrada" },
        { status: 404 }
      )
    }

    // Remover do Cloudinary se tiver publicId
    interface PhotoWithPublicId {
      publicId?: string | null
    }
    
    const photoWithPublicId = photo as PhotoWithPublicId
    if (photoWithPublicId.publicId) {
      try {
        await cloudinary.uploader.destroy(photoWithPublicId.publicId)
      } catch (cloudinaryError) {
        console.error('Erro ao remover do Cloudinary:', cloudinaryError)
      }
    }

    // Remover da base de dados
    await prisma.foto.delete({
      where: { id: parseInt(photoId) }
    })

    return NextResponse.json({
      message: "Foto removida com sucesso!"
    })

  } catch (error) {
    console.error('Erro ao remover foto:', error)
    return NextResponse.json(
      { error: "Erro ao remover foto" },
      { status: 500 }
    )
  }
}
