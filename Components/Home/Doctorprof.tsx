"use client";

import AppImage from "@/Components/ui/AppImage";
import Link from "next/link";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ClientOnly from "@/Components/ui/ClientOnly";
import "swiper/css";

type Doctor = {
  name: string;
  specialty: string;
  role: string;
  image: string;
  profileHref: string;
  appointmentHref: string;
};

const doctors: Doctor[] = [
  {
    name: "Dr. Aman Saxena",
    specialty: "Cardiology",
    role: "Senior Director & HOD Cardiology",
    image: "/assets/images/avatars/doctor-1.jpg",
    profileHref: "/doctors/sanjeev-gera",
    appointmentHref: "/appointment?doctor=sanjeev-gera",
  },
  {
    name: "Dr. Abhiman Singh",
    specialty: "Oncology",
    role: "Director Radiation Oncology",
    image: "/assets/images/avatars/doctor-2.jpg",
    profileHref: "/doctors/anita-malik",
    appointmentHref: "/appointment?doctor=anita-malik",
  },
  {
    name: "Dr. Rajhu Jha",
    specialty: "Gynecology",
    role: "Director Obstetrics & Gynaecology",
    image: "/assets/images/avatars/doctor-3.jpg",
    profileHref: "/doctors/anjana-singh",
    appointmentHref: "/appointment?doctor=anjana-singh",
  },
  {
    name: "Dr. Anuja Porwal",
    specialty: "Nephrology",
    role: "Director Nephrology",
    image: "/assets/images/avatars/doctor-4.jpg",
    profileHref: "/doctors/anuja-porwal",
    appointmentHref: "/appointment?doctor=anuja-porwal",
  },
  {
    name: "Dr. Rahul Mehta",
    specialty: "Neurology",
    role: "Senior Consultant Neurology",
    image: "/assets/images/avatars/doctor-5.jpg",
    profileHref: "/doctors/rahul-mehta",
    appointmentHref: "/appointment?doctor=rahul-mehta",
  },
];

function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <article className="doctor-card h-100">
      <div className="doctor-card__image-wrap">
        <AppImage
          src={doctor.image}
          alt={doctor.name}
          fill
          sizes="(max-width: 768px) 80vw, (max-width: 1200px) 45vw, 25vw"
          className="doctor-card__image"
        />
      </div>

      <div className="doctor-card__body">
        <h3 className="doctor-card__name font-heading">{doctor.name}</h3>
        <p className="doctor-card__role font-body">{doctor.role}</p>

        <div className="doctor-card__actions">
          <Link
            href={doctor.profileHref}
            className="doctor-card__btn doctor-card__btn--outline font-body"
          >
            View Full Profile
          </Link>
          <Link
            href={doctor.appointmentHref}
            className="doctor-card__btn doctor-card__btn--primary font-body"
          >
            Book An Appointment
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function Doctorprof() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="doctor-prof py-5 py-lg-6">
      <div className="container">
        <div className="row align-items-center doctor-prof__header mb-4 mb-lg-5">
          <div className="col-md-8">
            <h2 className="doctor-prof__title font-heading mb-0">
              Our Team of Experts
            </h2>
          </div>
          <div className="col-md-4 text-md-end mt-3 mt-md-0">
            <Link href="/doctors" className="doctor-prof__view-all font-body">
              View all
            </Link>
          </div>
        </div>

        <ClientOnly
          fallback={
            <div className="doctor-prof__fallback pb-2">
              {doctors.map((doctor) => (
                <DoctorCard key={doctor.name} doctor={doctor} />
              ))}
            </div>
          }
        >
          <Swiper
            modules={[Navigation]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={24}
            slidesPerView={1.15}
            breakpoints={{
              576: { slidesPerView: 1.5 },
              768: { slidesPerView: 2.2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
            className="doctor-prof__swiper pb-2"
          >
            {doctors.map((doctor) => (
              <SwiperSlide key={doctor.name} className="h-auto">
                <DoctorCard doctor={doctor} />
              </SwiperSlide>
            ))}
          </Swiper>
        </ClientOnly>

        <div className="doctor-prof__nav d-flex justify-content-center gap-3 mt-4">
          <button
            type="button"
            aria-label="Previous doctors"
            className="doctor-prof__nav-btn"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next doctors"
            className="doctor-prof__nav-btn"
            onClick={() => swiperRef.current?.slideNext()}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
