"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { CheckCircle2, ChevronDown, Mail, MapPin, Phone } from "lucide-react";
import { HospitalPhones } from "@/Components/ui/HospitalPhones";
import { contactPage } from "./contactContent";
import { submitContactRequest } from "@/lib/api/forms";
import { siteConfig } from "@/lib/site";
import {
  allowedSelectRules,
  consentRules,
  emailRequiredRules,
  fullNameRules,
  messageRules,
  phoneRules,
} from "@/lib/validation/forms";

export type ContactFormValues = {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  consent: boolean;
};

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      subject: contactPage.subjects[0].value,
      message: "",
      consent: false,
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setSubmitError("");

    try {
      const subjectLabel =
        contactPage.subjects.find((item) => item.value === data.subject)?.label ??
        data.subject;

      await submitContactRequest({
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        subject: subjectLabel,
        message: data.message,
      });

      setIsSubmitted(true);
      reset();
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Unable to send your message. Please try again.",
      );
    }
  };

  if (isSubmitted) {
    return (
      <div className="contact-form__success" role="status">
        <span className="contact-form__success-icon" aria-hidden="true">
          <CheckCircle2 size={40} strokeWidth={1.5} />
        </span>
        <h2 className="contact-form__success-title">Message Sent Successfully</h2>
        <p className="contact-form__success-text">
          Thank you for contacting Sangi Hospital. Our team has received your query and
          will respond as soon as possible.
        </p>
        <button
          type="button"
          className="contact-form__success-button"
          onClick={() => setIsSubmitted(false)}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="contact-page__grid">
      <aside className="contact-sidebar">
        <p className="contact-sidebar__eyebrow">{contactPage.intro.eyebrow}</p>
        <h2 className="contact-sidebar__title">
          {contactPage.intro.heading}{" "}
          <span>{contactPage.intro.headingAccent}</span>
        </h2>
        <p className="contact-sidebar__text">{contactPage.intro.description}</p>

        <ul className="contact-sidebar__list">
          {contactPage.contactInfo.map((item) => (
            <li key={item.label} className="contact-sidebar__item">
              <span className="contact-sidebar__icon" aria-hidden="true">
                {item.label === "Phone" ? (
                  <Phone size={18} />
                ) : item.label === "Email" ? (
                  <Mail size={18} />
                ) : (
                  <MapPin size={18} />
                )}
              </span>
              <div>
                <p className="contact-sidebar__label">{item.label}</p>
                {"phones" in item ? (
                  <HospitalPhones
                    layout="stack"
                    linkClassName="contact-sidebar__value"
                  />
                ) : "href" in item ? (
                  <a href={item.href} className="contact-sidebar__value">
                    {item.value}
                  </a>
                ) : (
                  <p className="contact-sidebar__value">{item.value}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </aside>

      <div className="contact-form">
        <div className="contact-form__header">
          <h2 className="contact-form__title">Send Us a Message</h2>
          <p className="contact-form__lead">
            Fill out the form below and our patient support team will get back to you.
          </p>
        </div>

        <form className="contact-form__body" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="contact-form__row contact-form__row--2">
            <div className="contact-form__field">
              <label htmlFor="fullName" className="contact-form__label">
                Full Name *
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                className="contact-form__input"
                aria-invalid={errors.fullName ? "true" : "false"}
                maxLength={80}
                {...register("fullName", fullNameRules)}
              />
              {errors.fullName ? (
                <span className="contact-form__error">{errors.fullName.message}</span>
              ) : null}
            </div>

            <div className="contact-form__field">
              <label htmlFor="phone" className="contact-form__label">
                Phone Number *
              </label>
              <input
                id="phone"
                type="tel"
                placeholder={siteConfig.phonesDisplay}
                className="contact-form__input"
                aria-invalid={errors.phone ? "true" : "false"}
                maxLength={20}
                {...register("phone", phoneRules)}
              />
              {errors.phone ? (
                <span className="contact-form__error">{errors.phone.message}</span>
              ) : null}
            </div>
          </div>

          <div className="contact-form__field">
            <label htmlFor="email" className="contact-form__label">
              Email Address *
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@email.com"
              className="contact-form__input"
              aria-invalid={errors.email ? "true" : "false"}
              maxLength={160}
              {...register("email", emailRequiredRules)}
            />
            {errors.email ? (
              <span className="contact-form__error">{errors.email.message}</span>
            ) : null}
          </div>

          <div className="contact-form__field">
            <label htmlFor="subject" className="contact-form__label">
              Subject *
            </label>
            <div className="contact-form__select-wrap">
              <select
                id="subject"
                className="contact-form__input contact-form__select"
                {...register(
                  "subject",
                  allowedSelectRules(
                    "a subject",
                    contactPage.subjects.map((item) => item.value),
                  ),
                )}
              >
                {contactPage.subjects.map((subject) => (
                  <option key={subject.value} value={subject.value}>
                    {subject.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="contact-form__field-icon" size={18} aria-hidden="true" />
            </div>
            {errors.subject ? (
              <span className="contact-form__error">{errors.subject.message}</span>
            ) : null}
          </div>

          <div className="contact-form__field">
            <label htmlFor="message" className="contact-form__label">
              Your Message *
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Tell us how we can help you..."
              className="contact-form__input contact-form__textarea"
              aria-invalid={errors.message ? "true" : "false"}
              maxLength={3000}
              {...register("message", messageRules(10, 3000))}
            />
            {errors.message ? (
              <span className="contact-form__error">{errors.message.message}</span>
            ) : null}
          </div>

          <label className="contact-form__consent">
            <input
              type="checkbox"
              className="contact-form__checkbox"
              {...register("consent", consentRules)}
            />
            <span>
              I agree to be contacted by Sangi Hospital regarding this inquiry.
            </span>
          </label>
          {errors.consent ? (
            <span className="contact-form__error">{errors.consent.message}</span>
          ) : null}

          {submitError ? (
            <p className="contact-form__submit-error" role="alert">
              {submitError}
            </p>
          ) : null}

          <button
            type="submit"
            className="contact-form__submit btn-gradient-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending Message..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
