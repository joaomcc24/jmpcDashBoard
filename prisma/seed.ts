import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Configurando utilizador administrador...')

  try {
    const adminEmail = process.env.ADMIN_EMAIL
    const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH
    
    if (!adminEmail || !adminPasswordHash) {
      console.error('❌ ADMIN_EMAIL e ADMIN_PASSWORD_HASH devem estar definidos no .env')
      console.log('💡 Configure as variáveis de ambiente antes de executar o seed')
      process.exit(1)
    }
    
    // Verificar se já existe um admin
    const existingAdmin = await prisma.user.findUnique({
      where: {
        email: adminEmail
      }
    })

    if (existingAdmin) {
      console.log('ℹ️  Admin já existe, atualizando dados...')
      await prisma.user.update({
        where: {
          email: adminEmail
        },
        data: {
          password: adminPasswordHash,
          name: 'Administrador JMPC',
          role: 'admin'
        }
      })
      console.log('✅ Admin atualizado!')
    } else {
      console.log('👤 Criando novo utilizador admin...')
      await prisma.user.create({
        data: {
          email: adminEmail,
          password: adminPasswordHash,
          name: 'Administrador JMPC',
          role: 'admin'
        }
      })
      console.log('✅ Admin criado!')
    }

    console.log('')
    console.log('🎉 Configuração concluída!')
    console.log(`📧 Email configurado: ${adminEmail}`)
    console.log('🔒 Password hash configurado com segurança')
    console.log('')

  } catch (error) {
    console.error('❌ Erro ao configurar admin:', error)
    throw error
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })