import React from "react";
import AppImage from "@/Components/ui/AppImage";
import { Check } from "lucide-react";
import { getServiceIcon } from "./serviceIcons";
import type { Service } from "./servicesContent";

type ServiceDetailIntroProps = {
  service: Service;
};

function ServiceIcon({ id, size, strokeWidth }: { id: string; size?: number; strokeWidth?: number }) {
  return React.createElement(getServiceIcon(id), { size, strokeWidth });
}

export default function ServiceDetailIntro({ service }: ServiceDetailIntroProps) {
  return (
    <section className="service-detail-intro" aria-labelledby="service-detail-intro-title">
      <div className="service-detail-intro__inner">
        <div className="service-detail-intro__content">
          <span className="service-detail-intro__eyebrow">{service.category}</span>
          <h2 id="service-detail-intro-title" className="service-detail-intro__title">
            {service.name}
          </h2>
          {service.detailParagraphs.map((paragraph) => (
            <p key={paragraph} className="service-detail-intro__text">
              {paragraph}
            </p>
          ))}

          <ul className="service-detail-intro__points">
            {service.points.map((point) => (
              <li key={point} className="service-detail-intro__point">
                <span className="service-detail-intro__point-icon" aria-hidden="true">
                  <Check strokeWidth={2.5} />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="service-detail-intro__visual">
          <div className="service-detail-intro__badge" aria-hidden="true">
            <ServiceIcon id={service.id} size={18} strokeWidth={1.6} />
          </div>
          <div className="service-detail-intro__image-wrap">
            <AppImage
              src={service.image}
              alt={service.name}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="service-detail-intro__image"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
