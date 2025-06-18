const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function updateAdminEmail() {
  try {
    console.log('🔄 A atualizar email do administrador...')
    
    const updatedUser = await prisma.user.update({
      where: { email: 'admin@jmpc.com' },
      data: { email: 'admin@jmpc.pt' }
    })
    
    console.log('✅ Email atualizado com sucesso!')
    console.log(`📧 Novo email: ${updatedUser.email}`)
    console.log('🔑 Password permanece: admin123456')
    
  } catch (error) {
    console.error('❌ Erro ao atualizar email:', error)
  } finally {
    await prisma.$disconnect()
  }
}

updateAdminEmail()
