import Link from "next/link";
import {
  CalendarDays,
  ClipboardList,
  Cookie,
  FileText,
  Heart,
  Lock,
  Mail,
  Shield,
  Users,
} from "lucide-react";
import InnerHero from "@/Components/ui/InnerHero";
import { HospitalPhones } from "@/Components/ui/HospitalPhones";
import { getRelatedLegalPages, legalHeroImage } from "./content/shared";
import type { LegalHighlight, LegalPageContent } from "./types";
import "./legal.css";

const highlightIconMap = {
  shield: Shield,
  lock: Lock,
  file: FileText,
  heart: Heart,
  cookie: Cookie,
  users: Users,
  clipboard: ClipboardList,
} as const;

function HighlightCard({ item }: { item: LegalHighlight }) {
  const Icon = highlightIconMap[item.icon];

  return (
    <article className="legal-highlight">
      <span className="legal-highlight__icon" aria-hidden="true">
        <Icon size={22} strokeWidth={1.75} />
      </span>
      <h3 className="legal-highlight__title">{item.title}</h3>
      <p className="legal-highlight__text">{item.text}</p>
    </article>
  );
}

type LegalPageLayoutProps = {
  content: LegalPageContent;
};

export default function LegalPageLayout({ content }: LegalPageLayoutProps) {
  const relatedPages = getRelatedLegalPages(content.slug);

  return (
    <main>
      <InnerHero
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        backgroundImage={legalHeroImage}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: content.hero.title },
        ]}
      />

      <section className="legal-page" aria-labelledby="legal-page-title">
        <div className="legal-page__inner">
          <aside className="legal-sidebar" aria-label="Page navigation">
            <div className="legal-sidebar__card">
              <p className="legal-sidebar__label">On this page</p>
              <nav aria-label="Table of contents">
                <ul className="legal-sidebar__nav">
                  {content.sections.map((section) => (
                    <li key={section.id}>
                      <a href={`#${section.id}`} className="legal-sidebar__link">
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <p className="legal-sidebar__updated">
                Last updated
                <time dateTime={content.lastUpdated}>{content.lastUpdated}</time>
              </p>
            </div>

            {relatedPages.length > 0 ? (
              <div className="legal-sidebar__card legal-sidebar__card--related">
                <p className="legal-sidebar__label">Related policies</p>
                <ul className="legal-sidebar__related">
                  {relatedPages.map((page) => (
                    <li key={page.href}>
                      <Link href={page.href} className="legal-sidebar__related-link">
                        {page.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </aside>

          <article className="legal-article">
            <header className="legal-article__header">
              <p className="legal-article__eyebrow">{content.hero.eyebrow}</p>
              <h2 id="legal-page-title" className="legal-article__title">
                {content.hero.title}
              </h2>
              <p className="legal-article__intro">{content.intro}</p>
            </header>

            {content.highlights && content.highlights.length > 0 ? (
              <div className="legal-highlights">
                {content.highlights.map((item) => (
                  <HighlightCard key={item.title} item={item} />
                ))}
              </div>
            ) : null}

            <div className="legal-sections">
              {content.sections.map((section, index) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="legal-section"
                  aria-labelledby={`${section.id}-title`}
                >
                  <div className="legal-section__heading">
                    <span className="legal-section__number" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 id={`${section.id}-title`} className="legal-section__title">
                      {section.title}
                    </h3>
                  </div>

                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph} className="legal-section__paragraph">
                      {paragraph}
                    </p>
                  ))}

                  {section.list && section.list.length > 0 ? (
                    <ul className="legal-section__list">
                      {section.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}

                  {section.subsections?.map((subsection) => (
                    <div key={subsection.title} className="legal-subsection">
                      <h4 className="legal-subsection__title">{subsection.title}</h4>
                      {subsection.paragraphs?.map((paragraph) => (
                        <p key={paragraph} className="legal-section__paragraph">
                          {paragraph}
                        </p>
                      ))}
                      {subsection.list && subsection.list.length > 0 ? (
                        <ul className="legal-section__list">
                          {subsection.list.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  ))}
                </section>
              ))}
            </div>

            <aside className="legal-cta">
              <div className="legal-cta__content">
                <p className="legal-cta__eyebrow">Need assistance?</p>
                <h3 className="legal-cta__title">Our patient support team is here to help</h3>
                <p className="legal-cta__text">
                  For questions about policies, appointments, or your visit to Sangi Hospital,
                  reach out through any of the channels below.
                </p>
                <div className="legal-cta__actions">
                  <HospitalPhones
                    layout="stack"
                    className="legal-cta__phone-group"
                    linkClassName="legal-cta__button"
                  />
                  <Link href="/contact" className="legal-cta__button legal-cta__button--ghost">
                    <Mail size={18} aria-hidden="true" />
                    Contact Us
                  </Link>
                  <Link
                    href="/appointment"
                    className="legal-cta__button legal-cta__button--ghost"
                  >
                    <CalendarDays size={18} aria-hidden="true" />
                    Book Appointment
                  </Link>
                </div>
              </div>
            </aside>
          </article>
        </div>
      </section>
    </main>
  );
}
