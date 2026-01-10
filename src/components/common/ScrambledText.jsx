import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const ScrambledText = ({ 
  children, 
  className, 
  duration = 1.2, 
  speed = 0.5, 
  scrambleChars = '!<>-_\\/[]{}—=+*^?#________',
  radius = null // If provided, we'll render on a circular path
}) => {
  const textRef = useRef(null);
  const [displayText, setDisplayText] = useState('');
  const text = typeof children === 'string' ? children : '';

  useEffect(() => {
    if (!text) return;

    let chars = scrambleChars.split('');
    let targetText = text;
    let length = targetText.length;
    let currentText = Array(length).fill('');
    
    const obj = { progress: 0 };
    
    gsap.to(obj, {
      progress: 1,
      duration: duration,
      ease: "none",
      onUpdate: () => {
        const revealCount = Math.floor(obj.progress * length);
        const result = targetText.split('').map((char, i) => {
          if (i < revealCount) return char;
          if (char === ' ') return ' ';
          return chars[Math.floor(Math.random() * chars.length)];
        });
        setDisplayText(result.join(''));
      },
      onComplete: () => {
        setDisplayText(targetText);
      }
    });

  }, [text, duration, scrambleChars]);

  if (radius) {
    // Render as circular SVG text
    const circumference = 2 * Math.PI * radius;
    return (
      <svg className={className} width={radius * 2 + 20} height={radius * 2 + 20} viewBox={`0 0 ${radius * 2 + 20} ${radius * 2 + 20}`}>
        <defs>
          <path
            id="textPath"
            d={`M ${radius + 10}, ${10} a ${radius},${radius} 0 1,1 0,${radius * 2} a ${radius},${radius} 0 1,1 0,-${radius * 2}`}
          />
        </defs>
        <text fill="currentColor">
          <textPath href="#textPath">
            {displayText}
          </textPath>
        </text>
      </svg>
    );
  }

  return (
    <p ref={textRef} className={className}>
      {displayText}
    </p>
  );
};

export default ScrambledText;
