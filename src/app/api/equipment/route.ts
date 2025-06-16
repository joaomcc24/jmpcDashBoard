import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
  try {
    const equipment = await prisma.equipamento.findMany({
      orderBy: {
        tipo: "asc",
      },
    })

    return NextResponse.json(equipment)
  } catch (error) {
    console.error("Erro ao buscar equipamentos:", error)
    return NextResponse.json({ error: "Erro ao buscar equipamentos" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    if (!body.tipo?.trim()) {
      return NextResponse.json({ error: "Tipo é obrigatório" }, { status: 400 })
    }

    if (!body.marca?.trim()) {
      return NextResponse.json({ error: "Marca é obrigatória" }, { status: 400 })
    }

    const equipment = await prisma.equipamento.create({
      data: {
        tipo: body.tipo.trim(),
        marca: body.marca.trim(),
        modelo: body.modelo?.trim() || "",
        numeroSerie: body.numeroSerie?.trim() || null,
        dataCompra: body.dataCompra ? new Date(body.dataCompra) : null,
      },
    })

    return NextResponse.json(equipment, { status: 201 })
  } catch (error) {
    console.error("Erro ao criar equipamento:", error)
    return NextResponse.json({ error: "Erro ao criar equipamento" }, { status: 500 })
  }
}
