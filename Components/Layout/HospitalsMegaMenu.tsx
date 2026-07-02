"use client";

import AppImage from "@/Components/ui/AppImage";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { useMemo, useState } from "react";
import {
  getAllHospitals,
  hospitalsMegaMenu,
  isHospitalUpcoming,
  type HospitalLocation,
} from "@/lib/hospitals";

export default function HospitalsMegaMenu() {
  const { viewAllHref } = hospitalsMegaMenu;
  const hospitals = getAllHospitals();
  const [hoveredHospitalId, setHoveredHospitalId] = useState<string>(
    hospitals[0]?.id ?? "",
  );

  const previewHospital = useMemo(() => {
    return (
      hospitals.find((hospital) => hospital.id === hoveredHospitalId) ??
      hospitals[0] ??
      null
    );
  }, [hospitals, hoveredHospitalId]);

  return (
    <div className="header-mega header-mega--hospitals">
      <div className="header-hospitals-mega__panel">
        <div className="header-hospitals-mega__body header-hospitals-mega__body--simple">
          <div className="header-hospitals-mega__content">
            <ul
              className="header-hospitals-mega__list"
              onMouseLeave={() => setHoveredHospitalId(hospitals[0]?.id ?? "")}
            >
              {hospitals.map((hospital) => (
                <li
                  key={hospital.id}
                  onMouseEnter={() => setHoveredHospitalId(hospital.id)}
                  onFocus={() => setHoveredHospitalId(hospital.id)}
                >
                  <HospitalListItem
                    hospital={hospital}
                    isHovered={previewHospital?.id === hospital.id}
                  />
                </li>
              ))}
            </ul>

            <div className="header-hospitals-mega__preview">
              <HospitalPreview
                hospitals={hospitals}
                activeHospitalId={previewHospital?.id ?? ""}
              />
            </div>
          </div>
        </div>

        <div className="header-hospitals-mega__footer">
          <Link href={viewAllHref} className="header-hospitals-mega__footer-link">
            Find Hospital Near You
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function HospitalListItem({
  hospital,
  isHovered,
}: {
  hospital: HospitalLocation;
  isHovered: boolean;
}) {
  const upcoming = isHospitalUpcoming(hospital);
  const className = `header-hospitals-mega__link${
    isHovered ? " is-hovered" : ""
  }${upcoming ? " is-upcoming" : ""}`;

  if (upcoming) {
    return (
      <span className={className} tabIndex={0}>
        <span className="header-hospitals-mega__link-label">{hospital.name}</span>
        <span className="header-hospitals-mega__badge">Upcoming Project</span>
      </span>
    );
  }

  return (
    <Link href={hospital.href} className={className} tabIndex={0}>
      {hospital.name}
    </Link>
  );
}

function HospitalPreview({
  hospitals,
  activeHospitalId,
}: {
  hospitals: HospitalLocation[];
  activeHospitalId: string;
}) {
  if (hospitals.length === 0) return null;

  return (
    <div className="header-hospitals-mega__preview-card">
      <div className="header-hospitals-mega__preview-image-wrap">
        {hospitals.map((hospital) => (
          <div
            key={hospital.id}
            className={`header-hospitals-mega__preview-slide${
              hospital.id === activeHospitalId ? " is-active" : ""
            }`}
            style={{ position: "absolute", inset: 0 }}
          >
            <AppImage
              src={hospital.image}
              alt={hospital.name}
              fill
              sizes="320px"
              className="header-hospitals-mega__preview-image"
            />
            {isHospitalUpcoming(hospital) ? (
              <span className="header-hospitals-mega__preview-badge">
                Upcoming Project
              </span>
            ) : null}
          </div>
        ))}
      </div>

      <div className="header-hospitals-mega__preview-body">
        {hospitals.map((hospital) => {
          const upcoming = isHospitalUpcoming(hospital);

          return (
            <div
              key={hospital.id}
              className={`header-hospitals-mega__preview-info${
                hospital.id === activeHospitalId ? " is-active" : ""
              }`}
            >
              <p className="header-hospitals-mega__preview-name">{hospital.name}</p>
              <p className="header-hospitals-mega__preview-address">
                <MapPin size={14} aria-hidden="true" />
                {hospital.address}
              </p>
              {upcoming ? (
                <p className="header-hospitals-mega__preview-upcoming">
                  This location is part of our upcoming expansion in Uttar Pradesh.
                </p>
              ) : (
                <Link href={hospital.href} className="header-hospitals-mega__preview-link">
                  View Hospital
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
