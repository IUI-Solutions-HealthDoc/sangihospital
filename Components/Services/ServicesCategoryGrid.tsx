import { serviceColumns } from "./servicesContent";
import { getServiceIcon } from "./serviceIcons";
import ServiceCard from "./ServiceCard";

export default function ServicesCategoryGrid() {
  return (
    <section className="services-grid-section" aria-labelledby="services-grid-title">
      <div className="services-grid-section__inner">
        <div className="services-grid-section__header">
          <p className="services-grid-section__eyebrow">All Services</p>
          <h2 id="services-grid-title" className="services-grid-section__title">
            Complete Hospital Service Catalogue
          </h2>
          <p className="services-grid-section__text">
            Explore our 24x7 clinical services, specialised medical support, and inpatient
            ward options across Sangi Hospital locations.
          </p>
        </div>

        {serviceColumns.map((column) => (
          <div
            key={column.id}
            id={column.id}
            className="services-grid-section__group service-anchor"
          >
            <h3 className="services-grid-section__group-title">{column.title}</h3>
            <div className="services-grid">
              {column.services
                .filter((service) => !service.featured)
                .map((service, index) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    icon={getServiceIcon(service.id)}
                    priority={
                      (column.id === "twenty-four-seven" && index === 0) ||
                      column.id === "wards"
                    }
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
