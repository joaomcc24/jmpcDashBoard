"use client"

import { redirect } from "next/navigation"
import { useEffect } from "react"

export default function DashboardRedirect() {
  useEffect(() => {
    // Redirecionar para a página principal
    redirect("/")
  }, [])

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        <p className="mt-4 text-gray-600">A redirecionar...</p>
      </div>
    </div>
  )
}