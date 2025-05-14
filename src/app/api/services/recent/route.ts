import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  try {
    const recentServices = await prisma.servico.findMany({
      orderBy: {
        dataEntrada: 'desc'
      },
      take: 5,
      include: {
        cliente: true,
        equipamento: true
      }
    })

    return NextResponse.json(recentServices)
  } catch (error) {
    console.error('Erro ao buscar serviços recentes:', error)
    return NextResponse.json(
      { error: 'Erro ao buscar serviços recentes' },
      { status: 500 }
    )
  }
}