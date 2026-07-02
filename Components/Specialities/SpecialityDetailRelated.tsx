import AppImage from "@/Components/ui/AppImage";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getSpecialityHref } from "@/lib/specialities-routes";
import { getRelatedSpecialities } from "./specialitiesContent";
import type { SpecialityDetail } from "./specialitiesContent";

type SpecialityDetailRelatedProps = {
  speciality: SpecialityDetail;
};

export default function SpecialityDetailRelated({
  speciality,
}: SpecialityDetailRelatedProps) {
  const related = getRelatedSpecialities(speciality);

  if (related.length === 0) return null;

  return (
    <section
      className="speciality-detail-related"
      aria-labelledby="speciality-detail-related-title"
    >
      <div className="speciality-detail-related__inner">
        <p className="speciality-detail-related__eyebrow">Related Specialities</p>
        <h2 id="speciality-detail-related-title" className="speciality-detail-related__title">
          More from {speciality.category}
        </h2>

        <div className="speciality-detail-related__grid">
          {related.map((item) => (
            <article key={item.id} className="speciality-detail-related__card">
              <div className="speciality-detail-related__image-wrap">
                <AppImage
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="speciality-detail-related__image"
                />
              </div>
              <div className="speciality-detail-related__body">
                <h3 className="speciality-detail-related__card-title">{item.name}</h3>
                <p className="speciality-detail-related__card-text">{item.description}</p>
                <Link
                  href={getSpecialityHref(item.slug)}
                  className="speciality-detail-related__link"
                >
                  View Speciality
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
