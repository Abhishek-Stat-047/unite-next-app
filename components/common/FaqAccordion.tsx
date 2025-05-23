import { Accordion, AccordionItem } from "@heroui/react";
import React from "react";
import {} from "react-icons/hi";
import { FaMinus, FaPlus } from "react-icons/fa";

import { FAQAccordionTypes } from "@/types";

interface FaqAccordionProps {
  faqs: FAQAccordionTypes["faqs"];
}

const CustomChevron = ({ isOpen }: { isOpen: boolean | undefined }) => {
  return isOpen ? (
    <FaMinus className="rotate-90" size={14} />
  ) : (
    <FaPlus size={14} />
  );
};

const FaqAccordion = ({ faqs }: FaqAccordionProps) => {
  return (
    <Accordion className="space-y-8 " showDivider={false}>
      {faqs.map((faq, index) => {
        return (
          <AccordionItem
            key={index + 1}
            aria-label={`accordion ${index + 1}`}
            classNames={{
              base: "bg-white dark:bg-black-900 px-10 py-4 rounded-3xl border-1 border-black-900 data-[open=true]:bg-sectionBg-300 data-[open=true]:shadow-[15px_18px_4px_1px_rgba(43,75,135,1)]",
              title: "font-semibold leading-snug text-base ",
              trigger: "data-[open=true]:bg-sectionBg-300 dark:bg-black-900",
              content: "bg-sectionBg-300 dark:bg-black-900",
              indicator: "text-black-900 dark:text-white",
            }}
            indicator={({ isOpen }) => <CustomChevron isOpen={isOpen} />}
            title={faq.question}
          >
            {faq.answer}
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default FaqAccordion;
