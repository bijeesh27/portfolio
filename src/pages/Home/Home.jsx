import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { animate, stagger } from "animejs";
import Hero from "./Hero";
import LogoLoop from "../../components/common/LogoLoop";
import ScrambledText from "../../components/common/ScrambledText";
import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";
import Button from "../../components/common/Button";
import ProjectCard from "../Projects/ProjectCard";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiPostman,
  SiFigma,
} from "react-icons/si";
import { skills } from "../../data/skills";
import { projects } from "../../data/projects";
import { EMAIL_ADDRESS, SOCIAL_LINKS } from "../../utils/constants";

const techLogos = [
  // Frontend
  {
    node: <SiHtml5 />,
    title: "HTML5",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    node: <SiCss3 />,
    title: "CSS3",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    node: <SiJavascript />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },

  // Backend
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },

  // Database
  { node: <SiMongodb />, title: "MongoDB", href: "https://mongodb.com" },
  {
    node: <SiPostgresql />,
    title: "PostgreSQL",
    href: "https://www.postgresql.org",
  },

  // Tools
  { node: <SiPostman />, title: "Postman", href: "https://www.postman.com" },
  { node: <SiFigma />, title: "Figma", href: "https://figma.com" },
];

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");

            // Trigger skill animations when Skills section becomes visible
            if (entry.target.id === "skills") {
              // Animate progress bars
              animate(".skill-progress-bar", {
                width: (el) => el.getAttribute("data-width"),
                easing: "easeInOutQuad",
                duration: 1500,
                delay: stagger(200, { start: 300 }),
              });

              // Animate badges
              animate(".skill-badge", {
                scale: [0, 1],
                opacity: [0, 1],
                delay: stagger(50, { start: 1000 }),
                easing: "spring(1, 80, 10, 0)",
              });
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append(
        "access_key",
        "5cc297e3-1521-41bf-9921-c55465de5c2a"
      );
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("message", formData.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ type: "error", message: "Failed to send message." });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Failed to send message." });
    } finally {
      setLoading(false);
    }
  };

  const inputStyles = {
    width: "100%",
    padding: "0.75rem",
    borderRadius: "var(--radius)",
    border: "1px solid var(--input)",
    backgroundColor: "var(--background)",
    color: "var(--foreground)",
    marginBottom: "1rem",
    fontFamily: "inherit",
  };

  return (
    <div
      className="home-page"
      style={{ position: "relative", zIndex: 1, width: "100%" }}
    >
      {/* Hero Section */}
      <Hero />

      {/* Tech Stack Section */}
      <section
        ref={(el) => (sectionsRef.current[0] = el)}
        className="section scroll-section"
        style={{ padding: "4rem 0", width: "100%" }}
      >
        <div
          className="container"
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          <h2
            style={{
              fontSize: "clamp(1.75rem, 5vw, 2.5rem)",
              marginBottom: "2rem",
            }}
          >
            Tech Stack
          </h2>

          <div
            style={{
              height: "clamp(100px, 20vw, 150px)",
              position: "relative",
              overflow: "hidden",
              margin: "2rem 0",
              width: "100%",
            }}
          >
            <LogoLoop
              logos={techLogos}
              speed={30}
              direction="left"
              logoHeight={50}
              gap={60}
              scaleOnHover
              fadeOut
              fadeOutColor="transparent"
              ariaLabel="Technology partners"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        ref={(el) => (sectionsRef.current[1] = el)}
        id="about"
        className="section container scroll-section"
        style={{ textAlign: "center", padding: "6rem 1rem", width: "100%" }}
      >
        <h2 className="section-title">About Me</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "clamp(2rem, 4vw, 3rem)",
            alignItems: "center",
            width: "100%",
            marginBottom: "2rem",
          }}
        >
          <div
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <img
              src="/images/profile.jpg"
              alt="Profile"
              style={{
                borderRadius: "var(--radius)",
                width: "100%",
                maxWidth: "400px",
                margin: "0 auto",
              }}
            />
          </div>
          <div style={{ width: "100%" }}>
            <Card>
              <h3
                style={{
                  fontSize: "clamp(1.25rem, 3vw, 1.5rem)",
                  marginBottom: "1rem",
                }}
              >
                My Journey
              </h3>
              <p
                style={{
                  marginBottom: "1rem",
                  lineHeight: "1.7",
                  fontSize: "clamp(0.95rem, 2vw, 1rem)",
                }}
              >
                I began my journey in web development with a strong interest in
                building reliable and scalable applications. Over time, I have
                gained hands-on experience working with modern web technologies
                to create efficient, user-focused solutions.
              </p>
              <p
                style={{
                  lineHeight: "1.7",
                  fontSize: "clamp(0.95rem, 2vw, 1rem)",
                }}
              >
                Beyond coding, I actively explore new tools, follow industry
                trends, and continuously improve my skills. I believe in
                lifelong learning and staying up to date with evolving
                technologies in the web ecosystem.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        ref={(el) => (sectionsRef.current[2] = el)}
        id="skills"
        className="section container scroll-section"
        style={{
          padding: "6rem 1rem",
          width: "100%",
        }}
      >
        <h2 className="section-title">My Skills</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "clamp(1rem, 3vw, 2rem)",
            width: "100%",
          }}
        >
          {skills.map((category) => (
            <div key={category.category}>
              <Card>
                <h3
                  style={{
                    fontSize: "clamp(1.25rem, 3vw, 1.5rem)",
                    marginBottom: "1.5rem",
                    borderBottom: "1px solid var(--border)",
                    paddingBottom: "0.5rem",
                  }}
                >
                  {category.category}
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  {category.items.map((skill) => (
                    <div key={skill.name}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: "0.25rem",
                          flexWrap: "wrap",
                          gap: "0.5rem",
                        }}
                      >
                        <span
                          style={{
                            fontWeight: "500",
                            fontSize: "clamp(0.9rem, 2vw, 1rem)",
                          }}
                        >
                          {skill.name}
                        </span>
                        <span
                          style={{
                            color: "var(--secondary)",
                            fontSize: "clamp(0.85rem, 2vw, 0.95rem)",
                          }}
                        >
                          {skill.level}%
                        </span>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          height: "8px",
                          backgroundColor: "var(--input)",
                          borderRadius: "4px",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          className="skill-progress-bar"
                          data-width={`${skill.level}%`}
                          style={{
                            width: "0%",
                            height: "100%",
                            backgroundColor: "var(--primary)",
                            borderRadius: "4px",
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    marginTop: "1.5rem",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                  }}
                >
                  {category.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="skill-badge"
                      style={{ opacity: 0 }}
                    >
                      <Badge>{skill.name}</Badge>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section
        ref={(el) => (sectionsRef.current[3] = el)}
        id="projects"
        className="section container scroll-section"
        style={{
          padding: "6rem 1rem",
          width: "100%",
        }}
      >
        <h2 className="section-title">Projects</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
            gap: "clamp(1.5rem, 3vw, 2rem)",
            width: "100%",
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={(el) => (sectionsRef.current[4] = el)}
        id="contact"
        className="section container scroll-section"
        style={{
          padding: "6rem 1rem",
          width: "100%",
        }}
      >
        <h2 className="section-title">Get In Touch</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "4rem",
          }}
        >
          <div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>
              Let's Talk
            </h3>
            <p style={{ marginBottom: "2rem", lineHeight: "1.7" }}>
              Open to new opportunities and collaborations. Feel free to reach
              out — I'd be happy to connect.
            </p>

            <div style={{ marginBottom: "2rem" }}>
              <h4 style={{ marginBottom: "0.5rem", color: "var(--primary)" }}>
                Email
              </h4>
              <a href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a>
            </div>

            <div>
              <h4 style={{ marginBottom: "0.5rem", color: "var(--primary)" }}>
                Socials
              </h4>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                {Object.entries(SOCIAL_LINKS).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textTransform: "capitalize" }}
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <Card>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "1rem" }}>
                <label
                  htmlFor="name"
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: "500",
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={inputStyles}
                />
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <label
                  htmlFor="email"
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: "500",
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={inputStyles}
                />
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <label
                  htmlFor="message"
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: "500",
                  }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  style={{ ...inputStyles, resize: "vertical" }}
                ></textarea>
              </div>

              {status && (
                <div
                  style={{
                    marginBottom: "1rem",
                    padding: "0.75rem",
                    borderRadius: "var(--radius)",
                    backgroundColor:
                      status.type === "success" ? "#dcfce7" : "#fee2e2",
                    color: status.type === "success" ? "#166534" : "#991b1b",
                  }}
                >
                  {status.message}
                </div>
              )}

              <Button
                type="submit"
                style={{ width: "100%" }}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
