import ScrambledText from '../../components/common/ScrambledText';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section style={{ 
      padding: '8rem 1rem', 
      textAlign: 'center',
      position: 'relative',
      zIndex: 1,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '70vh'
    }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <h1 style={{ 
          fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', 
          fontWeight: '900', 
          marginBottom: '1.5rem', 
          lineHeight: 1.1, 
          color: 'var(--foreground)' 
        }}>
          <ScrambledText duration={.35} speed={0}>Hi, I'm Bijeesh</ScrambledText>
        </h1>
        <div style={{ 
          fontSize: 'clamp(1rem, 3vw, 1.5rem)', 
          color: 'var(--secondary)', 
          marginBottom: '3rem', 
          maxWidth: '700px', 
          margin: '0 auto 3rem',
          padding: '0 1rem'
        }}>
          <ScrambledText duration={1.5} speed={0.8} scrambleChars=".:">
            Full Stack Developer | Problem Solver dedicated to building high-quality web applications.
          </ScrambledText>
        </div>
        <Link to="/projects" style={{ display: 'inline-block' }}>
          <button style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}>
            Check out my work
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
