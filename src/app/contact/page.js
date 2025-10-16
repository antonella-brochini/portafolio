"use client"
import { useState } from 'react';
import emailjs from "@emailjs/browser";
export default function PortfolioPage() {


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
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

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
      setSuccess("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    })
  }catch(error) {
      console.error(error);
      setSuccess("");
      alert("Failed to send message");
    };
  };


  return (
    <div>
<section className="banner_part">
        <div className="mi-container">
                <div className="row align-items-center">
                    <div className="col-lg-8">
                        <div className="banner_text">
                            <div className="banner_text_iner">
                                <h1>Contact</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
  <section className="contact-section section_padding">
    <div className="mi-container">

      <div className="row">
        <div className="col-12">
          <h2 className="contact-title">Get in Touch</h2>
        </div>
        <div className="col-lg-8">
          <form className="form-contact contact_form" onSubmit={handleSubmit} noValidate>
      <div className="row">
        <div className="col-12">
          <div className="form-group">
            <textarea
              className="form-control w-100"
              name="message"
              cols="30"
              rows="9"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <p className="text-danger">{errors.message}</p>}
          </div>
        </div>

        <div className="col-sm-6">
          <div className="form-group">
            <input
              className="form-control"
              name="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-danger">{errors.name}</p>}
          </div>
        </div>

        <div className="col-sm-6">
          <div className="form-group">
            <input
              className="form-control"
              name="email"
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-danger">{errors.email}</p>}
          </div>
        </div>

        <div className="col-12">
          <div className="form-group">
            <input
              className="form-control"
              name="subject"
              type="text"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
            {errors.subject && <p className="text-danger">{errors.subject}</p>}
          </div>
        </div>
      </div>

      <div className="form-group mt-3">
        <button type="submit" className="button button-contactForm btn_4">
          Send Message
        </button>
      </div>

      {success && <p className="text-success mt-2">{success}</p>}
    </form>
        </div>
        <div className="col-lg-4">
          <div className="media contact-info">
            <span className="contact-info__icon"><i className="ti-home"></i></span>
            <div className="media-body">
              <h3>Montevideo, Uruguay.</h3>
              <p>Av. Italia 1234, Montevideo 11600</p>
            </div>
          </div>
          <div className="media contact-info">
            <span className="contact-info__icon"><i className="ti-tablet"></i></span>
            <div className="media-body">
              <h3>+598 94094405</h3>
              <p>Mon to Fri 9am to 6pm</p>
            </div>
          </div>
          <div className="media contact-info">
            <span className="contact-info__icon"><i className="ti-email"></i></span>
            <div className="media-body">
              <h3>antobrochini97@gmail.com</h3>
              <p>Send us your query anytime!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  
  )
}