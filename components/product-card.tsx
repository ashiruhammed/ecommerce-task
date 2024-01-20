import Image from "next/image";
import React from "react";

function ProductCard({ imgSrc }: { imgSrc: string }) {
  return (
    <div className="font-bold">
      <Image src={imgSrc} width={185} height={238} alt="product image" />
      <p className="text-[#252b42]">Graphic Design</p>
      <p className="text-[#737373]">English Department</p>
      <p>
        <del>$16.48</del>
        <ins>$6.48</ins>
      </p>
    </div>
  );
}

export default ProductCard;
