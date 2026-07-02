import AppImage from "@/Components/ui/AppImage";
import {
  Award,
  Building2,
  FileCheck,
  MapPin,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import "./nabh-certi.css";

const NABH_LOGO = "/assets/images/home/nabh.png";

const overview =
  "This certification is designed for hospitals taking their first steps toward quality improvement. It offers a simplified yet robust framework covering essential patient safety practices, infection control, documentation, and clinical governance. Entry Level Certification builds credibility, strengthens internal processes, and prepares hospitals for future accreditation. It is particularly suited for hospitals in Tier 2 and Tier 3 cities looking to enhance quality care while becoming eligible for empanelment in various government and insurance schemes.";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Patient Safety",
    text: "Essential safety practices embedded across everyday clinical care.",
  },
  {
    icon: Stethoscope,
    title: "Infection Control",
    text: "Structured protocols that protect patients, staff, and care environments.",
  },
  {
    icon: FileCheck,
    title: "Documentation",
    text: "Reliable records and processes that support transparent, accountable care.",
  },
  {
    icon: Award,
    title: "Clinical Governance",
    text: "A foundation for stronger internal systems and future accreditation.",
  },
] as const;

export default function NabhCerti() {
  return (
    <section className="nabh-certi" aria-labelledby="nabh-certi-title">
      <div className="nabh-certi__glow nabh-certi__glow--left" aria-hidden="true" />
      <div className="nabh-certi__glow nabh-certi__glow--right" aria-hidden="true" />

      <div className="nabh-certi__inner">
        <header className="nabh-certi__header">
          <p className="nabh-certi__eyebrow">
            <span className="nabh-certi__eyebrow-dot" aria-hidden="true" />
            Quality & Accreditation
          </p>
          <h2 id="nabh-certi-title" className="nabh-certi__title">
            NABH Entry Level Certification
          </h2>
          <p className="nabh-certi__subtitle">
            A nationally recognised milestone in our commitment to safe, structured,
            and compassionate healthcare for every patient we serve.
          </p>
        </header>

        <div className="nabh-certi__panel">
          <aside className="nabh-certi__badge-card" aria-label="NABH Entry Level Certification badge">
            <div className="nabh-certi__logo-wrap">
              <AppImage
                src={NABH_LOGO}
                alt="NABH Entry Level Certification"
                width={104}
                height={104}
                className="nabh-certi__logo"
                priority={false}
              />
            </div>

            <p className="nabh-certi__badge-tier">Entry Level Certified</p>
            <p className="nabh-certi__badge-note">
              Recognised quality framework for hospitals advancing toward excellence.
            </p>
          </aside>

          <div className="nabh-certi__content">
            <p className="nabh-certi__overview-label">Certification Overview</p>
            <p className="nabh-certi__overview">{overview}</p>

            <div className="nabh-certi__pillars">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;

                return (
                  <article key={pillar.title} className="nabh-certi__pillar">
                    <span className="nabh-certi__pillar-icon" aria-hidden="true">
                      <Icon size={20} strokeWidth={1.75} />
                    </span>
                    <div>
                      <h3 className="nabh-certi__pillar-title">{pillar.title}</h3>
                      <p className="nabh-certi__pillar-text">{pillar.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="nabh-certi__highlight">
              <MapPin className="nabh-certi__highlight-icon" size={20} strokeWidth={1.75} aria-hidden="true" />
              <p className="nabh-certi__highlight-text">
                <strong>Built for growing healthcare ecosystems.</strong> Especially suited for
                hospitals in Tier 2 and Tier 3 cities strengthening quality care while becoming
                eligible for empanelment in government and insurance schemes.
              </p>
            </div>

            <div className="nabh-certi__highlight">
              <Building2 className="nabh-certi__highlight-icon" size={20} strokeWidth={1.75} aria-hidden="true" />
              <p className="nabh-certi__highlight-text">
                <strong>Your trust, elevated.</strong> Entry Level Certification builds credibility,
                strengthens internal processes, and prepares institutions for future accreditation
                milestones.
              </p>
            </div>

            <div className="nabh-certi__highlight">
              <Sparkles className="nabh-certi__highlight-icon" size={20} strokeWidth={1.75} aria-hidden="true" />
              <p className="nabh-certi__highlight-text">
                At Sangi Hospital, this certification reflects our promise to deliver care that is
                not only clinically sound, but systematically safe, accountable, and patient-centred.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
