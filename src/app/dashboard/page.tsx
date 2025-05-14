"use client"

import Link from "next/link"
import { BarChart3, Clock, PlusCircle, Package, Users, Search, Settings } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { StatusBadge } from "@/components/ui/status-badge"
import { Sidebar } from "@/components/layout/Sidebar" 

interface Service{
  id: string;
  cliente: {
    nome: string;
  };
  equipamento: {
    tipo: string;
    marca: string;
    modelo: string;
  };
  estado: string;
  dataEntrada: string;
}

export default function DashboardPage() {
  const router = useRouter();
  const [recentServices, setRecentServices] = useState<Service[]>([]);
  const [stats, setStats] = useState({
    totalClients: "...",
    activeServices: "...",
    inventoryItems: "...",
    monthlyRevenue: "...",
  });
  const [loading, setLoading] = useState(true);
  
  // Buscar dados da API ao carregar a página
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // Buscar serviços recentes
        const servicesResponse = await fetch('/api/services/recent');
        if (!servicesResponse.ok) throw new Error('Falha ao carregar serviços recentes');
        const servicesData = await servicesResponse.json();
        setRecentServices(servicesData);
        
        // Aqui você poderia adicionar mais chamadas para estatísticas
        // Por exemplo: fetch('/api/stats')
        
        // Por enquanto vamos usar dados de exemplo para estatísticas
        setStats({
          totalClients: "124",
          activeServices: "23",
          inventoryItems: "432",
          monthlyRevenue: "€12.543",
        });
      } catch (error) {
        console.error('Erro:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
  };

  // Dados de estatísticas
  const statsData = [
    {
      title: "Total Clientes",
      value: "124",
      change: "+12.5%",
      changeType: "positive",
      icon: Users,
    },
    {
      title: "Serviços Ativos",
      value: "23",
      change: "+5.2%",
      changeType: "positive",
      icon: Clock,
    },
    {
      title: "Items Inventário",
      value: "432",
      change: "-2.5%",
      changeType: "negative",
      icon: Package,
    },
    {
      title: "Receita (Mensal)",
      value: "€12.543",
      change: "+18.2%",
      changeType: "positive",
      icon: BarChart3,
    },
  ];

  const lowStockItems = [
    {
      id: "ITM-001",
      nome: "Compressor de Frigorífico",
      codigo: "REF-COMP-01",
      stock: 2,
      minStock: 5,
    },
    {
      id: "ITM-002",
      nome: "Correia de Máquina de Lavar",
      codigo: "MLV-BELT-02",
      stock: 3,
      minStock: 10,
    },
    {
      id: "ITM-003",
      nome: "Bomba de Máquina de Lavar Loiça",
      codigo: "MLL-PUMP-03",
      stock: 1,
      minStock: 3,
    },
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar/>
      <div className="flex flex-1 flex-col">
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6">
          <div className="flex flex-1 items-center gap-2">
            <h1 className="text-lg font-semibold">Painel de Controlo</h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <input
                type="search"
                placeholder="Pesquisar serviços..."
                className="rounded-md border border-gray-300 pl-8 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <Button 
              onClick={() => router.push('/services/new')}
              className="flex items-center gap-1"
            >
              <PlusCircle className="h-4 w-4" />
              Novo Serviço
            </Button>
          </div>
        </header>
        <main className="flex-1 overflow-auto p-4 sm:p-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {statsData.map((stat, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                    </div>
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full ${
                        stat.changeType === "positive" ? "bg-green-100" : "bg-red-100"
                      }`}
                    >
                      <stat.icon
                        className={`h-4 w-4 ${
                          stat.changeType === "positive" ? "text-green-600" : "text-red-600"
                        }`}
                      />
                    </div>
                  </div>
                  <div className="mt-2">
                    <p
                      className={`text-xs ${
                        stat.changeType === "positive" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {stat.change} do mês anterior
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Serviços Recentes</CardTitle>
                <CardDescription>Visão geral dos últimos pedidos de serviço</CardDescription>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="flex justify-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                  </div>
                ) : recentServices.length > 0 ? (
                  <div className="space-y-4">
                    {recentServices.map((service) => (
                      <div
                        key={service.id}
                        className="flex items-center justify-between rounded-lg border p-3 hover:bg-gray-50 cursor-pointer transition-colors"
                        onClick={() => router.push(`/services/${service.id}`)}
                      >
                        <div>
                          <div className="font-medium">{service.cliente.nome}</div>
                          <div className="text-sm text-muted-foreground">
                            {service.equipamento?.tipo} {service.equipamento?.marca} - {service.id}
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-sm">{formatDate(service.dataEntrada)}</div>
                          <div>
                            <StatusBadge status={service.estado} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-center py-8 text-gray-500">Nenhum serviço encontrado.</p>
                )}
              </CardContent>
            </Card>
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Alertas de Stock Baixo</CardTitle>
                <CardDescription>Itens que precisam ser repostos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {lowStockItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between border-b pb-3 last:border-0">
                      <div>
                        <p className="font-medium">{item.nome}</p>
                        <p className="text-sm text-muted-foreground">{item.codigo}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-sm">
                          <span
                            className={`font-medium ${
                              item.stock <= item.minStock / 2 ? "text-red-600" : "text-amber-600"
                            }`}
                          >
                            {item.stock}/{item.minStock}
                          </span>
                        </div>
                        <Button variant="outline" size="sm">
                          Encomendar
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}