const fakeAdminClubs = [
  { id: 1, name: 'Lyon Elite Foot', sport: 'Football', teams: 6, members: 120 },
  { id: 2, name: 'Paris 15 Hoops', sport: 'Basketball', teams: 4, members: 80 },
]

function AdminClubsPage() {
  return (
    <div className="py-6 space-y-4">
      <div className="flex items-center justify-between gap-2">
        <div>
          <h1 className="text-lg font-semibold text-slate-50">Gestion des clubs</h1>
          <p className="text-xs text-slate-400 mt-1">
            Gérez les informations de vos clubs, les créneaux d&apos;entraînements et les effectifs.
          </p>
        </div>
        <span className="badge bg-slate-900/80 border border-slate-700">
          Mode dirigeant
        </span>
      </div>

      <div className="card overflow-hidden">
        <table className="w-full text-sm border-separate border-spacing-0">
          <thead>
            <tr className="bg-slate-900/80 text-xs uppercase tracking-wide text-slate-400">
              <th className="px-4 py-2 text-left">Club</th>
              <th className="px-4 py-2 text-left">Sport</th>
              <th className="px-4 py-2 text-right hidden sm:table-cell">Équipes</th>
              <th className="px-4 py-2 text-right hidden sm:table-cell">Licenciés</th>
              <th className="px-4 py-2 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {fakeAdminClubs.map((club, idx) => (
              <tr
                key={club.id}
                className={idx % 2 === 0 ? 'bg-slate-900/40' : 'bg-slate-900/70'}
              >
                <td className="px-4 py-2">
                  <div className="font-medium text-slate-100">{club.name}</div>
                  <div className="text-xs text-slate-500">ID #{club.id}</div>
                </td>
                <td className="px-4 py-2 text-slate-200">{club.sport}</td>
                <td className="px-4 py-2 text-right text-slate-200 hidden sm:table-cell">
                  {club.teams}
                </td>
                <td className="px-4 py-2 text-right text-slate-200 hidden sm:table-cell">
                  {club.members}
                </td>
                <td className="px-4 py-2 text-right">
                  <div className="flex justify-end gap-2">
                    <a href={`/admin/clubs/${club.id}/edit`} className="btn-ghost px-3 py-1 text-xs">Modifier</a>
                    <a href={`/admin/clubs/${club.id}/attendance`} className="btn-primary px-3 py-1 text-xs">Fréquentation</a>
                    <a href={`/admin/clubs/${club.id}/planning`} className="btn-primary px-3 py-1 text-xs">Planning</a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminClubsPage
