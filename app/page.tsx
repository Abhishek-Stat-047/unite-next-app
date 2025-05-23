"use client";
import Banner from "@/components/section/Banner";
import ETLFeature from "@/components/section/ETLFeature";
import ETLProcessWorks from "@/components/section/ETLProcessWorks";
import FaqSection from "@/components/section/FaqSection";
import PopularDataSource from "@/components/section/PopularDataSource";
import TrustedCompanies from "@/components/section/TrustedCompanies";
import { LandingPageFaq } from "@/utils/constants";

const headingSegments = [
  {
    text: "Got Questions? We’ve \n",
    color: "black",
  },
  { text: " Got Answers. ", color: "text-secondaryBlue-300" },
];

export default function Home() {
  return (
    <main className="space-y-24">
      <Banner />
      <TrustedCompanies />
      <ETLFeature />
      <PopularDataSource />
      <ETLProcessWorks />
      <FaqSection
        description={
          "Everything you need to know before get start building your first pipeline."
        }
        faqs={LandingPageFaq}
        heading={headingSegments}
      />
    </main>
  );
}
