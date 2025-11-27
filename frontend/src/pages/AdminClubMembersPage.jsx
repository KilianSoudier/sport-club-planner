import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

function AdminClubMembersPage() {
  const { clubId } = useParams()
  const [members, setMembers] = useState([])

  useEffect(() => {
    setMembers([
      { id: 1, name: 'Alice Martin', status: 'actif' },
      { id: 2, name: 'Paul Dupont', status: 'suspendu' },
    ])
  }, [clubId])

  return (
    <div className="py-6 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold text-slate-50">Licenciés - Club #{clubId}</h1>
          <p className="text-xs text-slate-400 mt-1">Liste des licenciés, statuts et actions.</p>
        </div>
        <Link to={`/admin/clubs/${clubId}/edit`} className="btn-ghost px-3 py-1 text-xs">Retour</Link>
      </div>

      <div className="card p-4">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-xs text-slate-400">
              <th className="text-left px-2 py-1">Nom</th>
              <th className="text-left px-2 py-1">Statut</th>
              <th className="text-right px-2 py-1">Actions</th>
            </tr>
          </thead>
          <tbody>
            {members.map(m => (
              <tr key={m.id} className="bg-slate-900/40">
                <td className="px-2 py-1">{m.name}</td>
                <td className="px-2 py-1">{m.status}</td>
                <td className="px-2 py-1 text-right">
                  <Link to={`/admin/clubs/${clubId}/members/${m.id}/edit`} className="btn-ghost px-3 py-1 text-xs mr-2">Modifier</Link>
                  <Link to={`/admin/clubs/${clubId}/members/${m.id}/remove`} className="btn-ghost px-3 py-1 text-xs">Retirer</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminClubMembersPage
