import Hero from './Hero';
import { Link } from 'react-router-dom';
import LogoLoop from '../../components/common/LogoLoop';
import ScrambledText from '../../components/common/ScrambledText';
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

const techLogos = [
  // Frontend
  { node: <SiHtml5 />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { node: <SiCss3 />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },

  // Backend
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },

  // Database
  { node: <SiMongodb />, title: "MongoDB", href: "https://mongodb.com" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },

  // Tools
  { node: <SiPostman />, title: "Postman", href: "https://www.postman.com" },
  { node: <SiFigma />, title: "Figma", href: "https://figma.com" },
];

const Home = () => {
  return (
    <div className="home-page" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
      <Hero />
      
      <section className="section" style={{ padding: '4rem 0', width: '100%' }}>
        <div className="container" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', marginBottom: '2rem' }}>Tech Stack</h2>
          
          <div style={{ height: 'clamp(100px, 20vw, 150px)', position: 'relative', overflow: 'hidden', margin: '2rem 0', width: '100%' }}>
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

      <section className="section container" style={{ textAlign: 'center', padding: '6rem 1rem', width: '100%' }}>
        <h2 className="section-title">About Me</h2>
        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto', 
          fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', 
          lineHeight: 1.6,
          padding: '0 1rem'
        }}>
          <ScrambledText
            className="about-text"
            duration={2}
            speed={0.5}
            scrambleChars=".:!"
          >
           I am a Full Stack Developer with a strong focus on performance, usability, and clean architecture. I build modern web applications that balance reliable functionality with visually engaging user experiences.
          </ScrambledText>
        </div>
        
        <div style={{ 
          display: 'flex', 
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '1.5rem', 
          justifyContent: 'center', 
          marginTop: '4rem',
          padding: '0 1rem'
        }}>
          <Link to="/projects">
            <button>View Projects</button>
          </Link>
          <Link to="/contact">
            <button style={{ backgroundColor: 'transparent', border: '1px solid var(--foreground)', color: 'var(--foreground)' }}>
              Contact Me
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
