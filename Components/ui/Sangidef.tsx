"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import "./sangidef.css";

type SangiLetter = {
  letter: string;
  keyword: string;
  description: string;
};

type StagePhase = "before" | "active" | "after";

const sangiLetters: SangiLetter[] = [
  {
    letter: "S",
    keyword: "Service",
    description:
      "We put patients first with compassionate, round-the-clock care delivered by dedicated teams across every department.",
  },
  {
    letter: "A",
    keyword: "Accessible",
    description:
      "Quality healthcare brought closer to families through our growing hospital network across Uttar Pradesh.",
  },
  {
    letter: "N",
    keyword: "Network",
    description:
      "A trusted multi-location healthcare network connecting communities to specialists, diagnostics, and emergency care.",
  },
  {
    letter: "G",
    keyword: "Guided",
    description:
      "Experienced doctors and modern protocols guide every treatment plan — from prevention through recovery.",
  },
  {
    letter: "i",
    keyword: "Integrated",
    description:
      "Multi-speciality care under one roof — cardiology, neurology, gynecology, diagnostics, and more.",
  },
];

const WORD = "SANGi";

function getViewportHeight() {
  if (typeof window === "undefined") return 0;
  return window.visualViewport?.height ?? window.innerHeight;
}

export default function Sangidef() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number | null>(null);
  const activeIndexRef = useRef(0);
  const stagePhaseRef = useRef<StagePhase>("before");

  const [activeIndex, setActiveIndex] = useState(0);
  const [stagePhase, setStagePhase] = useState<StagePhase>("before");
  const total = sangiLetters.length;

  const setStagePhaseIfChanged = useCallback((next: StagePhase) => {
    if (stagePhaseRef.current === next) return;
    stagePhaseRef.current = next;
    setStagePhase(next);
  }, []);

  const setActiveIndexIfChanged = useCallback((next: number) => {
    if (activeIndexRef.current === next) return;
    activeIndexRef.current = next;
    setActiveIndex(next);
  }, []);

  const resolveActiveIndex = useCallback(
    (steps: HTMLDivElement[]) => {
      const viewportH = getViewportHeight();
      const centerY = viewportH * 0.5;
      let bestIndex = 0;
      let bestDistance = Number.POSITIVE_INFINITY;

      steps.forEach((step, index) => {
        const rect = step.getBoundingClientRect();
        const stepCenter = rect.top + rect.height / 2;
        const distance = Math.abs(stepCenter - centerY);

        if (distance < bestDistance) {
          bestDistance = distance;
          bestIndex = index;
        }
      });

      return bestIndex;
    },
    [],
  );

  const resolveStagePhase = useCallback((section: HTMLElement): StagePhase => {
    const viewportH = getViewportHeight();
    const rect = section.getBoundingClientRect();

    if (rect.bottom <= 0) {
      return "after";
    }

    if (rect.top >= viewportH) {
      return "before";
    }

    if (rect.bottom <= viewportH + 2) {
      return "after";
    }

    if (rect.top > 0) {
      return "before";
    }

    return "active";
  }, []);

  const resolveActiveIndexFromScroll = useCallback(
    (section: HTMLElement) => {
      const viewportH = getViewportHeight();
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const scrollableRange = Math.max(sectionHeight - viewportH, 1);

      if (rect.top > 0) return 0;
      if (rect.bottom <= viewportH + 2) return total - 1;

      const progress = Math.min(Math.max(-rect.top / scrollableRange, 0), 1);
      return Math.min(Math.floor(progress * total), total - 1);
    },
    [total],
  );

  const updateScrollState = useCallback(() => {
    const section = sectionRef.current;
    if (!section) return;

    const steps = stepRefs.current.filter(
      (step): step is HTMLDivElement => step !== null,
    );

    const nextPhase = resolveStagePhase(section);
    setStagePhaseIfChanged(nextPhase);

    const stepIndex =
      steps.length > 0 ? resolveActiveIndex(steps) : resolveActiveIndexFromScroll(section);

    setActiveIndexIfChanged(stepIndex);
  }, [
    resolveActiveIndex,
    resolveActiveIndexFromScroll,
    resolveStagePhase,
    setActiveIndexIfChanged,
    setStagePhaseIfChanged,
  ]);

  const scheduleUpdate = useCallback(() => {
    if (rafRef.current !== null) return;

    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      updateScrollState();
    });
  }, [updateScrollState]);

  useLayoutEffect(() => {
    updateScrollState();
  }, [updateScrollState]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onResize = () => scheduleUpdate();

    let loopId = 0;
    let isLooping = false;

    const runScrollLoop = () => {
      if (isLooping) return;
      isLooping = true;

      const tick = () => {
        const rect = section.getBoundingClientRect();
        const viewportH = getViewportHeight();

        if (rect.bottom > -viewportH && rect.top < viewportH * 2) {
          updateScrollState();
          loopId = requestAnimationFrame(tick);
        } else {
          isLooping = false;
        }
      };

      loopId = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      scheduleUpdate();
      runScrollLoop();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("scroll", onScroll, { passive: true, capture: true });
    window.addEventListener("wheel", onScroll, { passive: true });
    window.addEventListener("touchmove", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("orientationchange", onResize);

    const visualViewport = window.visualViewport;
    visualViewport?.addEventListener("resize", onResize);
    visualViewport?.addEventListener("scroll", onScroll);

    const stepObserver =
      typeof IntersectionObserver !== "undefined"
        ? new IntersectionObserver(() => scheduleUpdate(), {
            root: null,
            threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
            rootMargin: "-30% 0px -30% 0px",
          })
        : null;

    stepRefs.current.forEach((step) => {
      if (step) stepObserver?.observe(step);
    });
    stepObserver?.observe(section);

    runScrollLoop();
    scheduleUpdate();

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("wheel", onScroll);
      window.removeEventListener("touchmove", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
      visualViewport?.removeEventListener("resize", onResize);
      visualViewport?.removeEventListener("scroll", onScroll);
      stepObserver?.disconnect();
      cancelAnimationFrame(loopId);

      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [scheduleUpdate, updateScrollState]);

  const activeItem = sangiLetters[activeIndex];
  const glowOffset = (activeIndex / Math.max(total - 1, 1)) * 100;

  return (
    <section
      ref={sectionRef}
      className={`sangidef sangidef--${stagePhase}`}
      aria-label="What SANGI means"
    >
      <div className="sangidef__stage">
        <div className="sangidef__sticky">
          <div
            className="sangidef__glow"
            aria-hidden="true"
            style={{
              transform: `translate(calc(-50% + ${(glowOffset - 50) * 0.35}%), -50%)`,
              opacity: 0.55 + activeIndex * 0.09,
            }}
          />

          <div className="sangidef__inner">
            <p className="sangidef__eyebrow">What SANGI Stands For</p>

            <div className="sangidef__word" aria-hidden="true">
              {WORD.split("").map((char, index) => {
                const letterClass = `sangidef__letter${
                  index === activeIndex
                    ? " is-active"
                    : index < activeIndex
                      ? " is-past"
                      : ""
                }`;

                if (char === "i") {
                  return (
                    <span
                      key={`${char}-${index}`}
                      className={`${letterClass} sangidef__letter--i`}
                    >
                      <span className="sangidef__letter-i-stem" aria-hidden="true">
                        ı
                      </span>
                      <span className="sangidef__letter-i-dot" aria-hidden="true" />
                    </span>
                  );
                }

                return (
                  <span key={`${char}-${index}`} className={letterClass}>
                    {char}
                  </span>
                );
              })}
            </div>

            <div
              className="sangidef__copy"
              aria-live="polite"
              aria-atomic="true"
            >
              {sangiLetters.map((item, index) => {
                const isActive = index === activeIndex;
                const isPast = index < activeIndex;

                return (
                  <div
                    key={item.letter}
                    className={`sangidef__panel${
                      isActive ? " is-active" : isPast ? " is-past" : ""
                    }`}
                    aria-hidden={!isActive}
                  >
                    <p className="sangidef__keyword">{item.keyword}</p>
                    <p className="sangidef__description">{item.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="sangidef__footer">
              <div
                className="sangidef__progress"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={total}
                aria-valuenow={activeIndex + 1}
                aria-label="SANGI definition progress"
              >
                <div
                  className="sangidef__progress-fill"
                  style={{ width: `${((activeIndex + 1) / total) * 100}%` }}
                />
              </div>

              <p className="sangidef__counter" aria-hidden="true">
                <strong>{String(activeIndex + 1).padStart(2, "0")}</strong>
                {" / "}
                {String(total).padStart(2, "0")}
              </p>
            </div>

            <span className="sr-only">
              {activeItem.keyword}: {activeItem.description}
            </span>
          </div>
        </div>
      </div>

      <div className="sangidef__rail" aria-hidden="true">
        {sangiLetters.map((item, index) => (
          <div
            key={item.letter}
            ref={(element) => {
              stepRefs.current[index] = element;
            }}
            className="sangidef__step"
            data-step={index}
          />
        ))}
      </div>
    </section>
  );
}
