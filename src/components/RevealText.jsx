
import { motion } from 'framer-motion';

function RevealText({ children, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: 45,
        filter: 'blur(8px)'
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: 'blur(0px)'
      }}
      viewport={{
        once: true,
        amount: 0.25
      }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {children}
    </motion.div>
  );
}

export default RevealText;
