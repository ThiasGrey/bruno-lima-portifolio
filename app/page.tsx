import { HeroSection } from "./components/pages/home/hero-section";
import { HigliightedProjects } from "./components/pages/home/higlighted-projects";
import { Knowtechs } from "./components/pages/home/know-techs";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <Knowtechs />
      <HigliightedProjects />
    </>
  )
}
