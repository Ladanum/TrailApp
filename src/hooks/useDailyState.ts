import { useState, useEffect } from 'react'
import type { DailyState } from '../types'
import { dailyStateService } from '../services/dailyStateService'

export function useDailyState(date?: string) {
  const [dailyState, setDailyState] = useState<DailyState | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true)
        const data = date
          ? await dailyStateService.getDailyState(date)
          : await dailyStateService.getTodayState()
        setDailyState(data)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch daily state')
      } finally {
        setLoading(false)
      }
    }

    fetch()
  }, [date])

  const addOrUpdate = async (state: Omit<DailyState, 'id' | 'created_at'>) => {
    try {
      setLoading(true)
      const updated = await dailyStateService.addOrUpdateDailyState(state)
      setDailyState(updated)
      setError(null)
      return updated
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to save daily state'
      setError(message)
      throw err
    } finally {
      setLoading(false)
    }
  }

  return { dailyState, loading, error, addOrUpdate }
}
