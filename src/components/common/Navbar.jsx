import { Link, useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import "./Navbar.css"; 


export default function Navbar({ className }) {
  const navigate = useNavigate();
  const location = useLocation();

  // Helper to navigate to home and scroll to section
  const handleSectionNav = (sectionId) => (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      // Already on home, just scroll
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        // fallback: set hash, browser will scroll
        window.location.hash = `#${sectionId}`;
      }
    } else {
      // Go to home, then scroll after navigation
      navigate(`/?scrollTo=${sectionId}`);
    }
  };

  return (
    <nav className={`navbar ${className || ""}`.trim()}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">ZATech</Link>

        <div className="navbar-links">
          <Link
            to="/"
            className="nav-link"
            onClick={e => {
              if (location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            Home
          </Link>
          <Link to="/report" className="nav-link">Report</Link>
          <a href="#about" className="nav-link" onClick={handleSectionNav("about")}>About</a>
          <a href="#faqs" className="nav-link" onClick={handleSectionNav("faqs")}>FAQ</a>
          <a href="https://wiki.zatech.co.za" target="_blank" rel="noreferrer" className="nav-link">Wiki</a>
          <a href="https://zatech.co.za/coc" target="_blank" rel="noreferrer" className="nav-link">Code of Conduct</a>
        </div>

        <a 
          href="mailto:invite@zatech.co.za" 
          className="request-invite-btn"
        >
          Request Invite →
        </a>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  className: PropTypes.string,
};