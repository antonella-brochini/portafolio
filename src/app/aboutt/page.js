
import Image from "next/image";

export default function Aboutt() {





  return (
      <div>
      <section className="banner_part">
            <div className="mi-container">
                <div className="row align-items-center">
                    <div className="col-lg-8">
                        <div className="banner_text">
                            <div className="banner_text_iner">
                                <h1> Hi, I’m Antonella </h1>
                                <h1>Brochini</h1>
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
                        <p>I’m a Fullstack Developer, passionate about creating modern web applications and designing seamless digital experiences. 
                        </p>
                         <p> With strong skills in Next.js, Spring Boot, and databases, I love turning ideas into functional and elegant solutions. I’m always eager to learn and take on new challenges.
                        </p>
                        <br/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="experiance_list">
                            <h4>Experiences</h4>
                            <div className="experiance_list_iner">
                               <div className="single_experiance_list">
      <h5>Academic Projects</h5>
      <p>Developed several web applications as part of my software development degree.</p>
    </div>
    <div className="single_experiance_list">
      <h5>Team Collaboration</h5>
      <p>Worked with classmates to design and build full-stack applications using Java and JavaScript.</p>
    </div>
    <div className="single_experiance_list">
      <h5>Final Degree Project</h5>
      <p>Developed a web platform for a vineyard, integrating Spring Boot and Next.js.</p>
    </div>
    <div className="single_experiance_list">
      <h5>Technical Support Practice</h5>
      <p>Gained experience assisting users and solving technical issues in academic projects.</p>
    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="philosophy_part section_padding">
            <div className="mi-container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-6 col-md-6">
                        <div className="philophy_text">
                           <h5>My philosophy</h5>
<h2>Hard work, persistence, and learning always pay off</h2>
<p>I firmly believe that putting in consistent effort and never being afraid to try is the key to achieving meaningful results. Every challenge is an opportunity to grow, and even small steps forward count towards success.</p>
<p>By embracing persistence and a willingness to learn, I strive to turn every project into a chance to improve, innovate, and create something valuable. I trust that dedication and resilience ultimately lead to rewarding outcomes.</p>
<p>For me, the process matters as much as the result. Staying curious, giving my best, and continuously pushing my limits allows me to grow both personally and professionally while delivering quality work.</p>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6">
                        <div className="philophy_img">
                            <Image src="/img/philosophy.png" alt="#" width={487} height={514}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            </div>
  );
}
