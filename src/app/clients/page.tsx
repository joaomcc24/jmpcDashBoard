"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DataTable } from "@/components/ui/data-table"
import { SearchBar } from "@/components/ui/search-bar"
import { StatusBadge } from "@/components/ui/status-badge"
import { Plus, Eye, Edit, Trash } from "lucide-react"
import { Sidebar } from "@/components/layout/Sidebar" 

const clientesData = [
  {
    id: "CLT-001",
    nome: "João Silva",
    email: "joao.silva@email.com",
    telefone: "912345678",
    estadoServico: 2,
    ultimoServico: "2023-06-15",
  },
  {
    id: "CLT-002",
    nome: "Maria Santos",
    email: "maria.santos@email.com",
    telefone: "923456789",
    estadoServico: 1,
    ultimoServico: "2023-06-20",
  },
  {
    id: "CLT-003",
    nome: "António Ferreira",
    email: "antonio.ferreira@email.com",
    telefone: "934567890",
    estadoServico: 0,
    ultimoServico: "2023-05-10",
  },
  {
    id: "CLT-004",
    nome: "Ana Oliveira",
    email: "ana.oliveira@email.com",
    telefone: "945678901",
    estadoServico: 3,
    ultimoServico: "2023-06-25",
  },
  {
    id: "CLT-005",
    nome: "Manuel Costa",
    email: "manuel.costa@email.com",
    telefone: "956789012",
    estadoServico: 1,
    ultimoServico: "2023-06-18",
  },
]

export default function ClientesPage() {
  const [clientes, setClientes] = useState(clientesData)
  const [filteredClientes, setFilteredClientes] = useState(clientesData)

  const handleSearch = (term: string) => {
    const filtered = clientes.filter(
      (cliente) =>
        cliente.nome.toLowerCase().includes(term.toLowerCase()) ||
        cliente.email.toLowerCase().includes(term.toLowerCase()) ||
        cliente.telefone.includes(term),
    )
    setFilteredClientes(filtered)
  }

  const columns = [
    {
      key: "id",
      header: "ID",
      cell: (cliente: any) => <span className="font-medium">{cliente.id}</span>,
    },
    {
      key: "nome",
      header: "Nome",
      cell: (cliente: any) => cliente.nome,
    },
    {
      key: "email",
      header: "Email",
      cell: (cliente: any) => cliente.email,
    },
    {
      key: "telefone",
      header: "Telefone",
      cell: (cliente: any) => cliente.telefone,
    },
    {
      key: "estadoServico",
      header: "Estado do Serviço",
      cell: (cliente: any) => {
        let estado;
        if (typeof cliente.estadoServico === 'number') {
          const estadoMap = {
            0: "concluido",
            1: "aguarda_peca",
            2: "pendente",
            3: "resposta_marca"
          };
          estado = estadoMap[cliente.estadoServico as keyof typeof estadoMap] || "pendente";
        } else {
          estado = cliente.estadoServico;
        }
        
        return <StatusBadge status={estado} />;
      },
    },
    {
      key: "acoes",
      header: "Ações",
      cell: (cliente: any) => (
        <div className="flex space-x-2">
          <Button variant="ghost" size="icon">
            <Eye className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Edit className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Trash className="h-4 w-4" />
          </Button>
        </div>
      ),
    },
  ]

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6">
          <div className="flex flex-1 items-center gap-2">
            <h1 className="text-lg font-semibold">Gestão de Clientes</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline">Ajuda</Button>
            <Button>Novo Cliente</Button>
          </div>
        </header>
        
        <main className="flex-1 overflow-auto p-4 sm:p-6">
        </main>
      </div>
    </div>
  );
}
