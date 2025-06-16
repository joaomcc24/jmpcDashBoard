const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

async function main() {
  console.log("🌱 Inicializando base de dados...")

  // Criar alguns clientes de exemplo
  const cliente1 = await prisma.cliente.create({
    data: {
      nome: "João Silva",
      telefone: "912345678",
      email: "joao@email.com",
      morada: "Rua das Flores, 123, Lisboa",
      tipo: "particular",
    },
  })

  const cliente2 = await prisma.cliente.create({
    data: {
      nome: "Empresa ABC Lda",
      telefone: "213456789",
      email: "geral@empresaabc.com",
      morada: "Av. da República, 456, Porto",
      tipo: "empresa",
    },
  })

  console.log("✅ Clientes criados:", { cliente1, cliente2 })

  // Criar alguns equipamentos de exemplo
  const equipamento1 = await prisma.equipamento.create({
    data: {
      tipo: "Frigorífico",
      marca: "Samsung",
      modelo: "RF23R62E3SR",
      numeroSerie: "SN123456789",
    },
  })

  console.log("✅ Equipamentos criados:", { equipamento1 })

  console.log("🎉 Base de dados inicializada com sucesso!")
}

main()
  .catch((e) => {
    console.error("❌ Erro ao inicializar base de dados:", e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
