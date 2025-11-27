import { useParams } from 'react-router-dom'

const fakeTraining = {
  id: 1,
  clubName: 'Lyon Elite Foot U17',
  date: 'Mercredi 15 janvier 2025',
  timeSlot: '18:00 - 19:30',
  field: 'Terrain synthétique n°2',
  coaches: ['Coach Antoine', 'Coach Marie'],
  exercises: [
    { id: 1, name: 'Échauffement dynamique', duration: '15 min', intensity: 'Moyen' },
    { id: 2, name: 'Conservation du ballon 5v2', duration: '20 min', intensity: 'Élevé' },
    { id: 3, name: 'Travail de finition', duration: '20 min', intensity: 'Élevé' },
    { id: 4, name: 'Match à thème', duration: '30 min', intensity: 'Moyen' },
  ],
  participants: [
    { id: 1, name: 'Lucas M.', status: 'Confirmé', type: 'Membre' },
    { id: 2, name: 'Yanis D.', status: 'En attente', type: 'Membre' },
    { id: 3, name: 'Théo R.', status: 'Confirmé', type: 'Essai' },
  ],
}

function TrainingSchedulePage() {
  const { trainingId } = useParams()
  const training = fakeTraining

  const confirmed = training.participants.filter((p) => p.status === 'Confirmé').length
  const trials = training.participants.filter((p) => p.type === 'Essai').length

  return (
    <div className="py-6 space-y-4">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-lg font-semibold text-slate-50">
            Entraînement #{trainingId} – {training.clubName}
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Planning détaillé de la séance, avec les exercices prévus et le suivi des participants.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="badge bg-slate-900/80 border border-slate-700">
            🗓️ {training.date}
          </span>
          <span className="badge bg-slate-900/80 border border-slate-700">
            ⏱ {training.timeSlot}
          </span>
          <span className="badge bg-slate-900/80 border border-slate-700">
            ⚽ {training.field}
          </span>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <section className="card space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-slate-50">Programme de la séance</h2>
            <span className="text-xs text-slate-400">
              Coach(s) : {training.coaches.join(', ')}
            </span>
          </div>
          <ol className="space-y-3 text-sm">
            {training.exercises.map((ex, idx) => (
              <li
                key={ex.id}
                className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-900/80 px-3 py-2"
              >
                <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-sport-600/20 text-xs font-semibold text-sport-200">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <div className="font-medium text-slate-100">{ex.name}</div>
                    <span className="badge bg-slate-900/80 text-slate-300">
                      {ex.duration}
                    </span>
                  </div>
                  <div className="mt-1 text-xs text-slate-400">
                    Intensité :{' '}
                    <span className="text-emerald-300 font-medium">{ex.intensity}</span>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <aside className="space-y-3">
          <div className="card space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-slate-50">Participants</h2>
              <span className="text-xs text-slate-400">
                {confirmed} confirmés • {trials} en essai
              </span>
            </div>
            <ul className="space-y-2 text-sm">
              {training.participants.map((p) => (
                <li
                  key={p.id}
                  className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/80 px-3 py-2"
                >
                  <div>
                    <div className="font-medium text-slate-100">{p.name}</div>
                    <div className="text-xs text-slate-400">
                      {p.type} • Statut :{' '}
                      <span
                        className={
                          p.status === 'Confirmé'
                            ? 'text-emerald-300'
                            : 'text-amber-300'
                        }
                      >
                        {p.status}
                      </span>
                    </div>
                  </div>
                  <div className="text-xs text-slate-400">
                    {p.type === 'Essai' && (
                      <span className="badge bg-emerald-500/10 text-emerald-200">
                        Essai
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="card space-y-2 text-xs text-slate-400">
            <h3 className="text-sm font-semibold text-slate-50">
              Récapitulatif de la séance
            </h3>
            <p>
              • Pensez à valider les présences après la séance pour mettre à jour les
              quotas d&apos;essais.
            </p>
            <p>
              • Les essais validés pourront ensuite être convertis en inscription
              définitive au club.
            </p>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default TrainingSchedulePage
