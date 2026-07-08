import type { LegalPageContent } from "../types";
import { siteConfig } from "@/lib/site";

export const privacyPolicyContent: LegalPageContent = {
  slug: "privacy-policy",
  metaTitle: "Privacy Policy",
  metaDescription:
    "Learn how Sangi Hospital collects, uses, and protects your personal and health information when you use our website and hospital services.",
  hero: {
    eyebrow: "Legal",
    title: "Privacy Policy",
    subtitle:
      "Your privacy matters to us. This policy explains how we handle your personal and health-related information.",
  },
  lastUpdated: "June 8, 2026",
  intro:
    "Sangi Hospital is committed to protecting the privacy and confidentiality of patients, visitors, and users of our website. This Privacy Policy describes what information we collect, how we use it, and the choices available to you when interacting with our digital platforms and hospital services across Uttar Pradesh.",
  highlights: [
    {
      icon: "shield",
      title: "Patient-First Approach",
      text: "We collect only the information needed to deliver safe, effective healthcare and responsive patient support.",
    },
    {
      icon: "lock",
      title: "Secure Handling",
      text: "Appointment and contact submissions are transmitted securely and reviewed only by authorised staff.",
    },
    {
      icon: "file",
      title: "Transparent Use",
      text: "We clearly explain why data is collected and never sell your personal information to third parties.",
    },
  ],
  sections: [
    {
      id: "information-we-collect",
      title: "Information We Collect",
      paragraphs: [
        "We may collect information that you voluntarily provide when booking appointments, submitting contact forms, applying for careers, subscribing to updates, or communicating with our hospital team.",
      ],
      list: [
        "Name, phone number, email address, and city or preferred hospital location",
        "Appointment preferences such as department, visit type, and preferred date or time slot",
        "Messages, feedback, and inquiry details submitted through our forms",
        "Resume and employment details when you apply for a position at Sangi Hospital",
        "Technical data such as browser type, device information, and pages visited on our website",
      ],
    },
    {
      id: "how-we-use-information",
      title: "How We Use Your Information",
      paragraphs: [
        "Your information is used to support clinical coordination, patient communication, and the operation of our hospital network. We do not use your data for purposes unrelated to healthcare delivery without your consent.",
      ],
      list: [
        "Confirming, rescheduling, or following up on appointment requests",
        "Responding to patient queries, billing questions, and general support requests",
        "Improving website performance, content relevance, and user experience",
        "Processing job applications and HR-related communication",
        "Complying with applicable laws, regulations, and lawful requests from authorities",
      ],
    },
    {
      id: "health-information",
      title: "Health & Medical Information",
      paragraphs: [
        "Sensitive health information shared during hospital visits is handled under our clinical confidentiality standards and applicable healthcare regulations in India. Online forms are intended for appointment requests and general inquiries — not for emergency medical communication.",
        `For urgent or life-threatening conditions, please call our 24×7 helpline at ${siteConfig.phonesDisplay} or visit the nearest Sangi Hospital emergency desk immediately.`,
      ],
    },
    {
      id: "sharing-disclosure",
      title: "Sharing & Disclosure",
      paragraphs: [
        "We do not sell or rent your personal information. We may share limited data only when necessary:",
      ],
      list: [
        "With authorised hospital staff involved in your care or appointment coordination",
        "With trusted service providers who support website hosting, email delivery, or technical operations under confidentiality obligations",
        "When required by law, court order, or regulatory authority",
        "To protect the rights, safety, and security of patients, staff, and the hospital",
      ],
    },
    {
      id: "data-retention",
      title: "Data Retention",
      paragraphs: [
        "We retain personal information only for as long as needed to fulfil the purposes described in this policy, meet legal obligations, resolve disputes, and maintain appropriate medical or administrative records.",
      ],
    },
    {
      id: "your-rights",
      title: "Your Rights & Choices",
      list: [
        "Request access to personal information we hold about you, subject to applicable law",
        "Request correction of inaccurate or incomplete information",
        "Withdraw consent for non-essential communications where consent is the legal basis",
        "Opt out of promotional emails using the unsubscribe option when available",
        "Contact us to raise privacy concerns or request deletion where legally permissible",
      ],
    },
    {
      id: "children",
      title: "Children's Privacy",
      paragraphs: [
        "Our website is not directed at children under 13 years of age. If a parent or guardian believes a child has submitted personal information through our site without appropriate consent, please contact us so we can take appropriate action.",
      ],
    },
    {
      id: "policy-updates",
      title: "Updates to This Policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. The revised date at the top of this page will indicate when the policy was last updated.",
      ],
    },
    {
      id: "contact",
      title: "Contact Us",
      paragraphs: [
        `For privacy-related questions or requests regarding your personal information, please contact our patient support team through the Contact page or call our hospital helpline at ${siteConfig.phonesDisplay} during working hours.`,
      ],
    },
  ],
};
