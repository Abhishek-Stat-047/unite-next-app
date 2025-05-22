import React from "react";

import ColoredText from "../common/ColoredText";
import Typography from "../common/Typography";
import PrimaryButton from "../Buttons/PrimaryButton";
import DataHub from "../dataHub/DataHub";

const Banner = () => {
  return (
    <div className=" mt-20 ">
      <div className="w-full  flex justify-between">
        <div>
          <ColoredText
            className="mb-2"
            segments={[
              {
                text: "Move data from sources \n to destinations in \n",
                color: "black",
              },
              { text: " Minutes", color: "text-secondaryBlue-300" },
            ]}
          />
          <Typography className="mb-4" variant="normal">
            A No-Code ETL Tool by Statfinity
          </Typography>
          <div className="flex gap-4">
            <PrimaryButton variant="solid">Get started for free</PrimaryButton>
            <PrimaryButton variant="bordered">Book a Demo</PrimaryButton>
          </div>
          <Typography variant="normal">No Credit Card Required! 🎉</Typography>
        </div>
        <div>
          <DataHub />
        </div>
      </div>
    </div>
  );
};

export default Banner;
