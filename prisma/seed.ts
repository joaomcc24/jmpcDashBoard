import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Configurando utilizador administrador...')

  try {
    // Hash da password com alta segurança (12 rounds)
    const adminPasswordHash = await bcrypt.hash('Jmpc132546', 12)
    
    // Verificar se já existe um admin
    const existingAdmin = await prisma.user.findUnique({
      where: {
        email: 'geral@jmpcsat.pt'
      }
    })

    if (existingAdmin) {
      console.log('ℹ️  Admin já existe, atualizando password...')
      await prisma.user.update({
        where: {
          email: 'geral@jmpcsat.pt'
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
          email: 'geral@jmpcsat.pt',
          password: adminPasswordHash,
          name: 'Administrador JMPC',
          role: 'admin'
        }
      })
      console.log('✅ Admin criado!')
    }

    console.log('')
    console.log('🎉 Configuração concluída!')
    console.log('')
    console.log('📋 Credenciais de acesso:')
    console.log('   Email: geral@jmpcsat.pt')
    console.log('   Password: Jmpc132546')
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