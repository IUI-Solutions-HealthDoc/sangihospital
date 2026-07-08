import type { LegalPageContent } from "../types";
import { siteConfig } from "@/lib/site";

export const termsOfUseContent: LegalPageContent = {
  slug: "terms-of-use",
  metaTitle: "Terms of Use",
  metaDescription:
    "Read the Terms of Use governing access to the Sangi Hospital website, online appointment requests, and related digital services.",
  hero: {
    eyebrow: "Legal",
    title: "Terms of Use",
    subtitle:
      "Please read these terms carefully before using the Sangi Hospital website and online services.",
  },
  lastUpdated: "June 8, 2026",
  intro:
    "These Terms of Use govern your access to and use of the Sangi Hospital website, appointment request forms, contact tools, and related digital content. By using our website, you agree to these terms. If you do not agree, please discontinue use of the site.",
  highlights: [
    {
      icon: "file",
      title: "Website Use",
      text: "Our digital platforms are provided for information, appointment requests, and patient support — not emergency care.",
    },
    {
      icon: "shield",
      title: "Medical Disclaimer",
      text: "Online content is educational and does not replace professional medical diagnosis or treatment.",
    },
    {
      icon: "users",
      title: "Fair Use",
      text: "Users must interact with our services lawfully, respectfully, and without misuse of hospital systems.",
    },
  ],
  sections: [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      paragraphs: [
        "By accessing or using any part of the Sangi Hospital website, you confirm that you have read, understood, and agree to be bound by these Terms of Use and our Privacy Policy. These terms apply to all visitors, patients, caregivers, and job applicants using our online services.",
      ],
    },
    {
      id: "website-purpose",
      title: "Purpose of the Website",
      paragraphs: [
        "The Sangi Hospital website provides general information about our hospitals, specialities, services, doctors, careers, and patient resources. It also allows users to submit appointment requests, contact inquiries, and career applications.",
        "Submitting a form does not guarantee appointment confirmation until verified by our hospital team. Availability may vary by location, department, and clinical schedule.",
      ],
    },
    {
      id: "medical-disclaimer",
      title: "Medical Disclaimer",
      paragraphs: [
        "Content on this website — including articles, service descriptions, speciality information, and patient stories — is provided for general informational purposes only. It is not intended as medical advice, diagnosis, or treatment recommendation.",
        "Always seek the advice of a qualified healthcare professional for any medical condition. Never disregard professional medical advice or delay seeking care because of something you read on this website.",
        `In a medical emergency, call our helpline at ${siteConfig.phonesDisplay} or visit the nearest Sangi Hospital emergency department immediately.`,
      ],
    },
    {
      id: "user-responsibilities",
      title: "User Responsibilities",
      list: [
        "Provide accurate and complete information when submitting forms or inquiries",
        "Use the website only for lawful purposes and in a manner that does not harm the hospital, staff, or other users",
        "Refrain from attempting unauthorised access to systems, data, or accounts",
        "Not upload malicious code, spam, or misleading content through any website feature",
        "Respect intellectual property rights in all website content and branding",
      ],
    },
    {
      id: "appointments",
      title: "Appointment Requests",
      paragraphs: [
        "Online appointment submissions are requests only. Final confirmation depends on doctor availability, hospital capacity, and clinical suitability. Our team may contact you by phone or email to verify details.",
        "Sangi Hospital reserves the right to reschedule, redirect, or decline requests when necessary for patient safety or operational reasons.",
      ],
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      paragraphs: [
        "All text, graphics, logos, images, layouts, and software on this website are owned by or licensed to Sangi Hospital and protected by applicable intellectual property laws. You may not copy, reproduce, distribute, or create derivative works without prior written permission.",
      ],
    },
    {
      id: "third-party-links",
      title: "Third-Party Links",
      paragraphs: [
        "Our website may contain links to external websites or services for convenience. Sangi Hospital is not responsible for the content, privacy practices, or availability of third-party sites. Accessing external links is at your own discretion.",
      ],
    },
    {
      id: "limitation-liability",
      title: "Limitation of Liability",
      paragraphs: [
        "To the fullest extent permitted by law, Sangi Hospital shall not be liable for any indirect, incidental, or consequential damages arising from your use of the website, including delays in form submission, temporary unavailability, or reliance on website content.",
        "Nothing in these terms limits liability where such limitation is prohibited by applicable law.",
      ],
    },
    {
      id: "changes-termination",
      title: "Changes & Termination",
      paragraphs: [
        "We may modify these Terms of Use at any time by posting an updated version on this page. Continued use of the website after changes are posted constitutes acceptance of the revised terms.",
        "We reserve the right to restrict or terminate access to the website for conduct that violates these terms or poses risk to the hospital or its users.",
      ],
    },
    {
      id: "governing-law",
      title: "Governing Law",
      paragraphs: [
        "These Terms of Use are governed by the laws of India. Any disputes arising from use of this website shall be subject to the jurisdiction of competent courts in Uttar Pradesh, unless otherwise required by applicable law.",
      ],
    },
  ],
};
