import AppImage from "@/Components/ui/AppImage";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Check,
  Clock,
  Stethoscope,
  Users,
} from "lucide-react";
import { getSpecialityHref } from "@/lib/specialities-routes";
import {
  generalMedicineFeature,
  generalMedicineFeatureMeta,
} from "./specialitiesContent";

const highlightIcons = [Users, Calendar, Clock] as const;

export default function GeneralMedicineFeature() {
  const speciality = generalMedicineFeature;
  const meta = generalMedicineFeatureMeta;

  return (
    <section
      className="specialities-featured"
      aria-labelledby="featured-speciality-title"
    >
      <div className="specialities-featured__backdrop" aria-hidden="true">
        <span className="specialities-featured__orb" />
      </div>

      <div className="specialities-featured__inner">
        <header className="specialities-featured__header">
          <span className="specialities-featured__label">Featured Speciality</span>
          <h2 className="specialities-featured__section-title">{meta.sectionTitle}</h2>
          <p className="specialities-featured__section-lead">{meta.sectionLead}</p>
        </header>

        <div
          id={speciality.slug}
          className="specialities-featured__card speciality-anchor"
        >
          <div className="specialities-featured__card-glow" aria-hidden="true" />

          <div className="specialities-featured__layout">
            <div className="specialities-featured__content">
              <div className="specialities-featured__content-head">
                <span className="specialities-featured__icon" aria-hidden="true">
                  <Stethoscope size={26} strokeWidth={1.65} />
                </span>

                <div>
                  <p className="specialities-featured__category">{speciality.category}</p>
                  <h3 id="featured-speciality-title" className="specialities-featured__title">
                    {speciality.name}
                  </h3>
                </div>
              </div>

              <p className="specialities-featured__description">{speciality.description}</p>

              <ul className="specialities-featured__points">
                {meta.points.map((point) => (
                  <li key={point} className="specialities-featured__point">
                    <span className="specialities-featured__point-icon" aria-hidden="true">
                      <Check strokeWidth={2.5} />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="specialities-featured__services-block">
                <p className="specialities-featured__services-label">Key Services</p>
                <div className="specialities-featured__services">
                  {speciality.services.map((service, index) => (
                    <span key={service} className="specialities-featured__service">
                      <span className="specialities-featured__service-index" aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <div className="specialities-featured__highlights">
                {meta.highlights.map((item, index) => {
                  const Icon = highlightIcons[index] ?? Users;

                  return (
                    <article key={item.label} className="specialities-featured__highlight">
                      <span className="specialities-featured__highlight-icon" aria-hidden="true">
                        <Icon strokeWidth={1.6} />
                      </span>
                      <div>
                        <p className="specialities-featured__highlight-value">{item.value}</p>
                        <p className="specialities-featured__highlight-label">{item.label}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="specialities-featured__visual">
              <div className="specialities-featured__visual-pattern" aria-hidden="true" />
              <div className="specialities-featured__visual-image-wrap">
                <AppImage
                  src={meta.image}
                  alt="General medicine consultation at Sangi Hospital"
                  fill
                  sizes="(max-width: 768px) 100vw, 38vw"
                  className="specialities-featured__image"
                />
              </div>

              <div className="specialities-featured__visual-chip" aria-hidden="true">
                <span className="specialities-featured__visual-chip-dot" />
                Primary Care Hub
              </div>

              <article className="specialities-featured__visual-card">
                <p className="specialities-featured__visual-card-value">98%</p>
                <p className="specialities-featured__visual-card-label">
                  Patient satisfaction across OPD visits
                </p>
              </article>
            </div>
          </div>

          <div className="specialities-featured__footer">
            <Link
              href={getSpecialityHref(speciality.slug)}
              className="specialities-featured__cta specialities-featured__cta--primary btn-gradient-primary"
            >
              {meta.primaryCta}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>

            <Link
              href={meta.secondaryHref}
              className="specialities-featured__cta specialities-featured__cta--secondary"
            >
              {meta.secondaryCta}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
