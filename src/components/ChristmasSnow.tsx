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
        const size = 6 + (i % 5) * 2.5;
        const duration = 7 + (i % 6) * 2;
        const delay = -((i % 9) * 1.4);
        const drift = (i % 2 === 0 ? 1 : -1) * (12 + (i % 4) * 8);
        const opacity = 0.55 + (i % 4) * 0.11;
        return (
          <span
            key={i}
            className="snowflake absolute top-0 rounded-full bg-white"
            style={
              {
                left: `${left}%`,
                width: size,
                height: size,
                boxShadow: "0 0 5px 1px rgba(255,255,255,0.9), 0 0 2px rgba(90,110,140,0.35)",
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
