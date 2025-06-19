import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    // Obter informações da base de dados
    const [
      clientesCount,
      servicosCount,
      equipamentosCount,
      usuariosCount
    ] = await Promise.all([
      prisma.cliente.count(),
      prisma.servico.count(),
      prisma.equipamento.count(),
      prisma.user.count()
    ])
    
    // Informações básicas (mock para algumas que requerem queries específicas)
    const databaseInfo = {
      name: "jmpc_dashboard",
      size: "247.8 MB", // Mock - seria calculado de forma diferente
      tables: 15, // Número aproximado de tabelas
      records: clientesCount + servicosCount + equipamentosCount + usuariosCount,
      version: "PostgreSQL 15.3", // Mock
      status: "Healthy",
      lastBackup: await getLastBackupDate()
    }
    
    return NextResponse.json(databaseInfo)
  } catch (error) {
    console.error('Erro ao obter informações da BD:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

async function getLastBackupDate() {
  try {
    const lastBackup = await prisma.backup.findFirst({
      where: { status: 'completed' },
      orderBy: { completedAt: 'desc' }
    })
    
    return lastBackup?.completedAt?.toISOString() || null
  } catch {
    return null
  }
}
