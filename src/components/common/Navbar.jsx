import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav style={{ width: "100%",
        background: "#fff",
        color: "black",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        borderBottom: "1px solid #ddd", }}>

      <h2 style={{ margin: 0, fontSize: "1.5rem", fontWeight: "bold" }}>ZA Tech</h2>  

      <div style={{ display: "flex", gap:"2rem"}}>
      <Link to="/" style={{ color: "black", textDecoration: "none" }}>
        Home
      </Link>
      <Link to="/faq" style={{ color: "black", textDecoration: "none" }}>
        FAQ
      </Link>
      <Link to="/wiki" style={{ color: "black", textDecoration: "none" }}>
        Wiki
      </Link>
      <Link to="/contact" style={{ color: "black", textDecoration: "none" }}>
        Contact
      </Link>
      <Link to="/sponsorship" style={{ color: "black", textDecoration: "none" }}>
        Sponsorship
      </Link>
      <Link to="/joinchannel" style={{ color: "black", textDecoration: "none" }}>
        Join
      </Link>
      <Link to="/wiki" style={{ color: "black", textDecoration: "none" }}>
        Wiki
      </Link>
      </div>
    </nav>
  );
}
