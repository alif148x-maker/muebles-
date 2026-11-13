import { useId } from "react";

// A little drift of snow sitting on top of a photo frame -- not falling
// snow, just a scalloped white cap along the top edge of an image, like
// snow piled on a window sill. Pure SVG, no JS loop, very cheap.
export default function SnowCap({ heightPx = 22 }: { heightPx?: number }) {
  const id = useId();
  const patternId = `snowcap-${id}`;
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 w-full"
      height={heightPx}
      preserveAspectRatio="none"
    >
      <defs>
        <pattern id={patternId} width="26" height={heightPx} patternUnits="userSpaceOnUse">
          <path
            d={`M0,0 Q6.5,${heightPx} 13,0 Q19.5,${heightPx} 26,0 Z`}
            fill="white"
          />
        </pattern>
      </defs>
      <rect width="100%" height={heightPx} fill={`url(#${patternId})`} />
    </svg>
  );
}
