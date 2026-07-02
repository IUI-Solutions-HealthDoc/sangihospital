import AppImage from "@/Components/ui/AppImage";
import Link from "next/link";
import { ArrowRight, Check, Clock, Siren, Users } from "lucide-react";
import { getServiceHref } from "@/lib/services-routes";
import { siteConfig } from "@/lib/site";
import { featuredService, featuredServiceMeta } from "./servicesContent";

const highlightIcons = [Clock, Users, Siren] as const;

export default function FeaturedService() {
  const service = featuredService;
  const meta = featuredServiceMeta;

  return (
    <section className="services-featured" aria-labelledby="featured-service-title">
      <div className="services-featured__backdrop" aria-hidden="true">
        <span className="services-featured__orb" />
      </div>

      <div className="services-featured__inner">
        <header className="services-featured__header">
          <span className="services-featured__label">Featured Service</span>
          <h2 className="services-featured__section-title">{meta.sectionTitle}</h2>
          <p className="services-featured__section-lead">{meta.sectionLead}</p>
        </header>

        <div id={service.slug} className="services-featured__card service-anchor">
          <div className="services-featured__card-glow" aria-hidden="true" />

          <div className="services-featured__layout">
            <div className="services-featured__content">
              <div className="services-featured__content-head">
                <span className="services-featured__icon" aria-hidden="true">
                  <Siren size={26} strokeWidth={1.65} />
                </span>
                <div>
                  <p className="services-featured__category">{service.category}</p>
                  <h3 id="featured-service-title" className="services-featured__title">
                    {service.name}
                  </h3>
                </div>
              </div>

              <p className="services-featured__description">{service.description}</p>

              <ul className="services-featured__points">
                {service.points.map((point) => (
                  <li key={point} className="services-featured__point">
                    <span className="services-featured__point-icon" aria-hidden="true">
                      <Check strokeWidth={2.5} />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="services-featured__offerings">
                {service.offerings.map((offering, index) => (
                  <span key={offering} className="services-featured__offering">
                    <span className="services-featured__offering-index" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {offering}
                  </span>
                ))}
              </div>

              <div className="services-featured__highlights">
                {meta.highlights.map((item, index) => {
                  const Icon = highlightIcons[index] ?? Clock;
                  return (
                    <article key={item.label} className="services-featured__highlight">
                      <span className="services-featured__highlight-icon" aria-hidden="true">
                        <Icon strokeWidth={1.6} />
                      </span>
                      <div>
                        <p className="services-featured__highlight-value">{item.value}</p>
                        <p className="services-featured__highlight-label">{item.label}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="services-featured__visual">
              <div className="services-featured__visual-pattern" aria-hidden="true" />
              <div className="services-featured__visual-image-wrap">
                <AppImage
                  src={service.image}
                  alt={service.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 38vw"
                  className="services-featured__image"
                  priority
                />
              </div>
              <div className="services-featured__visual-chip" aria-hidden="true">
                <span className="services-featured__visual-chip-dot" />
                24x7 Active
              </div>
            </div>
          </div>

          <div className="services-featured__footer">
            <Link
              href={getServiceHref(service.slug)}
              className="services-featured__cta services-featured__cta--primary btn-gradient-primary"
            >
              {meta.primaryCta}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="services-featured__cta services-featured__cta--secondary"
            >
              {meta.secondaryCta}
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
