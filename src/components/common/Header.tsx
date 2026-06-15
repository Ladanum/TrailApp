import { Mountain } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-trail-600 to-trail-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/10 rounded-xl backdrop-blur">
              <Mountain className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">Trail Running Tracker</h1>
              <p className="text-trail-50 text-sm mt-1">Gestor de entrenamientos personal</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-white/90 text-sm font-semibold">🎯 Objetivo</p>
            <p className="text-white text-lg font-bold">Ultra 80K Sub 11h</p>
            <p className="text-trail-100 text-xs mt-1">Junio 2027</p>
          </div>
        </div>
      </div>
    </header>
  )
}
