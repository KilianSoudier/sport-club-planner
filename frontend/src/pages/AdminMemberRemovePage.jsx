import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function AdminMemberRemovePage() {
  const { clubId, memberId } = useParams()
  const navigate = useNavigate()

  function onRemove() {
    // mock remove
    alert(`Membre ${memberId} retiré`)
    navigate(`/admin/clubs/${clubId}/members`)
  }

  return (
    <div className="py-6">
      <h1 className="text-lg font-semibold text-slate-50">Retirer un licencié</h1>
      <div className="card p-4 mt-4">
        <p className="text-sm text-slate-300">Confirmez le retrait du licencié #{memberId} du club #{clubId}.</p>
        <div className="flex justify-end gap-2 mt-4">
          <button onClick={() => navigate(-1)} className="btn-ghost px-3 py-1 text-xs">Annuler</button>
          <button onClick={onRemove} className="btn-danger px-3 py-1 text-xs">Retirer</button>
        </div>
      </div>
    </div>
  )
}

export default AdminMemberRemovePage
