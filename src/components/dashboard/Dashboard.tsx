import { useState } from 'react'
import { Calendar, TrendingUp, Activity, BarChart3, Dumbbell } from 'lucide-react'
import TabHoy from './TabHoy'
import TabSemana from './TabSemana'
import TabMesociclo from './TabMesociclo'
import TabGraficos from './TabGraficos'
import TabFuerza from './TabFuerza'

type Tab = 'hoy' | 'semana' | 'mesociclo' | 'graficos' | 'fuerza'

const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
  { id: 'hoy', label: 'HOY', icon: <Activity className="w-5 h-5" /> },
  { id: 'semana', label: 'SEMANA', icon: <Calendar className="w-5 h-5" /> },
  { id: 'mesociclo', label: 'MESOCICLO', icon: <TrendingUp className="w-5 h-5" /> },
  { id: 'graficos', label: 'GRÁFICOS', icon: <BarChart3 className="w-5 h-5" /> },
  { id: 'fuerza', label: 'FUERZA', icon: <Dumbbell className="w-5 h-5" /> },
]

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<Tab>('hoy')

  return (
    <div className="py-6">
      {/* Navigation Tabs */}
      <div className="flex overflow-x-auto bg-white border-b border-gray-200 sticky top-0 z-40">
        <nav className="flex space-x-8 px-4 sm:px-6 lg:px-8" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-trail-600 text-trail-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="mt-6 px-4 sm:px-6 lg:px-8">
        {activeTab === 'hoy' && <TabHoy />}
        {activeTab === 'semana' && <TabSemana />}
        {activeTab === 'mesociclo' && <TabMesociclo />}
        {activeTab === 'graficos' && <TabGraficos />}
        {activeTab === 'fuerza' && <TabFuerza />}
      </div>
    </div>
  )
}
