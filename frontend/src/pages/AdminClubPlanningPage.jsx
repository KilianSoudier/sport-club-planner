import React from 'react'
import { useParams, Link } from 'react-router-dom'

function AdminClubPlanningPage() {
  const { clubId } = useParams()

  const mockSlots = [
    { id: 1, day: 'Lundi', time: '18:00-19:30', activity: 'Séniors' },
    { id: 2, day: 'Mercredi', time: '19:00-20:30', activity: 'Jeunes' },
  ]

  return (
    <div className="py-6 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold text-slate-50">Planning du club #{clubId}</h1>
          <p className="text-xs text-slate-400 mt-1">Gérez les créneaux d'entraînement.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link to={`/admin/clubs/${clubId}/members`} className="btn-ghost px-3 py-1 text-xs">Licenciés</Link>
          <Link to={`/admin/clubs/${clubId}/planning/new`} className="btn-primary px-3 py-1 text-xs">Ajouter créneau</Link>
        </div>
      </div>

      <div className="card p-4">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-xs text-slate-400">
              <th className="text-left px-2 py-1">Jour</th>
              <th className="text-left px-2 py-1">Heure</th>
              <th className="text-left px-2 py-1">Activité</th>
              <th className="text-right px-2 py-1">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockSlots.map(slot => (
              <tr key={slot.id} className="bg-slate-900/40">
                <td className="px-2 py-1">{slot.day}</td>
                <td className="px-2 py-1">{slot.time}</td>
                <td className="px-2 py-1">{slot.activity}</td>
                <td className="px-2 py-1 text-right">
                  <Link to={`/admin/clubs/${clubId}/planning/${slot.id}/edit`} className="btn-ghost px-3 py-1 text-xs">Modifier</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminClubPlanningPage
