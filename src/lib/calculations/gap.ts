import type { Workout } from '../../types'

// Grade Adjusted Pace (GAP)
// Ajusta el ritmo considerando el desnivel
// Permite comparar entrenamientos en montaña con otros en llano

export function calculateGAP(workout: Workout): number | null {
  if (!workout.distance_km || !workout.duration_minutes) {
    return null
  }

  // Ritmo base en min/km
  const paceMinPerKm = workout.duration_minutes / workout.distance_km

  // Factor de corrección por elevación
  // Cada 100m de subida añade ~30s por km
  const elevationFactor = (workout.elevation_gain / 100) * 0.5 / workout.distance_km

  // GAP = ritmo base + corrección por elevación
  const gap = paceMinPerKm + elevationFactor

  return Math.round(gap * 100) / 100
}

// Calcula el GAP promedio para un conjunto de entrenamientos
export function calculateAverageGAP(workouts: Workout[]): number | null {
  if (workouts.length === 0) return null

  const gaps = workouts
    .map(w => calculateGAP(w))
    .filter((gap) => gap !== null) as number[]

  if (gaps.length === 0) return null

  return Math.round((gaps.reduce((a, b) => a + b, 0) / gaps.length) * 100) / 100
}

// Clasifica el ritmo ajustado por desnivel
export function classifyGAPIntensity(gap: number): string {
  if (gap < 5.5) return 'Muy rápido'
  if (gap < 6.5) return 'Rápido'
  if (gap < 7.5) return 'Moderado'
  if (gap < 8.5) return 'Lento'
  return 'Muy lento'
}
