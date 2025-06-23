import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Página não encontrada
          </h2>
          <p className="text-gray-600">
            A página que procura não existe ou foi movida.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Voltar ao início
          </Link>
          
          <div className="text-sm text-gray-500">
            <Link 
              href="/dashboard"
              className="text-blue-600 hover:text-blue-700 underline"
            >
              Ir para o Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
