"use client";

import AppImage from "@/Components/ui/AppImage";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import {
  getDefaultServiceId,
  getServiceById,
  servicesMegaMenu,
  type ServiceItem,
} from "@/lib/services-menu"; 

export default function ServicesMegaMenu() {
  const { brandImage, brandImageAlt, columns, description, title, viewAllHref } =
    servicesMegaMenu;
  const [hoveredServiceId, setHoveredServiceId] = useState(getDefaultServiceId());

  const previewService = useMemo(
    () => getServiceById(hoveredServiceId),
    [hoveredServiceId],
  );

  return (
    <div className="header-mega header-mega--services">
      <div
        className="header-services-mega__panel"
        onMouseLeave={() => setHoveredServiceId(getDefaultServiceId())}
      >
        <div className="header-services-mega__brand">
          <div className="header-services-mega__brand-image-wrap">
            <AppImage
              src={brandImage}
              alt={brandImageAlt}
              fill
              sizes="220px"
              className="header-services-mega__brand-image"
            />
          </div>

          <Link href="/" className="header-services-mega__logo">
            <AppImage
              src="/assets/images/icons/logo.png"
              alt={title}
              width={140}
              height={44}
              className="header-services-mega__logo-image"
            />
          </Link>

          <p className="header-services-mega__description">{description}</p>

          <Link href={viewAllHref} className="header-services-mega__cta">
            View All Services
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <div className="header-services-mega__columns">
          {columns.map((column) => (
            <div key={column.id} className="header-services-mega__column">
              <h3 className="header-services-mega__column-title">{column.title}</h3>
              <ul className="header-services-mega__list">
                {column.services.map((service) => (
                  <li key={service.id}>
                    <Link
                      href={service.href}
                      className={`header-services-mega__link${
                        previewService?.id === service.id ? " is-hovered" : ""
                      }`}
                      onMouseEnter={() => setHoveredServiceId(service.id)}
                      onFocus={() => setHoveredServiceId(service.id)}
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="header-services-mega__preview">
          {previewService ? (
            <ServicePreview service={previewService} />
          ) : null}
        </div>
      </div>
    </div>
  );
}

function ServicePreview({ service }: { service: ServiceItem }) {
  return (
    <div className="header-services-mega__preview-card">
      <div className="header-services-mega__preview-image-wrap">
        <AppImage
          key={service.id}
          src={service.image}
          alt={service.label}
          fill
          sizes="300px"
          className="header-services-mega__preview-image"
        />
      </div>

      <div className="header-services-mega__preview-body">
        <p className="header-services-mega__preview-label">{service.label}</p>
        <p className="header-services-mega__preview-text">{service.description}</p>
        <Link href={service.href} className="header-services-mega__preview-link">
          Learn More
          <ArrowRight size={14} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
