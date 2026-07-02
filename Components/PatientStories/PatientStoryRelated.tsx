import AppImage from "@/Components/ui/AppImage";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import type { PatientStory } from "./patientStoriesContent";

type PatientStoryRelatedProps = {
  stories: PatientStory[];
};

export default function PatientStoryRelated({ stories }: PatientStoryRelatedProps) {
  if (stories.length === 0) return null;

  return (
    <section className="pstory-related" aria-labelledby="pstory-related-title">
      <div className="pstory-related__inner">
        <h2 id="pstory-related-title" className="pstory-related__title">
          More Stories of Hope
        </h2>

        <div className="pstory-related__grid">
          {stories.map((story) => (
            <Link
              key={story.id}
              href={`/patient-stories/${story.slug}`}
              className="pstory-related__card"
            >
              <div className="pstory-related__image-wrap">
                <AppImage
                  src={story.image}
                  alt={story.title}
                  fill
                  sizes="280px"
                  className="pstory-related__image"
                />
                <span className="pstory-related__outcome">
                  <Sparkles size={11} strokeWidth={2} aria-hidden="true" />
                  {story.outcome}
                </span>
              </div>
              <div className="pstory-related__body">
                <span className="pstory-related__category">{story.category}</span>
                <h3 className="pstory-related__card-title">{story.title}</h3>
                <span className="pstory-related__link">
                  Read story
                  <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
