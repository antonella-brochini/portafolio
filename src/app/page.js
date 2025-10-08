"use client"
import Image from "next/image";

import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact ,FaJava, FaDatabase, FaAws , FaCloud ,FaDocker, FaGithub, FaBootstrap } from "react-icons/fa";
import { SiNextdotjs, SiSpringboot , SiDotnet ,SiTerraform, SiTailwindcss} from "react-icons/si";



export default function Home() {


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
    { name: "C#", icon: <Image src="/img/c-sharp-logo.png" alt="C#" width={50} height={50}/> },
     { name: "SQL", icon: <FaDatabase   /> },
    { name: "Salesforce", icon: <FaCloud /> },
    { name: "GeneXus", icon: <Image src="/img/genexus.png" alt="GeneXus" width={70} height={50} /> },
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
    <div   >
    <main >

    <section className="banner_part">
        <div className="mi-container">
            <div className="row align-items-center">
                <div className="col-lg-7">
                    <div className="banner_text">
                        <div className="banner_text_iner">
                            <h5>Hi! I’m Anto</h5>
                            <h1>Software Developer
                            </h1>
                            <div className="banner_btn">
                                <a href="/contact" className="btn_1">Contact me</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="about_part section_padding">
        <div className="mi-container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="about_text">
                        <h4>about me</h4>
                        <p>I’m a recent IT graduate and Fullstack Software Developer.<br/> 
                            I enjoy building web applications and learning new technologies to create efficient and user-friendly solutions.
                        </p>
                        <br/> 
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="experiance_list">
                        <h4>Experiences</h4>
                        <div className="experiance_list_iner">
                            <div className="single_experiance_list">
                                <h5>Freelance Web Developer</h5>
                                <p> Developed websites for clients, small business websites, and e-commerce.
                                </p>
                            </div>
                            <div className="single_experiance_list">
                                <h5>Academic Projects</h5>
                                <p> Created several software projects during my university studies.
                                </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="portfolio_part section_padding">
        <div className="mi-container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="section_tittle">
                        <p>My portfolio</p>
                        <h2>Take a look around some of my awesome works</h2>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="section_btn text-right">
                        <a href="/portafolio" className="btn_2">More works</a>
                    </div>
                </div>
            </div>
           
        <div  className="gallery-grid " >
        <a href="" className="grid-item "  style={{ gridColumn: "1 / 2", gridRow: "1 / 2" }}>
        <Image
          src="/img/deploy-app-github.jpg"
          width="1917"
          height="911"
          alt=""
          className="gallery-image"
          onClick={() => { setIndex(0); setOpen(true); }}
        />
        <div className="portfolio_hover_text">
          <i className="ti-plus"></i>
        </div>
        </a>
        <a href="" className="grid-item "  style={{ gridColumn: "2 / 5", gridRow: "1 / 3" }}>
        <Image
          src="/img/port_1.png"
          width="1920"
          height="1080"
          alt=""
          className="gallery-image"
          onClick={() => { setIndex(1); setOpen(true); }}
        />
        <div className="portfolio_hover_text">
          <i className="ti-plus"></i>
        </div>
        </a>
        <a href="" className="grid-item">
        <Image
          src="/img/infra-github.jpg"
          width="1919"
          height="904"
          alt=""
          className="gallery-image"
          onClick={() => { setIndex(2); setOpen(true); }}
        />
        <div className="portfolio_hover_text">
          <i className="ti-plus"></i>
        </div>
        </a>
         <a href="" className="grid-item "  style={{ gridColumn: "1 / 3", gridRow: "3 / 4" }}>
        <Image
          src="/img/port_2.png"
          width="1912"
          height="889"
          alt=""
          className="gallery-image"
          onClick={() => { setIndex(3); setOpen(true); }}
        />
         <div className="portfolio_hover_text">
          <i className="ti-plus"></i>
          </div>
        </a>
         <a href="" className="grid-item "  style={{ gridColumn: "3 / 5", gridRow: "3 / 4" }}>
        <Image
          src="/img/porfolio.jpg"
          width="1808"
          height="908"
          alt=""
          className="gallery-image"
          onClick={() => { setIndex(4); setOpen(true); }}
        />
        <div className="portfolio_hover_text">
          <i className="ti-plus"></i>
        </div>
        </a>
        </div>

    </div>
          
    </section>
 <section className="section_padding mi-container">
      <div className="container">
         <div className="section_tittle">
            <p>skills</p>
             <h2>Technologies, Frameworks and Lenguages</h2>
          </div>
        <div className="skills-grid">
       
          <div>
            <h3 className="pb-4" >Technologies/Frameworks</h3>
            
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
          <div>
            <h3  className="pb-4" >Languages</h3>
            <ul className="languages-list">
              {languages.map((lang, i) => (
                <li key={i}>
                  <span>{lang.name}</span>
                  <span className="level">{lang.level}</span>
                </li>
              ))}
            </ul>
            <h3  className="pb-4 pt-4" >Salesforce Profile</h3>
          <ul className="list-unstyled languages-list">
  <li className="d-flex align-items-center justify-content-between mb-2">
    {/* Icono y texto en columna */}
    <a href="https://www.salesforce.com/trailblazer/antonellabrochini">
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

      </main>
    </div>
  );
}
