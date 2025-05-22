import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

export default function TransitionScreen({ onComplete }) {
    const containerRef = useRef(null);
    const [showBigBubbles, setShowBigBubbles] = useState(false);

    useEffect(() => {
        const bubbles = containerRef.current.querySelectorAll(".bubble");

    bubbles.forEach((bubble) => {
        gsap.to(bubble, {
            y: "-120vh",
            repeat: -1,
            duration: () => Math.random() * 2 + 2,
            delay: () => Math.random() * 1.5,
            ease: "sine.inOut",
        });
    });

    // 2.5초 후 큰 버블 보여주기
    const timer = setTimeout(() => {
        setShowBigBubbles(true);  
        if (onComplete) onComplete(); // 필요시 콜백
    }, 2500);

    return () => clearTimeout(timer);
    }, []);

    return (
    <div className="absolute inset-0 bg-sky-100 z-50">
      <div ref={containerRef} className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 120 }).map((_, i) => (
          <div
            key={i}
            className="bubble absolute bottom-0 w-6 h-6 bg-white opacity-40 rounded-full"
            style={{ left: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      {showBigBubbles && (
        <div className="absolute inset-0 flex items-center justify-center gap-20 z-50">
          <div className="w-64 h-64 bg-white opacity-120 rounded-full shadow-xl" />
          <div className="w-64 h-64 bg-white opacity-120 rounded-full shadow-xl" />
          <div className="w-64 h-64 bg-white opacity-120 rounded-full shadow-xl" />
        </div>
      )}
    </div>
  );
}