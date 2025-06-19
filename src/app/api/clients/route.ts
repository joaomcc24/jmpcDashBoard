import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient({
  log: ["error"],
})

export async function GET() {
  try {
    console.log("=== A iniciar busca de clientes ===")

    const clients = await prisma.cliente.findMany({
      orderBy: {
        createdAt: "desc",
      },
    })

    console.log(`Encontrados ${clients.length} clientes`)

    // Garantir que os dados estão limpos
    const cleanClients = clients.map((client) => ({
      id: client.id,
      clienteId: client.clienteId,
      nome: client.nome || "",
      telefone: client.telefone || "",
      email: client.email || "",
      nif: client.nif || "",
      morada: client.morada || "",
      tipo: client.tipo || "particular",
      createdAt: client.createdAt?.toISOString() || new Date().toISOString(),
    }))

    return NextResponse.json(cleanClients)
  } catch (error) {
    console.error("Erro ao buscar clientes:", error)
    return NextResponse.json([], { status: 200 })
  }
}

export async function POST(request: Request) {
  try {
    console.log("=== INÍCIO CRIAÇÃO CLIENTE API ===")

    const body = await request.json()
    console.log("Dados recebidos na API:", JSON.stringify(body, null, 2))

    // Validação e limpeza dos dados
    const nome = body.nome?.toString().trim()
    const telefone = body.telefone?.toString().trim()
    const email = body.email?.toString().trim().toLowerCase()
    const nif = body.nif?.toString().trim() || null
    const morada = body.morada?.toString().trim() || ""
    const tipo = body.tipo?.toString().trim() || "particular"

    console.log("Dados processados:", { nome, telefone, email, nif, morada, tipo })

    // Validações
    if (!nome) {
      console.log("Erro: Nome é obrigatório")
      return NextResponse.json({ error: "Nome é obrigatório" }, { status: 400 })
    }

    if (!telefone) {
      console.log("Erro: Telefone é obrigatório")
      return NextResponse.json({ error: "Telefone é obrigatório" }, { status: 400 })
    }

    if (!email) {
      console.log("Erro: Email é obrigatório")
      return NextResponse.json({ error: "Email é obrigatório" }, { status: 400 })
    }

    console.log("A verificar se existem duplicados...")

    // Verificar email
    const existingEmail = await prisma.cliente.findFirst({
      where: { email: email },
    })
    if (existingEmail) {
      return NextResponse.json({ error: "Já existe um cliente com este email" }, { status: 400 })
    }

    // Verificar telefone
    const existingPhone = await prisma.cliente.findFirst({
      where: { telefone: telefone },
    })
    if (existingPhone) {
      return NextResponse.json({ error: "Já existe um cliente com este número de telefone" }, { status: 400 })
    }

    // Verificar NIF (se fornecido)
    if (nif) {
      const existingNif = await prisma.cliente.findFirst({
        where: { nif: nif },
      })
      if (existingNif) {
        return NextResponse.json({ error: "Já existe um cliente com este NIF" }, { status: 400 })
      }
    }    // Gerar ID incremental para cliente
    const lastClient = await prisma.cliente.findFirst({
      orderBy: { clienteId: "desc" },
      select: { clienteId: true },
    })
    
    let nextNumber = 1
    if (lastClient?.clienteId) {
      // Extrair número do último clienteId (formato CLT-001, CLT-002, etc.)
      const match = lastClient.clienteId.match(/CLT-(\d+)/)
      if (match) {
        nextNumber = parseInt(match[1]) + 1
      }
    }
    
    const clienteId = `CLT-${nextNumber.toString().padStart(3, "0")}`

    console.log("A criar cliente na base de dados...")
    console.log("ID do cliente gerado:", clienteId)
    let client
    try {
      client = await prisma.cliente.create({
        data: {
          clienteId,
          nome,
          telefone,
          email,
          nif: nif || null,
          morada,
          tipo,
        },
      })
      console.log("Cliente criado com sucesso:", client.id)    } catch (createError: any) {
      console.error("Erro ao criar cliente:", createError)

      // Verificar se é erro de constraint unique
      if (createError.code === "P2002") {
        const target = createError.meta?.target
        if (target?.includes("email")) {
          return NextResponse.json({ error: "Email já está em uso" }, { status: 400 })
        }
        if (target?.includes("telefone")) {
          return NextResponse.json({ error: "Telefone já está em uso" }, { status: 400 })
        }
        if (target?.includes("nif")) {
          return NextResponse.json({ error: "NIF já está em uso" }, { status: 400 })
        }
        return NextResponse.json({ error: "Dados duplicados encontrados" }, { status: 400 })
      }

      return NextResponse.json({ error: "Erro ao criar cliente na base de dados" }, { status: 500 })
    }

    // Retornar dados limpos
    const cleanClient = {
      id: client.id,
      clienteId: client.clienteId,
      nome: client.nome,
      telefone: client.telefone,
      email: client.email,
      nif: client.nif,
      morada: client.morada,
      tipo: client.tipo,
      createdAt: client.createdAt.toISOString(),
    }

    console.log("=== FIM CRIAÇÃO CLIENTE API - SUCESSO ===")
    return NextResponse.json(cleanClient, { status: 201 })  } catch (error: any) {
    console.error("=== ERRO GERAL NA CRIAÇÃO DO CLIENTE ===")
    console.error("Tipo do erro:", typeof error)
    console.error("Erro completo:", error)
    console.error("Stack trace:", error?.stack)

    return NextResponse.json(
      {
        error: "Erro interno do servidor",
        details: process.env.NODE_ENV === "development" ? error?.message : undefined,
      },
      { status: 500 },
    )
  }
}
