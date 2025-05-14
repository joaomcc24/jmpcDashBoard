import { usePathname } from "next/navigation"

const pathname = usePathname()
const isActive = (path: string) => {
    if (path === '/dashboard' && pathname === '/dashboard') {
      return true
    }

    if (path !== '/dashboard' && pathname.startsWith(path)) {
      return true
    }
    return false
  }