"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Settings, HardDrive, Wifi, Monitor, RefreshCw, Trash2 } from "lucide-react"
import { Sidebar } from "@/components/layout/Sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SystemPage() {
  const router = useRouter()
  const [autoUpdate, setAutoUpdate] = useState(true)
  const [cacheSize, setCacheSize] = useState("500")
  const [logLevel, setLogLevel] = useState("info")
  const [maintenanceMode, setMaintenanceMode] = useState(false)

  const handleClearCache = () => {
    // Em uma aplicação real, aqui limparia a cache
    console.log("Cache limpa")
    alert("Cache limpa com sucesso!")
  }

  const handleClearLogs = () => {
    // Em uma aplicação real, aqui limparia os logs
    console.log("Logs limpos")
    alert("Logs limpos com sucesso!")
  }

  const handleSystemRestart = () => {
    if (confirm("Tem a certeza que pretende reiniciar o sistema? Isto pode interromper as operações em curso.")) {
      console.log("Sistema a reiniciar...")
      alert("Sistema será reiniciado em breve...")
    }
  }

  const handleSave = () => {
    // Em uma aplicação real, aqui salvaria as configurações do sistema
    console.log("Configurações do sistema guardadas:", {
      autoUpdate,
      cacheSize,
      logLevel,
      maintenanceMode
    })
    alert("Configurações do sistema guardadas com sucesso!")
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
            <Settings className="h-5 w-5 text-blue-600" />
            <h1 className="text-lg font-semibold">Sistema</h1>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-4 sm:p-6 space-y-6">
          {/* Atualizações */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <RefreshCw className="h-5 w-5" />
                Atualizações
              </CardTitle>
              <CardDescription>
                Configure como o sistema gere as atualizações.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Atualizações Automáticas</p>
                  <p className="text-sm text-gray-600">Instalar atualizações automaticamente</p>
                </div>
                <Button
                  variant={autoUpdate ? "default" : "outline"}
                  size="sm"
                  onClick={() => setAutoUpdate(!autoUpdate)}
                >
                  {autoUpdate ? "Ativado" : "Desativado"}
                </Button>
              </div>
              <div className="pt-4">
                <Button variant="outline" className="w-full">
                  Verificar Atualizações Agora
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Performance */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Monitor className="h-5 w-5" />
                Performance
              </CardTitle>
              <CardDescription>
                Optimize o desempenho do sistema.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Tamanho da Cache (MB)</label>
                <Select value={cacheSize} onValueChange={setCacheSize}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="100">100 MB</SelectItem>
                    <SelectItem value="250">250 MB</SelectItem>
                    <SelectItem value="500">500 MB</SelectItem>
                    <SelectItem value="1000">1 GB</SelectItem>
                    <SelectItem value="2000">2 GB</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="pt-2">
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={handleClearCache}
                >
                  <HardDrive className="h-4 w-4 mr-2" />
                  Limpar Cache
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Logs e Diagnósticos */}
          <Card>
            <CardHeader>
              <CardTitle>Logs e Diagnósticos</CardTitle>
              <CardDescription>
                Configure o nível de detalhes dos logs do sistema.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Nível de Log</label>
                <Select value={logLevel} onValueChange={setLogLevel}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="error">Apenas Erros</SelectItem>
                    <SelectItem value="warn">Avisos</SelectItem>
                    <SelectItem value="info">Informação</SelectItem>
                    <SelectItem value="debug">Debug</SelectItem>
                    <SelectItem value="verbose">Detalhado</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <Button variant="outline" onClick={handleClearLogs}>
                  <Trash2 className="h-4 w-4 mr-2" />
                  Limpar Logs
                </Button>
                <Button variant="outline">
                  Descarregar Logs
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Manutenção */}
          <Card>
            <CardHeader>
              <CardTitle>Manutenção</CardTitle>
              <CardDescription>
                Operações de manutenção do sistema.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Modo de Manutenção</p>
                  <p className="text-sm text-gray-600">Impede novos acessos ao sistema</p>
                </div>
                <Button
                  variant={maintenanceMode ? "destructive" : "outline"}
                  size="sm"
                  onClick={() => setMaintenanceMode(!maintenanceMode)}
                >
                  {maintenanceMode ? "Ativado" : "Desativado"}
                </Button>
              </div>
              <Separator />
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={handleSystemRestart}
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Reiniciar Sistema
                </Button>
                <Button variant="destructive" className="w-full">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Reset Factory
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Informações do Sistema */}
          <Card>
            <CardHeader>
              <CardTitle>Informações do Sistema</CardTitle>
              <CardDescription>
                Detalhes sobre a versão e estado atual do sistema.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium text-gray-600">Versão</p>
                  <p>1.2.3</p>
                </div>
                <div>
                  <p className="font-medium text-gray-600">Build</p>
                  <p>2024.12.18</p>
                </div>
                <div>
                  <p className="font-medium text-gray-600">Tempo Ativo</p>
                  <p>3 dias, 14h 25m</p>
                </div>
                <div>
                  <p className="font-medium text-gray-600">Estado</p>
                  <p className="text-green-600">Operacional</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Separator />

          {/* Botões de Ação */}
          <div className="flex justify-end gap-3">
            <Button variant="outline" onClick={() => router.back()}>
              Cancelar
            </Button>
            <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">
              Guardar Alterações
            </Button>
          </div>
        </main>
      </div>
    </div>
  )
}
