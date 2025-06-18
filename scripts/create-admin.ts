import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function createAdminUser() {
  try {
    // Verificar se já existe um utilizador
    const existingUser = await prisma.user.findFirst()
    
    if (existingUser) {
      console.log('❌ Já existe um utilizador no sistema')
      console.log(`📧 Email: ${existingUser.email}`)
      return
    }

    // Criar utilizador admin
    const email = 'admin@jmpc.com'
    const password = 'admin123' // Mude esta password em produção
    const name = 'Administrador JMPC'

    // Hash da password
    const hashedPassword = await bcrypt.hash(password, 12)

    // Criar utilizador
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        role: 'admin'
      }
    })

    console.log('✅ Utilizador administrador criado com sucesso!')
    console.log(`📧 Email: ${user.email}`)
    console.log(`🔑 Password: ${password}`)
    console.log(`👤 Nome: ${user.name}`)
    console.log('')
    console.log('⚠️  IMPORTANTE: Altere a password após o primeiro login!')
    
  } catch (error) {
    console.error('❌ Erro ao criar utilizador:', error)
  } finally {
    await prisma.$disconnect()
  }
}

createAdminUser()
