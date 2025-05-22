import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function BubbleBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const bubbles = containerRef.current.querySelectorAll(".bubble");

    bubbles.forEach((bubble) => {
      gsap.to(bubble, {
        y: "-100vh",
        repeat: -1,
        duration: () => Math.random() * 4 + 3,
        delay: () => Math.random() * 2,
        ease: "sine.inOut",
      });
    });
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none">
      {/* 기본 작은 버블 30개 */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={`small-${i}`}
          className="bubble absolute bottom-0 w-8 h-8 bg-white opacity-30 rounded-full"
          style={{ left: `${Math.random() * 100}%` }}
        />
      ))}

      {/* 중간 크기 버블 (1.5배) 10개 */}
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={`medium-${i}`}
          className="bubble absolute bottom-0 w-12 h-12 bg-white opacity-20 rounded-full"
          style={{ left: `${Math.random() * 100}%` }}
        />
      ))}

      {/* 큰 버블 (2.2배) 5개 */}
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={`large-${i}`}
          className="bubble absolute bottom-0 w-20 h-20 bg-white opacity-15 rounded-full"
          style={{ left: `${Math.random() * 100}%` }}
        />
      ))}
    </div>
  );
}