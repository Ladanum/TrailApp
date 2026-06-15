import { Mountain } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Mountain className="w-8 h-8 text-trail-600" />
            <h1 className="text-3xl font-bold text-gray-900">Trail Running Tracker</h1>
          </div>
          <p className="text-sm text-gray-600">Objetivo: Ultra 80K Sub 11h</p>
        </div>
      </div>
    </header>
  )
}
