"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, User, Wrench, FileText, Calendar, Save, X, UserPlus } from "lucide-react"
import { Sidebar } from "@/components/layout/Sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

interface Client {
  id: number
  nome: string
  telefone: string
  email: string
  nif?: string
  morada: string
  tipo: string
}

export default function NewServicePage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [loadingData, setLoadingData] = useState(true)

  // Estados para dados das APIs
  const [clients, setClients] = useState<Client[]>([])

  const technicians = [
    { id: "1", nome: "Diogo Cardoso" },
    { id: "2", nome: "Jorge Cardoso" },
  ]

  // Tipos de equipamento hardcoded
  const equipmentTypes = [
    "Frigorífico",
    "Máquina de Lavar Roupa",
    "Máquina de Lavar Louça",
    "Esquentador",
    "Forno",
    "Fogão",
    "Placa",
    "Arca",
  ]

  // Marcas hardcoded
  const equipmentBrands = [
    "Samsung",
    "LG",
    "Bosch",
    "Siemens",
    "Whirlpool",
    "Electrolux",
    "Indesit",
    "Hotpoint",
    "Candy",
    "Beko",
  ]

  // Estados para seleções
  const [selectedClient, setSelectedClient] = useState<Client | null>(null)

  // Estados para criar novo cliente
  const [showNewClientDialog, setShowNewClientDialog] = useState(false)
  const [creatingClient, setCreatingClient] = useState(false)
  const [newClientData, setNewClientData] = useState({
    nome: "",
    telefone: "",
    email: "",
    nif: "",
    morada: "",
    tipo: "particular",
  })

  const [formData, setFormData] = useState({
    tipo: "",
    descricaoProblema: "",
    tecnico: "",
    garantia: false,
    periodoGarantia: "",
    notas: "",
    clienteId: "",
    // Dados do equipamento
    equipamentoTipo: "",
    equipamentoMarca: "",
    equipamentoModelo: "",
    equipamentoNumeroSerie: "",
  })

  // Buscar dados das APIs (apenas clientes agora)
  useEffect(() => {
    const fetchData = async () => {
      setLoadingData(true)
      try {
        console.log("Buscando clientes...")
        const clientsRes = await fetch("/api/clients")
        console.log("Resposta da API clients:", clientsRes.status)

        if (clientsRes.ok) {
          const clientsData = await clientsRes.json()
          console.log("Dados dos clientes recebidos:", clientsData)
          setClients(clientsData)
        } else {
          console.error("Erro ao buscar clientes:", clientsRes.status)
        }
      } catch (error) {
        console.error("Erro ao carregar dados:", error)
      } finally {
        setLoadingData(false)
      }
    }

    fetchData()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Primeiro criar o equipamento
      const equipmentResponse = await fetch("/api/equipment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tipo: formData.equipamentoTipo,
          marca: formData.equipamentoMarca,
          modelo: formData.equipamentoModelo,
          numeroSerie: formData.equipamentoNumeroSerie,
        }),
      })

      if (!equipmentResponse.ok) {
        throw new Error("Erro ao criar equipamento")
      }

      const newEquipment = await equipmentResponse.json()

      // Depois criar o serviço com o ID do equipamento
      const serviceData = {
        tipo: formData.tipo,
        descricaoProblema: formData.descricaoProblema,
        tecnico: formData.tecnico,
        garantia: formData.garantia,
        periodoGarantia: formData.periodoGarantia,
        notas: formData.notas,
        clienteId: formData.clienteId,
        equipamentoId: newEquipment.id,
      }

      const response = await fetch("/api/services", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(serviceData),
      })

      if (response.ok) {
        const newService = await response.json()
        router.push(`/services/${newService.id}`)
      } else {
        const error = await response.json()
        console.error("Erro ao criar serviço:", error)
        alert("Erro ao criar serviço: " + (error.error || "Erro desconhecido"))
      }
    } catch (error) {
      console.error("Erro ao criar serviço:", error)
      alert("Erro ao criar serviço")
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleClientSelect = (clientId: string) => {
    const client = clients.find((c) => c.id.toString() === clientId)
    setSelectedClient(client || null)
    handleInputChange("clienteId", clientId)
  }

  const handleCreateNewClient = async () => {
    console.log("=== INÍCIO CRIAÇÃO CLIENTE FRONTEND ===")
    console.log("Dados do cliente:", newClientData)

    if (!newClientData.nome || !newClientData.telefone || !newClientData.email) {
      alert("Nome, telefone e email são obrigatórios")
      return
    }

    setCreatingClient(true)
    try {
      console.log("Enviando dados para API...")

      const response = await fetch("/api/clients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newClientData),
      })

      console.log("Resposta da API:", response.status)

      const responseData = await response.json()
      console.log("Dados da resposta:", responseData)

      if (response.ok) {
        console.log("Cliente criado com sucesso!")
        setClients((prev) => [responseData, ...prev])
        setSelectedClient(responseData)
        handleInputChange("clienteId", responseData.id.toString())
        setShowNewClientDialog(false)
        setNewClientData({
          nome: "",
          telefone: "",
          email: "",
          nif: "",
          morada: "",
          tipo: "particular",
        })
      } else {
        console.error("Erro da API:", responseData)
        alert("Erro ao criar cliente: " + (responseData.error || "Erro desconhecido"))
      }
    } catch (error) {
      console.error("Erro de rede:", error)
      alert("Erro de conexão ao criar cliente")
    } finally {
      setCreatingClient(false)
      console.log("=== FIM CRIAÇÃO CLIENTE FRONTEND ===")
    }
  }

  if (loadingData) {
    return (
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Carregando dados...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6">
          <Button variant="ghost" size="sm" onClick={() => router.back()} className="gap-1">
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Button>
          <div className="flex flex-1 items-center gap-2">
            <h1 className="text-lg font-semibold">Nova Folha de Serviço</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" onClick={() => router.back()} className="gap-1">
              <X className="h-4 w-4" />
              <span className="hidden sm:inline">Cancelar</span>
            </Button>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-4 sm:p-6">
          <form onSubmit={handleSubmit} className="space-y-6 max-w-5xl mx-auto">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Seleção do Cliente */}
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <User className="h-5 w-5" />
                      <h3 className="text-lg font-medium">Cliente</h3>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cliente">Selecionar Cliente</Label>
                      <div className="flex gap-2">
                        <Select onValueChange={handleClientSelect} required>
                          <SelectTrigger className="bg-white flex-1">
                            <SelectValue placeholder="Escolha um cliente existente" />
                          </SelectTrigger>
                          <SelectContent className="bg-white border shadow-lg">
                            {clients.map((client) => (
                              <SelectItem key={client.id} value={client.id.toString()}>
                                {client.nome} - {client.telefone}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>

                        <Dialog open={showNewClientDialog} onOpenChange={setShowNewClientDialog}>
                          <DialogTrigger asChild>
                            <Button type="button" variant="outline" size="icon">
                              <UserPlus className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-md">
                            <DialogHeader>
                              <DialogTitle>Criar Novo Cliente</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div className="space-y-2">
                                <Label htmlFor="newClientName">Nome *</Label>
                                <Input
                                  id="newClientName"
                                  value={newClientData.nome}
                                  onChange={(e) => setNewClientData((prev) => ({ ...prev, nome: e.target.value }))}
                                  placeholder="Nome completo"
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="newClientPhone">Telefone *</Label>
                                <Input
                                  id="newClientPhone"
                                  value={newClientData.telefone}
                                  onChange={(e) => setNewClientData((prev) => ({ ...prev, telefone: e.target.value }))}
                                  placeholder="912345678"
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="newClientEmail">Email *</Label>
                                <Input
                                  id="newClientEmail"
                                  type="email"
                                  value={newClientData.email}
                                  onChange={(e) => setNewClientData((prev) => ({ ...prev, email: e.target.value }))}
                                  placeholder="cliente@email.com"
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="newClientNif">NIF</Label>
                                <Input
                                  id="newClientNif"
                                  value={newClientData.nif}
                                  onChange={(e) => setNewClientData((prev) => ({ ...prev, nif: e.target.value }))}
                                  placeholder="123456789"
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="newClientAddress">Morada</Label>
                                <Input
                                  id="newClientAddress"
                                  value={newClientData.morada}
                                  onChange={(e) => setNewClientData((prev) => ({ ...prev, morada: e.target.value }))}
                                  placeholder="Rua, número, cidade"
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="newClientType">Tipo de Cliente</Label>
                                <Select
                                  value={newClientData.tipo}
                                  onValueChange={(value) => setNewClientData((prev) => ({ ...prev, tipo: value }))}
                                >
                                  <SelectTrigger className="bg-white">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent className="bg-white border shadow-lg">
                                    <SelectItem value="particular">Particular</SelectItem>
                                    <SelectItem value="empresa">Empresa</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div className="flex justify-end gap-2 pt-4">
                                <Button type="button" variant="outline" onClick={() => setShowNewClientDialog(false)}>
                                  Cancelar
                                </Button>
                                <Button type="button" onClick={handleCreateNewClient} disabled={creatingClient}>
                                  {creatingClient ? "Criando..." : "Criar Cliente"}
                                </Button>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>

                    {selectedClient && (
                      <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <p className="font-medium text-blue-900">{selectedClient.nome}</p>
                        <p className="text-sm text-blue-700">{selectedClient.telefone}</p>
                        <p className="text-sm text-blue-700">{selectedClient.email}</p>
                        {selectedClient.nif && <p className="text-sm text-blue-700">NIF: {selectedClient.nif}</p>}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Informações do Equipamento */}
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Wrench className="h-5 w-5" />
                      <h3 className="text-lg font-medium">Equipamento</h3>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="equipamentoTipo">Tipo de Equipamento</Label>
                      <Select onValueChange={(value) => handleInputChange("equipamentoTipo", value)} required>
                        <SelectTrigger className="bg-white">
                          <SelectValue placeholder="Selecione o tipo de equipamento" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border shadow-lg">
                          {equipmentTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="equipamentoMarca">Marca</Label>
                      <Select onValueChange={(value) => handleInputChange("equipamentoMarca", value)} required>
                        <SelectTrigger className="bg-white">
                          <SelectValue placeholder="Selecione a marca" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border shadow-lg">
                          {equipmentBrands.map((brand) => (
                            <SelectItem key={brand} value={brand}>
                              {brand}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="equipamentoModelo">Modelo</Label>
                      <Input
                        id="equipamentoModelo"
                        placeholder="Ex: XYZ123, ABC456"
                        value={formData.equipamentoModelo}
                        onChange={(e) => handleInputChange("equipamentoModelo", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="equipamentoNumeroSerie">Número de Série</Label>
                      <Input
                        id="equipamentoNumeroSerie"
                        placeholder="Número de série do equipamento"
                        value={formData.equipamentoNumeroSerie}
                        onChange={(e) => handleInputChange("equipamentoNumeroSerie", e.target.value)}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Detalhes do Serviço */}
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    <h3 className="text-lg font-medium">Detalhes do Serviço</h3>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      {/* Tipo de Serviço */}
                      <div className="space-y-2">
                        <Label htmlFor="tipo">Tipo de Serviço</Label>
                        <Select onValueChange={(value) => handleInputChange("tipo", value)} required>
                          <SelectTrigger className="bg-white">
                            <SelectValue placeholder="Selecione o tipo" />
                          </SelectTrigger>
                          <SelectContent className="bg-white border shadow-lg">
                            <SelectItem value="Reparação">Reparação</SelectItem>
                            <SelectItem value="Manutenção">Manutenção</SelectItem>
                            <SelectItem value="Instalação">Instalação</SelectItem>
                            <SelectItem value="Diagnóstico">Diagnóstico</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Técnico */}
                      <div className="space-y-2">
                        <Label htmlFor="tecnico">Técnico Responsável</Label>
                        <Select onValueChange={(value) => handleInputChange("tecnico", value)} required>
                          <SelectTrigger className="bg-white">
                            <SelectValue placeholder="Selecione um técnico" />
                          </SelectTrigger>
                          <SelectContent className="bg-white border shadow-lg">
                            {technicians.map((technician) => (
                              <SelectItem key={technician.id} value={technician.nome}>
                                {technician.nome}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {/* Data de Entrada */}
                      <div className="space-y-2">
                        <Label className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          Data de Entrada
                        </Label>
                        <div className="bg-blue-50 border border-blue-200 rounded-md p-3">
                          <div className="text-sm font-medium text-blue-900">
                            {new Date().toLocaleDateString("pt-PT", {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </div>
                          <div className="text-xs text-blue-600 mt-1">Hoje</div>
                        </div>
                      </div>

                      {/* Garantia */}
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="garantia"
                            checked={formData.garantia}
                            onCheckedChange={(checked) => handleInputChange("garantia", checked)}
                          />
                          <Label htmlFor="garantia">Serviço em garantia</Label>
                        </div>

                        {formData.garantia && (
                          <div className="space-y-2">
                            <Label htmlFor="periodoGarantia">Período de Garantia</Label>
                            <Input
                              id="periodoGarantia"
                              placeholder="Ex: 12 meses"
                              value={formData.periodoGarantia}
                              onChange={(e) => handleInputChange("periodoGarantia", e.target.value)}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Descrição do Problema */}
                  <div className="space-y-2">
                    <Label htmlFor="descricaoProblema">Descrição do Problema</Label>
                    <Textarea
                      id="descricaoProblema"
                      placeholder="Descreva detalhadamente o problema reportado pelo cliente..."
                      value={formData.descricaoProblema}
                      onChange={(e) => handleInputChange("descricaoProblema", e.target.value)}
                      className="min-h-[100px]"
                      required
                    />
                  </div>

                  {/* Notas Técnicas */}
                  <div className="space-y-2">
                    <Label htmlFor="notas">Notas Técnicas (Opcional)</Label>
                    <Textarea
                      id="notas"
                      placeholder="Observações técnicas, diagnóstico inicial, etc..."
                      value={formData.notas}
                      onChange={(e) => handleInputChange("notas", e.target.value)}
                      className="min-h-[80px]"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Botões de Ação */}
            <div className="flex justify-end gap-4 pt-4">
              <Button type="button" variant="outline" onClick={() => router.back()}>
                Cancelar
              </Button>
              <Button type="submit" disabled={loading} className="gap-2">
                <Save className="h-4 w-4" />
                {loading ? "Criando..." : "Criar Serviço"}
              </Button>
            </div>
          </form>
        </main>
      </div>
    </div>
  )
}
