import Link from "next/link";
import type { StaticImageData } from "next/image";
import AppImage from "@/Components/ui/AppImage";
import { ChevronRight, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/site";
import "./innerhero.css";

type Breadcrumb = {
  label: string;
  href?: string;
};

type InnerHeroProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  breadcrumbs: Breadcrumb[];
  backgroundImage?: string | StaticImageData;
  showTrustBar?: boolean;
  priorityImage?: boolean;
};

export default function InnerHero({
  title,
  subtitle,
  eyebrow,
  breadcrumbs,
  backgroundImage,
  showTrustBar = true,
  priorityImage = true,
}: InnerHeroProps) {
  const isStaticImage = typeof backgroundImage === "object";

  return (
    <section className="inner-hero" aria-labelledby="inner-hero-title">
      {backgroundImage && (
        <div className="inner-hero__media">
          <AppImage
            src={backgroundImage}
            alt=""
            fill
            priority={priorityImage}
            placeholder={isStaticImage ? "blur" : undefined}
            sizes="100vw"
            className="inner-hero__image"
            aria-hidden="true"
          />
        </div>
      )}

      <div className="inner-hero__overlay" aria-hidden="true" />
      <div className="inner-hero__pattern" aria-hidden="true" />
      <div className="inner-hero__glow inner-hero__glow--left" aria-hidden="true" />
      <div className="inner-hero__glow inner-hero__glow--right" aria-hidden="true" />

      <div className="inner-hero__inner">
        <nav aria-label="Breadcrumb" className="inner-hero__breadcrumb">
          <ol className="inner-hero__breadcrumb-list">
            {breadcrumbs.map((crumb, index) => {
              const isLast = index === breadcrumbs.length - 1;

              return (
                <li key={crumb.label} className="inner-hero__breadcrumb-item">
                  {index > 0 && (
                    <ChevronRight
                      className="inner-hero__breadcrumb-sep"
                      aria-hidden="true"
                    />
                  )}
                  {isLast || !crumb.href ? (
                    <span
                      className="inner-hero__breadcrumb-current"
                      aria-current={isLast ? "page" : undefined}
                    >
                      {crumb.label}
                    </span>
                  ) : (
                    <Link href={crumb.href} className="inner-hero__breadcrumb-link">
                      {crumb.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        <div className="inner-hero__body">
          {eyebrow && <p className="inner-hero__eyebrow">{eyebrow}</p>}

          <h1 id="inner-hero-title" className="inner-hero__title">
            {title}
          </h1>

          <div className="inner-hero__accent" aria-hidden="true" />

          {subtitle && <p className="inner-hero__subtitle">{subtitle}</p>}
        </div>

        {showTrustBar && (
          <div className="inner-hero__footer">
            <span className="inner-hero__badge">
              <span className="inner-hero__badge-icon" aria-hidden="true">
                <ShieldCheck />
              </span>
              {siteConfig.tagline}
            </span>
            <span className="inner-hero__footer-divider" aria-hidden="true" />
            <span className="inner-hero__footer-text">
              {siteConfig.region}
            </span>
          </div>
        )}
      </div>

      <div className="inner-hero__curve" aria-hidden="true">
        <svg viewBox="0 0 1440 64" preserveAspectRatio="none" fill="currentColor">
          <path d="M0,32 C360,80 720,0 1080,32 C1260,48 1380,56 1440,64 L1440,64 L0,64 Z" />
        </svg>
      </div>
    </section>
  );
}
