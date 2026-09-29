import { NavLink, Navigate, Route, Routes } from 'react-router-dom'
import octofitLogo from '../../../docs/octofitapp-small.png'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'
import './App.css'

const sections = [
  { label: 'Activities', path: '/activities', index: '01' },
  { label: 'Leaderboard', path: '/leaderboard', index: '02' },
  { label: 'Teams', path: '/teams', index: '03' },
  { label: 'Users', path: '/users', index: '04' },
  { label: 'Workouts', path: '/workouts', index: '05' },
]

function App() {
  return (
    <div className="app-frame">
      <header className="topbar">
        <NavLink className="brand" to="/activities" aria-label="OctoFit home">
          <img src={octofitLogo} alt="" className="brand-logo" />
          <span className="brand-name">OctoFit <span>Tracker</span></span>
        </NavLink>
        <div className="topbar-status">
          <span className="status-dot" aria-hidden="true" />
          <span>Training workspace</span>
        </div>
      </header>

      <div className="app-shell">
        <aside className="sidebar" aria-label="Main navigation">
          <p className="nav-caption">Workspace</p>
          <nav className="section-nav">
            {sections.map(({ label, path, index }) => (
              <NavLink
                key={path}
                className={({ isActive }) => `section-link${isActive ? ' active' : ''}`}
                to={path}
              >
                <span className="section-index">{index}</span>
                <span>{label}</span>
              </NavLink>
            ))}
          </nav>
          <div className="sidebar-note">
            <span className="sidebar-note-label">OCTOFIT / API</span>
            <span>Movement, measured.</span>
          </div>
        </aside>

        <main className="main-content">
          <div className="page-kicker">OctoFit Tracker <span>/</span> Performance</div>
          <Routes>
            <Route path="/" element={<Navigate to="/activities" replace />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/users" element={<Users />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="*" element={<Navigate to="/activities" replace />} />
          </Routes>
        </main>
      </div>
      <footer className="app-footer">OctoFit Tracker <span>Training data, in one place.</span></footer>
    </div>
  )
}

export default App
