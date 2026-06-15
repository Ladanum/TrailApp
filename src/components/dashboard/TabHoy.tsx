import { useState } from 'react'
import { Plus, ChevronDown } from 'lucide-react'
import PostWorkoutForm from '../forms/PostWorkoutForm'
import DailyStateForm from '../forms/DailyStateForm'

export default function TabHoy() {
  const [showWorkoutForm, setShowWorkoutForm] = useState(false)
  const [showDailyStateForm, setShowDailyStateForm] = useState(false)

  return (
    <div className="space-y-6">
      {/* Daily State Section */}
      <div className="bg-white rounded-lg shadow">
        <button
          onClick={() => setShowDailyStateForm(!showDailyStateForm)}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 border-b border-gray-200"
        >
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold text-gray-900">Estado del Día</h2>
            <span className="text-sm text-gray-500">(Mañana - Peso, Motivación, Estrés, Sueño)</span>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-gray-400 transition-transform ${
              showDailyStateForm ? 'rotate-180' : ''
            }`}
          />
        </button>
        {showDailyStateForm && (
          <div className="p-6">
            <DailyStateForm onSubmit={() => setShowDailyStateForm(false)} />
          </div>
        )}
      </div>

      {/* Post-Workout Form Section */}
      <div className="bg-white rounded-lg shadow">
        <button
          onClick={() => setShowWorkoutForm(!showWorkoutForm)}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 border-b border-gray-200"
        >
          <div className="flex items-center gap-2">
            <Plus className="w-5 h-5 text-trail-600" />
            <h2 className="text-lg font-semibold text-gray-900">Registrar Entreno</h2>
            <span className="text-sm text-gray-500">(30 seg - Datos básicos + sensaciones)</span>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-gray-400 transition-transform ${
              showWorkoutForm ? 'rotate-180' : ''
            }`}
          />
        </button>
        {showWorkoutForm && (
          <div className="p-6">
            <PostWorkoutForm onSubmit={() => setShowWorkoutForm(false)} />
          </div>
        )}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Métricas Hoy</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Entrenamientos registrados</span>
              <span className="text-2xl font-bold text-trail-600">—</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Volumen acumulado</span>
              <span className="text-2xl font-bold text-trail-600">—</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Desnivel acumulado</span>
              <span className="text-2xl font-bold text-trail-600">—</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Estado Corporal</h3>
          <p className="text-gray-600">Mapa corporal interactivo - próximamente</p>
        </div>
      </div>
    </div>
  )
}
