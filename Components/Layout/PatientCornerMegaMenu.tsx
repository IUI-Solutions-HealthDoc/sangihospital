import AppImage from "@/Components/ui/AppImage";
import Link from "next/link";
import { ArrowRight, BookOpen, Headphones, HeartHandshake } from "lucide-react";
import { patientCornerMegaMenu } from "@/lib/patient-corner";

const sectionIcons = {
  blogs: BookOpen,
  podcasts: Headphones,
  "patient-stories": HeartHandshake,
} as const;

export default function PatientCornerMegaMenu() {
  const { description, image, imageAlt, sections, viewAllHref } =
    patientCornerMegaMenu;

  return (
    <div className="header-mega header-mega--patient-corner">
      <div className="header-mega__panel header-mega__panel--patient-corner">
        <div className="header-mega__brand">
          <div className="header-mega__image-wrap">
            <AppImage
              src={image}
              alt={imageAlt}
              fill
              sizes="240px"
              className="header-mega__image"
            />
          </div>

          <p className="header-mega__description">{description}</p>

          <Link href={viewAllHref} className="header-mega__cta">
            Explore Patient Corner
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        {sections.map((section) => {
          const Icon = sectionIcons[section.id as keyof typeof sectionIcons];

          return (
            <Link
              key={section.id}
              href={section.href}
              className="header-patient-mega__card"
            >
              <span className="header-patient-mega__icon" aria-hidden="true">
                <Icon size={22} strokeWidth={1.75} />
              </span>

              <h3 className="header-patient-mega__title">{section.label}</h3>
              <p className="header-patient-mega__text">{section.description}</p>

              <span className="header-patient-mega__link">
                View {section.label}
                <ArrowRight size={14} aria-hidden="true" />
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
