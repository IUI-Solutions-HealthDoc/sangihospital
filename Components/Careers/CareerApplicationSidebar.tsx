import { HospitalPhones } from "@/Components/ui/HospitalPhones";
import { Mail, Phone, Clock, Briefcase } from "lucide-react";
import { careersPage } from "./careersContent";
import type { CareerJob } from "./careersContent";

type CareerApplicationSidebarProps = {
  job: CareerJob;
};

export default function CareerApplicationSidebar({ job }: CareerApplicationSidebarProps) {
  const { contact } = careersPage;

  return (
    <aside className="career-sidebar" aria-label="Career application information">
      <div className="career-sidebar__card">
        <span className="career-sidebar__eyebrow">Applying For</span>
        <h2 className="career-sidebar__title">{job.shortTitle}</h2>
        <p className="career-sidebar__text">{job.tagline}</p>

        <div className="career-sidebar__facts">
          <div className="career-sidebar__fact">
            <Briefcase size={18} aria-hidden="true" />
            <div>
              <p className="career-sidebar__fact-label">Openings</p>
              <p className="career-sidebar__fact-value">{job.openings} positions</p>
            </div>
          </div>
        </div>
      </div>

      <div className="career-sidebar__card career-sidebar__card--contact">
        <h3 className="career-sidebar__contact-title">HR Contact</h3>
        <ul className="career-sidebar__contact-list">
          <li>
            <Phone size={18} aria-hidden="true" />
            <HospitalPhones layout="stack" linkClassName="career-sidebar__phone-link" />
          </li>
          <li>
            <Mail size={18} aria-hidden="true" />
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </li>
          <li>
            <Clock size={18} aria-hidden="true" />
            <span>{contact.hours}</span>
          </li>
        </ul>
      </div>
    </aside>
  );
}
