"use client";

import { useState, type FormEvent, type ChangeEvent, type CSSProperties } from "react";
import FallingStars from "../../components/FallingStars";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import HeroReveal from "../../components/HeroReveal";
import styles from "./contact.module.css";
import Titulo from "../../components/Titulo";
import { useTranslation } from "../../../hooks/useTranslation";

type FormFields = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FieldErrors = Partial<Record<keyof FormFields, string>>;

export default function ContactPage() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState<FormFields>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [success, setSuccess] = useState("");
  const [sending, setSending] = useState(false);
  const [formError, setFormError] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = (): FieldErrors => {
    const next: FieldErrors = {};
    if (!formData.name.trim()) next.name = t.contact.errors.name;
    if (!formData.email.trim()) {
      next.email = t.contact.errors.emailRequired;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      next.email = t.contact.errors.emailInvalid;
    }
    if (!formData.subject.trim()) next.subject = t.contact.errors.subject;
    if (!formData.message.trim()) next.message = t.contact.errors.message;
    return next;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
      setFormError("");
      return;
    }

    setErrors({});
    setFormError("");
    setSending(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("send_failed");
      }

      setSuccess(t.contact.success);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setSuccess("");
      setFormError(t.contact.sendError);
    } finally {
      setSending(false);
    }
  };

  return (
    <main>
      <FallingStars />
      <section className="banner_part" aria-labelledby="contact-title">
        <div className={styles.contactSection}>
          <div className="col-12">
            <HeroReveal>
              <Titulo as="h1" id="contact-title">
                {t.contact.title}
              </Titulo>
            </HeroReveal>
          </div>

          <div className="row g-5">
            <div className="col-lg-6">
              <form
                className={styles.formContact}
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="row">
                  <div className="col-sm-6">
                    <div
                      className={`${styles.formGroup} ${styles.contactReveal}`}
                      style={{ "--reveal-delay": "1.3s" } as CSSProperties}
                    >
                      <label className={styles.fieldLabel} htmlFor="contact-name">
                        {t.contact.labels.name}
                      </label>
                      <input
                        id="contact-name"
                        className={styles.formControl}
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder={t.contact.placeholders.name}
                        value={formData.name}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? "err-name" : undefined}
                      />
                      {errors.name && (
                        <p id="err-name" className={styles.textDanger} role="alert">
                          {errors.name}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div
                      className={styles.contactReveal}
                      style={{ "--reveal-delay": "1.55s" } as CSSProperties}
                    >
                      <label className={styles.fieldLabel} htmlFor="contact-email">
                        {t.contact.labels.email}
                      </label>
                      <input
                        id="contact-email"
                        className={styles.formControl}
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder={t.contact.placeholders.email}
                        value={formData.email}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? "err-email" : undefined}
                      />
                      {errors.email && (
                        <p id="err-email" className={styles.textDanger} role="alert">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="col-12">
                    <div
                      className={`${styles.formGroup} ${styles.contactReveal}`}
                      style={{ "--reveal-delay": "1.8s" } as CSSProperties}
                    >
                      <label className={styles.fieldLabel} htmlFor="contact-subject">
                        {t.contact.labels.subject}
                      </label>
                      <input
                        id="contact-subject"
                        className={styles.formControl}
                        name="subject"
                        type="text"
                        placeholder={t.contact.placeholders.subject}
                        value={formData.subject}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.subject)}
                        aria-describedby={
                          errors.subject ? "err-subject" : undefined
                        }
                      />
                      {errors.subject && (
                        <p
                          id="err-subject"
                          className={styles.textDanger}
                          role="alert"
                        >
                          {errors.subject}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="col-12">
                    <div
                      className={`${styles.formGroup} ${styles.contactReveal}`}
                      style={{ "--reveal-delay": "2.05s" } as CSSProperties}
                    >
                      <label className={styles.fieldLabel} htmlFor="contact-message">
                        {t.contact.labels.message}
                      </label>
                      <textarea
                        id="contact-message"
                        className={styles.formControl}
                        name="message"
                        rows={3}
                        placeholder={t.contact.placeholders.message}
                        value={formData.message}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={
                          errors.message ? "err-message" : undefined
                        }
                      />
                      {errors.message && (
                        <p
                          id="err-message"
                          className={styles.textDanger}
                          role="alert"
                        >
                          {errors.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div
                  className={`${styles.formGroup} ${styles.contactReveal} mt-3`}
                  style={{ "--reveal-delay": "2.3s" } as CSSProperties}
                >
                  <button
                    type="submit"
                    className={styles.buttonContactForm}
                    disabled={sending}
                  >
                    {sending ? t.contact.sending : t.contact.submit}
                  </button>
                </div>

                {success && (
                  <p
                    className={`${styles.textSuccess} mt-2 ${styles.contactReveal}`}
                    style={{ "--reveal-delay": "2.45s" } as CSSProperties}
                    role="status"
                  >
                    {success}
                  </p>
                )}
                {formError && (
                  <p className={`${styles.textDanger} mt-2`} role="alert">
                    {formError}
                  </p>
                )}
              </form>
            </div>

            <div className="col-lg-6">
              <div
                className={`${styles.media} ${styles.contactInfo} ${styles.contactReveal}`}
                style={{ "--reveal-delay": "2.7s" } as CSSProperties}
              >
                <span className={styles.contactInfoIcon} aria-hidden>
                  <FaMapMarkerAlt />
                </span>
                <div className={styles.mediaBody}>
                  <h2 className={styles.infoHeading}>{t.contact.locationTitle}</h2>
                  <p>{t.contact.locationAddress}</p>
                </div>
              </div>
              <div
                className={`${styles.media} ${styles.contactInfo} ${styles.contactReveal}`}
                style={{ "--reveal-delay": "2.95s" } as CSSProperties}
              >
                <span className={styles.contactInfoIcon} aria-hidden>
                  <FaPhone />
                </span>
                <div className={styles.mediaBody}>
                  <h2 className={styles.infoHeading}>
                    <a href="tel:+59894094405">+598 94094405</a>
                  </h2>
                  <p>{t.contact.phoneHours}</p>
                </div>
              </div>
              <div
                className={`${styles.media} ${styles.contactInfo} ${styles.contactReveal}`}
                style={{ "--reveal-delay": "3.2s" } as CSSProperties}
              >
                <span className={styles.contactInfoIcon} aria-hidden>
                  <FaEnvelope />
                </span>
                <div className={styles.mediaBody}>
                  <h2 className={styles.infoHeading}>
                    <a href="mailto:antobrochini97@gmail.com">
                      antobrochini97@gmail.com
                    </a>
                  </h2>
                  <p>{t.contact.emailPrompt}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
