function CreateClubPage() {
  return (
    <div className="py-6">
      <div className="card max-w-3xl mx-auto">
        <div className="mb-4 flex items-start justify-between gap-2">
          <div>
            <h1 className="text-lg font-semibold text-slate-50">Créer un nouveau club</h1>
            <p className="text-xs text-slate-400 mt-1">
              Référencez votre structure sportive pour proposer des entraînements et gérer les essais.
            </p>
          </div>
          <span className="badge bg-sport-600/20 text-sport-100">
            🏟️ Espace dirigeant
          </span>
        </div>

        <form className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="label">Nom du club</label>
            <input type="text" className="input" placeholder="Olympique Villeurbanne" />
          </div>
          <div>
            <label className="label">Ville</label>
            <input type="text" className="input" placeholder="Villeurbanne" />
          </div>
          <div>
            <label className="label">Sport</label>
            <input type="text" className="input" placeholder="Football, Basket..." />
          </div>
          <div>
            <label className="label">Fédération</label>
            <input type="text" className="input" placeholder="FFF, FFBB..." />
          </div>
          <div className="md:col-span-2">
            <label className="label">Adresse complète</label>
            <input type="text" className="input" placeholder="Rue, code postal, ville" />
          </div>
          <div>
            <label className="label">Latitude</label>
            <input type="number" step="0.000001" className="input" />
          </div>
          <div>
            <label className="label">Longitude</label>
            <input type="number" step="0.000001" className="input" />
          </div>
          <div className="md:col-span-2">
            <label className="label">Description rapide</label>
            <textarea
              rows={3}
              className="input resize-none"
              placeholder="Catégories accueillies, niveau de compétition, ambiance, etc."
            />
          </div>
          <div className="md:col-span-2 flex items-center justify-between">
            <div className="text-xs text-slate-400">
              Vous pourrez ajouter les créneaux d&apos;entraînements après la création du club.
            </div>
            <button type="submit" className="btn-primary">
              Enregistrer le club
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateClubPage
