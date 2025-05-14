"use client"

import { useState, useEffect } from "react"
import { useParams, usePathname, useRouter } from "next/navigation"
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
  AlertCircle, 
  XCircle,
  Image,
  MessageSquare,
  Edit,
  MoreVertical,
  PlusCircle
} from "lucide-react"
import { Sidebar } from "@/components/layout/Sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { StatusBadge } from "@/components/ui/status-badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"

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
  }>;
  pecas: Array<{
    id: number;
    servicoId: string;
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

export default function DetalhesServicoPage() {
  const params = useParams()
  const router = useRouter()
  const serviceId = params.id
  const pathname = usePathname()

  // Estado para controlar a edição de notas
  const [isEditingNotes, setIsEditingNotes] = useState(false)
  const [serviceNotes, setServiceNotes] = useState("O cliente reportou que o aparelho não liga. Após inspeção inicial, verificou-se que o compressor não está a funcionar. Foi solicitada a peça de substituição ao fornecedor.")
  
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
    setServiceNotes(data.notas || "");
  } catch (error) {
    console.error("Erro ao carregar serviço:", error);
    setLoading(false);
    // Redirecionar de volta ao dashboard após erro
    router.push('/dashboard');
  } finally {
    setLoading(false);
  }
};

    if (serviceId) {
      fetchServiceData()
    }
  }, [serviceId])

  const handleSaveNotes = async () => {
    if (!serviceData) return
    
    try {
      const response = await fetch(`/api/services/${serviceId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...serviceData,
          notas: serviceNotes
        })
      })
      
      if (!response.ok) {
        throw new Error('Erro ao salvar notas')
      }
      
      const updatedService = await response.json()
      setServiceData(updatedService)
      setIsEditingNotes(false)
      // Poderia adicionar um toast de sucesso aqui
    } catch (error) {
      console.error("Erro ao salvar notas:", error)
      //  Adicionar um toast(?) de erro aqui
    }
  }

  if (loading || !serviceData) {
    return (
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Carregando detalhes do serviço...</p>
        </div>
      </div>
    )
  }

  const isActive = (path: string) => {
    if (path === '/dashboard' && pathname === '/dashboard') {
      return true
    }
    if (path !== '/dashboard' && pathname.startsWith(path)) {
      return true
    }
    return false
  }
  
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
      <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => router.back()}
            className="gap-1"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Button>
          <div className="flex flex-1 items-center gap-2">
            <h1 className="text-lg font-semibold">
              Folha de Serviço {serviceData.id}
            </h1>
            <StatusBadge status={serviceData.estado} />
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-1">
              <Printer className="h-4 w-4" />
              <span className="hidden sm:inline">Imprimir</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Editar Serviço</DropdownMenuItem>
                <DropdownMenuItem>Enviar por Email</DropdownMenuItem>
                <DropdownMenuItem>Marcar como Concluído</DropdownMenuItem>
                <DropdownMenuItem className="text-red-600">Cancelar Serviço</DropdownMenuItem>
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
            value="fatura"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 bg-transparent hover:bg-transparent focus:bg-transparent"
          >
            Fatura
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
                        <dd className="text-base">{serviceData.cliente.tipo}</dd>
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
                          {serviceData.garantia ? `Sim (${serviceData.periodoGarantia})` : "Não"}
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
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm font-medium text-muted-foreground">Notas Técnicas</h3>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => setIsEditingNotes(!isEditingNotes)}
                      >
                        <Edit className="h-4 w-4" />
                        <span className="ml-1">{isEditingNotes ? "Cancelar" : "Editar"}</span>
                      </Button>
                    </div>
                    
                    {isEditingNotes ? (
                      <div className="space-y-2">
                        <textarea 
                          className="w-full min-h-[120px] p-3 border rounded-md" 
                          value={serviceNotes}
                          onChange={(e) => setServiceNotes(e.target.value)}
                        />
                        <div className="flex justify-end">
                          <Button onClick={handleSaveNotes}>Guardar Notas</Button>
                        </div>
                      </div>
                    ) : (
                      <p className="bg-muted/50 rounded-md whitespace-pre-wrap">
                        {serviceNotes}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="historico" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Histórico do Serviço</CardTitle>
                  <CardDescription>
                    Registo de todas as atividades relacionadas com este serviço
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                  {serviceData.historico && serviceData.historico.map((entry, index) => (
                <div key={index} className="flex">
                  <div className="mr-4 flex flex-col items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-muted bg-muted/50">
                      <Clock className="h-5 w-5 text-muted-foreground" />
                    </div>
                    {index < serviceData.historico.length - 1 && (
                      <div className="w-px flex-1 bg-border mt-2" />
                    )}
                  </div>
                  <div className="pb-6">
                    <div className="flex items-baseline gap-2">
                      <p className="text-sm font-semibold">{entry.data}</p>
                      <p className="text-xs text-muted-foreground">{entry.hora}</p>
                    </div>
                    <p className="mt-1">{entry.acao}</p>
                    <p className="mt-1 text-sm text-muted-foreground">Por: {entry.autor}</p>
                  </div>
                </div>
              ))}
                    
                    <div className="flex">
                      <div className="mr-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-dashed border-muted">
                          <PlusCircle className="h-5 w-5 text-muted-foreground" />
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Button variant="outline" className="gap-1">
                          <PlusCircle className="h-4 w-4" />
                          Adicionar Evento
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="fotos" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Fotos do Serviço</CardTitle>
                  <CardDescription>
                    Fotografias do equipamento antes, durante e após a reparação
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {serviceData.fotos && serviceData.fotos.map((foto) => (
                      <div key={foto.id} className="group relative overflow-hidden rounded-md border">
                        <div className="aspect-video w-full bg-muted flex items-center justify-center">
                          <Image className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <div className="p-2">
                          <p className="text-sm">{foto.descricao}</p>
                        </div>
                      </div>
                    ))}
                    
                    <div className="group relative overflow-hidden rounded-md border border-dashed">
                      <div className="aspect-video w-full bg-muted/50 flex flex-col items-center justify-center">
                        <PlusCircle className="h-8 w-8 text-muted-foreground mb-2" />
                        <p className="text-sm text-muted-foreground">Adicionar foto</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="fatura" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Detalhes da Fatura</CardTitle>
                  <CardDescription>
                    Informações de faturação para este serviço
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Peças utilizadas */}
                  <div>
                    <h3 className="font-medium mb-3">Peças Utilizadas</h3>
                    <div className="border rounded-md overflow-hidden">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-muted/50">
                            <th className="text-left p-2 px-4 text-sm font-medium text-muted-foreground">Descrição</th>
                            <th className="text-center p-2 text-sm font-medium text-muted-foreground">Quantidade</th>
                            <th className="text-right p-2 px-4 text-sm font-medium text-muted-foreground">Preço Unitário</th>
                            <th className="text-right p-2 px-4 text-sm font-medium text-muted-foreground">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          {serviceData.pecas && serviceData.pecas.length > 0 && serviceData.pecas.map((peca, index) => (
                            <tr key={index} className="border-t">
                              <td className="p-2 px-4">{peca.nome}</td>
                              <td className="p-2 text-center">{peca.quantidade}</td>
                              <td className="p-2 px-4 text-right">{parseFloat(peca.precoUnitario).toFixed(2)} €</td>
                              <td className="p-2 px-4 text-right font-medium">{parseFloat(peca.total).toFixed(2)} €</td>
                            </tr>
                          ))}
                          {(!serviceData.pecas || serviceData.pecas.length === 0) && (
                            <tr>
                              <td colSpan={4} className="p-4 text-center text-muted-foreground italic">
                                Nenhuma peça registada
                              </td>
                            </tr>
                          )}
                        </tbody>
                        {serviceData.pecas && serviceData.pecas.length > 0 ? (
                        <tfoot className="bg-muted/30">
                          <tr>
                            <td colSpan={3} className="p-2 px-4 text-right font-medium">
                              Subtotal Peças:
                            </td>
                            <td className="p-2 px-4 text-right font-medium">
                              {serviceData.pecas.reduce((total, peca) => total + parseFloat(peca.total), 0).toFixed(2)} €
                            </td>
                          </tr>
                        </tfoot>
                      ) : null}
                      </table>
                    </div>
                  </div>
                  
                  <div className="grid gap-6 md:grid-cols-2">
                    {/* Mão de obra */}
                    <div>
                      <h3 className="font-medium mb-3">Mão de Obra</h3>
                      {serviceData.maoDeObra ? (
                      <div className="border rounded-md p-4 space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Horas de trabalho:</span>
                          <span>{serviceData.maoDeObra.horas}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Valor por hora:</span>
                          <span>{parseFloat(serviceData.maoDeObra.valorHora).toFixed(2)} €</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between items-center font-medium">
                          <span>Total Mão de Obra:</span>
                          <span>{parseFloat(serviceData.maoDeObra.total).toFixed(2)} €</span>
                        </div>
                      </div>
                    ) : (
                      <p className="text-muted-foreground italic">Sem registos de mão de obra</p>
                    )}
                    </div>
                    {/* Deslocação */}
                    <div>
                      <h3 className="font-medium mb-3">Deslocação</h3>
                      {serviceData.deslocacao ? (
                        <div className="border rounded-md p-4 space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="text-muted-foreground">Quilómetros:</span>
                            <span>{serviceData.deslocacao.km}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-muted-foreground">Valor por km:</span>
                            <span>{parseFloat(serviceData.deslocacao.valorKm).toFixed(2)} €</span>
                          </div>
                          <Separator />
                          <div className="flex justify-between items-center font-medium">
                            <span>Total Deslocação:</span>
                            <span>{parseFloat(serviceData.deslocacao.total).toFixed(2)} €</span>
                          </div>
                        </div>
                      ) : (
                        <p className="text-muted-foreground italic">Sem registos de deslocação</p>
                      )}
                    </div>
                  </div>
                  
                  {/* Total */}
                  <div className="bg-muted/20 p-4 rounded-md">
                    <div className="flex justify-between items-center text-lg font-semibold">
                      <span>Total da Fatura:</span>
                      <span>{serviceData.valorTotal ? parseFloat(serviceData.valorTotal).toFixed(2) : "0.00"} €</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4 flex justify-end gap-2">
                  <Button variant="outline">
                    <Printer className="h-4 w-4 mr-2" />
                    Imprimir Fatura
                  </Button>
                  <Button>
                    <Mail className="h-4 w-4 mr-2" />
                    Enviar por Email
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
          </Tabs>
        </main>
      </div>
    </div>
  )
}