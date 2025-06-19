"use client"

import Link from 'next/link';
import { useState, useEffect } from "react"
import { Users, Wrench, Package, TrendingUp, Calendar, Clock, CheckCircle, User, ArrowRight } from "lucide-react"
import { Sidebar } from "@/components/layout/Sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SERVICE_STATES, SERVICE_STATE_LABELS, SERVICE_STATE_COLORS } from "@/lib/constants"

interface DashboardStats {
  totalClients: number
  totalServices: number
  servicesThisWeek: number
  servicesWithoutUpdates: number
  pendingServices: number
  completedServices: number
  waitingPartServices: number
  brandResponseServices: number
}

interface RecentService {
  id: string
  tipo: string
  estado: string
  dataEntrada: string
  cliente: {
    nome: string
  }
  equipamento: {
    tipo: string
    marca: string
  }
}

export default function DashboardPage() {  const [stats, setStats] = useState<DashboardStats>({
    totalClients: 0,
    totalServices: 0,
    servicesThisWeek: 0,
    servicesWithoutUpdates: 0,
    pendingServices: 0,
    completedServices: 0,
    waitingPartServices: 0,
    brandResponseServices: 0,
  })
  const [recentServices, setRecentServices] = useState<RecentService[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        
        const [clientsRes, servicesRes] = await Promise.all([fetch("/api/clients"), fetch("/api/services")])

        if (clientsRes.ok && servicesRes.ok) {          const clients = await clientsRes.json()
          const services = await servicesRes.json()

          const pendingServices = services.filter((s: any) => s.estado === SERVICE_STATES.PENDING).length
          const waitingPartServices = services.filter((s: any) => s.estado === SERVICE_STATES.WAITING_PART).length

          // Calcular serviços criados esta semana
          const oneWeekAgo = new Date()
          oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)
          const servicesThisWeek = services.filter((s: any) => 
            new Date(s.dataEntrada) >= oneWeekAgo
          ).length

          // Calcular serviços sem atualizações na última semana
          // Como não temos campo de última atualização, vamos usar dataEntrada como referência
          const servicesWithoutUpdates = services.filter((s: any) => {
            const serviceDate = new Date(s.dataEntrada)
            return serviceDate < oneWeekAgo && s.estado !== SERVICE_STATES.COMPLETED
          }).length

          setStats({
            totalClients: clients.length,
            totalServices: services.length,
            servicesThisWeek: servicesThisWeek,
            servicesWithoutUpdates: servicesWithoutUpdates,
            pendingServices: pendingServices,
            completedServices: services.filter((s: any) => s.estado === SERVICE_STATES.COMPLETED).length,
            waitingPartServices: waitingPartServices,
            brandResponseServices: services.filter((s: any) => s.estado === SERVICE_STATES.BRAND_RESPONSE).length,
          })

          const recent = services
            .sort((a: any, b: any) => new Date(b.dataEntrada).getTime() - new Date(a.dataEntrada).getTime())
            .slice(0, 5)

          setRecentServices(recent)
        }
      } catch (error) {
        console.error("Erro ao carregar dados do dashboard:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchDashboardData()
  }, [])

  const getStateIcon = (state: string) => {
    switch (state) {
      case SERVICE_STATES.PENDING:
        return <Clock className="h-4 w-4" />
      case SERVICE_STATES.COMPLETED:
        return <CheckCircle className="h-4 w-4" />
      case SERVICE_STATES.BRAND_RESPONSE:
        return <Package className="h-4 w-4" />
      case SERVICE_STATES.WAITING_PART:
        return <Package className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">A carregar dashboard...</p>
        </div>
      </div>
    )
  }
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 flex flex-col lg:ml-0 ml-0">
        {/* Spacer for mobile header */}
        <div className="lg:hidden h-16"></div>
        
        {/* Header */}
        {/* <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-white px-6 shadow-sm">
          <div className="flex flex-1 items-center gap-2">
            <TrendingUp className="h-6 w-6 text-blue-600" />
            <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar className="h-4 w-4" />
            {new Date().toLocaleDateString("pt-PT", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        </header> */}<main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-6 text-white">
              <h2 className="text-xl font-bold mb-2">Bem-vindo à JMPC</h2>
              <p className="text-blue-100">Sistema de Gestão de Serviços Técnicos</p>
            </div>            {/* Estatísticas principais */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"><Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-1">Total de Clientes</p>
                      <p className="text-2xl font-bold text-gray-900">{stats.totalClients}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Wrench className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-1">Total de Serviços</p>
                      <p className="text-2xl font-bold text-gray-900">{stats.totalServices}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-yellow-100 rounded-lg">
                      <Calendar className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-1">Serviços Esta Semana</p>
                      <p className="text-2xl font-bold text-gray-900">{stats.servicesThisWeek}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-red-100 rounded-lg">
                      <Clock className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-1">Sem Atualizações</p>
                      <p className="text-2xl font-bold text-gray-900">{stats.servicesWithoutUpdates}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>            {/* Grid com ações rápidas e serviços recentes */}
            <div className="grid gap-4 xl:grid-cols-2">
              {/* Ações rápidas */}
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900">Ações Rápidas</CardTitle>
                </CardHeader>                <CardContent className="space-y-3">
                  <Link
                    href="/services/new"
                    className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors group"
                  >
                    <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                      <Wrench className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">Novo Serviço</p>
                      <p className="text-sm text-gray-600">Criar nova folha de serviço</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-gray-600" />
                  </Link>

                  <Link
                    href="/clients"
                    className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors group"
                  >
                    <div className="p-2 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                      <Users className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">Gerir Clientes</p>
                      <p className="text-sm text-gray-600">Ver e gerir clientes</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-gray-600" />
                  </Link>

                  <Link
                    href="/services"
                    className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors group"
                  >
                    <div className="p-2 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors">
                      <Package className="h-5 w-5 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">Ver Serviços</p>
                      <p className="text-sm text-gray-600">Gerir todos os serviços</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-gray-600" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-lg font-semibold text-gray-900">Serviços Recentes</CardTitle>
                  <Button variant="outline" size="sm" className="hover:bg-gray-700 hover:text-white" onClick={() => (window.location.href = "/services")}>
                    Ver Todos
                  </Button>
                </CardHeader>
                <CardContent>
                  {recentServices.length === 0 ? (
                    <div className="text-center py-8">
                      <Wrench className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Nenhum serviço encontrado</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {recentServices.map((service) => (
                        <div
                          key={service.id}
                          className="flex items-center p-3 rounded-lg border border-gray-100 hover:bg-gray-100 hover:border-gray-200 transition-colors cursor-pointer"
                          onClick={() => (window.location.href = `/services/${service.id}`)}
                        >
                          {/* Conteúdo principal - flex-1 para ocupar espaço disponível */}
                          <div className="flex-1 min-w-0 pr-4">
                            <div className="flex items-center gap-2 mb-2">
                              <p className="font-medium text-gray-900 truncate">{service.tipo}</p>
                              <Badge className={`${SERVICE_STATE_COLORS[service.estado as keyof typeof SERVICE_STATE_COLORS]} text-xs flex-shrink-0`}>
                                <div className="flex items-center gap-1">
                                  {getStateIcon(service.estado)}
                                  {SERVICE_STATE_LABELS[service.estado as keyof typeof SERVICE_STATE_LABELS]}
                                </div>
                              </Badge>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                              <div className="flex items-center gap-1">
                                <User className="h-3 w-3 flex-shrink-0" />
                                <span className="truncate">{service.cliente.nome}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Wrench className="h-3 w-3 flex-shrink-0" />
                                <span className="truncate">{service.equipamento.marca}</span>
                              </div>
                            </div>
                          </div>

                          {/* Data - largura fixa e alinhada à direita */}
                          <div className="text-xs text-gray-500 w-12 text-right flex-shrink-0">
                            {new Date(service.dataEntrada).toLocaleDateString("pt-PT", {
                              day: "2-digit",
                              month: "2-digit",
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>            {/* Estados dos serviços */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-yellow-100 rounded-lg">
                      <Clock className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">Pendentes</p>
                      <p className="text-xl font-bold text-gray-900">{stats.pendingServices}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <Package className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">Aguarda Peça</p>
                      <p className="text-xl font-bold text-gray-900">{stats.waitingPartServices}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Package className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">Resposta da Marca</p>
                      <p className="text-xl font-bold text-gray-900">{stats.brandResponseServices}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">Concluídos</p>
                      <p className="text-xl font-bold text-gray-900">{stats.completedServices}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}