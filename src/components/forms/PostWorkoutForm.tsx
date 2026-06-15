import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import type { Workout } from '../../types'
import { workoutService } from '../../services/workoutService'

interface PostWorkoutFormData {
  date: string
  distance_km: number
  duration_minutes: number
  elevation_gain: number
  elevation_loss: number
  avg_heart_rate?: number
  avg_pace_min_km?: number
  surface?: string
  difficulty?: string
  zone?: string
  rpe?: number
  sensations?: number
  fatiga_initial?: number
  movement_quality?: number
  motivation?: number
  stress?: number
  completion_percentage?: number
  notes?: string
}

interface Props {
  onSubmit?: () => void
}

export default function PostWorkoutForm({ onSubmit }: Props) {
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm<PostWorkoutFormData>({
    defaultValues: {
      date: new Date().toISOString().split('T')[0],
      duration_minutes: 60,
      elevation_gain: 0,
      elevation_loss: 0,
      surface: 'trail',
      rpe: 5,
      sensations: 3,
      completion_percentage: 100,
    },
  })

  const onSubmitForm = async (data: PostWorkoutFormData) => {
    try {
      const workoutData: Omit<Workout, 'id' | 'created_at'> = {
        date: data.date,
        distance_km: parseFloat(String(data.distance_km)),
        duration_minutes: parseInt(String(data.duration_minutes)),
        elevation_gain: parseInt(String(data.elevation_gain)),
        elevation_loss: parseInt(String(data.elevation_loss)),
        avg_heart_rate: data.avg_heart_rate ? parseInt(String(data.avg_heart_rate)) : undefined,
        avg_pace_min_km: data.avg_pace_min_km ? parseFloat(String(data.avg_pace_min_km)) : undefined,
        surface: (data.surface as 'trail' | 'road' | 'mixed') || undefined,
        difficulty: (data.difficulty as 'easy' | 'moderate' | 'hard') || undefined,
        zone: (data.zone as 'Z1' | 'Z2' | 'Z3' | 'Z4' | 'Z5') || undefined,
        rpe: data.rpe ? parseInt(String(data.rpe)) : undefined,
        sensations: data.sensations ? parseInt(String(data.sensations)) : undefined,
        completion_percentage: data.completion_percentage ? parseInt(String(data.completion_percentage)) : 100,
        notes: data.notes,
        source: 'manual',
      }

      await workoutService.addWorkout(workoutData)
      toast.success('Entreno registrado correctamente!')
      reset()
      onSubmit?.()
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Error al registrar entreno')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-6">
      {/* Basic Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Fecha</label>
          <input
            type="date"
            {...register('date', { required: true })}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-trail-500 focus:ring-trail-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Distancia (km)</label>
          <input
            type="number"
            step="0.1"
            {...register('distance_km', { required: true, min: 0 })}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-trail-500 focus:ring-trail-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Duración (minutos)</label>
          <input
            type="number"
            {...register('duration_minutes', { required: true, min: 0 })}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-trail-500 focus:ring-trail-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Desnivel Positivo (m)</label>
          <input
            type="number"
            {...register('elevation_gain', { required: true, min: 0 })}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-trail-500 focus:ring-trail-500"
          />
        </div>
      </div>

      {/* Optional: HR & Pace */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">FC Media (opcional)</label>
          <input
            type="number"
            {...register('avg_heart_rate')}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-trail-500 focus:ring-trail-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Ritmo Medio (min/km - opcional)</label>
          <input
            type="number"
            step="0.01"
            {...register('avg_pace_min_km')}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-trail-500 focus:ring-trail-500"
          />
        </div>
      </div>

      {/* Perception Scales */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            RPE (1-10): <span {...register('rpe')} className="text-trail-600">
              {/* Value will be updated dynamically */}
            </span>
          </label>
          <input
            type="range"
            min="1"
            max="10"
            {...register('rpe')}
            className="mt-2 w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Sensaciones (1-5)
          </label>
          <input
            type="range"
            min="1"
            max="5"
            {...register('sensations')}
            className="mt-2 w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            % Completada
          </label>
          <input
            type="number"
            min="0"
            max="100"
            {...register('completion_percentage')}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900"
          />
        </div>
      </div>

      {/* Surface & Zone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Terreno</label>
          <select
            {...register('surface')}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900"
          >
            <option value="trail">Trail</option>
            <option value="road">Carretera</option>
            <option value="mixed">Mixto</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Zona de Intensidad</label>
          <select
            {...register('zone')}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900"
          >
            <option value="">Seleccionar...</option>
            <option value="Z1">Z1 - Muy fácil</option>
            <option value="Z2">Z2 - Fácil</option>
            <option value="Z3">Z3 - Moderado</option>
            <option value="Z4">Z4 - Duro</option>
            <option value="Z5">Z5 - Máximo</option>
          </select>
        </div>
      </div>

      {/* Notes */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Notas</label>
        <textarea
          {...register('notes')}
          placeholder="Cómo te sentiste, lesiones, condiciones del terreno, etc."
          rows={3}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-trail-500 focus:ring-trail-500"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-trail-600 text-white px-4 py-2 rounded-md hover:bg-trail-700 disabled:bg-gray-400 transition-colors"
      >
        {isSubmitting ? 'Guardando...' : 'Registrar Entreno'}
      </button>
    </form>
  )
}
