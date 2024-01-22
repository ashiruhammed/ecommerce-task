"use client";
import Section from "@/components/section";
import Arrow from "@/public/icon/Arrow";
import { Cart, removeFromCart } from "@/utils/cartSlice";
import { Product } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
function Page() {
  const data = useSelector((state: any) => state.cart);
  const wishList = useSelector((state: any) => state);
  console.log(wishList);
  console.log(data);
  const totalPrice = data.cart
    .map((obj: Product) => obj.price)
    .reduce((acc: number, prev: number) => (acc += prev));

  return (
    <Section label="cart" className="max-w-[800px]">
      <Link
        href="/"
        className="font-bold flex gap-2 text-[18px] text-[#1e1e1e] border-b border-[#d0cfcf] py-2">
        <Image src="/left-arrow.png" alt="" width={20} height={20} />
        <h1>Shopping Continue</h1>
      </Link>
      <div className="py-6">
        <p className="text-[18px] font-semibold">Shopping cart</p>
        <p className="text-[#1e1e1e] font-[500px]">
          You have {data.cart.length} in your cart
        </p>
      </div>
      <div className="space-y-6">
        {data.cart.map((cart: Product, i: number) => (
          <div
            key={i}
            className="flex flex-col md:flex-row gap-4 items-center border border-[#d0cfcf] px-4 py-2  rounded-md shadow-sm cursor-pointer hover:scale-105 duration-75 justify-between">
            <div className="space-x-2 flex flex-col md:flex-row items-center">
              <Image
                src={cart.thumbnail}
                width={120}
                height={120}
                alt="cart image"
              />
              <div className="text-[#1e1e1e]">
                <p className="font-semibold text-[18px]">{cart.title}</p>
                <p>${cart.description}</p>
              </div>
            </div>
            <p className="font-bold text-[#393939]">${cart.price}</p>
            <Image
              src="/trash.png"
              width={25}
              height={25}
              className="hidden md:block"
              alt=""
              onClick={() => {
                // console.log(cart.id)
                removeFromCart(cart.id);
              }}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-between rounded-md bg-[#23856D] text-white p-6 mt-8">
        <p className="font-semibold">${totalPrice}</p>
        <p className="flex gap-1 items-center">
          Checkout <Arrow />
        </p>
      </div>
    </Section>
  );
}

export default Page;
