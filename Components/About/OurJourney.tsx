"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import AppImage from "@/Components/ui/AppImage";
import { ourJourney } from "./aboutContent";

export default function OurJourney() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const total = ourJourney.milestones.length;

  const updateActiveIndex = useCallback(() => {
    const section = sectionRef.current;
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const sectionHeight = section.offsetHeight;
    const viewportH = window.innerHeight;
    const scrolled = -rect.top;
    const scrollableRange = sectionHeight - viewportH;

    if (scrollableRange <= 0) return;

    const progress = Math.min(Math.max(scrolled / scrollableRange, 0), 1);
    const index = Math.min(Math.floor(progress * total), total - 1);
    setActiveIndex(index);
  }, [total]);

  useEffect(() => {
    updateActiveIndex();
    window.addEventListener("scroll", updateActiveIndex, { passive: true });
    window.addEventListener("resize", updateActiveIndex, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateActiveIndex);
      window.removeEventListener("resize", updateActiveIndex);
    };
  }, [updateActiveIndex]);

  const activeMilestone = ourJourney.milestones[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="our-journey"
      style={{ "--journey-steps": total } as React.CSSProperties}
      aria-label={ourJourney.heading}
    >
      <div className="our-journey__sticky">
        <div className="our-journey__watermark-wrap" aria-hidden="true">
          <span className="our-journey__watermark">{activeMilestone.year}</span>
        </div>

        <div className="our-journey__inner">
          <div className="our-journey__header">
            <div>
              <p className="our-journey__eyebrow">{ourJourney.eyebrow}</p>
              <h2 className="our-journey__title">{ourJourney.heading}</h2>
            </div>

            <div className="our-journey__counter" aria-hidden="true">
              <span className="our-journey__counter-current">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              <span className="our-journey__counter-divider" />
              <span className="our-journey__counter-total">
                {String(total).padStart(2, "0")}
              </span>
            </div>
          </div>

          <div
            className="our-journey__progress"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={total}
            aria-valuenow={activeIndex + 1}
            aria-label="Journey progress"
          >
            <div
              className="our-journey__progress-fill"
              style={{ width: `${((activeIndex + 1) / total) * 100}%` }}
            />
          </div>

          <div className="our-journey__content">
            <div className="our-journey__media">
              <div className="our-journey__image-frame">
                {ourJourney.milestones.map((milestone, index) => (
                  <div
                    key={milestone.year}
                    className={`our-journey__image-slide${
                      index === activeIndex ? " is-active" : ""
                    }`}
                    style={{ position: "absolute", inset: 0 }}
                  >
                    <AppImage
                      src={milestone.image}
                      alt={milestone.title}
                      fill
                      className="our-journey__image"
                      sizes="(max-width: 1024px) 100vw, 48vw"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>

              <div className="our-journey__dots our-journey__dots--side" aria-hidden="true">
                {ourJourney.milestones.map((_, index) => (
                  <span
                    key={index}
                    className={`our-journey__dot${
                      index === activeIndex
                        ? " is-active"
                        : index < activeIndex
                          ? " is-past"
                          : ""
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="our-journey__panel">
              <div className="our-journey__tabs" role="tablist" aria-label="Milestone years">
                {ourJourney.milestones.map((milestone, index) => (
                  <button
                    key={milestone.year}
                    type="button"
                    role="tab"
                    aria-selected={index === activeIndex}
                    className={`our-journey__tab${
                      index === activeIndex ? " is-active" : ""
                    }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    {milestone.year}
                  </button>
                ))}
              </div>

              <div className="our-journey__cards">
                {ourJourney.milestones.map((milestone, index) => {
                  const isActive = index === activeIndex;
                  const isPast = index < activeIndex;

                  return (
                    <div
                      key={milestone.year}
                      className={`our-journey__card${
                        isActive
                          ? " is-active"
                          : isPast
                            ? " is-past"
                            : " is-next"
                      }`}
                      aria-hidden={!isActive}
                    >
                      <h3 className="our-journey__card-title">{milestone.title}</h3>
                      <p className="our-journey__card-text">{milestone.description}</p>
                    </div>
                  );
                })}
              </div>

              <div className="our-journey__dots our-journey__dots--mobile" aria-hidden="true">
                {ourJourney.milestones.map((_, index) => (
                  <span
                    key={index}
                    className={`our-journey__dot our-journey__dot--mobile${
                      index === activeIndex ? " is-active" : ""
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
