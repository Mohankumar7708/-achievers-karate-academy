
const particles = Array.from({ length: 24 }, (_, index) => ({
  id: index,
  left: `${(index * 37 + 13) % 100}%`,
  top: `${(index * 53 + 7) % 100}%`,
  delay: `${(index % 8) * -0.7}s`,
  duration: `${5 + (index % 6)}s`,
  size: `${2 + (index % 3)}px`
}));

function FloatingParticles() {
  return (
    <div className="particles-container" aria-hidden="true">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="particle"
          style={{
            left: particle.left,
            top: particle.top,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
            width: particle.size,
            height: particle.size
          }}
        />
      ))}
    </div>
  );
}

export default FloatingParticles;
