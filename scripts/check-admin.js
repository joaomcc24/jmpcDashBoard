const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function checkAdmin() {
  try {
    console.log('🔍 A verificar utilizador admin...')
    
    // Verificar se a tabela User existe
    const users = await prisma.user.findMany()
    console.log(`📊 Total de utilizadores na BD: ${users.length}`)
    
    if (users.length === 0) {
      console.log('❌ Nenhum utilizador encontrado!')
      console.log('💡 Execute: node scripts/create-admin.js')
      return
    }
    
    // Procurar utilizador admin
    const admin = await prisma.user.findUnique({
      where: { email: 'admin@jmpc.pt' }
    })
    
    if (admin) {
      console.log('✅ Utilizador admin encontrado:')
      console.log(`   📧 Email: ${admin.email}`)
      console.log(`   👤 Nome: ${admin.name}`)
      console.log(`   🔑 Role: ${admin.role}`)
      console.log(`   📅 Criado: ${admin.createdAt}`)
      console.log(`   🔒 Password hash: ${admin.password.substring(0, 20)}...`)
    } else {
      console.log('❌ Utilizador admin@jmpc.pt NÃO encontrado!')
      console.log('💡 Execute: node scripts/create-admin.js')
    }
    
    // Listar todos os utilizadores
    console.log('\n📋 Todos os utilizadores:')
    users.forEach((user, index) => {
      console.log(`   ${index + 1}. ${user.email} (${user.name})`)
    })
    
  } catch (error) {
    console.error('❌ Erro:', error.message)
    
    if (error.code === 'P2021') {
      console.log('💡 A tabela "User" não existe. Execute: npx prisma db push')
    }
  } finally {
    await prisma.$disconnect()
  }
}

checkAdmin()
