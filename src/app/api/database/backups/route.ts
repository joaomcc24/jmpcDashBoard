import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const backups = await prisma.backup.findMany({
      orderBy: { startedAt: 'desc' },
      take: 10, // Últimos 10 backups
      include: {
        user: {
          select: {
            name: true,
            email: true
          }
        }
      }
    })
    
    return NextResponse.json(backups)
  } catch (error) {
    console.error('Erro ao obter backups:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const userId = "default-user" // Por agora fixo
    
    // Criar registo de backup
    const backup = await prisma.backup.create({
      data: {
        userId,
        filename: `backup_${new Date().toISOString().replace(/[:.]/g, '-')}.sql`,
        size: BigInt(0), // Será atualizado quando o backup for concluído
        type: body.type || 'manual',
        status: 'pending'
      }
    })
    
    // Simular processo de backup (em produção seria um job em background)
    setTimeout(async () => {
      try {
        // Simular tempo de backup
        await new Promise(resolve => setTimeout(resolve, 2000))
        
        // Simular tamanho do backup (baseado no número de registos)
        const totalRecords = await Promise.all([
          prisma.cliente.count(),
          prisma.servico.count(),
          prisma.equipamento.count()
        ]).then(counts => counts.reduce((a, b) => a + b, 0))
        
        const estimatedSize = BigInt(totalRecords * 1024) // ~1KB por registo (estimativa)
        
        await prisma.backup.update({
          where: { id: backup.id },
          data: {
            status: 'completed',
            completedAt: new Date(),
            size: estimatedSize
          }
        })
      } catch (error) {
        await prisma.backup.update({
          where: { id: backup.id },
          data: {
            status: 'failed',
            errorMessage: error instanceof Error ? error.message : 'Erro desconhecido'
          }
        })
      }
    }, 100)
    
    return NextResponse.json(backup, { status: 201 })
  } catch (error) {
    console.error('Erro ao criar backup:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}
