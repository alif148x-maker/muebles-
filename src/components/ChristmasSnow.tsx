import type { CSSProperties } from "react";

// Experimental: a scattering of falling snow for seasonal section "frames".
// Pure CSS animation (no JS ticking), pointer-events-none, and respects
// prefers-reduced-motion. Not used on product cards.
const FLAKES = Array.from({ length: 22 }, (_, i) => i);

export default function ChristmasSnow() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {FLAKES.map((i) => {
        const left = (i * 43) % 100;
        const size = 9 + (i % 5) * 3.4;
        const duration = 7 + (i % 6) * 2;
        const delay = -((i % 9) * 1.4);
        const drift = (i % 2 === 0 ? 1 : -1) * (12 + (i % 4) * 8);
        const opacity = 0.85 + (i % 4) * 0.04;
        return (
          <span
            key={i}
            className="snowflake absolute top-0 rounded-full border border-white/80 bg-white"
            style={
              {
                left: `${left}%`,
                width: size,
                height: size,
                boxShadow:
                  "0 0 10px 3px rgba(255,255,255,1), 0 0 4px rgba(60,85,120,0.55)",
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
