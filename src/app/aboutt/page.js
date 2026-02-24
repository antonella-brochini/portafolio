"use client";

import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact ,FaJava, FaDatabase, FaAws , FaCloud ,FaDocker, FaGithub, FaBootstrap, FaToolbox, FaCode } from "react-icons/fa";
import { SiNextdotjs, SiSpringboot , SiDotnet ,SiTerraform, SiTailwindcss } from "react-icons/si";
import FallingStars from "../components/FallingStars";
import HeroReveal from "../components/HeroReveal";
import '../../styles/about.css'
import Btn from "../components/boton3d";

export default function Aboutt() {

     const technologies = [
    { name: "HTML", icon: <FaHtml5   /> },
    { name: "CSS", icon: <FaCss3Alt    /> },
    { name: "JavaScript", icon: <FaJsSquare    /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "React", icon: <FaReact  /> },
    { name: "Next.js", icon: <SiNextdotjs   /> },
    { name: "Java", icon: <FaJava   />   },
    { name: "Spring Boot", icon: <SiSpringboot   /> },
    { name: ".NET", icon: <SiDotnet  /> },
    { name: "C#", icon: <FaCode /> },
    { name: "SQL", icon: <FaDatabase   /> },
    { name: "Salesforce", icon: <FaCloud /> },
    { name: "GeneXus", icon: <FaToolbox /> },
    { name: "AWS", icon: <FaAws  /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Terraform", icon: <SiTerraform /> },
    { name: "GitHub Actions", icon: <FaGithub /> },
 
  ];

  const languages = [
    { name: "Spanish", level: "Native" },
    { name: "English", level: "Upper-Intermediate / B2" },
  ];

  return (
      <div>
      <FallingStars />
      <section className="banner_part">
            <div className="mi-container">
                <div className="row align-items-center">
                    <div className="col-lg-8">
                        <div className="banner_text">
                          <HeroReveal className="banner_text_iner">
                            <h1 className="fall-title-item"><span className="gradient-text">{"Hi, I'm Antonella Brochini"}</span></h1>
                            <p className="about_hero_text">{"I'm a Fullstack Developer, passionate about creating modern web applications and designing seamless digital experiences."}</p>
                            <p className="about_hero_text">{"With strong skills in Next.js, Spring Boot, and databases, I love turning ideas into functional and elegant solutions. I'm always eager to learn and take on new challenges."}</p>
            
                            <a href="https://www.linkedin.com/in/antonella-brochini/" className="btn-gaming" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                          </HeroReveal>
                           
                        </div>
                           <Btn titulo="LinkedIn" url="https://www.linkedin.com/in/antonella-brochini/" />
                    </div>
                </div>
            </div>
        </section>

 <section className="section_padding mi-container">
      <div className="container">
        <div className="skills-grid">
          <div className="tech-column">
            <div className="section_tittle">
               <h4>Technologies and Frameworks</h4>
            </div>
            <div className="tech-grid">
              {technologies.map((tech, i) => (
                <div key={i} className="tech-card">
                  <span className="tech-icon">{tech.icon}</span>
                  <span className="tech-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="languages-column">
            <h4 className="pb-4" >Languages</h4>
            <ul className="languages-list">
              {languages.map((lang, i) => (
                <li key={i}>
                  <span>{lang.name}</span>
                  <span className="level">{lang.level}</span>
                </li>
              ))}
            </ul>
            <h4 className="pb-4 pt-4" >Salesforce Profile</h4>
          <ul className="list-unstyled languages-list">
  <li className="d-flex align-items-center justify-content-between mb-2">
    {/* Icono y texto en columna */}
    <a
      href="https://www.salesforce.com/trailblazer/antonellabrochini"
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none', color: 'white' }}
    >
    <div className="d-flex flex-column align-items-center">
      <FaCloud style={{ fontSize: '2rem' }} />
      <span >Profile</span>
    </div>
      </a>

    {/* Texto a la derecha */}
    <span className="fw-bold level">57 Badges</span>
  </li>
</ul>

</div>
        </div>
      </div>
    </section>
</div>
       
  );
}
