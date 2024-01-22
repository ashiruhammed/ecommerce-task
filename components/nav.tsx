"use client";
import React from "react";
import NavLink from "./nav-link";
import Cart from "./cart";
import WishList from "./wishlist";
import NavList from "./nav-list";
import SearchIcon from "@/public/icon/SearchIcon";
import MobileNav from "./mobile-nav";
import OpenIcon from "@/public/icon/OpenIcon";
import { useSelector } from "react-redux";
import Link from "next/link";

function Nav() {
  const [openNav, setOpenNav] = React.useState(false);
  const data = useSelector((state: any) => state.cart).cart;

  return (
    <div
      aria-label="navigation-menu"
      tabIndex={0}
      className="max-w-[1700px] mx-auto">
      <div className="flex justify-between py-7 px-8 gap-32 relative">
        <div className="flex gap-28 lg:items-center">
          <Link href="/">
            <h2
              aria-live="polite"
              className="text-[24px] font-bold text-[#252B42]"
              tabIndex={0}>
              Bandage
            </h2>
          </Link>
          <NavList className="hidden lg:block" />
        </div>
        <div className="flex flex-row gap-7 items-center">
          <NavLink className="text-[#23A6F0] font-semibold hidden md:block">
            Login/Register
          </NavLink>

          <SearchIcon className="lg:hidden block" />
          <Link href="/cart">
            <Cart num={data.length} />
          </Link>
          <WishList />
          <OpenIcon
            className="cursor-pointer lg:hidden block"
            onClick={() => {
              setOpenNav((open) => !open);
            }}
          />
        </div>
      </div>
      <MobileNav isOpen={openNav} className="text-[30px]" />
    </div>
  );
}

export default Nav;
