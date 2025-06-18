"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Plus, Package } from "lucide-react"

interface AddPartDialogProps {
  serviceId: string
  onPartAdded: () => void
}

export function AddPartDialog({ serviceId, onPartAdded }: AddPartDialogProps) {  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    codigo: "",
    nome: "",
    quantidade: "",
    precoUnitario: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch(`/api/services/${serviceId}/parts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Erro ao adicionar peça")
      }

      setFormData({ codigo: "", nome: "", quantidade: "", precoUnitario: "" })
      setIsOpen(false)
      onPartAdded()
    } catch (error) {
      console.error("Erro ao adicionar peça:", error)
      // TODO: Add toast notification
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const total = formData.quantidade && formData.precoUnitario 
    ? (parseFloat(formData.quantidade) * parseFloat(formData.precoUnitario)).toFixed(2)
    : "0.00"

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="gap-2 hover:bg-gray-100 hover:text-gray-900 transition-colors"
        >
          <Plus className="h-4 w-4" />
          Adicionar Peça
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Package className="h-5 w-5" />
            Adicionar Nova Peça
          </DialogTitle>
          <DialogDescription>
            Adicione uma nova peça ao serviço. Todos os campos são obrigatórios.
          </DialogDescription>
        </DialogHeader>        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="codigo">Código da Peça</Label>
            <Input
              id="codigo"
              placeholder="Ex: PCA001, FLT025, etc."
              value={formData.codigo}
              onChange={(e) => handleInputChange("codigo", e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="nome">Descrição da Peça</Label>
            <Input
              id="nome"
              placeholder="Ex: Compressor, Filtro, etc."
              value={formData.nome}
              onChange={(e) => handleInputChange("nome", e.target.value)}
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="quantidade">Quantidade</Label>
              <Input
                id="quantidade"
                type="number"
                min="1"
                step="1"
                placeholder="1"
                value={formData.quantidade}
                onChange={(e) => handleInputChange("quantidade", e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="precoUnitario">Preço Unitário (€)</Label>
              <Input
                id="precoUnitario"
                type="number"
                min="0"
                step="0.01"
                placeholder="0.00"
                value={formData.precoUnitario}
                onChange={(e) => handleInputChange("precoUnitario", e.target.value)}
                required
              />
            </div>
          </div>
          {(formData.quantidade && formData.precoUnitario) && (
            <div className="p-3 bg-gray-50 rounded-md">
              <div className="flex justify-between items-center text-sm">
                <span className="font-medium">Total:</span>
                <span className="font-semibold">{total} €</span>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => setIsOpen(false)}
              className="hover:bg-gray-100"
            >
              Cancelar
            </Button>
            <Button 
              type="submit" 
              disabled={loading}
              className="bg-gray-800 text-white hover:bg-gray-700"
            >
              {loading ? "A adicionar..." : "Adicionar Peça"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
