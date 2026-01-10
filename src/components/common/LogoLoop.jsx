import React, { useEffect, useRef } from 'react';
import './LogoLoop.css';

const LogoLoop = ({ 
  logos = [], 
  speed = 40, 
  direction = 'left', 
  logoHeight = 48, 
  gap = 40, 
  hoverSpeed = null, 
  scaleOnHover = false, 
  fadeOut = false, 
  fadeOutColor = '#ffffff',
  ariaLabel = "Logo showcase"
}) => {
  const scrollRef = useRef(null);

  // We duplicate the logos to ensure a seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  useEffect(() => {
    if (!scrollRef.current) return;
    
    // Setting variables for CSS animations
    scrollRef.current.style.setProperty('--loop-speed', `${speed}s`);
    scrollRef.current.style.setProperty('--loop-gap', `${gap}px`);
    if (hoverSpeed !== null) {
      scrollRef.current.style.setProperty('--hover-speed', `${hoverSpeed}s`);
    }
  }, [speed, gap, hoverSpeed]);

  const isVertical = direction === 'up' || direction === 'down';

  return (
    <div 
      className={`logo-loop-container ${isVertical ? 'vertical' : 'horizontal'}`} 
      style={{ height: isVertical ? '100%' : `${logoHeight + 40}px`, '--mask-color': fadeOutColor }}
      aria-label={ariaLabel}
    >
      {fadeOut && <div className={`fade-mask ${isVertical ? 'fade-mask-v' : ''}`} />}
      <div 
        ref={scrollRef}
        className={`logo-loop-track ${direction} ${scaleOnHover ? 'scale-on-hover' : ''}`}
        style={{ '--item-height': `${logoHeight}px` }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div key={index} className="logo-item">
            {logo.href ? (
              <a href={logo.href} target="_blank" rel="noopener noreferrer" title={logo.title}>
                {logo.src ? <img src={logo.src} alt={logo.alt || logo.title} /> : logo.node}
              </a>
            ) : (
              <span title={logo.title}>
                {logo.src ? <img src={logo.src} alt={logo.alt || logo.title} /> : logo.node}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoLoop;
