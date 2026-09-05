import type { Metadata } from "next";

import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import FeaturedAircraft from "@/components/home/FeaturedAircraft";
import FeaturedWeapons from "@/components/home/FeaturedWeapons";
import Milestones from "@/components/home/Milestones";

export const metadata: Metadata = {
  title: "Wing & Steel — Aviation & Military Tech",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedAircraft />
      <FeaturedWeapons />
      <Milestones />
    </>
  );
}