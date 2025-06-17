// src/app/api/services/[id]/parts/route.ts
import { NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const serviceId = params.id

  try {
    const body = await request.json()
    const { nome, quantidade, precoUnitario } = body

    if (!nome || !quantidade || !precoUnitario) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios: nome, quantidade, precoUnitario" },
        { status: 400 }
      )
    }

    const total = parseFloat(quantidade) * parseFloat(precoUnitario)    const newPart = await prisma.peca.create({
      data: {
        servicoId: serviceId,
        nome,
        quantidade: parseInt(quantidade),
        precoUnitario: parseFloat(precoUnitario),
        total: total,
      },
    })

    // Update service total value
    await updateServiceTotal(serviceId)

    return NextResponse.json(newPart)
  } catch (error) {
    console.error('Erro ao adicionar peça:', error)
    return NextResponse.json(
      { error: "Erro ao adicionar peça" },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const serviceId = params.id
  const { searchParams } = new URL(request.url)
  const partId = searchParams.get('partId')

  if (!partId) {
    return NextResponse.json(
      { error: "ID da peça é obrigatório" },
      { status: 400 }
    )
  }

  try {
    await prisma.peca.delete({
      where: {
        id: parseInt(partId),
        servicoId: serviceId,
      },
    })

    // Update service total value
    await updateServiceTotal(serviceId)

    return NextResponse.json({ message: "Peça removida com sucesso" })
  } catch (error) {
    console.error('Erro ao remover peça:', error)
    return NextResponse.json(
      { error: "Erro ao remover peça" },
      { status: 500 }
    )
  }
}

async function updateServiceTotal(serviceId: string) {
  const service = await prisma.servico.findUnique({
    where: { id: serviceId },
    include: {
      pecas: true,
      maoDeObra: true,
      deslocacao: true,
    },
  })

  if (!service) return

  const partsTotal = service.pecas.reduce((sum, part) => sum + parseFloat(part.total.toString()), 0)
  const laborTotal = service.maoDeObra ? parseFloat(service.maoDeObra.total.toString()) : 0
  const travelTotal = service.deslocacao ? parseFloat(service.deslocacao.total.toString()) : 0

  const total = partsTotal + laborTotal + travelTotal

  await prisma.servico.update({
    where: { id: serviceId },
    data: { valorTotal: total },
  })
}
