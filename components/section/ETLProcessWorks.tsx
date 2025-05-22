import React from "react";

import ActionChip from "../common/ActionChip";
import Heading from "../common/Heading";

import { Process } from "@/public";

const headingSegments = [
  {
    text: "How Our ETL Process \n Works",
    color: "black",
  },
];

const ETLProcessWorks = () => {
  return (
    <div>
      <ActionChip alt="ETL Process icon" iconSrc={Process} label="Process" />
      <Heading
        description={`We move data from your data source to the destination in just 3 simple, \n secure and scalable steps:`}
        heading={headingSegments}
      />
    </div>
  );
};

export default ETLProcessWorks;
