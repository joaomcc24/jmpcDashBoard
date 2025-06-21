import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
    // Verificar se a URL é válida
    try {
      const pathname = req.nextUrl.pathname
      
      // Permitir páginas públicas
      if (pathname === "/" || 
          pathname === "/login" || 
          pathname.startsWith("/api/auth") ||
          pathname.startsWith("/_next") ||
          pathname.startsWith("/favicon")) {
        return NextResponse.next()
      }

      // Verificar se há token para páginas protegidas
      const token = req.nextauth.token
      if (!token) {
        return NextResponse.redirect(new URL("/login", req.url))
      }

      return NextResponse.next()
    } catch (error) {
      console.error("Middleware error:", error)
      return NextResponse.redirect(new URL("/", req.url))
    }
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Simplificar a lógica de autorização
        const pathname = req.nextUrl.pathname
        
        // Páginas sempre permitidas
        if (pathname === "/" || 
            pathname === "/login" || 
            pathname.startsWith("/api/auth")) {
          return true
        }
        
        // Para outras páginas, verificar token
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
     * Match all request paths except:
     * - api/auth (auth endpoints)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api/auth|_next/static|_next/image|favicon.ico).*)",
  ]
}
