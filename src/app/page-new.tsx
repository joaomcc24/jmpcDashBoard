"use client"

import { useSession } from "next-auth/react"
import { useEffect } from "react"

export default function HomePage() {
  const { data: session, status } = useSession()

  useEffect(() => {
    if (status === "loading") return

    if (session) {
      window.location.replace("/dashboard")
    } else {
      window.location.replace("/login")  
    }
  }, [session, status])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
        <p className="mt-4 text-gray-600">A redirecionar...</p>
      </div>
    </div>
  )
}
