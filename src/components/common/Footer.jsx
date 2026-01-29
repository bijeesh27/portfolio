import React from "react";
import {
  AUTHOR_NAME,
  SOCIAL_LINKS,
  EMAIL_ADDRESS,
  APP_NAME,
} from "../../utils/constants";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();

    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 64;
      const sectionTop = section.offsetTop - navbarHeight;
      window.scrollTo({ top: sectionTop, behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>{APP_NAME}</h2>
          <p>
            Building digital experiences with passion and precision. Focused on
            creating impactful solutions that bridge the gap between people and
            technology.
          </p>
        </div>

        <div className="footer-links-group">
          <h3>Quick Links</h3>
          <div className="footer-links">
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
        </div>

        <div className="footer-links-group">
          <h3>Get in Touch</h3>
          <div className="footer-links">
            <a href={`mailto:${EMAIL_ADDRESS}`}>
              <FaEnvelope style={{ marginRight: "8px" }} />
              {EMAIL_ADDRESS}
            </a>
            <p
              style={{
                color: "var(--secondary)",
                fontSize: "0.95rem",
                marginTop: "0.5rem",
              }}
            >
              Available for freelance and full-time opportunities.
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} {AUTHOR_NAME}. All rights reserved.
        </p>

        <div className="footer-socials">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
