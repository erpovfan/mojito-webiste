import NavBar from "@/components/NavBar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Hero from "@/components/Hero";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {
  return (
    <>
      <main>
        <NavBar />
        <Hero />
      </main>
    </>
  );
}
