"use client"

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { ArrowLeft, Save, X } from 'lucide-react'
import { Sidebar } from '@/components/layout/Sidebar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'

interface ServiceData {
  id: string
  cliente: {
    id: number
    nome: string
    telefone: string
    email: string
    morada: string
    tipo: string
  }
  equipamento: {
    id: number
    tipo: string
    marca: string
    modelo: string
    numeroSerie: string | null
    dataCompra: string | null
  }
  tipo: string
  descricaoProblema: string
  estado: string
  dataEntrada: string
  dataDiagnostico: string | null
  dataReparacao: string | null
  tecnico: string | null
  garantia: boolean
  periodoGarantia: string | null
  notas: string | null
}

export default function EditServicePage() {
  const router = useRouter()
  const params = useParams()
  const [service, setService] = useState<ServiceData | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [formData, setFormData] = useState({
    tipo: '',
    descricaoProblema: '',
    tecnico: '',
    garantia: false,
    notas: ''
  })
  const technicians = [
    { id: "1", nome: "Diogo Cardoso" },
    { id: "2", nome: "Jorge Cardoso" },
  ]

  useEffect(() => {
    fetchService()
  }, [params.id])

  const fetchService = async () => {
    try {
      const response = await fetch(`/api/services/${params.id}`)
      if (response.ok) {        const serviceData = await response.json()
        setService(serviceData)
        setFormData({
          tipo: serviceData.tipo || '',
          descricaoProblema: serviceData.descricaoProblema || '',
          tecnico: serviceData.tecnico || '',
          garantia: serviceData.garantia || false,
          notas: serviceData.notas || ''
        })
      }
    } catch (error) {
      console.error('Erro ao carregar serviço:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    try {
      const response = await fetch(`/api/services/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        router.push(`/services/${params.id}`)
      } else {
        console.error('Erro ao atualizar serviço')
        alert('Erro ao atualizar serviço')
      }
    } catch (error) {
      console.error('Erro ao atualizar serviço:', error)
      alert('Erro ao atualizar serviço')
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">A carregar serviço...</p>
        </div>
      </div>
    )
  }

  if (!service) {
    return (
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col items-center justify-center">
          <p className="text-gray-600">Serviço não encontrado</p>
          <Button onClick={() => router.back()} className="mt-4">
            Voltar
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col lg:ml-0 ml-0">
        {/* Spacer for mobile header */}
        <div className="lg:hidden h-16"></div>
        
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6 lg:top-0 top-16">
          <Button variant="ghost" size="sm" onClick={() => router.back()} className="gap-1">
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Button>
          <div className="flex flex-1 items-center gap-2">
            <h1 className="text-lg font-semibold">Editar Serviço - {service.id}</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" onClick={() => router.back()} className="gap-1">
              <X className="h-4 w-4" />
              <span className="hidden sm:inline">Cancelar</span>
            </Button>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-4 sm:p-6">
          <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl mx-auto">
            {/* Informações do Cliente (readonly) */}
            <Card>
              <CardHeader>
                <CardTitle>Informações do Cliente</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label>Nome</Label>
                    <Input value={service.cliente.nome} readOnly className="bg-gray-50" />
                  </div>
                  <div>
                    <Label>Telefone</Label>
                    <Input value={service.cliente.telefone} readOnly className="bg-gray-50" />
                  </div>
                  <div>
                    <Label>Email</Label>
                    <Input value={service.cliente.email} readOnly className="bg-gray-50" />
                  </div>
                  <div>
                    <Label>Tipo</Label>
                    <Input value={service.cliente.tipo} readOnly className="bg-gray-50" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Informações do Equipamento (readonly) */}
            <Card>
              <CardHeader>
                <CardTitle>Informações do Equipamento</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label>Tipo</Label>
                    <Input value={service.equipamento.tipo} readOnly className="bg-gray-50" />
                  </div>
                  <div>
                    <Label>Marca</Label>
                    <Input value={service.equipamento.marca} readOnly className="bg-gray-50" />
                  </div>
                  <div>
                    <Label>Modelo</Label>
                    <Input value={service.equipamento.modelo} readOnly className="bg-gray-50" />
                  </div>
                  <div>
                    <Label>Número de Série</Label>
                    <Input value={service.equipamento.numeroSerie || 'N/A'} readOnly className="bg-gray-50" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Detalhes do Serviço (editável) */}
            <Card>
              <CardHeader>
                <CardTitle>Detalhes do Serviço</CardTitle>
              </CardHeader>              <CardContent className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="tipo">Tipo de Serviço</Label>
                    <Select onValueChange={(value) => handleInputChange("tipo", value)} value={formData.tipo}>
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

                  <div className="space-y-2">
                    <Label htmlFor="tecnico">Técnico Responsável</Label>
                    <Select onValueChange={(value) => handleInputChange("tecnico", value)} value={formData.tecnico}>
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
                </div>                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="garantia"
                    checked={formData.garantia}
                    onCheckedChange={(checked) => handleInputChange("garantia", checked)}
                  />
                  <Label htmlFor="garantia">Serviço em garantia</Label>
                </div>

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

                <div className="space-y-2">
                  <Label htmlFor="notas">Notas Técnicas</Label>
                  <Textarea
                    id="notas"
                    placeholder="Observações técnicas, diagnóstico, soluções aplicadas, etc..."
                    value={formData.notas}
                    onChange={(e) => handleInputChange("notas", e.target.value)}
                    className="min-h-[120px]"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Botões de Ação */}
            <div className="flex justify-end gap-4 pt-4">
              <Button type="button" variant="outline" onClick={() => router.back()}>
                Cancelar
              </Button>
              <Button type="submit" disabled={saving} className="gap-2">
                <Save className="h-4 w-4" />
                {saving ? "A guardar..." : "Guardar Alterações"}
              </Button>
            </div>
          </form>
        </main>
      </div>
    </div>
  )
}
