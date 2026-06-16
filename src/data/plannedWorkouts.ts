export interface PlannedWorkout {
  id: string
  date: string
  week_number: number
  day_of_week: string
  name: string
  description: string
  planned_distance_km?: number
  planned_duration_minutes?: number
  planned_elevation_gain?: number
  planned_zone?: string
  planned_intensity?: string
  planned_surface?: string
  workout_type?: string
  completed?: boolean
}

// Generate dates relative to today
const today = new Date()
today.setHours(0, 0, 0, 0)

const generateDate = (daysOffset: number) => {
  const d = new Date(today)
  d.setDate(d.getDate() + daysOffset)
  return d.toISOString().split('T')[0]
}

export const PLANNED_WORKOUTS: PlannedWorkout[] = [
  // Week 1 (Today + 7 days)
  {
    id: 'plan-1',
    date: generateDate(0),
    week_number: 1,
    day_of_week: 'LUN',
    name: 'Rodaje suave en llano',
    description: 'Rodaje suave en llano. Primera salida — tobillo en observación total. Terreno liso.',
    planned_distance_km: 8.5,
    planned_duration_minutes: 45,
    planned_elevation_gain: 0,
    planned_zone: 'Z1',
    planned_intensity: 'easy',
    planned_surface: 'road',
    workout_type: 'easy',
    completed: false,
  },
  {
    id: 'plan-2',
    date: generateDate(1),
    week_number: 1,
    day_of_week: 'MAR',
    name: 'Fuerza: Bloque A (Tobillo) + Bloque B (Core)',
    description: 'Fuerza: Bloque A (Tobillo) + Bloque B (Core)',
    planned_distance_km: 0,
    planned_duration_minutes: 50,
    planned_elevation_gain: 0,
    planned_zone: 'GYM',
    planned_intensity: 'moderate',
    planned_surface: 'gym',
    workout_type: 'strength',
    completed: false,
  },
  {
    id: 'plan-3',
    date: generateDate(2),
    week_number: 1,
    day_of_week: 'MIÉ',
    name: 'Rodaje aeróbico base en llano',
    description: 'Rodaje aeróbico base en llano. Ritmo cómodo, conversación fluida.',
    planned_distance_km: 12.0,
    planned_duration_minutes: 60,
    planned_elevation_gain: 150,
    planned_zone: 'Z2',
    planned_intensity: 'easy',
    planned_surface: 'mixed',
    workout_type: 'easy',
    completed: false,
  },
  {
    id: 'plan-4',
    date: generateDate(3),
    week_number: 1,
    day_of_week: 'JUE',
    name: 'Recuperación activa: Bloque E (movilidad)',
    description: 'Recuperación activa: Bloque E (movilidad)',
    planned_distance_km: 4.0,
    planned_duration_minutes: 25,
    planned_elevation_gain: 0,
    planned_zone: 'REC',
    planned_intensity: 'easy',
    planned_surface: 'road',
    workout_type: 'recovery',
    completed: false,
  },
  {
    id: 'plan-5',
    date: generateDate(4),
    week_number: 1,
    day_of_week: 'VIE',
    name: 'Rodaje aeróbico base en llano',
    description: 'Rodaje aeróbico base en llano. Ritmo cómodo, conversación fluida.',
    planned_distance_km: 11.0,
    planned_duration_minutes: 55,
    planned_elevation_gain: 120,
    planned_zone: 'Z2',
    planned_intensity: 'easy',
    planned_surface: 'trail',
    workout_type: 'easy',
    completed: false,
  },
  {
    id: 'plan-6',
    date: generateDate(5),
    week_number: 1,
    day_of_week: 'SÁB',
    name: 'Rodaje largo de resistencia',
    description: 'Rodaje largo de resistencia. Primera salida larga del plan.',
    planned_distance_km: 16.0,
    planned_duration_minutes: 90,
    planned_elevation_gain: 400,
    planned_zone: 'Z2',
    planned_intensity: 'easy',
    planned_surface: 'trail',
    workout_type: 'long_run',
    completed: false,
  },
  {
    id: 'plan-7',
    date: generateDate(6),
    week_number: 1,
    day_of_week: 'DOM',
    name: 'Descanso activo o rodaje muy suave',
    description: 'Descanso completo o rodaje muy suave de máximo 30 minutos.',
    planned_distance_km: 0,
    planned_duration_minutes: 0,
    planned_elevation_gain: 0,
    planned_zone: 'REST',
    planned_intensity: 'rest',
    planned_surface: 'rest',
    workout_type: 'rest',
    completed: false,
  },
]
