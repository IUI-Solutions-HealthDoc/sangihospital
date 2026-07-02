import AppImage from "@/Components/ui/AppImage";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import "./casestories.css";

type CaseStory = {
  id: string;
  category: string;
  title: string;
  badge: string;
  image: string;
  href: string;
};

const caseStories: CaseStory[] = [
  {
    id: "patient-support",
    category: "Personal Consulting",
    title: "Supports Patients",
    badge: "Recovery Care",
    image: "/assets/images/home/supportingpatients.jpg",
    href: "/case-studies/patient-support",
  },
  {
    id: "gynecology",
    category: "Gynecology Operation",
    title: "Successful Maternity Care",
    badge: "Maternity",
    image: "/assets/images/home/succesfulmaternitycare.jpg",
    href: "/case-studies/gynecology",
  },
  {
    id: "cardiology",
    category: "Heart Department",
    title: "Advanced Heart Surgery",
    badge: "Cardiology",
    image: "/assets/images/home/advancehurtsergery.jpg",
    href: "/case-studies/cardiology",
  },
];

function CaseStoryCard({ story }: { story: CaseStory }) {
  return (
    <article className="case-stories__card">
      <div className="case-stories__image-wrap">
        <span className="case-stories__badge">{story.badge}</span>
        <AppImage
          src={story.image}
          alt={story.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="case-stories__image"
        />
      </div>

      <div className="case-stories__body">
        <p className="case-stories__category">{story.category}</p>
        <h3 className="case-stories__card-title">{story.title}</h3>
      </div>

      <div className="case-stories__footer">
        <Link href={story.href} className="case-stories__link">
          Learn More
          <span className="case-stories__arrow" aria-hidden="true">
            <ArrowUpRight size={18} strokeWidth={2} />
          </span>
        </Link>
      </div>
    </article>
  );
}

export default function Casestories() {
  return (
    <section className="case-stories" aria-labelledby="case-stories-title">
      <div className="case-stories__inner">
        <header className="case-stories__header">
          <div>
            <p className="case-stories__eyebrow">Completed Case Studies</p>
            <h2 id="case-stories-title" className="case-stories__title">
              Transform Our Latest Success Case Studies
            </h2>
          </div>

          <p className="case-stories__intro">
            Real patient journeys from Sangi Hospital — showcasing expert care,
            modern treatment, and compassionate recovery across our speciality
            departments.
          </p>
        </header>

        <div className="case-stories__grid">
          {caseStories.map((story) => (
            <CaseStoryCard key={story.id} story={story} />
          ))}
        </div>
      </div>
    </section>
  );
}
