import EmailIcon from "@/public/icon/EmailIcon";
import FacebookIcon from "@/public/icon/FacebookIcon";
import InstagramIcon from "@/public/icon/InstagramIcon";
import PhoneIcon from "@/public/icon/PhoneIcon";
import TwitterIcon from "@/public/icon/TwitterIcon";
import YoutubeIcon from "@/public/icon/YoutubeIcon";
import React from "react";

function TopNav() {
  return (
    <div
      aria-label="top navigation"
      tabIndex={0}
      className="bg-[#23856D] text-white py-5 px-8 hidden lg:block">
      <div className="max-w-[1700px]  mx-auto flex justify-between">
        <div className="flex gap-7">
          <div className="flex gap-1 items-center">
            <PhoneIcon aria-label="Phone icon" tabIndex={0} />
            <a tabIndex={0} aria-label="Phone number" href="#">
              (225) 555-0118
            </a>
          </div>
          <div className="flex gap-1 items-center">
            <EmailIcon aria-label="Email Icon" tabIndex={0} />
            <a
              tabIndex={0}
              aria-label="email address"
              aria-live="polite"
              href="#">
              michelle.rivera@example.com
            </a>
          </div>
        </div>
        <p tabIndex={0} aria-live="polite" className="font-semibold text-sm">
          Follow Us and get a chance to win 80% off
        </p>
        <div className="flex font-semibold gap-3 items-center">
          <p tabIndex={0} aria-live="polite" className="text-sm">
            Follow Us:
          </p>
          <InstagramIcon aria-label="Instagram icon" tabIndex={0} />
          <YoutubeIcon aria-label="Youtube icon" tabIndex={0} />
          <FacebookIcon aria-label="Facebook icon" tabIndex={0} />
          <TwitterIcon aria-label="Twitter icon" tabIndex={0} />
        </div>
      </div>
    </div>
  );
}

export default TopNav;
