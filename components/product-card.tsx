import Image from "next/image";
import React from "react";

type image = string;

interface IProductCard {
  images: image[];
  price: number;
  category: string;
  title: string;
  discountPercentage: number;
}

function ProductCard({
  images,
  title,
  category,
  price,
  discountPercentage,
}: IProductCard) {
  return (
    <div
      tabIndex={0}
      aria-label={title}
      className="font-bold flex flex-col items-center gap-2">
      <div className="w-[195px] h-[260px] max-h-[260px] relative">
        <Image
          tabIndex={0}
          src={images[0]}
          alt={`${title} product`}
          height={260}
          width={300}
          className="min-h-full w-[300px] "
        />
      </div>
      <div className="text-center space-y-2 py-2">
        <p className="text-[#252b42]" aria-label={title} tabIndex={0}>
          {title}
        </p>
        <p
          className="text-[#737373]"
          tabIndex={0}
          aria-label={`${category} category`}>
          {category}
        </p>
        <div className="flex gap-1 justify-center">
          <p
            className="text-[#BDBDBD]"
            tabIndex={0}
            aria-label={`discount is ${discountPercentage} dollars`}>
            ${discountPercentage}
          </p>
          <p
            className="text-[#23856D]"
            aria-label={`price is ${price} dollars`}
            tabIndex={0}>
            ${price}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
