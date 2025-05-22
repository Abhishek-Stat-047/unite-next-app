import React from "react";

import LogoCard from "../cards/LogoCard";

import { DataSourceType } from "@/utils/constants";

interface DataCardMarqueeProps {
  data: DataSourceType[];
  direction?: "left" | "right";
}

const DataCardMarquee = ({
  data,
  direction = "left",
}: DataCardMarqueeProps) => {
  const animationClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className="overflow-hidden w-full">
      <div className={`flex gap-4 ${animationClass}`}>
        {[...data, ...data, ...data].map((item, index) => (
          <LogoCard key={index} alt={item.alt} src={item.src} />
        ))}
      </div>
    </div>
  );
};

export default DataCardMarquee;
