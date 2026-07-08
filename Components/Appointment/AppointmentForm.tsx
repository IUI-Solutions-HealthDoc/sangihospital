"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import {
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Clock,
  User,
} from "lucide-react";
import {
  appointmentDepartments,
  appointmentHospitals,
  appointmentPage,
  appointmentServices,
} from "./appointmentContent";
import { submitAppointmentRequest } from "@/lib/api/forms";
import { siteConfig } from "@/lib/site";
import {
  allowedSelectRules,
  consentRules,
  emailOptionalRules,
  fullNameRules,
  futureDateRules,
  getMaxAppointmentDate,
  getMinAppointmentDate,
  messageRules,
  phoneRules,
} from "@/lib/validation/forms";

export type AppointmentFormValues = {
  fullName: string;
  phone: string;
  email: string;
  hospital: string;
  department: string;
  serviceType: string;
  visitType: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
  consent: boolean;
};

const doctorLabels: Record<string, string> = {
  "sanjeev-gera": "Dr. Sanjeev Gera",
  "anita-malik": "Dr. Anita Malik",
  "anjana-singh": "Dr. Anjana Singh",
  "anuja-porwal": "Dr. Anuja Porwal",
  "rahul-mehta": "Dr. Rahul Mehta",
};

export default function AppointmentForm() {
  const searchParams = useSearchParams();
  const doctorSlug = searchParams.get("doctor");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<AppointmentFormValues>({
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      hospital: appointmentHospitals[0]?.value ?? "",
      department: appointmentDepartments[0]?.value ?? "",
      serviceType: appointmentServices[0]?.value ?? "",
      visitType: appointmentPage.visitTypes[0].value,
      preferredDate: "",
      preferredTime: appointmentPage.timeSlots[1].value,
      message: doctorSlug
        ? `I would like to book an appointment with ${doctorLabels[doctorSlug] ?? "the selected doctor"}.`
        : "",
      consent: false,
    },
  });

  useEffect(() => {
    if (doctorSlug && doctorLabels[doctorSlug]) {
      setValue(
        "message",
        `I would like to book an appointment with ${doctorLabels[doctorSlug]}.`,
      );
    }
  }, [doctorSlug, setValue]);

  const hospitalOptions = appointmentHospitals.map((item) => item.value);
  const departmentOptions = appointmentDepartments.map((item) => item.value);
  const serviceOptions = appointmentServices.map((item) => item.value);
  const visitTypeOptions = appointmentPage.visitTypes.map((item) => item.value);
  const timeSlotOptions = appointmentPage.timeSlots.map((item) => item.value);
  const minDate = getMinAppointmentDate();
  const maxDate = getMaxAppointmentDate();

  const onSubmit = async (data: AppointmentFormValues) => {
    setSubmitError("");

    try {
      await submitAppointmentRequest({
        type: "full",
        fullName: data.fullName,
        phone: data.phone,
        email: data.email,
        hospital: data.hospital,
        department: data.department,
        serviceType: data.serviceType,
        visitType: data.visitType,
        preferredDate: data.preferredDate,
        preferredTime: data.preferredTime,
        message: data.message,
      });

      setIsSubmitted(true);
      reset();
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Unable to submit your appointment request. Please try again.",
      );
    }
  };

  if (isSubmitted) {
    return (
      <div className="appointment-form__success" role="status">
        <span className="appointment-form__success-icon" aria-hidden="true">
          <CheckCircle2 size={40} strokeWidth={1.5} />
        </span>
        <h2 className="appointment-form__success-title">Appointment Request Received</h2>
        <p className="appointment-form__success-text">
          Thank you for choosing Sangi Hospital. Our patient desk will review your request and
          contact you shortly to confirm your appointment details.
        </p>
        <button
          type="button"
          className="appointment-form__success-button"
          onClick={() => setIsSubmitted(false)}
        >
          Book Another Appointment
        </button>
      </div>
    );
  }

  return (
    <div className="appointment-form">
      <div className="appointment-form__header">
        <p className="appointment-form__eyebrow">{appointmentPage.intro.eyebrow}</p>
        <h2 className="appointment-form__title">
          {appointmentPage.intro.heading}{" "}
          <span className="appointment-form__title-accent">
            {appointmentPage.intro.headingAccent}
          </span>
        </h2>
        <p className="appointment-form__lead">{appointmentPage.intro.description}</p>
        {doctorSlug && doctorLabels[doctorSlug] ? (
          <p className="appointment-form__doctor-note">
            Booking request for <strong>{doctorLabels[doctorSlug]}</strong>
          </p>
        ) : null}
      </div>

      <form className="appointment-form__body" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="appointment-form__section">
          <h3 className="appointment-form__section-title">
            <User size={18} aria-hidden="true" />
            Patient Details
          </h3>

          <div className="appointment-form__row appointment-form__row--2">
            <div className="appointment-form__field">
              <label htmlFor="fullName" className="appointment-form__label">
                Full Name *
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                className="appointment-form__input"
                aria-invalid={errors.fullName ? "true" : "false"}
                maxLength={80}
                {...register("fullName", fullNameRules)}
              />
              {errors.fullName ? (
                <span className="appointment-form__error">{errors.fullName.message}</span>
              ) : null}
            </div>

            <div className="appointment-form__field">
              <label htmlFor="phone" className="appointment-form__label">
                Phone Number *
              </label>
              <input
                id="phone"
                type="tel"
                placeholder={siteConfig.phonesDisplay}
                className="appointment-form__input"
                aria-invalid={errors.phone ? "true" : "false"}
                maxLength={20}
                {...register("phone", phoneRules)}
              />
              {errors.phone ? (
                <span className="appointment-form__error">{errors.phone.message}</span>
              ) : null}
            </div>
          </div>

          <div className="appointment-form__field">
            <label htmlFor="email" className="appointment-form__label">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@email.com"
              className="appointment-form__input"
              aria-invalid={errors.email ? "true" : "false"}
              maxLength={160}
              {...register("email", emailOptionalRules)}
            />
            {errors.email ? (
              <span className="appointment-form__error">{errors.email.message}</span>
            ) : null}
          </div>
        </div>

        <div className="appointment-form__section">
          <h3 className="appointment-form__section-title">
            <CalendarDays size={18} aria-hidden="true" />
            Visit Details
          </h3>

          <div className="appointment-form__row appointment-form__row--2">
            <div className="appointment-form__field">
              <label htmlFor="hospital" className="appointment-form__label">
                Hospital Location *
              </label>
              <div className="appointment-form__select-wrap">
                <select
                  id="hospital"
                  className="appointment-form__input appointment-form__select"
                  aria-invalid={errors.hospital ? "true" : "false"}
                  {...register("hospital", allowedSelectRules("a hospital", hospitalOptions))}
                >
                  {appointmentHospitals.map((hospital) => (
                    <option key={hospital.value} value={hospital.value}>
                      {hospital.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="appointment-form__field-icon" size={18} aria-hidden="true" />
              </div>
              {errors.hospital ? (
                <span className="appointment-form__error">{errors.hospital.message}</span>
              ) : null}
            </div>

            <div className="appointment-form__field">
              <label htmlFor="department" className="appointment-form__label">
                Department / Speciality *
              </label>
              <div className="appointment-form__select-wrap">
                <select
                  id="department"
                  className="appointment-form__input appointment-form__select"
                  aria-invalid={errors.department ? "true" : "false"}
                  {...register(
                    "department",
                    allowedSelectRules("a department", departmentOptions),
                  )}
                >
                  {appointmentDepartments.map((department) => (
                    <option key={department.value} value={department.value}>
                      {department.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="appointment-form__field-icon" size={18} aria-hidden="true" />
              </div>
              {errors.department ? (
                <span className="appointment-form__error">{errors.department.message}</span>
              ) : null}
            </div>
          </div>

          <div className="appointment-form__row appointment-form__row--2">
            <div className="appointment-form__field">
              <label htmlFor="serviceType" className="appointment-form__label">
                Service Type *
              </label>
              <div className="appointment-form__select-wrap">
                <select
                  id="serviceType"
                  className="appointment-form__input appointment-form__select"
                  {...register(
                    "serviceType",
                    allowedSelectRules("a service type", serviceOptions),
                  )}
                >
                  {appointmentServices.map((service) => (
                    <option key={service.value} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="appointment-form__field-icon" size={18} aria-hidden="true" />
              </div>
              {errors.serviceType ? (
                <span className="appointment-form__error">{errors.serviceType.message}</span>
              ) : null}
            </div>

            <div className="appointment-form__field">
              <label htmlFor="visitType" className="appointment-form__label">
                Visit Type *
              </label>
              <div className="appointment-form__select-wrap">
                <select
                  id="visitType"
                  className="appointment-form__input appointment-form__select"
                  {...register("visitType", allowedSelectRules("a visit type", visitTypeOptions))}
                >
                  {appointmentPage.visitTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="appointment-form__field-icon" size={18} aria-hidden="true" />
              </div>
            </div>
          </div>

          <div className="appointment-form__row appointment-form__row--2">
            <div className="appointment-form__field">
              <label htmlFor="preferredDate" className="appointment-form__label">
                Preferred Date *
              </label>
              <div className="appointment-form__date-wrap">
                <input
                  id="preferredDate"
                  type="date"
                  className="appointment-form__input appointment-form__date"
                  aria-invalid={errors.preferredDate ? "true" : "false"}
                  min={minDate}
                  max={maxDate}
                  {...register("preferredDate", futureDateRules)}
                />
                <CalendarDays className="appointment-form__field-icon" size={18} aria-hidden="true" />
              </div>
              {errors.preferredDate ? (
                <span className="appointment-form__error">{errors.preferredDate.message}</span>
              ) : null}
            </div>

            <div className="appointment-form__field">
              <label htmlFor="preferredTime" className="appointment-form__label">
                Preferred Time *
              </label>
              <div className="appointment-form__select-wrap">
                <select
                  id="preferredTime"
                  className="appointment-form__input appointment-form__select"
                  {...register(
                    "preferredTime",
                    allowedSelectRules("a time slot", timeSlotOptions),
                  )}
                >
                  {appointmentPage.timeSlots.map((slot) => (
                    <option key={slot.value} value={slot.value}>
                      {slot.label}
                    </option>
                  ))}
                </select>
                <Clock className="appointment-form__field-icon" size={18} aria-hidden="true" />
              </div>
              {errors.preferredTime ? (
                <span className="appointment-form__error">{errors.preferredTime.message}</span>
              ) : null}
            </div>
          </div>
        </div>

        <div className="appointment-form__section">
          <div className="appointment-form__field">
            <label htmlFor="message" className="appointment-form__label">
              Additional Notes
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Share symptoms, reports, or any special requirements..."
              className="appointment-form__input appointment-form__textarea"
              maxLength={2000}
              {...register("message", messageRules(1, 2000, false))}
            />
            {errors.message ? (
              <span className="appointment-form__error">{errors.message.message}</span>
            ) : null}
          </div>

          <label className="appointment-form__consent">
            <input
              type="checkbox"
              className="appointment-form__checkbox"
              {...register("consent", consentRules)}
            />
            <span>
              I agree to be contacted by Sangi Hospital regarding this appointment request and
              understand this form does not guarantee immediate emergency care.
            </span>
          </label>
          {errors.consent ? (
            <span className="appointment-form__error">{errors.consent.message}</span>
          ) : null}
        </div>

        <button
          type="submit"
          className="appointment-form__submit btn-gradient-primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting Request..." : "Book An Appointment"}
        </button>
        {submitError ? (
          <p className="appointment-form__error" role="alert">
            {submitError}
          </p>
        ) : null}
      </form>
    </div>
  );
}
