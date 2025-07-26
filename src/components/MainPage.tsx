"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
function MainPage() {
  useGSAP(() => {
    gsap.fromTo(
      ".box",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      }
    );
  }, []);

  return (
    <div className="flex-center w-full h-[100vh]">
      <div className="box w-[10rem] h-[10rem] bg-red-500"></div>
    </div>
  );
}

export default MainPage;
