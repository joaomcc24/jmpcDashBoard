// src/app/api/services/[id]/travel/route.ts
import { NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const serviceId = params.id

  try {
    const body = await request.json()
    const { km, valorKm } = body

    if (!km || !valorKm) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios: km, valorKm" },
        { status: 400 }
      )
    }

    const total = parseFloat(km) * parseFloat(valorKm)

    const newTravel = await prisma.deslocacao.upsert({
      where: { servicoId: serviceId },
      update: {
        km: parseFloat(km),
        valorKm: parseFloat(valorKm),
        total: total,
      },
      create: {
        servicoId: serviceId,
        km: parseFloat(km),
        valorKm: parseFloat(valorKm),
        total: total,
      },
    })

    // Update service total value
    await updateServiceTotal(serviceId)

    return NextResponse.json(newTravel)
  } catch (error) {
    console.error('Erro ao adicionar deslocação:', error)
    return NextResponse.json(
      { error: "Erro ao adicionar deslocação" },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const serviceId = params.id

  try {
    await prisma.deslocacao.delete({
      where: { servicoId: serviceId },
    })

    // Update service total value
    await updateServiceTotal(serviceId)

    return NextResponse.json({ message: "Deslocação removida com sucesso" })
  } catch (error) {
    console.error('Erro ao remover deslocação:', error)
    return NextResponse.json(
      { error: "Erro ao remover deslocação" },
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
