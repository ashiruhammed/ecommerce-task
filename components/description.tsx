import Image from "next/image";
import React from "react";

function Description() {
  return (
    <div>
      <div className="border-b border-[#ECECEC]">
        <div className="flex gap-6 max-w-fit mx-auto font-bold text-[#737373] pb-2">
          <p aria-live="off" aria-roledescription="button" tabIndex={0}>
            Description
          </p>
          <p aria-live="off" aria-roledescription="button" tabIndex={0}>
            Additional Information
          </p>
          <p aria-live="off" aria-roledescription="button" tabIndex={0}>
            Reviews (0)
          </p>
        </div>
      </div>
      <div className="flex gap-10 py-4 max-w-fit mx-auto">
        <div className="space-y-8 max-w-[600px]">
          <h1 aria-live="off" tabIndex={0} className="text-[24px] font-bold">
            the quick fox jumps over
          </h1>
          {Array.from({ length: 3 }).map((_, i) => (
            <p aria-live="off" tabIndex={0} key={i} className="text-[#737373]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          ))}
        </div>
        <Image
          tabIndex={0}
          aria-label="description image"
          className="basis-1/3"
          src="/description-img.png"
          alt=""
          width={400}
          height={400}
        />
      </div>
    </div>
  );
}
export default Description;
