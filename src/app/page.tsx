"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function HomePage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulação de login - numa implementação real, você verificaria as credenciais
    setTimeout(() => {
      setLoading(false)
      router.push("/dashboard")
    }, 1000)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-center text-red-600">JMPC</h1>
        <p className="text-gray-600">Sistema de Gestão de Reparações</p>
      </div>
      
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow">
        <h2 className="text-xl font-semibold text-center mb-6">Acesso ao Sistema</h2>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="exemplo@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 flex justify-center"
              disabled={loading}
            >
              {loading ? (
                <span>A carregar...</span>
              ) : (
                "Entrar"
              )}
            </button>
          </div>
        </form>
      </div>
      <p className="mt-4 text-sm text-gray-600">© JMPC 2003-{new Date().getFullYear()}</p>
    </div>
  );
}