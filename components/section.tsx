import React from "react";

function Section({
  children,
  className,
  label,
}: {
  children: React.ReactNode;
  className?: string;
  label: string;
}) {
  return (
    <div
      aria-label={label}
      tabIndex={0}
      className={[
        "md:py-[80px] mt-0 px-8 max-w-[1450px] mx-auto",
        className,
      ].join(" ")}>
      {children}
    </div>
  );
}

export default Section;
