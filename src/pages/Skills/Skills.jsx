import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import { skills } from '../../data/skills';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';

const Skills = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Animate cards staggering in
    animate('.skill-card', {
      translateY: [50, 0],
      opacity: [0, 1],
      delay: stagger(150),
      easing: 'easeOutExpo',
      duration: 800
    });

    // Animate progress bars
    // Note: animejs v4 might handle function values differently, generally it's supported.
    // However, if width targets css style, explicit update might be needed if not auto-detected.
    // v4 usually supports style properties directly.
    animate('.skill-progress-bar', {
      width: (el) => el.getAttribute('data-width'),
      easing: 'easeInOutQuad',
      duration: 1500,
      delay: stagger(200, { start: 300 })
    });
    
    // Animate badges
    animate('.skill-badge', {
        scale: [0, 1],
        opacity: [0, 1],
        delay: stagger(50, { start: 1000 }),
        // v4 easing strings usually work, spring might need checking but likely fine
        easing: 'spring(1, 80, 10, 0)'
    });

  }, []);

  return (
    <div className="container section" ref={containerRef} style={{ width: '100%' }}>
      <h2 className="section-title">My Skills</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 'clamp(1rem, 3vw, 2rem)', width: '100%' }}>
        {skills.map((category) => (
          <div key={category.category} className="skill-card" style={{ opacity: 0 }}> {/* Initial opacity 0 for animation */}
            <Card>
              <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>
                {category.category}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {category.items.map((skill) => (
                  <div key={skill.name}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <span style={{ fontWeight: '500', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>{skill.name}</span>
                      <span style={{ color: 'var(--secondary)', fontSize: 'clamp(0.85rem, 2vw, 0.95rem)' }}>{skill.level}%</span>
                    </div>
                    <div style={{ width: '100%', height: '8px', backgroundColor: 'var(--input)', borderRadius: '4px', overflow: 'hidden' }}>
                      <div 
                        className="skill-progress-bar" 
                        data-width={`${skill.level}%`} // Store target width in data attribute
                        style={{ width: '0%', height: '100%', backgroundColor: 'var(--primary)', borderRadius: '4px' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                 {category.items.map(skill => (
                   <div key={skill.name} className="skill-badge" style={{ opacity: 0 }}>
                        <Badge>{skill.name}</Badge>
                   </div>
                 ))}
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
