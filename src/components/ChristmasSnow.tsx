import type { CSSProperties } from "react";

// Experimental: a light scattering of falling snow for seasonal sections.
// Pure CSS animation (no JS ticking), pointer-events-none, and respects
// prefers-reduced-motion. Not used on product cards.
const FLAKES = Array.from({ length: 14 }, (_, i) => i);

export default function ChristmasSnow() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {FLAKES.map((i) => {
        const left = (i * 71) % 100;
        const size = 5 + (i % 4) * 2;
        const duration = 9 + (i % 5) * 2.2;
        const delay = -((i % 7) * 1.8);
        const drift = (i % 2 === 0 ? 1 : -1) * (12 + (i % 4) * 8);
        const opacity = 0.35 + (i % 4) * 0.12;
        return (
          <span
            key={i}
            className="snowflake absolute top-0 rounded-full bg-white"
            style={
              {
                left: `${left}%`,
                width: size,
                height: size,
                animation: `snow-fall ${duration}s linear infinite`,
                animationDelay: `${delay}s`,
                "--snow-drift": `${drift}px`,
                "--snow-opacity": opacity,
              } as CSSProperties
            }
          />
        );
      })}
    </div>
  );
}
