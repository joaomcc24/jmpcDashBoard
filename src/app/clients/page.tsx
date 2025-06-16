"use client"

import { useState, useEffect } from "react"
import { Plus, Search, User, Phone, Mail, MapPin, Building, Users, Edit, Trash2 } from "lucide-react"
import { Sidebar } from "@/components/layout/Sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
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
  nome: string
  telefone: string
  email: string
  morada: string
  tipo: string
  createdAt?: string
}

export default function ClientsPage() {
  const [clients, setClients] = useState<Client[]>([])
  const [loading, setLoading] = useState(true)
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
    morada: "",
    tipo: "particular",
  })

  // Buscar clientes
  useEffect(() => {
    fetchClients()
  }, [])

  const fetchClients = async () => {
    setLoading(true)
    try {
      console.log("Buscando clientes...")
      const response = await fetch("/api/clients")
      console.log("Status da resposta:", response.status)

      if (response.ok) {
        const data = await response.json()
        console.log("Clientes recebidos:", data)
        setClients(data)
      } else {
        console.error("Erro ao buscar clientes:", response.status)
        alert("Erro ao carregar clientes")
      }
    } catch (error) {
      console.error("Erro ao buscar clientes:", error)
      alert("Erro de conexão ao carregar clientes")
    } finally {
      setLoading(false)
    }
  }

  const handleSaveClient = async () => {
    if (!clientData.nome || !clientData.telefone || !clientData.email) {
      alert("Nome, telefone e email são obrigatórios")
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
        body: JSON.stringify(clientData),
      })

      if (response.ok) {
        const savedClient = await response.json()

        if (editingClient) {
          // Atualizar cliente existente
          setClients((prev) => prev.map((c) => (c.id === editingClient.id ? savedClient : c)))
        } else {
          // Adicionar novo cliente
          setClients((prev) => [savedClient, ...prev])
        }

        setShowClientDialog(false)
        setEditingClient(null)
        setClientData({
          nome: "",
          telefone: "",
          email: "",
          morada: "",
          tipo: "particular",
        })
      } else {
        const error = await response.json()
        alert("Erro ao salvar cliente: " + (error.error || "Erro desconhecido"))
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
      nome: client.nome,
      telefone: client.telefone,
      email: client.email,
      morada: client.morada,
      tipo: client.tipo,
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
        alert("Erro ao eliminar cliente")
      }
    } catch (error) {
      console.error("Erro ao eliminar cliente:", error)
      alert("Erro de conexão ao eliminar cliente")
    }
  }

  const openNewClientDialog = () => {
    setEditingClient(null)
    setClientData({
      nome: "",
      telefone: "",
      email: "",
      morada: "",
      tipo: "particular",
    })
    setShowClientDialog(true)
  }

  // Filtrar clientes
  const filteredClients = clients.filter((client) => {
    const matchesSearch =
      client.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.telefone.includes(searchTerm) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesType = filterType === "all" || client.tipo === filterType

    return matchesSearch && matchesType
  })

  if (loading) {
    return (
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Carregando clientes...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6">
          <div className="flex flex-1 items-center gap-2">
            <Users className="h-5 w-5" />
            <h1 className="text-lg font-semibold">Gestão de Clientes</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button onClick={openNewClientDialog} className="gap-2">
              <Plus className="h-4 w-4" />
              Novo Cliente
            </Button>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-4 sm:p-6">
          <div className="space-y-6">
            {/* Estatísticas */}
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-600">Total de Clientes</p>
                      <p className="text-2xl font-bold">{clients.length}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="text-sm text-gray-600">Particulares</p>
                      <p className="text-2xl font-bold">{clients.filter((c) => c.tipo === "particular").length}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2">
                    <Building className="h-5 w-5 text-purple-600" />
                    <div>
                      <p className="text-sm text-gray-600">Empresas</p>
                      <p className="text-2xl font-bold">{clients.filter((c) => c.tipo === "empresa").length}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Filtros e Pesquisa */}
            <Card>
              <CardHeader>
                <CardTitle>Filtros</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Pesquisar por nome, telefone ou email..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select value={filterType} onValueChange={setFilterType}>
                    <SelectTrigger className="w-full sm:w-48">
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

            {/* Tabela de Clientes */}
            <Card>
              <CardHeader>
                <CardTitle>Lista de Clientes ({filteredClients.length})</CardTitle>
              </CardHeader>
              <CardContent>
                {filteredClients.length === 0 ? (
                  <div className="text-center py-12">
                    <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum cliente encontrado</h3>
                    <p className="text-gray-600 mb-4">
                      {searchTerm || filterType !== "all"
                        ? "Tente ajustar os filtros de pesquisa"
                        : "Comece criando o seu primeiro cliente"}
                    </p>
                    {!searchTerm && filterType === "all" && (
                      <Button onClick={openNewClientDialog} className="gap-2">
                        <Plus className="h-4 w-4" />
                        Criar Primeiro Cliente
                      </Button>
                    )}
                  </div>
                ) : (
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Nome</TableHead>
                          <TableHead>Telefone</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Morada</TableHead>
                          <TableHead>Tipo</TableHead>
                          <TableHead className="text-right">Ações</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredClients.map((client) => (
                          <TableRow key={client.id}>
                            <TableCell className="font-medium">{client.nome}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-1">
                                <Phone className="h-3 w-3 text-gray-400" />
                                {client.telefone}
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-1">
                                <Mail className="h-3 w-3 text-gray-400" />
                                {client.email}
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-3 w-3 text-gray-400" />
                                {client.morada || "Não informado"}
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge variant={client.tipo === "empresa" ? "default" : "secondary"}>
                                {client.tipo === "empresa" ? "Empresa" : "Particular"}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              <div className="flex justify-end gap-2">
                                <Button variant="outline" size="sm" onClick={() => handleEditClient(client)}>
                                  <Edit className="h-3 w-3" />
                                </Button>
                                <AlertDialog>
                                  <AlertDialogTrigger asChild>
                                    <Button variant="outline" size="sm">
                                      <Trash2 className="h-3 w-3" />
                                    </Button>
                                  </AlertDialogTrigger>
                                  <AlertDialogContent>
                                    <AlertDialogHeader>
                                      <AlertDialogTitle>Eliminar Cliente</AlertDialogTitle>
                                      <AlertDialogDescription>
                                        Tem a certeza que deseja eliminar o cliente "{client.nome}"? Esta ação não pode
                                        ser desfeita.
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
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
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
            <DialogTitle>{editingClient ? "Editar Cliente" : "Criar Novo Cliente"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="clientName">Nome *</Label>
              <Input
                id="clientName"
                value={clientData.nome}
                onChange={(e) => setClientData((prev) => ({ ...prev, nome: e.target.value }))}
                placeholder="Nome completo"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="clientPhone">Telefone *</Label>
              <Input
                id="clientPhone"
                value={clientData.telefone}
                onChange={(e) => setClientData((prev) => ({ ...prev, telefone: e.target.value }))}
                placeholder="912345678"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="clientEmail">Email *</Label>
              <Input
                id="clientEmail"
                type="email"
                value={clientData.email}
                onChange={(e) => setClientData((prev) => ({ ...prev, email: e.target.value }))}
                placeholder="cliente@email.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="clientAddress">Morada</Label>
              <Input
                id="clientAddress"
                value={clientData.morada}
                onChange={(e) => setClientData((prev) => ({ ...prev, morada: e.target.value }))}
                placeholder="Rua, número, cidade"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="clientType">Tipo de Cliente</Label>
              <Select
                value={clientData.tipo}
                onValueChange={(value) => setClientData((prev) => ({ ...prev, tipo: value }))}
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
              <Button type="button" variant="outline" onClick={() => setShowClientDialog(false)}>
                Cancelar
              </Button>
              <Button type="button" onClick={handleSaveClient} disabled={savingClient}>
                {savingClient ? "Guardando..." : editingClient ? "Atualizar" : "Criar Cliente"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
