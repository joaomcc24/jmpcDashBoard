import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    // Reset das sequências de ID
    await prisma.$executeRaw`SELECT setval(pg_get_serial_sequence('Cliente', 'id'), COALESCE(MAX(id), 0) + 1, false) FROM "Cliente"`
    await prisma.$executeRaw`SELECT setval(pg_get_serial_sequence('Equipamento', 'id'), COALESCE(MAX(id), 0) + 1, false) FROM "Equipamento"`
    
    return NextResponse.json({ 
      message: 'Sequências resetadas com sucesso',
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Erro ao resetar sequências:', error)
    return NextResponse.json(
      { error: 'Erro ao resetar sequências', details: error }, 
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}
