"use client";
import Image from "next/image";
import React from "react";
import { cocktailLists, mockTailLists } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function Cocktails() {
  useGSAP(() => {
    const parallax = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 30%",
        end: "bottom bottom",
        scrub: true,
      },
    });
    parallax
      .from("#c-left-leaf", {
        y: 100,
        x: -100,
      })
      .from("#c-right-leaf", {
        y: 100,
        x: 100,
      });
  }, []);
  return (
    <>
      <section id="cocktails" className="noisy">
        <Image
          src="/images/cocktail-left-leaf.png"
          alt="l-leaf"
          id="c-left-leaf"
          width={100}
          height={100}
          className="size-[25rem]"
        />
        <Image
          src="/images/cocktail-right-leaf.png"
          alt="r-leaf"
          id="c-right-leaf"
          width={100}
          height={100}
          className="size-[25rem]"
        />
        <div className="list">
          <div className="popular">
            <h2>Most popular cocktails:</h2>

            <ul>
              {cocktailLists.map(({ name, country, detail, price }) => (
                <li key={name}>
                  <div className="md:me-28">
                    <h3>{name}</h3>
                    <p>
                      {country} | {detail}
                    </p>
                  </div>
                  <span>- {price}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="loved">
            <h2>Most loved mocktails:</h2>

            <ul>
              {mockTailLists.map(({ name, country, detail, price }) => (
                <li key={name}>
                  <div className="me-28">
                    <h3>{name}</h3>
                    <p>
                      {country} | {detail}
                    </p>
                  </div>
                  <span>- {price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cocktails;
