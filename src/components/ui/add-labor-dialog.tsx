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
    total: string
  } | null
  onLaborAdded: () => void
}

export function AddLaborDialog({ serviceId, existingLabor, onLaborAdded }: AddLaborDialogProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    total: existingLabor?.total || "",
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
        body: JSON.stringify({ total: formData.total }),
      })

      if (!response.ok) {
        throw new Error("Erro ao adicionar mão de obra")
      }

      // Reset form and close dialog
      setFormData({ total: "" })
      setIsOpen(false)
      onLaborAdded()
    } catch (error) {
      console.error("Erro ao adicionar mão de obra:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

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
              : "Adicione os detalhes da mão de obra para este serviço."
            }
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center gap-4">
            <Label htmlFor="total" className="min-w-0 flex-shrink-0">Mão de obra</Label>
            <Input
              id="total"
              type="number"
              min="0"
              step="0.01"
              placeholder="8.00"
              value={formData.total}
              onChange={(e) => handleInputChange("total", e.target.value)}
              required
              className="w-32"
            />
          </div>
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
