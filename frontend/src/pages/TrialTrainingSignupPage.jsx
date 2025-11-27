import { useParams } from 'react-router-dom'
import { useState } from 'react'

function TrialTrainingSignupPage() {
  const { trainingId } = useParams()
  const maxTries = 3
  const [usedTries, setUsedTries] = useState(1) // TODO: récupérer depuis l'API
  const remaining = maxTries - usedTries

  const handleSubmit = (e) => {
    e.preventDefault()
    if (remaining <= 0) return
    // TODO: appel API essai anonyme
    setUsedTries((prev) => prev + 1)
  }

  const isLimitReached = remaining <= 0

  return (
    <div className="flex items-center justify-center py-6">
      <div className="card w-full max-w-lg space-y-4">
        <div>
          <h1 className="text-lg font-semibold text-slate-50">
            Essai sur un entraînement #{trainingId}
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Réservez une place pour découvrir le club lors d&apos;un entraînement d&apos;essai.
            Vous disposez de <span className="font-semibold">{maxTries}</span> essais maximum
            avant inscription.
          </p>
        </div>

        <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/80 px-3 py-2 text-xs">
          <div className="text-slate-300">
            Essais utilisés :{' '}
            <span className="font-semibold">
              {usedTries} / {maxTries}
            </span>
          </div>
          <div
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              isLimitReached
                ? 'bg-rose-500/15 text-rose-200 border border-rose-500/40'
                : 'bg-emerald-500/10 text-emerald-200 border border-emerald-500/40'
            }`}
          >
            {isLimitReached ? 'Limite atteinte' : `Reste ${remaining} essai(s)`}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-sm">
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="label">Prénom</label>
              <input type="text" className="input" placeholder="Prénom du joueur" />
            </div>
            <div>
              <label className="label">Nom</label>
              <input type="text" className="input" placeholder="Nom du joueur" />
            </div>
            <div>
              <label className="label">Adresse e-mail</label>
              <input
                type="email"
                className="input"
                placeholder="parent@example.com"
              />
            </div>
            <div>
              <label className="label">Téléphone</label>
              <input type="tel" className="input" placeholder="06 00 00 00 00" />
            </div>
            <div className="sm:col-span-2">
              <label className="label">Catégorie / Année de naissance</label>
              <input
                type="text"
                className="input"
                placeholder="U13, U15, sénior..."
              />
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3 text-xs text-slate-400">
            <p>
              En validant cet essai, vos coordonnées seront transmises au club afin de
              confirmer votre présence et de vous recontacter si besoin.
            </p>
          </div>
<button
            type="submit"
            disabled={isLimitReached}
            className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLimitReached
              ? 'Limite d\'essais atteinte – créer un compte'
              : 'Réserver cet entraînement d\'essai'}
          </button>
        </form>

        {isLimitReached && (
          <div className="mt-2 rounded-xl border border-amber-500/40 bg-amber-500/10 px-3 py-2 text-xs text-amber-100">
            Vous avez atteint la limite de {maxTries} essais. Créez un compte et finalisez
            votre inscription pour continuer à participer aux entraînements.
          </div>
        )}
      </div>
    </div>
  )
}

export default TrialTrainingSignupPage
