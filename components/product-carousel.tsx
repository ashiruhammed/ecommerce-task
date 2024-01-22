// import { imageOptimizer } from "next/dist/server/image-optimizer";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

function ProductCarousel({ images }: { images: string[] }) {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      className="max-w-[405px]">
      {images.map((img) => (
        <div key={img} className="">
          <Image
            priority
            alt=""
            width={506}
            height={405}
            src={img}
            className="object-cover h-[4] min-h-[450px] max-w-[506px] max-h-[405px]"
          />
        </div>
      ))}
    </Carousel>
  );
}

export default ProductCarousel;
