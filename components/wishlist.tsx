import WishListIcon from "@/public/icon/WishListIcon";
import React from "react";
import { useSelector } from "react-redux";

function WishList() {
  const data = useSelector((state: any) => state.cart.wishList);

  return (
    <div className="hidden gap-1 items-center  lg:flex">
      <WishListIcon className="text-[24px]" titleId="wishlist icon" />
      <p>{data.length}</p>
    </div>
  );
}

export default WishList;
