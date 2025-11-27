import React, { useMemo, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

// Simple SVG bar chart component (no external deps) used to render attendance
function SimpleBarChart({ labels, values, height = 160 }) {
  const max = Math.max(...values, 1)
  const barWidth = 28
  const gap = 10
  const width = labels.length * (barWidth + gap)

  return (
    <div className="overflow-x-auto">
      <svg width={width} height={height} className="block">
        {values.map((v, i) => {
          const barH = Math.round((v / max) * (height - 30))
          const x = i * (barWidth + gap)
          const y = height - barH - 20
          return (
            <g key={i}>
              <rect
                x={x}
                y={y}
                width={barWidth}
                height={barH}
                rx={4}
                className="fill-sport-500"
              />
              <text
                x={x + barWidth / 2}
                y={height - 6}
                fontSize={10}
                textAnchor="middle"
                fill="#cbd5e1"
              >
                {labels[i]}
              </text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}

function AdminAttendancePage() {
  const { clubId } = useParams()
  const [mode, setMode] = useState('sessions') // 'sessions' or 'weeks'

  // Mock data: last 8 trainings (attendance numbers)
  const sessionsData = useMemo(() => {
    const labels = Array.from({ length: 8 }).map((_, i) => `S-${8 - i}`)
    const values = [12, 18, 10, 22, 20, 16, 14, 19]
    return { labels, values }
  }, [])

  // Mock data: last 12 weeks aggregated
  const weeksData = useMemo(() => {
    const labels = Array.from({ length: 12 }).map((_, i) => `W-${12 - i}`)
    const values = [50, 62, 58, 70, 66, 60, 55, 72, 68, 64, 61, 75]
    return { labels, values }
  }, [])

  const active = mode === 'sessions' ? sessionsData : weeksData

  return (
    <div className="py-6 space-y-4">
      <div className="flex items-center justify-between gap-2">
        <div>
          <h1 className="text-lg font-semibold text-slate-50">Fréquentation des entraînements</h1>
          <p className="text-xs text-slate-400 mt-1">
            Visualisez les fréquentations des entraînements pour le club
            <span className="font-medium text-slate-100"> #{clubId}</span>.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Link to="/admin/clubs" className="btn-ghost px-3 py-1 text-xs">
            Retour clubs
          </Link>
          <span className="badge bg-slate-900/80 border border-slate-700">Mode dirigeant</span>
        </div>
      </div>

      <div className="card p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="text-sm text-slate-300">Période</div>
          <div className="flex gap-2">
            <button
              onClick={() => setMode('sessions')}
              className={`px-3 py-1 text-xs rounded-xl ${mode === 'sessions' ? 'bg-slate-800 text-sport-100' : 'text-slate-200 hover:bg-slate-800/60'}`}
            >
              Derniers entraînements
            </button>
            <button
              onClick={() => setMode('weeks')}
              className={`px-3 py-1 text-xs rounded-xl ${mode === 'weeks' ? 'bg-slate-800 text-sport-100' : 'text-slate-200 hover:bg-slate-800/60'}`}
            >
              Semaines (agrégées)
            </button>
          </div>
        </div>

        <SimpleBarChart labels={active.labels} values={active.values} />

        <div className="mt-4 text-sm text-slate-300">
          <strong className="text-slate-100">Total:</strong> {active.values.reduce((a, b) => a + b, 0)} participants
        </div>
      </div>

      <div className="card p-4">
        <h2 className="text-sm font-medium text-slate-100 mb-2">Détail</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-xs text-slate-400">
              <th className="text-left px-2 py-1">Période</th>
              <th className="text-right px-2 py-1">Participants</th>
            </tr>
          </thead>
          <tbody>
            {active.labels.map((label, idx) => (
              <tr key={label} className={idx % 2 === 0 ? 'bg-slate-900/40' : 'bg-slate-900/70'}>
                <td className="px-2 py-1">{label}</td>
                <td className="px-2 py-1 text-right">{active.values[idx]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminAttendancePage
