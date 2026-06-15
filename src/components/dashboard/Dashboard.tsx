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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation Tabs */}
      <div className="sticky top-0 z-40 bg-white shadow-sm border-b border-gray-200">
        <nav className="flex overflow-x-auto px-4 sm:px-6 lg:px-8 gap-2" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-4 font-medium text-sm flex items-center gap-2 whitespace-nowrap rounded-t-lg transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-trail-50 text-trail-700 border-b-2 border-trail-600 shadow-sm'
                  : 'text-gray-600 hover:text-trail-600 hover:bg-gray-50'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="animate-fade-in">
          {activeTab === 'hoy' && <TabHoy />}
          {activeTab === 'semana' && <TabSemana />}
          {activeTab === 'mesociclo' && <TabMesociclo />}
          {activeTab === 'graficos' && <TabGraficos />}
          {activeTab === 'fuerza' && <TabFuerza />}
        </div>
      </div>
    </div>
  )
}
