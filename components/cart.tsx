import CartIcon from "@/public/icon/CartIcon";
import React from "react";

function Cart() {
  return (
    <div className="flex gap-1 lg:items-center">
      <CartIcon color="#252B42" className="text-[24px]"/>
      <p>1</p>
    </div>
  );
}

export default Cart;
