import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.deslocacao.deleteMany()
  await prisma.maoDeObra.deleteMany()
  await prisma.peca.deleteMany()
  await prisma.foto.deleteMany()
  await prisma.historico.deleteMany()
  await prisma.servico.deleteMany()
  await prisma.equipamento.deleteMany()
  await prisma.cliente.deleteMany()

  // Criar clientes
  const joaoSilva = await prisma.cliente.create({
    data: {
      nome: "João Silva",
      telefone: "912 345 678",
      email: "joao.silva@email.com",
      morada: "Rua das Flores, 123, 1000-123 Lisboa",
      tipo: "Particular"
    }
  })

  const mariaSantos = await prisma.cliente.create({
    data: {
      nome: "Maria Santos",
      telefone: "916 789 012",
      email: "maria.santos@email.com",
      morada: "Av. da República, 45, 2750-475 Cascais",
      tipo: "Particular"
    }
  })

  const miguelBrown = await prisma.cliente.create({
    data: {
      nome: "Miguel Brown",
      telefone: "939 456 123",
      email: "miguel.brown@email.com",
      morada: "Rua do Comércio, 78, 4000-150 Porto",
      tipo: "Empresa"
    }
  })

  // Criar equipamentos
  const frigorifico = await prisma.equipamento.create({
    data: {
      tipo: "Frigorífico",
      marca: "Samsung",
      modelo: "RT46K6000S8",
      numeroSerie: "XYZ123456789",
      dataCompra: new Date("2022-03-15")
    }
  })

  const maquinaLavar = await prisma.equipamento.create({
    data: {
      tipo: "Máquina de Lavar",
      marca: "LG",
      modelo: "F4WV509S0E",
      numeroSerie: "ABC987654321",
      dataCompra: new Date("2021-09-20")
    }
  })

  const maquinaLavarLoica = await prisma.equipamento.create({
    data: {
      tipo: "Máquina de Lavar Loiça",
      marca: "Bosch",
      modelo: "SMS4HCI48E",
      numeroSerie: "DEF123456789",
      dataCompra: new Date("2022-01-10")
    }
  })

  // Criar serviços com relacionamentos
  const servico1 = await prisma.servico.create({
    data: {
      id: "SRV-001",
      clienteId: joaoSilva.id,
      equipamentoId: frigorifico.id,
      tipo: "Reparação",
      descricaoProblema: "Não liga e não refrigera",
      estado: "concluido",
      dataEntrada: new Date("2023-06-10"),
      dataDiagnostico: new Date("2023-06-11"),
      dataReparacao: new Date("2023-06-15"),      tecnico: "António Ferreira",
      garantia: true,
      dataCompra: new Date("2023-03-10"),
      documentoCompra: "Fatura FT-2023/001",
      notas: "O cliente reportou que o aparelho não liga. Após inspeção inicial, verificou-se que o compressor não está a funcionar. Foi solicitada a peça de substituição ao fornecedor.",
      valorTotal: 194.00
    }
  })

  // Adicionar histórico ao serviço 1
  await prisma.historico.createMany({
    data: [
      {
        servicoId: servico1.id,
        data: new Date("2023-06-10"),
        hora: "14:30",
        acao: "Receção do equipamento",
        autor: "Carlos Santos"
      },
      {
        servicoId: servico1.id,
        data: new Date("2023-06-11"),
        hora: "10:15",
        acao: "Diagnóstico: Compressor avariado",
        autor: "António Ferreira"
      },
      {
        servicoId: servico1.id,
        data: new Date("2023-06-15"),
        hora: "16:45",
        acao: "Substituição do compressor",
        autor: "António Ferreira"
      }
    ]
  })

  // Adicionar fotos ao serviço 1
  await prisma.foto.createMany({
    data: [
      {
        servicoId: servico1.id,
        descricao: "Estado inicial do frigorífico"
      },
      {
        servicoId: servico1.id,
        descricao: "Compressor avariado"
      }
    ]
  })
  // Adicionar peças ao serviço 1
  await prisma.peca.createMany({
    data: [
      {
        servicoId: servico1.id,
        codigo: "COMP001",
        nome: "Compressor Frigorífico Samsung",
        quantidade: 1,
        precoUnitario: 85.00,
        total: 85.00
      },
      {
        servicoId: servico1.id,
        codigo: "FLT002",
        nome: "Filtro de gás",
        quantidade: 1,
        precoUnitario: 12.50,
        total: 12.50
      }
    ]
  })

  // Adicionar mão de obra ao serviço 1
  await prisma.maoDeObra.create({
    data: {
      servicoId: servico1.id,
      horas: 2.5,
      valorHora: 35.00,
      total: 87.50
    }
  })

  // Adicionar deslocação ao serviço 1
  await prisma.deslocacao.create({
    data: {
      servicoId: servico1.id,
      km: 18,
      valorKm: 0.50,
      total: 9.00
    }
  })

  // Criar mais serviços...
  // Serviço 2
  await prisma.servico.create({
    data: {
      id: "SRV-002",
      clienteId: mariaSantos.id,
      equipamentoId: maquinaLavar.id,
      tipo: "Reparação",
      descricaoProblema: "Faz muito barulho e vibra excessivamente",
      estado: "pendente",
      dataEntrada: new Date("2023-06-14"),
      dataDiagnostico: new Date("2023-06-14"),      tecnico: "Carlos Mendes",
      garantia: true,
      dataCompra: new Date("2022-12-14"),
      documentoCompra: "Recibo REC-2022/045", 
      notas: "Cliente reportou ruído excessivo durante a centrifugação. Verificação inicial indica problema nos rolamentos do tambor."
    }
  })

  // Serviço 3
  await prisma.servico.create({
    data: {
      id: "SRV-003",
      clienteId: miguelBrown.id,
      equipamentoId: maquinaLavarLoica.id,
      tipo: "Instalação",
      descricaoProblema: "Instalação de nova máquina",
      estado: "aguarda_peca",
      dataEntrada: new Date("2023-06-18"),      tecnico: "António Ferreira",
      garantia: true,
      dataCompra: new Date("2023-06-18"),
      documentoCompra: null,
      notas: "Cliente solicitou instalação de máquina nova e remoção da antiga."
    }
  })

  console.log('Banco de dados populado com sucesso!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })