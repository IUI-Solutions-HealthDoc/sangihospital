import { siteConfig } from "@/lib/site";

export type BlogAuthor = {
  name: string;
  role: string;
  avatar: string;
};

export type BlogComment = {
  id: string;
  author: string;
  avatar: string;
  date: string;
  time: string;
  text: string;
  likes: number;
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  author: BlogAuthor;
  publishedDate: string;
  publishedTime: string;
  readTime: string;
  likes: number;
  commentsCount: number;
  tags: string[];
  content: string[];
  comments: BlogComment[];
};

/** Unsplash images — https://unsplash.com (verified URLs) */
export const blogUnsplashImages = {
  hero: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80",
  heartHealth:
    "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=1200&q=80",
  hospitalQuality:
    "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80",
  maternity:
    "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80",
  emergency:
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
  communityHealth:
    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80",
  authorCardiologist:
    "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=200&h=200&q=80",
  authorChairperson:
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80",
  authorGynecologist:
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&h=200&q=80",
  authorEmergency:
    "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&h=200&q=80",
  authorFounder:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80",
  commenter1:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200&q=80",
  commenter2:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
  commenter3:
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&h=200&q=80",
  commenter4:
    "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=200&h=200&q=80",
  commenter5:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80",
} as const;

export const blogPage = {
  hero: {
    eyebrow: "Health Insights",
    title: "Sangi Hospital Blog",
    subtitle:
      "Expert articles on wellness, prevention, and compassionate care from our medical team.",
    backgroundImage: blogUnsplashImages.hero,
  },
};

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "heart-health-prevention-guide",
    title: "10 Essential Heart Health Tips Every Family Should Know",
    excerpt:
      "Simple lifestyle changes and regular screenings can significantly reduce cardiovascular risk. Our cardiology team shares practical guidance for everyday heart care.",
    category: "Cardiology",
    image: blogUnsplashImages.heartHealth,
    author: {
      name: "Dr. Rajesh Kumar",
      role: "Senior Cardiologist",
      avatar: blogUnsplashImages.authorCardiologist,
    },
    publishedDate: "2026-03-12",
    publishedTime: "09:30 AM",
    readTime: "6 min read",
    likes: 248,
    commentsCount: 18,
    tags: ["Heart Health", "Prevention", "Wellness"],
    content: [
      "Heart disease remains one of the leading health concerns across India, yet many risk factors are preventable with awareness and consistent habits. At Sangi Hospital, we believe heart care should begin long before an emergency.",
      "A balanced diet rich in vegetables, whole grains, and lean protein supports healthy cholesterol levels. Limiting processed foods, excessive salt, and sugary drinks can make a measurable difference over time.",
      "Regular physical activity — even a brisk 30-minute walk five days a week — strengthens the heart muscle and improves circulation. For patients with existing conditions, our physiotherapy team can recommend safe routines.",
      "Routine check-ups including blood pressure, lipid profile, and ECG screenings help detect issues early. Our cardiology department offers comprehensive diagnostics with same-day reporting at affordable rates.",
      "Stress management, adequate sleep, and avoiding tobacco are equally important. If you experience chest discomfort, breathlessness, or unusual fatigue, seek medical attention without delay.",
    ],
    comments: [
      {
        id: "c1",
        author: "Priya Mehta",
        avatar: blogUnsplashImages.commenter1,
        date: "12 Mar 2026",
        time: "11:15 AM",
        text: "Very helpful article. The tips on daily walking are easy to follow for my parents.",
        likes: 12,
      },
      {
        id: "c2",
        author: "Amit Singh",
        avatar: blogUnsplashImages.commenter2,
        date: "12 Mar 2026",
        time: "02:40 PM",
        text: "Glad to see affordable screening options mentioned. More families need this information.",
        likes: 8,
      },
    ],
  },
  {
    id: "2",
    slug: "nabh-quality-care-explained",
    title: "What NABH Entry Level Certification Means for Patients",
    excerpt:
      "Understanding how accreditation improves patient safety, infection control, and the overall quality of care at Sangi Hospital.",
    category: "Hospital Quality",
    image: blogUnsplashImages.hospitalQuality,
    author: {
      name: "Dr. Sangita Singh",
      role: "Chairperson, Sangi Hospital",
      avatar: blogUnsplashImages.authorChairperson,
    },
    publishedDate: "2026-02-28",
    publishedTime: "04:15 PM",
    readTime: "5 min read",
    likes: 312,
    commentsCount: 24,
    tags: ["NABH", "Patient Safety", "Quality Care"],
    content: [
      "NABH Entry Level Certification represents a hospital's commitment to structured quality improvement. For patients, this translates into safer environments, better documentation, and stronger clinical governance.",
      "The framework covers essential patient safety practices — from medication protocols to emergency response systems. Every department at Sangi Hospital aligns with these standards to ensure consistent care.",
      "Infection control is a cornerstone of accreditation. Our sterilisation protocols, hand hygiene programmes, and isolation procedures are audited regularly to protect patients and staff alike.",
      "Accreditation also strengthens our eligibility for government and insurance empanelment, making quality healthcare more accessible to families in Tier 2 and Tier 3 cities across Uttar Pradesh.",
      "When you choose an accredited hospital, you choose an institution that is accountable, transparent, and continuously improving. That is the promise behind every visit to Sangi Hospital.",
    ],
    comments: [
      {
        id: "c3",
        author: "Neha Agarwal",
        avatar: blogUnsplashImages.commenter3,
        date: "01 Mar 2026",
        time: "10:05 AM",
        text: "This explains accreditation in a way patients can actually understand. Thank you.",
        likes: 15,
      },
    ],
  },
  {
    id: "3",
    slug: "maternity-care-journey",
    title: "A Complete Guide to Maternity Care at Sangi Hospital",
    excerpt:
      "From prenatal check-ups to postnatal support, here is what expecting mothers can expect throughout their care journey with us.",
    category: "Gynecology",
    image: blogUnsplashImages.maternity,
    author: {
      name: "Dr. Anjali Verma",
      role: "Consultant Gynecologist",
      avatar: blogUnsplashImages.authorGynecologist,
    },
    publishedDate: "2026-02-15",
    publishedTime: "11:00 AM",
    readTime: "7 min read",
    likes: 189,
    commentsCount: 31,
    tags: ["Maternity", "Pregnancy", "Women's Health"],
    content: [
      "Welcoming a child is one of life's most meaningful experiences, and every mother deserves care that is both medically excellent and emotionally supportive. Our maternity wing is designed around that belief.",
      "Prenatal visits include regular ultrasounds, blood tests, and nutritional counselling. Our gynecology team monitors both mother and baby closely through each trimester.",
      "Our labour rooms and NICU facilities are equipped for routine and high-risk deliveries. Experienced obstetricians, anaesthetists, and neonatal nurses are available around the clock.",
      "We encourage family involvement while respecting the mother's preferences for birthing plans. Pain management options are discussed openly so every patient feels informed and empowered.",
      "Postnatal care includes lactation support, newborn screening, and follow-up visits. Our goal is to ensure both mother and baby leave the hospital healthy, confident, and well-supported.",
    ],
    comments: [
      {
        id: "c4",
        author: "Sunita Devi",
        avatar: blogUnsplashImages.commenter4,
        date: "16 Feb 2026",
        time: "08:20 AM",
        text: "I delivered at Sangi Hospital last year. The nursing staff were incredibly caring throughout.",
        likes: 22,
      },
      {
        id: "c5",
        author: "Kavita Sharma",
        avatar: blogUnsplashImages.commenter5,
        date: "17 Feb 2026",
        time: "06:55 PM",
        text: "The prenatal counselling sessions were very reassuring for a first-time mother like me.",
        likes: 9,
      },
    ],
  },
  {
    id: "4",
    slug: "emergency-care-when-every-minute-counts",
    title: "Emergency Care: When Every Minute Counts",
    excerpt:
      "Learn how our 24x7 emergency department operates and what to do in critical situations before reaching the hospital.",
    category: "Emergency",
    image: blogUnsplashImages.emergency,
    author: {
      name: "Dr. Vikram Malhotra",
      role: "Head of Emergency Medicine",
      avatar: blogUnsplashImages.authorEmergency,
    },
    publishedDate: "2026-01-22",
    publishedTime: "08:45 AM",
    readTime: "5 min read",
    likes: 276,
    commentsCount: 14,
    tags: ["Emergency", "Trauma Care", "24x7 Services"],
    content: [
      "Medical emergencies demand speed, skill, and calm coordination. Sangi Hospital's emergency department operates 24 hours a day with trained trauma teams and advanced life-support equipment.",
      `If you witness a cardiac arrest, severe bleeding, stroke symptoms, or difficulty breathing, call our emergency helpline at ${siteConfig.phonesDisplay} immediately while arranging transport to the nearest facility.`,
      "Our triage system prioritises patients based on severity, ensuring critical cases receive immediate attention. Ambulance services are integrated with the ER for seamless handoffs.",
      "The emergency team works closely with ICU, surgery, and diagnostics departments so patients move from stabilisation to definitive treatment without unnecessary delays.",
      "Preparation saves lives. Keep emergency contacts accessible, know your blood group, and carry a list of current medications. These small steps help our team act faster when it matters most.",
    ],
    comments: [
      {
        id: "c6",
        author: "Rohit Gupta",
        avatar: blogUnsplashImages.commenter1,
        date: "22 Jan 2026",
        time: "01:30 PM",
        text: "Important reminder about keeping emergency numbers saved. Every family should read this.",
        likes: 18,
      },
    ],
  },
  {
    id: "5",
    slug: "affordable-healthcare-tier-2-cities",
    title: "Bringing Affordable Healthcare to Tier 2 Cities",
    excerpt:
      "How Sangi Hospital is bridging the gap between metropolitan medical standards and community-level accessibility across Uttar Pradesh.",
    category: "Community Health",
    image: blogUnsplashImages.communityHealth,
    author: {
      name: "Mr. Akhileshwar K. Singh",
      role: "Founder, Sangi Hospital",
      avatar: blogUnsplashImages.authorFounder,
    },
    publishedDate: "2026-01-08",
    publishedTime: "03:20 PM",
    readTime: "6 min read",
    likes: 341,
    commentsCount: 27,
    tags: ["Accessibility", "Community", "Healthcare"],
    content: [
      "For decades, families in smaller towns have travelled hours to cities for surgeries, diagnostics, and specialist consultations. Sangi Hospital was founded to change that reality.",
      "We invest in modern equipment, experienced doctors, and structured clinical processes — then price our services so ordinary families can afford them without selling assets or taking on debt.",
      "Partnerships with Ayushman Bharat, ECHS, ESIC, and major TPA networks ensure that insurance and government schemes translate into real access at our facilities.",
      "Each new hospital location is chosen based on community need. Our expansion into Lakshmi Nagar, Etah, and Mathura reflects a commitment to take quality care closer to where people live.",
      "Healthcare equity is not a slogan for us — it is the reason we exist. Every patient who walks through our doors deserves the same dignity, attention, and clinical excellence.",
    ],
    comments: [
      {
        id: "c7",
        author: "Manoj Tiwari",
        avatar: blogUnsplashImages.commenter2,
        date: "09 Jan 2026",
        time: "09:10 AM",
        text: "Proud to see quality healthcare growing in our region. This is exactly what we needed.",
        likes: 25,
      },
      {
        id: "c8",
        author: "Rekha Pandey",
        avatar: blogUnsplashImages.commenter3,
        date: "10 Jan 2026",
        time: "04:45 PM",
        text: "The Ayushman Bharat empanelment has helped our entire village access treatment.",
        likes: 14,
      },
    ],
  },
];
