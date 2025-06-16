import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
  try {
    const services = await prisma.servico.findMany({
      include: {
        cliente: true,
        equipamento: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    })

    return NextResponse.json(services)
  } catch (error) {
    console.error("Erro ao buscar serviços:", error)
    return NextResponse.json({ error: "Erro ao buscar serviços" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validações
    if (!body.tipo?.trim()) {
      return NextResponse.json({ error: "Tipo de serviço é obrigatório" }, { status: 400 })
    }

    if (!body.descricaoProblema?.trim()) {
      return NextResponse.json({ error: "Descrição do problema é obrigatória" }, { status: 400 })
    }

    if (!body.clienteId) {
      return NextResponse.json({ error: "Cliente é obrigatório" }, { status: 400 })
    }

    if (!body.equipamentoId) {
      return NextResponse.json({ error: "Equipamento é obrigatório" }, { status: 400 })
    }

    const service = await prisma.servico.create({
      data: {
        tipo: body.tipo.trim(),
        descricaoProblema: body.descricaoProblema.trim(),
        estado: "pendente", // Estado inicial
        dataEntrada: new Date(), // Data atual
        tecnico: body.tecnico?.trim() || null,
        garantia: body.garantia || false,
        periodoGarantia: body.periodoGarantia?.trim() || null,
        notas: body.notas?.trim() || null,
        clienteId: Number.parseInt(body.clienteId), // Converter para Int
        equipamentoId: Number.parseInt(body.equipamentoId), // Converter para Int
      },
      include: {
        cliente: true,
        equipamento: true,
      },
    })

    return NextResponse.json(service, { status: 201 })
  } catch (error) {
    console.error("Erro ao criar serviço:", error)
    return NextResponse.json({ error: "Erro ao criar serviço" }, { status: 500 })
  }
}
