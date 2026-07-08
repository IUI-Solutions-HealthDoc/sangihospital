"use client";

import AppImage from "@/Components/ui/AppImage";
import { Quote } from "lucide-react";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ClientOnly from "@/Components/ui/ClientOnly";
import "swiper/css";
import "swiper/css/effect-fade";
import "./testimonials.css";

type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "The care we received at Sangi Hospital was exceptional. From admission to discharge, the doctors and nursing staff were attentive, compassionate, and highly professional throughout our stay.",
    name: "Jayesh Chelani",
    role: "Patient — Cardiology",
    avatar: "/assets/images/avatars/patient-1.jpg",
  },
  {
    id: "2",
    quote:
      "We chose Sangi Hospital for my mother's surgery and could not have asked for a better experience. The facilities are modern, the team is reassuring, and the follow-up care was thorough.",
    name: "Chhavi Verma",
    role: "Patient Family — General Surgery",
    avatar: "/assets/images/avatars/patient-2.jpg",
  },
  {
    id: "3",
    quote:
      "From emergency care to specialist consultations, Sangi Hospital has consistently delivered trustworthy medical support for our family. We feel safe knowing expert doctors are always nearby.",
    name: "Ankita Sharma",
    role: "Patient — Gynecology",
    avatar: "/assets/images/avatars/patient-3.jpg",
  },
  {
    id: "4",
    quote:
      "The diagnostic services were quick and accurate, and the staff explained every step clearly. It is rare to find a hospital that combines advanced technology with such genuine human care.",
    name: "Vidhi Singh",
    role: "Patient — Radiology",
    avatar: "/assets/images/avatars/patient-4.jpg",
  },
];

function TestimonialSlide({ item }: { item: Testimonial }) {
  return (
    <article className="testimonials__slide">
      <blockquote className="testimonials__text">{item.quote}</blockquote>

      <div className="testimonials__author">
        <span
          className="testimonials__avatar-wrap"
          style={{ position: "relative" }}
        >
          <AppImage
            src={item.avatar}
            alt={item.name}
            fill
            sizes="52px"
            className="testimonials__avatar"
          />
        </span>

        <div className="testimonials__author-copy">
          <p className="testimonials__author-name">{item.name}</p>
          <p className="testimonials__author-role">{item.role}</p>
        </div>
      </div>
    </article>
  );
}

function TestimonialCarousel() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="testimonials__stage">
      <button
        type="button"
        aria-label="Previous testimonial"
        className="testimonials__nav testimonials__nav--prev"
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

      <Swiper
        modules={[Navigation, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={1}
        loop
        speed={650}
        className="testimonials__swiper"
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <TestimonialSlide item={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        type="button"
        aria-label="Next testimonial"
        className="testimonials__nav testimonials__nav--next"
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
  );
}

export default function Testimonials() {
  const featured = testimonials[0];

  return (
    <section className="testimonials" aria-labelledby="testimonials-title">
      <div className="testimonials__bg" aria-hidden="true" />

      <div className="testimonials__inner">
        <h2 id="testimonials-title" className="testimonials__title">
          Testimonial
        </h2>

        <Quote
          className="testimonials__quote-icon"
          strokeWidth={1.5}
          aria-hidden="true"
        />

        <ClientOnly
          fallback={
            <div className="testimonials__fallback">
              <TestimonialSlide item={featured} />
            </div>
          }
        >
          <TestimonialCarousel />
        </ClientOnly>
      </div>
    </section>
  );
}
