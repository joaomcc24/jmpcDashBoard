"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Database, Download, Upload, Trash2, RefreshCw, HardDrive, Archive, AlertTriangle, CheckCircle } from "lucide-react"
import { Sidebar } from "@/components/layout/Sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export default function DatabasePage() {
  const router = useRouter()
  const [loading, setLoading] = useState<string | null>(null)

  // Dados mock da base de dados
  const databaseInfo = {
    name: "jmpc_dashboard",
    size: "247.8 MB",
    tables: 12,
    records: 15847,
    lastBackup: "2024-01-15 03:00:00",
    version: "PostgreSQL 15.3",
    status: "Healthy"
  }

  const backupHistory = [
    {
      id: 1,
      filename: "backup_2024-01-15_030000.sql",
      size: "245.2 MB",
      date: "2024-01-15 03:00:00",
      type: "Automático",
      status: "Completo"
    },
    {
      id: 2,
      filename: "backup_2024-01-14_030000.sql",
      size: "243.8 MB",
      date: "2024-01-14 03:00:00",
      type: "Automático",
      status: "Completo"
    },
    {
      id: 3,
      filename: "backup_manual_2024-01-13_150000.sql",
      size: "242.1 MB",
      date: "2024-01-13 15:00:00",
      type: "Manual",
      status: "Completo"
    }
  ]

  const maintenanceTasks = [
    {
      id: 1,
      name: "Otimização de Índices",
      description: "Reorganizar e otimizar índices da base de dados",
      lastRun: "2024-01-10",
      frequency: "Semanal",
      status: "Pendente"
    },
    {
      id: 2,
      name: "Limpeza de Logs",
      description: "Remover logs antigos com mais de 90 dias",
      lastRun: "2024-01-14",
      frequency: "Mensal",
      status: "Concluído"
    },
    {
      id: 3,
      name: "Análise de Performance",
      description: "Verificar queries lentas e otimização",
      lastRun: "2024-01-12",
      frequency: "Quinzenal",
      status: "Em Progresso"
    }
  ]

  const handleBackup = async () => {
    setLoading("backup")
    try {
      // Simulação de backup
      await new Promise(resolve => setTimeout(resolve, 3000))
      console.log("Backup criado com sucesso")
      alert("Backup criado com sucesso!")
    } catch (error) {
      console.error("Erro ao criar backup:", error)
      alert("Erro ao criar backup. Tente novamente.")
    } finally {
      setLoading(null)
    }
  }

  const handleRestore = () => {
    if (confirm("ATENÇÃO: Restaurar um backup irá substituir todos os dados atuais. Esta ação não pode ser desfeita. Tem a certeza?")) {
      alert("Funcionalidade de restore será implementada com medidas de segurança adicionais.")
    }
  }

  const handleExport = async () => {
    setLoading("export")
    try {
      // Simulação de exportação
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log("Dados exportados com sucesso")
      alert("Dados exportados com sucesso! O ficheiro será descarregado em breve.")
    } catch (error) {
      console.error("Erro ao exportar dados:", error)
      alert("Erro ao exportar dados. Tente novamente.")
    } finally {
      setLoading(null)
    }
  }

  const handleImport = () => {
    alert("Para importar dados, por favor contacte o administrador do sistema por questões de segurança.")
  }

  const handleCleanup = async () => {
    if (confirm("Esta operação irá limpar dados temporários e otimizar a base de dados. Continuar?")) {
      setLoading("cleanup")
      try {
        // Simulação de limpeza
        await new Promise(resolve => setTimeout(resolve, 2500))
        console.log("Limpeza concluída")
        alert("Limpeza da base de dados concluída com sucesso!")
      } catch (error) {
        console.error("Erro na limpeza:", error)
        alert("Erro na limpeza. Tente novamente.")
      } finally {
        setLoading(null)
      }
    }
  }

  const handleOptimize = async () => {
    setLoading("optimize")
    try {
      // Simulação de otimização
      await new Promise(resolve => setTimeout(resolve, 4000))
      console.log("Otimização concluída")
      alert("Otimização da base de dados concluída com sucesso!")
    } catch (error) {
      console.error("Erro na otimização:", error)
      alert("Erro na otimização. Tente novamente.")
    } finally {
      setLoading(null)
    }
  }

  const downloadBackup = (filename: string) => {
    console.log("A descarregar backup:", filename)
    alert(`Backup ${filename} será descarregado em breve.`)
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-white px-4 sm:px-6 shadow-sm">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => router.back()}
            className="gap-1 hover:bg-gray-100"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Button>
          <div className="flex flex-1 items-center gap-2">
            <Database className="h-5 w-5 text-purple-600" />
            <h1 className="text-lg font-semibold">Base de Dados</h1>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-4 sm:p-6">
          <div className="max-w-6xl mx-auto space-y-6">
            {/* Informações da Base de Dados */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HardDrive className="h-5 w-5" />
                  Informações da Base de Dados
                </CardTitle>
                <CardDescription>
                  Estado atual e estatísticas da base de dados do sistema.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Database className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-600">Nome</p>
                    <p className="text-lg font-bold text-gray-900">{databaseInfo.name}</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <HardDrive className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-600">Tamanho</p>
                    <p className="text-lg font-bold text-gray-900">{databaseInfo.size}</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <Archive className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-600">Tabelas</p>
                    <p className="text-lg font-bold text-gray-900">{databaseInfo.tables}</p>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <CheckCircle className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-600">Registos</p>
                    <p className="text-lg font-bold text-gray-900">{databaseInfo.records.toLocaleString()}</p>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-3">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Versão</p>
                    <p className="font-semibold">{databaseInfo.version}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Último Backup</p>
                    <p className="font-semibold">{databaseInfo.lastBackup}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Status</p>
                    <Badge variant="default" className="bg-green-100 text-green-800">
                      {databaseInfo.status}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ações de Backup e Restore */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Archive className="h-5 w-5" />
                  Backup e Restore
                </CardTitle>
                <CardDescription>
                  Criar e gerir backups da base de dados.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <Button 
                    onClick={handleBackup} 
                    disabled={loading === "backup"}
                    className="gap-2"
                  >
                    <Download className="h-4 w-4" />
                    {loading === "backup" ? "A criar backup..." : "Criar Backup"}
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={handleRestore}
                    className="gap-2"
                  >
                    <Upload className="h-4 w-4" />
                    Restaurar Backup
                  </Button>
                </div>
                
                <Separator />
                
                {/* Histórico de Backups */}
                <div>
                  <h4 className="font-medium mb-3">Histórico de Backups</h4>
                  <div className="space-y-2">
                    {backupHistory.map((backup) => (
                      <div key={backup.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <Archive className="h-4 w-4 text-gray-400" />
                          <div>
                            <p className="font-medium text-sm">{backup.filename}</p>
                            <p className="text-xs text-gray-600">
                              {backup.date} • {backup.size} • {backup.type}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            {backup.status}
                          </Badge>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => downloadBackup(backup.filename)}
                          >
                            <Download className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Importar/Exportar */}
            <Card>
              <CardHeader>
                <CardTitle>Importar/Exportar Dados</CardTitle>
                <CardDescription>
                  Transferir dados para/de formatos externos.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <Button 
                    variant="outline" 
                    onClick={handleExport}
                    disabled={loading === "export"}
                    className="gap-2"
                  >
                    <Download className="h-4 w-4" />
                    {loading === "export" ? "A exportar..." : "Exportar Dados"}
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={handleImport}
                    className="gap-2"
                  >
                    <Upload className="h-4 w-4" />
                    Importar Dados
                  </Button>
                </div>
                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-yellow-800">Importante</p>
                      <p className="text-yellow-700">
                        As operações de importação requerem aprovação do administrador por questões de segurança.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Manutenção */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <RefreshCw className="h-5 w-5" />
                  Manutenção da Base de Dados
                </CardTitle>
                <CardDescription>
                  Ferramentas de otimização e limpeza.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Ações Rápidas */}
                <div className="grid gap-4 md:grid-cols-3">
                  <Button 
                    variant="outline" 
                    onClick={handleOptimize}
                    disabled={loading === "optimize"}
                    className="gap-2"
                  >
                    <RefreshCw className="h-4 w-4" />
                    {loading === "optimize" ? "A otimizar..." : "Otimizar"}
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={handleCleanup}
                    disabled={loading === "cleanup"}
                    className="gap-2"
                  >
                    <Trash2 className="h-4 w-4" />
                    {loading === "cleanup" ? "A limpar..." : "Limpar Cache"}
                  </Button>
                  <Button variant="outline" disabled className="gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Verificar Integridade
                  </Button>
                </div>

                <Separator />

                {/* Tarefas de Manutenção */}
                <div>
                  <h4 className="font-medium mb-3">Tarefas de Manutenção Programadas</h4>
                  <div className="space-y-3">
                    {maintenanceTasks.map((task) => (
                      <div key={task.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h5 className="font-medium">{task.name}</h5>
                          <p className="text-sm text-gray-600">{task.description}</p>
                          <div className="flex items-center gap-4 mt-1 text-xs text-gray-500">
                            <span>Última execução: {task.lastRun}</span>
                            <span>Frequência: {task.frequency}</span>
                          </div>
                        </div>
                        <Badge 
                          variant={
                            task.status === "Concluído" ? "default" :
                            task.status === "Em Progresso" ? "secondary" : "outline"
                          }
                        >
                          {task.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
