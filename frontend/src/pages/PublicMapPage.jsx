import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const fakeClubs = [
  {
    id: 1,
    name: 'Lyon Elite Foot',
    city: 'Lyon',
    lat: 45.764,
    lng: 4.8357,
    sport: 'Football',
    federation: 'FFF',
    level: 'Régional',
  },
  {
    id: 2,
    name: 'Paris 15 Hoops',
    city: 'Paris',
    lat: 48.8414,
    lng: 2.298,
    sport: 'Basketball',
    federation: 'FFBB',
    level: 'Loisir',
  },
]

function PublicMapPage() {
  const [clubs, setClubs] = useState([])
  const [filterSport, setFilterSport] = useState('all')

  useEffect(() => {
    // TODO: remplacer par un fetch vers l'API Laravel
    setClubs(fakeClubs)
  }, [])

  const filteredClubs =
    filterSport === 'all'
      ? clubs
      : clubs.filter((c) => c.sport.toLowerCase() === filterSport)

  return (
    <div className="grid gap-4 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
      <section className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <div>
            <h1 className="text-lg font-semibold text-slate-50">
              Explorer les clubs sur la carte
            </h1>
            <p className="text-sm text-slate-400">
              Repérez les clubs proches, découvrez les sports proposés et réservez un entraînement d&apos;essai.
            </p>
          </div>
          <div className="hidden sm:flex flex-col items-end text-xs text-slate-400">
            <span className="badge bg-slate-800/80">
              <span className="mr-1 inline-block h-2 w-2 rounded-full bg-emerald-400" />
              Essais gratuits : 3 maximum
            </span>
          </div>
        </div>

        <div className="card h-[500px] p-0 overflow-hidden">
          <MapContainer
            center={[46.5, 2.5]}
            zoom={6}
            className="h-full w-full rounded-2xl"
          >
            <TileLayer
              attribution='&copy; OpenStreetMap contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {filteredClubs.map((club) => (
              <Marker key={club.id} position={[club.lat, club.lng]}>
                <Popup>
                  <div className="space-y-1 text-sm">
                    <div className="font-semibold">{club.name}</div>
                    <div className="text-xs text-slate-600">
                      {club.city} • {club.sport} • {club.level}
                    </div>
                    <div className="text-xs text-slate-500">
                      Fédération : {club.federation}
                    </div>
                    <div className="mt-2 flex flex-col gap-1">
                      <Link
                        to={`/trainings/${club.id}`}
                        className="text-xs font-medium text-sport-700 hover:underline"
                      >
                        Voir les entraînements
                      </Link>
                      <Link
                        to={`/trial/trainings/${club.id}/signup`}
                        className="text-xs font-medium text-emerald-700 hover:underline"
                      >
                        S&apos;inscrire à un entraînement d&apos;essai
                      </Link>
                    </div>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </section>

      <aside className="space-y-3">
        <div className="card">
          <h2 className="text-sm font-semibold text-slate-50 flex items-center gap-2">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-sport-600/20 text-sport-300 text-xs font-bold">
              ⚽
            </span>
            Filtres rapides
          </h2>
          <p className="mt-1 text-xs text-slate-400">
            Filtrez par type de sport pour cibler les clubs qui vous intéressent.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              className={`px-3 py-1 rounded-full text-xs border ${
                filterSport === 'all'
                  ? 'border-sport-500 bg-sport-600/20 text-sport-100'
                  : 'border-slate-700 bg-slate-900/80 text-slate-300 hover:border-slate-500'
              }`}
              onClick={() => setFilterSport('all')}
            >
              Tous les sports
            </button>
            <button
              className={`px-3 py-1 rounded-full text-xs border ${
                filterSport === 'football'
                  ? 'border-sport-500 bg-sport-600/20 text-sport-100'
                  : 'border-slate-700 bg-slate-900/80 text-slate-300 hover:border-slate-500'
              }`}
              onClick={() => setFilterSport('football')}
            >
              Football
            </button>
            <button
              className={`px-3 py-1 rounded-full text-xs border ${
                filterSport === 'basketball'
                  ? 'border-sport-500 bg-sport-600/20 text-sport-100'
                  : 'border-slate-700 bg-slate-900/80 text-slate-300 hover:border-slate-500'
              }`}
              onClick={() => setFilterSport('basketball')}
            >
              Basket
            </button>
          </div>
        </div>

        <div className="card space-y-3">
          <h2 className="text-sm font-semibold text-slate-50">Clubs mis en avant</h2>
          <ul className="space-y-2 text-sm">
            {clubs.map((club) => (
              <li
                key={club.id}
                className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/80 px-3 py-2"
              >
                <div>
                  <div className="font-medium text-slate-100">{club.name}</div>
                  <div className="text-xs text-slate-400">
                    {club.city} • {club.sport}
                  </div>
                </div>
                <Link
                  to={`/trial/trainings/${club.id}/signup`}
                  className="text-xs font-semibold text-sport-300 hover:text-sport-100"
                >
                  Essai
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="card space-y-2">
          <h2 className="text-sm font-semibold text-slate-50">Compte joueur</h2>
          <p className="text-xs text-slate-400">
            Créez un compte pour réserver vos entraînements en un clic, suivre vos essais
            et gérer vos clubs favoris.
          </p>
          <div className="flex gap-2">
            <Link to="/register" className="btn-primary flex-1 justify-center">
              Créer un compte
            </Link>
            <Link to="/login" className="btn-ghost flex-1 justify-center text-xs">
              J&apos;ai déjà un compte
            </Link>
          </div>
        </div>
      </aside>
    </div>
  )
}

export default PublicMapPage
