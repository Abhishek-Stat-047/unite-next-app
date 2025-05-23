import React from "react";

import ActionChip from "../common/ActionChip";
import Heading from "../common/Heading";
import ETLProcessCard from "../cards/ETLProcessCard";

import { Process } from "@/public";
import { ETLProcess } from "@/utils/constants";

const headingSegments = [
  {
    text: "How Our ETL Process \n Works",
    color: "black",
  },
];

const ETLProcessWorks = () => {
  return (
    <div className="">
      <ActionChip alt="ETL Process icon" iconSrc={Process} label="Process" />
      <Heading
        description={`We move data from your data source to the destination in just 3 simple, \n secure and scalable steps:`}
        heading={headingSegments}
      />
      <div className="flex flex-col md:flex-row gap-10 justify-between mt-16">
        {ETLProcess.map((item, index) => {
          return <ETLProcessCard key={index} {...item} />;
        })}
      </div>
    </div>
  );
};

export default ETLProcessWorks;
