import { Routes, Route, NavLink } from 'react-router-dom'
import PublicMapPage from './pages/PublicMapPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import CreateClubPage from './pages/CreateClubPage.jsx'
import AdminClubsPage from './pages/AdminClubsPage.jsx'
import AdminAttendancePage from './pages/AdminAttendancePage.jsx'
import AdminClubEditPage from './pages/AdminClubEditPage.jsx'
import AdminClubPlanningPage from './pages/AdminClubPlanningPage.jsx'
import AdminBackofficePage from './pages/AdminBackofficePage.jsx'
import AdminClubMembersPage from './pages/AdminClubMembersPage.jsx'
import AdminMemberEditPage from './pages/AdminMemberEditPage.jsx'
import AdminMemberRemovePage from './pages/AdminMemberRemovePage.jsx'
import AdminPlanningEditPage from './pages/AdminPlanningEditPage.jsx'
import TrainingSchedulePage from './pages/TrainingSchedulePage.jsx'
import TrainingSignupPage from './pages/TrainingSignupPage.jsx'
import TrialTrainingSignupPage from './pages/TrialTrainingSignupPage.jsx'

function App() {
  return (
    <div className="sport-gradient-bg min-h-screen flex flex-col">
      <header className="border-b border-slate-800/80 bg-slate-900/60 backdrop-blur sticky top-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-tr from-sport-500 to-emerald-500 shadow-sport">
              <span className="text-lg font-black text-slate-950">SC</span>
            </div>
            <div>
              <div className="text-sm font-semibold tracking-tight text-slate-100">
                Sport Club Planner
              </div>
              <div className="text-xs text-slate-400">
                Planification d&apos;entraînements & essais
              </div>
            </div>
          </div>

          <nav className="flex items-center gap-4 text-sm">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-xl transition ${
                  isActive
                    ? 'bg-slate-800 text-sport-100'
                    : 'text-slate-200 hover:bg-slate-800/80'
                }`
              }
            >
              Carte
            </NavLink>
            <NavLink
              to="/clubs/new"
              className={({ isActive }) =>
                `hidden sm:inline-flex px-3 py-1.5 rounded-xl transition ${
                  isActive
                    ? 'bg-slate-800 text-sport-100'
                    : 'text-slate-200 hover:bg-slate-800/80'
                }`
              }
            >
              Créer un club
            </NavLink>
            <NavLink
              to="/admin/clubs"
              className={({ isActive }) =>
                `hidden sm:inline-flex px-3 py-1.5 rounded-xl transition ${
                  isActive
                    ? 'bg-slate-800 text-sport-100'
                    : 'text-slate-200 hover:bg-slate-800/80'
                }`
              }
            >
              Admin clubs
            </NavLink>
            <div className="hidden sm:flex h-5 w-px bg-slate-800" />
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-xl text-xs font-medium uppercase tracking-wide transition ${
                  isActive
                    ? 'bg-slate-100 text-slate-900'
                    : 'border border-slate-700 text-slate-100 hover:bg-slate-800/80'
                }`
              }
            >
              Connexion
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wide transition ${
                  isActive
                    ? 'bg-sport-500 text-slate-950'
                    : 'bg-sport-600 text-slate-950 hover:bg-sport-500 shadow-sport'
                }`
              }
            >
              Inscription
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:py-6">
          <Routes>
            <Route path="/" element={<PublicMapPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/clubs/new" element={<CreateClubPage />} />
            <Route path="/admin/clubs" element={<AdminClubsPage />} />
            <Route path="/admin/clubs/:clubId/attendance" element={<AdminAttendancePage />} />
            <Route path="/admin/clubs/:clubId/edit" element={<AdminClubEditPage />} />
            <Route path="/admin/clubs/:clubId/planning" element={<AdminClubPlanningPage />} />
            <Route path="/admin/clubs/:clubId/planning/:slotId" element={<AdminPlanningEditPage />} />
            <Route path="/admin/clubs/:clubId/planning/:slotId/edit" element={<AdminPlanningEditPage />} />
            <Route path="/admin/clubs/:clubId/members" element={<AdminClubMembersPage />} />
            <Route path="/admin/clubs/:clubId/members/:memberId/edit" element={<AdminMemberEditPage />} />
            <Route path="/admin/clubs/:clubId/members/:memberId/remove" element={<AdminMemberRemovePage />} />
            <Route path="/admin/backoffice" element={<AdminBackofficePage />} />
            <Route path="/trainings/:trainingId" element={<TrainingSchedulePage />} />
            <Route path="/trainings/:trainingId/signup" element={<TrainingSignupPage />} />
            <Route
              path="/trial/trainings/:trainingId/signup"
              element={<TrialTrainingSignupPage />}
            />
          </Routes>
        </div>
      </main>

      <footer className="border-t border-slate-800/80 bg-slate-950/90">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} Sport Club Planner</span>
          <span>Interface inspirée des dashboards sportifs</span>
        </div>
      </footer>
    </div>
  )
}

export default App
