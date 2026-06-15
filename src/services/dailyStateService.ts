import { supabase } from './supabase'
import type { DailyState } from '../types'

export const dailyStateService = {
  async getDailyState(date: string): Promise<DailyState | null> {
    const { data, error } = await supabase
      .from('daily_state')
      .select('*')
      .eq('date', date)
      .single()

    if (error && error.code !== 'PGRST116') throw error
    return data || null
  },

  async getDailyStates(startDate?: string, endDate?: string): Promise<DailyState[]> {
    let query = supabase
      .from('daily_state')
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

  async addOrUpdateDailyState(dailyState: Omit<DailyState, 'id' | 'created_at'>): Promise<DailyState> {
    const existing = await this.getDailyState(dailyState.date)

    if (existing) {
      const { data, error } = await supabase
        .from('daily_state')
        .update(dailyState)
        .eq('date', dailyState.date)
        .select()
        .single()

      if (error) throw error
      return data
    } else {
      const { data, error } = await supabase
        .from('daily_state')
        .insert([dailyState])
        .select()
        .single()

      if (error) throw error
      return data
    }
  },

  async getTodayState(): Promise<DailyState | null> {
    const today = new Date().toISOString().split('T')[0]
    return this.getDailyState(today)
  }
}
