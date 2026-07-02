"use client";

import { FormEvent, useState } from "react";
import { Mail } from "lucide-react";
import { megaFooterSubscribe } from "./megafooterContent";
import { isValidEmail } from "@/lib/validation/forms";

export default function MegafooterSubscribe() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = email.trim();

    if (!trimmed) {
      setError("Email is required");
      return;
    }

    if (!isValidEmail(trimmed)) {
      setError("Enter a valid email address");
      return;
    }

    setError("");
    setIsSubmitted(true);
    setEmail("");
  };

  return (
    <div className="megafooter__subscribe">
      <h3 className="megafooter__section-title">{megaFooterSubscribe.title}</h3>
      <p className="megafooter__subscribe-text">{megaFooterSubscribe.description}</p>

      {isSubmitted ? (
        <p className="megafooter__subscribe-success" role="status">
          Thank you for subscribing. Health updates coming soon.
        </p>
      ) : (
        <form className="megafooter__subscribe-form" onSubmit={handleSubmit} noValidate>
          <div
            className={`megafooter__subscribe-field${
              error ? " megafooter__subscribe-field--error" : ""
            }`}
          >
            <label htmlFor="megafooter-email" className="sr-only">
              Email address
            </label>
            <input
              id="megafooter-email"
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                if (error) setError("");
              }}
              placeholder="Your email address"
              className="megafooter__subscribe-input"
              maxLength={160}
              aria-invalid={error ? "true" : "false"}
              aria-describedby={error ? "megafooter-email-error" : undefined}
            />
            <button type="submit" className="megafooter__subscribe-button" aria-label="Subscribe">
              <Mail size={18} aria-hidden="true" />
            </button>
          </div>
          {error ? (
            <p id="megafooter-email-error" className="megafooter__subscribe-error" role="alert">
              {error}
            </p>
          ) : null}
        </form>
      )}
    </div>
  );
}
