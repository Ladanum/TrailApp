import { useState } from 'react'

export default function DashboardPro() {
  const [view, setView] = useState<'dashboard' | 'session' | 'progress'>('dashboard')
  const [selectedDay, setSelectedDay] = useState<number | null>(null)
  const [completedDays, setCompletedDays] = useState<Record<number, boolean>>({})

  const today = new Date('2026-06-15')
  const raceDate = new Date('2027-06-15')
  const daysUntilRace = Math.ceil((raceDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))

  const sessions = [
    {
      index: 0,
      day: 'LUN',
      date: '15 jun',
      type: 'Z1',
      description: 'Rodaje suave en llano. Primera salida — tobillo en observación total.',
      duration: '45 min',
      alert: true,
      completed: completedDays[0] || false,
    },
    {
      index: 1,
      day: 'MAR',
      date: '16 jun',
      type: 'GYM',
      description: 'Fuerza: Bloque A (Tobillo) + Bloque B (Core)',
      duration: '50 min',
      alert: true,
      completed: completedDays[1] || false,
    },
    {
      index: 2,
      day: 'MIÉ',
      date: '17 jun',
      type: 'Z2',
      description: 'Rodaje aeróbico base en llano. Ritmo cómodo, conversación fluida.',
      duration: '60 min',
      alert: false,
      completed: completedDays[2] || false,
    },
    {
      index: 3,
      day: 'JUE',
      date: '18 jun',
      type: 'REC',
      description: 'Recuperación activa: Bloque E completo (movilidad)',
      duration: '25 min',
      alert: false,
      completed: completedDays[3] || false,
    },
    {
      index: 4,
      day: 'VIE',
      date: '19 jun',
      type: 'Z2',
      description: 'Rodaje aeróbico base en llano.',
      duration: '55 min',
      alert: false,
      completed: completedDays[4] || false,
    },
    {
      index: 5,
      day: 'SÁB',
      date: '20 jun',
      type: 'GYM',
      description: 'Fuerza: Bloque C (Tren inferior) + Bloque D (Cadena posterior)',
      duration: '55 min',
      alert: false,
      completed: completedDays[5] || false,
    },
    {
      index: 6,
      day: 'DOM',
      date: '21 jun',
      type: 'TL',
      description: 'Tirada larga Z1. Llano. Ritmo muy fácil todo el recorrido.',
      duration: '75 min',
      alert: false,
      completed: completedDays[6] || false,
    },
  ]

  const completedCount = Object.values(completedDays).filter(Boolean).length

  const toggleDay = (index: number) => {
    setCompletedDays((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  const getBadgeColor = (type: string) => {
    const colors: Record<string, { bg: string; text: string; border: string }> = {
      Z1: { bg: 'rgba(56,139,253,0.14)', text: '#388BFD', border: 'rgba(56,139,253,0.28)' },
      Z2: { bg: 'rgba(56,139,253,0.14)', text: '#388BFD', border: 'rgba(56,139,253,0.28)' },
      GYM: { bg: 'rgba(163,113,247,0.14)', text: '#A371F7', border: 'rgba(163,113,247,0.28)' },
      TL: { bg: 'rgba(63,185,80,0.14)', text: '#3FB950', border: 'rgba(63,185,80,0.28)' },
      REC: { bg: 'rgba(139,148,158,0.14)', text: '#8B949E', border: 'rgba(139,148,158,0.28)' },
    }
    return colors[type] || colors['Z1']
  }

  return (
    <div className="flex h-screen bg-[#0D1117] text-[#E6EDF3] font-inter overflow-hidden">
      {/* Sidebar */}
      <nav className="w-56 bg-[#0D1117] border-r border-[#21262D] flex flex-col flex-shrink-0">
        {/* Header */}
        <div className="px-5 py-5 border-b border-[#21262D]">
          <div className="font-mono text-xs letter-spacing-wider text-accent-green font-bold uppercase mb-1">
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
              view === 'dashboard' || view === 'session'
                ? 'border-accent-green bg-accent-green/5 text-[#E6EDF3]'
                : 'border-transparent text-[#8B949E] hover:text-[#E6EDF3]'
            }`}
          >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <rect
                x="1"
                y="1"
                width="5.5"
                height="5.5"
                rx="1.2"
                stroke="currentColor"
                strokeWidth="1.3"
              ></rect>
              <rect
                x="8.5"
                y="1"
                width="5.5"
                height="5.5"
                rx="1.2"
                stroke="currentColor"
                strokeWidth="1.3"
              ></rect>
              <rect
                x="1"
                y="8.5"
                width="5.5"
                height="5.5"
                rx="1.2"
                stroke="currentColor"
                strokeWidth="1.3"
              ></rect>
              <rect
                x="8.5"
                y="8.5"
                width="5.5"
                height="5.5"
                rx="1.2"
                stroke="currentColor"
                strokeWidth="1.3"
              ></rect>
            </svg>
            <span>Dashboard</span>
          </button>

          <button
            onClick={() => setView('progress')}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium border-l-2 transition ${
              view === 'progress'
                ? 'border-accent-green bg-accent-green/5 text-[#E6EDF3]'
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
              <path
                d="M1.5 13.5H13.5"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
              ></path>
            </svg>
            <span>Progreso</span>
          </button>
        </div>

        {/* Days Until Race */}
        <div className="px-5 py-4 border-t border-[#21262D]">
          <div className="text-xs uppercase text-[#8B949E] font-medium mb-2 letter-spacing-wider">
            Días hasta carrera
          </div>
          <div className="font-mono text-4xl font-bold text-accent-green leading-none -tracking-wide">
            {daysUntilRace}
          </div>
          <div className="font-mono text-xs text-[#8B949E] mt-1.5">15 jun 2027</div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-9 py-8">
        {/* Dashboard View */}
        {(view === 'dashboard' || view === 'session') && (
          <div>
            <div className="flex justify-between items-start gap-4 mb-5 flex-wrap">
              <div>
                <div className="font-mono text-xs text-accent-green letter-spacing-wider uppercase mb-1">
                  MF1 · SEMANA 01 · MICROCICLO A
                </div>
                <h1 className="text-2xl font-black text-[#E6EDF3] -tracking-wide mb-1">
                  Dashboard Semanal
                </h1>
                <div className="text-sm text-[#8B949E]">Recuperación y Base · 15–21 junio 2026</div>
              </div>
              <div className="bg-[#161B22] border border-[#21262D] rounded-lg p-3 text-right flex-shrink-0">
                <div className="text-xs uppercase letter-spacing-wider text-[#8B949E] font-medium mb-1">
                  Sesiones completadas
                </div>
                <div className="font-mono text-2xl font-bold text-accent-green">
                  {completedCount}
                  <span className="text-sm text-[#8B949E] font-normal"> / 7</span>
                </div>
              </div>
            </div>

            {/* Sessions Grid */}
            <div className="grid grid-cols-7 gap-2 mb-5">
              {sessions.map((session) => {
                const badge = getBadgeColor(session.type)
                return (
                  <button
                    key={session.index}
                    onClick={() => {
                      setSelectedDay(session.index)
                      setView('session')
                    }}
                    style={{
                      background: session.completed ? 'rgba(63,185,80,0.04)' : '#161B22',
                      border: session.index === 0 ? '1.5px solid #3FB950' : session.completed ? '1px solid rgba(63,185,80,0.3)' : '1px solid #21262D',
                    }}
                    className="rounded-lg p-3 flex flex-col min-h-40 cursor-pointer hover:opacity-80 transition"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-mono text-xs font-bold text-[#8B949E] letter-spacing-wider">
                        {session.day}
                      </span>
                      {session.completed && (
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <circle cx="7" cy="7" r="6" fill="rgba(63,185,80,0.18)"></circle>
                          <path
                            d="M4.5 7L6.5 9L9.5 4.5"
                            stroke="#3FB950"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      )}
                    </div>
                    <div className="font-mono text-xs text-[#8B949E] mb-2">{session.date}</div>
                    <div
                      style={{
                        background: badge.bg,
                        color: badge.text,
                        border: `1px solid ${badge.border}`,
                      }}
                      className="inline-block px-2 py-1 rounded text-xs font-mono font-bold letter-spacing-wider mb-2"
                    >
                      {session.type}
                    </div>
                    <p className="text-xs text-[#8B949E] flex-1 line-clamp-2 text-left">{session.description}</p>
                    <div className="flex justify-between items-center gap-1 mt-2 pt-2 border-t border-[#21262D]">
                      <span className="font-mono text-xs text-[#E6EDF3] font-medium">{session.duration}</span>
                      {session.alert && <span className="text-xs text-orange-400 bg-orange-400/10 border border-orange-400/20 rounded px-1">⚠️ tobillo</span>}
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-[#161B22] border border-[#21262D] rounded-lg p-3.5">
                <div className="text-xs uppercase letter-spacing-wider text-[#8B949E] font-bold mb-1">
                  Volumen sem.
                </div>
                <div className="font-mono text-xl font-bold text-[#E6EDF3]">~28 km</div>
                <div className="text-xs text-[#8B949E] mt-1">5h 25min estimado</div>
              </div>
              <div className="bg-[#161B22] border border-[#21262D] rounded-lg p-3.5">
                <div className="text-xs uppercase letter-spacing-wider text-[#8B949E] font-bold mb-1">
                  D+ acumulado
                </div>
                <div className="font-mono text-xl font-bold text-[#E6EDF3]">0 m</div>
                <div className="text-xs text-[#8B949E] mt-1">llano esta semana</div>
              </div>
              <div className="bg-[#161B22] border border-[#21262D] rounded-lg p-3.5">
                <div className="text-xs uppercase letter-spacing-wider text-[#8B949E] font-bold mb-1">
                  Zona dominante
                </div>
                <div className="font-mono text-xl font-bold text-accent-blue">Z1 / Z2</div>
                <div className="text-xs text-[#8B949E] mt-1">base aeróbica</div>
              </div>
            </div>
          </div>
        )}

        {/* Progress View */}
        {view === 'progress' && (
          <div>
            <div className="mb-6">
              <div className="font-mono text-xs text-accent-green letter-spacing-wider uppercase mb-1">
                MF1 · PROGRESO
              </div>
              <h1 className="text-2xl font-black text-[#E6EDF3] -tracking-wide mb-1">Progreso</h1>
              <div className="text-sm text-[#8B949E]">Semana 1 de 52 · Plan Ultra 80K</div>
            </div>

            <div className="grid grid-cols-4 gap-2 mb-5">
              {[
                { label: 'Sesiones OK', value: String(completedCount), sub: 'de 7 esta semana', color: accent-green' },
                { label: 'Volumen sem.', value: '~28 km', sub: 'estimado', color: 'accent-blue' },
                { label: 'D+ acumulado', value: '0 m', sub: 'llano', color: 'accent-blue' },
                { label: 'Semanas', value: '1 / 52', sub: '1.9% del plan', color: '#8B949E' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-[#161B22] border border-[#21262D] rounded-lg p-3"
                >
                  <div className="text-xs uppercase letter-spacing-wider text-[#8B949E] font-bold mb-1">
                    {stat.label}
                  </div>
                  <div className="font-mono text-lg font-bold text-[#E6EDF3]">{stat.value}</div>
                  <div className="text-xs text-[#8B949E] mt-1">{stat.sub}</div>
                </div>
              ))}
            </div>

            <div className="bg-[#161B22] border border-[#21262D] rounded-lg p-4">
              <div className="text-xs uppercase letter-spacing-wider text-[#8B949E] font-bold mb-3">
                Checkpoints
              </div>
              <div className="space-y-3">
                {[
                  { id: 'CP1', name: 'Fin MF1 — Base establecida', date: '6 sep 2026', color: 'accent-blue' },
                  { id: 'CP2', name: 'Fin MF2 — Aeróbico consolidado', date: '27 dic 2026', color: 'accent-green' },
                  { id: 'CP3', name: 'Fin MF3 — Específico completado', date: '18 abr 2027', color: 'accent-orange' },
                  { id: 'RACE', name: 'Ultra 80K · Sub 11h', date: '15 jun 2027', color: 'accent-purple' },
                ].map((cp, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="text-xs font-mono font-bold border px-1 py-0.5 rounded text-accent-blue border-accent-blue flex-shrink-0 mt-0.5">
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
