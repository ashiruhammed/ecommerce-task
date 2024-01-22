import AwsIcon from "@/public/icon/AwsIcon";
import BirdIcon from "@/public/icon/BirdIcon";
import GitIocn from "@/public/icon/GitIocn";
import HooliIcon from "@/public/icon/HooliIcon";
import LyaIcon from "@/public/icon/LyaIcon";
import StripeIcon from "@/public/icon/StripeIcon";
import React from "react";

function Sponsors() {
  return (
    <div className="flex flex-col justify-between gap-4 md:flex-row pt-[50px] items-center">
      <HooliIcon />
      <LyaIcon />
      <BirdIcon />
      <StripeIcon />
      <AwsIcon />
      <GitIocn />
    </div>
  );
}

export default Sponsors;
