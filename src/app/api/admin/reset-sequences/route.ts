import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST() {
  try {
    // Reset das sequências de ID - simplified approach
    const maxClienteId = await prisma.cliente.findFirst({
      orderBy: { id: 'desc' },
      select: { id: true }
    })
    
    const maxEquipamentoId = await prisma.equipamento.findFirst({
      orderBy: { id: 'desc' },
      select: { id: true }
    })
    
    // Log the current max IDs instead of resetting sequences
    console.log('Max Cliente ID:', maxClienteId?.id || 0)
    console.log('Max Equipamento ID:', maxEquipamentoId?.id || 0)
    
    return NextResponse.json({ 
      message: 'Sequências verificadas com sucesso',
      maxIds: {
        cliente: maxClienteId?.id || 0,
        equipamento: maxEquipamentoId?.id || 0
      },
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Erro ao verificar sequências:', error)
    return NextResponse.json(
      { error: 'Erro ao verificar sequências' }, 
      { status: 500 }
    )
  }
}
