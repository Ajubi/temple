export type TempleEvent = {
  title: string;
  date: string; // e.g. "Feb 26"
  subtitle: string;
  highlight?: boolean;
};

export const sampleEvents: TempleEvent[] = [
  {
    title: "Maha Shivaratri",
    date: "Feb 26",
    subtitle: "Rudrabhishek · Night vigil · Bhajans",
    highlight: true
  },
  {
    title: "Ram Navami",
    date: "Apr 06",
    subtitle: "Akhand Ramayana · Special darshan"
  },
  {
    title: "Janmashtami",
    date: "Aug 16",
    subtitle: "Midnight aarti · Jhanki · Prasad"
  },
  {
    title: "Navratri",
    date: "Oct 12",
    subtitle: "Devi aarti · Cultural programs"
  }
];


