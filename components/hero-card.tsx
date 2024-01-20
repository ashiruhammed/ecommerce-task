import Image from "next/image";
import React from "react";

function HeroCard({
  className,
  imgSrc,
  imgAlt,
}: {
  className?: string;
  imgSrc: string;
  imgAlt: string;
}) {
  return (
    <div className={[className, "relative"].join(" ")}>
      <div className="p-6 space-y-1">
        <p className="font-bold text-[#2DC071]">5 items</p>
        <h2 className="text-[40px] font-bold">FURNITURE</h2>
        <p className="font-semibold">Read more</p>
      </div>
      <Image fill src={imgSrc} alt={imgAlt} className="-z-50"></Image>
    </div>
  );
}

export default HeroCard;
