import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient({
  log: ["error"],
})

export async function PUT(
  request: Request, 
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    console.log("=== INÍCIO ATUALIZAÇÃO CLIENTE API ===")

    const { id: idParam } = await params
    const id = Number.parseInt(idParam)
    const body = await request.json()

    console.log("ID do cliente:", id)
    console.log("Dados recebidos:", JSON.stringify(body, null, 2))

    // Validação e limpeza dos dados
    const nome = body.nome?.toString().trim()
    const telefone = body.telefone?.toString().trim()
    const emailRaw = body.email?.toString().trim().toLowerCase()
    const email = emailRaw && emailRaw !== "" ? emailRaw : null
    const nifRaw = body.nif?.toString().trim()
    const nif = nifRaw && nifRaw !== "" ? nifRaw : null
    const morada = body.morada?.toString().trim() || ""
    const tipo = body.tipo?.toString().trim() || "particular"

    if (!nome) {
      return NextResponse.json({ error: "Nome é obrigatório" }, { status: 400 })
    }

    if (!telefone) {
      return NextResponse.json({ error: "Telefone é obrigatório" }, { status: 400 })
    }

    // Verificar se já existe outro cliente com o mesmo email (apenas se email foi fornecido)
    if (email) {
      const existingClient = await prisma.cliente.findFirst({
        where: {
          email: email,
          NOT: {
            id: id,
          },
        },
      })

      if (existingClient) {
        return NextResponse.json({ error: "Já existe outro cliente com este email" }, { status: 400 })
      }
    }

    // Atualizar o cliente
    const client = await prisma.cliente.update({
      where: { id },
      data: {
        nome,
        telefone,
        email,
        nif,
        morada,
        tipo,
      },
    })

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

    console.log("=== FIM ATUALIZAÇÃO CLIENTE API - SUCESSO ===")
    return NextResponse.json(cleanClient)
  } catch (error) {    console.error("Erro ao atualizar cliente:", error)
    return NextResponse.json(
      {
        error: "Erro interno do servidor",
        details: process.env.NODE_ENV === "development" ? (error as Error)?.message : undefined,
      },
      { status: 500 },
    )
  }
}

export async function DELETE(
  request: Request, 
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: idParam } = await params
    const id = Number.parseInt(idParam)

    // Verificar se o cliente tem serviços associados
    const servicesCount = await prisma.servico.count({
      where: { clienteId: id },
    })

    if (servicesCount > 0) {
      return NextResponse.json({ error: "Não é possível eliminar cliente com serviços associados" }, { status: 400 })
    }

    // Eliminar o cliente
    await prisma.cliente.delete({
      where: { id },
    })

    return NextResponse.json({ message: "Cliente eliminado com sucesso" })
  } catch (error) {
    console.error("Erro ao eliminar cliente:", error)
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 })
  }
}
