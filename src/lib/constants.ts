// Zonas de intensidad
export const INTENSITY_ZONES = {
  Z1: { name: 'Z1 - Muy fácil', min: 60, max: 68, description: 'Conversación fluida, podría cantar' },
  Z2: { name: 'Z2 - Fácil', min: 69, max: 76, description: 'Frases completas, respiración normal' },
  Z3: { name: 'Z3 - Moderado', min: 77, max: 83, description: 'Frases cortas, respiración más alta' },
  Z4: { name: 'Z4 - Duro', min: 84, max: 91, description: 'Palabras sueltas, no puedes hablar' },
  Z5: { name: 'Z5 - Máximo', min: 92, max: 100, description: 'Imposible hablar' },
}

// Tipos de superficie
export const SURFACE_TYPES = ['road', 'trail', 'mixed', 'track'] as const

// Dificultad del entreno
export const DIFFICULTY_LEVELS = ['easy', 'moderate', 'hard'] as const

// Tipos de molestias corporales
export const INJURY_TYPES = ['pain', 'stiffness', 'inflammation', 'other'] as const

// Escalas de percepción
export const PERCEPTION_SCALES = {
  rpe: { min: 1, max: 10, label: 'Esfuerzo Percibido (RPE)' },
  sensations: { min: 1, max: 5, label: 'Sensaciones' },
  fatigue: { min: 1, max: 5, label: 'Fatiga Inicial' },
  movement_quality: { min: 1, max: 5, label: 'Calidad Movimiento' },
  motivation: { min: 1, max: 5, label: 'Motivación' },
  stress: { min: 1, max: 5, label: 'Estrés' },
  discomfort: { min: 1, max: 10, label: 'Molestia Corporal' },
}

// Zonas del cuerpo para el mapa corporal
export const BODY_ZONES = {
  head: { name: 'Cabeza', group: 'upper' },
  neck: { name: 'Cuello', group: 'upper' },
  left_shoulder: { name: 'Hombro Izquierdo', group: 'upper' },
  right_shoulder: { name: 'Hombro Derecho', group: 'upper' },
  left_elbow: { name: 'Codo Izquierdo', group: 'upper' },
  right_elbow: { name: 'Codo Derecho', group: 'upper' },
  left_wrist: { name: 'Muñeca Izquierda', group: 'upper' },
  right_wrist: { name: 'Muñeca Derecha', group: 'upper' },
  upper_back: { name: 'Espalda Alta', group: 'trunk' },
  lower_back: { name: 'Espalda Baja', group: 'trunk' },
  left_hip: { name: 'Cadera Izquierda', group: 'lower' },
  right_hip: { name: 'Cadera Derecha', group: 'lower' },
  left_knee: { name: 'Rodilla Izquierda', group: 'lower' },
  right_knee: { name: 'Rodilla Derecha', group: 'lower' },
  left_ankle: { name: 'Tobillo Izquierdo', group: 'lower' },
  right_ankle: { name: 'Tobillo Derecho', group: 'lower' },
  left_foot: { name: 'Pie Izquierdo', group: 'lower' },
  right_foot: { name: 'Pie Derecho', group: 'lower' },
} as const

// Colores por intensidad
export const INTENSITY_COLORS = {
  Z1: '#10b981',
  Z2: '#3b82f6',
  Z3: '#f59e0b',
  Z4: '#ef4444',
  Z5: '#dc2626',
}

// Macrofases objetivo
export const MACROPHASES_PRESET = [
  {
    name: 'M1 Recuperación y Base',
    phase_number: 1,
    start_date: '2026-06-15',
    end_date: '2026-09-06',
    focus_areas: ['aerobic', 'ankle_rehabilitation', 'base_building'],
    weekly_volume_km: 52,
    intensity_distribution: { easy: 95, moderate: 5, hard: 0 },
    color_hex: '#10b981',
  },
  {
    name: 'M2 Desarrollo Aeróbico',
    phase_number: 2,
    start_date: '2026-09-07',
    end_date: '2026-12-27',
    focus_areas: ['aerobic', 'tempo', 'intervals', 'hill_repeats'],
    weekly_volume_km: 78,
    intensity_distribution: { easy: 75, moderate: 20, hard: 5 },
    color_hex: '#3b82f6',
  },
  {
    name: 'M3 Específico Ultra',
    phase_number: 3,
    start_date: '2026-12-28',
    end_date: '2027-04-18',
    focus_areas: ['ultra_specific', 'long_intervals', 'back_to_back', 'race_simulation'],
    weekly_volume_km: 95,
    intensity_distribution: { easy: 70, moderate: 25, hard: 5 },
    color_hex: '#f59e0b',
  },
  {
    name: 'M4 Taper y Carrera',
    phase_number: 4,
    start_date: '2027-04-19',
    end_date: '2027-06-15',
    focus_areas: ['taper', 'maintenance', 'mental_prep'],
    weekly_volume_km: 20,
    intensity_distribution: { easy: 80, moderate: 15, hard: 5 },
    color_hex: '#ef4444',
  },
]
