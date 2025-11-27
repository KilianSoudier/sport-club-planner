import React, { useState } from 'react'

const mockRequests = [
  { id: 101, name: 'AS Demo', sport: 'Handball', requestedBy: 'user1@example.com' },
  { id: 102, name: 'FC Test', sport: 'Football', requestedBy: 'user2@example.com' },
]

function AdminBackofficePage() {
  const [requests, setRequests] = useState(mockRequests)

  function approve(id) {
    setRequests(r => r.filter(x => x.id !== id))
    alert(`Demande ${id} approuvée`)
  }

  function reject(id) {
    setRequests(r => r.filter(x => x.id !== id))
    alert(`Demande ${id} rejetée`)
  }

  return (
    <div className="py-6 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold text-slate-50">Backoffice administrateur</h1>
          <p className="text-xs text-slate-400 mt-1">Approuvez ou rejetez les demandes de création de club.</p>
        </div>
      </div>

      <div className="card p-4">
        {requests.length === 0 ? (
          <div className="text-sm text-slate-300">Aucune demande en attente.</div>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-slate-400">
                <th className="text-left px-2 py-1">Nom</th>
                <th className="text-left px-2 py-1">Sport</th>
                <th className="text-left px-2 py-1">Demandé par</th>
                <th className="text-right px-2 py-1">Actions</th>
              </tr>
            </thead>
            <tbody>
              {requests.map(req => (
                <tr key={req.id} className="bg-slate-900/40">
                  <td className="px-2 py-1">{req.name}</td>
                  <td className="px-2 py-1">{req.sport}</td>
                  <td className="px-2 py-1">{req.requestedBy}</td>
                  <td className="px-2 py-1 text-right">
                    <button onClick={() => reject(req.id)} className="btn-ghost px-3 py-1 text-xs mr-2">Rejeter</button>
                    <button onClick={() => approve(req.id)} className="btn-primary px-3 py-1 text-xs">Approuver</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

export default AdminBackofficePage
