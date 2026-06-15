import { useWorkouts } from '../../hooks/useWorkouts'
import { formatDate, formatDistance, formatElevation, formatDuration } from '../../lib/formatters'
import { Calendar } from 'lucide-react'

export default function TabSemana() {
  const startOfWeek = new Date()
  startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay())
  const endOfWeek = new Date(startOfWeek)
  endOfWeek.setDate(endOfWeek.getDate() + 6)

  const startStr = startOfWeek.toISOString().split('T')[0]
  const endStr = endOfWeek.toISOString().split('T')[0]

  const { workouts, loading } = useWorkouts(startStr, endStr)

  const totalDistance = workouts.reduce((sum, w) => sum + w.distance_km, 0)
  const totalElevation = workouts.reduce((sum, w) => sum + w.elevation_gain, 0)
  const totalDuration = workouts.reduce((sum, w) => sum + w.duration_minutes, 0)

  if (loading) {
    return <div className="text-center py-8">Cargando entrenamientos...</div>
  }

  return (
    <div className="space-y-6">
      {/* Weekly Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600 text-sm font-medium">Distancia Total</p>
          <p className="text-3xl font-bold text-trail-600 mt-2">{totalDistance.toFixed(1)}</p>
          <p className="text-sm text-gray-500">km</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600 text-sm font-medium">Desnivel Total</p>
          <p className="text-3xl font-bold text-trail-600 mt-2">{totalElevation}</p>
          <p className="text-sm text-gray-500">metros</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600 text-sm font-medium">Duración Total</p>
          <p className="text-3xl font-bold text-trail-600 mt-2">{Math.floor(totalDuration / 60)}</p>
          <p className="text-sm text-gray-500">horas</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600 text-sm font-medium">Entrenamientos</p>
          <p className="text-3xl font-bold text-trail-600 mt-2">{workouts.length}</p>
          <p className="text-sm text-gray-500">sesiones</p>
        </div>
      </div>

      {/* Workouts List */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            Semana de {formatDate(startOfWeek)} a {formatDate(endOfWeek)}
          </h3>
        </div>

        {workouts.length === 0 ? (
          <div className="p-6 text-center text-gray-500">
            <Calendar className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p>No hay entrenamientos registrados esta semana</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {workouts.map((workout) => (
              <div key={workout.id} className="px-6 py-4 hover:bg-gray-50">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      {formatDate(workout.date)}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      {formatDistance(workout.distance_km)} • {formatElevation(workout.elevation_gain)} • {formatDuration(workout.duration_minutes)}
                    </p>
                    {workout.zone && (
                      <p className="text-xs text-gray-500 mt-1">Zona: {workout.zone}</p>
                    )}
                    {workout.notes && (
                      <p className="text-sm text-gray-600 mt-2 italic">{workout.notes}</p>
                    )}
                  </div>
                  {workout.rpe && (
                    <div className="ml-4 text-right">
                      <p className="text-xs text-gray-500">RPE</p>
                      <p className="text-xl font-bold text-trail-600">{workout.rpe}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
