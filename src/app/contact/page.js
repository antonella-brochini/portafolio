"use client"
import { useState } from 'react';
export default function PortfolioPage() {


const [placeholder, setPlaceholder] = useState('Enter Message');
const [placeholderName, setPlaceholderName] = useState('Enter your name');
const [placeholderAdress, setPlaceholderAdress] = useState('Enter your email');
const [placeholderSubjet, setPlaceholderSubjet] = useState('Enter your subject');

const handleFocus = () => setPlaceholder('')
const handleBlur = () => setPlaceholder('Enter Message');
const handleFocusName = () => setPlaceholderName('');
const handleBlurName = () => setPlaceholderName('Enter your name');
const handleFocusAdress = () => setPlaceholderAdress('');
const handleBlurAdress = () => setPlaceholderAdress('Enter your email');
const handleFocusSubjet = () => setPlaceholderSubjet('')
const handleBlurSubjet = () => setPlaceholderSubjet('Enter your subjet');



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
          <form className="form-contact contact_form" action="contact_process.php" method="post" id="contactForm"
            noValidate="novalidate">
            <div className="row">
              <div className="col-12">
                <div className="form-group">

                  <textarea className="form-control w-100" name="message" id="message" cols="30" rows="9"
                     placeholder={placeholder}
                      onFocus={handleFocus}
                      onBlur={handleBlur}></textarea>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <input className="form-control" name="name" id="name" type="text" onFocus={handleFocusName}
                    onBlur={handleBlurName}  placeholder={placeholderName}/>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <input className="form-control" name="email" id="email" type="email" onFocus={handleFocusAdress}
                    onBlur={handleBlurAdress} placeholder={placeholderAdress}/>
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <input className="form-control" name="subject" id="subject" type="text" onFocus={handleFocusSubjet}
                    onBlur={handleBlurSubjet} placeholder={placeholderSubjet}/>
                </div>
              </div>
            </div>
            <div className="form-group mt-3">
              <button type="submit" className="button button-contactForm btn_4">Send Message</button>
            </div>
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