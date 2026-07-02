import AppImage from "@/Components/ui/AppImage";
import Link from "next/link";
import { ArrowUpRight, Quote, Sparkles } from "lucide-react";
import type { PatientStory } from "./patientStoriesContent";
import PatientStoryMeta from "./PatientStoryMeta";

type PatientStoryCardProps = {
  story: PatientStory;
  featured?: boolean;
};

export default function PatientStoryCard({
  story,
  featured = false,
}: PatientStoryCardProps) {
  return (
    <article className={`pstory-card${featured ? " pstory-card--featured" : ""}`}>
      <Link
        href={`/patient-stories/${story.slug}`}
        className="pstory-card__media"
      >
        <AppImage
          src={story.image}
          alt={story.title}
          fill
          sizes={featured ? "(max-width: 991px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
          className="pstory-card__image"
        />
        <span className="pstory-card__outcome">
          <Sparkles size={12} strokeWidth={2} aria-hidden="true" />
          {story.outcome}
        </span>
        <span className="pstory-card__category">{story.category}</span>
      </Link>

      <div className="pstory-card__body">
        <blockquote className="pstory-card__quote">
          <Quote size={18} strokeWidth={1.5} aria-hidden="true" />
          <p>{story.quote}</p>
        </blockquote>

        <h2 className="pstory-card__title">
          <Link href={`/patient-stories/${story.slug}`}>
            {story.title}
          </Link>
        </h2>

        <p className="pstory-card__excerpt">{story.excerpt}</p>

        <PatientStoryMeta story={story} variant="card" />

        <div className="pstory-card__footer">
          <div className="pstory-card__patient">
            <span className="pstory-card__avatar-wrap">
              <AppImage
                src={story.patient.avatar}
                alt={story.patient.name}
                fill
                sizes="40px"
                className="pstory-card__avatar"
              />
            </span>
            <div>
              <p className="pstory-card__patient-name">{story.patient.name}</p>
              <p className="pstory-card__patient-location">{story.hospital}</p>
            </div>
          </div>

          <Link
            href={`/patient-stories/${story.slug}`}
            className="pstory-card__read"
          >
            Read Story
            <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
