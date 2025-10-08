"use client"
import { projectsData } from "../../../data/projects";
import { useParams } from "next/navigation";

export default function Project1Page() {
  
  const params = useParams();  
  const project = projectsData.find(p => p.id === params.id);
  if (!project) return <p>Project not found</p>;
  
  return (
    <div>
      <section className="banner_part">
        <div className="mi-container">
                <div className="row align-items-center">
                    <div className="col-lg-8">
                        <div className="banner_text">
                            <div className="banner_text_iner">
                                <h1>My Portfolios </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
   <section className="portfolio_part section_padding">
  <div className="mi-container">
    <div>
      <h1 className="pb-3">{project.title}</h1>
      <img src={project.image} alt={project.title} width={800} height={450} />
    <p className="text-dark pt-3 pb-3">{project.description}</p>
      <a
        href={project.repo}
        target="_blank"
        rel="noopener noreferrer"
        className="view-link mt-2"
      >
        Ver proyecto →
      </a>
    </div>
  </div>
</section>
</div>
        
    
   
  );
}