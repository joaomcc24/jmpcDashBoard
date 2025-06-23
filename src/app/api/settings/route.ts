import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    // Verificar autenticação
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
    }

    // Buscar o utilizador na base de dados
    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    })

    if (!user) {
      return NextResponse.json({ error: 'Utilizador não encontrado' }, { status: 404 })
    }

    const userId = user.id
    let userSettings = await prisma.userSettings.findUnique({
      where: { userId }
    })
    
    // Se não existir configurações, criar com valores padrão
    if (!userSettings) {
      userSettings = await prisma.userSettings.create({
        data: {
          userId,
          theme: "system",
          colorScheme: "blue",
          fontSize: "medium",
          compactMode: false,
          emailNotifications: true,
          pushNotifications: true,
          emailFrequency: "immediate",
          quietHours: false,
          quietStart: "22:00",
          quietEnd: "08:00",
          weekendNotifications: true,
          emailNewService: true,
          emailServiceUpdates: true,
          emailClientMessages: false,
          emailSystemAlerts: true,
          emailDailyReport: false,
          emailWeeklyReport: true,
          pushUrgentServices: true,
          pushServiceCompleted: false,
          pushClientNotifications: true,
          pushSystemAlerts: true,
          pushReminders: true
        }
      })
    }
    
    return NextResponse.json(userSettings)
  } catch (error) {
    console.error('Erro ao obter configurações:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    // Verificar autenticação
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
    }

    // Buscar o utilizador na base de dados
    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    })

    if (!user) {
      return NextResponse.json({ error: 'Utilizador não encontrado' }, { status: 404 })
    }

    const body = await request.json()
    const userId = user.id
    
    const userSettings = await prisma.userSettings.upsert({
      where: { userId },
      update: {
        // Aparência
        theme: body.theme,
        colorScheme: body.colorScheme,
        fontSize: body.fontSize,
        compactMode: body.compactMode,
        
        // Perfil
        phone: body.phone,
        position: body.position,
        department: body.department,
        address: body.address,
        city: body.city,
        postalCode: body.postalCode,
        bio: body.bio,
        
        // Notificações
        emailNotifications: body.emailNotifications,
        pushNotifications: body.pushNotifications,
        emailFrequency: body.emailFrequency,
        quietHours: body.quietHours,
        quietStart: body.quietStart,
        quietEnd: body.quietEnd,
        weekendNotifications: body.weekendNotifications,
        
        // Email específicas
        emailNewService: body.emailNewService,
        emailServiceUpdates: body.emailServiceUpdates,
        emailClientMessages: body.emailClientMessages,
        emailSystemAlerts: body.emailSystemAlerts,
        emailDailyReport: body.emailDailyReport,
        emailWeeklyReport: body.emailWeeklyReport,
        
        // Push específicas
        pushUrgentServices: body.pushUrgentServices,
        pushServiceCompleted: body.pushServiceCompleted,
        pushClientNotifications: body.pushClientNotifications,
        pushSystemAlerts: body.pushSystemAlerts,
        pushReminders: body.pushReminders,
      },
      create: {
        userId,
        // Aparência
        theme: body.theme || "system",
        colorScheme: body.colorScheme || "blue",
        fontSize: body.fontSize || "medium",
        compactMode: body.compactMode || false,
        
        // Perfil
        phone: body.phone,
        position: body.position,
        department: body.department,
        address: body.address,
        city: body.city,
        postalCode: body.postalCode,
        bio: body.bio,
        
        // Notificações
        emailNotifications: body.emailNotifications ?? true,
        pushNotifications: body.pushNotifications ?? true,
        emailFrequency: body.emailFrequency || "immediate",
        quietHours: body.quietHours ?? false,
        quietStart: body.quietStart || "22:00",
        quietEnd: body.quietEnd || "08:00",
        weekendNotifications: body.weekendNotifications ?? true,
        
        // Email específicas
        emailNewService: body.emailNewService ?? true,
        emailServiceUpdates: body.emailServiceUpdates ?? true,
        emailClientMessages: body.emailClientMessages ?? false,
        emailSystemAlerts: body.emailSystemAlerts ?? true,
        emailDailyReport: body.emailDailyReport ?? false,
        emailWeeklyReport: body.emailWeeklyReport ?? true,
        
        // Push específicas
        pushUrgentServices: body.pushUrgentServices ?? true,
        pushServiceCompleted: body.pushServiceCompleted ?? false,
        pushClientNotifications: body.pushClientNotifications ?? true,
        pushSystemAlerts: body.pushSystemAlerts ?? true,        pushReminders: body.pushReminders ?? true
      }
    })
    
    return NextResponse.json(userSettings)
  } catch (error) {
    console.error('Erro ao guardar configurações:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}
