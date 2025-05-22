import "./dataHub.css";
import React from "react";
import Image from "next/image";

import Cylinder from "./Cylinder";

import {
  AzureSql,
  GoogleAds,
  GoogleAnalytics,
  GoogleBigQuery,
  HubSpot,
  Meta,
  SalesForce,
  SnowFlake,
  UniteDb,
} from "@/public";

const bannerLogos = [
  { src: AzureSql, alt: "Azure SQL Database logo" },
  { src: SnowFlake, alt: "Snowflake Data Cloud logo" },
  { src: GoogleAds, alt: "Google Ads logo" },

  { src: GoogleAnalytics, alt: "Google Analytics logo" },
  { src: SalesForce, alt: "Salesforce CRM logo" },
  { src: Meta, alt: "Meta Platforms logo" },
  { src: HubSpot, alt: "HubSpot CRM logo" },

  { src: GoogleBigQuery, alt: "Google BigQuery logo" },
];

const value = 500;

const radiusX = 270; // width radius
const radiusY = 200; // height radius
const centerX = value / 2; // half of container width (500px)
const centerY = value / 2; // half of container height (500px)

const DataHub = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="relative w-[500px] h-[500px] ">
        {/* Dotted lines */}
        {bannerLogos.map((_, index) => {
          const angle = (index * 45 * Math.PI) / 180;
          const x = centerX + radiusX * Math.cos(angle);
          const y = centerY + radiusY * Math.sin(angle);

          const dx = x - centerX;
          const dy = y - centerY;
          const lineLength = Math.sqrt(dx * dx + dy * dy);
          const rotation = Math.atan2(dy, dx) * (180 / Math.PI);

          return (
            <div
              key={`line-${index}`}
              className="absolute left-1/2 top-1/2 border-t-4 border-dotted border-black-900 origin-left"
              style={{
                width: `${lineLength}px`,
                transform: `rotate(${rotation}deg)`,
              }}
            />
          );
        })}

        {/* Cylinders */}
        {bannerLogos.map((logo, index) => {
          // radian = deg / (PI /180)
          const angle = index * 45 * (Math.PI / 180);
          const x = centerX + radiusX * Math.cos(angle);
          const y = centerY + radiusY * Math.sin(angle);

          return (
            <div
              key={`cylinder-${index}`}
              className="absolute"
              style={{
                left: `${x}px`,
                top: `${y}px`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <Cylinder alt={logo.alt} image={logo.src} />
            </div>
          );
        })}

        {/* Center logo */}
        <Image
          alt="Unite database"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-[#eff2f7] p-1 "
          height={141}
          src={UniteDb}
          width={117}
        />
      </div>
    </div>
  );
};

export default DataHub;
