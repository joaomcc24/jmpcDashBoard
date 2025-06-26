'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export function useAuthRedirect() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'loading') return // Ainda carregando

    if (status === 'unauthenticated') {
      console.log('🔒 Usuário não autenticado, redirecionando para login')
      router.push('/login')
    }
  }, [status, router])

  return { 
    session, 
    status, 
    isAuthenticated: status === 'authenticated',
    isLoading: status === 'loading'
  }
}
