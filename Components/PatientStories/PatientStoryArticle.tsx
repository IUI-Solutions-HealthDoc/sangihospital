import AppImage from "@/Components/ui/AppImage";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  MapPin,
  Quote,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import type { PatientStory } from "./patientStoriesContent";
import PatientStoryMeta from "./PatientStoryMeta";

type PatientStoryArticleProps = {
  story: PatientStory;
};

export default function PatientStoryArticle({ story }: PatientStoryArticleProps) {
  return (
    <article className="pstory-article">
      <div className="pstory-article__inner">
        <Link href="/patient-stories" className="pstory-article__back">
          <ArrowLeft size={16} strokeWidth={2} aria-hidden="true" />
          Back to Patient Stories
        </Link>

        <header className="pstory-article__header">
          <div className="pstory-article__badges">
            <span className="pstory-article__category">{story.category}</span>
            <span className="pstory-article__outcome">
              <Sparkles size={14} strokeWidth={2} aria-hidden="true" />
              {story.outcome}
            </span>
          </div>

          <h1 className="pstory-article__title">{story.title}</h1>
          <p className="pstory-article__excerpt">{story.excerpt}</p>

          <blockquote className="pstory-article__quote">
            <Quote size={28} strokeWidth={1.25} aria-hidden="true" />
            <p>&ldquo;{story.quote}&rdquo;</p>
          </blockquote>

          <PatientStoryMeta story={story} variant="detail" />
        </header>

        <div className="pstory-article__profile">
          <span className="pstory-article__avatar-wrap">
            <AppImage
              src={story.patient.avatar}
              alt={story.patient.name}
              fill
              sizes="72px"
              className="pstory-article__avatar"
            />
          </span>
          <div className="pstory-article__profile-body">
            <p className="pstory-article__patient-name">{story.patient.name}</p>
            <p className="pstory-article__patient-detail">
              {story.patient.age} years · {story.patient.city}
            </p>
            <p className="pstory-article__hospital">
              <MapPin size={14} strokeWidth={2} aria-hidden="true" />
              {story.hospital}
            </p>
            <p className="pstory-article__doctor">
              <Stethoscope size={14} strokeWidth={2} aria-hidden="true" />
              {story.treatedBy}
            </p>
          </div>
        </div>

        <div className="pstory-article__cover">
          <AppImage
            src={story.image}
            alt={story.title}
            fill
            priority
            sizes="(max-width: 991px) 100vw, 900px"
            className="pstory-article__cover-image"
          />
        </div>

        <div className="pstory-article__content">
          {story.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <section className="pstory-journey" aria-labelledby="pstory-journey-title">
          <h2 id="pstory-journey-title" className="pstory-journey__title">
            Recovery Journey
          </h2>
          <ol className="pstory-journey__list">
            {story.journey.map((step, index) => (
              <li key={step} className="pstory-journey__step">
                <span className="pstory-journey__marker" aria-hidden="true">
                  <CheckCircle2 size={18} strokeWidth={2} />
                </span>
                <div>
                  <p className="pstory-journey__step-label">Step {index + 1}</p>
                  <p className="pstory-journey__step-text">{step}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </article>
  );
}
