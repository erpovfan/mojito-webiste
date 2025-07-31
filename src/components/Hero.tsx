"use client";
import Image from "next/image";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(SplitText);

function Hero() {
  useGSAP(() => {
    const titleText = new SplitText(".title", {
      type: "chars , words",
    });
    const paraText = new SplitText(".subtitle", {
      type: "lines",
    });
    titleText.chars.forEach((ch) => ch.classList.add("text-gradient"));

    gsap.from(titleText.chars, {
      yPercent: 100,
      duration: 1.8,
      stagger: 0.05,
      ease: "expo.out",
    });
    gsap.from(paraText.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      delay: 1,
      stagger: 0.05,
      ease: "expo.out",
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(
        ".left-leaf",
        {
          y: -200,
        },
        0
      )
      .to(
        ".right-leaf",
        {
          y: 350,
        },
        0
      );
  }, []);
  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">MOJITO</h1>
        <Image
          src={"/images/hero-left-leaf.png"}
          alt="hero-left-leaf"
          width={1200}
          height={1200}
          className="left-leaf size-[30rem]"
        />
        <Image
          src={"/images/hero-right-leaf.png"}
          alt="hero-right-leaf"
          width={1200}
          height={1200}
          className="right-leaf size-[30rem]"
        />
        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Cool. Crisp. Classic.</p>
              <p className="subtitle">
                Sip the Spirit <br /> of Summer
              </p>
            </div>

            <div className="view-cocktails">
              <p className="subtitle">
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes — designed to delight your
                senses.
              </p>
              <a href="#cocktails">View cocktails</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
