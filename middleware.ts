import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { withAuth } from 'next-auth/middleware'

export default withAuth(
  function middleware(request) {
    console.log('🔐 Middleware executando para:', request.nextUrl.pathname)
    console.log('✅ Usuário autenticado, permitindo acesso')
    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const { pathname } = req.nextUrl
        
        console.log('🔍 Verificação de autorização para:', pathname)
        console.log('🔑 Token presente:', !!token)
        
        // Se não há token, negar acesso (será redirecionado para login)
        if (!token) {
          console.log('❌ Acesso negado - sem token válido')
          return false
        }
        
        console.log('✅ Acesso autorizado')
        return true
      },
    },
    pages: {
      signIn: '/login',
    },
  }
)

export const config = {
  matcher: [
    /*
     * Corresponde a todos os caminhos de requisição exceto aqueles que começam com:
     * - api/auth (rotas da API NextAuth)
     * - _next/static (arquivos estáticos)
     * - _next/image (arquivos de otimização de imagem)
     * - favicon.ico (arquivo favicon)
     * - login (página de login)
     * - public (arquivos públicos)
     */
    '/((?!api/auth|_next/static|_next/image|favicon.ico|login|public).*)',
  ],
}
