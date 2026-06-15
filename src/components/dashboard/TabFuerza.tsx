import { useMacrocycle } from '../../hooks/useMacrocycle'
import { Dumbbell } from 'lucide-react'

const STRENGTH_BLOCKS = {
  A: {
    name: 'Bloque A - Tobillo y Propiocepción',
    duration: '25-30 min',
    priority: 'MÁXIMA en MF1',
    exercises: [
      'Elevación de talón unipodal sin peso',
      'Elevación de talón unipodal con mancuerna',
      'Balance unipodal estático',
      'Monster walk con banda lateral',
      'Dorsiflexión con banda',
      'Tibialis raise',
      'Single-leg calf raise excéntrico',
    ],
  },
  B: {
    name: 'Bloque B - Core Antirotacional',
    duration: '20-25 min',
    priority: 'Toda la temporada',
    exercises: [
      'Plancha frontal',
      'Plancha lateral con rotación',
      'Pallof press con banda',
      'Dead bug',
      'Bird dog con banda',
      'Hollow body hold',
    ],
  },
  C: {
    name: 'Bloque C - Fuerza Tren Inferior',
    duration: '30-35 min',
    priority: 'Progresión MF1 → MF3',
    exercises: [
      'Bulgarian split squat con mancuernas',
      'Step-up con mancuerna',
      'Hip thrust con barra',
      'Peso muerto rumano unipodal',
      'Sentadilla goblet',
      'Step-down excéntrico',
    ],
  },
  D: {
    name: 'Bloque D - Cadena Posterior + TRX',
    duration: '25-30 min',
    priority: 'Desde M1.1',
    exercises: [
      'Nordic curl',
      'Good morning con banda',
      'TRX row',
      'TRX single-leg squat',
      'TRX hamstring curl',
      'Face pull con banda',
    ],
  },
  E: {
    name: 'Bloque E - Movilidad y Recuperación',
    duration: '20-25 min',
    priority: 'Siempre al final',
    exercises: [
      'Apertura de cadera 90/90',
      'Flexores de cadera en zancada',
      'Isquiotibiales con banda',
      'Knee-to-wall',
      'Gato-vaca + extensión torácica',
      'Foam roller cuádriceps',
      'Foam roller IT band',
      'Foam roller glúteos',
    ],
  },
}

export default function TabFuerza() {
  const { currentPhase } = useMacrocycle()

  return (
    <div className="space-y-6">
      {/* Current Phase Strength Focus */}
      {currentPhase && (
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Fuerza en {currentPhase.name}
          </h3>
          <p className="text-gray-700">
            {currentPhase.phase_number === 1 &&
              'En esta fase: Bloque A (tobillo) con máxima prioridad. Prevención y rehabilitación del tobillo es crítico.'}
            {currentPhase.phase_number === 2 &&
              'En esta fase: Reducción de Bloque A, énfasis en C (fuerza tren inferior) y D (cadena posterior).'}
            {currentPhase.phase_number === 3 &&
              'En esta fase: Solo C y D (mantenimiento de fuerza). Reducción de volumen de fuerza para priorizar volumen de carrera.'}
            {currentPhase.phase_number === 4 &&
              'En esta fase: Mantenimiento mínimo. Solo bloques B y E para recuperación activa.'}
          </p>
        </div>
      )}

      {/* All Strength Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(STRENGTH_BLOCKS).map(([key, block]) => (
          <div key={key} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{block.name}</h3>
                  <p className="text-blue-100 text-sm mt-1">{block.duration}</p>
                </div>
                <Dumbbell className="w-6 h-6" />
              </div>
              <p className="text-xs bg-blue-700 bg-opacity-50 inline-block px-2 py-1 rounded mt-2">
                {block.priority}
              </p>
            </div>
            <div className="p-4">
              <ul className="space-y-2">
                {block.exercises.map((exercise, idx) => (
                  <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>{exercise}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Progression Guidelines */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Principios de Progresión</h3>
        <div className="space-y-4">
          <div className="border-l-4 border-green-500 pl-4">
            <p className="font-medium text-gray-900">Carga Progresiva</p>
            <p className="text-sm text-gray-600 mt-1">
              Aumentar peso cuando puedas completar todas las series con buena técnica y sin superar RPE 8/10.
              Máximo +5% por semana.
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <p className="font-medium text-gray-900">Timing</p>
            <p className="text-sm text-gray-600 mt-1">
              Nunca el día antes de una sesión de calidad (series, tempo). Ideal: mismo día que Z1-Z2.
            </p>
          </div>
          <div className="border-l-4 border-yellow-500 pl-4">
            <p className="font-medium text-gray-900">Variación Semanal</p>
            <p className="text-sm text-gray-600 mt-1">
              Semanas A: volumen normal | Semanas B: +series | Semanas C: reducir a 2 series
            </p>
          </div>
          <div className="border-l-4 border-red-500 pl-4">
            <p className="font-medium text-gray-900">Señales de Alarma</p>
            <p className="text-sm text-gray-600 mt-1">
              Dolor en tobillo o rodilla → reducir carga. Fatiga isquios más de 48h → reducir reps.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
