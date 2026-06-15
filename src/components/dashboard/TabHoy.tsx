import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import PostWorkoutForm from '../forms/PostWorkoutForm'
import DailyStateForm from '../forms/DailyStateForm'

export default function TabHoy() {
  const [showWorkoutForm, setShowWorkoutForm] = useState(false)
  const [showDailyStateForm, setShowDailyStateForm] = useState(false)

  return (
    <div className="space-y-4 px-4 pt-6">
      {/* Big Action Buttons */}
      <div className="space-y-3">
        {/* Register Workout - Primary Action */}
        <button
          onClick={() => setShowWorkoutForm(!showWorkoutForm)}
          className="w-full bg-gradient-to-br from-trail-500 to-trail-600 text-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all active:scale-95"
        >
          <div className="flex items-center justify-between">
            <div className="text-left">
              <p className="text-4xl mb-2">🏃</p>
              <h2 className="text-2xl font-bold">Registrar Entreno</h2>
              <p className="text-trail-100 text-sm mt-1">30 segundos</p>
            </div>
            <ChevronDown
              className={`w-6 h-6 transition-transform ${
                showWorkoutForm ? 'rotate-180' : ''
              }`}
            />
          </div>
        </button>

        {showWorkoutForm && (
          <div className="bg-white rounded-2xl p-4 shadow-lg">
            <PostWorkoutForm onSubmit={() => setShowWorkoutForm(false)} />
          </div>
        )}

        {/* Daily State - Secondary Action */}
        <button
          onClick={() => setShowDailyStateForm(!showDailyStateForm)}
          className="w-full bg-gradient-to-br from-blue-400 to-blue-500 text-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all active:scale-95"
        >
          <div className="flex items-center justify-between">
            <div className="text-left">
              <p className="text-4xl mb-2">😌</p>
              <h2 className="text-2xl font-bold">Cómo te sientes</h2>
              <p className="text-blue-100 text-sm mt-1">Peso, estrés, sueño</p>
            </div>
            <ChevronDown
              className={`w-6 h-6 transition-transform ${
                showDailyStateForm ? 'rotate-180' : ''
              }`}
            />
          </div>
        </button>

        {showDailyStateForm && (
          <div className="bg-white rounded-2xl p-4 shadow-lg">
            <DailyStateForm onSubmit={() => setShowDailyStateForm(false)} />
          </div>
        )}
      </div>

      {/* Quick Stats Cards */}
      <div className="grid grid-cols-3 gap-3 mt-6">
        <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl p-4 text-center shadow-md">
          <p className="text-3xl mb-2">📊</p>
          <p className="text-2xl font-bold text-gray-900">—</p>
          <p className="text-xs text-gray-600 mt-1">Entrenamientos</p>
        </div>

        <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl p-4 text-center shadow-md">
          <p className="text-3xl mb-2">📈</p>
          <p className="text-2xl font-bold text-gray-900">—</p>
          <p className="text-xs text-gray-600 mt-1">Volumen km</p>
        </div>

        <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-2xl p-4 text-center shadow-md">
          <p className="text-3xl mb-2">⛰️</p>
          <p className="text-2xl font-bold text-gray-900">—</p>
          <p className="text-xs text-gray-600 mt-1">Desnivel m</p>
        </div>
      </div>

      {/* Body Map Placeholder */}
      <div className="bg-gradient-to-br from-indigo-100 to-indigo-50 rounded-3xl p-6 mt-6 shadow-md text-center">
        <p className="text-5xl mb-3">🧘</p>
        <h3 className="text-lg font-bold text-gray-900">Mapa Corporal</h3>
        <p className="text-sm text-gray-600 mt-2">Marca molestias e incomodidades</p>
        <button className="bg-indigo-600 text-white px-6 py-2 rounded-xl font-semibold mt-4 w-full">
          Próximamente
        </button>
      </div>
    </div>
  )
}
