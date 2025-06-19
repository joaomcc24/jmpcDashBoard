import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    // Por agora, vamos usar um user ID fixo (mais tarde será do session/auth)
    const userId = "default-user"
      let userSettings = await prisma.userSettings.findUnique({
      where: { userId }
    })
    
    // Se não existir, criar utilizador e configurações por defeito
    if (!userSettings) {
      // Primeiro verificar se o utilizador existe
      let user = await prisma.user.findUnique({
        where: { id: userId }
      })
      
      // Se não existir, criar o utilizador
      if (!user) {
        user = await prisma.user.create({
          data: {
            id: userId,
            email: "admin@jmpc.pt",
            password: "hashed_password", // Em produção seria hash real
            name: "Administrador JMPC"
          }
        })
      }
      
      // Criar configurações
      userSettings = await prisma.userSettings.create({
        data: {
          userId
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
    const body = await request.json()
    const userId = "default-user" // Por agora fixo
    
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
