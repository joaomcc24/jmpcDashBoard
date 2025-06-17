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
import { Clock, Edit } from "lucide-react"

interface AddLaborDialogProps {
  serviceId: string
  existingLabor?: {
    horas: string
    valorHora: string
    total: string
  } | null
  onLaborAdded: () => void
}

export function AddLaborDialog({ serviceId, existingLabor, onLaborAdded }: AddLaborDialogProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    horas: existingLabor?.horas || "",
    valorHora: existingLabor?.valorHora || "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch(`/api/services/${serviceId}/labor`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Erro ao adicionar mão de obra")
      }

      setIsOpen(false)
      onLaborAdded()
    } catch (error) {
      console.error("Erro ao adicionar mão de obra:", error)
      // TODO: Add toast notification
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const total = formData.horas && formData.valorHora 
    ? (parseFloat(formData.horas) * parseFloat(formData.valorHora)).toFixed(2)
    : "0.00"

  const isEditing = !!existingLabor

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="gap-2 hover:bg-gray-100 hover:text-gray-900 transition-colors"
        >
          {isEditing ? <Edit className="h-4 w-4" /> : <Clock className="h-4 w-4" />}
          {isEditing ? "Editar Mão de Obra" : "Adicionar Mão de Obra"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            {isEditing ? "Editar Mão de Obra" : "Adicionar Mão de Obra"}
          </DialogTitle>
          <DialogDescription>
            {isEditing 
              ? "Edite as informações da mão de obra para este serviço."
              : "Adicione as horas de trabalho e valor por hora."
            }
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="horas">Horas de Trabalho</Label>
              <Input
                id="horas"
                type="number"
                min="0"
                step="0.25"
                placeholder="8.00"
                value={formData.horas}
                onChange={(e) => handleInputChange("horas", e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="valorHora">Valor por Hora (€)</Label>
              <Input
                id="valorHora"
                type="number"
                min="0"
                step="0.01"
                placeholder="15.00"
                value={formData.valorHora}
                onChange={(e) => handleInputChange("valorHora", e.target.value)}
                required
              />
            </div>
          </div>
          {(formData.horas && formData.valorHora) && (
            <div className="p-3 bg-gray-50 rounded-md">
              <div className="flex justify-between items-center text-sm">
                <span className="font-medium">Total da Mão de Obra:</span>
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
              {loading ? "A guardar..." : isEditing ? "Atualizar" : "Adicionar"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
