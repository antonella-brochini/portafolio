import FallingStars from "../../../components/FallingStars";
import { projectsData } from "../../../data/projects";
import ImageCarousel from "../../../components/ImageCarousel";
import ProjectHero from "./ProjectHero";
import styles from "./ProjectDetail.module.css";


export async function generateStaticParams() {

  return projectsData.map(project => ({
    id: project.id
  }));
}

export default function Project1Page({ params }) {
  const project = projectsData.find(p => p.id === params.id);
  if (!project) return <p>Project not found</p>;

  
  return (
    <div>
      <FallingStars />
      <ProjectHero
        title={project.title}
        technologies={project.technologies}
        repo={project.repo}
        projectUrl={project.projectUrl}
      />
   <section className="portfolio_part section_padding">
  <div className="mi-container">
    <div>
      <ImageCarousel images={project.images} title={project.title} />
        <h2 className="pb-3">Description:</h2>
   {project.description.map((paragraph, index) => (
  <p key={index} className={styles.projectDescription}>
    {paragraph}
  </p>
))}
    
    </div>
  </div>
</section>
</div>
        
    
   
  );
}