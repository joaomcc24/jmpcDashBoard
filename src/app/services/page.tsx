"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Plus, Search, Wrench, User, Calendar, Clock, CheckCircle, AlertCircle, Package } from "lucide-react"
import { Sidebar } from "@/components/layout/Sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { SERVICE_STATES, SERVICE_STATE_LABELS, SERVICE_STATE_COLORS } from "@/lib/constants"

interface Service {
  id: string
  tipo: string
  descricaoProblema: string
  estado: string
  dataEntrada: string
  tecnico: string | null
  garantia: boolean
  cliente: {
    id: number
    nome: string
    telefone: string
  }
  equipamento: {
    id: number
    tipo: string
    marca: string
    modelo: string
  }
}

export default function ServicesPage() {
  const router = useRouter()
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterState, setFilterState] = useState("all")
  const [filterType, setFilterType] = useState("all")

  useEffect(() => {
    fetchServices()
  }, [])

  const fetchServices = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/services")

      if (response.ok) {
        const data = await response.json()
        setServices(data)
      } else {
        setError(`Erro ao carregar serviços (${response.status})`)
      }
    } catch (error) {
      console.error("Erro ao carregar serviços:", error)
      setError("Erro de conexão")
    } finally {
      setLoading(false)    }
  }

  const handleCreateNewService = () => {
    router.push('/services/new')
  }

  // Filtrar serviços
  const filteredServices = services.filter((service) => {
    const searchLower = searchTerm.toLowerCase()
    const matchesSearch =
      service.cliente.nome.toLowerCase().includes(searchLower) ||
      service.equipamento.tipo.toLowerCase().includes(searchLower) ||
      service.equipamento.marca.toLowerCase().includes(searchLower) ||
      service.tipo.toLowerCase().includes(searchLower) ||
      service.descricaoProblema.toLowerCase().includes(searchLower) ||
      (service.tecnico && service.tecnico.toLowerCase().includes(searchLower))

    const matchesState = filterState === "all" || service.estado === filterState
    const matchesType = filterType === "all" || service.tipo === filterType

    return matchesSearch && matchesState && matchesType
  })

  const getStateIcon = (state: string) => {
    switch (state) {
      case SERVICE_STATES.PENDING:
        return <Clock className="h-4 w-4" />
      case SERVICE_STATES.COMPLETED:
        return <CheckCircle className="h-4 w-4" />
      case SERVICE_STATES.BRAND_RESPONSE:
        return <AlertCircle className="h-4 w-4" />
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
          <p className="mt-4 text-gray-600">A carregar serviços...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="text-center">
            <div className="text-red-500 text-6xl mb-4">⚠️</div>
            <h2 className="text-xl font-semibold mb-2">Erro ao carregar serviços</h2>
            <p className="text-gray-600 mb-4">{error}</p>
            <Button onClick={fetchServices}>Tentar novamente</Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-white px-6 shadow-sm">
          <div className="flex flex-1 items-center gap-2">
            <Wrench className="h-6 w-6 text-blue-600" />
            <h1 className="text-xl font-semibold text-gray-900">Gestão de Serviços</h1>
          </div>          <Button 
            onClick={handleCreateNewService}
            className="gap-2 bg-gray-800 text-white hover:bg-gray-700 hover:text-white"
          >
            <Plus className="h-4 w-4" />
            Novo Serviço
          </Button>
        </header>

        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Estatísticas */}
            <div className="grid gap-4 md:grid-cols-4">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Wrench className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total</p>
                      <p className="text-2xl font-bold text-gray-900">{services.length}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-yellow-100 rounded-lg">
                      <Clock className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">Pendentes</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {services.filter((s) => s.estado === SERVICE_STATES.PENDING).length}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <Package className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">Aguarda Peça</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {services.filter((s) => s.estado === SERVICE_STATES.WAITING_PART).length}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">Concluídos</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {services.filter((s) => s.estado === SERVICE_STATES.COMPLETED).length}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Filtros */}
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Pesquisar por cliente, equipamento, técnico..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 border-gray-200"
                    />
                  </div>

                  <Select value={filterState} onValueChange={setFilterState}>
                    <SelectTrigger className="w-full lg:w-48 border-gray-200">
                      <SelectValue placeholder="Filtrar por estado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos os estados</SelectItem>
                      <SelectItem value={SERVICE_STATES.PENDING}>Pendente</SelectItem>
                      <SelectItem value={SERVICE_STATES.WAITING_PART}>Aguarda Peça</SelectItem>
                      <SelectItem value={SERVICE_STATES.BRAND_RESPONSE}>Resposta da Marca</SelectItem>
                      <SelectItem value={SERVICE_STATES.COMPLETED}>Concluído</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={filterType} onValueChange={setFilterType}>
                    <SelectTrigger className="w-full lg:w-48 border-gray-200">
                      <SelectValue placeholder="Filtrar por tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos os tipos</SelectItem>
                      <SelectItem value="Reparação">Reparação</SelectItem>
                      <SelectItem value="Manutenção">Manutenção</SelectItem>
                      <SelectItem value="Instalação">Instalação</SelectItem>
                      <SelectItem value="Diagnóstico">Diagnóstico</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Lista de Serviços */}
            <Card className="border-0 shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-semibold text-gray-900">
                  Lista de Serviços ({filteredServices.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                {filteredServices.length === 0 ? (
                  <div className="text-center py-12">
                    <Wrench className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum serviço encontrado</h3>
                    <p className="text-gray-600 mb-4">
                      {searchTerm || filterState !== "all" || filterType !== "all"
                        ? "Tente ajustar os filtros de pesquisa"
                        : "Comece a criar o seu primeiro serviço"}
                    </p>                    {!searchTerm && filterState === "all" && filterType === "all" && (
                      <Button onClick={handleCreateNewService} className="gap-2">
                        <Plus className="h-4 w-4" />
                        Criar Primeiro Serviço
                      </Button>
                    )}
                  </div>
                ) : (
                  <div className="divide-y divide-gray-100">
                    {filteredServices.map((service) => (
                      <div key={service.id} className="p-6 hover:bg-gray-50 transition-colors">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <h3 className="text-lg font-semibold text-gray-900">{service.tipo}</h3>                              <Badge                                className={
                                  (SERVICE_STATE_COLORS as any)[service.estado] || SERVICE_STATE_COLORS[SERVICE_STATES.PENDING]
                                }
                              >
                                <div className="flex items-center gap-1">                                  {getStateIcon(service.estado)}
                                  {(SERVICE_STATE_LABELS as any)[service.estado] || service.estado}
                                </div>
                              </Badge>
                              {service.garantia && (
                                <Badge variant="outline" className="text-blue-600 border-blue-200">
                                  Garantia
                                </Badge>
                              )}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm mb-3">
                              <div className="flex items-center gap-2 text-gray-600">
                                <User className="h-4 w-4" />
                                <span>{service.cliente.nome}</span>
                              </div>

                              <div className="flex items-center gap-2 text-gray-600">
                                <Wrench className="h-4 w-4" />
                                <span>
                                  {service.equipamento.marca} {service.equipamento.tipo}
                                </span>
                              </div>

                              <div className="flex items-center gap-2 text-gray-600">
                                <Calendar className="h-4 w-4" />
                                <span>{new Date(service.dataEntrada).toLocaleDateString("pt-PT")}</span>
                              </div>

                              {service.tecnico && (
                                <div className="flex items-center gap-2 text-gray-600">
                                  <User className="h-4 w-4" />
                                  <span>{service.tecnico}</span>
                                </div>
                              )}
                            </div>

                            <p className="text-gray-700 text-sm line-clamp-2">{service.descricaoProblema}</p>
                          </div>

                          <div className="flex items-center gap-2 ml-4">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => (window.location.href = `/services/${service.id}`)}
                              className="gap-2 bg-gray-800 text-white hover:bg-gray-700 hover:text-white"
                            >
                              Ver Detalhes
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
