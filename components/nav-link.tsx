import React from "react";
import { ElementType } from "react"; // Add import statement for ElementType

function NavLink({
  children,
  className,
  Icon,
}: {
  children: React.ReactNode;
  className?: string;
  Icon?: ElementType; // Update Icon type to ElementType
}) {
  return (
    <a
      aria-live="off"
      href="#"
      className={[
        className,
        "text-[#737373] font-semibold focus:text-[#252B42] focus:font-normal",
      ].join(" ")}>
      {Icon && <Icon className="inline-block mr-2" />}{" "}
      {/* Fix JSX element type error */}
      {children}
    </a>
  );
}

export default NavLink;
