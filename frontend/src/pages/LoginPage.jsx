import { Link } from 'react-router-dom'

function LoginPage() {
  return (
    <div className="flex items-center justify-center py-6">
      <div className="card w-full max-w-md">
        <div className="mb-4 text-center">
          <h1 className="text-lg font-semibold text-slate-50">Connexion</h1>
          <p className="text-xs text-slate-400 mt-1">
            Accédez à votre espace joueur ou dirigeant pour gérer vos entraînements.
          </p>
        </div>
        <form className="space-y-4">
          <div>
            <label className="label">Adresse e-mail</label>
            <input
              type="email"
              name="email"
              autoComplete="email"
              className="input"
              placeholder="vous@example.com"
            />
          </div>
          <div>
            <label className="label">Mot de passe</label>
            <input
              type="password"
              name="password"
              autoComplete="current-password"
              className="input"
            />
          </div>
          <div className="flex items-center justify-between text-xs text-slate-400">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="h-3 w-3 rounded border-slate-600 bg-slate-900" />
              <span>Se souvenir de moi</span>
            </label>
            <button type="button" className="text-sport-300 hover:text-sport-100">
              Mot de passe oublié ?
            </button>
          </div>
          <button type="submit" className="btn-primary w-full justify-center">
            Se connecter
          </button>
        </form>
        <p className="mt-4 text-center text-xs text-slate-400">
          Pas encore de compte ?{' '}
          <Link
            to="/register"
            className="font-semibold text-sport-300 hover:text-sport-100"
          >
            Créer un compte
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LoginPage
