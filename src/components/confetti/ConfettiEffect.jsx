//src/components/confetti/confetiEfect.jsx

import { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';

export default function StreamerEffect() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const myConfetti = confetti.create(canvasRef.current, {
      resize: true,
      useWorker: true
    });

    // --- CONFIGURACIÓN DE TIEMPO ---
    const duration = 3 * 1000; // 3 segundos de lluvia
    const animationEnd = Date.now() + duration;

    // --- CONFIGURACIÓN DE COLORES ---
    // Puedes añadir o quitar códigos hex aquí
    const colors = ['#7ac943', '#ffbe0b', '#fb5607', '#3a86ff'];

    (function frame() {
      // Ajustes comunes para ambos lados
      const commonConfig = {
        particleCount: 2,
        spread: 55,
        colors: colors,
        ticks: 100,      // Cuanto mayor sea, más tiempo "vive" la serpentina
        
        // --- VELOCIDAD DE CAÍDA ---
        // 1 es el valor por defecto. 
        // Valores menores (0.5, 0.8) hacen que caiga más lento (flotante).
        // Valores mayores (1.5, 2) hacen que caiga muy rápido.
        gravity: 0.5,    

        // --- TAMAÑO ---
        // 1 es normal. Súbelo (1.5, 2) para serpentinas más gruesas.
        scalar: 1.2,     
        
        // --- DERIVA / VIENTO ---
        // 0 es caída recta. Valores positivos/negativos añaden "viento" lateral.
        drift: 0         
      };

      // Disparo desde la izquierda
      myConfetti({
        ...commonConfig,
        angle: 60,
        origin: { x: 0, y: 0.6 },
      });

      // Disparo desde la derecha
      myConfetti({
        ...commonConfig,
        angle: 120,
        origin: { x: 1, y: 0.6 },
      });

      if (Date.now() < animationEnd) {
        requestAnimationFrame(frame);
      }
    }());

    return () => myConfetti.reset();
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="confetti-canvas-bg"
    />
  ); 
}