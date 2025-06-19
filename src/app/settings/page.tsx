"use client"

import { useRouter } from "next/navigation"
import { Settings, User, Shield, Database, Bell, Palette, Globe, HelpCircle } from "lucide-react"
import { Sidebar } from "@/components/layout/Sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function SettingsPage() {
  const router = useRouter()
  
  const settingsCategories = [
    {
      title: "Perfil",
      description: "Gerir informações pessoais e preferências",
      icon: User,
      color: "bg-blue-100 text-blue-600",
      items: ["Informações pessoais", "Alterar palavra-passe", "Preferências"],
      route: "/settings/profile",
      available: true
    },
    {
      title: "Segurança",
      description: "Configurações de segurança e autenticação",
      icon: Shield,
      color: "bg-green-100 text-green-600",
      items: ["Autenticação", "Sessões ativas", "Logs de acesso"],
      route: "/settings/security",
      available: true
    },
    {
      title: "Base de Dados",
      description: "Configurações e manutenção da base de dados",
      icon: Database,
      color: "bg-purple-100 text-purple-600",
      items: ["Backup", "Importar/Exportar", "Limpeza de dados"],
      route: "/settings/database",
      available: true
    },
    {
      title: "Notificações",
      description: "Gerir alertas e notificações",
      icon: Bell,
      color: "bg-yellow-100 text-yellow-600",
      items: ["Email", "Push notifications", "Lembretes"],
      route: "/settings/notifications",
      available: true
    },
    {
      title: "Aparência",
      description: "Personalizar interface e tema",
      icon: Palette,
      color: "bg-pink-100 text-pink-600",
      items: ["Tema", "Cores", "Layout"],
      route: "/settings/appearance",
      available: true
    },
    {
      title: "Sistema",
      description: "Configurações gerais do sistema",
      icon: Globe,
      color: "bg-indigo-100 text-indigo-600",
      items: ["Idioma", "Fuso horário", "Formato de data"],
      route: "/settings/system",
      available: true
    },
  ]

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-white px-6 shadow-sm">
          <div className="flex flex-1 items-center gap-2">
            <Settings className="h-6 w-6 text-blue-600" />
            <h1 className="text-xl font-semibold text-gray-900">Definições</h1>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Introdução */}
            <div className="bg-gradient-to-r from-gray-600 to-gray-700 rounded-lg p-6 text-white">
              <h2 className="text-2xl font-bold mb-2">Configurações do Sistema</h2>
              <p className="text-gray-100">Personalize e configure o sistema JMPC de acordo com as suas necessidades</p>
            </div>            {/* Categorias de Definições */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {settingsCategories.map((category) => (
                <Card 
                  key={category.title} 
                  className={`border-0 shadow-sm transition-shadow cursor-pointer ${
                    category.available ? 'hover:shadow-md' : 'opacity-50 cursor-not-allowed'
                  }`}
                  onClick={() => category.available && router.push(category.route)}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg ${category.color}`}>
                        <category.icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-lg font-semibold text-gray-900">{category.title}</CardTitle>
                    </div>
                    <p className="text-sm text-gray-600">{category.description}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2 mb-4">
                      {category.items.map((item) => (
                        <div key={item} className="text-sm text-gray-700 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                          {item}
                        </div>
                      ))}
                    </div>                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full" 
                      disabled={!category.available}
                      onClick={(e) => {
                        e.stopPropagation()
                        if (category.available) router.push(category.route)
                      }}
                    >
                      {category.available ? "Aceder" : "Em breve"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Informações do Sistema */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                  <HelpCircle className="h-5 w-5" />
                  Informações do Sistema
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm font-medium text-gray-600">Versão</p>
                    <p className="text-lg font-bold text-gray-900">1.0.0</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm font-medium text-gray-600">Última Atualização</p>
                    <p className="text-lg font-bold text-gray-900">17/06/2025</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm font-medium text-gray-600">Ambiente</p>
                    <p className="text-lg font-bold text-gray-900">Desenvolvimento</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm font-medium text-gray-600">Status</p>
                    <p className="text-lg font-bold text-green-600">Online</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ações Rápidas */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">Ações Rápidas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" disabled>
                    Exportar Dados
                  </Button>
                  <Button variant="outline" disabled>
                    Backup Sistema
                  </Button>
                  <Button variant="outline" disabled>
                    Limpar Cache
                  </Button>
                  <Button variant="outline" disabled>
                    Ver Logs
                  </Button>
                </div>
                <p className="text-sm text-gray-500 mt-3">
                  Estas funcionalidades estarão disponíveis em breve. Por agora, o sistema está em desenvolvimento.
                </p>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
