import { Sidebar } from "@/components/layout/Sidebar"
import { Button } from "@/components/ui/button"
import { Plus, Search, Package } from "lucide-react"

export default function InventarioPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <header 
          className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-white px-6 shadow-sm"
          style={{ minHeight: "64px", maxHeight: "64px" }}
        >
          <div className="flex flex-1 items-center gap-2">
            <Package className="h-6 w-6 text-blue-600" />
            <h1 className="text-xl font-semibold text-gray-900">Gestão de Inventário</h1>
          </div>
          <Button className="gap-2 bg-gray-800 text-white hover:bg-gray-700 hover:text-white">
            <Plus className="h-4 w-4" />
            Novo Item
          </Button>
        </header>
        
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Filtros e pesquisa */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center w-full max-w-sm space-x-2">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <input 
                    type="search" 
                    placeholder="Pesquisar itens..." 
                    className="w-full rounded-md border border-input pl-8 pr-4 py-2 text-sm"
                  />
                </div>
                <Button variant="outline" size="sm">Filtrar</Button>
              </div>
            </div>
          
          {/* Tabela de inventário */}
          <div className="border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/40">
                  <th className="h-10 px-4 text-left text-xs font-medium text-muted-foreground">Código</th>
                  <th className="h-10 px-4 text-left text-xs font-medium text-muted-foreground">Nome</th>
                  <th className="h-10 px-4 text-left text-xs font-medium text-muted-foreground">Categoria</th>
                  <th className="h-10 px-4 text-left text-xs font-medium text-muted-foreground">Stock</th>
                  <th className="h-10 px-4 text-left text-xs font-medium text-muted-foreground">Preço</th>
                  <th className="h-10 px-4 text-right text-xs font-medium text-muted-foreground">Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4">REF-COMP-01</td>
                  <td className="p-4">Compressor de Frigorífico</td>
                  <td className="p-4">Refrigeração</td>
                  <td className="p-4">2</td>
                  <td className="p-4">€85,00</td>
                  <td className="p-4 text-right">
                    <Button variant="ghost" size="sm">Editar</Button>
                    <Button variant="ghost" size="sm" className="text-red-500">Eliminar</Button>
                  </td>
                </tr>
                
              </tbody>
            </table>
          </div>
          </div>
        </main>
      </div>
    </div>
  );
}