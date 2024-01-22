import FacebookIcon from "@/public/icon/FacebookIcon";
import InstagramIcon from "@/public/icon/InstagramIcon";
import TwitterIcon from "@/public/icon/TwitterIcon";
import React from "react";

function Footer() {
  return (
    <>
      <div>
        <div className="py-10 px-11 space-y-4 md:flex items-center justify-between  max-w-[1450px] mx-auto">
          <h2
            aria-live="polite"
            className="text-[24px] font-bold text-[#252B42]"
            tabIndex={0}>
            Bandage
          </h2>

          <div className="space-x-5 text-blue-700 flex">
            <FacebookIcon color="#23A6F0" className="text-[24px]" />
            <InstagramIcon color="#23A6F0" className="text-[24px]" />
            <TwitterIcon color="#23A6F0" className="text-[24px]" />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 max-w-[1450px] justify-between mx-auto px-8 py-[50px]">
        {[
          {
            header: "Company Info",
            links: ["About Us", "Carrier", "We are hiring", "Blog"],
          },
          {
            header: "Legal",
            links: ["About Us", "Carrier", "We are hiring", "Blog"],
          },
          {
            header: "Features",
            links: [
              "Business Marketing",
              "User Anaylitc",
              "Live chat",
              "Unlimited Support",
            ],
          },
          {
            header: "Resources",
            links: ["IOS & Android", "Watch a Demo", "Customers", "API"],
          },
        ].map(({ header, links }, i) => (
          <div key={i} className="flex gap-5 flex-col">
            <h2 className="text-[#252b42] font-bold text-[16px]">{header}</h2>
            <ul className="flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link}
                  href="#"
                  aria-live="off"
                  className="font-bold text-[#737373]">
                  {link}
                </a>
              ))}
            </ul>
          </div>
        ))}
        <div className="space-y-5 w-fit">
          <h2>Get in Touch</h2>
          <form className="space-y-1">
            <div className="flex  border border-[#E6E6E6]">
              <input type="text" className="p-5" placeholder="Your Email" />
              <button
                type="submit"
                className="px-4 py-5 text-white bg-[#23a6f0]">
                Subscribe
              </button>
            </div>
            <p className="text-xs">Lore imp sum dolor Amit</p>
          </form>
        </div>
      </div>
      <div className="bg-[#FAFAFA]">
        <div className="max-w-[1450px] px-8 mx-auto py-6">
          <p className="font-bold text-[#737373]">
            Made With Love By FinLand. All Right Reserved
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
