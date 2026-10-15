import AppImage from "@/Components/ui/AppImage";
import Link from "next/link";
import {
  ArrowRight,
  HeartPulse,
  ScanLine,
  Siren,
} from "lucide-react";
import servicesHeroImage from "../../public/assets/sangiimages1/sangiimages1/homepage/docduo.png";

const services = [
  {
    title: "24x7 Emergency Care",
    description:
      "Round-the-clock emergency response, trauma support, and critical care when every minute matters.",
    href: "/services/emergency-services",
    icon: Siren,
  },
  {
    title: "Diagnostics & Imaging",
    description:
      "Digital X-Ray, CT scan, ultrasound, pathology, and lab testing for faster, accurate diagnosis.",
    href: "/services/digital-x-ray",
    icon: ScanLine,
  },
  {
    title: "Cardiac Health Checkup",
    description:
      "Echocardiography and heart function assessment to detect risks early and guide treatment.",
    href: "/services/echocardiography",
    icon: HeartPulse,
  },
];

export default function Services() {
  return (
    <section className="services-section">
      <div className="services-section__inner">
        <div className="services-section__grid">
          <div className="services-header">
            <p className="services-eyebrow">Complete Care</p>
            <h2 className="services-heading">
              Trusted Hospital Services Under One Roof
            </h2>
          </div>

          <div className="services-section__cards-col">
            <div className="services-section__list">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article key={service.title} className="service-card">
                    <div className="service-card__icon">
                      <Icon
                        className="service-card__icon-svg"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </div>

                    <div className="service-card__body">
                      <h3 className="service-card__title">{service.title}</h3>
                      <p className="service-card__text">{service.description}</p>
                      <Link href={service.href} className="service-card__link">
                        Learn More
                        <ArrowRight size={16} aria-hidden="true" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="services-section__visual-col">
            <div className="services-image-wrap">
              <AppImage
                src={servicesHeroImage}
                alt="Medical professionals at Sangi Hospital"
                fill
                sizes="(max-width: 768px) 85vw, (max-width: 992px) 45vw, 440px"
                className="services-image"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
