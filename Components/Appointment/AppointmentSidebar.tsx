import { HospitalPhones } from "@/Components/ui/HospitalPhones";
import { Clock, Mail, MapPin, Phone, ShieldCheck, Siren } from "lucide-react";
import { appointmentPage } from "./appointmentContent";

export default function AppointmentSidebar() {
  const { contact, features, steps } = appointmentPage;

  return (
    <aside className="appointment-sidebar">
      <div className="appointment-sidebar__card appointment-sidebar__card--contact">
        <h2 className="appointment-sidebar__title">Need Assistance?</h2>
        <p className="appointment-sidebar__text">
          Our patient support team can help you choose the right department and hospital
          location.
        </p>

        <ul className="appointment-sidebar__contact-list">
          <li className="appointment-sidebar__contact-item appointment-sidebar__contact-item--phones">
            <Phone size={18} aria-hidden="true" />
            <HospitalPhones layout="stack" linkClassName="appointment-sidebar__phone-link" />
          </li>
          <li>
            <a href={`mailto:${contact.email}`} className="appointment-sidebar__contact-item">
              <Mail size={18} aria-hidden="true" />
              <span>{contact.email}</span>
            </a>
          </li>
          <li className="appointment-sidebar__contact-item appointment-sidebar__contact-item--static">
            <Clock size={18} aria-hidden="true" />
            <span>{contact.hours}</span>
          </li>
          <li>
            <a
              href={contact.location.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="appointment-sidebar__contact-item appointment-sidebar__contact-item--location"
            >
              <MapPin size={18} aria-hidden="true" />
              <span>{contact.location.address}</span>
            </a>
          </li>
        </ul>

        <div className="appointment-sidebar__emergency">
          <Siren size={18} aria-hidden="true" />
          <p>
            For life-threatening emergencies, call{" "}
            <HospitalPhones layout="inline" linkClassName="appointment-sidebar__phone-link" />{" "}
            immediately or visit the nearest Sangi Hospital emergency desk.
          </p>
        </div>
      </div>

      <div className="appointment-sidebar__card">
        <h3 className="appointment-sidebar__subtitle">How It Works</h3>
        <ol className="appointment-sidebar__steps">
          {steps.map((item) => (
            <li key={item.step} className="appointment-sidebar__step">
              <span className="appointment-sidebar__step-number">{item.step}</span>
              <div>
                <p className="appointment-sidebar__step-title">{item.title}</p>
                <p className="appointment-sidebar__step-text">{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="appointment-sidebar__card appointment-sidebar__card--trust">
        <ShieldCheck size={22} aria-hidden="true" />
        <div>
          <p className="appointment-sidebar__trust-title">Safe & Confidential</p>
          <p className="appointment-sidebar__trust-text">
            Your information is handled securely by our hospital patient services team.
          </p>
        </div>
      </div>

      <ul className="appointment-sidebar__features">
        {features.map((feature) => (
          <li key={feature.title} className="appointment-sidebar__feature">
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
}
