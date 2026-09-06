export type Aircraft = {
  name: string;
  type: string;
  country: string;
  role: string;
  speed: string;
  image: string;
  imagePrompt: string;
  description: string;
};

export type Weapon = {
  name: string;
  category: string;
  country: string;
  caliber: string;
  notes: string;
  image: string;
  imagePrompt: string;
};

export type Category = {
  title: string;
  description: string;
  icon: string;
  accent: string;
};

export const categories: Category[] = [
  {
    title: "Fighter Jets",
    description:
      "Mach-speed air superiority: F-22, F-35, Su-57 and the legends that rule the sky.",
    icon: "🛩️",
    accent: "from-sky-500/20 via-sky-500/5",
    href: "/aircraft",
  },
  {
    title: "Helicopters",
    description:
      "Gunships and transports — Apache, Black Hawk, Hind and heavy-lift titans.",
    icon: "🚁",
    accent: "from-emerald-500/20 via-emerald-500/5",
    href: "/aircraft",
  },
  {
    title: "Small Arms",
    description:
      "Rifles, pistols, SMGs and sniper systems — the infantry warrior's toolkit.",
    icon: "🔫",
    accent: "from-amber-500/20 via-amber-500/5",
    href: "/weapons",
  },
  {
    title: "Armor & Artillery",
    description:
      "Main battle tanks, howitzers and rocket systems that decide land wars.",
    icon: "🛡️",
    accent: "from-orange-600/20 via-orange-600/5",
    href: "/weapons",
  },
];

export const featuredAircraft: Aircraft[] = [
  {
    name: "F-22 Raptor",
    type: "Fighter",
    country: "USA",
    role: "Air superiority",
    speed: "Mach 2.25",
    image: "/images/fighter.svg",
    imagePrompt: "F-22 Raptor stealth fighter jet banking in flight, blue sky",
    description:
      "The world's first stealth air-superiority fighter, with supercruise and thrust-vectored agility.",
  },
  {
    name: "F/A-18 Hornet",
    type: "Fighter",
    country: "USA",
    role: "Multirole carrier strike",
    speed: "Mach 1.8+",
    image: "/images/fighter-2.svg",
    imagePrompt: "US Navy F/A-18 Hornet fighter on carrier deck",
    description:
      "Carrier-proven workhorse — flawless air-to-air and air-to-ground in every phase of conflict.",
  },
  {
    name: "Su-27 Flanker",
    type: "Fighter",
    country: "Russia",
    role: "Air superiority",
    speed: "Mach 2.35",
    image: "/images/fighter-3.svg",
    imagePrompt: "Russian Sukhoi Su-27 Flanker jet performing at an airshow",
    description:
      "A classic Cold War interceptor whose acrobatic Cobra maneuvers still impress at airshows.",
  },
  {
    name: "C-130 Hercules",
    type: "Transport",
    country: "USA",
    role: "Tactical airlift",
    speed: "366 mph",
    image: "/images/transport.svg",
    imagePrompt: "Lockheed C-130 Hercules military transport aircraft in flight",
    description:
      "Sixty-plus years of service, landing on unprepared strips and delivering anywhere.",
  },
];

export const featuredWeapons: Weapon[] = [
  {
    name: "M4 Carbine",
    category: "Assault rifle",
    country: "USA",
    caliber: "5.56×45mm NATO",
    notes: "Standard-issue U.S. carbine since the 1990s.",
    image: "/images/rifle.svg",
    imagePrompt: "US military M4 carbine assault rifle with attachments",
  },
  {
    name: "M16 Rifle",
    category: "Assault rifle",
    country: "USA",
    caliber: "5.56×45mm NATO",
    notes: "The icon of the Cold War infantryman.",
    image: "/images/rifle-2.svg",
    imagePrompt: "classic M16 rifle with wooden stock and carrying handle",
  },
  {
    name: "AK-47",
    category: "Assault rifle",
    country: "Soviet Union",
    caliber: "7.62×39mm",
    notes: "Over 100 million built — the most produced firearm in history.",
    image: "/images/rifle-3.svg",
    imagePrompt: "AK-47 assault rifle with curved magazine",
  },
  {
    name: "Barrett M107",
    category: "Sniper rifle",
    country: "USA",
    caliber: ".50 BMG",
    notes: "Anti-materiel rifle with 2 km+ effective range.",
    image: "/images/sniper.svg",
    imagePrompt: "Barrett M107 anti-materiel sniper rifle",
  },
];

export const milestones = [
  { year: "1903", event: "Wright Flyer — first powered flight" },
  { year: "1939", event: "First jet aircraft takes to the sky" },
  { year: "1947", event: "Bell X-1 breaks the sound barrier" },
  { year: "1969", event: "First flight of the Harrier jump jet" },
  { year: "1997", event: "F-22 Raptor achieves first flight" },
  { year: "2015", event: "F-35 enters operational service" },
];
