import Link from "next/link";
import AppImage from "@/Components/ui/AppImage";
import { ArrowRight } from "lucide-react";
import { getServiceHref } from "@/lib/services-routes";
import { getRelatedServices } from "./servicesContent";
import type { Service } from "./servicesContent";

type ServiceDetailRelatedProps = {
  service: Service;
};

export default function ServiceDetailRelated({ service }: ServiceDetailRelatedProps) {
  const related = getRelatedServices(service);

  if (related.length === 0) return null;

  return (
    <section className="service-detail-related" aria-labelledby="service-detail-related-title">
      <div className="service-detail-related__inner">
        <p className="service-detail-related__eyebrow">Related Services</p>
        <h2 id="service-detail-related-title" className="service-detail-related__title">
          More from {service.category}
        </h2>

        <div className="service-detail-related__grid">
          {related.map((item) => (
            <article key={item.id} className="service-detail-related__card">
              <div className="service-detail-related__image-wrap">
                <AppImage
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="service-detail-related__image"
                />
              </div>
              <div className="service-detail-related__body">
                <h3 className="service-detail-related__card-title">{item.name}</h3>
                <p className="service-detail-related__card-text">{item.description}</p>
                <Link href={getServiceHref(item.slug)} className="service-detail-related__link">
                  View Service
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
