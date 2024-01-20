"use client";

import OpenIcon from "@/public/icon/OpenIcon";
import React from "react";
import NavLink from "./nav-link";

function MobileNav({
  isOpen,
  className,
}: {
  isOpen: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      {isOpen && (
        <div className="flex flex-col lg:flex-row gap-4 lg:hidden  text-center">
          <NavLink>Home</NavLink>
          <NavLink>Shop</NavLink>
          <NavLink>About</NavLink>
          <NavLink>Blog</NavLink>
          <NavLink>Contact</NavLink>
          <NavLink>Pages</NavLink>
        </div>
      )}
    </div>
  );
}

export default MobileNav;
