"use client"
import { useState } from 'react';
import FallingStars from '../components/FallingStars';
import emailjs from "@emailjs/browser";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import HeroReveal from "../components/HeroReveal";
import styles from './contact.module.css'
import Titulo from '../components/Titulo';
import { useTranslation } from '../../hooks/useTranslation';

export default function PortfolioPage() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = t.contact.errors.name;
    if (!formData.email.trim()) {
      newErrors.email = t.contact.errors.emailRequired;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = t.contact.errors.emailInvalid;
    }
    if (!formData.subject.trim()) newErrors.subject = t.contact.errors.subject;
    if (!formData.message.trim()) newErrors.message = t.contact.errors.message;

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
      return;
    }

    setErrors({});
  try {
       emailjs.send(
      "service_e6zwz2e",
      "template_q20oxsn",
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      "y6HZ_Yn1sR0Dji-xr"
      ).then(() => {
      setSuccess(t.contact.success);
      setFormData({ name: "", email: "", subject: "", message: "" });
    })
  }catch(error) {
      console.error(error);
      setSuccess("");
      alert(t.contact.sendError);
    };
  };


  return (
    <div>
<FallingStars />
<section className="banner_part">
        <div className="mi-container">
            </div>
    <div className={` ${styles.contactSection} `}>
 <div className="col-12">
        
            <HeroReveal >
             <Titulo as="h1">{t.contact.title}</Titulo>
            </HeroReveal>
         
        </div>
      <div className="row g-5">
      
        <div className="col-lg-6">
       <form className={`${styles.formContact} `} onSubmit={handleSubmit} noValidate>
      <div className="row">
        <div className="col-sm-6">
          <div className={`${styles.formGroup} ${styles.contactReveal}`} style={{ "--reveal-delay": "1.3s" }}>
            <input
              className={` ${styles.formControl}`}
              name="name"
              type="text"
              placeholder={t.contact.placeholders.name}
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className={`${styles.textDanger}`}>{errors.name}</p>}
          </div>
        </div>

        <div className="col-sm-6">
          <div className={` ${styles.contactReveal}`} style={{ "--reveal-delay": "1.55s" }}>
            <input
              className={` ${styles.formControl}`}
              name="email"
              type="email"
              placeholder={t.contact.placeholders.email}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className={`${styles.textDanger}`}>{errors.email}</p>}
          </div>
        </div>

        <div className="col-12">
          <div className={`${styles.formGroup} ${styles.contactReveal}`} style={{ "--reveal-delay": "1.8s" }}>
            <input
              className={`${styles.formControl}`}
              name="subject"
              type="text"
              placeholder={t.contact.placeholders.subject}
              value={formData.subject}
              onChange={handleChange}
            />
            {errors.subject && <p className={`${styles.textDanger}`}>{errors.subject}</p>}
          </div>
        </div>

        <div className="col-12">
          <div className={`${styles.formGroup} ${styles.contactReveal}`} style={{ "--reveal-delay": "2.05s" }}>
            <textarea
              className={` ${styles.formControl}`}
              name="message"
              cols="30"
              rows="3"
              placeholder={t.contact.placeholders.message}
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <p className={`${styles.textDanger}`}>{errors.message}</p>}
          </div>
        </div>
      </div>

      <div className={` ${styles.formGroup} ${styles.contactReveal} mt-3`} style={{ "--reveal-delay": "2.3s" }}>
        <button type="submit" className={` ${styles.buttonContactForm} `}>
          {t.contact.submit}
        </button>
      </div>

      {success && (
        <p className={` ${styles.textSuccess} mt-2 ${styles.contactReveal}`} style={{ "--reveal-delay": "2.45s" }}>
          {success}
        </p>
      )}
    </form>
        </div>
        <div className="col-lg-6">
            <div className={` ${styles.media} ${styles.contactInfo} ${styles.contactReveal}`} style={{ "--reveal-delay": "2.7s" }}>
              <span className={` ${styles.contactInfoIcon}`}><FaMapMarkerAlt /></span>
              <div className={styles.mediaBody}>
                <h3>{t.contact.locationTitle}</h3>
                <p>{t.contact.locationAddress}</p>
              </div>
            </div>
            <div className={` ${styles.media} ${styles.contactInfo} ${styles.contactReveal}`} style={{ "--reveal-delay": "2.95s" }}>
              <span className={` ${styles.contactInfoIcon}`}><FaPhone /></span>
              <div className={styles.mediaBody}>
                <h3>+598 94094405</h3>
                <p>{t.contact.phoneHours}</p>
              </div>
            </div>
            <div className={` ${styles.media} ${styles.contactInfo} ${styles.contactReveal}`} style={{ "--reveal-delay": "3.2s" }}>
              <span className={` ${styles.contactInfoIcon}`}><FaEnvelope /></span>
              <div className={styles.mediaBody}>
                <h3>antobrochini97@gmail.com</h3>
                <p>{t.contact.emailPrompt}</p>
              </div>
            </div>
        </div>
      </div>
    </div>
    </section>
  </div>
  
  )
}