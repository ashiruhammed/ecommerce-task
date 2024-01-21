import React from "react";

function Footer() {
  return (
    <>
      <div className="flex max-w-[1450px] justify-between mx-auto px-8 py-[50px]">
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
                  aria-live="polite"
                  className="font-bold text-[#737373]">
                  {link}
                </a>
              ))}
            </ul>
          </div>
        ))}
        <div className="space-y-5">
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
