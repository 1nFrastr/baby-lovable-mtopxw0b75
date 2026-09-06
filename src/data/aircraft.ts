export type Aircraft = {
  slug: string;
  name: string;
  type: string;
  country: string;
  role: string;
  speed: string;
  ceiling: string;
  range: string;
  crew: string;
  engine: string;
  armament: string;
  image: string;
  imagePrompt: string;
  description: string;
  history: string;
};

export const aircraftCatalog: Aircraft[] = [
  {
    slug: "f-22-raptor",
    name: "F-22 Raptor",
    type: "Stealth fighter",
    country: "USA",
    role: "Air superiority",
    speed: "Mach 2.25",
    ceiling: "65,000 ft",
    range: "1,864 mi",
    crew: "1",
    engine: "2× Pratt & Whitney F119",
    armament: "M61 rotary cannon, AIM-120 AMRAAM, AIM-9X",
    image: "/images/fighter.svg",
    imagePrompt: "F-22 Raptor stealth fighter jet banking in flight, blue sky",
    description:
      "The world's first stealth air-superiority fighter, with supercruise and thrust-vectored agility.",
    history:
      "Developed to replace the F-15, the F-22 entered service in 2005 and remains the benchmark for fifth-generation air combat. Its supercruise lets it fly supersonic without afterburners.",
  },
  {
    slug: "f-a-18-hornet",
    name: "F/A-18 Hornet",
    type: "Multirole fighter",
    country: "USA",
    role: "Multirole carrier strike",
    speed: "Mach 1.8+",
    ceiling: "50,000 ft",
    range: "1,275 mi",
    crew: "1 (A), 2 (D)",
    engine: "2× GE F404",
    armament: "M61 cannon, AIM-9 Sparrow, AIM-120, bombs & missiles",
    image: "/images/fighter-2.svg",
    imagePrompt: "US Navy F/A-18 Hornet fighter on carrier deck",
    description:
      "Carrier-proven workhorse — flawless air-to-air and air-to-ground in every phase of conflict.",
    history:
      "Entering service in 1983, the Hornet was the first aircraft to combine fighter and attack roles. Its twin tails and wingtips for missile rails made it an unmistakable carrier fixture.",
  },
  {
    slug: "su-27-flanker",
    name: "Su-27 Flanker",
    type: "Air superiority",
    country: "Russia",
    role: "Air superiority",
    speed: "Mach 2.35",
    ceiling: "62,500 ft",
    range: "2,300 mi",
    crew: "1",
    engine: "2× Saturn AL-31F",
    armament: "GSh-30 cannon, R-73, R-27, R-77 missiles",
    image: "/images/fighter-3.svg",
    imagePrompt: "Russian Sukhoi Su-27 Flanker jet performing at an airshow",
    description:
      "A classic Cold War interceptor whose acrobatic Cobra maneuvers still impress at airshows.",
    history:
      "Flown from 1985, the Su-27 was the Soviet answer to the F-15. Its famous 'Pugachev's Cobra' maneuver showcased unmatched low-speed control.",
  },
  {
    slug: "c-130-hercules",
    name: "C-130 Hercules",
    type: "Transport",
    country: "USA",
    role: "Tactical airlift",
    speed: "366 mph",
    ceiling: "23,000 ft",
    range: "2,360 mi",
    crew: "5",
    engine: "4× Allison T56 / Rolls-Royce AE2100",
    armament: "Light gunship variants carry cannon",
    image: "/images/transport.svg",
    imagePrompt: "Lockheed C-130 Hercules military transport aircraft in flight",
    description:
      "Sixty-plus years of service, landing on unprepared strips and delivering anywhere.",
    history:
      "Since 1956 the Hercules has handled cargo, troops, medevac and firefighting. Modern J-models continue to serve dozens of nations.",
  },
  {
    slug: "f-35-lightning-ii",
    name: "F-35 Lightning II",
    type: "Stealth fighter",
    country: "USA",
    role: "Multirole stealth strike",
    speed: "Mach 1.6",
    ceiling: "50,000 ft",
    range: "1,380 mi",
    crew: "1",
    engine: "Pratt & Whitney F135",
    armament: "Internal gun, AIM-120, Joint Strike Missiles, bombs",
    image: "/images/fighter.svg",
    imagePrompt: "F-35 Lightning II stealth fighter",
    description:
      "The most advanced networked fighter ever built, with sensor fusion and STOVL variants.",
    history:
      "Enters operational service in 2015 across three variants (A/B/C) for the USAF, Marines and Navy. Its helmet display projects data directly into the pilot's visor.",
  },
  {
    slug: "mig-29-fighter",
    name: "MiG-29 Fulcrum",
    type: "Multirole fighter",
    country: "Soviet Union",
    role: "Frontline air superiority",
    speed: "Mach 2.25",
    ceiling: "59,000 ft",
    range: "930 mi",
    crew: "1",
    engine: "2× Klimov RD-33",
    armament: "GSh-30 cannon, R-60, R-27 missiles",
    image: "/images/fighter-2.svg",
    imagePrompt: "Soviet MiG-29 Fulcrum jet fighter",
    description:
      "A rugged dogfighter that redefined tight-turn performance for its generation.",
    history:
      "The Fulcrum entered service in 1983 and became the backbone of Warsaw Pact air defense, later exported to dozens of air forces.",
  },
];

export const featuredAircraft = aircraftCatalog.slice(0, 4);
