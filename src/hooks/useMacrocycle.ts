import { useState, useEffect } from 'react'
import type { Macrophase } from '../types'
import { macrocycleService } from '../services/macrocycleService'

export function useMacrocycle(date?: string) {
  const [macrophases, setMacrophases] = useState<Macrophase[]>([])
  const [currentPhase, setCurrentPhase] = useState<Macrophase | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true)
        const phases = await macrocycleService.getMacrophases()
        setMacrophases(phases)

        if (date) {
          const current = await macrocycleService.getMacrophaseForDate(date)
          setCurrentPhase(current)
        } else {
          const today = new Date().toISOString().split('T')[0]
          const current = await macrocycleService.getMacrophaseForDate(today)
          setCurrentPhase(current)
        }

        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch macrocycle')
      } finally {
        setLoading(false)
      }
    }

    fetch()
  }, [date])

  return { macrophases, currentPhase, loading, error }
}
