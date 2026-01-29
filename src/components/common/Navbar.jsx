import { useState } from "react";
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

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    closeMobileMenu();

    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 64; // Height of the sticky navbar
      const sectionTop = section.offsetTop - navbarHeight;
      window.scrollTo({ top: sectionTop, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="navbar">
        <div
          className="navbar-brand"
          onClick={(e) => scrollToSection(e, "home")}
        >
          {APP_NAME}
        </div>

        <div className="navbar-content">
          <div className="nav-links">
            <a href="#home" onClick={(e) => scrollToSection(e, "home")}>
              Home
            </a>
            <a href="#about" onClick={(e) => scrollToSection(e, "about")}>
              About
            </a>
            <a href="#skills" onClick={(e) => scrollToSection(e, "skills")}>
              Skills
            </a>
            <a href="#projects" onClick={(e) => scrollToSection(e, "projects")}>
              Projects
            </a>
            <a href="#contact" onClick={(e) => scrollToSection(e, "contact")}>
              Contact
            </a>
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
        <a href="#home" onClick={(e) => scrollToSection(e, "home")}>
          Home
        </a>
        <a href="#about" onClick={(e) => scrollToSection(e, "about")}>
          About
        </a>
        <a href="#skills" onClick={(e) => scrollToSection(e, "skills")}>
          Skills
        </a>
        <a href="#projects" onClick={(e) => scrollToSection(e, "projects")}>
          Projects
        </a>
        <a href="#contact" onClick={(e) => scrollToSection(e, "contact")}>
          Contact
        </a>
      </div>
    </>
  );
};

export default Navbar;
