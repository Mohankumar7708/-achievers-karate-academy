
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function ParallaxBackground({ className = '' }) {
  const elementRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    ['-10%', '10%']
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1.12, 1.18, 1.12]
  );

  return (
    <motion.div
      ref={elementRef}
      className={className}
      style={{
        y,
        scale
      }}
    />
  );
}

export default ParallaxBackground;
