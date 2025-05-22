//

import Heading from "../common/Heading";
import ETLFeatureCard from "../cards/ETLFeatureCard";
import ActionChip from "../common/ActionChip";

import { ETLFeatures } from "@/utils/constants";
import { OurFeatureIcon } from "@/public";

//

const headingSegments = [
  {
    text: "Smart, Simple, Powerful – ",
    color: "black",
  },
  { text: " ETL \n Features ", color: "text-secondaryBlue-300" },
  { text: "that Save Time & Cost", color: "black" },
];
const ETLFeature = () => {
  return (
    <div className="md:px-16">
      <ActionChip
        alt="ETL features icons"
        iconSrc={OurFeatureIcon}
        label="Our Features"
      />
      <Heading
        description={`From no-code pipeline creation to automatic schema handling, Unite is \n packed with features that help you move data faster and smarter.`}
        heading={headingSegments}
      />
      <div className="grid md:grid-cols-4 gap-6 mt-20">
        {ETLFeatures.map((feature, index) => {
          return <ETLFeatureCard key={index} {...feature} />;
        })}
      </div>
    </div>
  );
};

export default ETLFeature;
