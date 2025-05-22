"use client";
import Banner from "@/components/section/Banner";
import ETLFeature from "@/components/section/ETLFeature";
import ETLProcessWorks from "@/components/section/ETLProcessWorks";
import PopularDataSource from "@/components/section/PopularDataSource";
import TrustedCompanies from "@/components/section/TrustedCompanies";

export default function Home() {
  return (
    <main className="space-y-24">
      <Banner />
      <TrustedCompanies />
      <ETLFeature />
      <PopularDataSource />
      <ETLProcessWorks />
    </main>
  );
}
