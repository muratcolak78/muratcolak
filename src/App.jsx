import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaEnvelope, FaAward } from 'react-icons/fa'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Lebenslauf from './pages/Lebenslauf'
import Contact from './pages/Contact'
import Certificates from './pages/Certificates'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="navbar">
          <div className="nav-brand">Murat Colak</div>
          <div className="nav-links">
            <Link to="/">Startseite</Link>
            <Link to="/projekte">Projekte</Link>
            <Link to="/lebenslauf">Lebenslauf</Link>
            <Link to="/zertifikate" className="cert-nav-link">  {/* YENİ */}
              <FaAward /> Zertifikate
            </Link>
            <Link to="/kontakt">Kontakt</Link>
          </div>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projekte" element={<Projects />} />
            <Route path="/lebenslauf" element={<Lebenslauf />} />
            <Route path="/zertifikate" element={<Certificates />} />
            <Route path="/kontakt" element={<Contact />} />
          </Routes>
        </div>

        <footer>
          <div className="social-links">
            <a href="https://github.com/muratcolak78" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/murat-colak-640655232/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="mailto:colakmuratt78@gmail.com"><FaEnvelope /></a>
          </div>
          <p>© 2026 Murat Colak</p>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App