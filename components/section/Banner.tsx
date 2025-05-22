import React from "react";
import Image from "next/image";

import ColoredText from "../common/ColoredText";
import Typography from "../common/Typography";
import PrimaryButton from "../Buttons/PrimaryButton";
import DataHub from "../dataHub/DataHub";

import { Background } from "@/public";

const Banner = () => {
  return (
    <div className="">
      <Image alt="back" className="absolute right-0 -top-20" src={Background} />
      <div className="w-full  flex justify-between">
        <div className="z-10 mt-20">
          <ColoredText
            className="mb-2  !leading-tight"
            segments={[
              {
                text: "Move data from sources \n to destinations in \n",
                color: "black",
              },
              { text: " Minutes", color: "text-secondaryBlue-300" },
            ]}
          />
          <Typography className="mb-4 " variant="text">
            A No-Code ETL Tool by Statfinity
          </Typography>
          <div className="flex gap-4 mt-10">
            <PrimaryButton className="px-10 py-6" variant="solid">
              Get started for free
            </PrimaryButton>
            <PrimaryButton className="px-16 py-6" variant="bordered">
              Book a Demo
            </PrimaryButton>
          </div>
          <Typography
            className="!text-xs !text-primaryBlue-300 mt-5 ml-5"
            variant="text"
          >
            No Credit Card Required! 🎉
          </Typography>
        </div>
        <div className="mr-20">
          <DataHub />
        </div>
      </div>
    </div>
  );
};

export default Banner;
