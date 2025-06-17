import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { SERVICE_STATES } from "@/lib/constants"

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
    console.log("=== INÍCIO CRIAÇÃO SERVIÇO ===")

    const body = await request.json()
    console.log("Dados recebidos:", JSON.stringify(body, null, 2))

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

    // Gerar ID incremental para serviço
    const lastService = await prisma.servico.findFirst({
      orderBy: { createdAt: "desc" },
      select: { id: true },
    })

    // Extrair número do último ID (ex: SRV-005 -> 5)
    let nextNumber = 1
    if (lastService?.id) {
      const match = lastService.id.match(/SRV-(\d+)/)
      if (match) {
        nextNumber = Number.parseInt(match[1]) + 1
      }
    }

    const servicoId = `SRV-${nextNumber.toString().padStart(3, "0")}`

    // Criar serviço
    const service = await prisma.servico.create({
      data: {
        id: servicoId,
        servicoId: servicoId, // Campo adicional para garantir unicidade
        tipo: body.tipo.trim(),
        descricaoProblema: body.descricaoProblema.trim(),
        estado: SERVICE_STATES.PENDING,
        dataEntrada: new Date(),
        tecnico: body.tecnico?.trim() || null,
        garantia: body.garantia || false,
        periodoGarantia: body.periodoGarantia?.trim() || null,
        notas: body.notas?.trim() || null,
        clienteId: Number.parseInt(body.clienteId),
        equipamentoId: Number.parseInt(body.equipamentoId),
      },
      include: {
        cliente: true,
        equipamento: true,
      },
    })

    console.log("Serviço criado com ID:", service.id)
    console.log("=== FIM CRIAÇÃO SERVIÇO - SUCESSO ===")

    return NextResponse.json(service, { status: 201 })
  } catch (error) {
    console.error("Erro ao criar serviço:", error)
    return NextResponse.json({ error: "Erro ao criar serviço" }, { status: 500 })
  }
}
