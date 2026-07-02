import AppImage from "@/Components/ui/AppImage";
import { ArrowDown, Play, Star } from "lucide-react";
import { siteConfig } from "@/lib/site";
const HERO_VIDEO = "/assets/videos/home/herobg.mp4";
const HERO_POSTER = "/assets/images/home/hero_bg_1.jpeg";

const patientPhotos = [
  { src: "/assets/images/avatars/patient-1.jpg", alt: "Satisfied patient" },
  { src: "/assets/images/avatars/patient-2.jpg", alt: "Satisfied patient" },
  { src: "/assets/images/avatars/patient-3.jpg", alt: "Satisfied patient" },
  { src: "/assets/images/avatars/patient-4.jpg", alt: "Satisfied patient" },
  { src: "/assets/images/avatars/patient-5.jpg", alt: "Satisfied patient" },
];

function PatientAvatars() {
  return (
    <div className="hero__patient-avatars" aria-hidden="true">
      {patientPhotos.map((photo, index) => (
        <span
          key={photo.src}
          className="hero__patient-avatar"
          style={{ zIndex: patientPhotos.length - index }}
        >
          <AppImage
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="40px"
            className="hero__patient-avatar-image"
          />
        </span>
      ))}
    </div>
  );
}

function StarRating() {
  return (
    <div className="hero__stars" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="hero__star" aria-hidden="true" />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={HERO_POSTER}
        aria-hidden="true"
        className="hero__video"
        suppressHydrationWarning
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>

      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">Expert Medical Treatment</p>

          <h1 className="hero__title">
            We Follow A Holistic Approach to Health care.
          </h1>

          <p className="hero__text">
            Protect your smile and keep it healthy, with the latest technology
            available in your neighbourhood.
          </p>

          <a
            href={siteConfig.social.youtube}
            className="hero__play"
            aria-label="Watch Sangi Hospital on YouTube"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="hero__play-icon">
              <Play aria-hidden="true" />
            </span>
            <span className="hero__play-label">See How We Works</span>
          </a>
          <div className="hero__proof">
            <PatientAvatars />
            <StarRating />
            <div className="hero__proof-divider" aria-hidden="true" />
            <div className="hero__proof-copy">
              <p className="hero__proof-count">150K+</p>
              <p className="hero__proof-label">Satisfied Patients</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="hero__scroll" aria-hidden="true">
        <span className="hero__scroll-icon">
          <ArrowDown />
        </span>
        <p className="hero__scroll-text">SCROLL FOR MORE</p>
      </div> */}
    </section>
  );
}
