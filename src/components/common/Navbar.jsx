import { useState } from "react";
import { Link } from "react-router-dom";
import useTheme from "../../hooks/useTheme";
import { APP_NAME } from "../../utils/constants";
import "./Navbar.css";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-brand">
          {APP_NAME}
        </Link>

        <div className="navbar-content">
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </div>

          {/* <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'light' ? '🌙' : '☀️'}
          </button> */}

          <button onClick={toggleMobileMenu} className="mobile-menu-button">
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <Link to="/" onClick={closeMobileMenu}>
          Home
        </Link>
        <Link to="/about" onClick={closeMobileMenu}>
          About
        </Link>
        <Link to="/skills" onClick={closeMobileMenu}>
          Skills
        </Link>
        <Link to="/projects" onClick={closeMobileMenu}>
          Projects
        </Link>
        <Link to="/contact" onClick={closeMobileMenu}>
          Contact
        </Link>
      </div>
    </>
  );
};

export default Navbar;
