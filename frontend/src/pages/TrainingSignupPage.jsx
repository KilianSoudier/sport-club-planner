import { useParams } from 'react-router-dom'
import { useState } from 'react'

function TrainingSignupPage() {
  const { trainingId } = useParams()
  const [status, setStatus] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: appel API membre connecté
    setStatus('ok')
  }

  return (
    <div className="flex items-center justify-center py-6">
      <div className="card w-full max-w-lg space-y-4">
        <div>
          <h1 className="text-lg font-semibold text-slate-50">
            Inscription à l&apos;entraînement #{trainingId}
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Confirmez votre présence en tant que membre du club. Vous pourrez annuler ou modifier plus tard.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-sm">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3 text-xs text-slate-300">
            <p>
              En confirmant, votre nom apparaîtra dans la liste des participants de cette
              séance. Les coachs pourront préparer le contenu en fonction de l&apos;effectif.
            </p>
          </div>
          <button type="submit" className="btn-primary w-full justify-center">
            Je participe à cette séance
          </button>
        </form>

        {status === 'ok' && (
          <div className="mt-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-xs text-emerald-100">
            Votre inscription a été enregistrée. Pensez à prévenir en cas d&apos;absence.
          </div>
        )}
      </div>
    </div>
  )
}

export default TrainingSignupPage
