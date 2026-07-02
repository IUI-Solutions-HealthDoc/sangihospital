import AppImage from "@/Components/ui/AppImage";
import { Clock, Microscope, ShieldCheck } from "lucide-react";
import { servicesPage } from "./servicesContent";

const featureIcons = [Clock, Microscope, ShieldCheck] as const;

export default function ServicesIntro() {
  const { intro, highlights } = servicesPage;
  const featureHighlights = highlights.slice(0, 3);

  return (
    <section className="services-intro" aria-labelledby="services-intro-title">
      <div className="services-intro__backdrop" aria-hidden="true">
        <span className="services-intro__orb services-intro__orb--left" />
        <span className="services-intro__orb services-intro__orb--right" />
      </div>

      <div className="services-intro__inner">
        <div className="services-intro__content">
          <span className="services-intro__eyebrow">{intro.eyebrow}</span>
          <h2 id="services-intro-title" className="services-intro__title">
            {intro.heading}{" "}
            <span className="services-intro__title-accent">{intro.headingAccent}</span>
          </h2>
          <p className="services-intro__lead">{intro.paragraphs[0]}</p>
          <p className="services-intro__text">{intro.paragraphs[1]}</p>

          <div className="services-intro__stats" role="list">
            {intro.stats.map((stat) => (
              <div key={stat.label} className="services-intro__stat" role="listitem">
                <p className="services-intro__stat-value">{stat.value}</p>
                <p className="services-intro__stat-label">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="services-intro__features">
            {featureHighlights.map((item, index) => {
              const Icon = featureIcons[index] ?? Clock;
              return (
                <article key={item.title} className="services-intro__feature">
                  <span className="services-intro__feature-icon" aria-hidden="true">
                    <Icon strokeWidth={1.6} />
                  </span>
                  <div>
                    <h3 className="services-intro__feature-title">{item.title}</h3>
                    <p className="services-intro__feature-text">{item.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="services-intro__visual">
          <div className="services-intro__visual-frame" aria-hidden="true" />
          <div className="services-intro__image-wrap">
            <AppImage
              src={intro.image}
              alt="Hospital services at Sangi Hospital"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="services-intro__image"
              priority
            />
          </div>
          <article className="services-intro__floating-card">
            <p className="services-intro__floating-value">{intro.imageBadge.value}</p>
            <p className="services-intro__floating-label">{intro.imageBadge.label}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
