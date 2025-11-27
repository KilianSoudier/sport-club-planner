import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function AdminMemberEditPage() {
  const { clubId, memberId } = useParams()
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', status: 'actif' })

  useEffect(() => {
    // mock fetch
    setForm({ name: `Member ${memberId}`, status: 'actif' })
  }, [memberId])

  function onChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function onSave(e) {
    e.preventDefault()
    alert(`Membre mis à jour: ${form.name} (${form.status})`)
    navigate(`/admin/clubs/${clubId}/members`)
  }

  return (
    <div className="py-6">
      <h1 className="text-lg font-semibold text-slate-50">Modifier licencié</h1>
      <form onSubmit={onSave} className="card p-4 mt-4 space-y-3">
        <div>
          <label className="text-xs text-slate-300">Nom</label>
          <input name="name" value={form.name} onChange={onChange} className="mt-2 block w-full rounded-md bg-slate-800 border border-slate-700 px-3 py-2 text-slate-100" />
        </div>
        <div>
          <label className="text-xs text-slate-300">Statut</label>
          <select name="status" value={form.status} onChange={onChange} className="mt-2 block w-full rounded-md bg-slate-800 border border-slate-700 px-3 py-2 text-slate-100">
            <option value="actif">actif</option>
            <option value="suspendu">suspendu</option>
          </select>
        </div>
        <div className="flex justify-end gap-2">
          <button type="button" onClick={() => navigate(-1)} className="btn-ghost px-3 py-1 text-xs">Annuler</button>
          <button type="submit" className="btn-primary px-3 py-1 text-xs">Enregistrer</button>
        </div>
      </form>
    </div>
  )
}

export default AdminMemberEditPage
