export type Aircraft = {
  name: string;
  type: string;
  country: string;
  role: string;
  speed: string;
  image: string;
  description: string;
};

export type Weapon = {
  name: string;
  category: string;
  country: string;
  caliber: string;
  notes: string;
  image: string;
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
  },
  {
    title: "Helicopters",
    description:
      "Gunships and transports — Apache, Black Hawk, Hind and heavy-lift titans.",
    icon: "🚁",
    accent: "from-emerald-500/20 via-emerald-500/5",
  },
  {
    title: "Small Arms",
    description:
      "Rifles, pistols, SMGs and sniper systems — the infantry warrior's toolkit.",
    icon: "🔫",
    accent: "from-amber-500/20 via-amber-500/5",
  },
  {
    title: "Armor & Artillery",
    description:
      "Main battle tanks, howitzers and rocket systems that decide land wars.",
    icon: "🛡️",
    accent: "from-orange-600/20 via-orange-600/5",
  },
];

export const featuredAircraft: Aircraft[] = [
  {
    name: "F-22 Raptor",
    type: "Fighter",
    country: "USA",
    role: "Air superiority",
    speed: "Mach 2.25",
    image:
      "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=900&q=70",
    description:
      "The world's first stealth air-superiority fighter, with supercruise and thrust-vectored agility.",
  },
  {
    name: "F/A-18 Hornet",
    type: "Fighter",
    country: "USA",
    role: "Multirole carrier strike",
    speed: "Mach 1.8+",
    image:
      "https://images.unsplash.com/photo-1613961026936-39d9e5d5211d?auto=format&fit=crop&w=900&q=70",
    description:
      "Carrier-proven workhorse — flawless air-to-air and air-to-ground in every pace of conflict.",
  },
  {
    name: "Su-27 Flanker",
    type: "Fighter",
    country: "Russia",
    role: "Air superiority",
    speed: "Mach 2.35",
    image:
      "https://images.unsplash.com/photo-1505682634904-d7c8d95cdc50?auto=format&fit=crop&w=900&q=70",
    description:
      "A classic Cold War interceptor whose acrobatic Cobra maneuvers still impress at airshows.",
  },
  {
    name: "C-130 Hercules",
    type: "Transport",
    country: "USA",
    role: "Tactical airlift",
    speed: "366 mph",
    image:
      "https://images.unsplash.com/photo-1562629087-8a659bcb26e1?auto=format&fit=crop&w=900&q=70",
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
    image:
      "https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=900&q=70",
  },
  {
    name: "M16 Rifle",
    category: "Assault rifle",
    country: "USA",
    caliber: "5.56×45mm NATO",
    notes: "The icon of the Cold War infantryman.",
    image:
      "https://images.unsplash.com/photo-1545468800-85f7c7c3e2ab?auto=format&fit=crop&w=900&q=70",
  },
  {
    name: "AK-47",
    category: "Assault rifle",
    country: "Soviet Union",
    caliber: "7.62×39mm",
    notes: "Over 100 million built — the most produced firearm in history.",
    image:
      "https://images.unsplash.com/photo-1587131782795-3f9bbd1f80b3?auto=format&fit=crop&w=900&q=70",
  },
  {
    name: "Barrett M107",
    category: "Sniper rifle",
    country: "USA",
    caliber: ".50 BMG",
    notes: "Anti-materiel rifle with 2 km+ effective range.",
    image:
      "https://images.unsplash.com/photo-1518818608552-195ed130c7d9?auto=format&fit=crop&w=900&q=70",
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