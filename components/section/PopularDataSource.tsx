import React from "react";

import Heading from "../common/Heading";
import ActionChip from "../common/ActionChip";
import Typography from "../common/Typography";
import PrimaryButton from "../Buttons/PrimaryButton";
import TogglingMarquees from "../animation/TogglingMarquees";
import AnimatedHeading from "../animation/AnimatedHeading";

import { ExploreIcon } from "@/public";
const headingSegments = [
  {
    text: "Explore Our Popular Data \n",
    color: "black",
  },
];

const PopularDataSource = () => {
  return (
    <div className="">
      <ActionChip
        alt="ETL data source and destination explore icon"
        iconSrc={ExploreIcon}
        label="Explore"
      />
      <Heading heading={headingSegments} />
      <AnimatedHeading />
      <Heading
        description={`Unite integrates with 100+ data sources across advertising, analytics, CRM, eCommerce, and finance — with new connectors added monthly.`}
      />
      <TogglingMarquees />

      <div className="center">
        <Typography variant="heading2">
          Looking for a specific integration?
        </Typography>
        <Typography variant="text">
          {`Contact our team — we’ll build it.`}
        </Typography>
        <PrimaryButton
          className="mt-5 px-10 tracking-[4px]"
          size="lg"
          variant="solid"
        >
          Message Now
        </PrimaryButton>
      </div>
    </div>
  );
};

export default PopularDataSource;
