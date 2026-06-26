import { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import PostWorkoutForm from '../forms/PostWorkoutForm'
import DailyStateForm from '../forms/DailyStateForm'
import { useWorkouts } from '../../hooks/useWorkouts'
import { useDailyState } from '../../hooks/useDailyState'
import { useMacrocycle } from '../../hooks/useMacrocycle'
import { RACE_CALENDAR, CP3_CRITERIA, type RaceEvent } from '../../data/raceCalendar'
import { PLANNED_WORKOUTS, type PlannedWorkout } from '../../data/plannedWorkouts'

// Import sessions data from sessions_complete.js
// @ts-ignore - js file without types
import SESSIONS from '../../sessions_complete.js'

export default function DashboardPro() {
  const [view, setView] = useState<'dashboard' | 'progress' | 'races'>('dashboard')
  const [selectedRace, setSelectedRace] = useState<RaceEvent | null>(null)
  const [showWorkoutForm, setShowWorkoutForm] = useState(false)
  const [showDailyStateForm, setShowDailyStateForm] = useState(false)
  const [editingWorkoutId, setEditingWorkoutId] = useState<string | null>(null)
  const [selectedPlannedWorkout, setSelectedPlannedWorkout] = useState<PlannedWorkout | null>(null)

  const { workouts, loading: workoutsLoading, deleteWorkout } = useWorkouts()
  const { dailyState, loading: dailyStateLoading } = useDailyState()
  const { macrophases, currentPhase } = useMacrocycle()

  const handleDeleteWorkout = async (id: string) => {
    if (confirm('¿Estás seguro de que quieres eliminar este entreno?')) {
      try {
        await deleteWorkout(id)
      } catch (error) {
        alert('Error al eliminar entreno')
      }
    }
  }

  const handleEditWorkout = (workout: any) => {
    setEditingWorkoutId(workout.id)
    setShowWorkoutForm(true)
  }

  const editingWorkout = editingWorkoutId ? workouts.find(w => w.id === editingWorkoutId) : null

  // Calculate stats
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const todayString = today.toISOString().split('T')[0]

  // Get week start (Monday)
  const weekStart = new Date(today)
  const day = weekStart.getDay()
  const diff = weekStart.getDate() - day + (day === 0 ? -6 : 1)
  weekStart.setDate(diff)

  const thisWeekWorkouts = workouts.filter((w) => {
    const wDate = new Date(w.date)
    const weekEnd = new Date(weekStart)
    weekEnd.setDate(weekEnd.getDate() + 6)
    return wDate >= weekStart && wDate <= weekEnd
  })

  // Group workouts by day
  const workoutsByDay: Record<string, typeof workouts> = {}
  const weekDays = []
  for (let i = 0; i < 7; i++) {
    const d = new Date(weekStart)
    d.setDate(d.getDate() + i)
    const dateStr = d.toISOString().split('T')[0]
    weekDays.push({ date: dateStr, label: d.toLocaleDateString('es-ES', { weekday: 'short', day: 'numeric' }) })
    workoutsByDay[dateStr] = workouts.filter(w => w.date === dateStr)
  }

  // Get today's workout
  const todayWorkouts = workoutsByDay[todayString] || []

  const weeklyVolume = thisWeekWorkouts.reduce((acc, w) => acc + (w.distance_km || 0), 0).toFixed(1)
  const weeklyElevation = thisWeekWorkouts.reduce((acc, w) => acc + (w.elevation_gain || 0), 0)
  const raceDate = new Date('2027-06-15')
  const daysUntilRace = Math.ceil((raceDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))

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

  // Calculate completed vs planned sessions for this week
  const weekEndDate = new Date(weekStart)
  weekEndDate.setDate(weekEndDate.getDate() + 6)

  // Parse session dates from SESSIONS data
  const parseSessionDate = (fullDate: string, year?: number) => {
    // Format: "Lunes, 15 Jun 2026"
    const months: Record<string, number> = {
      'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
      'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
    }
    const parts = fullDate.split(', ')
    if (parts.length < 2) return new Date(0)
    const dateStr = parts[1]
    const [day, month, y] = dateStr.split(' ')
    const selectedYear = parseInt(y)
    const selectedMonth = months[month] || 0
    return new Date(selectedYear, selectedMonth, parseInt(day), 0, 0, 0, 0)
  }

  // Use SESSIONS data instead of PLANNED_WORKOUTS
  const plannedThisWeek = SESSIONS.filter((session: any) => {
    const sessionDate = parseSessionDate(session.fullDate)
    return sessionDate >= weekStart && sessionDate <= weekEndDate
  })

  // Count completed planned sessions (planned sessions that have workouts executed)
  const completedDates = new Set(thisWeekWorkouts.map(w => w.date))
  const sessionDates = new Set(plannedThisWeek.map((s: any) => {
    const d = parseSessionDate(s.fullDate)
    return d.toISOString().split('T')[0]
  }))
  const completedPlannedSessions = Array.from(sessionDates).filter(date => completedDates.has(date)).length
  const totalPlannedSessions = sessionDates.size

  // Calculate current week number within the phase
  let currentWeekNumber = 1
  if (currentPhase) {
    const phaseStart = new Date(currentPhase.start_date)
    phaseStart.setHours(0, 0, 0, 0)
    const daysSincePhaseStart = Math.floor((today.getTime() - phaseStart.getTime()) / (1000 * 60 * 60 * 24))
    currentWeekNumber = Math.floor(daysSincePhaseStart / 7) + 1
  }

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
            onClick={() => setView('races')}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium border-l-2 transition ${
              view === 'races'
                ? 'border-[#3FB950] bg-[#3FB950]/5 text-[#E6EDF3]'
                : 'border-transparent text-[#8B949E] hover:text-[#E6EDF3]'
            }`}
          >
            <span className="text-lg">🏁</span>
            <span>Carreras</span>
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
                <div className="font-mono text-xs text-[#3FB950] tracking-wider uppercase mb-1 font-bold">
                  {currentPhase?.id || 'MF1'} · SEMANA {String(currentWeekNumber).padStart(2, '0')}
                </div>
                <h1 className="text-3xl font-black text-[#E6EDF3] -tracking-wide mb-1">Dashboard Semanal</h1>
                <div className="text-sm text-[#8B949E]">
                  {currentPhase?.name || 'Recuperación y Base'} · {weekStart.toLocaleDateString('es-ES', { day: 'numeric', month: 'long' })}–{weekEndDate.toLocaleDateString('es-ES', { day: 'numeric', month: 'long' })}
                </div>
              </div>
              <div className="bg-[#161B22] border border-[#21262D] rounded-lg p-3 text-right flex-shrink-0">
                <div className="text-xs uppercase tracking-wider text-[#8B949E] font-bold mb-1">
                  Sesiones completadas
                </div>
                <div className="font-mono text-2xl font-bold text-[#3FB950]">
                  {completedPlannedSessions}/{totalPlannedSessions}
                </div>
              </div>
            </div>

            {/* Mountain SVG */}
            <svg className="w-full h-4 mb-5" viewBox="0 0 900 18" preserveAspectRatio="none">
              <path
                d="M0,18 L40,14 L80,8 L120,13 L165,3 L210,11 L255,7 L300,13 L345,2 L395,10 L440,15 L490,5 L540,12 L595,1 L645,9 L700,14 L750,6 L800,12 L850,4 L900,18"
                stroke="#3FB950"
                strokeWidth="1"
                fill="none"
                opacity="0.22"
              />
            </svg>

            {/* Plan Bar */}
            <div className="bg-[#161B22] border border-[#21262D] rounded-lg p-3 mb-6">
              <div className="flex justify-between items-center mb-2">
                <div className="text-xs uppercase tracking-wider text-[#8B949E] font-bold">Plan 52 semanas</div>
                <div className="font-mono text-xs text-[#8B949E]">SEM 01 / 52</div>
              </div>
              <div className="flex gap-3 text-xs text-[#8B949E] flex-wrap">
                <span>● <span className="text-[#388BFD]">MF1 activa</span></span>
                <span>CP1: 6 sep 2026</span>
                <span>CP2: 27 dic 2026</span>
                <span>CP3: 18 abr 2027</span>
                <span>RACE: 15 jun 2027</span>
              </div>
            </div>

            {/* Weekly Calendar with Planned Workouts */}
            <div className="mb-6">
              <h3 className="text-sm font-bold text-[#8B949E] uppercase tracking-wider mb-3">Calendario Semanal — Entrenamientos Planificados</h3>
              <div className="grid grid-cols-7 gap-2 pb-2">
                {PLANNED_WORKOUTS.slice(0, 7).map((workout) => {
                  const isToday = workout.date === todayString
                  const zoneColor = workout.planned_zone === 'Z1' ? '#10b981'
                    : workout.planned_zone === 'Z2' ? '#388BFD'
                    : workout.planned_zone === 'Z3' ? '#F59E0B'
                    : workout.planned_zone === 'Z4' ? '#EF4444'
                    : workout.planned_zone === 'Z5' ? '#DC2626'
                    : workout.planned_zone === 'GYM' ? '#A371F7'
                    : workout.planned_zone === 'REC' ? '#8B949E'
                    : '#E6EDF3'

                  return (
                    <button
                      key={workout.id}
                      onClick={() => {
                        if (isToday) {
                          setSelectedPlannedWorkout(workout)
                          setShowWorkoutForm(true)
                        }
                      }}
                      className={`rounded-lg p-3 text-left transition flex flex-col min-h-[168px] ${
                        isToday
                          ? 'bg-[#161B22] border-2 border-[#3FB950] cursor-pointer hover:opacity-90'
                          : 'bg-[#161B22] border border-[#21262D] hover:opacity-85'
                      }`}
                    >
                      {/* Top */}
                      <div className="flex justify-between items-start mb-1">
                        <div className={`font-mono text-xs font-bold uppercase tracking-wider ${isToday ? 'text-[#3FB950]' : 'text-[#8B949E]'}`}>
                          {workout.day_of_week}
                        </div>
                      </div>

                      {/* Date */}
                      <div className="font-mono text-xs text-[#8B949E] mb-2">{workout.date}</div>

                      {/* Zone Badge */}
                      <div className="mb-2">
                        <span
                          className="badge text-xs font-bold px-1.5 py-0.5 rounded"
                          style={{ backgroundColor: `${zoneColor}14`, color: zoneColor, border: `1px solid ${zoneColor}28` }}
                        >
                          {workout.planned_zone}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-[#8B949E] mb-2 leading-1.45 flex-1" style={{ lineHeight: '1.45' }}>
                        {workout.description}
                      </p>

                      {/* Bottom */}
                      <div className="flex justify-between items-center gap-1">
                        <div className="font-mono text-xs text-[#E6EDF3] font-medium">
                          {workout.planned_duration_minutes} min
                        </div>
                        {workout.workout_type === 'strength' && (
                          <span className="alert-chip">tobillo</span>
                        )}
                        {workout.workout_type === 'recovery' && (
                          <span className="alert-chip">REC</span>
                        )}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Today's Workout Details */}
            {todayWorkouts.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-bold text-[#8B949E] uppercase tracking-wider mb-3">Entreno de Hoy</h3>
                <div className="space-y-3">
                  {todayWorkouts.map((w) => (
                    <div key={w.id} className="bg-[#161B22] border border-[#3FB950]/50 rounded-lg p-4">
                      {/* Header */}
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <div className="font-bold text-lg text-[#E6EDF3]">{w.distance_km} km</div>
                          <div className="text-xs text-[#8B949E] mt-1">{new Date(w.date).toLocaleDateString('es-ES')}</div>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEditWorkout(w)}
                            className="text-[#388BFD] hover:bg-[#388BFD]/10 px-2 py-1 rounded transition text-sm font-bold"
                          >
                            ✏️
                          </button>
                          <button
                            onClick={() => handleDeleteWorkout(w.id)}
                            className="text-[#F0883E] hover:bg-[#F0883E]/10 px-2 py-1 rounded transition text-sm font-bold"
                          >
                            🗑️
                          </button>
                        </div>
                      </div>

                      {/* Grid of Details */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                        <div className="bg-[#0D1117] border border-[#21262D] rounded p-2">
                          <div className="text-xs text-[#8B949E] font-bold">Distancia</div>
                          <div className="font-mono font-bold text-[#E6EDF3]">{w.distance_km}km</div>
                        </div>
                        <div className="bg-[#0D1117] border border-[#21262D] rounded p-2">
                          <div className="text-xs text-[#8B949E] font-bold">Duración</div>
                          <div className="font-mono font-bold text-[#E6EDF3]">{w.duration_minutes}min</div>
                        </div>
                        <div className="bg-[#0D1117] border border-[#21262D] rounded p-2">
                          <div className="text-xs text-[#8B949E] font-bold">Desnivel</div>
                          <div className="font-mono font-bold text-[#E6EDF3]">+{w.elevation_gain}m</div>
                        </div>
                        <div className="bg-[#0D1117] border border-[#21262D] rounded p-2">
                          <div className="text-xs text-[#8B949E] font-bold">Ritmo</div>
                          <div className="font-mono font-bold text-[#388BFD]">
                            {w.avg_pace_min_km ? `${w.avg_pace_min_km.toFixed(2)}min/km` : '—'}
                          </div>
                        </div>
                        {w.avg_heart_rate && (
                          <div className="bg-[#0D1117] border border-[#21262D] rounded p-2">
                            <div className="text-xs text-[#8B949E] font-bold">FC Media</div>
                            <div className="font-mono font-bold text-[#F0883E]">{w.avg_heart_rate}bpm</div>
                          </div>
                        )}
                        {w.zone && (
                          <div className="bg-[#0D1117] border border-[#21262D] rounded p-2">
                            <div className="text-xs text-[#8B949E] font-bold">Zona</div>
                            <div className="font-mono font-bold text-[#388BFD]">{w.zone}</div>
                          </div>
                        )}
                        {w.rpe && (
                          <div className="bg-[#0D1117] border border-[#21262D] rounded p-2">
                            <div className="text-xs text-[#8B949E] font-bold">RPE</div>
                            <div className="font-mono font-bold text-[#3FB950]">{w.rpe}/10</div>
                          </div>
                        )}
                        {w.surface && (
                          <div className="bg-[#0D1117] border border-[#21262D] rounded p-2">
                            <div className="text-xs text-[#8B949E] font-bold">Terreno</div>
                            <div className="font-mono font-bold text-[#E6EDF3] capitalize">{w.surface}</div>
                          </div>
                        )}
                      </div>

                      {/* Notes */}
                      {w.notes && (
                        <div className="bg-[#0D1117] border border-[#21262D] rounded p-3 text-sm text-[#E6EDF3]">
                          <div className="text-xs text-[#8B949E] font-bold mb-1">Notas</div>
                          <p>{w.notes}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Weekly Stats */}
            <div className="mb-6">
              <h3 className="text-sm font-bold text-[#8B949E] uppercase tracking-wider mb-3">Acumulados Semanales</h3>
              <div className="bg-[#161B22] border border-[#21262D] rounded-lg p-4">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-xs uppercase text-[#8B949E] font-bold mb-2">Volumen Real</div>
                    <div className="font-mono text-2xl font-bold text-[#3FB950]">{weeklyVolume} km</div>
                    <div className="text-xs text-[#8B949E] mt-1">{thisWeekWorkouts.length} entrenamientos</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase text-[#8B949E] font-bold mb-2">Objetivo (macrofase)</div>
                    <div className="font-mono text-2xl font-bold text-[#388BFD]">{currentPhase?.weekly_volume_km || 52} km</div>
                    <div className="text-xs text-[#8B949E] mt-1">{currentPhase?.name || 'M1'}</div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-xs font-bold text-[#8B949E]">Progreso</div>
                    <div className="text-xs font-mono text-[#E6EDF3]">
                      {((parseFloat(weeklyVolume) / (currentPhase?.weekly_volume_km || 52)) * 100).toFixed(0)}%
                    </div>
                  </div>
                  <div className="w-full bg-[#0D1117] rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-[#388BFD] to-[#3FB950] h-full rounded-full transition-all duration-300"
                      style={{ width: `${Math.min(100, (parseFloat(weeklyVolume) / (currentPhase?.weekly_volume_km || 52)) * 100)}%` }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-[#0D1117] border border-[#21262D] rounded p-2">
                    <div className="text-[#8B949E] font-bold">Desnivel Real</div>
                    <div className="font-mono font-bold text-[#E6EDF3]">+{weeklyElevation}m</div>
                  </div>
                  <div className="bg-[#0D1117] border border-[#21262D] rounded p-2">
                    <div className="text-[#8B949E] font-bold">Diferencia</div>
                    <div className={`font-mono font-bold ${parseFloat(weeklyVolume) >= (currentPhase?.weekly_volume_km || 52) ? 'text-[#3FB950]' : 'text-[#F0883E]'}`}>
                      {parseFloat(weeklyVolume) >= (currentPhase?.weekly_volume_km || 52)
                        ? '+' + (parseFloat(weeklyVolume) - (currentPhase?.weekly_volume_km || 52)).toFixed(1)
                        : (parseFloat(weeklyVolume) - (currentPhase?.weekly_volume_km || 52)).toFixed(1)
                      } km
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary Stats */}
            <div className="grid grid-cols-3 gap-2 mb-6">
              <div className="bg-[#161B22] border border-[#21262D] rounded-lg p-3.5">
                <div className="text-xs uppercase tracking-wider text-[#8B949E] font-bold mb-1">Entrenamientos</div>
                <div className="font-mono text-xl font-bold text-[#E6EDF3]">{thisWeekWorkouts.length}</div>
                <div className="text-xs text-[#8B949E] mt-1">esta semana</div>
              </div>
              <div className="bg-[#161B22] border border-[#21262D] rounded-lg p-3.5">
                <div className="text-xs uppercase tracking-wider text-[#8B949E] font-bold mb-1">Sesiones Hoy</div>
                <div className="font-mono text-xl font-bold text-[#3FB950]">{todayWorkouts.length}</div>
                <div className="text-xs text-[#8B949E] mt-1">entrenamientos</div>
              </div>
              <div className="bg-[#161B22] border border-[#21262D] rounded-lg p-3.5">
                <div className="text-xs uppercase tracking-wider text-[#8B949E] font-bold mb-1">Macrofase</div>
                <div className="font-mono text-xl font-bold text-[#388BFD]">{currentPhase?.name.split(' ')[0] || 'M1'}</div>
                <div className="text-xs text-[#8B949E] mt-1">activa</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2">
              {/* Register or Edit Workout */}
              {!showWorkoutForm ? (
                <button
                  onClick={() => {
                    setEditingWorkoutId(null)
                    setShowWorkoutForm(true)
                  }}
                  className="w-full bg-[#3FB950] text-[#0D1117] rounded-lg p-3 font-bold text-left hover:bg-[#3FB950]/90 transition flex justify-between items-center"
                >
                  <div>
                    <div className="text-lg mb-0.5">🏃</div>
                    <h2 className="text-sm font-bold">Registrar</h2>
                  </div>
                  <svg
                    className="w-5 h-5 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>
              ) : (
                <div className="bg-[#161B22] border border-[#21262D] rounded-lg p-3">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xs font-bold text-[#E6EDF3]">
                      {editingWorkoutId ? '✏️ Editar' : selectedPlannedWorkout ? '✓ Completar Entreno' : '🏃 Entreno'}
                    </h3>
                    <button
                      onClick={() => {
                        setShowWorkoutForm(false)
                        setEditingWorkoutId(null)
                        setSelectedPlannedWorkout(null)
                      }}
                      className="text-[#8B949E] hover:text-[#E6EDF3] text-sm"
                    >
                      ✕
                    </button>
                  </div>
                  <PostWorkoutForm
                    workoutId={editingWorkoutId || undefined}
                    initialData={selectedPlannedWorkout ? {
                      date: selectedPlannedWorkout.date,
                      distance_km: selectedPlannedWorkout.planned_distance_km || 0,
                      duration_minutes: selectedPlannedWorkout.planned_duration_minutes || 0,
                      elevation_gain: selectedPlannedWorkout.planned_elevation_gain || 0,
                      elevation_loss: selectedPlannedWorkout.planned_elevation_gain || 0,
                      surface: selectedPlannedWorkout.planned_surface,
                      difficulty: selectedPlannedWorkout.planned_intensity,
                      zone: selectedPlannedWorkout.planned_zone,
                      notes: selectedPlannedWorkout.description,
                    } : editingWorkout ? {
                      date: editingWorkout.date,
                      distance_km: editingWorkout.distance_km,
                      duration_minutes: editingWorkout.duration_minutes,
                      elevation_gain: editingWorkout.elevation_gain,
                      elevation_loss: editingWorkout.elevation_loss,
                      avg_heart_rate: editingWorkout.avg_heart_rate,
                      avg_pace_min_km: editingWorkout.avg_pace_min_km,
                      surface: editingWorkout.surface,
                      difficulty: editingWorkout.difficulty,
                      zone: editingWorkout.zone,
                      rpe: editingWorkout.rpe,
                      sensations: editingWorkout.sensations,
                      completion_percentage: editingWorkout.completion_percentage,
                      notes: editingWorkout.notes,
                    } : undefined}
                    onSubmit={() => {
                      setShowWorkoutForm(false)
                      setEditingWorkoutId(null)
                      setSelectedPlannedWorkout(null)
                    }}
                  />
                </div>
              )}

              {/* Daily State */}
              <button
                onClick={() => setShowDailyStateForm(!showDailyStateForm)}
                className="w-full bg-[#388BFD] text-[#0D1117] rounded-lg p-3 font-bold text-left hover:bg-[#388BFD]/90 transition flex justify-between items-center"
              >
                <div>
                  <div className="text-lg mb-0.5">😌</div>
                  <h2 className="text-sm font-bold">Estado</h2>
                </div>
                <svg
                  className={`w-5 h-5 transition-transform ${showDailyStateForm ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>

              {showDailyStateForm && (
                <div className="bg-[#161B22] border border-[#21262D] rounded-lg p-3">
                  <DailyStateForm onSubmit={() => setShowDailyStateForm(false)} />
                </div>
              )}
            </div>
          </div>
        ) : (
          /* Progress View */
          <div>
            {console.log('ALL WORKOUTS:', workouts.map(w => ({ date: w.date, distance: w.distance_km })))}
            <div className="mb-6">
              <div className="font-mono text-xs text-[#3FB950] tracking-wider uppercase mb-1">PLAN GENERAL</div>
              <h1 className="text-2xl font-black text-[#E6EDF3] -tracking-wide mb-1">Progreso</h1>
              <div className="text-sm text-[#8B949E]">Plan Ultra 80K — Forma esperada vs real</div>
            </div>

            {/* Volume Chart */}
            <div className="bg-[#161B22] border border-[#21262D] rounded-lg p-4 mb-6">
              <div className="text-xs uppercase tracking-wider text-[#8B949E] font-bold mb-4">VOLUMEN ACUMULADO (KM)</div>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart
                  data={(() => {
                    const phaseData = [
                      { phase: 'M1', weeks: 12, weeklyVolume: 52, color: '#388BFD', startWeek: 1 },
                      { phase: 'M2', weeks: 16, weeklyVolume: 78, color: '#3FB950', startWeek: 13 },
                      { phase: 'M3', weeks: 16, weeklyVolume: 95, color: '#F0883E', startWeek: 29 },
                      { phase: 'M4', weeks: 8, weeklyVolume: 20, color: '#A371F7', startWeek: 45 },
                    ]

                    const chartData = []
                    let expectedAccum = 0
                    let realAccum = 0

                    for (let week = 1; week <= 52; week++) {
                      const phaseInfo = phaseData.find(p => week >= p.startWeek && week < p.startWeek + p.weeks)
                      if (phaseInfo) {
                        expectedAccum += phaseInfo.weeklyVolume
                      }

                      // Calculate real volume for this week
                      const weekStart = new Date(today)
                      weekStart.setDate(weekStart.getDate() - ((today.getDay() || 7) - 1) + (week - 1) * 7)
                      const weekEnd = new Date(weekStart)
                      weekEnd.setDate(weekEnd.getDate() + 6)

                      const weekWorkouts = workouts.filter(w => {
                        const wDate = new Date(w.date)
                        return wDate >= weekStart && wDate <= weekEnd
                      })
                      const weekVolume = weekWorkouts.reduce((sum, w) => sum + (w.distance_km || 0), 0)
                      realAccum += weekVolume

                      if (week % 4 === 0 || week === 1 || week === 52) {
                        chartData.push({
                          week,
                          expected: expectedAccum,
                          real: realAccum,
                          phase: phaseInfo?.phase || 'M4',
                        })
                      }
                    }

                    return chartData
                  })()}
                  margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#21262D" />
                  <XAxis dataKey="week" stroke="#8B949E" />
                  <YAxis stroke="#8B949E" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#161B22',
                      border: '1px solid #21262D',
                      borderRadius: '8px',
                      color: '#E6EDF3',
                    }}
                    formatter={(value) => value.toFixed(0)}
                    labelFormatter={(label) => `Semana ${label}`}
                  />
                  <Legend
                    wrapperStyle={{ paddingTop: '20px' }}
                    formatter={(value) => (
                      <span className="text-[#E6EDF3]">
                        {value === 'expected' ? '📊 Esperado' : '✓ Real'}
                      </span>
                    )}
                  />
                  <Line
                    type="monotone"
                    dataKey="expected"
                    stroke="#388BFD"
                    strokeWidth={2}
                    dot={{ fill: '#388BFD', r: 4 }}
                    name="expected"
                  />
                  <Line
                    type="monotone"
                    dataKey="real"
                    stroke="#3FB950"
                    strokeWidth={2}
                    dot={{ fill: '#3FB950', r: 4 }}
                    name="real"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Stats + Calendar Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {/* Left: Stats */}
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#161B22] border border-[#21262D] rounded-lg p-4">
                    <div className="text-xs uppercase text-[#8B949E] font-bold mb-2">Sesiones OK</div>
                    <div className="font-mono text-2xl font-bold text-[#3FB950]">{thisWeekWorkouts.length}/7</div>
                    <div className="text-xs text-[#8B949E] mt-1">esta semana</div>
                  </div>
                  <div className="bg-[#161B22] border border-[#21262D] rounded-lg p-4">
                    <div className="text-xs uppercase text-[#8B949E] font-bold mb-2">Volumen sem.</div>
                    <div className="font-mono text-2xl font-bold text-[#388BFD]">~{weeklyVolume} km</div>
                    <div className="text-xs text-[#8B949E] mt-1">estimado</div>
                  </div>
                  <div className="bg-[#161B22] border border-[#21262D] rounded-lg p-4">
                    <div className="text-xs uppercase text-[#8B949E] font-bold mb-2">D+ Acumulado</div>
                    <div className="font-mono text-2xl font-bold text-[#388BFD]">{weeklyElevation} m</div>
                    <div className="text-xs text-[#8B949E] mt-1">llano</div>
                  </div>
                  <div className="bg-[#161B22] border border-[#21262D] rounded-lg p-4">
                    <div className="text-xs uppercase text-[#8B949E] font-bold mb-2">Semanas</div>
                    <div className="font-mono text-2xl font-bold text-[#8B949E]">1/52</div>
                    <div className="text-xs text-[#8B949E] mt-1">1.9% del plan</div>
                  </div>
                </div>
              </div>

              {/* Right: Calendar */}
              <div className="bg-[#161B22] border border-[#21262D] rounded-lg p-4">
                <div className="text-xs uppercase text-[#8B949E] font-bold mb-4">
                  {today.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}
                </div>
                <div className="grid grid-cols-7 gap-1 text-center text-xs font-bold text-[#8B949E] mb-2">
                  <div>L</div>
                  <div>M</div>
                  <div>X</div>
                  <div>J</div>
                  <div>V</div>
                  <div>S</div>
                  <div>D</div>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center text-sm">
                  {[...Array(31)].map((_, i) => {
                    const day = i + 1
                    const dateStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
                    const isToday = day === today.getDate()

                    // Check if day has planned sessions - extract date from fullDate string
                    // fullDate format: "Lunes, 15 Jun 2026"
                    const dayPlannedSessions = SESSIONS.filter((session: any) => {
                      const fullDate = session.fullDate
                      const parts = fullDate.split(', ')
                      if (parts.length < 2) return false
                      const datePart = parts[1] // "15 Jun 2026"
                      const [dayStr, monthStr, yearStr] = datePart.split(' ')
                      const months: Record<string, string> = {
                        'Jan': '01', 'Feb': '02', 'Mar': '03', 'Apr': '04', 'May': '05', 'Jun': '06',
                        'Jul': '07', 'Aug': '08', 'Sep': '09', 'Oct': '10', 'Nov': '11', 'Dec': '12'
                      }
                      const sessionDateStr = `${yearStr}-${months[monthStr]}-${String(dayStr).padStart(2, '0')}`
                      return sessionDateStr === dateStr
                    })

                    // Check if day has completed workouts
                    const dayCompletedWorkouts = workouts.filter(w => w.date === dateStr)

                    const hasPlanSessions = dayPlannedSessions.length > 0
                    const hasCompletedWorkouts = dayCompletedWorkouts.length > 0

                    console.log(`Day ${day}: planned=${hasPlanSessions}, completed=${hasCompletedWorkouts}, workouts=${dayCompletedWorkouts.length}`)

                    let bgColor = 'text-[#8B949E]/50'
                    if (hasPlanSessions) {
                      bgColor = hasCompletedWorkouts
                        ? 'bg-[#3FB950]/20 border border-[#3FB950] text-[#3FB950] font-bold'
                        : 'bg-[#EF4444]/20 border border-[#EF4444] text-[#EF4444] font-bold'
                    }

                    return (
                      <div
                        key={day}
                        className={`aspect-square flex items-center justify-center rounded font-mono font-bold transition ${
                          isToday && hasPlanSessions ? 'border-2' : ''
                        } ${bgColor}`}
                      >
                        {hasPlanSessions ? day : ''}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Checkpoints */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-[#161B22] border border-[#21262D] rounded-lg p-4">
                <div className="text-xs uppercase text-[#8B949E] font-bold mb-4">Checkpoints</div>
                <div className="space-y-3">
                  {checkpoints.map((cp) => (
                    <div key={cp.id} className="flex items-start gap-3">
                      <div className="text-xs font-mono font-bold border px-2 py-1 rounded flex-shrink-0 min-w-fit" style={{ borderColor: cp.color, color: cp.color }}>
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

              {/* Macrofases */}
              <div className="bg-[#161B22] border border-[#21262D] rounded-lg p-4">
                <div className="text-xs uppercase tracking-wider text-[#8B949E] font-bold mb-4">Macrofases — 52 Semanas</div>
                <div className="flex h-2 rounded-full overflow-hidden gap-0.5 mb-4">
                  {phases.map((p) => (
                    <div key={p.id} className="flex-1" style={{ background: p.active ? p.color : 'rgba(255,255,255,0.05)' }}></div>
                  ))}
                </div>
                <div className="space-y-2 text-xs">
                  {phases.map((p) => (
                    <div key={p.id} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded flex-shrink-0" style={{ background: p.color }}></div>
                      <span className="font-mono font-bold w-8" style={{ color: p.color }}>
                        {p.id}
                      </span>
                      <span className="text-[#E6EDF3]">{p.name.split(' ')[0]}</span>
                      {p.active && <span className="text-[#3FB950] font-bold ml-auto">ACTIVA</span>}
                      {!p.active && <span className="text-[#8B949E] ml-auto">Sem {p.weeks}</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Races View */}
        {view === 'races' && (
          <div>
            <div className="mb-6">
              <div className="font-mono text-xs text-[#3FB950] tracking-wider uppercase mb-1">
                CALENDARIO ANUAL
              </div>
              <h1 className="text-2xl font-black text-[#E6EDF3] -tracking-wide mb-1">Carreras Test</h1>
              <div className="text-sm text-[#8B949E]">Todas las pruebas del plan Ultra 80K</div>
            </div>

            {!selectedRace ? (
              <div className="space-y-2">
                {RACE_CALENDAR.map((race) => (
                  <button
                    key={race.id}
                    onClick={() => setSelectedRace(race)}
                    className="w-full bg-[#161B22] border border-[#21262D] rounded-lg p-4 text-left hover:border-[#3FB950]/50 transition"
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-bold text-[#E6EDF3]">{race.name}</h3>
                          {race.isCheckpoint && (
                            <span className="text-xs bg-[#A371F7]/20 text-[#A371F7] px-2 py-1 rounded font-mono font-bold">
                              {race.checkpointName}
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-[#8B949E] mb-2">{race.date}</div>
                        <div className="grid grid-cols-4 gap-3 text-xs">
                          <div>
                            <span className="text-[#8B949E]">Distancia</span>
                            <div className="font-mono font-bold text-[#E6EDF3]">
                              {race.distance}km {race.elevation > 0 && `+${race.elevation}m`}
                            </div>
                          </div>
                          <div>
                            <span className="text-[#8B949E]">Tiempo</span>
                            <div className="font-mono font-bold text-[#388BFD]">{race.timeEstimate}</div>
                          </div>
                          <div>
                            <span className="text-[#8B949E]">Ritmo</span>
                            <div className="font-mono font-bold text-[#388BFD]">{race.pace}</div>
                          </div>
                          <div>
                            <span className="text-[#8B949E]">Tipo</span>
                            <div className="font-mono font-bold text-[#3FB950]">{race.type}</div>
                          </div>
                        </div>
                      </div>
                      <svg className="w-5 h-5 text-[#8B949E] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="bg-[#161B22] border border-[#21262D] rounded-lg p-6">
                <button
                  onClick={() => setSelectedRace(null)}
                  className="flex items-center gap-2 text-[#388BFD] hover:text-[#388BFD] text-sm font-bold mb-6"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Volver al listado
                </button>

                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <h2 className="text-2xl font-black text-[#E6EDF3]">{selectedRace.name}</h2>
                    {selectedRace.isCheckpoint && (
                      <span className="text-lg bg-[#A371F7]/20 text-[#A371F7] px-3 py-1 rounded font-mono font-bold">
                        {selectedRace.checkpointName}
                      </span>
                    )}
                  </div>
                  <div className="font-mono text-sm text-[#8B949E]">{selectedRace.mesocycle}</div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-[#0D1117] border border-[#21262D] rounded-lg p-4">
                    <div className="text-xs uppercase text-[#8B949E] font-bold mb-2">Fecha</div>
                    <div className="font-mono text-lg font-bold text-[#E6EDF3]">{selectedRace.date}</div>
                  </div>
                  <div className="bg-[#0D1117] border border-[#21262D] rounded-lg p-4">
                    <div className="text-xs uppercase text-[#8B949E] font-bold mb-2">Distancia</div>
                    <div className="font-mono text-lg font-bold text-[#E6EDF3]">
                      {selectedRace.distance}km {selectedRace.elevation > 0 && `/ +${selectedRace.elevation}m`}
                    </div>
                  </div>
                  <div className="bg-[#0D1117] border border-[#21262D] rounded-lg p-4">
                    <div className="text-xs uppercase text-[#8B949E] font-bold mb-2">Tiempo estimado</div>
                    <div className="font-mono text-lg font-bold text-[#388BFD]">{selectedRace.timeEstimate}</div>
                  </div>
                  <div className="bg-[#0D1117] border border-[#21262D] rounded-lg p-4">
                    <div className="text-xs uppercase text-[#8B949E] font-bold mb-2">Ritmo medio</div>
                    <div className="font-mono text-lg font-bold text-[#388BFD]">{selectedRace.pace}</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-bold text-[#8B949E] uppercase tracking-wider mb-3">Objetivo</h3>
                  <p className="text-[#E6EDF3] leading-relaxed">{selectedRace.objective}</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-bold text-[#8B949E] uppercase tracking-wider mb-3">Criterio de éxito</h3>
                  <p className="text-[#E6EDF3] leading-relaxed">{selectedRace.successCriteria}</p>
                </div>

                {selectedRace.checkpointName === 'CP3' && (
                  <div className="bg-[#0D1117] border border-[#21262D] rounded-lg p-4">
                    <h3 className="text-sm font-bold text-[#8B949E] uppercase tracking-wider mb-3">Criterios CP3 para validar SUB 11h</h3>
                    <div className="space-y-2">
                      {CP3_CRITERIA.map((c, i) => (
                        <div key={i} className="flex items-start gap-3 pb-2 border-b border-[#21262D] last:border-b-0">
                          <div className="min-w-fit">
                            <div className="text-xs font-mono font-bold text-[#3FB950]">{c.timeRange}</div>
                          </div>
                          <div className="flex-1">
                            <div className="text-xs text-[#8B949E]">Proyección: <span className="text-[#388BFD] font-mono">{c.projection}</span></div>
                            <div className="text-sm text-[#E6EDF3] mt-1">{c.decision}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  )
}
