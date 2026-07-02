import { siteConfig } from "@/lib/site";

export function getOrganizationJsonLd() {
  const siteUrl = siteConfig.url;

  return {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "@id": `${siteUrl}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteUrl,
    logo: `${siteUrl}/assets/images/icons/logo.png`,
    image: `${siteUrl}${siteConfig.defaultOgImage}`,
    description: siteConfig.description,
    telephone: siteConfig.phoneTel,
    email: siteConfig.email,
    areaServed: {
      "@type": "AdministrativeArea",
      name: siteConfig.region,
    },
    medicalSpecialty: siteConfig.specialties,
    department: siteConfig.locations.map((location) => ({
      "@type": "Hospital",
      name: `${siteConfig.name}, ${location}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: location,
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
    })),
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.linkedin,
      siteConfig.social.instagram,
      siteConfig.social.youtube,
    ],
  };
}

export function getWebsiteJsonLd() {
  const siteUrl = siteConfig.url;

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: siteConfig.name,
    url: siteUrl,
    description: siteConfig.description,
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
    inLanguage: siteConfig.locale,
  };
}

export function getHomePageJsonLd() {
  const siteUrl = siteConfig.url;

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteUrl}/#webpage`,
    url: siteUrl,
    name: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    isPartOf: {
      "@id": `${siteUrl}/#website`,
    },
    about: {
      "@id": `${siteUrl}/#organization`,
    },
    inLanguage: siteConfig.locale,
  };
}
