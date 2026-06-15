// Formato de distancia
export function formatDistance(km: number): string {
  return `${km.toFixed(2)} km`
}

// Formato de elevación
export function formatElevation(meters: number): string {
  if (meters > 1000) {
    return `${(meters / 1000).toFixed(1)}k m`
  }
  return `${meters} m`
}

// Formato de ritmo
export function formatPace(minPerKm: number | null | undefined): string {
  if (!minPerKm) return '—'
  const minutes = Math.floor(minPerKm)
  const seconds = Math.round((minPerKm - minutes) * 60)
  return `${minutes}:${seconds.toString().padStart(2, '0')}/km`
}

// Formato de tiempo
export function formatDuration(minutes: number): string {
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  if (hours > 0) {
    return `${hours}h ${mins}m`
  }
  return `${mins}m`
}

// Formato de frecuencia cardíaca
export function formatHeartRate(bpm: number | null | undefined): string {
  if (!bpm) return '—'
  return `${bpm} bpm`
}

// Formato de fecha
export function formatDate(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return new Intl.DateTimeFormat('es-ES', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(d)
}

// Formato de fecha corta
export function formatDateShort(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(d)
}

// Formato de hora
export function formatTime(hours: number): string {
  const h = Math.floor(hours)
  const m = Math.round((hours - h) * 60)
  return `${h}h ${m}m`
}

// Formato de peso
export function formatWeight(kg: number | null | undefined): string {
  if (!kg) return '—'
  return `${kg.toFixed(1)} kg`
}

// Convierte mi/h a min/km
export function mphToPaceMinKm(mph: number): number {
  const kmh = mph * 1.60934
  return 60 / kmh
}

// Convierte min/km a km/h
export function paceMinKmToKmh(paceMinKm: number): number {
  return 60 / paceMinKm
}
