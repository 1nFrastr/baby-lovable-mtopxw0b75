export type Weapon = {
  slug: string;
  name: string;
  category: string;
  country: string;
  caliber: string;
  action: string;
  rateOfFire: string;
  weight: string;
  capacity: string;
  image: string;
  imagePrompt: string;
  notes: string;
  history: string;
};

export const weaponsCatalog: Weapon[] = [
  {
    slug: "m4-carbine",
    name: "M4 Carbine",
    category: "Assault rifle / carbine",
    country: "USA",
    caliber: "5.56×45mm NATO",
    action: "Gas-operated, rotating bolt",
    rateOfFire: "700–950 rpm",
    weight: "2.9 kg",
    capacity: "30-round STANAG",
    image: "/images/rifle.svg",
    imagePrompt: "US military M4 carbine assault rifle with attachments",
    notes: "Standard-issue U.S. carbine since the 1990s.",
    history:
      "A compact derivative of the M16, the M4 replaced it as the primary U.S. infantry weapon. Its rail system allows scopes, grips and lights to be attached easily.",
  },
  {
    slug: "m16-rifle",
    name: "M16 Rifle",
    category: "Assault rifle",
    country: "USA",
    caliber: "5.56×45mm NATO",
    action: "Gas-operated, rotating bolt",
    rateOfFire: "700–950 rpm",
    weight: "3.1 kg",
    capacity: "20/30-round magazine",
    image: "/images/rifle-2.svg",
    imagePrompt: "classic M16 rifle",
    notes: "The icon of the Cold War infantryman.",
    history:
      "Adopted by U.S. forces in the 1960s during Vietnam, the M16's lightweight 5.56 round changed infantry doctrine. Its plastic stock and carrying handle became iconic.",
  },
  {
    slug: "ak-47",
    name: "AK-47",
    category: "Assault rifle",
    country: "Soviet Union",
    caliber: "7.62×39mm",
    action: "Gas-operated, rotating bolt",
    rateOfFire: "600 rpm",
    weight: "4.3 kg",
    capacity: "30-round box magazine",
    image: "/images/rifle-3.svg",
    imagePrompt: "AK-47 assault rifle with curved magazine",
    notes: "Over 100 million built — the most produced firearm in history.",
    history:
      "Designed by Mikhail Kalashnikov, the AK-47 traded accuracy for legendary reliability in mud, sand and cold. Its curved magazine and loose tolerances define it.",
  },
  {
    slug: "barrett-m107",
    name: "Barrett M107",
    category: "Anti-materiel sniper rifle",
    country: "USA",
    caliber: ".50 BMG",
    action: "Gas-operated, semiautomatic",
    rateOfFire: "Semiautomatic",
    weight: "13.5 kg",
    capacity: "10-round detachable box",
    image: "/images/sniper.svg",
    imagePrompt: "Barrett M107 anti-materiel sniper rifle",
    notes: "Anti-materiel rifle with 2 km+ effective range.",
    history:
      "Firing the powerful .50 BMG cartridge, the M107 engages vehicles, equipment and targets beyond 1,800 m. Its muzzle brake cuts recoil dramatically.",
  },
  {
    slug: "fn-scar",
    name: "FN SCAR",
    category: "Battle rifle / carbine",
    country: "Belgium",
    caliber: "5.56mm / 7.62mm",
    action: "Gas-operated, rotating bolt",
    rateOfFire: "550–625 rpm",
    weight: "3.7 kg",
    capacity: "20/30-round magazine",
    image: "/images/rifle.svg",
    imagePrompt: "FN SCAR modular assault rifle",
    notes: "Modular design trusted by the U.S. Special Operations Command.",
    history:
      "Designed for SOCOM, the SCAR family ships in light (5.56) and heavy (7.62) calibers, switchable between a carbine, standard and long-barrel configuration.",
  },
  {
    slug: "u.s.-m249-saw",
    name: "M249 SAW",
    category: "Light machine gun",
    country: "Belgium / USA",
    caliber: "5.56×45mm NATO",
    action: "Gas-operated, open bolt",
    rateOfFire: "750 rpm",
    weight: "7.5 kg",
    capacity: "200-round belt / 100-round box",
    image: "/images/rifle-2.svg",
    imagePrompt: "M249 SAW light machine gun with ammunition belt",
    notes: "Squad Automatic Weapon delivering sustained suppressive fire.",
    history:
      "Based on the Belgian FN Minimi, the M249 gives infantry squads portable automatic fire. Its boxed belts and quick-change barrels allow long suppression.",
  },
];

export const featuredWeapons = weaponsCatalog.slice(0, 4);
