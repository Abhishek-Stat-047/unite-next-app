import Image from "next/image";

import Heading from "../common/Heading";

import {
  AllRound,
  BaneDigital,
  BoringMarketing,
  ECD,
  StoryTerrace,
  Trendify,
} from "@/public";

const headingSegments = [
  {
    text: "Trusted by",
    color: "black",
  },
  { text: " data driven \n ", color: "text-secondaryBlue-300" },
  { text: "companies", color: "black" },
];
const companyLogos = [
  { src: AllRound, alt: "AllRound" },
  { src: BaneDigital, alt: "BaneDigital" },
  { src: BoringMarketing, alt: "BoringMarketing" },
  { src: ECD, alt: "ECD" },
  { src: StoryTerrace, alt: "StoryTerrace" },
  { src: Trendify, alt: "Trendify" },
];
const TrustedCompanies = () => {
  return (
    <div className="mt-24">
      <Heading
        description={`From eCommerce brands to SaaS platforms, Unite powers \n reliable and fast data pipelines across industries.`}
        heading={headingSegments}
      />
      <div className="overflow-hidden whitespace-nowrap w-full bg-white py-4 mt-16">
        <div className="flex animate-marquee space-x-8">
          {[...companyLogos, ...companyLogos, ...companyLogos].map(
            (logo, idx) => (
              <Image
                key={idx}
                alt={logo.alt}
                className=" h-[65px] w-[150px]"
                height={65}
                src={logo.src}
                width={150}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default TrustedCompanies;
