"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Bell, Mail, Smartphone, Clock, AlertTriangle, CheckCircle, Settings } from "lucide-react"
import { Sidebar } from "@/components/layout/Sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

interface NotificationSettings {
  email: {
    newService: boolean
    serviceUpdates: boolean
    clientMessages: boolean
    systemAlerts: boolean
    dailyReport: boolean
    weeklyReport: boolean
  }
  push: {
    urgentServices: boolean
    serviceCompleted: boolean
    clientNotifications: boolean
    systemAlerts: boolean
    reminders: boolean
  }
  preferences: {
    emailFrequency: string
    quietHours: boolean
    quietStart: string
    quietEnd: string
    weekendNotifications: boolean
  }
}

interface RecentNotification {
  id: string
  type: string
  title: string
  message: string
  createdAt: string
  read: boolean
}

export default function NotificationsPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [initialLoad, setInitialLoad] = useState(true)
  const [recentNotifications, setRecentNotifications] = useState<RecentNotification[]>([])
  
  const [notifications, setNotifications] = useState<NotificationSettings>({
    email: {
      newService: true,
      serviceUpdates: true,
      clientMessages: false,
      systemAlerts: true,
      dailyReport: false,
      weeklyReport: true
    },
    push: {
      urgentServices: true,
      serviceCompleted: false,
      clientNotifications: true,
      systemAlerts: true,
      reminders: true
    },
    preferences: {
      emailFrequency: "immediate",
      quietHours: true,
      quietStart: "22:00",
      quietEnd: "08:00",
      weekendNotifications: false
    }
  })

  // Carregar dados ao montar o componente
  useEffect(() => {
    loadNotificationsData()
  }, [])

  const loadNotificationsData = async () => {
    try {
      const [settingsResponse, notificationsResponse] = await Promise.all([
        fetch('/api/settings'),
        fetch('/api/notifications?limit=5')
      ])
      
      if (settingsResponse.ok) {
        const settings = await settingsResponse.json()
        setNotifications({
          email: {
            newService: settings.emailNewService ?? true,
            serviceUpdates: settings.emailServiceUpdates ?? true,
            clientMessages: settings.emailClientMessages ?? false,
            systemAlerts: settings.emailSystemAlerts ?? true,
            dailyReport: settings.emailDailyReport ?? false,
            weeklyReport: settings.emailWeeklyReport ?? true
          },
          push: {
            urgentServices: settings.pushUrgentServices ?? true,
            serviceCompleted: settings.pushServiceCompleted ?? false,
            clientNotifications: settings.pushClientNotifications ?? true,
            systemAlerts: settings.pushSystemAlerts ?? true,
            reminders: settings.pushReminders ?? true
          },
          preferences: {
            emailFrequency: settings.emailFrequency || "immediate",
            quietHours: settings.quietHours ?? true,
            quietStart: settings.quietStart || "22:00",
            quietEnd: settings.quietEnd || "08:00",
            weekendNotifications: settings.weekendNotifications ?? false
          }
        })
      }

      if (notificationsResponse.ok) {
        const notificationsData = await notificationsResponse.json()
        setRecentNotifications(notificationsData.notifications || [])
      }
    } catch (error) {
      console.error('Erro ao carregar dados:', error)
    } finally {
      setInitialLoad(false)
    }
  }

  const handleToggleEmail = (key: keyof typeof notifications.email) => {
    setNotifications(prev => ({
      ...prev,
      email: {
        ...prev.email,
        [key]: !prev.email[key]
      }
    }))
  }

  const handleTogglePush = (key: keyof typeof notifications.push) => {
    setNotifications(prev => ({
      ...prev,
      push: {
        ...prev.push,
        [key]: !prev.push[key]
      }
    }))
  }

  const handlePreferenceChange = (key: keyof typeof notifications.preferences, value: string | boolean) => {
    setNotifications(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [key]: value
      }
    }))
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
          // Email settings
          emailNewService: notifications.email.newService,
          emailServiceUpdates: notifications.email.serviceUpdates,
          emailClientMessages: notifications.email.clientMessages,
          emailSystemAlerts: notifications.email.systemAlerts,
          emailDailyReport: notifications.email.dailyReport,
          emailWeeklyReport: notifications.email.weeklyReport,
          
          // Push settings
          pushUrgentServices: notifications.push.urgentServices,
          pushServiceCompleted: notifications.push.serviceCompleted,
          pushClientNotifications: notifications.push.clientNotifications,
          pushSystemAlerts: notifications.push.systemAlerts,
          pushReminders: notifications.push.reminders,
          
          // Preferences
          emailFrequency: notifications.preferences.emailFrequency,
          quietHours: notifications.preferences.quietHours,
          quietStart: notifications.preferences.quietStart,
          quietEnd: notifications.preferences.quietEnd,
          weekendNotifications: notifications.preferences.weekendNotifications
        })
      })
      
      if (response.ok) {
        alert("Configurações de notificações guardadas com sucesso!")
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

  const handleTestEmail = () => {
    alert("Email de teste enviado! Verifique a sua caixa de correio.")
  }

  const handleTestPush = () => {
    if ("Notification" in window) {
      if (Notification.permission === "granted") {
        new Notification("Teste JMPC", {
          body: "Esta é uma notificação de teste do sistema JMPC.",
          icon: "/favicon.ico"
        })
      } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
          if (permission === "granted") {
            new Notification("Teste JMPC", {
              body: "Esta é uma notificação de teste do sistema JMPC.",
              icon: "/favicon.ico"
            })
          }
        })
      } else {
        alert("Notificações push estão bloqueadas no seu navegador.")
      }
    } else {
      alert("Notificações push não são suportadas neste navegador.")
    }
  }
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "service": return "🔧"
      case "system": return "⚙️"
      case "client": return "👤"
      case "alert": return "⚠️"
      default: return "📢"
    }
  }

  const formatTimestamp = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60))
    
    if (diffInMinutes < 60) {
      return `Há ${diffInMinutes} minutos`
    } else if (diffInMinutes < 1440) {
      const hours = Math.floor(diffInMinutes / 60)
      return `Há ${hours} hora${hours > 1 ? 's' : ''}`
    } else {
      const days = Math.floor(diffInMinutes / 1440)
      return `Há ${days} dia${days > 1 ? 's' : ''}`
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
            <Bell className="h-5 w-5 text-yellow-600" />
            <h1 className="text-lg font-semibold">Notificações</h1>
          </div>
          <Button onClick={handleSave} disabled={loading} className="gap-2">
            <Settings className="h-4 w-4" />
            {loading ? "A guardar..." : "Guardar"}
          </Button>
        </header>

        <main className="flex-1 overflow-auto p-4 sm:p-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Notificações Recentes */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Notificações Recentes
                </CardTitle>
                <CardDescription>
                  Últimas notificações recebidas no sistema.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentNotifications.map((notification) => (
                    <div 
                      key={notification.id} 
                      className={`flex items-start gap-3 p-3 rounded-lg border ${
                        !notification.read ? 'bg-blue-50 border-blue-200' : 'bg-gray-50'
                      }`}
                    >
                      <span className="text-lg mt-1">{getNotificationIcon(notification.type)}</span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">{notification.title}</h4>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-500">{formatTimestamp(notification.createdAt)}</span>
                            {!notification.read && (
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            )}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <Button variant="outline">Ver Todas as Notificações</Button>
                </div>
              </CardContent>
            </Card>

            {/* Configurações de Email */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Notificações por Email
                </CardTitle>
                <CardDescription>
                  Configure quando receber notificações por email.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Novos Serviços</h4>
                      <p className="text-sm text-gray-600">Quando um novo serviço é criado</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notifications.email.newService}
                        onChange={() => handleToggleEmail('newService')}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Atualizações de Serviços</h4>
                      <p className="text-sm text-gray-600">Quando um serviço é atualizado</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notifications.email.serviceUpdates}
                        onChange={() => handleToggleEmail('serviceUpdates')}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Mensagens de Clientes</h4>
                      <p className="text-sm text-gray-600">Quando um cliente envia uma mensagem</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notifications.email.clientMessages}
                        onChange={() => handleToggleEmail('clientMessages')}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Alertas do Sistema</h4>
                      <p className="text-sm text-gray-600">Alertas importantes do sistema</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notifications.email.systemAlerts}
                        onChange={() => handleToggleEmail('systemAlerts')}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Relatório Diário</h4>
                      <p className="text-sm text-gray-600">Resumo diário das atividades</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notifications.email.dailyReport}
                        onChange={() => handleToggleEmail('dailyReport')}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Relatório Semanal</h4>
                      <p className="text-sm text-gray-600">Resumo semanal das atividades</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notifications.email.weeklyReport}
                        onChange={() => handleToggleEmail('weeklyReport')}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Frequência de Emails</h4>
                    <p className="text-sm text-gray-600">Como agrupar as notificações por email</p>
                  </div>
                  <select 
                    value={notifications.preferences.emailFrequency}
                    onChange={(e) => handlePreferenceChange('emailFrequency', e.target.value)}
                    className="border rounded-md px-3 py-1 text-sm"
                  >
                    <option value="immediate">Imediato</option>
                    <option value="hourly">De hora em hora</option>
                    <option value="daily">Diário</option>
                  </select>
                </div>

                <div className="flex justify-end">
                  <Button variant="outline" onClick={handleTestEmail}>
                    Enviar Email de Teste
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Notificações Push */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5" />
                  Notificações Push
                </CardTitle>
                <CardDescription>
                  Configure as notificações no navegador.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Serviços Urgentes</h4>
                      <p className="text-sm text-gray-600">Notificação imediata para serviços urgentes</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notifications.push.urgentServices}
                        onChange={() => handleTogglePush('urgentServices')}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Serviços Concluídos</h4>
                      <p className="text-sm text-gray-600">Quando um serviço é marcado como concluído</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notifications.push.serviceCompleted}
                        onChange={() => handleTogglePush('serviceCompleted')}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Notificações de Clientes</h4>
                      <p className="text-sm text-gray-600">Mensagens e atualizações de clientes</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notifications.push.clientNotifications}
                        onChange={() => handleTogglePush('clientNotifications')}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Alertas do Sistema</h4>
                      <p className="text-sm text-gray-600">Alertas críticos do sistema</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notifications.push.systemAlerts}
                        onChange={() => handleTogglePush('systemAlerts')}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Lembretes</h4>
                      <p className="text-sm text-gray-600">Lembretes de tarefas e compromissos</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notifications.push.reminders}
                        onChange={() => handleTogglePush('reminders')}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button variant="outline" onClick={handleTestPush}>
                    Testar Notificação Push
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Preferências Avançadas */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Preferências Avançadas
                </CardTitle>
                <CardDescription>
                  Configure quando e como receber notificações.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Horário de Silêncio</h4>
                    <p className="text-sm text-gray-600">Não receber notificações durante estas horas</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={notifications.preferences.quietHours}
                      onChange={(e) => handlePreferenceChange('quietHours', e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                {notifications.preferences.quietHours && (
                  <div className="grid gap-4 md:grid-cols-2 ml-4 p-3 bg-gray-50 rounded-lg">
                    <div>
                      <label className="text-sm font-medium">Início</label>
                      <input
                        type="time"
                        value={notifications.preferences.quietStart}
                        onChange={(e) => handlePreferenceChange('quietStart', e.target.value)}
                        className="w-full mt-1 border rounded-md px-3 py-1 text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Fim</label>
                      <input
                        type="time"
                        value={notifications.preferences.quietEnd}
                        onChange={(e) => handlePreferenceChange('quietEnd', e.target.value)}
                        className="w-full mt-1 border rounded-md px-3 py-1 text-sm"
                      />
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Notificações nos Fins de Semana</h4>
                    <p className="text-sm text-gray-600">Receber notificações aos sábados e domingos</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={notifications.preferences.weekendNotifications}
                      onChange={(e) => handlePreferenceChange('weekendNotifications', e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
