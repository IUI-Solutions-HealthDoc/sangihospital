"use client";

import AppImage from "@/Components/ui/AppImage";
import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import { FaStar } from "react-icons/fa6";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ClientOnly from "@/Components/ui/ClientOnly";
import TPATicker from "@/Components/Home/TPATicker";
import {
  getAllHospitals,
  isHospitalUpcoming,
  type HospitalLocation,
} from "@/lib/hospitals";
import "swiper/css";

type HospitalCardData = HospitalLocation & {
  rating: number;
  reviews: number;
};

const LAKSHMI_NAGAR_IMAGE =
  "/assets/sangiimages1/sangiimages1/homepage/twofl.jpeg";

const hospitalRatings: Record<string, { rating: number; reviews: number }> = {
  raya: { rating: 4.8, reviews: 1240 },
  "lakshmi-nagar": { rating: 4.7, reviews: 860 },
  etah: { rating: 4.6, reviews: 640 },
  mathura: { rating: 0, reviews: 0 },
};

const hospitals: HospitalCardData[] = getAllHospitals().map((hospital) => ({
  ...hospital,
  image: hospital.id === "lakshmi-nagar" ? LAKSHMI_NAGAR_IMAGE : hospital.image,
  rating: hospitalRatings[hospital.id]?.rating ?? 4.6,
  reviews: hospitalRatings[hospital.id]?.reviews ?? 500,
}));

const locations = [
  "All Locations",
  ...hospitals.map((hospital) => hospital.city),
] as const;

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="hospital-card__google" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="hospital-card__stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => {
        const fillPercent = Math.max(0, Math.min(1, rating - index)) * 100;

        return (
          <span key={index} className="hospital-card__star-wrap">
            <FaStar className="hospital-card__star hospital-card__star--empty" />
            <span
              className="hospital-card__star-fill"
              style={{ width: `${fillPercent}%` }}
            >
              <FaStar className="hospital-card__star hospital-card__star--filled" />
            </span>
          </span>
        );
      })}
    </div>
  );
}

function HospitalCard({ hospital }: { hospital: HospitalCardData }) {
  const upcoming = isHospitalUpcoming(hospital);
  const content = (
    <>
      <div className="hospital-card__image-wrap">
        <AppImage
          src={hospital.image}
          alt={hospital.name}
          fill
          sizes="(max-width: 768px) 85vw, 284px"
          className="hospital-card__image"
        />
        {upcoming ? (
          <span className="hospital-card__badge">Upcoming Project</span>
        ) : null}
      </div>

      <div className="hospital-card__body">
        <h3 className="hospital-card__title">{hospital.name}</h3>

        {upcoming ? (
          <p className="hospital-card__upcoming">Opening soon in Uttar Pradesh</p>
        ) : (
          <div className="hospital-card__rating">
            <GoogleIcon />
            <StarRating rating={hospital.rating} />
            <span className="hospital-card__score">{hospital.rating}</span>
          </div>
        )}
      </div>
    </>
  );

  if (upcoming) {
    return <article className="hospital-card hospital-card--upcoming">{content}</article>;
  }

  return (
    <Link href={hospital.href} className="hospital-card">
      {content}
    </Link>
  );
}

export default function AllHospitals() {
  const [activeLocation, setActiveLocation] =
    useState<(typeof locations)[number]>("All Locations");
  const swiperRef = useRef<SwiperType | null>(null);

  const filteredHospitals = useMemo(() => {
    if (activeLocation === "All Locations") return hospitals;
    return hospitals.filter((hospital) => hospital.city === activeLocation);
  }, [activeLocation]);

  return (
    <section className="all-hospitals" id="our-hospitals">
      <div className="all-hospitals__inner">
        <div className="all-hospitals__stage">
          <aside className="all-hospitals__blue">
            <div className="all-hospitals__hero-content">
              <h2 className="all-hospitals__hero-title">
                Our Hospital Network
              </h2>
              <p className="all-hospitals__hero-text">
                Sangi Hospital is a trusted provider of world-class healthcare
                services with a growing network of hospitals across Uttar Pradesh.
              </p>

              <Link href="/appointment" className="all-hospitals__cta">
                <span className="all-hospitals__cta-label">
                  Book Appointment Online
                </span>
                <span className="all-hospitals__cta-icon" aria-hidden="true">
                  <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
                    <path
                      d="M1.5 1.5L8 8L1.5 14.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </aside>

          <div className="all-hospitals__overlay">
            <div className="all-hospitals__toolbar">
              <div className="all-hospitals__tabs" role="tablist">
                {locations.map((location) => (
                  <button
                    key={location}
                    type="button"
                    role="tab"
                    aria-selected={activeLocation === location}
                    onClick={() => {
                      setActiveLocation(location);
                      swiperRef.current?.slideTo(0);
                    }}
                    className={`all-hospitals__tab${
                      activeLocation === location ? " is-active" : ""
                    }`}
                  >
                    {location}
                  </button>
                ))}
              </div>

              <div className="all-hospitals__nav">
                <button
                  type="button"
                  aria-label="Previous hospitals"
                  className="all-hospitals__nav-btn"
                  onClick={() => swiperRef.current?.slidePrev()}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M15 6L9 12L15 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  aria-label="Next hospitals"
                  className="all-hospitals__nav-btn"
                  onClick={() => swiperRef.current?.slideNext()}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M9 6L15 12L9 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="all-hospitals__carousel-clip">
              <ClientOnly
                fallback={
                  <div className="all-hospitals__fallback">
                    {filteredHospitals.map((hospital) => (
                      <HospitalCard key={hospital.id} hospital={hospital} />
                    ))}
                  </div>
                }
              >
                <Swiper
                  key={activeLocation}
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                  spaceBetween={16}
                  slidesPerView={1.15}
                  breakpoints={{
                    480: { slidesPerView: 1.25, spaceBetween: 14 },
                    768: { slidesPerView: 1.5, spaceBetween: 16 },
                    992: { slidesPerView: "auto", spaceBetween: 18 },
                  }}
                  className="all-hospitals__swiper"
                >
                  {filteredHospitals.map((hospital) => (
                    <SwiperSlide key={hospital.id}>
                      <HospitalCard hospital={hospital} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </ClientOnly>
            </div>
          </div>
        </div>

        <TPATicker />
      </div>
    </section>
  );
}
