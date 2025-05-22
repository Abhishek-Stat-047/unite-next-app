import React from "react";

import Heading from "../common/Heading";
import DataCardMarquee from "../animation/DataCardMarquee";
import ActionChip from "../common/ActionChip";
import Typography from "../common/Typography";
import PrimaryButton from "../Buttons/PrimaryButton";

import {
  DataSourcesOne,
  DataSourcesThree,
  DataSourcesTwo,
} from "@/utils/constants";
import { ExploreIcon } from "@/public";
const headingSegments = [
  {
    text: "Explore Our Popular Data \n",
    color: "black",
  },
  { text: " Sources ", color: "text-secondaryBlue-300" },
];

const PopularDataSource = () => {
  return (
    <div className="">
      <ActionChip
        alt="ETL data source and destination explore icon"
        iconSrc={ExploreIcon}
        label="Explore"
      />
      <Heading
        description={`Unite integrates with 100+ data sources across advertising, analytics, CRM, eCommerce, and finance — with new connectors added monthly.`}
        heading={headingSegments}
      />
      <div className="center  space-y-7 py-16 ">
        <div className="w-[80%] center">
          <DataCardMarquee data={DataSourcesOne} />
        </div>
        <DataCardMarquee data={DataSourcesTwo} direction="right" />
        <div className="w-[80%] center">
          <DataCardMarquee data={DataSourcesThree} />
        </div>
      </div>
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
