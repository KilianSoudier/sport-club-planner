import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useEffect, useState } from 'react'

// Plus tard, ces données viendront de l'API Laravel.
// Pour l'instant, c'est juste pour visualiser la carte.
const fakeClubs = [
  {
    id: 1,
    name: 'Club de Foot Lyon',
    lat: 45.764,
    lng: 4.8357,
    sport: 'Football',
    federation: 'FFF',
  },
  {
    id: 2,
    name: 'Basket Paris 15',
    lat: 48.8414,
    lng: 2.298,
    sport: 'Basketball',
    federation: 'FFBB',
  },
]

function App() {
  const [clubs, setClubs] = useState([])

  useEffect(() => {
    // TODO: remplacer par un fetch vers l'API Laravel
    setClubs(fakeClubs)
  }, [])

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <MapContainer
        center={[46.5, 2.5]} // centre France
        zoom={6}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />

        {clubs.map((club) => (
          <Marker key={club.id} position={[club.lat, club.lng]}>
            <Popup>
              <strong>{club.name}</strong>
              <br />
              Sport : {club.sport}
              <br />
              Fédération : {club.federation}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

export default App
