"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import AppImage from "@/Components/ui/AppImage";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type DepartmentLayout = "feature" | "wide" | "standard";

type Department = {
  name: string;
  href: string;
  icon: string;
  image: string;
  description: string;
  layout: DepartmentLayout;
  tag?: string;
};

const IMAGE_BASE = "/assets/images/specialities/medicalspecialities";

const departments: Department[] = [
  {
    name: "Emergency & Trauma",
    href: "/specialities/emergency-trauma-care",
    icon: "/assets/images/icons/emergencyicon.svg",
    image: `${IMAGE_BASE}/emergencyandtraumacare/work-of-emergency-medical-team-concentrated-hospi-2026-03-24-03-23-32-utc.jpg`,
    description:
      "Round-the-clock emergency response with rapid triage, trauma support, and critical care when every minute matters.",
    layout: "feature",
    tag: "24/7 Available",
  },
  {
    name: "Dental",
    href: "/specialities/dentistry",
    icon: "/assets/images/icons/dentalicon.svg",
    image: `${IMAGE_BASE}/dental/dental-exam-with-an-adult-patient-2026-03-16-22-58-22-utc.jpg`,
    description:
      "Preventive, restorative, and cosmetic dentistry for healthy smiles at every age.",
    layout: "wide",
  },
  {
    name: "Gynecology",
    href: "/specialities/obstetrics-gynaecology",
    icon: "/assets/images/icons/pregicon.svg",
    image: `${IMAGE_BASE}/gynaecology/concerned-indian-pregnant-woman-having-medical-app-2026-03-24-02-17-29-utc.jpg`,
    description:
      "Compassionate women's health, pregnancy, and maternity care from experienced specialists.",
    layout: "wide",
  },
  {
    name: "Neurology",
    href: "/specialities/neurology",
    icon: "/assets/images/icons/neuroicon.svg",
    image: `${IMAGE_BASE}/neurology/doctor-analyzing-x-ray-scan-a-skull-in-hospital-m-2026-03-24-01-02-15-utc.jpg`,
    description:
      "Expert diagnosis and treatment for brain, spine, and nervous system conditions.",
    layout: "standard",
  },
  {
    name: "Cardiology",
    href: "/specialities/general-medicine",
    icon: "/assets/images/icons/cardioicon.svg",
    image: `${IMAGE_BASE}/cardiology/human-heart-model-held-by-hand-with-stethoscope-2026-03-17-06-31-23-utc.jpg`,
    description:
      "Heart health screenings, cardiac diagnostics, and continuous care for heart conditions.",
    layout: "standard",
  },
  {
    name: "Psychiatry",
    href: "/specialities/general-medicine",
    icon: "/assets/images/icons/physicyicon.svg",
    image: `${IMAGE_BASE}/pshychiatry/mature-patient-consults-doctor-wearing-facial-mask-2026-03-18-05-06-04-utc.jpg`,
    description:
      "Confidential mental health support, counselling, and evidence-based psychiatric care.",
    layout: "standard",
  },
];

const imageSizes: Record<DepartmentLayout, string> = {
  feature: "(min-width: 992px) 58vw, 100vw",
  wide: "(min-width: 992px) 42vw, (min-width: 768px) 50vw, 100vw",
  standard: "(min-width: 992px) 34vw, (min-width: 768px) 50vw, 100vw",
};

const TILE_RADIUS = "1.25rem";

function DepartmentTile({ department, index }: { department: Department; index: number }) {
  return (
    <Link
      href={department.href}
      className={`dept-tile dept-tile--${department.layout}`}
      data-dept-tile
    >
      <div className="dept-tile__media" data-dept-media>
        <AppImage
          src={department.image}
          alt=""
          fill
          sizes={imageSizes[department.layout]}
          className="dept-tile__image"
        />
      </div>
      <span className="dept-tile__overlay" aria-hidden="true" />

      <div className="dept-tile__top" data-dept-anim>
        <span className="dept-tile__icon" aria-hidden="true">
          <AppImage src={department.icon} alt="" width={28} height={28} />
        </span>
        {department.tag ? (
          <span className="dept-tile__tag">
            <span className="dept-tile__tag-pulse" aria-hidden="true" />
            {department.tag}
          </span>
        ) : null}
      </div>

      <div className="dept-tile__body">
        <span className="dept-tile__index font-heading" aria-hidden="true" data-dept-anim>
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="dept-tile__title font-heading" data-dept-anim>
          {department.name}
        </h3>
        <div className="dept-tile__reveal">
          <div className="dept-tile__reveal-inner">
            <p className="dept-tile__text font-body">{department.description}</p>
          </div>
        </div>
        <span className="dept-tile__cta font-heading" data-dept-anim>
          Explore Department
          <span className="dept-tile__cta-icon" aria-hidden="true">
            <ArrowUpRight size={16} />
          </span>
        </span>
      </div>
    </Link>
  );
}

export default function OurDepartment() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          desktop: "(min-width: 992px)",
        },
        (context) => {
          const { motion, desktop } = context.conditions ?? {};
          if (!motion) return;

          gsap.from("[data-dept-header]", {
            y: 36,
            autoAlpha: 0,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: {
              trigger: ".our-department__header",
              start: "top 85%",
              once: true,
            },
          });

          const grid = sectionRef.current?.querySelector<HTMLElement>(".dept-grid");
          const tiles = gsap.utils.toArray<HTMLElement>("[data-dept-tile]");

          tiles.forEach((tile) => {
            const media = tile.querySelector<HTMLElement>("[data-dept-media]");
            const content = tile.querySelectorAll<HTMLElement>("[data-dept-anim]");
            const columnDelay =
              grid && grid.offsetWidth > 0 ? (tile.offsetLeft / grid.offsetWidth) * 0.35 : 0;

            const timeline = gsap.timeline({
              delay: columnDelay,
              scrollTrigger: { trigger: tile, start: "top 88%", once: true },
            });

            timeline
              .fromTo(
                tile,
                {
                  autoAlpha: 0,
                  y: 70,
                  clipPath: `inset(22% 0% 0% 0% round ${TILE_RADIUS})`,
                },
                {
                  autoAlpha: 1,
                  y: 0,
                  clipPath: `inset(0% 0% 0% 0% round ${TILE_RADIUS})`,
                  duration: 1.15,
                  ease: "expo.out",
                  clearProps: "clipPath,transform,opacity,visibility",
                },
              )
              .from(media, { scale: 1.28, duration: 1.6, ease: "expo.out" }, 0)
              .from(
                content,
                { y: 22, autoAlpha: 0, duration: 0.7, ease: "power3.out", stagger: 0.07 },
                0.35,
              );

            if (desktop && media) {
              gsap.fromTo(
                media,
                { yPercent: -5 },
                {
                  yPercent: 5,
                  ease: "none",
                  scrollTrigger: {
                    trigger: tile,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                  },
                },
              );
            }
          });
        },
      );

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="our-department py-5 py-lg-6"
      aria-labelledby="our-department-title"
    >
      <div className="container">
        <div className="our-department__header">
          <div className="our-department__heading">
            <p className="our-department__eyebrow font-body" data-dept-header>
              Our Departments
            </p>
            <h2
              id="our-department-title"
              className="our-department__title font-heading"
              data-dept-header
            >
              Experienced In Multiple Medical Practices For{" "}
              <span className="our-department__accent">Your Health</span>
            </h2>
          </div>

          <div className="our-department__intro">
            <p className="our-department__lead font-body" data-dept-header>
              Specialist teams, modern diagnostics, and coordinated care across Sangi
              Hospital locations — so every patient gets the right expertise, close to home.
            </p>
            <Link
              href="/specialities"
              className="our-department__link font-heading"
              data-dept-header
            >
              View All Specialities
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="dept-grid">
          {departments.map((department, index) => (
            <DepartmentTile key={department.name} department={department} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
