// Line drawing of a wedge-style beetleweight, used until the team has real robot renders.
export default function RobotIllustration({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="60 100 520 230"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
      strokeLinecap="round"
      role="img"
      aria-label="Illustration of a combat robot"
    >
      {/* Ground shadow */}
      <ellipse cx="320" cy="300" rx="250" ry="22" fill="currentColor" opacity="0.08" stroke="none" />
      {/* Wedge body */}
      <path d="M90 270 L430 270 L520 220 L520 170 L470 150 L250 150 Z" />
      <path d="M90 270 L250 150" opacity="0.5" />
      <path d="M250 150 L270 130 L480 130 L520 170" />
      <path d="M470 150 L480 130" opacity="0.5" />
      {/* Wheels */}
      <circle cx="400" cy="262" r="34" />
      <circle cx="400" cy="262" r="12" />
      <circle cx="210" cy="262" r="34" opacity="0.35" />
      {/* Vertical spinner weapon */}
      <g stroke="var(--color-accent)">
        <rect x="502" y="120" width="40" height="120" rx="20" />
        <path d="M522 128 L522 232" opacity="0.5" />
      </g>
      {/* Panel details */}
      <path d="M300 190 L440 190" opacity="0.4" />
      <path d="M320 210 L440 210" opacity="0.4" />
      <circle cx="290" cy="170" r="3" fill="currentColor" stroke="none" />
      <circle cx="455" cy="170" r="3" fill="currentColor" stroke="none" />
    </svg>
  );
}
