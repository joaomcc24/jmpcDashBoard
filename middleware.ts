import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
    // Middleware adicional pode ser adicionado aqui
    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Permitir acesso às páginas públicas
        if (req.nextUrl.pathname === "/" || 
            req.nextUrl.pathname === "/login" ||
            req.nextUrl.pathname.startsWith("/api/auth")) {
          return true
        }
        // Verificar se o usuário está autenticado para páginas protegidas
        return !!token
      }
    },
    pages: {
      signIn: "/login",
    },
  }
)

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api/auth (auth endpoints)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public (public files)
     */
    "/((?!api/auth|_next/static|_next/image|favicon.ico|public).*)",
  ]
}
