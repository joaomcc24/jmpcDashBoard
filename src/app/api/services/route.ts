import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function GET() {
  try {
    const services = await prisma.servico.findMany({
      include: {
        cliente: true,
        equipamento: true,
      },
    })
    
    return NextResponse.json(services)
  } catch (error) {
    return NextResponse.json({ error: "Erro ao buscar serviços" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    const service = await prisma.servico.create({
      data: {
        tipo: body.tipo,
        descricaoProblema: body.descricaoProblema,
        estado: body.estado || "pendente",
        dataEntrada: new Date(),
        tecnico: body.tecnico,
        garantia: body.garantia || false,
        periodoGarantia: body.periodoGarantia,
        notas: body.notas,
        cliente: {
          connect: {
            id: body.clienteId,
          },
        },
        equipamento: {
          connect: {
            id: body.equipamentoId,
          },
        },
      },
    })
    
    return NextResponse.json(service)
  } catch (error) {
    console.error("Erro ao criar serviço:", error)
    return NextResponse.json({ error: "Erro ao criar serviço" }, { status: 500 })
  }
}