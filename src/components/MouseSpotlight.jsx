
import { useEffect } from 'react';

function MouseSpotlight() {
  useEffect(() => {
    const handleMouseMove = (event) => {
      document.documentElement.style.setProperty(
        '--mouse-x',
        `${event.clientX}px`
      );

      document.documentElement.style.setProperty(
        '--mouse-y',
        `${event.clientY}px`
      );
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div className="mouse-spotlight" />;
}

export default MouseSpotlight;
