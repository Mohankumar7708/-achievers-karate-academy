
import { useEffect, useState } from 'react';

function CustomCursor() {
  const [position, setPosition] = useState({
    x: -100,
    y: -100
  });

  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY
      });

      const target = event.target;

      setHovering(
        Boolean(
          target.closest(
            'a, button, .program-card, .gallery-card'
          )
        )
      );
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${hovering ? 'cursor-hover' : ''}`}
      style={{
        left: position.x,
        top: position.y
      }}
    >
      <span />
    </div>
  );
}

export default CustomCursor;
