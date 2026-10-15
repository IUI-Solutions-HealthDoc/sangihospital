"use client";

import AppImage from "@/Components/ui/AppImage";
import { useSyncExternalStore } from "react";
import { ShieldCheck } from "lucide-react";
import { tpaPartners, tpaTickerContent, type TpaPartner } from "./tpaPartnersContent";

function subscribeReducedMotion(onStoreChange: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", onStoreChange);
  return () => media.removeEventListener("change", onStoreChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

function TpaLogoItem({ partner }: { partner: TpaPartner }) {
  return (
    <figure className="tpa-ticker__item" title={partner.name}>
      <AppImage
        src={partner.logo}
        alt={partner.alt}
        width={300}
        height={96}
        unoptimized={partner.logo.endsWith(".svg")}
        className="tpa-ticker__logo"
      />
    </figure>
  );
}

export default function TPATicker() {
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );

  const displayPartners = prefersReducedMotion
    ? tpaPartners
    : [...tpaPartners, ...tpaPartners];

  return (
    <section className="tpa-ticker" aria-labelledby="tpa-ticker-title">
      <div className="tpa-ticker__backdrop" aria-hidden="true">
        <span className="tpa-ticker__orb tpa-ticker__orb--left" />
        <span className="tpa-ticker__orb tpa-ticker__orb--right" />
        <span className="tpa-ticker__line" />
      </div>

      <div className="tpa-ticker__inner">
        <div className="tpa-ticker__header">
          <div className="tpa-ticker__badge">
            <ShieldCheck size={16} aria-hidden="true" />
            <span>{tpaTickerContent.eyebrow}</span>
          </div>
          <h3 id="tpa-ticker-title" className="tpa-ticker__title">
            {tpaTickerContent.title}
          </h3>
          <p className="tpa-ticker__subtitle">{tpaTickerContent.subtitle}</p>
        </div>

        <div
          className={`tpa-ticker__marquee${prefersReducedMotion ? " tpa-ticker__marquee--static" : ""}`}
          aria-label="TPA and insurance partner logos"
        >
          <div className="tpa-ticker__fade tpa-ticker__fade--left" aria-hidden="true" />
          <div className="tpa-ticker__fade tpa-ticker__fade--right" aria-hidden="true" />

          <div className="tpa-ticker__track">
            <div className="tpa-ticker__row">
              {displayPartners.map((partner, index) => (
                <TpaLogoItem key={`${partner.id}-${index}`} partner={partner} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
