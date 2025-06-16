import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)
    const body = await request.json()

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

    // Verificar se já existe outro cliente com o mesmo email
    const existingClient = await prisma.cliente.findFirst({
      where: {
        email: body.email.trim().toLowerCase(),
        NOT: {
          id: id,
        },
      },
    })

    if (existingClient) {
      return NextResponse.json({ error: "Já existe outro cliente com este email" }, { status: 400 })
    }

    // Atualizar o cliente
    const client = await prisma.cliente.update({
      where: { id },
      data: {
        nome: body.nome.trim(),
        telefone: body.telefone.trim(),
        email: body.email.trim().toLowerCase(),
        morada: body.morada?.trim() || "",
        tipo: body.tipo || "particular",
      },
    })

    return NextResponse.json(client)
  } catch (error) {
    console.error("Erro ao atualizar cliente:", error)
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)

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
