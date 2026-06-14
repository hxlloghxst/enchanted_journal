import React, { useEffect, useState } from 'react';
import './FallingParticles.css';

export default function FallingParticles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // This timer fires repeatedly to create the "shower" effect
    const interval = setInterval(() => {
      const id = Math.random().toString(36).substr(2, 9);
      
      // 70% chance of a star, 30% chance of a heart (Adjust ratios here!)
      const type = Math.random() > 0.3 ? 'star' : 'heart'; 
      
      const left = Math.random() * 100; // Random horizontal position (0% to 100%)
      const size = Math.random() * 12 + 44 // Generates sizes between 20px and 44px
      const duration = Math.random() * 5 + 11; // Random fall speed (5s to 9s)

      const newParticle = { id, type, left, size, duration };

      // Add the new shape to our active array
      setParticles((prev) => [...prev, newParticle]);

      // Clean up the shape from memory exactly when it finishes falling
      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== id));
      }, duration * 1000);

    }, 200); // Spawns a new particle every 250ms (Lower this number for a heavier shower!)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="particle-container">
      {particles.map((p) => (
        <div
          key={p.id}
          className={`particle ${p.type}`}
          style={{
            left: `${p.left}%`,
            width: p.type === 'star' ? `${p.size}px` : 'auto',
            height: p.type === 'star' ? `${p.size}px` : 'auto',
            animationDuration: `${p.duration}s`,
          }}
        >
          {p.type === 'heart' && '💜'}
        </div>
      ))}
    </div>
  );
}