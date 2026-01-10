import { useState, useEffect, useRef } from "react";
import "./SmoothFollower.css";

const SmoothFollower = () => {
  const mousePosition = useRef({ x: 0, y: 0 });
  const dotPosition = useRef({ x: 0, y: 0 });
  const borderDotPosition = useRef({ x: 0, y: 0 });

  const [renderPos, setRenderPos] = useState({
    dot: { x: 0, y: 0 },
    border: { x: 0, y: 0 },
  });
  const [isHovering, setIsHovering] = useState(false);

  const DOT_SMOOTHNESS = 0.2;
  const BORDER_DOT_SMOOTHNESS = 0.1;

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove);

    // We need to re-attach listeners if the DOM changes reasonably often, 
    // or use event delegation. For simplicity in this specific request, 
    // we'll stick to the provided logic but maybe attach to a ref or body delegation?
    // The provided logic selects all current elements. In a SPA, elements appear/disappear.
    // Better approach: use event delegation on document.body
    
    const handleMouseOver = (e) => {
      // Check if the target is interactive
      const target = e.target;
      if (target.matches('a, button, input, textarea, select, [role="button"]')) {
        setIsHovering(true);
      } else {
        // Also check if parent is interactive (e.g. icon inside button)
        const closestInteractive = target.closest('a, button, input, textarea, select, [role="button"]');
        if (closestInteractive) {
            setIsHovering(true);
        } else {
            setIsHovering(false);
        }
      }
    };
    
    // Instead of adding listeners to specific elements, we listen to mouseover on document
    // This handles dynamically added elements in React
    document.addEventListener("mouseover", handleMouseOver);

    // Animation function for smooth movement
    let animationId;
    const animate = () => {
      const lerp = (start, end, factor) => {
        return start + (end - start) * factor;
      };

      dotPosition.current.x = lerp(
        dotPosition.current.x,
        mousePosition.current.x,
        DOT_SMOOTHNESS
      );
      dotPosition.current.y = lerp(
        dotPosition.current.y,
        mousePosition.current.y,
        DOT_SMOOTHNESS
      );

      borderDotPosition.current.x = lerp(
        borderDotPosition.current.x,
        mousePosition.current.x,
        BORDER_DOT_SMOOTHNESS
      );
      borderDotPosition.current.y = lerp(
        borderDotPosition.current.y,
        mousePosition.current.y,
        BORDER_DOT_SMOOTHNESS
      );

      setRenderPos({
        dot: { x: dotPosition.current.x, y: dotPosition.current.y },
        border: {
          x: borderDotPosition.current.x,
          y: borderDotPosition.current.y,
        },
      });

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    // Clean up
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="smooth-follower-container">
      <div
        className="follower-dot"
        style={{
          left: `${renderPos.dot.x}px`,
          top: `${renderPos.dot.y}px`,
        }}
      />

      <div
        className="follower-border"
        style={{
          width: isHovering ? "44px" : "28px",
          height: isHovering ? "44px" : "28px",
          left: `${renderPos.border.x}px`,
          top: `${renderPos.border.y}px`,
        }}
      />
    </div>
  );
};

export default SmoothFollower;
