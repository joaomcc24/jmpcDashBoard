"use client"

import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from "@/components/theme-provider"

interface ProvidersProps {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <SessionProvider>
      <ThemeProvider defaultTheme="system" storageKey="jmpc-ui-theme">
        {children}
      </ThemeProvider>
    </SessionProvider>
  )
}
