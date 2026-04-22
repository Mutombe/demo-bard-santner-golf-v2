import { useState } from 'react';
import { motion } from 'framer-motion';

// A hand-drawn SVG map of the 18 holes at Royal Harare.
// 9th fairway is highlighted brass with a pulsing ring.
// Hovering a dot reveals a mini-label.
const HOLES = [
  { n: 1,  x: 120, y: 240, par: 4, yards: 388, name: 'The Opening' },
  { n: 2,  x: 190, y: 200, par: 3, yards: 164, name: 'Short Glass' },
  { n: 3,  x: 260, y: 220, par: 4, yards: 352, name: 'The Dog-Leg' },
  { n: 4,  x: 330, y: 185, par: 5, yards: 498, name: 'Msasa Run' },
  { n: 5,  x: 400, y: 210, par: 4, yards: 404, name: 'The Bend' },
  { n: 6,  x: 460, y: 175, par: 3, yards: 178, name: 'Dew Hollow' },
  { n: 7,  x: 520, y: 205, par: 4, yards: 372, name: 'Reading Green' },
  { n: 8,  x: 560, y: 155, par: 4, yards: 412, name: 'The Rise' },
  { n: 9,  x: 600, y: 230, par: 4, yards: 432, name: 'Home to the Turn' }, // signature
  { n: 10, x: 600, y: 300, par: 4, yards: 396, name: 'Away' },
  { n: 11, x: 555, y: 340, par: 3, yards: 168, name: 'Short East' },
  { n: 12, x: 495, y: 360, par: 5, yards: 512, name: 'Long Spoon' },
  { n: 13, x: 430, y: 335, par: 4, yards: 360, name: 'The Walk' },
  { n: 14, x: 365, y: 360, par: 4, yards: 384, name: 'Through the Avenue' },
  { n: 15, x: 300, y: 335, par: 5, yards: 528, name: 'Long Fifteen' },
  { n: 16, x: 235, y: 360, par: 3, yards: 195, name: 'Quiet Par-3' },
  { n: 17, x: 170, y: 335, par: 4, yards: 408, name: 'The Penultimate' },
  { n: 18, x: 110, y: 310, par: 4, yards: 378, name: 'Home' },
];

export default function RoyalCourseMap() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <svg
        viewBox="0 0 720 480"
        className="w-full h-auto"
        style={{ background: 'var(--color-paper-100)' }}
        aria-label="Royal Harare Golf Club course map"
      >
        {/* Paper vignette */}
        <defs>
          <radialGradient id="parklandFill" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#F7F2E7" />
            <stop offset="100%" stopColor="#EFE7D3" />
          </radialGradient>
          <pattern id="hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(32)">
            <line x1="0" y1="0" x2="0" y2="8" stroke="#C77D3A" strokeWidth="0.3" opacity="0.3" />
          </pattern>
        </defs>
        <rect width="720" height="480" fill="url(#parklandFill)" />
        <rect width="720" height="480" fill="url(#hatch)" opacity="0.5" />

        {/* Decorative frame */}
        <rect x="14" y="14" width="692" height="452" fill="none" stroke="#C77D3A" strokeWidth="1" />
        <rect x="22" y="22" width="676" height="436" fill="none" stroke="#C77D3A" strokeWidth="0.4" />

        {/* Compass rose */}
        <g transform="translate(650, 60)">
          <circle cx="0" cy="0" r="22" fill="none" stroke="#0B2540" strokeWidth="0.6" />
          <path d="M 0 -22 L 4 0 L 0 22 L -4 0 Z" fill="#C77D3A" opacity="0.85" />
          <path d="M -22 0 L 0 -4 L 22 0 L 0 4 Z" fill="#0B2540" opacity="0.85" />
          <text x="0" y="-27" textAnchor="middle" fontFamily="serif" fontSize="8" fill="#0B2540" fontStyle="italic">N</text>
        </g>

        {/* Lake shapes — suggestive only */}
        <ellipse cx="330" cy="275" rx="46" ry="18" fill="#ADB7CE" opacity="0.35" />
        <ellipse cx="510" cy="275" rx="34" ry="14" fill="#ADB7CE" opacity="0.35" />

        {/* Routing lines — stylised figure-of-eight */}
        <path
          d="M 120 240 Q 170 210 190 200 Q 230 215 260 220 Q 295 195 330 185 Q 365 200 400 210 Q 435 185 460 175 Q 490 195 520 205 Q 540 175 560 155 Q 585 195 600 230 L 600 300 Q 580 325 555 340 Q 525 355 495 360 Q 460 350 430 335 Q 395 355 365 360 Q 330 345 300 335 Q 265 355 235 360 Q 200 350 170 335 Q 138 320 110 310"
          fill="none"
          stroke="#7E4E1F"
          strokeWidth="1.4"
          strokeDasharray="3 3"
          opacity="0.55"
        />

        {/* Clubhouse marker */}
        <g transform="translate(85, 275)">
          <rect x="-10" y="-8" width="20" height="16" fill="#0B2540" opacity="0.8" />
          <polygon points="-12,-8 0,-16 12,-8" fill="#C77D3A" />
          <text x="0" y="28" textAnchor="middle" fontFamily="'Playfair Display', serif" fontSize="9" fontStyle="italic" fill="#0B2540">Clubhouse</text>
        </g>

        {/* Holes */}
        {HOLES.map((h) => {
          const isSig = h.n === 9;
          const isHovered = hovered === h.n;
          return (
            <g key={h.n} onMouseEnter={() => setHovered(h.n)} onMouseLeave={() => setHovered(null)}>
              {isSig && (
                <motion.circle
                  cx={h.x}
                  cy={h.y}
                  r="14"
                  fill="none"
                  stroke="#C77D3A"
                  strokeWidth="1"
                  animate={{ r: [12, 18, 12], opacity: [0.6, 0.1, 0.6] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
                />
              )}
              <circle
                cx={h.x}
                cy={h.y}
                r={isSig ? 6.5 : 5}
                fill={isSig ? '#C77D3A' : '#FBF8F2'}
                stroke={isSig ? '#A4652A' : '#0B2540'}
                strokeWidth="1"
                className="cursor-pointer transition-all"
                style={{ filter: isHovered ? 'drop-shadow(0 0 6px rgba(199,125,58,0.6))' : 'none' }}
              />
              <text
                x={h.x}
                y={h.y + 1.5}
                textAnchor="middle"
                fontFamily="'Playfair Display', serif"
                fontSize={isSig ? '7' : '6'}
                fontWeight="600"
                fill={isSig ? '#FBF8F2' : '#0B2540'}
                pointerEvents="none"
              >
                {h.n}
              </text>

              {isHovered && (
                <g pointerEvents="none">
                  <rect
                    x={h.x + 12}
                    y={h.y - 28}
                    width="138"
                    height="26"
                    fill="#FBF8F2"
                    stroke="#C77D3A"
                    strokeWidth="0.6"
                  />
                  <text x={h.x + 20} y={h.y - 13} fontFamily="'Playfair Display', serif" fontSize="9" fontStyle="italic" fill="#0B2540">
                    Hole {h.n} · {h.name}
                  </text>
                  <text x={h.x + 20} y={h.y - 4} fontFamily="'Inter', sans-serif" fontSize="7" fill="#5D5A54" letterSpacing="0.1em">
                    PAR {h.par} · {h.yards} YDS
                  </text>
                </g>
              )}
            </g>
          );
        })}

        {/* Title */}
        <text x="50" y="42" fontFamily="'Playfair Display', serif" fontSize="18" fontStyle="italic" fill="#0B2540">
          Royal Harare Golf Club
        </text>
        <text x="50" y="58" fontFamily="'Inter', sans-serif" fontSize="8" fill="#5D5A54" letterSpacing="0.25em">
          ESTABLISHED MDCCCXCVIII · 18 HOLES · PAR LXXII
        </text>
      </svg>

      <p className="mt-4 text-center font-serif italic text-ink-500 text-sm">
        The 9th — the signature hole — highlighted in brass. Hover any marker for par and yardage.
      </p>
    </div>
  );
}
