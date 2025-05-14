import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Para implementações reais, aqui você verificaria autenticação com tokens/cookies
  
  // Redirecionar da raiz para o dashboard (temporário até implementar autenticação real)
  if (request.nextUrl.pathname === '/') {
    // Quando você implementar autenticação, esta verificação deve ser baseada no status de login
    // Exemplo: const isLoggedIn = !!request.cookies.get('auth_token');
    const isLoggedIn = false; // Após autenticar, isso seria true
    
    if (isLoggedIn) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  }

  // Proteger rotas autenticadas
  if (
    request.nextUrl.pathname.startsWith('/dashboard') ||
    request.nextUrl.pathname.startsWith('/clients') ||
    request.nextUrl.pathname.startsWith('/services') ||
    request.nextUrl.pathname.startsWith('/inventory') ||
    request.nextUrl.pathname.startsWith('/settings')
  ) {
    // Verificar autenticação seria feito aqui
    // const isAuthenticated = !!request.cookies.get('auth_token');
    const isAuthenticated = true; // Temporário - para facilitar o desenvolvimento
    
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};