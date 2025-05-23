import Image from "next/image";

import Heading from "../common/Heading";

import { trustedCompanyLogos } from "@/utils/constants";

const headingSegments = [
  {
    text: "Trusted by",
    color: "black",
  },
  { text: " data driven \n ", color: "text-secondaryBlue-300" },
  { text: "companies", color: "black" },
];

const TrustedCompanies = () => {
  return (
    <div className="">
      <Heading
        description={`From eCommerce brands to SaaS platforms, Unite powers \n reliable and fast data pipelines across industries.`}
        heading={headingSegments}
      />
      <div className="overflow-hidden whitespace-nowrap w-full bg-white dark:bg-black-900 py-4 mt-16">
        <div className="flex animate-marquee space-x-8">
          {[
            ...trustedCompanyLogos,
            ...trustedCompanyLogos,
            ...trustedCompanyLogos,
          ].map((logo, idx) => (
            <Image
              key={idx}
              alt={logo.alt}
              className=" h-[65px] w-[150px]"
              height={65}
              src={logo.src}
              width={150}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedCompanies;
