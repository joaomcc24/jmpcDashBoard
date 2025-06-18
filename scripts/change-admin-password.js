const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')
const readline = require('readline')

const prisma = new PrismaClient()

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer)
    })
  })
}

function askPassword(question) {
  return new Promise((resolve) => {
    process.stdout.write(question)
    process.stdin.setRawMode(true)
    process.stdin.resume()
    process.stdin.setEncoding('utf8')
    
    let password = ''
    process.stdin.on('data', (char) => {
      char = char.toString()
      
      if (char === '\n' || char === '\r' || char === '\u0004') {
        process.stdin.setRawMode(false)
        process.stdin.pause()
        console.log('')
        resolve(password)
      } else if (char === '\u0003') {
        process.exit()
      } else if (char === '\u007f') {
        if (password.length > 0) {
          password = password.slice(0, -1)
          process.stdout.write('\b \b')
        }
      } else {
        password += char
        process.stdout.write('*')
      }
    })
  })
}

async function changeAdminPassword() {
  try {
    console.log('🔐 ALTERAÇÃO SEGURA DA PASSWORD DO ADMINISTRADOR')
    console.log('='.repeat(50))
    
    // Mostrar utilizador atual
    const currentUser = await prisma.user.findUnique({
      where: { email: 'admin@jmpc.pt' },
      select: { email: true, name: true, createdAt: true }
    })
    
    if (!currentUser) {
      console.log('❌ Utilizador admin não encontrado!')
      return
    }
    
    console.log('📋 Utilizador encontrado:')
    console.log(`   Email: ${currentUser.email}`)
    console.log(`   Nome: ${currentUser.name}`)
    console.log(`   Criado em: ${currentUser.createdAt.toLocaleString()}`)
    console.log('')
    
    // Pedir nova password
    const newPassword = await askPassword('🔑 Digite a nova password (mínimo 8 caracteres): ')
    
    if (newPassword.length < 8) {
      console.log('❌ A password deve ter pelo menos 8 caracteres!')
      return
    }
    
    const confirmPassword = await askPassword('🔑 Confirme a nova password: ')
    
    if (newPassword !== confirmPassword) {
      console.log('❌ As passwords não coincidem!')
      return
    }
    
    // Hash da nova password
    console.log('🔄 A gerar hash seguro da password...')
    const saltRounds = 12 // Mais seguro que o padrão (10)
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds)
    
    // Atualizar na base de dados
    await prisma.user.update({
      where: { email: 'admin@jmpc.pt' },
      data: { 
        password: hashedPassword,
        updatedAt: new Date()
      }
    })
    
    console.log('✅ Password alterada com sucesso!')
    console.log('🔐 A nova password foi encriptada com bcrypt (salt rounds: 12)')
    console.log('⚠️  IMPORTANTE: Guarde a nova password num local seguro!')
    
  } catch (error) {
    console.error('❌ Erro ao alterar password:', error)
  } finally {
    await prisma.$disconnect()
    rl.close()
    process.exit(0)
  }
}

changeAdminPassword()
