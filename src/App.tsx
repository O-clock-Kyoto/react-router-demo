import { Link, NavLink, Route, Routes } from "react-router"
import "./App.css"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"

function App() {
  const bigTitle = "Welcome aboard !!!"

  return (
    <>
      {/* Les éléments disponibles sur TOUTES mes pages (le layout) */}
      <header className="header">
        {/* link va remplacer le a  et l'attribut "to" va remplacer le href */}
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact
        </NavLink>
      </header>
      <main>
        {/* Ce qui est spécifique à UNE SEULE PAGE */}
        <Routes>
          <Route path="/" element={<Home bigTitle={bigTitle} />} />
          <Route path="/contact" element={<Contact />} />
          {/* Toujours à la fin de la déclaration des routes ! */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer>
        <Link to="/contact">Contact</Link> legal confidentialite
      </footer>
    </>
  )
}

export default App
