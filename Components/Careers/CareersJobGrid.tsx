import type { CSSProperties } from "react";
import AppImage from "@/Components/ui/AppImage";
import Link from "next/link";
import {
  ArrowUpRight,
  Briefcase,
  Building2,
  Clock,
  MapPin,
  Stethoscope,
  UserCog,
  Users,
  HeartPulse,
} from "lucide-react";
import { careerJobs } from "./careersContent";

const jobIcons = {
  doctors: Stethoscope,
  "nursing-staff": HeartPulse,
  paramedical: Users,
  superintendent: Building2,
  "administration-staff": UserCog,
} as const;

export default function CareersJobGrid() {
  return (
    <section className="careers-jobs" aria-labelledby="careers-jobs-title">
      <div className="careers-jobs__inner">
        <div className="careers-jobs__header">
          <span className="careers-jobs__eyebrow">Open Positions</span>
          <h2 id="careers-jobs-title" className="careers-jobs__title">
            Explore <span className="careers-jobs__title-accent">Current Openings</span>
          </h2>
          <p className="careers-jobs__lead">
            Select a role below to view details and submit your application online.
          </p>
        </div>

        <div className="careers-jobs__grid">
          {careerJobs.map((job, index) => {
            const Icon = jobIcons[job.id as keyof typeof jobIcons] ?? Briefcase;

            return (
              <Link
                key={job.id}
                href={`/careers/${job.slug}`}
                className="careers-job-card"
                style={
                  {
                    "--job-accent": job.accent,
                    "--job-delay": `${index * 80}ms`,
                  } as CSSProperties
                }
              >
                <div className="careers-job-card__media">
                  <AppImage
                    src={job.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="careers-job-card__image"
                    aria-hidden="true"
                  />
                  <div className="careers-job-card__media-overlay" aria-hidden="true" />
                  <span className="careers-job-card__icon" aria-hidden="true">
                    <Icon strokeWidth={1.6} />
                  </span>
                </div>

                <div className="careers-job-card__body">
                  <div className="careers-job-card__meta">
                    <span className="careers-job-card__badge">{job.openings} Openings</span>
                    <span className="careers-job-card__type">{job.type}</span>
                  </div>

                  <h3 className="careers-job-card__title">{job.title}</h3>
                  <p className="careers-job-card__tagline">{job.tagline}</p>
                  <p className="careers-job-card__description">{job.description}</p>

                  <ul className="careers-job-card__details">
                    <li>
                      <MapPin size={15} aria-hidden="true" />
                      {job.locations}
                    </li>
                    <li>
                      <Clock size={15} aria-hidden="true" />
                      {job.experience}
                    </li>
                  </ul>

                  <span className="careers-job-card__cta">
                    Apply Now
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
