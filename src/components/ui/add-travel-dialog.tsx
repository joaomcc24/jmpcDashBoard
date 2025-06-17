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
import { Car, Edit } from "lucide-react"

interface AddTravelDialogProps {
  serviceId: string
  existingTravel?: {
    km: string
    valorKm: string
    total: string
  } | null
  onTravelAdded: () => void
}

export function AddTravelDialog({ serviceId, existingTravel, onTravelAdded }: AddTravelDialogProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    km: existingTravel?.km || "",
    valorKm: existingTravel?.valorKm || "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch(`/api/services/${serviceId}/travel`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Erro ao adicionar deslocação")
      }

      setIsOpen(false)
      onTravelAdded()
    } catch (error) {
      console.error("Erro ao adicionar deslocação:", error)
      // TODO: Add toast notification
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const total = formData.km && formData.valorKm 
    ? (parseFloat(formData.km) * parseFloat(formData.valorKm)).toFixed(2)
    : "0.00"

  const isEditing = !!existingTravel

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="gap-2 hover:bg-gray-100 hover:text-gray-900 transition-colors"
        >
          {isEditing ? <Edit className="h-4 w-4" /> : <Car className="h-4 w-4" />}
          {isEditing ? "Editar Deslocação" : "Adicionar Deslocação"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Car className="h-5 w-5" />
            {isEditing ? "Editar Deslocação" : "Adicionar Deslocação"}
          </DialogTitle>
          <DialogDescription>
            {isEditing 
              ? "Edite as informações da deslocação para este serviço."
              : "Adicione os quilómetros percorridos e valor por quilómetro."
            }
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="km">Quilómetros</Label>
              <Input
                id="km"
                type="number"
                min="0"
                step="0.1"
                placeholder="50.0"
                value={formData.km}
                onChange={(e) => handleInputChange("km", e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="valorKm">Valor por Km (€)</Label>
              <Input
                id="valorKm"
                type="number"
                min="0"
                step="0.01"
                placeholder="0.50"
                value={formData.valorKm}
                onChange={(e) => handleInputChange("valorKm", e.target.value)}
                required
              />
            </div>
          </div>
          {(formData.km && formData.valorKm) && (
            <div className="p-3 bg-gray-50 rounded-md">
              <div className="flex justify-between items-center text-sm">
                <span className="font-medium">Total da Deslocação:</span>
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
