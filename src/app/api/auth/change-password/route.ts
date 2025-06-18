import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    // Verificar se o usuário está autenticado
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'Não autorizado' }, 
        { status: 401 }
      )
    }
    
    const { currentPassword, newPassword } = await request.json()
    
    // Validações
    if (!currentPassword || !newPassword) {
      return NextResponse.json(
        { error: 'Password atual e nova password são obrigatórias' }, 
        { status: 400 }
      )
    }
    
    if (newPassword.length < 8) {
      return NextResponse.json(
        { error: 'A nova password deve ter pelo menos 8 caracteres' }, 
        { status: 400 }
      )
    }
    
    // Validar requisitos de segurança
    const hasUpper = /[A-Z]/.test(newPassword)
    const hasLower = /[a-z]/.test(newPassword)
    const hasNumber = /\d/.test(newPassword)
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(newPassword)
    
    if (!hasUpper || !hasLower || !hasNumber || !hasSpecial) {
      return NextResponse.json(
        { error: 'A password deve conter pelo menos: 1 maiúscula, 1 minúscula, 1 número e 1 carácter especial' }, 
        { status: 400 }
      )
    }
    
    // Buscar usuário atual
    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    })
    
    if (!user) {
      return NextResponse.json(
        { error: 'Utilizador não encontrado' }, 
        { status: 404 }
      )
    }
    
    // Verificar password atual
    const isCurrentPasswordValid = await bcrypt.compare(currentPassword, user.password)
    
    if (!isCurrentPasswordValid) {
      return NextResponse.json(
        { error: 'Password atual incorreta' }, 
        { status: 400 }
      )
    }
    
    // Verificar se a nova password é diferente da atual
    const isSamePassword = await bcrypt.compare(newPassword, user.password)
    
    if (isSamePassword) {
      return NextResponse.json(
        { error: 'A nova password deve ser diferente da atual' }, 
        { status: 400 }
      )
    }
    
    // Hash da nova password com salt alto para segurança máxima
    const saltRounds = 12
    const hashedNewPassword = await bcrypt.hash(newPassword, saltRounds)
    
    // Atualizar password na base de dados
    await prisma.user.update({
      where: { email: session.user.email },
      data: { 
        password: hashedNewPassword,
        updatedAt: new Date()
      }
    })
    
    console.log(`Password alterada para utilizador: ${session.user.email} em ${new Date().toISOString()}`)
    
    return NextResponse.json({ 
      message: 'Password alterada com sucesso',
      timestamp: new Date().toISOString()
    })
    
  } catch (error) {
    console.error('Erro ao alterar password:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' }, 
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}
