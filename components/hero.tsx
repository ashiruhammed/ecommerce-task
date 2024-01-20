import React from "react";
import HeroCard from "./hero-card";

// import furniture from

function Hero() {
  return (
    <div
      aria-label="hero-section"
      tabIndex={0}
      className="md:h-[650px] w-full grid gap-4 grid-cols-[35%_auto_auto] grid-rows-2">
      <HeroCard
        imgSrc="/furniture.png"
        imgAlt="coconut on the table"
        className="row-span-2"
      />
      <HeroCard
        className=" col-span-2"
        imgSrc="/flower.png"
        imgAlt="Flower on the table"
      />
      <HeroCard imgAlt="A light" imgSrc="/light.png" />
      <HeroCard imgAlt="A ceramic on the table" imgSrc="/ceramics.png" />
    </div>
  );
}

export default Hero;
