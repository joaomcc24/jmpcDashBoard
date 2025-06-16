// src/app/services/page.tsx
'use client'

import { Sidebar } from "@/components/layout/Sidebar" 
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useEffect, useState } from "react"

interface Service {
  id: string
  tipo: string
  descricaoProblema: string
  estado: string
  dataEntrada: string
  tecnico: string
  cliente: {
    nome: string
    email: string
  }
  equipamento: {
    tipo: string
    marca: string
    modelo: string
  }
}

export default function Services() {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchServices()
  }, [])

  const fetchServices = async () => {
    try {
      const response = await fetch('/api/services')
      const data = await response.json()
      setServices(data)
    } catch (error) {
      console.error('Erro ao buscar serviços:', error)
    } finally {
      setLoading(false)
    }
  }

  const getStatusColor = (estado: string) => {
    switch (estado.toLowerCase()) {
      case 'pendente': return 'bg-yellow-100 text-yellow-800'
      case 'em_andamento': return 'bg-blue-100 text-blue-800'
      case 'concluido': return 'bg-green-100 text-green-800'
      case 'cancelado': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6">
          <div className="flex flex-1 items-center gap-2">
            <h1 className="text-lg font-semibold">Gestão de Serviços</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline">Ajuda</Button>
            <Link href="/services/new">
              <Button>Novo Serviço</Button>
            </Link>
          </div>
        </header>
        
        <main className="flex-1 overflow-auto p-4 sm:p-6">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <p>Carregando serviços...</p>
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {services.length === 0 ? (
                <div className="col-span-full text-center py-8">
                  <p className="text-gray-500">Nenhum serviço encontrado</p>
                  <Link href="/services/new">
                    <Button className="mt-4">Criar Primeiro Serviço</Button>
                  </Link>
                </div>
              ) : (
                services.map((service) => (
                  <Card key={service.id} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{service.tipo}</CardTitle>
                        <Badge className={getStatusColor(service.estado)}>
                          {service.estado.replace('_', ' ')}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <p><strong>Cliente:</strong> {service.cliente.nome}</p>
                        <p><strong>Equipamento:</strong> {service.equipamento.marca} {service.equipamento.modelo}</p>
                        <p><strong>Técnico:</strong> {service.tecnico}</p>
                        <p><strong>Data:</strong> {new Date(service.dataEntrada).toLocaleDateString('pt-PT')}</p>
                        <p className="text-gray-600 line-clamp-2">{service.descricaoProblema}</p>
                      </div>
                      <div className="mt-4 flex gap-2">
                        <Link href={`/services/${service.id}`}>
                          <Button variant="outline" size="sm">Ver Detalhes</Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  )
}