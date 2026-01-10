import { useEffect, useRef } from 'react';
import './CursorBackground.css';

const CursorBackground = () => {
  const blobRef = useRef(null);

  useEffect(() => {
    const blob = blobRef.current;
    if (!blob) return;

    let requestID;

    const handleMouseMove = (e) => {
      // Use requestAnimationFrame for smoother performance
      if (requestID) cancelAnimationFrame(requestID);
      
      requestID = requestAnimationFrame(() => {
        const { clientX, clientY } = e;
        
        // Simple direct follow, or add lag if desired. 
        // For "follow the cursor" effectively:
        blob.style.left = `${clientX}px`;
        blob.style.top = `${clientY}px`;
        
        // Alternatively, use transform for better performance if not already centered by CSS
        // But CSS has transform: translate(-50%, -50%), so left/top update works well to center it
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (requestID) cancelAnimationFrame(requestID);
    };
  }, []);

  return (
    <div className="cursor-background">
      <div ref={blobRef} className="cursor-blob" />
    </div>
  );
};

export default CursorBackground;
