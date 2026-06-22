import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="navbar__logo">
        <span className="navbar__logo-leaf">🌿</span> Emaan Fatima
      </NavLink>
      <nav className="navbar__links">
        <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
      </nav>
    </header>
  );
}
