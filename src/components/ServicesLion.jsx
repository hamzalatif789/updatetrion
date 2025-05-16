import { useState, useRef, useEffect } from "react";
import lion from "@/assets/lion.8d65c3d2.webp";
import torch from "@/assets/torch.png";

const ServicesLion = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
  };

  useEffect(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      setDimensions({ width, height });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{ 
        backgroundImage: `url(${lion})`, 
        cursor: `url(${torch}) 25 64, auto` // Adjust cursor hotspot position
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Background image with increased opacity */}
      <div className="absolute inset-0 z-0 opacity-90">
        <img src={lion} alt="background" className="w-full h-full object-cover" />
      </div>

      {/* Enhanced dark overlay with stronger mask */}
      <div
        className="absolute inset-0 bg-black opacity-90"
        style={{
          maskImage: `radial-gradient(
            circle 250px at ${(mousePosition.x / dimensions.width) * 100}% ${(mousePosition.y / dimensions.height) * 100}%,
            transparent 0%,
            rgba(0,0,0,0.95) 200px
          )`,
          WebkitMaskImage: `radial-gradient(
            circle 250px at ${(mousePosition.x / dimensions.width) * 100}% ${(mousePosition.y / dimensions.height) * 100}%,
            transparent 0%,
            rgba(0,0,0,0.95) 200px
          )`,
        }}
      />

      {/* Glow Effect */}
      <div
        className="absolute pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x - 200}px, ${mousePosition.y - 200}px)`,
          width: '400px',
          height: '400px',
          background: `radial-gradient(
            circle closest-side,
            rgba(255, 255, 255, 0.4) 0%,
            rgba(255, 255, 255, 0.2) 50%,
            transparent 100%
          )`
        }}
      />

      {/* Content */}
      <h2 className="text-white text-9xl font-bold text-center leading-snug z-10 relative opacity-60">
        BOUNDLESS <br /> CREATIVE <br /> REALM.
      </h2>
    </div>
  );
};

export default ServicesLion;