"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Palette, Monitor, Sun, Moon } from "lucide-react"
import { Sidebar } from "@/components/layout/Sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AppearancePage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [initialLoad, setInitialLoad] = useState(true)
  const [theme, setTheme] = useState("system")
  const [colorScheme, setColorScheme] = useState("blue")
  const [fontSize, setFontSize] = useState("medium")
  const [compactMode, setCompactMode] = useState(false)

  // Carregar configurações ao montar o componente
  useEffect(() => {
    loadSettings()
  }, [])

  const loadSettings = async () => {
    try {
      const response = await fetch('/api/settings')
      if (response.ok) {
        const settings = await response.json()
        setTheme(settings.theme || "system")
        setColorScheme(settings.colorScheme || "blue")
        setFontSize(settings.fontSize || "medium")
        setCompactMode(settings.compactMode || false)
      }
    } catch (error) {
      console.error('Erro ao carregar configurações:', error)
    } finally {
      setInitialLoad(false)
    }
  }
  const handleSave = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/settings', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          theme,
          colorScheme,
          fontSize,
          compactMode
        })
      })
      
      if (response.ok) {
        alert("Preferências de aparência guardadas com sucesso!")
      } else {
        throw new Error('Erro ao guardar configurações')
      }
    } catch (error) {
      console.error("Erro ao guardar configurações:", error)
      alert("Erro ao guardar configurações. Tente novamente.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => router.back()}
            className="gap-1 hover:bg-gray-100 hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Button>
          <div className="flex flex-1 items-center gap-2">
            <Palette className="h-5 w-5 text-blue-600" />
            <h1 className="text-lg font-semibold">Aparência</h1>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-4 sm:p-6 space-y-6">
          {/* Tema */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Monitor className="h-5 w-5" />
                Tema
              </CardTitle>
              <CardDescription>
                Escolha como pretende que a aplicação seja apresentada.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div 
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    theme === 'light' ? 'border-blue-600 bg-blue-50' : 'border-gray-200'
                  }`}
                  onClick={() => setTheme('light')}
                >
                  <div className="flex items-center justify-center mb-2">
                    <Sun className="h-6 w-6" />
                  </div>
                  <p className="text-center text-sm font-medium">Claro</p>
                </div>
                <div 
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    theme === 'dark' ? 'border-blue-600 bg-blue-50' : 'border-gray-200'
                  }`}
                  onClick={() => setTheme('dark')}
                >
                  <div className="flex items-center justify-center mb-2">
                    <Moon className="h-6 w-6" />
                  </div>
                  <p className="text-center text-sm font-medium">Escuro</p>
                </div>
                <div 
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    theme === 'system' ? 'border-blue-600 bg-blue-50' : 'border-gray-200'
                  }`}
                  onClick={() => setTheme('system')}
                >
                  <div className="flex items-center justify-center mb-2">
                    <Monitor className="h-6 w-6" />
                  </div>
                  <p className="text-center text-sm font-medium">Sistema</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Esquema de Cores */}
          <Card>
            <CardHeader>
              <CardTitle>Esquema de Cores</CardTitle>
              <CardDescription>
                Personalize as cores principais da interface.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-5 gap-3">
                {[
                  { name: 'Azul', value: 'blue', color: 'bg-blue-600' },
                  { name: 'Verde', value: 'green', color: 'bg-green-600' },
                  { name: 'Roxo', value: 'purple', color: 'bg-purple-600' },
                  { name: 'Vermelho', value: 'red', color: 'bg-red-600' },
                  { name: 'Laranja', value: 'orange', color: 'bg-orange-600' }
                ].map((color) => (
                  <div
                    key={color.value}
                    className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                      colorScheme === color.value ? 'border-gray-800 ring-2 ring-gray-800' : 'border-gray-200'
                    }`}
                    onClick={() => setColorScheme(color.value)}
                  >
                    <div className={`w-full h-8 rounded ${color.color} mb-2`}></div>
                    <p className="text-center text-xs">{color.name}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Tipografia */}
          <Card>
            <CardHeader>
              <CardTitle>Tipografia</CardTitle>
              <CardDescription>
                Ajuste o tamanho do texto para melhor legibilidade.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Tamanho da Fonte</label>
                <Select value={fontSize} onValueChange={setFontSize}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Pequeno</SelectItem>
                    <SelectItem value="medium">Médio</SelectItem>
                    <SelectItem value="large">Grande</SelectItem>
                    <SelectItem value="extra-large">Extra Grande</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Layout */}
          <Card>
            <CardHeader>
              <CardTitle>Layout</CardTitle>
              <CardDescription>
                Configure a densidade e espaçamento da interface.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Modo Compacto</p>
                  <p className="text-sm text-gray-600">Reduz o espaçamento entre elementos</p>
                </div>
                <Button
                  variant={compactMode ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCompactMode(!compactMode)}
                >
                  {compactMode ? "Ativado" : "Desativado"}
                </Button>
              </div>
            </CardContent>
          </Card>

          <Separator />

          {/* Botões de Ação */}
          <div className="flex justify-end gap-3">
            <Button variant="outline" onClick={() => router.back()}>
              Cancelar
            </Button>            <Button onClick={handleSave} disabled={loading} className="bg-blue-600 hover:bg-blue-700">
              {loading ? "A guardar..." : "Guardar Alterações"}
            </Button>
          </div>
        </main>
      </div>
    </div>
  )
}
