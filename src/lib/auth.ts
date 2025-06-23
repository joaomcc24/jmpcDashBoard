import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }        try {
          // Tentar buscar usuário na base de dados primeiro
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email
            }
          })

          if (user) {            // Verificar password com bcrypt (da base de dados)
            const isValidPassword = await bcrypt.compare(credentials.password, user.password)

            if (isValidPassword) {
              return {
                id: user.id,
                email: user.email,
                name: user.name,
                role: user.role
              }
            }
          }          // Fallback: verificar com variáveis de ambiente se não encontrou na BD
          if (credentials.email === "geral@jmpcsat.pt" && process.env.ADMIN_PASSWORD_HASH) {
            const isValidPassword = await bcrypt.compare(credentials.password, process.env.ADMIN_PASSWORD_HASH)
            
            if (isValidPassword) {
              return {
                id: "admin",
                email: "geral@jmpcsat.pt",
                name: "Administrador JMPC",
                role: "admin"
              }
            }
          }

          return null
        } catch (error) {
          console.error("Erro na autenticação:", error)
            // Fallback em caso de erro na BD - usar variáveis de ambiente
          if (credentials.email === "geral@jmpcsat.pt" && process.env.ADMIN_PASSWORD_HASH) {
            try {
              const isValidPassword = await bcrypt.compare(credentials.password, process.env.ADMIN_PASSWORD_HASH)
              
              if (isValidPassword) {
                return {
                  id: "admin",
                  email: "geral@jmpcsat.pt",
                  name: "Administrador JMPC",
                  role: "admin"
                }
              }
            } catch (fallbackError) {
              console.error("Erro no fallback de autenticação:", fallbackError)
            }
          }
          
          return null
        }
      }
    })  ],
  session: {
    strategy: "jwt" as const
  },  pages: {
    signIn: "/login"
  },
  secret: process.env.NEXTAUTH_SECRET,
  // Garantir que a URL seja válida em produção
  ...(process.env.NEXTAUTH_URL && { 
    url: process.env.NEXTAUTH_URL 
  }),
}
