import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gray-900">
            Página não encontrada
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-gray-600">
            A página que procura não existe ou foi movida.
          </p>
          <div className="text-6xl font-bold text-gray-300">404</div>
          <Link href="/">
            <Button className="w-full">
              Voltar ao Início
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
