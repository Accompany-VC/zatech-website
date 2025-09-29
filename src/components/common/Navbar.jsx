import { Link } from "react-router-dom";
import "./Navbar.css"; 

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">ZA Tech</h2>

      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/faq" className="nav-link">FAQ</Link>
        <Link to="/wiki" className="nav-link">Wiki</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        <Link to="/sponsorship" className="nav-link">Sponsorship</Link>
        <Link to="/#invite-email" className="nav-link nav-link--highlight">Join</Link>
      </div>
    </nav>
  );
}
