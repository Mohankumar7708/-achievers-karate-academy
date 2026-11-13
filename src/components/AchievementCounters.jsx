
import { useEffect, useRef, useState } from 'react';

function Counter({ value, suffix = '+' }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStarted(true);
        observer.disconnect();
      }
    }, { threshold: 0.5 });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const duration = 1600;
    const startTime = performance.now();

    let frame;

    const animate = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);

      setCount(Math.floor(value * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [started, value]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

function AchievementCounters() {
  const achievements = [
    { value: 10, suffix: '+', label: 'Years of Excellence' },
    { value: 500, suffix: '+', label: 'Students Trained' },
    { value: 50, suffix: '+', label: 'Championships' },
    { value: 100, suffix: '%', label: 'Commitment' }
  ];

  return (
    <section className="achievement-counters">
      <div className="achievement-grid">
        {achievements.map((item) => (
          <div className="achievement-item" key={item.label}>
            <h3>
              <Counter value={item.value} suffix={item.suffix} />
            </h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AchievementCounters;
