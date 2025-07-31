import NavBar from "@/components/NavBar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
import SplitText from "gsap/SplitText";
gsap.registerPlugin(SplitText);

import Hero from "@/components/Hero";
import Cocktails from "@/components/Cocktails ";
import About from "@/components/About";
import Art from "@/components/Art";
export default function Home() {
  return (
    <>
      <main>
        <NavBar />
        <Hero />
        <Cocktails />
        <About />
        <Art />
      </main>
    </>
  );
}
