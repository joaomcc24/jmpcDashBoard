"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, User, Mail, Phone, MapPin, Camera, Save } from "lucide-react"
import { Sidebar } from "@/components/layout/Sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"

export default function ProfilePage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [initialLoad, setInitialLoad] = useState(true)
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    department: "",
    address: "",
    city: "",
    postalCode: "",
    bio: ""
  })

  // Carregar dados do perfil ao montar o componente
  useEffect(() => {
    loadProfileData()
  }, [])

  const loadProfileData = async () => {
    try {
      const response = await fetch('/api/settings')
      if (response.ok) {
        const settings = await response.json()
        const user = await fetch('/api/settings/user').then(r => r.ok ? r.json() : null)
        
        setProfileData({
          name: user?.name || settings.user?.name || "",
          email: user?.email || settings.user?.email || "",
          phone: settings.phone || "",
          position: settings.position || "",
          department: settings.department || "",
          address: settings.address || "",
          city: settings.city || "",
          postalCode: settings.postalCode || "",
          bio: settings.bio || ""
        })
      }
    } catch (error) {
      console.error('Erro ao carregar perfil:', error)
    } finally {
      setInitialLoad(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }))
  }
  const handleSave = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/settings', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profileData)
      })
      
      if (response.ok) {
        alert("Perfil atualizado com sucesso!")
      } else {
        throw new Error('Erro ao guardar perfil')
      }
    } catch (error) {
      console.error("Erro ao guardar perfil:", error)
      alert("Erro ao guardar perfil. Tente novamente.")
    } finally {
      setLoading(false)
    }
  }

  const handleAvatarChange = () => {
    // Em uma aplicação real, aqui abriria um seletor de ficheiros
    alert("Funcionalidade de upload de avatar será implementada em breve.")
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-white px-4 sm:px-6 shadow-sm">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => router.back()}
            className="gap-1 hover:bg-gray-100"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Button>
          <div className="flex flex-1 items-center gap-2">
            <User className="h-5 w-5 text-blue-600" />
            <h1 className="text-lg font-semibold">Perfil</h1>
          </div>
          <Button onClick={handleSave} disabled={loading} className="gap-2">
            <Save className="h-4 w-4" />
            {loading ? "A guardar..." : "Guardar"}
          </Button>
        </header>        <main className="flex-1 overflow-auto p-4 sm:p-6">
          {initialLoad ? (
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
                <p className="text-gray-600">A carregar perfil...</p>
              </div>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto space-y-6">
            {/* Avatar e Informações Básicas */}
            <Card>
              <CardHeader>
                <CardTitle>Informações Pessoais</CardTitle>
                <CardDescription>
                  Atualize as suas informações pessoais e de contacto.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Avatar */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {profileData.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="absolute -bottom-1 -right-1 rounded-full w-8 h-8 p-0"
                      onClick={handleAvatarChange}
                    >
                      <Camera className="h-3 w-3" />
                    </Button>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{profileData.name}</h3>
                    <p className="text-sm text-gray-600">{profileData.position}</p>
                    <p className="text-sm text-gray-500">{profileData.department}</p>
                  </div>
                </div>

                <Separator />

                {/* Formulário */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input
                      id="name"
                      value={profileData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Nome completo"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profileData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="email@exemplo.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      value={profileData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+351 912 345 678"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="position">Cargo</Label>
                    <Input
                      id="position"
                      value={profileData.position}
                      onChange={(e) => handleInputChange('position', e.target.value)}
                      placeholder="Cargo na empresa"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="department">Departamento</Label>
                    <Input
                      id="department"
                      value={profileData.department}
                      onChange={(e) => handleInputChange('department', e.target.value)}
                      placeholder="Departamento"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Morada</Label>
                    <Input
                      id="address"
                      value={profileData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      placeholder="Morada completa"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="city">Cidade</Label>
                    <Input
                      id="city"
                      value={profileData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      placeholder="Cidade"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="postalCode">Código Postal</Label>
                    <Input
                      id="postalCode"
                      value={profileData.postalCode}
                      onChange={(e) => handleInputChange('postalCode', e.target.value)}
                      placeholder="0000-000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Biografia/Notas</Label>
                  <Textarea
                    id="bio"
                    value={profileData.bio}
                    onChange={(e) => handleInputChange('bio', e.target.value)}
                    placeholder="Breve descrição sobre si e a sua experiência..."
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Preferências */}
            <Card>
              <CardHeader>
                <CardTitle>Preferências da Conta</CardTitle>
                <CardDescription>
                  Configure as suas preferências pessoais de utilização.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <Button variant="outline" onClick={() => router.push('/settings/change-password')}>
                    Alterar Palavra-passe
                  </Button>
                  <Button variant="outline" onClick={() => router.push('/settings/notifications')}>
                    Configurar Notificações
                  </Button>
                  <Button variant="outline" onClick={() => router.push('/settings/appearance')}>
                    Personalizar Aparência
                  </Button>
                  <Button variant="outline" onClick={() => router.push('/settings/security')}>
                    Configurações de Segurança
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Informações da Conta */}
            <Card>
              <CardHeader>
                <CardTitle>Informações da Conta</CardTitle>
                <CardDescription>
                  Detalhes sobre a sua conta e atividade no sistema.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm font-medium text-gray-600">Membro desde</p>
                    <p className="text-lg font-bold text-gray-900">Jan 2023</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm font-medium text-gray-600">Último acesso</p>
                    <p className="text-lg font-bold text-gray-900">Hoje</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm font-medium text-gray-600">Serviços criados</p>
                    <p className="text-lg font-bold text-gray-900">247</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm font-medium text-gray-600">Status</p>
                    <p className="text-lg font-bold text-green-600">Ativo</p>
                  </div>
                </div>              </CardContent>
            </Card>
          </div>
          )}
        </main>
      </div>
    </div>
  )
}
