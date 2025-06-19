import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const userId = "default-user" // Por agora fixo
    
    const sessions = await prisma.userSession.findMany({
      where: { 
        userId,
        isActive: true,
        expiresAt: { gt: new Date() }
      },
      orderBy: { lastActive: 'desc' }
    })
    
    return NextResponse.json(sessions)
  } catch (error) {
    console.error('Erro ao obter sessões:', error)
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
    
    // Criar nova sessão
    const session = await prisma.userSession.create({
      data: {
        userId,
        device: body.device,
        ipAddress: body.ipAddress,
        location: body.location,
        userAgent: body.userAgent,
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 horas
      }
    })
    
    // Registar no log de acesso
    await prisma.accessLog.create({
      data: {
        userId,
        action: 'login',
        ipAddress: body.ipAddress,
        location: body.location,
        device: body.device,
        userAgent: body.userAgent,
        success: true
      }
    })
    
    return NextResponse.json(session, { status: 201 })
  } catch (error) {
    console.error('Erro ao criar sessão:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}
