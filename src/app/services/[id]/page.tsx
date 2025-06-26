"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { 
  ArrowLeft, 
  Printer, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  Wrench, 
  FileText, 
  CheckCircle2, 
  XCircle,
  Image as ImageIcon,
  Edit,
  MoreVertical,
  PlusCircle,
  Trash2,
  ChevronDown
} from "lucide-react"
import { Sidebar } from "@/components/layout/Sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { StatusBadge } from "@/components/ui/status-badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { ConfirmDialog } from "@/components/ui/confirm-dialog"
import { AddPartDialog } from "@/components/ui/add-part-dialog"
import { AddLaborDialog } from "@/components/ui/add-labor-dialog"
import { AddTravelDialog } from "@/components/ui/add-travel-dialog"
import { PrintReport } from "@/components/ui/print-report"

interface ServiceData {
  id: string;
  cliente: {
    id: number;
    nome: string;
    telefone: string;
    email: string;
    morada: string;
    tipo: string;
    createdAt: string;
    updatedAt: string;
  };
  equipamento: {
    id: number;
    tipo: string;
    marca: string;
    modelo: string;
    numeroSerie: string | null;
    dataCompra: string | null;
    createdAt: string;
    updatedAt: string;
  };
  tipo: string;
  descricaoProblema: string;
  estado: string;
  dataEntrada: string;
  dataDiagnostico: string | null;
  dataReparacao: string | null;
  tecnico: string | null;
  garantia: boolean;
  periodoGarantia: string | null;
  notas: string | null;
  historico: Array<{
    id: number;
    servicoId: string;
    data: string;
    hora: string;
    acao: string;
    autor: string;
    createdAt: string;
  }>;
  fotos: Array<{
    id: number;
    servicoId: string;
    descricao: string;
    url: string | null;
    createdAt: string;
  }>;  pecas: Array<{
    id: number;
    servicoId: string;
    codigo: string;
    nome: string;
    quantidade: number;
    precoUnitario: string; // Decimal vem como string
    total: string; // Decimal vem como string
    createdAt: string;
  }>;
  maoDeObra: {
    id: number;
    servicoId: string;
    horas: string; // Decimal vem como string
    valorHora: string; // Decimal vem como string
    total: string; // Decimal vem como string
    createdAt: string;
    updatedAt: string;
  } | null;
  deslocacao: {
    id: number;
    servicoId: string;
    km: string; // Decimal vem como string
    valorKm: string; // Decimal vem como string
    total: string; // Decimal vem como string
    createdAt: string;
    updatedAt: string;
  } | null;
  valorTotal: string | null; // Decimal vem como string
  createdAt: string;
  updatedAt: string;
}

export default function DetalhesServicoPage() {  const params = useParams()
  const router = useRouter()
  const serviceId = params.id
  const [showCancelDialog, setShowCancelDialog] = useState(false)
  const [isChangingStatus, setIsChangingStatus] = useState(false)
  
  // Novos estados para histórico e fotos
  const [showAddHistoryDialog, setShowAddHistoryDialog] = useState(false)
  const [newHistoryEntry, setNewHistoryEntry] = useState("")
  const [showAddPhotoDialog, setShowAddPhotoDialog] = useState(false)
  const [newPhotoDescription, setNewPhotoDescription] = useState("")
  const [selectedPhotoFile, setSelectedPhotoFile] = useState<File | null>(null)
  
  const [serviceData, setServiceData] = useState<ServiceData | null>(null);

  const [loading, setLoading] = useState(true)
  // Dados do serviço (em uma aplicação real, estes dados viriam de uma API)
  useEffect(() => {
    // Adicione este código no useEffect de fetchServiceData na página de detalhes do serviço
const fetchServiceData = async () => {
  setLoading(true)
  try {
    // Adicione timeout para evitar espera infinita
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 segundos de timeout
    
    const response = await fetch(`/api/services/${serviceId}`, {
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      console.error(`Erro HTTP: ${response.status}`);
      throw new Error('Erro ao buscar dados do serviço');
    }
      const data = await response.json();
    setServiceData(data);
  } catch (error) {
    console.error("Erro ao carregar serviço:", error);
    setLoading(false);
    // Redirecionar de volta ao dashboard após erro
    router.push('/dashboard');
  } finally {
    setLoading(false);
  }
};    if (serviceId) {
      fetchServiceData()
    }
  }, [serviceId, router])

  const { handlePrint } = PrintReport({ serviceData: serviceData! })

  const refreshServiceData = async () => {
    if (!serviceId) return
    
    try {
      const response = await fetch(`/api/services/${serviceId}`)
      if (response.ok) {        const data = await response.json()
        setServiceData(data)
      }
    } catch (error) {
      console.error("Erro ao atualizar dados:", error)
    }  }

  const handleDeletePart = async (partId: number) => {
    try {
      const response = await fetch(`/api/services/${serviceId}/parts/${partId}`, {
        method: 'DELETE',
      })
      
      if (response.ok) {
        refreshServiceData()
      }
    } catch (error) {
      console.error("Erro ao remover peça:", error)
    }
  }

  const handleDeleteLabor = async () => {
    try {
      const response = await fetch(`/api/services/${serviceId}/labor`, {
        method: 'DELETE',
      })
      
      if (response.ok) {
        refreshServiceData()
      }
    } catch (error) {
      console.error("Erro ao remover mão de obra:", error)
    }
  }

  const handleDeleteTravel = async () => {
    try {
      const response = await fetch(`/api/services/${serviceId}/travel`, {
        method: 'DELETE',
      })
      
      if (response.ok) {
        refreshServiceData()
      }
    } catch (error) {
      console.error("Erro ao remover deslocação:", error)
    }
  }

  const handleCancelService = async () => {
    if (!serviceData) return
    
    try {
      const response = await fetch(`/api/services/${serviceId}`, {
        method: 'DELETE',
      })
      
      if (!response.ok) {
        throw new Error('Erro ao cancelar serviço')
      }
      
      // Redirecionar para a página de serviços após eliminar
      router.push('/services')
    } catch (error) {
      console.error("Erro ao cancelar serviço:", error)
      // Adicionar um toast de erro aqui
    }
  }

  const handleStatusChange = async (newStatus: string) => {
    if (!serviceData || isChangingStatus) return
    
    setIsChangingStatus(true)
    try {
      console.log(`Alterando estado de ${serviceData.estado} para ${newStatus}`)
      
      const response = await fetch(`/api/services/${serviceId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          estado: newStatus
        }),
      })
      
      if (!response.ok) {
        const errorData = await response.text()
        console.error('Erro na resposta:', errorData)
        throw new Error(`Erro ao atualizar estado: ${response.status}`)
      }
      
      const updatedService = await response.json()
      console.log('Serviço atualizado:', updatedService)
      
      // Atualizar o estado local
      setServiceData(prev => prev ? { ...prev, estado: newStatus } : null)
      
      alert(`Estado alterado para: ${newStatus}`)
    } catch (error) {
      console.error("Erro ao alterar estado:", error)
      alert("Erro ao alterar estado do serviço")
    } finally {
      setIsChangingStatus(false)
    }
  }

  const handleAddHistoryEntry = async () => {
    if (!newHistoryEntry.trim()) return
    
    try {
      const response = await fetch(`/api/services/${serviceId}/history`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          acao: newHistoryEntry,
          autor: "Utilizador Atual" // Em uma aplicação real, obteria do contexto do usuário
        }),
      })
      
      if (response.ok) {
        setNewHistoryEntry("")
        setShowAddHistoryDialog(false)
        refreshServiceData()
      }
    } catch (error) {
      console.error("Erro ao adicionar entrada no histórico:", error)
    }
  }

  const handleAddPhoto = async () => {
    if (!selectedPhotoFile || !newPhotoDescription.trim()) return
    
    try {
      const formData = new FormData()
      formData.append('photo', selectedPhotoFile)
      formData.append('description', newPhotoDescription)
      formData.append('serviceId', serviceId as string)
      
      const response = await fetch(`/api/services/${serviceId}/photos`, {
        method: 'POST',
        body: formData,
      })
      
      if (response.ok) {
        setNewPhotoDescription("")
        setSelectedPhotoFile(null)
        setShowAddPhotoDialog(false)
        refreshServiceData()
      }
    } catch (error) {
      console.error("Erro ao adicionar foto:", error)
    }
  }

  const handleDeletePhoto = async (photoId: number) => {
    try {
      const response = await fetch(`/api/services/${serviceId}/photos/${photoId}`, {
        method: 'DELETE',
      })
      
      if (response.ok) {
        refreshServiceData()
      }
    } catch (error) {
      console.error("Erro ao remover foto:", error)
    }
  }

  if (loading || !serviceData) {
    return (
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">A carregar detalhes do serviço...</p>        </div>
      </div>
    )
  }
  
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => router.back()}
            className="gap-1 hover:bg-gray-700 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Button>          <div className="flex flex-1 items-center gap-3">
            <h1 className="text-lg font-semibold">
              Folha de Serviço {serviceData.id}
            </h1>
            <div className="flex items-center gap-2">
              <StatusBadge status={serviceData.estado} />
              
              {/* Dropdown para mudança de estado - mais elegante */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    disabled={isChangingStatus}
                    className="h-8 w-8 p-0 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-full"
                    title="Alterar estado do serviço"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  <div className="px-2 py-1.5 text-sm font-medium text-gray-700 border-b">
                    Alterar Estado
                  </div>
                  {serviceData.estado !== 'pendente' && (
                    <DropdownMenuItem 
                      onClick={() => handleStatusChange('pendente')}
                      className="flex items-center gap-2 py-2"
                    >
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      Pendente
                    </DropdownMenuItem>
                  )}
                  {serviceData.estado !== 'em_progresso' && (
                    <DropdownMenuItem 
                      onClick={() => handleStatusChange('em_progresso')}
                      className="flex items-center gap-2 py-2"
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      Em Progresso
                    </DropdownMenuItem>
                  )}                  {serviceData.estado !== 'aguarda_peca' && (
                    <DropdownMenuItem 
                      onClick={() => handleStatusChange('aguarda_peca')}
                      className="flex items-center gap-2 py-2"
                    >
                      <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      Aguardar por Peça
                    </DropdownMenuItem>
                  )}
                  {serviceData.estado !== 'concluido' && (
                    <DropdownMenuItem 
                      onClick={() => handleStatusChange('concluido')}
                      className="flex items-center gap-2 py-2"
                    >
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      Concluído
                    </DropdownMenuItem>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div><div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="gap-1 hover:bg-gray-100 hover:text-gray-900 transition-colors"
              onClick={handlePrint}
            >
              <Printer className="h-4 w-4" />
              <span className="hidden sm:inline">Imprimir</span>
            </Button>            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" disabled={isChangingStatus}>
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => router.push(`/services/${serviceId}/edit`)}>
                  Editar Serviço
                </DropdownMenuItem>
                <DropdownMenuItem>Enviar por Email</DropdownMenuItem>
                <DropdownMenuItem>Duplicar Serviço</DropdownMenuItem>
                <DropdownMenuItem 
                  className="text-red-600" 
                  onClick={() => setShowCancelDialog(true)}
                >
                  Cancelar Serviço
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        
        <main className="flex-1 overflow-auto p-4 sm:p-6">
          <Tabs defaultValue="detalhes" className="w-full">
          
          <TabsList className="border-b w-full justify-start rounded-none pb-0 mb-6">
          <TabsTrigger 
            value="detalhes"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 bg-transparent hover:bg-transparent focus:bg-transparent"
          >
            Detalhes
          </TabsTrigger>
          <TabsTrigger 
            value="historico"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 bg-transparent hover:bg-transparent focus:bg-transparent"
          >
            Histórico
          </TabsTrigger>
          <TabsTrigger 
            value="fotos"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 bg-transparent hover:bg-transparent focus:bg-transparent"
          >
            Fotos
          </TabsTrigger>
          <TabsTrigger 
            value="relatorio"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 bg-transparent hover:bg-transparent focus:bg-transparent"
          >
            Relatório
          </TabsTrigger>
        </TabsList>   
            <TabsContent value="detalhes" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                {/* Informações do Cliente */}
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <User className="h-5 w-5" />
                      Detalhes do Cliente
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <dl className="space-y-4">
                      <div>
                        <dt className="text-sm font-medium text-muted-foreground">Nome</dt>
                        <dd className="text-base">{serviceData.cliente.nome}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-muted-foreground">Telefone</dt>
                        <dd className="text-base flex items-center gap-1">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          {serviceData.cliente.telefone}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-muted-foreground">Email</dt>
                        <dd className="text-base flex items-center gap-1">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          {serviceData.cliente.email}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-muted-foreground">Morada</dt>
                        <dd className="text-base">{serviceData.cliente.morada}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-muted-foreground">Tipo de Cliente</dt>
                        <dd className="text-base capitalize">{serviceData.cliente.tipo}</dd>
                      </div>
                    </dl>
                  </CardContent>
                </Card>
                
                {/* Informações do Equipamento */}
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Wrench className="h-5 w-5" />
                      Detalhes do Equipamento
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {serviceData.equipamento ? (
                      <dl className="space-y-4">
                        <div>
                          <dt className="text-sm font-medium text-muted-foreground">Tipo</dt>
                          <dd className="text-base">{serviceData.equipamento?.tipo || "Não especificado"}</dd>
                        </div>
                        <div>
                          <dt className="text-sm font-medium text-muted-foreground">Marca</dt>
                          <dd className="text-base">{serviceData.equipamento?.marca || "Não especificado"}</dd>
                        </div>
                        <div>
                          <dt className="text-sm font-medium text-muted-foreground">Modelo</dt>
                          <dd className="text-base">{serviceData.equipamento?.modelo || "Não especificado"}</dd>
                        </div>
                        <div>
                          <dt className="text-sm font-medium text-muted-foreground">Número de Série</dt>
                          <dd className="text-base">{serviceData.equipamento?.numeroSerie || "Não especificado"}</dd>
                        </div>
                        <div>
                          <dt className="text-sm font-medium text-muted-foreground">Data de Compra</dt>
                          <dd className="text-base flex items-center gap-1">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            {serviceData.equipamento?.dataCompra 
                              ? new Date(serviceData.equipamento.dataCompra).toLocaleDateString('pt-PT') 
                              : "Não especificado"}
                          </dd>
                        </div>
                      </dl>
                    ) : (
                      <p className="text-muted-foreground italic">Informações do equipamento não disponíveis</p>
                    )}
                  </CardContent>
                </Card>
              </div>
              
              {/* Detalhes do Serviço */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Detalhes do Serviço
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2">
                    <dl className="space-y-4">
                      <div>
                        <dt className="text-sm font-medium text-muted-foreground">Tipo de Serviço</dt>
                        <dd className="text-base">{serviceData.tipo}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-muted-foreground">Problema Reportado</dt>
                        <dd className="text-base">{serviceData.descricaoProblema}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-muted-foreground">Técnico Responsável</dt>
                        <dd className="text-base">{serviceData.tecnico || "Não atribuído"}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-muted-foreground">Garantia</dt>
                        <dd className="text-base flex items-center gap-1">
                          {serviceData.garantia ? 
                            <CheckCircle2 className="h-4 w-4 text-green-500" /> : 
                            <XCircle className="h-4 w-4 text-red-500" />
                          }
                          {serviceData.garantia ? `Sim` : "Não"}
                        </dd>
                      </div>
                    </dl>
                    
                    <dl className="space-y-4">
                      <div>
                        <dt className="text-sm font-medium text-muted-foreground">Data de Entrada</dt>
                        <dd className="text-base flex items-center gap-1">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          {new Date(serviceData.dataEntrada).toLocaleDateString('pt-PT')}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-muted-foreground">Data do Diagnóstico</dt>
                        <dd className="text-base flex items-center gap-1">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        {serviceData.dataDiagnostico 
                          ? new Date(serviceData.dataDiagnostico).toLocaleDateString('pt-PT')
                          : "Não especificado"}
                      </dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-muted-foreground">Data da Reparação</dt>
                        <dd className="text-base flex items-center gap-1">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        {serviceData.dataReparacao 
                          ? new Date(serviceData.dataReparacao).toLocaleDateString('pt-PT')
                          : "Não especificado"}
                      </dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-muted-foreground">Estado</dt>
                        <dd className="mt-1">
                          <StatusBadge status={serviceData.estado} />
                        </dd>
                      </div>
                    </dl>
                  </div>
                    <div className="mt-6">
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Notas Técnicas</h3>
                    <p className="bg-muted/50 rounded-md p-3 whitespace-pre-wrap">
                      {serviceData.notas || "Sem notas técnicas registadas."}
                    </p>
                  </div>
                </CardContent>
              </Card>            </TabsContent>            {/* Aba de Histórico */}
            <TabsContent value="historico" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Histórico do Serviço
                  </CardTitle>
                  <CardDescription>
                    Acompanhe todas as alterações e atualizações realizadas neste serviço
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {serviceData.historico && serviceData.historico.length > 0 ? (
                    <div className="space-y-4">
                      {serviceData.historico.map((entry, index) => (
                        <div key={entry.id || index} className="flex gap-4 pb-4 border-b last:border-b-0">
                          <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                          <div className="flex-1 space-y-1">
                            <div className="flex items-center justify-between">
                              <p className="font-medium text-sm">{entry.acao}</p>
                              <time className="text-xs text-muted-foreground">
                                {new Date(entry.data).toLocaleDateString('pt-PT')} às {entry.hora}
                              </time>
                            </div>
                            <p className="text-sm text-muted-foreground">Por: {entry.autor}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Clock className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">Nenhum histórico registado para este serviço</p>
                    </div>
                  )}
                  
                  {/* Botão para adicionar nova entrada */}
                  <div className="border-t pt-4 mt-6">
                    <Button 
                      onClick={() => setShowAddHistoryDialog(true)}
                      className="gap-2"
                    >
                      <PlusCircle className="h-4 w-4" />
                      Adicionar Evento
                    </Button>
                  </div>
                </CardContent>
              </Card>
                {/* Dialog para adicionar evento ao histórico */}
              {showAddHistoryDialog && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
                  <div className="bg-white rounded-xl shadow-2xl w-full max-w-md mx-4 border border-gray-200">
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Clock className="h-5 w-5 text-blue-600" />
                        Adicionar Evento ao Histórico
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="history-entry" className="text-sm font-medium text-gray-700">
                            Descrição do evento
                          </Label>
                          <Textarea
                            id="history-entry"
                            value={newHistoryEntry}
                            onChange={(e) => setNewHistoryEntry(e.target.value)}
                            placeholder="Descreva o que aconteceu..."
                            rows={4}
                            className="mt-1 w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                      <div className="flex justify-end gap-3 mt-6">
                        <Button 
                          variant="outline" 
                          onClick={() => {
                            setShowAddHistoryDialog(false)
                            setNewHistoryEntry("")
                          }}
                          className="px-4 py-2"
                        >
                          Cancelar
                        </Button>
                        <Button 
                          onClick={handleAddHistoryEntry}
                          disabled={!newHistoryEntry.trim()}
                          className="px-4 py-2 bg-blue-600 hover:bg-blue-700"
                        >
                          Adicionar Evento
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </TabsContent>

            {/* Aba de Fotos */}
            <TabsContent value="fotos" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <ImageIcon className="h-5 w-5" />
                    Fotos do Serviço
                  </CardTitle>
                  <CardDescription>
                    Documentação visual do equipamento e do processo de reparação
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {serviceData.fotos && serviceData.fotos.length > 0 ? (
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {serviceData.fotos.map((foto, index) => (
                        <div key={foto.id || index} className="space-y-2">
                          <div className="aspect-square bg-muted rounded-lg flex items-center justify-center relative group">
                            {foto.url ? (
                              foto.url.toLowerCase().endsWith('.pdf') ? (
                                <div className="flex flex-col items-center justify-center p-4 text-center">
                                  <FileText className="h-12 w-12 text-blue-600 mb-2" />
                                  <p className="text-sm font-medium text-gray-700">Documento PDF</p>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="mt-2"
                                    onClick={() => window.open(foto.url, '_blank')}
                                  >
                                    Abrir PDF
                                  </Button>
                                </div>
                              ) : (
                                <img 
                                  src={foto.url} 
                                  alt={foto.descricao || `Foto ${index + 1}`}
                                  className="w-full h-full object-cover rounded-lg"
                                  onError={(e) => {
                                    console.error('Erro ao carregar imagem:', foto.url);
                                    (e.target as HTMLImageElement).style.display = 'none';
                                    (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                                  }}
                                />
                              )
                            ) : (
                              <ImageIcon className="h-12 w-12 text-muted-foreground" />
                            )}
                            
                            {/* Fallback para imagem quebrada */}
                            <div className="hidden flex-col items-center justify-center p-4 text-center">
                              <ImageIcon className="h-12 w-12 text-red-400 mb-2" />
                              <p className="text-sm text-red-600">Erro ao carregar</p>
                              <p className="text-xs text-gray-500">{foto.url}</p>
                            </div>
                            
                            {/* Botão de remover foto */}
                            <Button
                              variant="destructive"
                              size="sm"
                              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                              onClick={() => handleDeletePhoto(foto.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="space-y-1">
                            <p className="text-sm font-medium">
                              {foto.descricao || `Foto ${index + 1}`}
                              {foto.descricao === 'Documento de Compra' && (
                                <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                  Garantia
                                </span>
                              )}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Adicionada em {new Date(foto.createdAt).toLocaleDateString('pt-PT')}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <ImageIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground mb-4">Nenhuma foto anexada a este serviço</p>
                    </div>
                  )}
                  
                  {/* Botão para adicionar foto */}
                  <div className="border-t pt-4 mt-6">
                    <Button 
                      onClick={() => setShowAddPhotoDialog(true)}
                      className="gap-2"
                    >
                      <PlusCircle className="h-4 w-4" />
                      Adicionar Foto
                    </Button>
                  </div>
                </CardContent>
              </Card>
                {/* Dialog para adicionar foto */}
              {showAddPhotoDialog && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
                  <div className="bg-white rounded-xl shadow-2xl w-full max-w-md mx-4 border border-gray-200">
                    <div className="p-6">                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <ImageIcon className="h-5 w-5 text-blue-600" />
                        Adicionar Foto
                      </h3>
                      
                      <div className="space-y-4">                        <div>
                          <Label className="text-sm font-medium text-gray-700">
                            Selecionar Foto
                          </Label>
                          <div className="mt-1">
                            <input
                              id="photo-file"
                              type="file"
                              accept="image/*"
                              onChange={(e) => setSelectedPhotoFile(e.target.files?.[0] || null)}
                              className="hidden"
                            />
                            <label
                              htmlFor="photo-file"
                              className="flex items-center justify-center w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors"
                            >
                              <div className="text-center">
                                <ImageIcon className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                                <p className="text-sm text-gray-600">
                                  {selectedPhotoFile ? selectedPhotoFile.name : "Clique para selecionar uma foto"}
                                </p>
                                <p className="text-xs text-gray-400 mt-1">PNG, JPG até 10MB</p>
                              </div>
                            </label>
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="photo-description" className="text-sm font-medium text-gray-700">
                            Descrição
                          </Label>
                          <Input
                            id="photo-description"
                            value={newPhotoDescription}
                            onChange={(e) => setNewPhotoDescription(e.target.value)}                            placeholder="Descreva a foto (ex: Estado inicial do equipamento)..."
                            className="mt-1 w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                      
                      <div className="flex justify-end gap-3 mt-6">
                        <Button 
                          variant="outline" 
                          onClick={() => {
                            setShowAddPhotoDialog(false)
                            setNewPhotoDescription("")
                            setSelectedPhotoFile(null)
                          }}
                          className="px-4 py-2"
                        >
                          Cancelar
                        </Button>
                        <Button 
                          onClick={handleAddPhoto}
                          disabled={!selectedPhotoFile || !newPhotoDescription.trim()}
                          className="px-4 py-2 bg-blue-600 hover:bg-blue-700"
                        >
                          Adicionar Foto
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </TabsContent>            {/* Aba de Relatório */}
            <TabsContent value="relatorio" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Detalhes do Relatório</CardTitle>
                  <CardDescription>
                    Informações do relatório para este serviço
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Peças utilizadas */}
                  <div>                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-medium">Peças Utilizadas</h3>
                      <AddPartDialog 
                        serviceId={serviceId as string} 
                        onPartAdded={refreshServiceData} 
                      />
                    </div>
                    
                    <div className="border rounded-md overflow-hidden">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-muted/50">
                            <th className="text-left p-2 px-4 text-sm font-medium text-muted-foreground">Código</th>
                            <th className="text-left p-2 px-4 text-sm font-medium text-muted-foreground">Descrição</th>
                            <th className="text-center p-2 text-sm font-medium text-muted-foreground">Quantidade</th>
                            <th className="text-right p-2 px-4 text-sm font-medium text-muted-foreground">Preço Unitário</th>
                            <th className="text-right p-2 px-4 text-sm font-medium text-muted-foreground">Total</th>
                            <th className="text-center p-2 text-sm font-medium text-muted-foreground">Ações</th>
                          </tr>
                        </thead>
                        <tbody>
                          {serviceData.pecas && serviceData.pecas.length > 0 ? 
                            serviceData.pecas.map((peca, index) => (
                              <tr key={index} className="border-t">
                                <td className="p-2 px-4 font-mono text-sm">{peca.codigo}</td>
                                <td className="p-2 px-4">{peca.nome}</td>
                                <td className="p-2 text-center">{peca.quantidade}</td>
                                <td className="p-2 px-4 text-right">{parseFloat(peca.precoUnitario).toFixed(2)} €</td>
                                <td className="p-2 px-4 text-right font-medium">{parseFloat(peca.total).toFixed(2)} €</td>
                                <td className="p-2 text-center">
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-8 w-8 p-0 hover:bg-red-100 hover:text-red-600"
                                    onClick={() => handleDeletePart(peca.id)}
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </td>
                              </tr>
                            )) : (
                              <tr>
                                <td colSpan={6} className="p-4 text-center text-muted-foreground italic">
                                  Nenhuma peça registada
                                </td>
                              </tr>
                            )
                          }
                        </tbody>
                        {serviceData.pecas && serviceData.pecas.length > 0 && (
                          <tfoot className="bg-muted/30">
                            <tr>
                              <td colSpan={4} className="p-2 px-4 text-right font-medium">
                                Subtotal Peças:
                              </td>
                              <td className="p-2 px-4 text-right font-medium">
                                {serviceData.pecas.reduce((total, peca) => total + parseFloat(peca.total), 0).toFixed(2)} €
                              </td>
                              <td></td>
                            </tr>
                          </tfoot>
                        )}
                      </table>
                    </div>
                  </div>

                  {/* Mão de obra e Deslocação lado a lado */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Mão de obra */}
                    <div>                      <div className="flex justify-between items-center mb-3">
                        <h3 className="font-medium">Mão de Obra</h3>
                        {!serviceData.maoDeObra ? (
                          <AddLaborDialog 
                            serviceId={serviceId as string} 
                            onLaborAdded={refreshServiceData} 
                          />
                        ) : (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={handleDeleteLabor}
                            className="hover:bg-red-100 hover:text-red-600"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                      <div className="border rounded-md p-4 bg-muted/50">
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Horas de trabalho:</span>
                            <span className="font-medium">{serviceData.maoDeObra?.horas || "0"}h</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Valor por hora:</span>
                            <span className="font-medium">{serviceData.maoDeObra ? parseFloat(serviceData.maoDeObra.valorHora).toFixed(2) : "0.00"} €</span>
                          </div>
                          <div className="flex justify-between border-t pt-2">
                            <span className="font-medium">Total Mão de Obra:</span>
                            <span className="font-bold text-lg">{serviceData.maoDeObra ? parseFloat(serviceData.maoDeObra.total).toFixed(2) : "0.00"} €</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Deslocação */}
                    <div>                      <div className="flex justify-between items-center mb-3">
                        <h3 className="font-medium">Deslocação</h3>
                        {!serviceData.deslocacao ? (
                          <AddTravelDialog 
                            serviceId={serviceId as string} 
                            onTravelAdded={refreshServiceData} 
                          />
                        ) : (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={handleDeleteTravel}
                            className="hover:bg-red-100 hover:text-red-600"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                      <div className="border rounded-md p-4 bg-muted/50">
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Quilómetros:</span>
                            <span className="font-medium">{serviceData.deslocacao?.km || "0"} km</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Valor por km:</span>
                            <span className="font-medium">{serviceData.deslocacao ? parseFloat(serviceData.deslocacao.valorKm).toFixed(2) : "0.00"} €</span>
                          </div>
                          <div className="flex justify-between border-t pt-2">
                            <span className="font-medium">Total Deslocação:</span>
                            <span className="font-bold text-lg">{serviceData.deslocacao ? parseFloat(serviceData.deslocacao.total).toFixed(2) : "0.00"} €</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Total geral */}
                  <div className="border-1 rounded-lg bg-blue-50 p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-blue-800">Total do serviço:</span>
                      <span className="text-2xl font-bold text-gray-900">
                        {(
                          (serviceData.pecas?.reduce((sum, peca) => sum + parseFloat(peca.total), 0) || 0) +
                          (serviceData.maoDeObra ? parseFloat(serviceData.maoDeObra.total) : 0) +
                          (serviceData.deslocacao ? parseFloat(serviceData.deslocacao.total) : 0)
                        ).toFixed(2)} €
                      </span>
                    </div>
                  </div>

                  {/* Botões de ação */}
                  <div className="flex justify-center gap-3 pt-4">
                    <Button 
                      onClick={handlePrint}
                      className="gap-2 bg-gray-800 text-white hover:bg-gray-700 hover:text-white"
                    >
                      <Printer className="h-4 w-4" />
                      Imprimir Relatório
                    </Button>
                    <Button variant="outline" className="gap-2">
                      <Mail className="h-4 w-4" />
                      Enviar por Email
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
              </Tabs>
        </main>
      </div>
      
      {/* Confirmation Dialog for Canceling Service */}
      <ConfirmDialog
        isOpen={showCancelDialog}
        onClose={() => setShowCancelDialog(false)}
        onConfirm={handleCancelService}
        title="Cancelar Serviço"
        description="Tem a certeza que pretende cancelar este serviço? Esta ação não pode ser desfeita e todos os dados associados serão permanentemente eliminados."
        confirmText="Sim, Cancelar"
        cancelText="Não, Manter"
        variant="danger"
      />
    </div>
  )
}