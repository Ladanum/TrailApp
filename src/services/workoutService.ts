import { supabase } from './supabase'
import type { Workout } from '../types'

export const workoutService = {
  async getWorkouts(startDate?: string, endDate?: string): Promise<Workout[]> {
    let query = supabase
      .from('workouts')
      .select('*')
      .order('date', { ascending: false })

    if (startDate) {
      query = query.gte('date', startDate)
    }
    if (endDate) {
      query = query.lte('date', endDate)
    }

    const { data, error } = await query

    if (error) throw error
    return data || []
  },

  async getWorkoutById(id: string): Promise<Workout | null> {
    const { data, error } = await supabase
      .from('workouts')
      .select('*')
      .eq('id', id)
      .single()

    if (error && error.code !== 'PGRST116') throw error
    return data || null
  },

  async addWorkout(workout: Omit<Workout, 'id' | 'created_at'>): Promise<Workout> {
    const { data, error } = await supabase
      .from('workouts')
      .insert([workout])
      .select()
      .single()

    if (error) throw error
    return data
  },

  async updateWorkout(id: string, workout: Partial<Workout>): Promise<Workout> {
    const { data, error } = await supabase
      .from('workouts')
      .update(workout)
      .eq('id', id)
      .select()
      .single()

    if (error) throw error
    return data
  },

  async deleteWorkout(id: string): Promise<void> {
    const { error } = await supabase
      .from('workouts')
      .delete()
      .eq('id', id)

    if (error) throw error
  },

  async getWeeklyStats(date: string) {
    const startOfWeek = new Date(date)
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay())
    const endOfWeek = new Date(startOfWeek)
    endOfWeek.setDate(endOfWeek.getDate() + 6)

    const workouts = await this.getWorkouts(
      startOfWeek.toISOString().split('T')[0],
      endOfWeek.toISOString().split('T')[0]
    )

    return {
      totalDistance: workouts.reduce((sum, w) => sum + w.distance_km, 0),
      totalElevation: workouts.reduce((sum, w) => sum + w.elevation_gain, 0),
      count: workouts.length,
      workouts,
      avgPace: workouts.length > 0
        ? workouts.reduce((sum, w) => sum + (w.avg_pace_min_km || 0), 0) / workouts.length
        : 0,
    }
  }
}
