import { siteConfig } from "@/lib/site";

export const contactPage = {
  hero: {
    title: "Contact Us",
    subtitle:
      "Have a question about our services, doctors, or hospital locations? Send us a message and our team will respond promptly.",
    backgroundImage: "/assets/images/sections/appointment/hero.jpg",
  },
  intro: {
    eyebrow: "Get in Touch",
    heading: "We Are Here",
    headingAccent: "To Help You",
    description:
      "Reach out for appointment support, billing queries, feedback, or general information about Sangi Hospital.",
  },
  subjects: [
    { value: "appointment", label: "Appointment Support" },
    { value: "billing", label: "Billing & Insurance" },
    { value: "feedback", label: "Patient Feedback" },
    { value: "careers", label: "Careers & HR" },
    { value: "general", label: "General Inquiry" },
  ],
  contactInfo: [
    {
      label: "Phone",
      phones: siteConfig.phones,
    },
    {
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      label: "Region",
      value: siteConfig.region,
    },
  ],
} as const;
