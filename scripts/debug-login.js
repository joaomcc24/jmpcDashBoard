const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

async function debugLogin() {
  try {
    console.log('🔍 DEBUG DO LOGIN')
    console.log('='.repeat(50))
    
    // Listar todos os utilizadores
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        password: true,
        createdAt: true
      }
    })
    
    console.log(`📊 Total de utilizadores: ${users.length}`)
    
    if (users.length === 0) {
      console.log('❌ Nenhum utilizador encontrado!')
      console.log('💡 Execute: node scripts/create-admin.js')
      return
    }
    
    users.forEach((user, index) => {
      console.log(`\n👤 Utilizador ${index + 1}:`)
      console.log(`   ID: ${user.id}`)
      console.log(`   Email: "${user.email}"`)
      console.log(`   Nome: ${user.name}`)
      console.log(`   Password Hash: ${user.password.substring(0, 20)}...`)
      console.log(`   Criado em: ${user.createdAt}`)
    })
    
    // Testar autenticação com as credenciais que está a usar
    const testEmail = 'admin@jmpc.pt'
    const testPassword = 'admin123456'
    
    console.log('\n🧪 TESTE DE AUTENTICAÇÃO')
    console.log(`Email de teste: "${testEmail}"`)
    console.log(`Password de teste: "${testPassword}"`)
    
    const user = await prisma.user.findUnique({
      where: { email: testEmail }
    })
    
    if (!user) {
      console.log('❌ Utilizador não encontrado com este email')
      
      // Verificar se existe com email similar
      const similarUsers = await prisma.user.findMany({
        where: {
          email: {
            contains: 'admin'
          }
        }
      })
      
      if (similarUsers.length > 0) {
        console.log('\n🔍 Utilizadores similares encontrados:')
        similarUsers.forEach(u => {
          console.log(`   - "${u.email}"`)
        })
      }
      
      return
    }
    
    console.log('✅ Utilizador encontrado!')
    
    // Testar password
    const isPasswordValid = await bcrypt.compare(testPassword, user.password)
    
    if (isPasswordValid) {
      console.log('✅ Password está correta!')
      console.log('🎯 Login deve funcionar com:')
      console.log(`   Email: ${testEmail}`)
      console.log(`   Password: ${testPassword}`)
    } else {
      console.log('❌ Password incorreta!')
      console.log('🔧 Vou resetar a password...')
      
      // Resetar password
      const newHashedPassword = await bcrypt.hash(testPassword, 12)
      
      await prisma.user.update({
        where: { email: testEmail },
        data: { password: newHashedPassword }
      })
      
      console.log('✅ Password resetada!')
      console.log('🎯 Agora deve funcionar com:')
      console.log(`   Email: ${testEmail}`)
      console.log(`   Password: ${testPassword}`)
    }
    
  } catch (error) {
    console.error('❌ Erro no debug:', error)
  } finally {
    await prisma.$disconnect()
  }
}

debugLogin()
