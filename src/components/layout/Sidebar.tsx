"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Package, Users, ShoppingCart, Settings } from "lucide-react"

export function Sidebar() {
  // hook to get url path
  const pathname = usePathname()
  
  const isActive = (path: string) => {
    if (path === '/dashboard' && pathname === '/dashboard') {
      return true
    }
    // Para outras páginas, verifica se o pathname começa com o path
    // Ex: /services/123 deve ativar o item "Serviços"
    if (path !== '/dashboard' && pathname.startsWith(path)) {
      return true
    }
    return false
  }

  return (
    <div className="w-64 flex-shrink-0 border-r bg-muted/40 flex flex-col">
      {/* Logo*/}
      <div className="h-14 border-b flex items-center px-4">
        <Link href="/dashboard" className="font-semibold text-red-600 text-xl">
          JMPC
        </Link>
      </div>
      
      {/* Menu */}
      <div className="flex-1 py-4">
        <div className="px-4 mb-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            MENU
          </p>
        </div>
        
        <nav className="space-y-1 px-2">
          {/* Dashboard */}
          <Link
            href="/dashboard"
            className={`flex items-center px-2 py-2 text-sm rounded-md ${
              isActive('/dashboard')
                ? "bg-blue-50 text-blue-600 font-medium"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <Home className={`mr-3 h-5 w-5 ${
              isActive('/dashboard') ? "text-blue-500" : "text-gray-400"
            }`} />
            Dashboard
          </Link>
          
          {/* Clientes */}
          <Link
            href="/clients"
            className={`flex items-center px-2 py-2 text-sm rounded-md ${
              isActive('/clients')
                ? "bg-blue-50 text-blue-600 font-medium"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <Users className={`mr-3 h-5 w-5 ${
              isActive('/clients') ? "text-blue-500" : "text-gray-400"
            }`} />
            Clientes
          </Link>
          
          {/* Serviços */}
          <Link
            href="/services"
            className={`flex items-center px-2 py-2 text-sm rounded-md ${
              isActive('/services')
                ? "bg-blue-50 text-blue-600 font-medium"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <ShoppingCart className={`mr-3 h-5 w-5 ${
              isActive('/services') ? "text-blue-500" : "text-gray-400"
            }`} />
            Serviços
          </Link>
          
          {/* Inventário */}
          <Link
            href="/inventory"
            className={`flex items-center px-2 py-2 text-sm rounded-md ${
              isActive('/inventory')
                ? "bg-blue-50 text-blue-600 font-medium"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <Package className={`mr-3 h-5 w-5 ${
              isActive('/inventory') ? "text-blue-500" : "text-gray-400"
            }`} />
            Inventário
          </Link>
        </nav>
        
        {/* Definições */}
        <div className="px-4 mt-6 mb-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            CONFIGURAÇÕES
          </p>
        </div>
        
        <nav className="space-y-1 px-2">
          <Link
            href="/settings"
            className={`flex items-center px-2 py-2 text-sm rounded-md ${
              isActive('/settings')
                ? "bg-blue-50 text-blue-600 font-medium"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <Settings className={`mr-3 h-5 w-5 ${
              isActive('/settings') ? "text-blue-500" : "text-gray-400"
            }`} />
            Definições
          </Link>
        </nav>
      </div>
    </div>
  )
}