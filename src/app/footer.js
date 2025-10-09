import { FaGithub, FaLinkedin  } from "react-icons/fa";

export default function Footer() {
  return (
 <footer className="footer_Part padding_top">
         <div className="mi-container">
             <div className="row alingn-item-center">
                 <div className="col-lg-6">
                     <div className="footer_text">
                         <span>Discuss your project now</span>
                         <h2>antobrochini97@gmail.com </h2>
                     </div>
                 </div>
                 <div className="col-lg-6">
                     <div className="footer_btn">
                         <a href="docs/CV_AntoBrochini.pdf" className="btn_1" download >Download CV</a>
                     </div>
                 </div>
                 <div className="col-lg-6">
                     <div className="footer_menu">
                         <a href="/aboutt">About</a>
                         <a href="/portafolio">WORK</a>
                         <a href="/contact">Contact</a>
                     </div>
                 </div>
                 <div className="col-lg-6">
                    <div className="social_icon">  
                    <a href="https://www.linkedin.com/in/antonella-brochini/" target="_blank">
                     <FaLinkedin />
                    </a>
                     <a href="https://github.com/antonella-brochini" target="_blank" rel="noopener noreferrer">
                        <FaGithub  />
                    </a>
                    </div>
                    
                 </div>
                 <div className="col-lg-12">
                        <div className="copyright_part text-center">
                            <p className="footer-text m-0">
                            Made with ❤️ by Antonella Brochini
                            </p>
                        </div>
                 </div>
             </div>
         </div>
     </footer>

     );
}