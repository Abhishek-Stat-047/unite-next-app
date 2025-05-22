"use client";
import Banner from "@/components/section/Banner";
import ETLFeature from "@/components/section/ETLFeature";
import TrustedCompanies from "@/components/section/TrustedCompanies";

export default function Home() {
  return (
    <main>
      <Banner />
      <TrustedCompanies />
      <ETLFeature />
    </main>
  );
}
