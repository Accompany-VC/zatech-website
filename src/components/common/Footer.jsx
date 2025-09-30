import React from "react";
import PropTypes from "prop-types";
import { Youtube, Linkedin } from "lucide-react";
import "./Footer.css";

function Footer({ className }) {
  return (
    <footer className={`main-footer ${className || ""}`.trim()}>
      {/* Top Row */}
      <div className="footer-top">
        <div className="footer-container">
          {/* Brand */}
          <div className="footer-brand">ZATech</div>

          {/* Nav */}
          <nav className="footer-nav" aria-label="Footer Navigation">
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#faq">FAQ</a>
            <a
              href="https://wiki.zatech.co.za"
              target="_blank"
              rel="noreferrer"
            >
              Wiki
            </a>
            <a
              href="https://zatech.co.za/coc"
              target="_blank"
              rel="noreferrer"
            >
              Code of Conduct
            </a>
          </nav>

          {/* Socials */}
          <div className="footer-socials" aria-label="Social Media Links">
            <a
              href="https://www.youtube.com/@zatechslack2072"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              <Youtube size={24} />
            </a>
            <a
              href="https://www.linkedin.com/company/zatech-slack/about/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="footer-divider" />

      {/* Bottom Row */}
      <div className="footer-bottom">
        <p>© 2025 ZATech. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#cookies">Cookies Settings</a>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;