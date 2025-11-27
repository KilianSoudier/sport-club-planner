import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function AdminPlanningEditPage() {
  const { clubId, slotId } = useParams()
  const navigate = useNavigate()
  const [form, setForm] = useState({ day: '', time: '', activity: '' })

  useEffect(() => {
    if (slotId && slotId !== 'new') {
      // mock fetch
      setForm({ day: 'Lundi', time: '18:00-19:30', activity: 'Séniors' })
    }
  }, [slotId])

  function onChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function onSave(e) {
    e.preventDefault()
    alert(`Créneau sauvegardé: ${form.day} ${form.time} (${form.activity})`)
    navigate(`/admin/clubs/${clubId}/planning`)
  }

  return (
    <div className="py-6">
      <h1 className="text-lg font-semibold text-slate-50">{slotId && slotId !== 'new' ? 'Modifier' : 'Ajouter'} un créneau</h1>
      <form onSubmit={onSave} className="card p-4 mt-4 space-y-3">
        <div>
          <label className="text-xs text-slate-300">Jour</label>
          <input name="day" value={form.day} onChange={onChange} className="mt-2 block w-full rounded-md bg-slate-800 border border-slate-700 px-3 py-2 text-slate-100" />
        </div>
        <div>
          <label className="text-xs text-slate-300">Heure</label>
          <input name="time" value={form.time} onChange={onChange} className="mt-2 block w-full rounded-md bg-slate-800 border border-slate-700 px-3 py-2 text-slate-100" />
        </div>
        <div>
          <label className="text-xs text-slate-300">Activité</label>
          <input name="activity" value={form.activity} onChange={onChange} className="mt-2 block w-full rounded-md bg-slate-800 border border-slate-700 px-3 py-2 text-slate-100" />
        </div>
        <div className="flex justify-end gap-2">
          <button type="button" onClick={() => navigate(-1)} className="btn-ghost px-3 py-1 text-xs">Annuler</button>
          <button type="submit" className="btn-primary px-3 py-1 text-xs">Enregistrer</button>
        </div>
      </form>
    </div>
  )
}

export default AdminPlanningEditPage
