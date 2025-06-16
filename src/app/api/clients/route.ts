import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient({
  log: ["error"],
})

export async function GET() {
  try {
    console.log("=== Iniciando busca de clientes ===")

    const clients = await prisma.cliente.findMany({
      orderBy: {
        createdAt: "desc",
      },
    })

    console.log(`Encontrados ${clients.length} clientes`)

    // Garantir que os dados estão limpos
    const cleanClients = clients.map((client) => ({
      id: client.id,
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

    // Verificar se já existe cliente com o mesmo email
    console.log("Verificando se email já existe...")
    try {
      const existingClient = await prisma.cliente.findFirst({
        where: {
          email: email,
        },
      })

      if (existingClient) {
        console.log("Erro: Email já existe")
        return NextResponse.json({ error: "Já existe um cliente com este email" }, { status: 400 })
      }
    } catch (dbError) {
      console.error("Erro ao verificar email existente:", dbError)
      return NextResponse.json({ error: "Erro de base de dados ao verificar email" }, { status: 500 })
    }

    // Criar o cliente
    console.log("Criando cliente na base de dados...")
    let client
    try {
      client = await prisma.cliente.create({
        data: {
          nome,
          telefone,
          email,
          nif: nif || null, // Garantir que é null se vazio
          morada,
          tipo,
        },
      })
      console.log("Cliente criado com sucesso:", client.id)
    } catch (createError) {
      console.error("Erro ao criar cliente:", createError)

      // Verificar se é erro de constraint unique
      if (createError.code === "P2002") {
        return NextResponse.json({ error: "Email já está em uso" }, { status: 400 })
      }

      return NextResponse.json({ error: "Erro ao criar cliente na base de dados" }, { status: 500 })
    }

    // Retornar dados limpos
    const cleanClient = {
      id: client.id,
      nome: client.nome,
      telefone: client.telefone,
      email: client.email,
      nif: client.nif,
      morada: client.morada,
      tipo: client.tipo,
      createdAt: client.createdAt.toISOString(),
    }

    console.log("=== FIM CRIAÇÃO CLIENTE API - SUCESSO ===")
    return NextResponse.json(cleanClient, { status: 201 })
  } catch (error) {
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
