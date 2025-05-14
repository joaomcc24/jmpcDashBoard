"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Modal } from "@/components/ui/modal"

interface ConfirmDialogProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  title: string
  description: string
  confirmText?: string
  cancelText?: string
  variant?: "danger" | "warning" | "default"
}

export function ConfirmDialog({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  confirmText = "Confirmar",
  cancelText = "Cancelar",
  variant = "default",
}: ConfirmDialogProps) {
  const [isLoading, setIsLoading] = useState(false)
  
  const handleConfirm = async () => {
    setIsLoading(true)
    try {
      await onConfirm()
    } finally {
      setIsLoading(false)
      onClose()
    }
  }
  
  const getButtonVariant = () => {
    switch (variant) {
      case "danger":
        return "destructive"
      case "warning":
        return "outline"
      default:
        return "default"
    }
  }
  
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      footer={
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={onClose} disabled={isLoading}>
            {cancelText}
          </Button>
          <Button 
            variant={getButtonVariant()} 
            onClick={handleConfirm}
            disabled={isLoading}
          >
            {isLoading ? "A processar..." : confirmText}
          </Button>
        </div>
      }
    >
      <p>{description}</p>
    </Modal>
  )
}