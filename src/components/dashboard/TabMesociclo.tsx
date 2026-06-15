import { useMacrocycle } from '../../hooks/useMacrocycle'
import { formatDateShort } from '../../lib/formatters'
import { TrendingUp } from 'lucide-react'

export default function TabMesociclo() {
  const { macrophases, currentPhase, loading } = useMacrocycle()

  if (loading) {
    return <div className="text-center py-8">Cargando macrofases...</div>
  }

  return (
    <div className="space-y-6">
      {/* Current Phase Highlight */}
      {currentPhase && (
        <div
          className="rounded-lg shadow p-8 text-white"
          style={{ backgroundColor: currentPhase.color_hex }}
        >
          <h2 className="text-3xl font-bold mb-2">{currentPhase.name}</h2>
          <p className="mb-4">{currentPhase.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm opacity-90">Período</p>
              <p className="text-lg font-semibold">{formatDateShort(currentPhase.start_date)} a {formatDateShort(currentPhase.end_date)}</p>
            </div>
            <div>
              <p className="text-sm opacity-90">Volumen Objetivo Semanal</p>
              <p className="text-lg font-semibold">{currentPhase.weekly_volume_km} km</p>
            </div>
            <div>
              <p className="text-sm opacity-90">Distribución de Intensidad</p>
              <p className="text-lg font-semibold">
                {currentPhase.intensity_distribution.easy}% Fácil
              </p>
            </div>
          </div>
        </div>
      )}

      {/* All Phases Timeline */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Plan Anual Completo
          </h3>
        </div>

        <div className="divide-y divide-gray-200">
          {macrophases.map((phase) => (
            <div
              key={phase.id}
              className={`p-6 hover:bg-gray-50 border-l-4 ${
                currentPhase?.id === phase.id ? 'bg-blue-50' : ''
              }`}
              style={{ borderColor: phase.color_hex }}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {phase.name}
                  </h4>
                  {phase.description && (
                    <p className="text-gray-600 text-sm mt-1">{phase.description}</p>
                  )}

                  <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Duración</p>
                      <p className="font-medium text-gray-900">
                        {Math.ceil(
                          (new Date(phase.end_date).getTime() - new Date(phase.start_date).getTime()) /
                            (1000 * 60 * 60 * 24 * 7)
                        )}{' '}
                        semanas
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600">Volumen Semanal</p>
                      <p className="font-medium text-gray-900">{phase.weekly_volume_km} km</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Periodo</p>
                      <p className="font-medium text-gray-900">
                        {formatDateShort(phase.start_date)} a {formatDateShort(phase.end_date)}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600">Focus</p>
                      <p className="font-medium text-gray-900 text-xs">
                        {phase.focus_areas.join(', ')}
                      </p>
                    </div>
                  </div>

                  {/* Intensity Distribution */}
                  <div className="mt-4 flex items-center gap-2">
                    <div className="flex-1 h-6 bg-gray-200 rounded overflow-hidden flex">
                      <div
                        className="bg-green-500 h-full"
                        style={{ width: `${phase.intensity_distribution.easy}%` }}
                      />
                      <div
                        className="bg-yellow-500 h-full"
                        style={{ width: `${phase.intensity_distribution.moderate}%` }}
                      />
                      <div
                        className="bg-red-500 h-full"
                        style={{ width: `${phase.intensity_distribution.hard}%` }}
                      />
                    </div>
                    <span className="text-xs whitespace-nowrap text-gray-600">
                      {phase.intensity_distribution.easy}%-{phase.intensity_distribution.moderate}%-{phase.intensity_distribution.hard}%
                    </span>
                  </div>
                </div>

                {currentPhase?.id === phase.id && (
                  <div className="ml-4 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                    Actual
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Checkpoints */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Checkpoints Críticos</h3>
        <div className="space-y-4">
          <div className="border-l-4 border-green-500 pl-4">
            <p className="font-medium text-gray-900">CP1 - 6 Sept 2026 (Fin MF1)</p>
            <p className="text-sm text-gray-600">Tobillo estable, 50 km/sem, base aeróbica sólida</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <p className="font-medium text-gray-900">CP2 - 27 Dic 2026 (Fin MF2)</p>
            <p className="text-sm text-gray-600">Ritmo de subida 15% mejor, carrera test 35km</p>
          </div>
          <div className="border-l-4 border-yellow-500 pl-4">
            <p className="font-medium text-gray-900">CP3 - 18 Abr 2027 (Fin MF3)</p>
            <p className="text-sm text-gray-600">Media ultra 55km en tiempo sub 7:20h</p>
          </div>
        </div>
      </div>
    </div>
  )
}
