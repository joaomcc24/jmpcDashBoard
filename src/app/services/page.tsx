import { Sidebar } from "@/components/layout/Sidebar" 
import { Button } from "@/components/ui/button"

export default function Services(){
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
            <Button>Novo Serviço</Button>
          </div>
        </header>
        
        <main className="flex-1 overflow-auto p-4 sm:p-6">
        </main>
      </div>
    </div>
  );
}