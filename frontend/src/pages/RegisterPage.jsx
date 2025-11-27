import { Link } from 'react-router-dom'

function RegisterPage() {
  return (
    <div className="flex items-center justify-center py-6">
      <div className="card w-full max-w-xl">
        <div className="mb-4 flex items-start justify-between gap-2">
          <div>
            <h1 className="text-lg font-semibold text-slate-50">Créer un compte</h1>
            <p className="text-xs text-slate-400 mt-1">
              Créez votre profil joueur ou dirigeant pour planifier vos entraînements et suivre vos essais.
            </p>
          </div>
          <div className="badge bg-slate-800/90">
            <span className="mr-1 text-emerald-400">●</span> 3 essais gratuits
          </div>
        </div>
        <form className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label className="label">Nom complet</label>
            <input type="text" name="name" className="input" placeholder="Jean Dupont" />
          </div>
          <div className="sm:col-span-1">
            <label className="label">Adresse e-mail</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="vous@example.com"
            />
          </div>
          <div className="sm:col-span-1">
            <label className="label">Mot de passe</label>
            <input type="password" name="password" className="input" />
          </div>
          <div className="sm:col-span-1">
            <label className="label">Confirmer le mot de passe</label>
            <input type="password" name="password_confirmation" className="input" />
          </div>
          <div className="sm:col-span-2">
            <label className="label">Rôle</label>
            <select name="role" className="input">
              <option value="player">Joueur / Parent</option>
              <option value="coach">Coach</option>
              <option value="manager">Dirigeant de club</option>
            </select>
          </div>
          <div className="sm:col-span-2 flex items-center gap-2 text-xs text-slate-400">
            <input type="checkbox" className="h-3 w-3 rounded border-slate-600 bg-slate-900" />
            <span>
              J&apos;accepte les conditions d&apos;utilisation et la charte du club.
            </span>
          </div>
          <div className="sm:col-span-2">
            <button type="submit" className="btn-primary w-full justify-center">
              Créer mon compte
            </button>
          </div>
        </form>
        <p className="mt-4 text-center text-xs text-slate-400">
          Déjà inscrit ?{' '}
          <Link to="/login" className="font-semibold text-sport-300 hover:text-sport-100">
            Se connecter
          </Link>
        </p>
      </div>
    </div>
  )
}

export default RegisterPage
