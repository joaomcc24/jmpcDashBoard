"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Users, Wrench, Package, Settings, FileText, LogOut, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { signOut } from "next-auth/react"
import { useState } from "react"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Clientes", href: "/clients", icon: Users },
  { name: "Serviços", href: "/services", icon: Wrench },
  { name: "Inventário", href: "/inventory", icon: Package },
  { name: "Definições", href: "/settings", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleLogout = async () => {
    await signOut({ callbackUrl: '/login' })
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-0 left-0 z-50 bg-white border-b border-gray-200 w-full h-16 flex items-center px-4">
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
        >
          <Menu className="h-6 w-6" />
        </button>
        <Link href="/dashboard" className="ml-4 font-semibold text-red-600 text-xl">
          <span className="text-xl font-bold text-red-600">JMPC</span>
        </Link>
      </div>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white bg-opacity-50" onClick={closeMobileMenu} />
      )}

      {/* Desktop sidebar and mobile menu */}
      <div className={cn(
        "w-64 flex-shrink-0 border-r bg-muted/40 flex flex-col",
        "lg:relative lg:translate-x-0",
        "fixed inset-y-0 left-0 z-50 transition-transform duration-300 ease-in-out",
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        {/* Header */}
        <div
          className="flex h-16 items-center justify-between px-6 border-b border-gray-700"
          style={{ minHeight: "64px", maxHeight: "64px" }}
        >
          <Link href="/dashboard" className="font-semibold text-red-600 text-xl" onClick={closeMobileMenu}>
            <span className="text-xl font-bold text-red-600">JMPC</span>
          </Link>
          
          {/* Mobile close button */}
          <button
            onClick={closeMobileMenu}
            className="lg:hidden p-1 rounded-md text-gray-400 hover:text-gray-600"
          >
            <X className="h-6 w-6" />
          </button>
        </div>        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-3 py-4">
          <div className="mb-4">
            <p className="px-3 text-xs font-semibold uppercase tracking-wider">MENU</p>
          </div>

          {navigation.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href))

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMobileMenu}
                className={cn(
                  "group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive ? "bg-gray-800 text-white" : "hover:bg-gray-700 hover:text-white",
                )}
              >
                <item.icon
                  className={cn(
                    "mr-3 h-5 w-5 flex-shrink-0",
                    isActive ? "text-white" : "text-gray-400 group-hover:text-white",
                  )}
                />
                {item.name}
              </Link>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="px-3 py-4">
          <div className="border-t border-gray-700 pt-4">
            <button
              onClick={handleLogout}
              className="group flex w-full items-center px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-red-700 hover:text-white text-gray-400"
            >
              <LogOut className="mr-3 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-white" />
              Logout
            </button>
            <div className="mt-3">
              <p className="px-3 text-xs text-gray-400">JMPC v1.0</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
