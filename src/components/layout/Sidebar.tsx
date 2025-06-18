"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Users, Wrench, Package, Settings, FileText, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"
import { signOut } from "next-auth/react"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Clientes", href: "/clients", icon: Users },
  { name: "Serviços", href: "/services", icon: Wrench },
  { name: "Inventário", href: "/inventory", icon: Package },
  { name: "Definições", href: "/settings", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  const handleLogout = async () => {
    await signOut({ callbackUrl: '/login' })
  }

  return (
    <div className="w-64 flex-shrink-0 border-r bg-muted/40 flex flex-col">
      <div
        className="flex h-16 items-center px-6 border-b border-gray-700"
        style={{ minHeight: "64px", maxHeight: "64px" }}
      >
        <Link href="/dashboard" className="font-semibold text-red-600 text-xl">
          <span className="text-xl font-bold text-red-600 ">JMPC</span>
        </Link>
      </div>

      {/* Navigation */}
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
      </nav>      {/* Footer */}
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
  )
}
