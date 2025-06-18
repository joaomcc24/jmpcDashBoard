"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function HomePage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "loading") return // Still loading

    if (session) {
      // User is authenticated, redirect to dashboard
      router.push("/dashboard")
    } else {
      // User is not authenticated, redirect to login
      router.push("/login")
    }
  }, [session, status, router])

  // Show loading state while determining authentication status
  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">A carregar...</p>
        </div>
      </div>
    )
  }

  return null // This won't be shown as user will be redirected
}
