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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-trail-50 to-gray-50 pb-24 md:pb-8">
      {/* Tab Content - Full Screen */}
      <div className="animate-fade-in max-w-2xl mx-auto">
        {activeTab === 'hoy' && <TabHoy />}
        {activeTab === 'semana' && <TabSemana />}
        {activeTab === 'mesociclo' && <TabMesociclo />}
        {activeTab === 'graficos' && <TabGraficos />}
        {activeTab === 'fuerza' && <TabFuerza />}
      </div>

      {/* Bottom Navigation - Mobile App Style */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl md:hidden">
        <div className="flex justify-around items-center max-w-2xl mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-4 px-2 flex flex-col items-center gap-1 transition-all duration-200 ${
                activeTab === tab.id
                  ? 'text-trail-600 bg-trail-50'
                  : 'text-gray-500 hover:text-trail-600'
              }`}
            >
              <span className="text-2xl">{tab.icon}</span>
              <span className="text-xs font-semibold whitespace-nowrap">{tab.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Desktop Top Navigation */}
      <div className="hidden md:sticky md:top-0 md:z-40 md:bg-white md:shadow-sm md:border-b md:border-gray-200">
        <nav className="max-w-2xl mx-auto flex overflow-x-auto px-4 gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-4 font-medium text-sm flex items-center gap-2 whitespace-nowrap rounded-t-lg transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-trail-50 text-trail-700 border-b-2 border-trail-600'
                  : 'text-gray-600 hover:text-trail-600'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}
