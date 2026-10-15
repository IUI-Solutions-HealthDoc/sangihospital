import type { Metadata } from "next";
import Hero from "@/Components/Home/Hero";
import Services from "@/Components/Home/Services";
import OurDepartment from "@/Components/Home/OurDepartment";
// import Doctorprof from "@/Components/Home/Doctorprof";
import AllHospitals from "@/Components/Home/AllHospitals";
import AppointmentCta from "@/Components/Home/AppointmentCta";
import {
  getHomePageJsonLd,
  getOrganizationJsonLd,
  getWebsiteJsonLd,
} from "@/lib/json-ld";
import { siteConfig } from "@/lib/site";
import "@/Components/Home/home.css";
import Sangidef from "@/Components/ui/Sangidef";
import Testimonials from "@/Components/ui/Testimonials";
import Casestories from "@/Components/ui/Casestories";
import NabhCerti from "@/Components/ui/NabhCerti";
import TPATicker from "@/Components/Home/TPATicker";

export const metadata: Metadata = {
  title: `${siteConfig.legalName} | ${siteConfig.tagline} in Uttar Pradesh`,
  description: siteConfig.description,
  keywords: [
    ...siteConfig.keywords,
    "best hospital near me",
    "specialist doctors Uttar Pradesh",
    "hospital appointment online",
  ],
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
    type: "website",
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} healthcare services`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [siteConfig.defaultOgImage],
  },
  alternates: {
    canonical: "/",
  },
};

const structuredData = [
  getOrganizationJsonLd(),
  getWebsiteJsonLd(),
  getHomePageJsonLd(),
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main id="main-content">
        <Hero />
        <AllHospitals />
        <OurDepartment />
        <Services />
        {/* <Doctorprof /> */}
        <Casestories />
        <AppointmentCta />
        <TPATicker />
        <Sangidef />
        <NabhCerti />
        <Testimonials />
      </main>
    </>
  );
}
