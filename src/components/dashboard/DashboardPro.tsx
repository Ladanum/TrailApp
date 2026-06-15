import { useState } from 'react'
import PostWorkoutForm from '../forms/PostWorkoutForm'
import DailyStateForm from '../forms/DailyStateForm'
import { useWorkouts } from '../../hooks/useWorkouts'
import { useDailyState } from '../../hooks/useDailyState'
import { useMacrocycle } from '../../hooks/useMacrocycle'

export default function DashboardPro() {
  const [view, setView] = useState<'dashboard' | 'progress'>('dashboard')
  const [showWorkoutForm, setShowWorkoutForm] = useState(false)
  const [showDailyStateForm, setShowDailyStateForm] = useState(false)

  const { workouts, loading: workoutsLoading } = useWorkouts()
  const { dailyState, loading: dailyStateLoading } = useDailyState()
  const { macrophases, currentPhase } = useMacrocycle()

  // Calculate stats
  const thisWeekWorkouts = workouts.filter((w) => {
    const wDate = new Date(w.date)
    const today = new Date()
    const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000)
    return wDate >= weekAgo && wDate <= today
  })

  const weeklyVolume = thisWeekWorkouts.reduce((acc, w) => acc + (w.distance_km || 0), 0).toFixed(1)
  const weeklyElevation = thisWeekWorkouts.reduce((acc, w) => acc + (w.elevation_gain || 0), 0)

  const today = new Date('2026-06-15')
  const raceDate = new Date('2027-06-15')
  const daysUntilRace = Math.ceil((raceDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))

  const phases = [
    {
      id: 'MF1',
      name: 'Recuperación y Base',
      weeks: '1–12',
      color: '#388BFD',
      r: 12 / 52,
      dates: '15 jun – 6 sep 2026',
      active: true,
    },
    {
      id: 'MF2',
      name: 'Desarrollo Aeróbico',
      weeks: '13–28',
      color: '#3FB950',
      r: 16 / 52,
      dates: '7 sep – 27 dic 2026',
      active: false,
    },
    {
      id: 'MF3',
      name: 'Específico Ultra',
      weeks: '29–44',
      color: '#F0883E',
      r: 16 / 52,
      dates: '28 dic 2026 – 18 abr 2027',
      active: false,
    },
    {
      id: 'MF4',
      name: 'Taper + Carrera',
      weeks: '45–52',
      color: '#A371F7',
      r: 8 / 52,
      dates: '19 abr – 15 jun 2027',
      active: false,
    },
  ]

  const checkpoints = [
    { id: 'CP1', name: 'Fin MF1 — Base establecida', date: '6 sep 2026', color: '#388BFD' },
    { id: 'CP2', name: 'Fin MF2 — Aeróbico consolidado', date: '27 dic 2026', color: '#3FB950' },
    { id: 'CP3', name: 'Fin MF3 — Específico completado', date: '18 abr 2027', color: '#F0883E' },
    { id: 'RACE', name: 'Ultra 80K · Sub 11h', date: '15 jun 2027', color: '#A371F7' },
  ]

  const loading = workoutsLoading || dailyStateLoading

  return (
    <div className="flex h-screen bg-[#0D1117] text-[#E6EDF3] font-inter overflow-hidden">
      {/* Sidebar */}
      <nav className="w-56 bg-[#0D1117] border-r border-[#21262D] flex flex-col flex-shrink-0">
        {/* Header */}
        <div className="px-5 py-5 border-b border-[#21262D]">
          <div className="font-mono text-xs text-[#3FB950] font-bold uppercase mb-1 tracking-wider">
            TrailApp
          </div>
          <div className="text-lg font-black text-[#E6EDF3] -tracking-wide mb-1">Ultra 80K</div>
          <div className="font-mono text-xs text-[#8B949E]">Sub 11h · 15 jun 2027</div>
        </div>

        {/* Nav Buttons */}
        <div className="flex-1 py-2 flex flex-col gap-px">
          <button
            onClick={() => setView('dashboard')}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium border-l-2 transition ${
              view === 'dashboard'
                ? 'border-[#3FB950] bg-[#3FB950]/5 text-[#E6EDF3]'
                : 'border-transparent text-[#8B949E] hover:text-[#E6EDF3]'
            }`}
          >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <rect x="1" y="1" width="5.5" height="5.5" rx="1.2" stroke="currentColor" strokeWidth="1.3"></rect>
              <rect x="8.5" y="1" width="5.5" height="5.5" rx="1.2" stroke="currentColor" strokeWidth="1.3"></rect>
              <rect x="1" y="8.5" width="5.5" height="5.5" rx="1.2" stroke="currentColor" strokeWidth="1.3"></rect>
              <rect x="8.5" y="8.5" width="5.5" height="5.5" rx="1.2" stroke="currentColor" strokeWidth="1.3"></rect>
            </svg>
            <span>Dashboard</span>
          </button>

          <button
            onClick={() => setView('progress')}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium border-l-2 transition ${
              view === 'progress'
                ? 'border-[#3FB950] bg-[#3FB950]/5 text-[#E6EDF3]'
                : 'border-transparent text-[#8B949E] hover:text-[#E6EDF3]'
            }`}
          >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path
                d="M1.5 11.5L5 7L8 9.5L13.5 2.5"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path d="M1.5 13.5H13.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"></path>
            </svg>
            <span>Progreso</span>
          </button>
        </div>

        {/* Days Until Race */}
        <div className="px-5 py-4 border-t border-[#21262D]">
          <div className="text-xs uppercase text-[#8B949E] font-medium mb-2 tracking-wider">Días hasta carrera</div>
          <div className="font-mono text-4xl font-bold text-[#3FB950] leading-none -tracking-wide">{daysUntilRace}</div>
          <div className="font-mono text-xs text-[#8B949E] mt-1.5">15 jun 2027</div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-9 py-8">
        {loading ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-[#8B949E]">Cargando...</div>
          </div>
        ) : view === 'dashboard' ? (
          <div>
            {/* Header */}
            <div className="flex justify-between items-start gap-4 mb-5 flex-wrap">
              <div>
                <div className="font-mono text-xs text-[#3FB950] tracking-wider uppercase mb-1">
                  {currentPhase?.name || 'PLAN'} · SEMANA 01
                </div>
                <h1 className="text-2xl font-black text-[#E6EDF3] -tracking-wide mb-1">Dashboard Semanal</h1>
                <div className="text-sm text-[#8B949E]">
                  {currentPhase?.description || 'Entrenamientos'} · {new Date().toLocaleDateString()}
                </div>
              </div>
              <div className="bg-[#161B22] border border-[#21262D] rounded-lg p-3 text-right flex-shrink-0">
                <div className="text-xs uppercase tracking-wider text-[#8B949E] font-medium mb-1">
                  Entrenamientos esta semana
                </div>
                <div className="font-mono text-2xl font-bold text-[#3FB950]">
                  {thisWeekWorkouts.length}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 mb-6">
              {/* Register Workout */}
              <button
                onClick={() => setShowWorkoutForm(!showWorkoutForm)}
                className="w-full bg-[#3FB950] text-[#0D1117] rounded-lg p-4 font-bold text-left hover:bg-[#3FB950]/90 transition flex justify-between items-center"
              >
                <div>
                  <div className="text-2xl mb-1">🏃</div>
                  <h2 className="font-bold">Registrar Entreno</h2>
                  <p className="text-sm opacity-75">30 segundos</p>
                </div>
                <svg
                  className={`w-6 h-6 transition-transform ${showWorkoutForm ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>

              {showWorkoutForm && (
                <div className="bg-[#161B22] border border-[#21262D] rounded-lg p-4">
                  <PostWorkoutForm onSubmit={() => setShowWorkoutForm(false)} />
                </div>
              )}

              {/* Daily State */}
              <button
                onClick={() => setShowDailyStateForm(!showDailyStateForm)}
                className="w-full bg-[#388BFD] text-[#0D1117] rounded-lg p-4 font-bold text-left hover:bg-[#388BFD]/90 transition flex justify-between items-center"
              >
                <div>
                  <div className="text-2xl mb-1">😌</div>
                  <h2 className="font-bold">Cómo te sientes</h2>
                  <p className="text-sm opacity-75">Peso, estrés, sueño</p>
                </div>
                <svg
                  className={`w-6 h-6 transition-transform ${showDailyStateForm ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>

              {showDailyStateForm && (
                <div className="bg-[#161B22] border border-[#21262D] rounded-lg p-4">
                  <DailyStateForm onSubmit={() => setShowDailyStateForm(false)} />
                </div>
              )}
            </div>

            {/* Recent Workouts */}
            <div className="mb-6">
              <h3 className="text-sm font-bold text-[#8B949E] uppercase tracking-wider mb-3">Entrenamientos Recientes</h3>
              <div className="space-y-2">
                {thisWeekWorkouts.slice(0, 5).map((w) => (
                  <div key={w.id} className="bg-[#161B22] border border-[#21262D] rounded-lg p-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-bold text-[#E6EDF3]">{w.distance_km}km</div>
                        <div className="text-xs text-[#8B949E] mt-1">{w.duration_minutes} min</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-[#8B949E]">{new Date(w.date).toLocaleDateString()}</div>
                        {w.zone && <div className="text-xs text-[#388BFD] font-mono font-bold mt-1">{w.zone}</div>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-[#161B22] border border-[#21262D] rounded-lg p-3.5">
                <div className="text-xs uppercase tracking-wider text-[#8B949E] font-bold mb-1">Volumen sem.</div>
                <div className="font-mono text-xl font-bold text-[#E6EDF3]">{weeklyVolume} km</div>
                <div className="text-xs text-[#8B949E] mt-1">{thisWeekWorkouts.length} entrenamientos</div>
              </div>
              <div className="bg-[#161B22] border border-[#21262D] rounded-lg p-3.5">
                <div className="text-xs uppercase tracking-wider text-[#8B949E] font-bold mb-1">D+ acumulado</div>
                <div className="font-mono text-xl font-bold text-[#E6EDF3]">{weeklyElevation} m</div>
                <div className="text-xs text-[#8B949E] mt-1">esta semana</div>
              </div>
              <div className="bg-[#161B22] border border-[#21262D] rounded-lg p-3.5">
                <div className="text-xs uppercase tracking-wider text-[#8B949E] font-bold mb-1">Estado actual</div>
                <div className="font-mono text-xl font-bold text-[#388BFD]">{currentPhase?.name.split(' ')[0] || 'MF1'}</div>
                <div className="text-xs text-[#8B949E] mt-1">macrofase activa</div>
              </div>
            </div>
          </div>
        ) : (
          /* Progress View */
          <div>
            <div className="mb-6">
              <div className="font-mono text-xs text-[#3FB950] tracking-wider uppercase mb-1">PLAN GENERAL</div>
              <h1 className="text-2xl font-black text-[#E6EDF3] -tracking-wide mb-1">Progreso</h1>
              <div className="text-sm text-[#8B949E]">Plan Ultra 80K</div>
            </div>

            <div className="bg-[#161B22] border border-[#21262D] rounded-lg p-4 mb-6">
              <div className="text-xs uppercase tracking-wider text-[#8B949E] font-bold mb-3">MACROFASES — 52 SEMANAS</div>
              <div className="flex h-2 rounded-full overflow-hidden gap-0.5 mb-4">
                {phases.map((p) => (
                  <div key={p.id} className="flex-1" style={{ background: p.active ? p.color : 'rgba(255,255,255,0.05)' }}></div>
                ))}
              </div>
              <div className="space-y-3">
                {phases.map((p) => (
                  <div key={p.id} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded flex-shrink-0" style={{ background: p.color }}></div>
                    <span className="font-mono text-xs font-bold w-12" style={{ color: p.color }}>
                      {p.id}
                    </span>
                    <span className="text-sm flex-1">{p.name}</span>
                    {p.active && <span className="text-xs bg-[#3FB950]/10 text-[#3FB950] px-2 py-1 rounded">ACTIVA</span>}
                    <span className="text-xs text-[#8B949E] font-mono">Sem {p.weeks}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#161B22] border border-[#21262D] rounded-lg p-4">
              <div className="text-xs uppercase tracking-wider text-[#8B949E] font-bold mb-4">CHECKPOINTS</div>
              <div className="space-y-3">
                {checkpoints.map((cp) => (
                  <div key={cp.id} className="flex items-start gap-3">
                    <div className="text-xs font-mono font-bold border px-2 py-1 rounded flex-shrink-0" style={{ borderColor: cp.color, color: cp.color }}>
                      {cp.id}
                    </div>
                    <div>
                      <div className="text-sm text-[#E6EDF3] font-medium">{cp.name}</div>
                      <div className="font-mono text-xs text-[#8B949E]">{cp.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
