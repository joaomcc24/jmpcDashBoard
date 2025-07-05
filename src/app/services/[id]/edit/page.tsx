"use client"

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { ArrowLeft, Save, X, Upload, File, Wrench } from 'lucide-react'
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
  const [documentoCompraFile, setDocumentoCompraFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [showCustomBrand, setShowCustomBrand] = useState(false)
  const [customBrand, setCustomBrand] = useState("")
  const [formData, setFormData] = useState({
    tipo: '',
    descricaoProblema: '',
    tecnico: '',
    garantia: false,
    notas: '',
    dataCompra: '',
    documentoCompra: '',
    // Dados do equipamento editáveis
    equipamentoTipo: '',
    equipamentoMarca: '',
    equipamentoModelo: '',
    equipamentoNumeroSerie: ''
  })
  
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
    "Outro (especificar)"
  ]
  
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
        
        // Verificar se já existe documento de compra nas fotos
        const documentoCompraFoto = serviceData.fotos?.find((foto: any) => foto.descricao === 'Documento de Compra')
        
        // Verificar se a marca é personalizada (não está na lista)
        const isCustomBrand = !equipmentBrands.slice(0, -1).includes(serviceData.equipamento.marca)
        if (isCustomBrand && serviceData.equipamento.marca) {
          setShowCustomBrand(true)
          setCustomBrand(serviceData.equipamento.marca)
        }
        
        setFormData({
          tipo: serviceData.tipo || '',
          descricaoProblema: serviceData.descricaoProblema || '',
          tecnico: serviceData.tecnico || '',
          garantia: serviceData.garantia || false,
          notas: serviceData.notas || '',
          dataCompra: serviceData.equipamento.dataCompra ? serviceData.equipamento.dataCompra.split('T')[0] : '',
          documentoCompra: documentoCompraFoto ? 'Documento já anexado (ver aba Fotos)' : '',
          equipamentoTipo: serviceData.equipamento.tipo || '',
          equipamentoMarca: isCustomBrand ? '' : (serviceData.equipamento.marca || ''),
          equipamentoModelo: serviceData.equipamento.modelo || '',
          equipamentoNumeroSerie: serviceData.equipamento.numeroSerie || ''
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
    
    // Se selecionou "Outro (especificar)" para marca, mostrar campo personalizado
    if (field === "equipamentoMarca") {
      if (value === "Outro (especificar)") {
        setShowCustomBrand(true)
        setFormData((prev) => ({
          ...prev,
          equipamentoMarca: "",
        }))
      } else if (!showCustomBrand) {
        // Só limpar se não estivermos no modo personalizado
        setCustomBrand("")
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    try {
      // Separar dados do equipamento (incluindo dataCompra) dos dados do serviço
      const {
        equipamentoTipo,
        equipamentoMarca,
        equipamentoModelo,
        equipamentoNumeroSerie,
        dataCompra,
        documentoCompra,
        ...serviceData
      } = formData

      // Criar payload com dados do equipamento separados
      const payload = {
        ...serviceData,
        equipamentoTipo,
        equipamentoMarca,
        equipamentoModelo,
        equipamentoNumeroSerie,
        equipamentoDataCompra: dataCompra || null
      }

      const response = await fetch(`/api/services/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        // Se há documento de compra para fazer upload, fazer upload como foto
        if (documentoCompraFile && formData.garantia) {
          const formDataPhoto = new FormData()
          formDataPhoto.append('photo', documentoCompraFile)
          formDataPhoto.append('description', 'Documento de Compra')
          formDataPhoto.append('serviceId', params.id as string)
          
          const photoResponse = await fetch(`/api/services/${params.id}/photos`, {
            method: 'POST',
            body: formDataPhoto,
          })
          
          if (photoResponse.ok && documentoCompraFile.type === 'application/pdf') {
            // Se for PDF, tentar gerar prévia
            try {
              const { generatePdfPreview } = await import('@/utils/pdfPreview')
              const previewFile = await generatePdfPreview(documentoCompraFile)
              
              if (previewFile) {
                const previewFormData = new FormData()
                previewFormData.append('photo', previewFile)
                previewFormData.append('description', 'Documento de Compra (Prévia)')
                previewFormData.append('serviceId', params.id as string)
                
                await fetch(`/api/services/${params.id}/photos`, {
                  method: 'POST',
                  body: previewFormData,
                })
              }
            } catch (previewError) {
              console.log('Não foi possível gerar prévia do PDF:', previewError)
            }
          }
        }

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

      <div className="flex-1 flex flex-col">
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6">
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

            {/* Informações do Equipamento */}
            <Card>
              <CardHeader>
                <CardTitle>Informações do Equipamento</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="equipamentoTipo">Tipo de Equipamento</Label>
                    <Select onValueChange={(value) => handleInputChange("equipamentoTipo", value)} value={formData.equipamentoTipo}>
                      <SelectTrigger className="bg-white">
                        <SelectValue placeholder="Selecione o tipo" />
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
                  <div>
                    <Label htmlFor="equipamentoMarca">Marca</Label>
                    {!showCustomBrand ? (
                      <Select onValueChange={(value) => handleInputChange("equipamentoMarca", value)} value={formData.equipamentoMarca}>
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
                    ) : (
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                          <div className="flex items-center gap-2 flex-1">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                              <Wrench className="h-4 w-4 text-blue-600" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-blue-900">Marca Personalizada</p>
                              <p className="text-xs text-blue-600">Digite o nome da marca</p>
                            </div>
                          </div>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                              setShowCustomBrand(false)
                              setCustomBrand("")
                              setFormData(prev => ({ ...prev, equipamentoMarca: "" }))
                            }}
                            className="text-blue-600 hover:text-blue-800 hover:bg-blue-100"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                        <Input
                          placeholder="Digite o nome da marca..."
                          value={customBrand}
                          onChange={(e) => {
                            setCustomBrand(e.target.value)
                            handleInputChange("equipamentoMarca", e.target.value)
                          }}
                          className="border-blue-300 focus:border-blue-500 focus:ring-blue-500"
                          required
                        />
                      </div>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="equipamentoModelo">Modelo</Label>
                    <Input 
                      id="equipamentoModelo"
                      value={formData.equipamentoModelo} 
                      onChange={(e) => handleInputChange("equipamentoModelo", e.target.value)}
                      placeholder="Modelo do equipamento"
                    />
                  </div>
                  <div>
                    <Label htmlFor="equipamentoNumeroSerie">Número de Série</Label>
                    <Input 
                      id="equipamentoNumeroSerie"
                      value={formData.equipamentoNumeroSerie} 
                      onChange={(e) => handleInputChange("equipamentoNumeroSerie", e.target.value)}
                      placeholder="Número de série (opcional)"
                    />
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

                {/* Campos de garantia - só aparecem quando a checkbox está marcada */}
                {formData.garantia && (
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
                      </div>                              {/* Documento de Compra */}
                              <div className="space-y-2">
                                <Label htmlFor="documentoCompra">Documento de Compra (opcional)</Label>
                                {formData.documentoCompra && formData.documentoCompra.includes('já anexado') ? (
                                  <div className="flex items-center gap-2 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                                    <File className="h-4 w-4 text-blue-600" />
                                    <span className="text-sm text-blue-700 flex-1">Documento já anexado (ver aba Fotos)</span>
                                  </div>
                                ) : (
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
                                )}
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
