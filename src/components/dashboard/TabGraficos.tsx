import { useWorkouts } from '../../hooks/useWorkouts'
import { BarChart3 } from 'lucide-react'

export default function TabGraficos() {
  const today = new Date()
  const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1)
  const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0)

  const startStr = startOfMonth.toISOString().split('T')[0]
  const endStr = endOfMonth.toISOString().split('T')[0]

  const { workouts, loading } = useWorkouts(startStr, endStr)

  if (loading) {
    return <div className="text-center py-8">Cargando datos...</div>
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-8">
        <div className="flex items-center justify-center h-64 text-gray-400">
          <div className="text-center">
            <BarChart3 className="w-16 h-16 mx-auto mb-4" />
            <p className="text-lg font-medium">Gráficos en desarrollo</p>
            <p className="text-sm text-gray-500 mt-2">
              Los gráficos se mostrarán una vez tengas suficientes datos de entrenamientos.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Datos disponibles este mes: {workouts.length} entrenamientos
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Próximamente</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>✓ Volumen semanal (planificado vs real)</li>
            <li>✓ Desnivel semanal (planificado vs real)</li>
            <li>✓ Fatiga acumulada</li>
            <li>✓ Tendencia de ritmo medio</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Proyecciones</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>✓ Trayectoria real vs esperada</li>
            <li>✓ Tiempo estimado en carreras test</li>
            <li>✓ Análisis de racha de entrenamientos</li>
            <li>✓ Pronóstico de rendimiento</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
