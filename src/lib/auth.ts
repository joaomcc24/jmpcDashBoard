import CredentialsProvider from "next-auth/providers/credentials"
// import bcrypt from "bcryptjs"
// import { PrismaClient } from "@prisma/client"

// const prisma = new PrismaClient()

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }        // Credenciais de login personalizáveis
        try {
          // ⚠️ TROCAR ESTAS CREDENCIAIS AQUI:
          if (credentials.email === "admin@jmpc.pt" && credentials.password === "admin123456") {
            return {
              id: "1",
              email: "admin@jmpc.pt",        // ← Trocar email aqui
              name: "Administrador JMPC",    // ← Trocar nome aqui  
              role: "admin"
            }
          }
          return null
        } catch (error) {
          console.error("Erro na autenticação:", error)
          return null
        }
      }
    })  ],
  session: {
    strategy: "jwt" as const
  },
  pages: {
    signIn: "/login"
  },
  secret: process.env.NEXTAUTH_SECRET,
}
