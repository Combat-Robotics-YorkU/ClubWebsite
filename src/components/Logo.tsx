import { site } from "@/site";

// Placeholder mark until the club has a real logo: a wedge inside a rounded square.
export default function Logo({ className }: { className?: string }) {
  return (
    <span className={className} style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
      <svg width="30" height="30" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="1" y="1" width="22" height="22" rx="6" fill="var(--color-accent)" />
        <path d="M5 17 L19 17 L19 9 Z" fill="var(--color-on-accent)" />
        <circle cx="8.5" cy="9" r="2" fill="var(--color-on-accent)" />
      </svg>
      <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 19, letterSpacing: "-0.02em" }}>{site.shortName}</span>
    </span>
  );
}
