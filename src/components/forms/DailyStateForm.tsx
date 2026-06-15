import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import type { DailyState } from '../../types'
import { dailyStateService } from '../../services/dailyStateService'

interface DailyStateFormData {
  date: string
  weight_kg?: number
  motivation_score?: number
  stress_score?: number
  sleep_hours?: number
  sleep_quality?: number
  notes?: string
}

interface Props {
  onSubmit?: () => void
}

export default function DailyStateForm({ onSubmit }: Props) {
  const { register, handleSubmit, reset, formState: { isSubmitting }, watch } = useForm<DailyStateFormData>({
    defaultValues: {
      date: new Date().toISOString().split('T')[0],
      motivation_score: 5,
      stress_score: 5,
      sleep_hours: 8,
      sleep_quality: 5,
    },
  })

  const motivation = watch('motivation_score')
  const stress = watch('stress_score')
  const sleep = watch('sleep_hours')
  const sleepQuality = watch('sleep_quality')

  const onSubmitForm = async (data: DailyStateFormData) => {
    try {
      const stateData: Omit<DailyState, 'id' | 'created_at'> = {
        ...data,
        weight_kg: data.weight_kg ? parseFloat(String(data.weight_kg)) : undefined,
        motivation_score: data.motivation_score ? parseInt(String(data.motivation_score)) : undefined,
        stress_score: data.stress_score ? parseInt(String(data.stress_score)) : undefined,
        sleep_hours: data.sleep_hours ? parseFloat(String(data.sleep_hours)) : undefined,
        sleep_quality: data.sleep_quality ? parseInt(String(data.sleep_quality)) : undefined,
      }

      await dailyStateService.addOrUpdateDailyState(stateData)
      toast.success('Estado del día registrado!')
      reset()
      onSubmit?.()
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Error al guardar estado del día')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-6">
      {/* Date & Weight */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Fecha</label>
          <input
            type="date"
            {...register('date', { required: true })}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Peso (kg)</label>
          <input
            type="number"
            step="0.1"
            {...register('weight_kg')}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900"
          />
        </div>
      </div>

      {/* Motivation */}
      <div>
        <div className="flex justify-between">
          <label className="block text-sm font-medium text-gray-700">Motivación (1-10)</label>
          <span className="text-lg font-bold text-trail-600">{motivation || '—'}</span>
        </div>
        <input
          type="range"
          min="1"
          max="10"
          {...register('motivation_score')}
          className="mt-2 w-full"
        />
        <div className="mt-1 flex justify-between text-xs text-gray-500">
          <span>Muy baja</span>
          <span>Muy alta</span>
        </div>
      </div>

      {/* Stress */}
      <div>
        <div className="flex justify-between">
          <label className="block text-sm font-medium text-gray-700">Estrés (1-10)</label>
          <span className="text-lg font-bold text-trail-600">{stress || '—'}</span>
        </div>
        <input
          type="range"
          min="1"
          max="10"
          {...register('stress_score')}
          className="mt-2 w-full"
        />
        <div className="mt-1 flex justify-between text-xs text-gray-500">
          <span>Sin estrés</span>
          <span>Muy estresado</span>
        </div>
      </div>

      {/* Sleep */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="flex justify-between">
            <label className="block text-sm font-medium text-gray-700">Horas Sueño</label>
            <span className="text-lg font-bold text-trail-600">{sleep || '—'}</span>
          </div>
          <input
            type="number"
            step="0.5"
            min="0"
            max="24"
            {...register('sleep_hours')}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900"
          />
        </div>

        <div>
          <div className="flex justify-between">
            <label className="block text-sm font-medium text-gray-700">Calidad Sueño (1-10)</label>
            <span className="text-lg font-bold text-trail-600">{sleepQuality || '—'}</span>
          </div>
          <input
            type="range"
            min="1"
            max="10"
            {...register('sleep_quality')}
            className="mt-2 w-full"
          />
        </div>
      </div>

      {/* Notes */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Notas</label>
        <textarea
          {...register('notes')}
          placeholder="Observaciones generales del día..."
          rows={2}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-trail-500 focus:ring-trail-500"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-trail-600 text-white px-4 py-2 rounded-md hover:bg-trail-700 disabled:bg-gray-400 transition-colors"
      >
        {isSubmitting ? 'Guardando...' : 'Guardar Estado del Día'}
      </button>
    </form>
  )
}
