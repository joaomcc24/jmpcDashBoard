import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

// Criar instância do Prisma diretamente aqui para evitar problemas de importação
const prisma = new PrismaClient()

export async function GET() {
  try {
    console.log("=== GET /api/clients ===")

    const clients = await prisma.cliente.findMany({
      orderBy: {
        createdAt: "desc",
      },
    })

    console.log("Clientes encontrados:", clients.length)
    return NextResponse.json(clients)
  } catch (error) {
    console.error("Erro detalhado ao buscar clientes:", error)
    return NextResponse.json({ error: "Erro ao buscar clientes", details: error.message }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    console.log("=== POST /api/clients ===")

    const body = await request.json()
    console.log("Dados recebidos:", body)

    // Validação básica
    if (!body.nome?.trim()) {
      return NextResponse.json({ error: "Nome é obrigatório" }, { status: 400 })
    }

    if (!body.telefone?.trim()) {
      return NextResponse.json({ error: "Telefone é obrigatório" }, { status: 400 })
    }

    if (!body.email?.trim()) {
      return NextResponse.json({ error: "Email é obrigatório" }, { status: 400 })
    }

    // Verificar se já existe cliente com o mesmo email
    const existingClient = await prisma.cliente.findFirst({
      where: {
        email: body.email.trim().toLowerCase(),
      },
    })

    if (existingClient) {
      return NextResponse.json({ error: "Já existe um cliente com este email" }, { status: 400 })
    }

    // Criar o cliente
    const client = await prisma.cliente.create({
      data: {
        nome: body.nome.trim(),
        telefone: body.telefone.trim(),
        email: body.email.trim().toLowerCase(),
        morada: body.morada?.trim() || "",
        tipo: body.tipo || "particular",
      },
    })

    console.log("Cliente criado:", client)
    return NextResponse.json(client, { status: 201 })
  } catch (error) {
    console.error("Erro ao criar cliente:", error)
    return NextResponse.json({ error: "Erro interno do servidor", details: error.message }, { status: 500 })
  }
}
\