/* eslint-disable @next/next/no-html-link-for-pages */
export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f9fafb',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{
        textAlign: 'center',
        maxWidth: '400px',
        padding: '2rem'
      }}>
        <div style={{
          fontSize: '4rem',
          fontWeight: 'bold',
          color: '#d1d5db',
          marginBottom: '1rem'
        }}>
          404
        </div>
        <h1 style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#111827',
          marginBottom: '1rem'
        }}>
          Página não encontrada
        </h1>
        <p style={{
          color: '#6b7280',
          marginBottom: '2rem'
        }}>
          A página que procura não existe ou foi movida.
        </p>
        <p>
          <a 
            href="/"
            style={{
              display: 'inline-block',
              backgroundColor: '#2563eb',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              textDecoration: 'none'
            }}
          >
            Voltar ao Início
          </a>
        </p>
      </div>
    </div>
  )
}
