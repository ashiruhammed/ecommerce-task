import WishListIcon from "@/public/icon/WishListIcon";
import React from "react";

function WishList() {
  return (
    <div className="hidden gap-1 items-center  lg:flex">
      <WishListIcon className="text-[24px]" titleId="wishlist icon" />
      <p>1</p>
    </div>
  );
}

export default WishList;
