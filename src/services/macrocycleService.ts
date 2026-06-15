import { supabase } from './supabase'
import type { Macrophase } from '../types'

export const macrocycleService = {
  async getMacrophases(): Promise<Macrophase[]> {
    const { data, error } = await supabase
      .from('macrophases')
      .select('*')
      .order('phase_number', { ascending: true })

    if (error) throw error
    return data || []
  },

  async getMacrophaseById(id: string): Promise<Macrophase | null> {
    const { data, error } = await supabase
      .from('macrophases')
      .select('*')
      .eq('id', id)
      .single()

    if (error && error.code !== 'PGRST116') throw error
    return data || null
  },

  async getMacrophaseForDate(date: string): Promise<Macrophase | null> {
    const { data, error } = await supabase
      .from('macrophases')
      .select('*')
      .lte('start_date', date)
      .gte('end_date', date)
      .single()

    if (error && error.code !== 'PGRST116') throw error
    return data || null
  },

  async addMacrophase(macrophase: Omit<Macrophase, 'id'>): Promise<Macrophase> {
    const { data, error } = await supabase
      .from('macrophases')
      .insert([macrophase])
      .select()
      .single()

    if (error) throw error
    return data
  },

  async seedMacrophases(): Promise<void> {
    const macrophases: Omit<Macrophase, 'id'>[] = [
      {
        name: 'M1 Recuperación y Base',
        phase_number: 1,
        start_date: '2026-06-15',
        end_date: '2026-09-06',
        description: 'Recuperación activa y construcción de base aeróbica',
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
        description: 'Desarrollo del motor aeróbico y calidad específica',
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
        description: 'Simulación de carrera ultra con volumen máximo',
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
        description: 'Reducción de volumen y preparación para la carrera objetivo',
        focus_areas: ['taper', 'maintenance', 'mental_prep'],
        weekly_volume_km: 20,
        intensity_distribution: { easy: 80, moderate: 15, hard: 5 },
        color_hex: '#ef4444',
      },
    ]

    for (const macrophase of macrophases) {
      try {
        await this.addMacrophase(macrophase)
      } catch (error) {
        console.error(`Error adding macrophase ${macrophase.phase_number}:`, error)
      }
    }
  }
}
