"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Upload, X, Image as ImageIcon } from "lucide-react"
import Image from "next/image"

interface Photo {
  id: string
  url: string
  descricao: string | null
}

interface PhotoUploadProps {
  serviceId: string
  photos: Photo[]
  onPhotosUpdate: () => void
}

export function PhotoUpload({ serviceId, photos, onPhotosUpdate }: PhotoUploadProps) {
  const [uploading, setUploading] = useState(false)
  const [dragOver, setDragOver] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = async (files: FileList | null) => {
    if (!files || files.length === 0) return

    const file = files[0]
    
    // Verificar tipo de arquivo
    if (!file.type.startsWith('image/')) {
      alert('Por favor, selecione apenas arquivos de imagem.')
      return
    }

    // Verificar tamanho (4MB)
    if (file.size > 4 * 1024 * 1024) {
      alert('Arquivo muito grande. Máximo 4MB.')
      return
    }

    await uploadFile(file)
  }

  const uploadFile = async (file: File) => {
    setUploading(true)

    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch(`/api/services/${serviceId}/photos`, {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Erro ao fazer upload')
      }

      const result = await response.json()
      console.log('Upload bem-sucedido:', result)
      
      // Atualizar lista de fotos
      onPhotosUpdate()

    } catch (error) {
      console.error('Erro no upload:', error)
      alert(error instanceof Error ? error.message : 'Erro ao fazer upload da foto')
    } finally {
      setUploading(false)
    }
  }

  const handleDelete = async (photoId: string) => {
    if (!confirm('Tem certeza que deseja remover esta foto?')) return

    try {
      const response = await fetch(`/api/services/${serviceId}/photos?photoId=${photoId}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        throw new Error('Erro ao remover foto')
      }

      onPhotosUpdate()
    } catch (error) {
      console.error('Erro ao remover foto:', error)
      alert('Erro ao remover foto')
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(false)
    handleFileSelect(e.dataTransfer.files)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Fotos do Serviço</h3>
        <Button
          onClick={() => fileInputRef.current?.click()}
          disabled={uploading}
          className="gap-2"
        >
          <Upload className="h-4 w-4" />
          {uploading ? 'Carregando...' : 'Adicionar Foto'}
        </Button>
      </div>

      {/* Área de Drag & Drop */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`
          border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
          ${dragOver ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'}
          ${uploading ? 'opacity-50 pointer-events-none' : ''}
        `}
      >
        <ImageIcon className="h-12 w-12 mx-auto text-gray-400 mb-4" />
        <p className="text-gray-600">
          Clique aqui ou arraste fotos para fazer upload
        </p>
        <p className="text-sm text-gray-400 mt-2">
          Máximo 4MB • JPG, PNG, GIF
        </p>
      </div>

      <Input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={(e) => handleFileSelect(e.target.files)}
        className="hidden"
      />

      {/* Grid de Fotos */}
      {photos.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo) => (
            <div key={photo.id} className="relative group">
              <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={photo.url}
                  alt={photo.descricao || 'Foto do serviço'}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <Button
                onClick={() => handleDelete(photo.id)}
                variant="destructive"
                size="sm"
                className="absolute top-2 right-2 h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      )}

      {photos.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          Nenhuma foto adicionada ainda
        </div>
      )}
    </div>
  )
}