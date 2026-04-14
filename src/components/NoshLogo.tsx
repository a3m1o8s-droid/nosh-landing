"use client";

// Inline N-fork icon followed by "osh" text — renders as one word: [N]osh
export function NoshLogo({ height = 36 }: { height?: number }) {
  // The N icon is square; text scales proportionally
  const iconSize = height;
  const fontSize = height * 0.75;

  return (
    <span dir="ltr" className="inline-flex items-baseline gap-0 leading-none">
      {/* N with fork — inline SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width={iconSize}
        height={iconSize}
        className="shrink-0 -mb-[0.05em]"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="nosh-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E8C36A" />
            <stop offset="50%" stopColor="#D4A853" />
            <stop offset="100%" stopColor="#B8912E" />
          </linearGradient>
        </defs>
        <g fill="url(#nosh-grad)">
          {/* Left stroke */}
          <rect x="4" y="5" width="4" height="22" rx="1.5" />
          {/* Diagonal */}
          <polygon points="8,6.5 20,23 20,27 24,27 24,23 12,6.5 12,5 8,5" />
          {/* Fork handle */}
          <rect x="20" y="16" width="4" height="11" rx="1.5" />
          {/* Fork tines */}
          <rect x="18.5" y="5" width="2" height="9" rx="1" />
          <rect x="21" y="5" width="2" height="9" rx="1" />
          <rect x="23.5" y="5" width="2" height="9" rx="1" />
          {/* Fork bridge */}
          <rect x="18.5" y="12.5" width="7" height="2" rx="1" />
        </g>
      </svg>
      {/* "osh" text */}
      <span
        className="font-black text-gold-gradient"
        style={{ fontSize: `${fontSize}px`, lineHeight: 1 }}
      >
        osh
      </span>
    </span>
  );
}
