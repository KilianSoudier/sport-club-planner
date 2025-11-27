import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'

function AdminClubEditPage() {
  const { clubId } = useParams()
  const navigate = useNavigate()
  // mock initial data fetch
  const [form, setForm] = useState({ name: '', sport: '', teams: 0 })
  const [members, setMembers] = useState([])

  useEffect(() => {
    // simulate fetch
    const mock = { name: `Club ${clubId}`, sport: 'Football', teams: 3 }
    setForm(mock)
    setMembers([
      { id: 1, name: 'Alice Martin', status: 'actif' },
      { id: 2, name: 'Paul Dupont', status: 'suspendu' },
    ])
  }, [clubId])

  function onChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: name === 'teams' ? Number(value) : value }))
  }

  function onSave(e) {
    e.preventDefault()
    // TODO: call API to save
    alert(`Sauvegardé: ${form.name} (${form.sport})`)
    navigate('/admin/clubs')
  }

  return (
    <div className="py-6 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold text-slate-50">Modifier le club #{clubId}</h1>
          <p className="text-xs text-slate-400 mt-1">Mettez à jour les informations du club.</p>
        </div>
        <Link to="/admin/backoffice" className="text-xs text-slate-400">Backoffice</Link>
      </div>

      <form onSubmit={onSave} className="card p-6 space-y-4 bg-slate-900/40">
        <div>
          <label className="text-xs text-slate-300 font-medium">Nom du club</label>
          <input name="name" value={form.name} onChange={onChange} className="mt-2 block w-full rounded-md bg-slate-800 border border-slate-700 px-3 py-2 text-slate-100" />
          <p className="text-xs text-slate-500 mt-1">Nom public du club affiché sur la carte.</p>
        </div>

        <div>
          <label className="text-xs text-slate-300 font-medium">Sport</label>
          <input name="sport" value={form.sport} onChange={onChange} className="mt-2 block w-full rounded-md bg-slate-800 border border-slate-700 px-3 py-2 text-slate-100" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs text-slate-300 font-medium">Équipes</label>
            <input type="number" name="teams" value={form.teams} onChange={onChange} className="mt-2 block w-full rounded-md bg-slate-800 border border-slate-700 px-3 py-2 text-slate-100" />
          </div>
          <div>
            <label className="text-xs text-slate-300 font-medium">Licenciés (calculé)</label>
            <div className="mt-2 rounded-md bg-slate-800 border border-slate-700 px-3 py-2 text-slate-100">{members.length}</div>
            <Link to={`/admin/clubs/${clubId}/members`} className="text-xs text-slate-300 mt-1 inline-block">Gérer les licenciés</Link>
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <button type="button" onClick={() => navigate('/admin/clubs')} className="btn-ghost px-3 py-1 text-xs">Annuler</button>
          <button type="submit" className="btn-primary px-3 py-1 text-xs">Enregistrer</button>
        </div>
      </form>

      <div className="card p-4">
        <h2 className="text-sm font-medium text-slate-100 mb-2">Aperçu des licenciés</h2>
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
                  <a href={`/admin/clubs/${clubId}/members/${m.id}/edit`} className="btn-ghost px-3 py-1 text-xs mr-2">Modifier</a>
                  <a href={`/admin/clubs/${clubId}/members/${m.id}/remove`} className="btn-ghost px-3 py-1 text-xs">Retirer</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminClubEditPage
