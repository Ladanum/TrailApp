import { useState, useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import Dashboard from './components/dashboard/Dashboard'
import Header from './components/common/Header'
import { macrocycleService } from './services/macrocycleService'

function App() {
  const [initialized, setInitialized] = useState(false)
  const [initError, setInitError] = useState<string | null>(null)

  useEffect(() => {
    const initializeApp = async () => {
      try {
        const existing = await macrocycleService.getMacrophases()
        if (existing.length === 0) {
          console.log('Precargando macrofases...')
          await macrocycleService.seedMacrophases()
        }
        setInitialized(true)
      } catch (error) {
        console.error('Error initializing app:', error)
        setInitError(error instanceof Error ? error.message : 'Failed to initialize app')
        setInitialized(true)
      }
    }

    initializeApp()
  }, [])

  if (initError && !initialized) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600">Error de Inicialización</h1>
          <p className="text-gray-600 mt-2">{initError}</p>
          <p className="text-sm text-gray-500 mt-4">Verifica tu configuración de Supabase en .env.local</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto">
        <Dashboard />
      </main>
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#1f2937',
            color: '#fff',
          },
        }}
      />
    </div>
  )
}

export default App
