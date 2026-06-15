import { useState, useEffect } from 'react'
import type { Workout } from '../types'
import { workoutService } from '../services/workoutService'

export function useWorkouts(startDate?: string, endDate?: string) {
  const [workouts, setWorkouts] = useState<Workout[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        setLoading(true)
        const data = await workoutService.getWorkouts(startDate, endDate)
        setWorkouts(data)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch workouts')
        setWorkouts([])
      } finally {
        setLoading(false)
      }
    }

    fetchWorkouts()
  }, [startDate, endDate])

  const addWorkout = async (workout: Omit<Workout, 'id' | 'created_at'>) => {
    try {
      setLoading(true)
      const newWorkout = await workoutService.addWorkout(workout)
      setWorkouts([newWorkout, ...workouts])
      setError(null)
      return newWorkout
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to add workout'
      setError(message)
      throw err
    } finally {
      setLoading(false)
    }
  }

  const updateWorkout = async (id: string, workout: Partial<Workout>) => {
    try {
      setLoading(true)
      const updated = await workoutService.updateWorkout(id, workout)
      setWorkouts(workouts.map(w => w.id === id ? updated : w))
      setError(null)
      return updated
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to update workout'
      setError(message)
      throw err
    } finally {
      setLoading(false)
    }
  }

  const deleteWorkout = async (id: string) => {
    try {
      setLoading(true)
      await workoutService.deleteWorkout(id)
      setWorkouts(workouts.filter(w => w.id !== id))
      setError(null)
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to delete workout'
      setError(message)
      throw err
    } finally {
      setLoading(false)
    }
  }

  return { workouts, loading, error, addWorkout, updateWorkout, deleteWorkout }
}
