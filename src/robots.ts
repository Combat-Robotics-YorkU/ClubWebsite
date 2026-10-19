// The team's robots. Names, specs and journal entries are placeholders until each robot is built.
// One section of the engineering journal, usually a subsystem. Put images in public/robots/<slug>/.
export type JournalEntry = {
  title: string;
  image?: string;
  imageAlt?: string;
  body: string[];
};

export type Robot = {
  slug: string;
  name: string;
  weightClass: string;
  weight: string;
  year: string;
  description: string;
  overview: string[];
  specs: { label: string; value: string }[];
  journal: JournalEntry[];
};

export const robots: Robot[] = [
  {
    slug: "robot-1",
    name: "Robot 1",
    weightClass: "Antweight",
    weight: "1 lb",
    year: "2027",
    description: "Our first team robot. Designed and built by members once the club is running.",
    overview: [
      "Robot 1 will be the first robot the whole team designs and builds together. Work starts once the club is approved, with the goal of fighting it in 2027.",
      "This page will track the build from the first sketches to its first match.",
    ],
    specs: [
      { label: "Class", value: "Antweight · 1 lb" },
      { label: "Weapon", value: "To be decided" },
      { label: "Drive", value: "To be decided" },
      { label: "Armour", value: "To be decided" },
      { label: "Status", value: "Not started" },
    ],
    journal: [
      {
        title: "Coming soon",
        body: ["The first write-up will go up when design work starts."],
      },
    ],
  },
  {
    slug: "prototype",
    name: "Prototype",
    weightClass: "Antweight",
    weight: "1 lb",
    year: "2026",
    description: "A solo build by our founder to learn the process before the team's first robot.",
    overview: [
      "The prototype is a one-person build to learn every step of making a combat robot, from CAD to the arena, before the team starts its first robot.",
      "Everything learned here, including the mistakes, goes into how the team builds Robot 1.",
    ],
    specs: [
      { label: "Class", value: "Antweight · 1 lb" },
      { label: "Weapon", value: "To be decided" },
      { label: "Drive", value: "Two-wheel drive" },
      { label: "Armour", value: "To be decided" },
      { label: "Status", value: "In progress" },
    ],
    journal: [
      {
        title: "Chassis",
        body: [
          "Placeholder. Describe the chassis shape, what it's made of, how it was made (printed, machined or both) and how much it weighs.",
        ],
      },
      {
        title: "Weapon",
        body: [
          "Placeholder. Describe the weapon type, the motor that drives it, tip speed or energy if you calculated it, and why you picked it.",
        ],
      },
      {
        title: "Drivetrain",
        body: ["Placeholder. Describe the drive motors, wheels and gearing, and how the robot handles."],
      },
      {
        title: "Electronics",
        body: [
          "Placeholder. List the battery, speed controllers and receiver, and how everything is mounted to survive hits.",
        ],
      },
    ],
  },
];

export function getRobot(slug: string) {
  return robots.find((r) => r.slug === slug);
}
