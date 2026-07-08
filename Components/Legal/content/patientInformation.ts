import type { LegalPageContent } from "../types";
import { siteConfig } from "@/lib/site";

export const patientInformationContent: LegalPageContent = {
  slug: "patient-information",
  metaTitle: "Patient Information",
  metaDescription:
    "Essential patient information for Sangi Hospital — visiting guidelines, rights, responsibilities, billing, and what to expect during your care.",
  hero: {
    eyebrow: "Patient Corner",
    title: "Patient Information",
    subtitle:
      "Everything you need to know before, during, and after your visit to Sangi Hospital.",
  },
  lastUpdated: "June 8, 2026",
  intro:
    "At Sangi Hospital, we believe informed patients receive better care. This guide outlines what to expect during your visit, your rights as a patient, responsibilities that help us serve you safely, and practical information for appointments, admissions, and follow-up care across our hospital network in Uttar Pradesh.",
  highlights: [
    {
      icon: "heart",
      title: "Compassionate Care",
      text: "Our teams are committed to respectful, dignified treatment at every stage of your healthcare journey.",
    },
    {
      icon: "clipboard",
      title: "Clear Guidance",
      text: "Know what documents to bring, how billing works, and how to prepare for your visit.",
    },
    {
      icon: "users",
      title: "Your Rights",
      text: "You have the right to information, privacy, and participation in decisions about your care.",
    },
  ],
  sections: [
    {
      id: "before-your-visit",
      title: "Before Your Visit",
      paragraphs: [
        "Preparing in advance helps our team serve you efficiently and reduces waiting time at the hospital.",
      ],
      list: [
        "Carry a valid government-issued photo ID (Aadhaar, passport, driving licence, or voter ID)",
        "Bring previous medical records, prescriptions, diagnostic reports, and imaging films if available",
        "List current medications, allergies, and chronic conditions",
        "Arrive 15 minutes early for OPD appointments to complete registration if required",
        "For paediatric patients, carry birth certificate or age proof and guardian identification",
      ],
    },
    {
      id: "appointments",
      title: "Appointments & Registration",
      paragraphs: [
        "You may book appointments online through our website, by phone, or at the hospital reception desk. Online requests are reviewed by our patient desk and confirmed based on doctor availability.",
        "At registration, you will be asked to verify contact details and provide basic demographic information. Please inform staff of any changes to your phone number or address.",
      ],
    },
    {
      id: "visiting-hours",
      title: "Visiting Hours & Attendants",
      paragraphs: [
        "General OPD hours are Monday to Saturday, 9:00 AM – 8:00 PM, unless otherwise notified for specific departments or holidays.",
        "Inpatient visiting policies may vary by ward. Please follow instructions from nursing staff to protect patient rest, infection control, and privacy. Attendants may be limited in critical care areas.",
      ],
    },
    {
      id: "emergency-care",
      title: "Emergency Care",
      paragraphs: [
        `Sangi Hospital provides 24×7 emergency services at designated locations. For life-threatening emergencies, call our helpline at ${siteConfig.phonesDisplay} immediately or proceed directly to the emergency department.`,
        "Do not use website contact forms for urgent medical situations. Emergency teams prioritise patients based on clinical severity.",
      ],
    },
    {
      id: "patient-rights",
      title: "Your Rights as a Patient",
      list: [
        "Receive care with respect, dignity, and without discrimination",
        "Be informed about your diagnosis, treatment options, risks, and expected outcomes in understandable language",
        "Privacy and confidentiality of your medical information",
        "Access your medical records as permitted by applicable law and hospital policy",
        "Seek a second opinion and participate in decisions about your care",
        "Voice concerns or complaints through our patient feedback channels",
      ],
    },
    {
      id: "patient-responsibilities",
      title: "Your Responsibilities",
      list: [
        "Provide accurate and complete health and personal information",
        "Follow the treatment plan agreed with your healthcare provider",
        "Inform staff promptly of any changes in your condition or adverse reactions",
        "Respect hospital staff, other patients, and hospital property",
        "Comply with hospital policies on smoking, infection control, and visitor guidelines",
        "Settle bills and insurance documentation in a timely manner as per hospital policy",
      ],
    },
    {
      id: "billing-insurance",
      title: "Billing & Insurance",
      paragraphs: [
        "Treatment estimates may be provided on request for planned procedures. Final charges depend on clinical requirements, length of stay, investigations, and consumables used during care.",
        "Please carry insurance cards, policy documents, and employer authorization where applicable. Our billing desk can guide you on cashless or reimbursement processes supported at your location.",
      ],
    },
    {
      id: "discharge-followup",
      title: "Discharge & Follow-Up",
      paragraphs: [
        "At discharge, you will receive instructions regarding medications, wound care, activity restrictions, and follow-up appointments. Please ask questions if anything is unclear before leaving the hospital.",
        "Follow-up visits help monitor recovery and adjust treatment when needed. Book follow-up appointments through our appointment desk or online portal.",
      ],
    },
    {
      id: "feedback",
      title: "Feedback & Grievances",
      paragraphs: [
        "Your feedback helps us improve. Share compliments, suggestions, or concerns through our Contact page, hospital reception, or patient relations desk. We review all feedback and respond within a reasonable timeframe.",
      ],
    },
    {
      id: "need-help",
      title: "Need Help?",
      paragraphs: [
        `For appointment support, billing queries, or general patient information, visit our Contact page or call our hospital helpline at ${siteConfig.phonesDisplay}. Our team is here to assist you throughout your care journey.`,
      ],
    },
  ],
};
