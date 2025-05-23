import React from "react";

import Heading from "../common/Heading";
import FaqAccordion from "../common/FaqAccordion";
import ActionChip from "../common/ActionChip";

import { FAQAccordionTypes } from "@/types";
import { FAQ } from "@/public";

const FaqSection = ({ heading, description, faqs }: FAQAccordionTypes) => {
  return (
    <div className="py-16 bg-sectionBg-300 dark:bg-black-900 rounded-md">
      <ActionChip alt="Unite faq icon" iconSrc={FAQ} label="FAQ" />
      <Heading description={description} heading={heading} />
      <div className="mt-20 w-[70%] mx-auto">
        <FaqAccordion faqs={faqs} />
      </div>
    </div>
  );
};

export default FaqSection;
