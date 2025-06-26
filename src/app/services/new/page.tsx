"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, User, Wrench, FileText, Calendar, Save, X, UserPlus, Upload, File, Phone, Mail, CreditCard, MapPin, Search } from "lucide-react"
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

  // Técnicos hardcoded
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
  const [documentoCompraFile, setDocumentoCompraFile] = useState<File | null>(null)

  // Estados para criar novo cliente
  const [showNewClientDialog, setShowNewClientDialog] = useState(false)
  const [creatingClient, setCreatingClient] = useState(false)
  
  // Estados para pesquisa de clientes
  const [clientSearch, setClientSearch] = useState("")
  const [showClientResults, setShowClientResults] = useState(false)
  
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
    dataCompra: "",
    documentoCompra: "",
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
        console.log("A procurar clientes...")
        const clientsRes = await fetch("/api/clients")
        console.log("Resposta da API clients:", clientsRes.status)

        if (clientsRes.ok) {
          const clientsData = await clientsRes.json()
          console.log("Dados dos clientes recebidos:", clientsData)
          setClients(clientsData)
          
          // Se há um clienteId no formData, selecionar automaticamente
          if (formData.clienteId && clientsData.length > 0) {
            const client = clientsData.find((c: Client) => c.id.toString() === formData.clienteId)
            if (client) {
              console.log("Selecionando cliente automaticamente:", client)
              setSelectedClient(client)
            }
          }
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
  }, [formData.clienteId])

  // Filtrar clientes baseado na pesquisa
  const filteredClients = clients.filter((client) => {
    if (!clientSearch.trim()) return false
    
    const searchLower = clientSearch.toLowerCase()
    return (
      (client.nome || "").toLowerCase().includes(searchLower) ||
      (client.telefone || "").includes(clientSearch) ||
      (client.email || "").toLowerCase().includes(searchLower) ||
      (client.nif || "").includes(clientSearch)
    )
  })

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

      const newEquipment = await equipmentResponse.json()      // Depois criar o serviço com o ID do equipamento
      const serviceData = {
        tipo: formData.tipo,
        descricaoProblema: formData.descricaoProblema,
        tecnico: formData.tecnico,
        garantia: formData.garantia,
        dataCompra: formData.dataCompra,
        documentoCompra: formData.documentoCompra,
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
        
        // Se há documento de compra para fazer upload, fazer upload como foto
        if (documentoCompraFile && formData.garantia) {
          try {
            const formDataPhoto = new FormData()
            formDataPhoto.append('photo', documentoCompraFile)
            formDataPhoto.append('description', 'Documento de Compra')
            formDataPhoto.append('serviceId', newService.id)
            
            const photoResponse = await fetch(`/api/services/${newService.id}/photos`, {
              method: 'POST',
              body: formDataPhoto,
            })
            
            if (!photoResponse.ok) {
              const errorData = await photoResponse.json()
              console.error('Erro ao fazer upload do documento:', errorData)
              alert('Serviço criado, mas houve erro ao anexar o documento de compra: ' + (errorData.error || 'Erro desconhecido'))
            } else {
              console.log('Documento de compra anexado com sucesso')
              
              // Se for PDF, tentar gerar prévia
              if (documentoCompraFile.type === 'application/pdf') {
                try {
                  const { generatePdfPreview } = await import('@/utils/pdfPreview')
                  const previewFile = await generatePdfPreview(documentoCompraFile)
                  
                  if (previewFile) {
                    const previewFormData = new FormData()
                    previewFormData.append('photo', previewFile)
                    previewFormData.append('description', 'Documento de Compra (Prévia)')
                    previewFormData.append('serviceId', newService.id)
                    
                    const previewResponse = await fetch(`/api/services/${newService.id}/photos`, {
                      method: 'POST',
                      body: previewFormData,
                    })
                    
                    if (previewResponse.ok) {
                      console.log('Prévia PNG gerada e anexada com sucesso')
                    }
                  }
                } catch (previewError) {
                  console.log('Não foi possível gerar prévia, mas PDF foi anexado:', previewError)
                }
              }
            }
          } catch (uploadError) {
            console.error('Erro no upload do documento:', uploadError)
            alert('Serviço criado, mas houve erro ao anexar o documento de compra')
          }
        }
        
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

  const handleSelectClient = (client: Client) => {
    setSelectedClient(client)
    setFormData(prev => ({ ...prev, clienteId: client.id.toString() }))
    setClientSearch(client.nome)
    setShowClientResults(false)
  }

  const handleClearClientSelection = () => {
    setSelectedClient(null)
    setFormData(prev => ({ ...prev, clienteId: "" }))
    setClientSearch("")
  }

  const handleClientSelect = (clientId: string) => {
    console.log("Selecionando cliente com ID:", clientId)
    const client = clients.find((c) => c.id.toString() === clientId)
    console.log("Cliente encontrado:", client)
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
      console.log("A enviar dados para API...")

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

        // Adicionar à lista de clientes
        setClients((prev) => [responseData, ...prev])        // Selecionar o cliente criado - Usar a mesma função que a seleção manual
        console.log("A selecionar cliente automaticamente:", responseData)
        // Usar um timeout pequeno para garantir que o estado dos clients foi atualizado
        setTimeout(() => {
          handleClientSelect(responseData.id.toString())
        }, 100)

        // Fechar dialog e limpar form
        setShowNewClientDialog(false)
        setNewClientData({
          nome: "",
          telefone: "",
          email: "",
          nif: "",
          morada: "",
          tipo: "particular",
        })

        // Mostrar mensagem de sucesso
        console.log(`Cliente "${responseData.nome}" criado e selecionado com sucesso!`)
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
          <p className="mt-4 text-gray-600">A carregar dados...</p>
        </div>
      </div>
    )
  }
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6">
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
        </header>        <main className="flex-1 overflow-auto p-4 sm:p-6">
          <form onSubmit={handleSubmit} className="space-y-6 max-w-5xl mx-auto">
            <div className="grid gap-6 xl:grid-cols-2">
              {/* Seleção do Cliente */}
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <User className="h-5 w-5" />
                      <h3 className="text-lg font-medium">Cliente</h3>
                    </div>                    <div className="space-y-2">
                      <Label htmlFor="cliente">Pesquisar Cliente</Label>
                      
                      {/* Barra de pesquisa */}
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          placeholder="Pesquisar por nome, telefone, email ou NIF..."
                          value={clientSearch}
                          onChange={(e) => {
                            setClientSearch(e.target.value)
                            setShowClientResults(e.target.value.length > 0)
                          }}
                          onFocus={() => setShowClientResults(clientSearch.length > 0)}
                          className="pl-10 border-gray-200"
                        />
                          {/* Resultados da pesquisa */}
                        {showClientResults && filteredClients.length > 0 && (
                          <div className="absolute z-20 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-xl max-h-72 overflow-y-auto backdrop-blur-sm transition-all duration-200 ease-in-out">
                            <div className="p-2">
                              {filteredClients.map((client) => (
                                <div
                                  key={client.id}
                                  onClick={() => handleSelectClient(client)}
                                  className="p-3 rounded-md hover:bg-blue-50 cursor-pointer transition-all duration-150 ease-in-out border border-transparent hover:border-blue-200 hover:shadow-sm group"
                                >
                                  <div className="flex items-center justify-between">
                                    <div className="flex-1">
                                      <div className="font-semibold text-gray-900 group-hover:text-blue-800 transition-colors duration-150">
                                        {client.nome}
                                      </div>
                                      <div className="text-sm text-gray-600 mt-1 space-y-1">
                                        <div className="flex items-center gap-4">
                                          <span className="flex items-center gap-1">
                                            <svg className="h-3 w-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            {client.email}
                                          </span>
                                          <span className="flex items-center gap-1">
                                            <svg className="h-3 w-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                            {client.telefone}
                                          </span>
                                        </div>
                                        {client.nif && (
                                          <div className="flex items-center gap-1 text-xs">
                                            <svg className="h-3 w-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                            NIF: {client.nif}
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                    <div className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                                        <svg className="h-3 w-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                          {/* Mensagem quando não há resultados */}
                        {showClientResults && clientSearch.length > 0 && filteredClients.length === 0 && (
                          <div className="absolute z-20 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-xl p-6 text-center transition-all duration-200 ease-in-out">
                            <div className="flex flex-col items-center gap-3">
                              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                                <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                              </div>
                              <div>
                                <p className="text-gray-600 font-medium">Nenhum cliente encontrado</p>
                                <p className="text-gray-400 text-sm mt-1">Tente pesquisar com outros termos</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                        {/* Cliente selecionado */}
                      {selectedClient && (
                        <div className="mt-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg shadow-sm transition-all duration-200">
                          <div className="flex items-center justify-between">
                            <div className="flex items-start gap-3">
                              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                              </div>
                              <div className="flex-1">
                                <div className="font-semibold text-blue-900 text-lg">{selectedClient.nome}</div>
                                <div className="text-sm text-blue-700 mt-1 space-y-1">
                                  <div className="flex items-center gap-3">
                                    <span className="flex items-center gap-1">
                                      <svg className="h-3 w-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                      </svg>
                                      {selectedClient.email}
                                    </span>
                                    <span className="flex items-center gap-1">
                                      <svg className="h-3 w-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                      </svg>
                                      {selectedClient.telefone}
                                    </span>
                                  </div>
                                  {selectedClient.nif && (
                                    <div className="flex items-center gap-1 text-xs">
                                      <svg className="h-3 w-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                      </svg>
                                      NIF: {selectedClient.nif}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={handleClearClientSelection}
                              className="text-blue-600 hover:text-blue-800 hover:bg-blue-100 transition-colors duration-150"
                            >
                              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </Button>
                          </div>
                        </div>
                      )}
                      
                      <div className="flex gap-2">

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
                                  {creatingClient ? "A criar..." : "Criar Cliente"}
                                </Button>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>                    {selectedClient && (
                      <div className="mt-4 p-4 bg-gradient-to-r from-gray-50 to-slate-50 rounded-lg border border-gray-200 shadow-sm">
                        <div className="flex items-start justify-between">
                          <div className="space-y-3">
                            <div className="flex items-center gap-2">
                              <div className="p-1.5 bg-gray-100 rounded-full">
                                <User className="h-4 w-4 text-gray-600" />
                              </div>
                              <p className="font-semibold text-gray-900">{selectedClient.nome}</p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600 ml-8">
                              <div className="flex items-center gap-2">
                                <Phone className="h-3.5 w-3.5 text-gray-500" />
                                <span>{selectedClient.telefone}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Mail className="h-3.5 w-3.5 text-gray-500" />
                                <span>{selectedClient.email}</span>
                              </div>
                              {selectedClient.nif && (
                                <div className="flex items-center gap-2">
                                  <CreditCard className="h-3.5 w-3.5 text-gray-500" />
                                  <span>NIF: {selectedClient.nif}</span>
                                </div>
                              )}
                              {selectedClient.morada && (
                                <div className="flex items-center gap-2">
                                  <MapPin className="h-3.5 w-3.5 text-gray-500" />
                                  <span>{selectedClient.morada}</span>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center px-3 py-1 bg-gray-100 rounded-full border">
                            <span className="text-xs font-medium text-gray-700 capitalize">
                              {selectedClient.tipo}
                            </span>
                          </div>
                        </div>
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
                  </div>                  <div className="grid gap-6 xl:grid-cols-2">
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
                        </div>                        {formData.garantia && (
                          <div className="space-y-4">
                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                              {/* Data de Compra */}
                              <div className="space-y-2">
                                <Label htmlFor="dataCompra">Data de Compra</Label>
                                <Input
                                  id="dataCompra"
                                  type="date"
                                  value={formData.dataCompra}
                                  onChange={(e) => handleInputChange("dataCompra", e.target.value)}
                                />
                              </div>

                              {/* Documento de Compra */}
                              <div className="space-y-2">
                                <Label htmlFor="documentoCompra">Documento de Compra (opcional)</Label>
                                <div className="flex items-center gap-2">
                                  <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => document.getElementById('documentoCompraFile')?.click()}
                                    className="flex items-center gap-2 bg-gray-800 text-white hover:bg-gray-700 hover:text-white"
                                  >
                                    <Upload className="h-4 w-4" />
                                    Anexar Ficheiro
                                  </Button>
                                  <input
                                    id="documentoCompraFile"
                                    type="file"
                                    accept="image/*,.pdf"
                                    className="hidden"
                                    onChange={(e) => {
                                      const file = e.target.files?.[0]
                                      if (file) {
                                        setDocumentoCompraFile(file)
                                        handleInputChange("documentoCompra", file.name)
                                      }
                                    }}
                                  />
                                </div>
                                <p className="text-xs text-gray-500">
                                  Formatos aceites: JPG, PNG, PDF (máximo 10MB)
                                </p>
                              </div>
                            </div>

                            {/* Preview do ficheiro anexado - fora do grid */}
                            {documentoCompraFile && (
                              <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg">
                                <File className="h-4 w-4 text-green-600" />
                                <span className="text-sm text-green-700 flex-1">{documentoCompraFile.name}</span>
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => {
                                    setDocumentoCompraFile(null)
                                    handleInputChange("documentoCompra", "")
                                  }}
                                >
                                  <X className="h-4 w-4" />
                                </Button>
                              </div>
                            )}
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
                {loading ? "A criar..." : "Criar Serviço"}
              </Button>
            </div>
          </form>
        </main>
      </div>
    </div>
  )
}
