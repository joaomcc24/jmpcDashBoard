// src/app/api/services/[id]/labor/route.ts
import { NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: serviceId } = await params

  try {
    const body = await request.json()
    const { horas, valorHora } = body

    if (!horas || !valorHora) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios: horas, valorHora" },
        { status: 400 }
      )
    }

    const total = parseFloat(horas) * parseFloat(valorHora)

    const newLabor = await prisma.maoDeObra.upsert({
      where: { servicoId: serviceId },
      update: {
        horas: parseFloat(horas),
        valorHora: parseFloat(valorHora),
        total: total,
      },
      create: {
        servicoId: serviceId,
        horas: parseFloat(horas),
        valorHora: parseFloat(valorHora),
        total: total,
      },
    })

    // Update service total value
    await updateServiceTotal(serviceId)

    return NextResponse.json(newLabor)
  } catch (error) {
    console.error('Erro ao adicionar mão de obra:', error)
    return NextResponse.json(
      { error: "Erro ao adicionar mão de obra" },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: serviceId } = await params
  
  try {
    await prisma.maoDeObra.deleteMany({
      where: {
        servicoId: serviceId
      }
    })

    // Update service total value
    await updateServiceTotal(serviceId)
    
    return NextResponse.json({ message: "Mão de obra removida com sucesso" })
  } catch (error) {
    console.error('Erro ao remover mão de obra:', error)
    return NextResponse.json(
      { error: "Erro ao remover mão de obra" },
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
