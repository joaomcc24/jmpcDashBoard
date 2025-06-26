"use client"

import { useState, useEffect } from "react"
import { Plus, Search, User, Phone, Mail, MapPin, Building, Users, Edit, Trash2, FileText } from "lucide-react"
import { Sidebar } from "@/components/layout/Sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

interface Client {
  id: number
  clienteId: string
  nome: string
  telefone: string
  email: string
  nif?: string
  morada: string
  tipo: string
  createdAt?: string
}

export default function ClientsPage() {
  const [clients, setClients] = useState<Client[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")

  // Estados para criar/editar cliente
  const [showClientDialog, setShowClientDialog] = useState(false)
  const [editingClient, setEditingClient] = useState<Client | null>(null)
  const [savingClient, setSavingClient] = useState(false)
  const [clientData, setClientData] = useState({
    nome: "",
    telefone: "",
    email: "",
    nif: "",
    morada: "",
    tipo: "particular",
  })

  // Buscar clientes
  useEffect(() => {
    fetchClients()
  }, [])

  const fetchClients = async () => {
    setLoading(true)
    setError(null)

    try {
      console.log("A buscar clientes...")
      const response = await fetch("/api/clients", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })

      console.log("Status da resposta:", response.status)

      if (response.ok) {
        const data = await response.json()
        console.log("Clientes recebidos:", data.length)

        if (Array.isArray(data)) {
          setClients(data)
        } else {
          console.error("Resposta não é um array:", data)
          setClients([])
          setError("Formato de dados inválido")
        }
      } else {
        console.error("Erro HTTP:", response.status)
        setError(`Erro ao carregar clientes (${response.status})`)
        setClients([])
      }
    } catch (error) {
      console.error("Erro de rede:", error)
      setError("Erro de conexão. Verifique se o servidor está a funcionar.")
      setClients([])
    } finally {
      setLoading(false)
    }
  }

  const handleSaveClient = async () => {
    if (!clientData.nome.trim()) {
      alert("Nome é obrigatório")
      return
    }

    if (!clientData.telefone.trim()) {
      alert("Telefone é obrigatório")
      return
    }

    if (!clientData.email.trim()) {
      alert("Email é obrigatório")
      return
    }

    setSavingClient(true)

    try {
      const url = editingClient ? `/api/clients/${editingClient.id}` : "/api/clients"
      const method = editingClient ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: clientData.nome.trim(),
          telefone: clientData.telefone.trim(),
          email: clientData.email.trim(),
          nif: clientData.nif.trim(),
          morada: clientData.morada.trim(),
          tipo: clientData.tipo,
        }),
      })

      if (response.ok) {
        const savedClient = await response.json()

        if (editingClient) {
          setClients((prev) => prev.map((c) => (c.id === editingClient.id ? savedClient : c)))
        } else {
          setClients((prev) => [savedClient, ...prev])
        }

        setShowClientDialog(false)
        setEditingClient(null)
        resetClientData()
      } else {
        const errorData = await response.json()
        alert("Erro ao salvar cliente: " + (errorData.error || "Erro desconhecido"))
      }
    } catch (error) {
      console.error("Erro ao salvar cliente:", error)
      alert("Erro de conexão ao salvar cliente")
    } finally {
      setSavingClient(false)
    }
  }

  const handleEditClient = (client: Client) => {
    setEditingClient(client)
    setClientData({
      nome: client.nome || "",
      telefone: client.telefone || "",
      email: client.email || "",
      nif: client.nif || "",
      morada: client.morada || "",
      tipo: client.tipo || "particular",
    })
    setShowClientDialog(true)
  }

  const handleDeleteClient = async (clientId: number) => {
    try {
      const response = await fetch(`/api/clients/${clientId}`, {
        method: "DELETE",
      })

      if (response.ok) {
        setClients((prev) => prev.filter((c) => c.id !== clientId))
      } else {
        const errorData = await response.json()
        alert("Erro ao eliminar cliente: " + (errorData.error || "Erro desconhecido"))
      }
    } catch (error) {
      console.error("Erro ao eliminar cliente:", error)
      alert("Erro de conexão ao eliminar cliente")
    }
  }

  const openNewClientDialog = () => {
    setEditingClient(null)
    resetClientData()
    setShowClientDialog(true)
  }

  const resetClientData = () => {
    setClientData({
      nome: "",
      telefone: "",
      email: "",
      nif: "",
      morada: "",
      tipo: "particular",
    })
  }

  // Filtrar clientes
  const filteredClients = clients.filter((client) => {
    const searchLower = searchTerm.toLowerCase()
    const matchesSearch =
      (client.nome || "").toLowerCase().includes(searchLower) ||
      (client.telefone || "").includes(searchTerm) ||
      (client.email || "").toLowerCase().includes(searchLower) ||
      (client.nif || "").includes(searchTerm) ||
      (client.clienteId || "").toLowerCase().includes(searchLower)

    const matchesType = filterType === "all" || client.tipo === filterType

    return matchesSearch && matchesType
  })

  if (loading) {
    return (
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">A carregar clientes...</p>
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
            <h2 className="text-xl font-semibold mb-2">Erro ao carregar clientes</h2>
            <p className="text-gray-600 mb-4">{error}</p>
            <Button onClick={fetchClients}>Tentar novamente</Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Header - ALTURA EXATA ALINHADA */}
        <header
          className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-gray px-6 shadow-sm"
          style={{ minHeight: "64px", maxHeight: "64px" }}
        >
          <div className="flex flex-1 items-center gap-2">
            <Users className="h-6 w-6 text-blue-600" />
            <h1 className="text-xl font-semibold text-gray-900">Gestão de Clientes</h1>
          </div>
          <Button onClick={openNewClientDialog} className="gap-2 bg-gray-800 text-white hover:bg-gray-700 hover:text-white">
            <Plus className="h-4 w-4" />
            Novo Cliente
          </Button>
        </header>

        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Estatísticas */}
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total de Clientes</p>
                      <p className="text-2xl font-bold text-gray-900">{clients.length}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <User className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">Particulares</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {clients.filter((c) => c.tipo === "particular").length}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Building className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">Empresas</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {clients.filter((c) => c.tipo === "empresa").length}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Filtros */}
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Pesquisar por nome, telefone, email, NIF ou ID..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 border-gray-200"
                    />
                  </div>
                  <Select value={filterType} onValueChange={setFilterType}>
                    <SelectTrigger className="w-full sm:w-48 border-gray-200">
                      <SelectValue placeholder="Filtrar por tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos os tipos</SelectItem>
                      <SelectItem value="particular">Particular</SelectItem>
                      <SelectItem value="empresa">Empresa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Lista de Clientes */}
            <Card className="border-0 shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-semibold text-gray-900">
                  Lista de Clientes ({filteredClients.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                {filteredClients.length === 0 ? (
                  <div className="text-center py-12">
                    <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum cliente encontrado</h3>
                    <p className="text-gray-600 mb-4">
                      {searchTerm || filterType !== "all"
                        ? "Tente ajustar os filtros de pesquisa"
                        : "Comece a criar o seu primeiro cliente"}
                    </p>
                    {!searchTerm && filterType === "all" && (
                      <Button onClick={openNewClientDialog} className="gap-2">
                        <Plus className="h-4 w-4" />
                        Criar Primeiro Cliente
                      </Button>
                    )}
                  </div>
                ) : (
                  <div className="divide-y divide-gray-100">
                    {filteredClients.map((client) => (
                      <div key={client.id} className="p-6 hover:bg-gray-50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <h3 className="text-lg font-semibold text-gray-900">{client.nome}</h3>
                              <Badge
                                variant={client.tipo === "empresa" ? "default" : "secondary"}
                                className="capitalize"
                              >
                                {client.tipo}
                              </Badge>
                              {client.clienteId && (
                                <Badge variant="outline" className="text-blue-600 border-blue-200">
                                  {client.clienteId}
                                </Badge>
                              )}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                              <div className="flex items-center gap-2 text-gray-600">
                                <Phone className="h-4 w-4" />
                                <span>{client.telefone}</span>
                              </div>

                              <div className="flex items-center gap-2 text-gray-600">
                                <Mail className="h-4 w-4" />
                                <span>{client.email}</span>
                              </div>

                              {client.nif && (
                                <div className="flex items-center gap-2 text-gray-600">
                                  <FileText className="h-4 w-4" />
                                  <span>NIF: {client.nif}</span>
                                </div>
                              )}

                              {client.morada && (
                                <div className="flex items-center gap-2 text-gray-600">
                                  <MapPin className="h-4 w-4" />
                                  <span>{client.morada}</span>
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="flex items-center gap-2 ml-4">                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleEditClient(client)}
                              className="h-8 w-8 p-0 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                              title="Editar cliente"
                            >
                              <Edit className="h-3 w-3" />
                            </Button>

                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button 
                                  variant="outline" 
                                  size="sm" 
                                  className="h-8 w-8 p-0 hover:bg-red-50 hover:text-red-600 transition-colors"
                                  title="Eliminar cliente"
                                >
                                  <Trash2 className="h-3 w-3" />
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>Eliminar Cliente</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    Tem a certeza que deseja eliminar o cliente &quot;{client.nome}&quot; ({client.clienteId})?
                                    Esta ação não pode ser desfeita.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                  <AlertDialogAction onClick={() => handleDeleteClient(client.id)}>
                                    Eliminar
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
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

      {/* Dialog para Criar/Editar Cliente */}
      <Dialog open={showClientDialog} onOpenChange={setShowClientDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">
              {editingClient ? "Editar Cliente" : "Criar Novo Cliente"}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="clientName" className="text-sm font-medium">
                Nome *
              </Label>
              <Input
                id="clientName"
                value={clientData.nome}
                onChange={(e) => setClientData((prev) => ({ ...prev, nome: e.target.value }))}
                placeholder="Nome completo"
                className="border-gray-200"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="clientPhone" className="text-sm font-medium">
                Telefone *
              </Label>
              <Input
                id="clientPhone"
                value={clientData.telefone}
                onChange={(e) => setClientData((prev) => ({ ...prev, telefone: e.target.value }))}
                placeholder="912345678"
                className="border-gray-200"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="clientEmail" className="text-sm font-medium">
                Email *
              </Label>
              <Input
                id="clientEmail"
                type="email"
                value={clientData.email}
                onChange={(e) => setClientData((prev) => ({ ...prev, email: e.target.value }))}
                placeholder="cliente@email.com"
                className="border-gray-200"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="clientNif" className="text-sm font-medium">
                NIF
              </Label>
              <Input
                id="clientNif"
                value={clientData.nif}
                onChange={(e) => setClientData((prev) => ({ ...prev, nif: e.target.value }))}
                placeholder="123456789"
                className="border-gray-200"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="clientAddress" className="text-sm font-medium">
                Morada
              </Label>
              <Input
                id="clientAddress"
                value={clientData.morada}
                onChange={(e) => setClientData((prev) => ({ ...prev, morada: e.target.value }))}
                placeholder="Rua, número, cidade"
                className="border-gray-200"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="clientType" className="text-sm font-medium">
                Tipo de Cliente
              </Label>
              <Select
                value={clientData.tipo}
                onValueChange={(value) => setClientData((prev) => ({ ...prev, tipo: value }))}
              >
                <SelectTrigger className="border-gray-200">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="particular">Particular</SelectItem>
                  <SelectItem value="empresa">Empresa</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex justify-end gap-3 pt-4">
              <Button type="button" variant="outline" onClick={() => setShowClientDialog(false)}>
                Cancelar
              </Button>
              <Button type="button" onClick={handleSaveClient} disabled={savingClient}>
                {savingClient ? "A guardar..." : editingClient ? "Atualizar" : "Criar Cliente"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
