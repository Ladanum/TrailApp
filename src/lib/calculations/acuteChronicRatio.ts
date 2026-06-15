import type { Workout, AcuteChronicRatio } from '../../types'
import { calculateAccumulatedLoad } from './trainingLoad'

// Ratio Aguda/Crónica = Carga aguda (7 días) / Carga crónica (28 días)
// Safe range: 0.8-1.3
// >1.3: injury risk, overtraining
// <0.8: undertraining, fitness might decrease

export function calculateAcuteChronicRatio(workouts: Workout[]): AcuteChronicRatio | null {
  if (workouts.length === 0) return null

  const today = new Date()
  const acuteLoad = calculateAccumulatedLoad(workouts, 7)
  const chronicLoad = calculateAccumulatedLoad(workouts, 28)

  if (chronicLoad === 0) return null

  const ratio = acuteLoad / chronicLoad

  return {
    date: today.toISOString().split('T')[0],
    acute: acuteLoad,
    chronic: chronicLoad,
    ratio: Math.round(ratio * 100) / 100,
  }
}

export function getACRatioStatus(ratio: number): { status: string; color: string; emoji: string } {
  if (ratio > 1.5) {
    return { status: 'CRÍTICO - Sobreentrenamiento', color: 'text-red-600', emoji: '🚨' }
  }
  if (ratio > 1.3) {
    return { status: 'Alto - Riesgo de lesión', color: 'text-orange-600', emoji: '⚠️' }
  }
  if (ratio >= 0.8 && ratio <= 1.3) {
    return { status: 'Óptimo', color: 'text-green-600', emoji: '✅' }
  }
  if (ratio < 0.8) {
    return { status: 'Bajo - Posible desentrenamiento', color: 'text-blue-600', emoji: 'ℹ️' }
  }

  return { status: 'Desconocido', color: 'text-gray-600', emoji: '?' }
}
