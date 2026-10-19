const email = "hello@yorkucombatrobotics.ca";

// Prefix for files in public/ so they still load when the site is served from a subfolder (GitHub Pages).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// Club details used across the site. Everything here is a placeholder until the club is approved.
export const site = {
  name: "YorkU Combat Robotics",
  shortName: "Combat Robotics",
  school: "Lassonde School of Engineering, York University",
  email,
  discord: "https://discord.gg/your-invite",
  description:
    "A student design team at the Lassonde School of Engineering that designs, builds and competes with combat robots.",
  // Icons live in public/social/.
  socials: [
    { label: "Instagram", href: "https://instagram.com", icon: `${basePath}/social/instagram.png` },
    { label: "LinkedIn", href: "https://linkedin.com", icon: `${basePath}/social/linkedin.png` },
    { label: "YouTube", href: "https://youtube.com", icon: `${basePath}/social/youtube.png` },
    { label: "Email", href: `mailto:${email}`, icon: `${basePath}/social/email.png` },
  ],
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Robots", href: "/robots" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];
