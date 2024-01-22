import CartIcon from "@/public/icon/CartIcon";
import WishListIcon from "@/public/icon/WishListIcon";
import { Cart, addToCart, addToWishList } from "@/utils/cartSlice";
import { Product } from "@/utils/types";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

function AddProduct({ cart }: { cart: Product }) {
  const [option, setOption] = React.useState("cart");
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.cart);
  const checkItem = data.cart.find((item: Product) => item.id === cart.id);
  const checkWishList = data.wishList.find(
    (item: Product) => item.id === cart.id
  );

  console.log(checkWishList);

  return (
    <div className="flex gap-5 items-center py-4">
      <button
        disabled={checkWishList || checkItem}
        onClick={() => {
          if (!option) return;

          dispatch(option === "cart" ? addToCart(cart) : addToWishList(cart));
          toast(`${cart.title} added to ${option}`);
        }}
        className={`text-white bg-[#23a6f0] px-5 py-3 rounded-md ${
          (checkItem || checkWishList) && "opacity-50 cursor-not-allowed"
        }`}>
        Select Options
      </button>
      <ToastContainer />
      <WishListIcon
        aria-label="add to wishlist"
        tabIndex={0}
        color={option === "wishlist" ? "#23a6f0" : "#737373"}
        onClick={() => setOption("wishlist")}
        className="text-[24px] outline-none cursor-pointer"
      />
      <CartIcon
        onClick={() => setOption("cart")}
        className="text-[24px] outline-none cursor-pointer"
        aria-label="add to cart"
        color={option === "cart" ? "#23a6f0" : "#737373"}
        tabIndex={0}
      />
    </div>
  );
}

export default AddProduct;
