import AppImage from "@/Components/ui/AppImage";
import { MapPin, Microscope, Stethoscope } from "lucide-react";
import { specialitiesPage } from "./specialitiesContent";

const featureIcons = [Stethoscope, Microscope, MapPin] as const;

export default function SpecialitiesIntro() {
  const { intro, highlights } = specialitiesPage;
  const featureHighlights = highlights.slice(0, 3);

  return (
    <section className="specialities-intro" aria-labelledby="specialities-intro-title">
      <div className="specialities-intro__backdrop" aria-hidden="true">
        <span className="specialities-intro__orb specialities-intro__orb--left" />
        <span className="specialities-intro__orb specialities-intro__orb--right" />
        <span className="specialities-intro__grid-lines" />
      </div>

      <div className="specialities-intro__inner">
        <div className="specialities-intro__content">
          <span className="specialities-intro__eyebrow">{intro.eyebrow}</span>

          <h2 id="specialities-intro-title" className="specialities-intro__title">
            {intro.heading}{" "}
            <span className="specialities-intro__title-accent">
              {intro.headingAccent}
            </span>
          </h2>

          <p className="specialities-intro__lead">{intro.paragraphs[0]}</p>
          <p className="specialities-intro__text">{intro.paragraphs[1]}</p>

          <div className="specialities-intro__stats" role="list">
            {intro.stats.map((stat) => (
              <div key={stat.label} className="specialities-intro__stat" role="listitem">
                <p className="specialities-intro__stat-value">{stat.value}</p>
                <p className="specialities-intro__stat-label">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="specialities-intro__features">
            {featureHighlights.map((item, index) => {
              const Icon = featureIcons[index] ?? Stethoscope;

              return (
                <article key={item.title} className="specialities-intro__feature">
                  <span className="specialities-intro__feature-icon" aria-hidden="true">
                    <Icon strokeWidth={1.6} />
                  </span>
                  <div>
                    <h3 className="specialities-intro__feature-title">{item.title}</h3>
                    <p className="specialities-intro__feature-text">{item.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="specialities-intro__visual">
          <div className="specialities-intro__visual-frame" aria-hidden="true" />
          <div className="specialities-intro__image-wrap">
            <AppImage
              src={intro.image}
              alt="Medical specialists at Sangi Hospital"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="specialities-intro__image"
              priority
            />
          </div>

          <div className="specialities-intro__image-accent" aria-hidden="true" />

          <article className="specialities-intro__floating-card">
            <p className="specialities-intro__floating-value">{intro.imageBadge.value}</p>
            <p className="specialities-intro__floating-label">{intro.imageBadge.label}</p>
          </article>

          <div className="specialities-intro__visual-badge" aria-hidden="true">
            <span className="specialities-intro__visual-badge-dot" />
            Trusted Care Network
          </div>
        </div>
      </div>
    </section>
  );
}
