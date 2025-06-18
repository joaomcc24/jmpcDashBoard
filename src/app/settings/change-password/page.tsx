"use client"

import { useState } from "react"
import { useSession } from "next-auth/react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Lock, Eye, EyeOff, CheckCircle, AlertCircle } from "lucide-react"

export default function ChangePasswordPage() {
  const { data: session } = useSession()
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPasswords, setShowPasswords] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{type: 'success' | 'error', text: string} | null>(null)

  const validatePassword = (password: string) => {
    const minLength = password.length >= 8
    const hasUpper = /[A-Z]/.test(password)
    const hasLower = /[a-z]/.test(password)
    const hasNumber = /\d/.test(password)
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password)
    
    return {
      minLength,
      hasUpper,
      hasLower,
      hasNumber,
      hasSpecial,
      isValid: minLength && hasUpper && hasLower && hasNumber && hasSpecial
    }
  }

  const passwordValidation = validatePassword(newPassword)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (newPassword !== confirmPassword) {
      setMessage({type: 'error', text: 'As passwords não coincidem'})
      return
    }
    
    if (!passwordValidation.isValid) {
      setMessage({type: 'error', text: 'A password não cumpre os requisitos de segurança'})
      return
    }
    
    setLoading(true)
    setMessage(null)
    
    try {
      const response = await fetch('/api/auth/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          currentPassword,
          newPassword
        })
      })
      
      const data = await response.json()
      
      if (response.ok) {
        setMessage({type: 'success', text: 'Password alterada com sucesso!'})
        setCurrentPassword("")
        setNewPassword("")
        setConfirmPassword("")
      } else {
        setMessage({type: 'error', text: data.error || 'Erro ao alterar password'})
      }
    } catch (error) {
      setMessage({type: 'error', text: 'Erro de conexão'})
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto mt-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lock className="h-5 w-5" />
            Alterar Password
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="current">Password Atual</Label>
              <div className="relative">
                <Input
                  id="current"
                  type={showPasswords ? "text" : "password"}
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="new">Nova Password</Label>
              <div className="relative">
                <Input
                  id="new"
                  type={showPasswords ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3"
                  onClick={() => setShowPasswords(!showPasswords)}
                >
                  {showPasswords ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>
            
            {newPassword && (
              <div className="text-sm space-y-1">
                <p className="font-medium">Requisitos de Segurança:</p>
                <div className={`flex items-center gap-1 ${passwordValidation.minLength ? 'text-green-600' : 'text-red-600'}`}>
                  {passwordValidation.minLength ? <CheckCircle className="h-3 w-3" /> : <AlertCircle className="h-3 w-3" />}
                  Mínimo 8 caracteres
                </div>
                <div className={`flex items-center gap-1 ${passwordValidation.hasUpper ? 'text-green-600' : 'text-red-600'}`}>
                  {passwordValidation.hasUpper ? <CheckCircle className="h-3 w-3" /> : <AlertCircle className="h-3 w-3" />}
                  Letra maiúscula
                </div>
                <div className={`flex items-center gap-1 ${passwordValidation.hasLower ? 'text-green-600' : 'text-red-600'}`}>
                  {passwordValidation.hasLower ? <CheckCircle className="h-3 w-3" /> : <AlertCircle className="h-3 w-3" />}
                  Letra minúscula
                </div>
                <div className={`flex items-center gap-1 ${passwordValidation.hasNumber ? 'text-green-600' : 'text-red-600'}`}>
                  {passwordValidation.hasNumber ? <CheckCircle className="h-3 w-3" /> : <AlertCircle className="h-3 w-3" />}
                  Número
                </div>
                <div className={`flex items-center gap-1 ${passwordValidation.hasSpecial ? 'text-green-600' : 'text-red-600'}`}>
                  {passwordValidation.hasSpecial ? <CheckCircle className="h-3 w-3" /> : <AlertCircle className="h-3 w-3" />}
                  Carácter especial
                </div>
              </div>
            )}
            
            <div>
              <Label htmlFor="confirm">Confirmar Nova Password</Label>
              <Input
                id="confirm"
                type={showPasswords ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            
            {message && (
              <div className={`p-3 rounded-md ${
                message.type === 'success' 
                  ? 'bg-green-50 text-green-800 border border-green-200' 
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}>
                {message.text}
              </div>
            )}
            
            <Button 
              type="submit" 
              className="w-full" 
              disabled={loading || !passwordValidation.isValid}
            >
              {loading ? "A alterar..." : "Alterar Password"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
