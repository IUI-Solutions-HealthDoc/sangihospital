"use client";

import AppImage from "@/Components/ui/AppImage";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  ChevronDown,
  Phone,
  X,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import {
  getAllHospitals,
  hospitalsMegaMenu,
  isHospitalUpcoming,
} from "@/lib/hospitals";
import { mainNavItems } from "@/lib/navigation";
import { patientCornerMegaMenu } from "@/lib/patient-corner";
import { servicesMegaMenu } from "@/lib/services-menu";
import { specialitiesMegaMenu } from "@/lib/specialities-menu";
import { siteConfig } from "@/lib/site";

function MenuIcon() {
  return (
    <svg
      className="mobile-menu__toggle-icon"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 7H20"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M4 12H20"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M4 17H14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function MobileMenu() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const isExpanded = (id: string) => expandedIds.has(id);
  const isActiveRoute = (href: string) => mounted && pathname === href;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    setExpandedIds(new Set());
  }, []);

  const toggleSection = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);

      if (next.has(id)) {
        next.delete(id);
        for (const key of [...next]) {
          if (key.startsWith(`${id}-`)) next.delete(key);
        }
        return next;
      }

      next.add(id);

      if (id.startsWith("hospitals-")) {
        next.add("hospitals");
        const match = id.match(/^hospitals-[^-]+/);
        if (match && id !== match[0]) {
          next.add(match[0]);
        }
      }

      if (id.startsWith("spec-")) {
        next.add("specialities");
      }

      if (id.startsWith("services-")) {
        next.add("services");
      }

      return next;
    });
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    closeMenu();
  }, [pathname, closeMenu]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, closeMenu]);

  return (
    <div className="mobile-menu">
      <button
        type="button"
        className="mobile-menu__toggle"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu-panel"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <X size={22} aria-hidden="true" /> : <MenuIcon />}
      </button>

      <div
        className={`mobile-menu__overlay${isOpen ? " is-open" : ""}`}
        aria-hidden={!isOpen}
        onClick={closeMenu}
      />

      <aside
        id="mobile-menu-panel"
        className={`mobile-menu__panel${isOpen ? " is-open" : ""}`}
        aria-hidden={!isOpen}
      >
        <div className="mobile-menu__header">
          <Link href="/" className="mobile-menu__logo" onClick={closeMenu}>
            <AppImage
              src="/assets/images/icons/logo.png"
              alt={siteConfig.name}
              width={140}
              height={44}
              className="mobile-menu__logo-image"
            />
          </Link>

          <button
            type="button"
            className="mobile-menu__close"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            <X size={22} aria-hidden="true" />
          </button>
        </div>

        <div className="mobile-menu__scroll">
          <nav className="mobile-menu__nav" aria-label="Mobile navigation">
            {mainNavItems.map((item) => {
              if (item.megaMenu === "services") {
                return (
                  <div key={item.label} className="mobile-menu__group">
                    <button
                      type="button"
                      className={`mobile-menu__trigger${
                        isExpanded("services") ? " is-open" : ""
                      }`}
                      aria-expanded={isExpanded("services")}
                      onClick={() => toggleSection("services")}
                    >
                      <span>{item.label}</span>
                      <ChevronDown size={18} aria-hidden="true" />
                    </button>

                    <div
                      className={`mobile-menu__subpanel${
                        isExpanded("services") ? " is-open" : ""
                      }`}
                    >
                      {servicesMegaMenu.columns.map((column) => (
                        <div key={column.id} className="mobile-menu__nested">
                          <button
                            type="button"
                            className={`mobile-menu__subtrigger${
                              isExpanded(`services-${column.id}`) ? " is-open" : ""
                            }`}
                            aria-expanded={isExpanded(`services-${column.id}`)}
                            onClick={() => toggleSection(`services-${column.id}`)}
                          >
                            <span>{column.title}</span>
                            <ChevronDown size={16} aria-hidden="true" />
                          </button>

                          <ul
                            className={`mobile-menu__link-list${
                              isExpanded(`services-${column.id}`) ? " is-open" : ""
                            }`}
                          >
                            {column.services.map((service) => (
                              <li key={service.id}>
                                <Link
                                  href={service.href}
                                  className="mobile-menu__service-card"
                                  onClick={closeMenu}
                                >
                                  <span className="mobile-menu__service-thumb">
                                    <AppImage
                                      src={service.image}
                                      alt=""
                                      width={56}
                                      height={56}
                                      sizes="56px"
                                      className="mobile-menu__service-image"
                                    />
                                  </span>
                                  <span className="mobile-menu__service-copy">
                                    <span className="mobile-menu__service-name">
                                      {service.label}
                                    </span>
                                    <span className="mobile-menu__service-text">
                                      {service.description}
                                    </span>
                                  </span>
                                  <ArrowRight
                                    size={16}
                                    className="mobile-menu__service-arrow"
                                    aria-hidden="true"
                                  />
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                      <Link
                        href={servicesMegaMenu.viewAllHref}
                        className="mobile-menu__view-all"
                        onClick={closeMenu}
                      >
                        View All Services
                        <ArrowRight size={16} aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                );
              }

              if (item.megaMenu === "hospitals") {
                return (
                  <div key={item.label} className="mobile-menu__group">
                    <button
                      type="button"
                      className={`mobile-menu__trigger${
                        isExpanded("hospitals") ? " is-open" : ""
                      }`}
                      aria-expanded={isExpanded("hospitals")}
                      onClick={() => toggleSection("hospitals")}
                    >
                      <span>{item.label}</span>
                      <ChevronDown size={18} aria-hidden="true" />
                    </button>

                    <div
                      className={`mobile-menu__subpanel${
                        isExpanded("hospitals") ? " is-open" : ""
                      }`}
                    >
                      <ul className="mobile-menu__hospital-list">
                        {getAllHospitals().map((hospital) => {
                          const upcoming = isHospitalUpcoming(hospital);
                          const cardContent = (
                            <>
                              <span className="mobile-menu__hospital-thumb">
                                <AppImage
                                  src={hospital.image}
                                  alt=""
                                  width={56}
                                  height={56}
                                  sizes="56px"
                                  className="mobile-menu__hospital-image"
                                />
                              </span>
                              <span className="mobile-menu__hospital-copy">
                                <span className="mobile-menu__hospital-name">
                                  {hospital.name}
                                </span>
                                <span className="mobile-menu__hospital-city">
                                  {upcoming ? "Upcoming Project" : hospital.city}
                                </span>
                              </span>
                              {!upcoming ? (
                                <ArrowRight
                                  size={16}
                                  className="mobile-menu__hospital-arrow"
                                  aria-hidden="true"
                                />
                              ) : null}
                            </>
                          );

                          return (
                            <li key={hospital.id}>
                              {upcoming ? (
                                <div className="mobile-menu__hospital-card mobile-menu__hospital-card--upcoming">
                                  {cardContent}
                                </div>
                              ) : (
                                <Link
                                  href={hospital.href}
                                  className="mobile-menu__hospital-card"
                                  onClick={closeMenu}
                                >
                                  {cardContent}
                                </Link>
                              )}
                            </li>
                          );
                        })}
                      </ul>

                      <Link
                        href={hospitalsMegaMenu.viewAllHref}
                        className="mobile-menu__view-all"
                        onClick={closeMenu}
                      >
                        View All Hospitals
                        <ArrowRight size={16} aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                );
              }

              if (item.megaMenu === "specialities") {
                return (
                  <div key={item.label} className="mobile-menu__group">
                    <button
                      type="button"
                      className={`mobile-menu__trigger${
                        isExpanded("specialities") ? " is-open" : ""
                      }`}
                      aria-expanded={isExpanded("specialities")}
                      onClick={() => toggleSection("specialities")}
                    >
                      <span>{item.label}</span>
                      <ChevronDown size={18} aria-hidden="true" />
                    </button>

                    <div
                      className={`mobile-menu__subpanel${
                        isExpanded("specialities") ? " is-open" : ""
                      }`}
                    >
                      {specialitiesMegaMenu.columns.map((column) => (
                        <div key={column.title} className="mobile-menu__nested">
                          <button
                            type="button"
                            className={`mobile-menu__subtrigger${
                              isExpanded(`spec-${column.title}`) ? " is-open" : ""
                            }`}
                            aria-expanded={isExpanded(`spec-${column.title}`)}
                            onClick={() => toggleSection(`spec-${column.title}`)}
                          >
                            <span>{column.title}</span>
                            <ChevronDown size={16} aria-hidden="true" />
                          </button>

                          <ul
                            className={`mobile-menu__link-list${
                              isExpanded(`spec-${column.title}`) ? " is-open" : ""
                            }`}
                          >
                            {column.links.map((link) => (
                              <li key={link.href}>
                                <Link
                                  href={link.href}
                                  className="mobile-menu__sublink"
                                  onClick={closeMenu}
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                      <Link
                        href={specialitiesMegaMenu.viewAllHref}
                        className="mobile-menu__view-all"
                        onClick={closeMenu}
                      >
                        View All Specialities
                        <ArrowRight size={16} aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                );
              }

              if (item.megaMenu === "patient-corner") {
                return (
                  <div key={item.label} className="mobile-menu__group">
                    <button
                      type="button"
                      className={`mobile-menu__trigger${
                        isExpanded("patient-corner") ? " is-open" : ""
                      }`}
                      aria-expanded={isExpanded("patient-corner")}
                      onClick={() => toggleSection("patient-corner")}
                    >
                      <span>{item.label}</span>
                      <ChevronDown size={18} aria-hidden="true" />
                    </button>

                    <div
                      className={`mobile-menu__subpanel${
                        isExpanded("patient-corner") ? " is-open" : ""
                      }`}
                    >
                      <ul className="mobile-menu__link-list is-open">
                        {patientCornerMegaMenu.sections.map((section) => (
                          <li key={section.id}>
                            <Link
                              href={section.href}
                              className="mobile-menu__sublink"
                              onClick={closeMenu}
                            >
                              {section.label}
                            </Link>
                          </li>
                        ))}
                      </ul>

                      <Link
                        href={patientCornerMegaMenu.viewAllHref}
                        className="mobile-menu__view-all"
                        onClick={closeMenu}
                      >
                        Explore Patient Corner
                        <ArrowRight size={16} aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                );
              }

              if (item.children) {
                return (
                  <div key={item.label} className="mobile-menu__group">
                    <button
                      type="button"
                      className={`mobile-menu__trigger${
                        isExpanded(item.label) ? " is-open" : ""
                      }`}
                      aria-expanded={isExpanded(item.label)}
                      onClick={() => toggleSection(item.label)}
                    >
                      <span>{item.label}</span>
                      <ChevronDown size={18} aria-hidden="true" />
                    </button>

                    <ul
                      className={`mobile-menu__link-list${
                        isExpanded(item.label) ? " is-open" : ""
                      }`}
                    >
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="mobile-menu__sublink"
                            onClick={closeMenu}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`mobile-menu__link${
                    isActiveRoute(item.href) ? " is-active" : ""
                  }`}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="mobile-menu__footer">
          <a href={`tel:${siteConfig.phoneTel}`} className="mobile-menu__phone">
            <Phone size={18} aria-hidden="true" />
            {siteConfig.phone}
          </a>

          <Link
            href="/appointment"
            className="mobile-menu__cta btn-gradient-primary"
            onClick={closeMenu}
          >
            Make An Appointment
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </aside>
    </div>
  );
}
