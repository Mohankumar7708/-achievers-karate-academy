
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const duration = 2200;
    const interval = 25;
    const increment = (100 * interval) / duration;

    const timer = setInterval(() => {
      setProgress((previous) => {
        const next = Math.min(previous + increment, 100);

        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => setFinished(true), 350);
        }

        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (finished) {
      const timer = setTimeout(onComplete, 750);
      return () => clearTimeout(timer);
    }
  }, [finished, onComplete]);

  return (
    <AnimatePresence>
      {!finished && (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="loading-logo"
            initial={{ opacity: 0, scale: 0.6, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span>A</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            ACHIEVERS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            KARATE ACADEMY
          </motion.p>

          <div className="loading-progress">
            <motion.div
              className="loading-progress-fill"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          <div className="loading-bottom">
            <span>DISCIPLINE. STRENGTH. HONOUR.</span>
            <span>{Math.round(progress)}%</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoadingScreen;
