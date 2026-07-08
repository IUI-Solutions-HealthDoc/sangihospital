import { hospitalsMegaMenu } from "@/lib/hospitals";
import { siteConfig } from "@/lib/site";

export type CareerJob = {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  openings: number;
  type: string;
  locations: string;
  experience: string;
  qualifications: string[];
  responsibilities: string[];
  perks: string[];
  image: string;
  accent: string;
};

export const careersPage = {
  hero: {
    title: "Build Your Career at Sangi Hospital",
    subtitle:
      "Join a growing multi-speciality healthcare network. We are hiring passionate doctors, nurses, paramedics, and hospital professionals across Uttar Pradesh.",
    backgroundImage: "/assets/images/home/20250612045907.jpg",
  },
  intro: {
    eyebrow: "Careers at Sangi",
    heading: "Grow With a",
    headingAccent: "Trusted Healthcare Family",
    description:
      "At Sangi Hospital, we invest in people who care deeply about patients. Explore open roles, apply online, and take the next step in your medical career with structured growth, modern facilities, and compassionate teamwork.",
    stats: [
      { value: "4", label: "Hospital Locations" },
      { value: "18+", label: "Specialities" },
      { value: "500+", label: "Team Members" },
      { value: "24x7", label: "Clinical Operations" },
    ],
  },
  culture: {
    eyebrow: "Why Sangi Hospital",
    heading: "A Workplace Built on",
    headingAccent: "Care & Excellence",
    points: [
      {
        title: "Patient-First Culture",
        description:
          "Every role — clinical or administrative — contributes to safer, faster, and more compassionate patient care.",
      },
      {
        title: "Professional Growth",
        description:
          "Training programs, mentorship, and clear career pathways for doctors, nurses, and support staff.",
      },
      {
        title: "Modern Infrastructure",
        description:
          "Work with advanced diagnostics, ICU facilities, digital records, and well-equipped wards across our network.",
      },
      {
        title: "Multi-Location Opportunities",
        description:
          "Choose from hospitals across Raya and Lakshi Nagar, with upcoming projects in Etah and Mathura.",
      },
    ],
  },
  process: {
    eyebrow: "Hiring Process",
    heading: "Simple",
    headingAccent: "4-Step Application",
    steps: [
      { step: "01", title: "Choose a Role", description: "Select the position that matches your profile." },
      { step: "02", title: "Submit Application", description: "Fill the online form with your details and experience." },
      { step: "03", title: "HR Review", description: "Our recruitment team shortlists suitable candidates." },
      { step: "04", title: "Interview & Join", description: "Attend interview and onboarding at your preferred location." },
    ],
  },
  contact: {
    email: "careers@sangihospital.com",
    phone: siteConfig.phonesDisplay,
    hours: "Mon – Sat: 10:00 AM – 6:00 PM",
  },
} as const;

export const careerJobs: CareerJob[] = [
  {
    id: "doctors",
    slug: "doctors",
    title: "Doctors & Consultants",
    shortTitle: "Doctors",
    tagline: "Lead clinical excellence across specialities",
    description:
      "We are hiring MBBS, MD, MS, and DM consultants across general medicine, surgery, paediatrics, gynaecology, orthopaedics, and emergency care.",
    openings: 12,
    type: "Full-time",
    locations: "Multiple Locations",
    experience: "1–15+ years",
    qualifications: ["MBBS", "MD / MS / DNB", "Valid medical registration"],
    responsibilities: [
      "Provide OPD, IPD, and emergency consultations",
      "Coordinate with nursing and diagnostic teams",
      "Maintain clinical documentation and patient safety standards",
      "Participate in hospital quality and training initiatives",
    ],
    perks: ["Competitive compensation", "Consultation support", "Academic exposure", "Relocation assistance"],
    image: "/assets/images/home/20240920064059.jpg",
    accent: "#4a6fd4",
  },
  {
    id: "nursing-staff",
    slug: "nursing-staff",
    title: "Nursing Staff",
    shortTitle: "Nursing",
    tagline: "Compassionate bedside care at scale",
    description:
      "Join our nursing teams for ICU, OT, ward, emergency, and maternity units. GNM, B.Sc Nursing, and experienced staff nurses are welcome.",
    openings: 24,
    type: "Full-time / Shift",
    locations: "All Hospitals",
    experience: "Fresher to 10+ years",
    qualifications: ["GNM / B.Sc Nursing", "State nursing council registration", "ICU/OT experience preferred"],
    responsibilities: [
      "Deliver safe patient care across assigned units",
      "Administer medications and monitor vitals",
      "Support doctors during procedures and rounds",
      "Maintain infection control and nursing protocols",
    ],
    perks: ["Shift allowances", "Uniform & meals", "Skill upgradation", "Staff accommodation options"],
    image: "/assets/images/home/20250310083759.jpg",
    accent: "#2d8f6f",
  },
  {
    id: "paramedical",
    slug: "paramedical",
    title: "Paramedical Staff",
    shortTitle: "Paramedical",
    tagline: "Diagnostics, therapy & technical support",
    description:
      "Openings for lab technicians, radiology technicians, physiotherapists, OT technicians, and other allied health professionals.",
    openings: 18,
    type: "Full-time",
    locations: "Multiple Locations",
    experience: "0–8 years",
    qualifications: ["Diploma / Degree in relevant field", "Certification where applicable", "Hands-on equipment experience"],
    responsibilities: [
      "Operate lab, radiology, or therapy equipment",
      "Prepare reports and assist clinical teams",
      "Follow safety, calibration, and quality standards",
      "Support emergency and inpatient services",
    ],
    perks: ["Modern equipment exposure", "Department training", "Stable shifts", "Career certification support"],
    image: "/assets/images/home/20250612045907.jpg",
    accent: "#c45d2c",
  },
  {
    id: "superintendent",
    slug: "superintendent",
    title: "Hospital Superintendent",
    shortTitle: "Superintendent",
    tagline: "Operational leadership for hospital units",
    description:
      "Experienced hospital administrators to oversee daily operations, compliance, staff coordination, and patient experience at unit level.",
    openings: 3,
    type: "Full-time",
    locations: "Select Locations",
    experience: "8–20 years",
    qualifications: ["Hospital administration / healthcare management", "Prior superintendent or admin lead role", "Strong compliance knowledge"],
    responsibilities: [
      "Manage daily hospital operations and departments",
      "Ensure regulatory, safety, and quality compliance",
      "Coordinate with medical heads and corporate teams",
      "Drive patient satisfaction and process improvements",
    ],
    perks: ["Leadership role", "Performance incentives", "Executive benefits", "Network-wide visibility"],
    image: "/assets/images/home/20251125052239.jpg",
    accent: "#7c4dff",
  },
  {
    id: "administration-staff",
    slug: "administration-staff",
    title: "Administration Staff",
    shortTitle: "Administration",
    tagline: "Front desk, billing, HR & back-office",
    description:
      "Hiring for reception, medical records, billing, insurance desk, HR support, purchase, and general administration roles.",
    openings: 15,
    type: "Full-time",
    locations: "All Hospitals",
    experience: "Fresher to 7 years",
    qualifications: ["Graduate / relevant diploma", "Computer proficiency", "Hospital admin experience preferred"],
    responsibilities: [
      "Handle front desk, billing, or records operations",
      "Support patients with registration and documentation",
      "Coordinate with clinical and finance teams",
      "Maintain accurate data and service standards",
    ],
    perks: ["Desk-based roles available", "Stable work hours", "Internal promotions", "Friendly team culture"],
    image: "/assets/images/home/servicehome.png",
    accent: "#00838f",
  },
];

export const careerHospitals = hospitalsMegaMenu.regions.flatMap((region) =>
  region.states.flatMap((state) =>
    state.hospitals.map((hospital) => ({
      value: hospital.id,
      label: hospital.name,
      city: hospital.city,
    })),
  ),
);

export const careerExperienceLevels = [
  { value: "fresher", label: "Fresher (0–1 year)" },
  { value: "1-3", label: "1 – 3 years" },
  { value: "3-5", label: "3 – 5 years" },
  { value: "5-10", label: "5 – 10 years" },
  { value: "10-plus", label: "10+ years" },
];

export function getCareerJobBySlug(slug: string) {
  return careerJobs.find((job) => job.slug === slug);
}

export function getCareerJobSlugs() {
  return careerJobs.map((job) => job.slug);
}
