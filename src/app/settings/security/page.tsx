"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Shield, Lock, Smartphone, Eye, AlertTriangle, CheckCircle, Clock, MapPin } from "lucide-react"
import { Sidebar } from "@/components/layout/Sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export default function SecurityPage() {
  const router = useRouter()
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false)
  const [sessionTimeout, setSessionTimeout] = useState("4h")
  const [loginNotifications, setLoginNotifications] = useState(true)

  // Dados mock para sessões ativas
  const activeSessions = [
    {
      id: 1,
      device: "Windows PC - Chrome",
      location: "Lisboa, Portugal",
      ip: "192.168.1.100",
      lastActive: "Há 5 minutos",
      current: true
    },
    {
      id: 2,
      device: "iPhone - Safari",
      location: "Porto, Portugal", 
      ip: "192.168.1.101",
      lastActive: "Há 2 horas",
      current: false
    }
  ]

  // Dados mock para logs de acesso
  const accessLogs = [
    {
      id: 1,
      action: "Login bem-sucedido",
      device: "Windows PC - Chrome",
      ip: "192.168.1.100",
      location: "Lisboa, Portugal",
      timestamp: "2024-01-15 14:30:25",
      status: "success"
    },
    {
      id: 2,
      action: "Tentativa de login falhada",
      device: "Desconhecido",
      ip: "203.0.113.1",
      location: "Localização desconhecida",
      timestamp: "2024-01-15 10:15:10",
      status: "failed"
    },
    {
      id: 3,
      action: "Logout",
      device: "iPhone - Safari",
      ip: "192.168.1.101",
      location: "Porto, Portugal",
      timestamp: "2024-01-14 18:45:30",
      status: "info"
    }
  ]

  const handleToggle2FA = () => {
    if (twoFactorEnabled) {
      if (confirm("Tem a certeza que pretende desativar a autenticação de dois fatores? Isto reduzirá a segurança da sua conta.")) {
        setTwoFactorEnabled(false)
        alert("Autenticação de dois fatores desativada.")
      }
    } else {
      // Em uma aplicação real, aqui mostraria um modal para configurar 2FA
      alert("Para ativar a autenticação de dois fatores, será necessário configurar uma aplicação autenticadora.")
      setTwoFactorEnabled(true)
    }
  }

  const handleRevokeSession = (sessionId: number) => {
    if (confirm("Tem a certeza que pretende terminar esta sessão?")) {
      console.log("Sessão revogada:", sessionId)
      alert("Sessão terminada com sucesso.")
    }
  }

  const handleRevokeAllSessions = () => {
    if (confirm("Tem a certeza que pretende terminar todas as outras sessões? Isto irá desconectar todos os outros dispositivos.")) {
      console.log("Todas as sessões foram revogadas")
      alert("Todas as outras sessões foram terminadas.")
    }
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
            <Shield className="h-5 w-5 text-green-600" />
            <h1 className="text-lg font-semibold">Segurança</h1>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-4 sm:p-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Estado de Segurança */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Estado de Segurança
                </CardTitle>
                <CardDescription>
                  Resumo das suas configurações de segurança atuais.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium text-green-900">Palavra-passe Forte</p>
                      <p className="text-sm text-green-700">Configurada recentemente</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                    <AlertTriangle className="h-5 w-5 text-yellow-600" />
                    <div>
                      <p className="font-medium text-yellow-900">2FA Opcional</p>
                      <p className="text-sm text-yellow-700">Recomendamos ativar</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <Eye className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-blue-900">Logs Ativos</p>
                      <p className="text-sm text-blue-700">Monitorizando acessos</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Autenticação */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5" />
                  Autenticação
                </CardTitle>
                <CardDescription>
                  Configure as opções de autenticação e segurança da conta.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Palavra-passe */}
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Palavra-passe</h4>
                    <p className="text-sm text-gray-600">Última alteração há 30 dias</p>
                  </div>
                  <Button 
                    variant="outline" 
                    onClick={() => router.push('/settings/change-password')}
                  >
                    Alterar
                  </Button>
                </div>

                {/* Autenticação de dois fatores */}
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium flex items-center gap-2">
                      <Smartphone className="h-4 w-4" />
                      Autenticação de Dois Fatores
                    </h4>
                    <p className="text-sm text-gray-600">
                      {twoFactorEnabled 
                        ? "Proteção adicional ativada" 
                        : "Adicione uma camada extra de segurança"
                      }
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={twoFactorEnabled ? "default" : "secondary"}>
                      {twoFactorEnabled ? "Ativo" : "Inativo"}
                    </Badge>
                    <Button 
                      variant={twoFactorEnabled ? "destructive" : "default"}
                      onClick={handleToggle2FA}
                    >
                      {twoFactorEnabled ? "Desativar" : "Ativar"}
                    </Button>
                  </div>
                </div>

                {/* Timeout de sessão */}
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Timeout de Sessão
                    </h4>
                    <p className="text-sm text-gray-600">Desconectar automaticamente após inatividade</p>
                  </div>
                  <select 
                    value={sessionTimeout}
                    onChange={(e) => setSessionTimeout(e.target.value)}
                    className="border rounded-md px-3 py-1 text-sm"
                  >
                    <option value="1h">1 hora</option>
                    <option value="4h">4 horas</option>
                    <option value="8h">8 horas</option>
                    <option value="24h">24 horas</option>
                  </select>
                </div>
              </CardContent>
            </Card>

            {/* Sessões Ativas */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Sessões Ativas</CardTitle>
                  <CardDescription>
                    Dispositivos atualmente ligados à sua conta.
                  </CardDescription>
                </div>
                <Button variant="outline" onClick={handleRevokeAllSessions}>
                  Terminar Todas
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activeSessions.map((session) => (
                    <div key={session.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Smartphone className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-medium">{session.device}</h4>
                            {session.current && (
                              <Badge variant="outline" className="text-xs">Atual</Badge>
                            )}
                          </div>
                          <div className="text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {session.location} • {session.ip}
                            </div>
                            <p>Ativo {session.lastActive}</p>
                          </div>
                        </div>
                      </div>
                      {!session.current && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleRevokeSession(session.id)}
                        >
                          Terminar
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Logs de Acesso */}
            <Card>
              <CardHeader>
                <CardTitle>Histórico de Acessos</CardTitle>
                <CardDescription>
                  Registo das atividades de login na sua conta.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {accessLogs.map((log) => (
                    <div key={log.id} className="flex items-center gap-3 p-3 border rounded-lg">
                      <div className={`w-2 h-2 rounded-full ${
                        log.status === 'success' ? 'bg-green-500' :
                        log.status === 'failed' ? 'bg-red-500' : 'bg-blue-500'
                      }`} />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">{log.action}</h4>
                          <span className="text-sm text-gray-500">{log.timestamp}</span>
                        </div>
                        <div className="text-sm text-gray-600">
                          {log.device} • {log.location} • {log.ip}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <Button variant="outline">Ver Mais Logs</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
