"use client";

import { QueryClient, useQuery } from "@tanstack/react-query";
import React from "react";

import { useQueryClient } from "@tanstack/react-query";
import { fetchProduct, useProduct } from "@/utils/product-util";
import ProductCarousel from "@/components/product-carousel";
import Rating from "@/components/rating";
import Section from "@/components/section";
import WishList from "@/components/wishlist";
import Cart from "@/components/cart";
import WishListIcon from "@/public/icon/WishListIcon";
import CartIcon from "@/public/icon/CartIcon";
import Color from "@/public/icon/Color";
import Link from "next/link";
import Arrow from "@/public/icon/Arrow";
import Skeleton from "@/components/skeleton";
import Description from "@/components/description";
import Products from "@/components/products";
import HooliIcon from "@/public/icon/HooliIcon";
import LyaIcon from "@/public/icon/LyaIcon";
import BirdIcon from "@/public/icon/BirdIcon";
import StripeIcon from "@/public/icon/StripeIcon";
import AwsIcon from "@/public/icon/AwsIcon";
import GitIocn from "@/public/icon/GitIocn";

function Page({ params }: { params: { id: number | string } }) {
  const { isLoading, isError, error, data, isFetching, isPlaceholderData } =
    useQuery({
      queryKey: ["product", params.id],
      queryFn: () => fetchProduct(params.id),
      staleTime: 30 * 1000,
    });

  const formattedImages = data?.images.map((img: string) => {
    return img;
  });
  console.log(data);

  return (
    <>
      <div className="bg-[#fafafa]">
        <Section label="product-section">
          <div className="py-6 flex gap-2 items-center">
            <Link href="/" className="text-[#252B42] font-bold">
              Home
            </Link>
            <Arrow color="#BDBDBD" />
            <p className="font-semibold text-[#BDBDBD]">Shop</p>
          </div>
          {isLoading && <Skeleton />}
          {data && (
            <div className="flex flex-col md:flex-row gap-10">
              <div aria-label="product image" tabIndex={0} className="">
                <ProductCarousel images={formattedImages} />
              </div>
              <div className="flex flex-col justify-between basis-6/12">
                <div className="space-y-3">
                  <h1
                    tabIndex={0}
                    aria-live="off"
                    className="text-[#252b42] text-[20px]">
                    {data.title}
                  </h1>
                  <div
                    className="flex gap-2 items-center"
                    tabIndex={0}
                    aria-label={`${data.rating} rated`}>
                    <Rating rating={Math.floor(data.rating)} />
                    <p
                      tabIndex={0}
                      aria-live="off"
                      className="font-semibold text-[#737373]">
                      {Math.floor(data.rating) * 2} Reviews
                    </p>
                  </div>
                  <h2
                    className="text-[#252b42] font-bold text-[24px]"
                    aria-live="off"
                    tabIndex={0}>
                    ${data.price}
                  </h2>
                  <div className="flex gap-2">
                    <p tabIndex={0} aria-live="off">
                      Availability:
                    </p>
                    <p aria-live="off" tabIndex={0}>
                      In Stock
                    </p>
                  </div>
                </div>
                <div className="pt-7 border-t border-[#BDBDBD] flex flex-col gap-[57px]">
                  <div className="flex gap-2">
                    {["#23A6F0", "#2DC071", "#E77C40", "#252B42"].map(
                      (color) => (
                        <Color
                          key={color}
                          className="text-[30px]"
                          color={color}
                        />
                      )
                    )}
                  </div>
                  <div className="flex gap-5 items-center py-4">
                    <button className="text-white bg-[#23a6f0] px-5 py-3 rounded-md">
                      Select Options
                    </button>
                    <WishListIcon
                      aria-label="add to wishlist"
                      tabIndex={0}
                      className="text-[24px]"
                    />
                    <CartIcon
                      className="text-[24px]"
                      aria-label="add to cart"
                      tabIndex={0}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </Section>
      </div>
      <Section label="" className="hidden md:block">
        <Description />
      </Section>
      <div className="bg-[#fafafa]">
        <Section label="best seller">
          <div className="hidden md:block">
            <h1 className="text-[24px] text-[#252b42] font-bold p-6">
              BEST SELLER PRODUCTS
            </h1>
            <div className="border-t border-[#ECECEC] pt-6">
              <Products showMoreButton={false} />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-4 md:flex-row pt-[50px] items-center">
            <HooliIcon />
            <LyaIcon />
            <BirdIcon />
            <StripeIcon />
            <AwsIcon />
            <GitIocn />
          </div>
        </Section>
      </div>
    </>
  );
}

export default Page;
