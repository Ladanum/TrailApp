import type { Workout } from '../../types'

const REST_HEART_RATE = 40 // Default rest HR, puede variar por usuario
const MAX_HEART_RATE = 190 // Default max HR, calculado por VDOT

export function calculateTRIMP(workout: Workout, restHR = REST_HEART_RATE, maxHR = MAX_HEART_RATE): number {
  if (!workout.avg_heart_rate || !workout.duration_minutes) {
    return 0
  }

  const avgHR = workout.avg_heart_rate
  const intensity = (avgHR - restHR) / (maxHR - restHR)

  // TRIMP = duración × intensidad × factor(intensidad)
  // Factor = 0.64 * e^(1.92 * intensidad)
  const factor = 0.64 * Math.exp(1.92 * intensity)
  const trimp = workout.duration_minutes * intensity * factor

  return Math.round(trimp)
}

// EWMA = Exponential Weighted Moving Average
// Proporciona un valor de fatiga que se actualiza exponencialmente
export function calculateEWMA(workouts: Workout[], _days = 7, lambda = 0.6): number {
  if (workouts.length === 0) return 0

  const sortedWorkouts = [...workouts].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  let ewma = 0
  for (let i = 0; i < sortedWorkouts.length; i++) {
    const trimp = calculateTRIMP(sortedWorkouts[i])
    ewma = lambda * trimp + (1 - lambda) * ewma
  }

  return Math.round(ewma)
}

// Calcula la carga de entrenamiento acumulada en un período
export function calculateAccumulatedLoad(workouts: Workout[], days = 7): number {
  const cutoffDate = new Date()
  cutoffDate.setDate(cutoffDate.getDate() - days)

  const relevantWorkouts = workouts.filter(w => new Date(w.date) >= cutoffDate)
  return relevantWorkouts.reduce((sum, w) => sum + calculateTRIMP(w), 0)
}

// Volumen e intensidad combinados
export function calculateTrainingLoadScore(workout: Workout): number {
  let score = 0

  // Volume component (distance)
  score += workout.distance_km * 2

  // Elevation component
  score += (workout.elevation_gain / 100) * 3

  // Duration component
  score += (workout.duration_minutes / 10) * 1

  // HR-based intensity (if available)
  if (workout.avg_heart_rate) {
    const intensity = workout.avg_heart_rate / 190 // Normalized to max HR
    score += intensity * 50
  }

  // RPE (if available)
  if (workout.rpe) {
    score += (workout.rpe / 10) * 30
  }

  return Math.round(score)
}
