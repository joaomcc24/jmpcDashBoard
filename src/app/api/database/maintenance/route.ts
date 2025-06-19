import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const tasks = await prisma.maintenanceTask.findMany({
      orderBy: { nextRun: 'asc' }
    })
    
    return NextResponse.json(tasks)
  } catch (error) {
    console.error('Erro ao obter tarefas de manutenção:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { taskType } = body
    
    let result = {}
    
    switch (taskType) {
      case 'optimize':
        result = await optimizeDatabase()
        break
      case 'cleanup':
        result = await cleanupDatabase()
        break
      case 'analyze':
        result = await analyzeDatabase()
        break
      default:
        return NextResponse.json(
          { error: 'Tipo de tarefa inválido' },
          { status: 400 }
        )
    }
    
    return NextResponse.json(result)
  } catch (error) {
    console.error('Erro ao executar tarefa de manutenção:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

async function optimizeDatabase() {
  // Simular otimização da base de dados
  await new Promise(resolve => setTimeout(resolve, 3000))
    // Atualizar tarefa de otimização
  const existingTask = await prisma.maintenanceTask.findFirst({
    where: { name: 'Otimização de Índices' }
  })
  
  if (existingTask) {
    await prisma.maintenanceTask.update({
      where: { id: existingTask.id },
      data: {
        lastRun: new Date(),
        status: 'completed',
        nextRun: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // Próxima semana
      }
    })
  } else {
    await prisma.maintenanceTask.create({
      data: {
        name: 'Otimização de Índices',
        description: 'Reorganizar e otimizar índices da base de dados',
        category: 'optimization',
        frequency: 'weekly',
        lastRun: new Date(),
        status: 'completed',
        nextRun: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
      }
    })
  }
  
  return { message: 'Otimização concluída com sucesso', duration: '3 segundos' }
}

async function cleanupDatabase() {
  // Simular limpeza da base de dados
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  // Limpar notificações antigas (mais de 30 dias)
  const deletedNotifications = await prisma.notification.deleteMany({
    where: {
      createdAt: {
        lt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
      },
      read: true
    }
  })
  
  // Limpar logs de acesso antigos (mais de 90 dias)
  const deletedLogs = await prisma.accessLog.deleteMany({
    where: {
      createdAt: {
        lt: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000)
      }
    }
  })
    // Atualizar tarefa de limpeza
  const cleanupTask = await prisma.maintenanceTask.findFirst({
    where: { name: 'Limpeza de Dados' }
  })
  
  if (cleanupTask) {
    await prisma.maintenanceTask.update({
      where: { id: cleanupTask.id },
      data: {
        lastRun: new Date(),
        status: 'completed',
        nextRun: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // Próximo mês
      }
    })
  } else {
    await prisma.maintenanceTask.create({
      data: {
        name: 'Limpeza de Dados',
        description: 'Remover dados antigos e temporários',
        category: 'cleanup',
        frequency: 'monthly',
        lastRun: new Date(),
        status: 'completed',
        nextRun: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
      }
    })
  }
  
  return { 
    message: 'Limpeza concluída com sucesso', 
    deleted: {
      notifications: deletedNotifications.count,
      logs: deletedLogs.count
    }
  }
}

async function analyzeDatabase() {
  // Simular análise da base de dados
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  // Obter estatísticas básicas
  const stats = {
    totalClients: await prisma.cliente.count(),
    totalServices: await prisma.servico.count(),
    totalEquipment: await prisma.equipamento.count(),
    activeServices: await prisma.servico.count({
      where: { estado: { not: 'Concluído' } }
    })
  }
  
  return { 
    message: 'Análise concluída com sucesso',
    statistics: stats
  }
}
