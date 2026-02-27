import FallingStars from "../../../components/FallingStars";
import { projectsData } from "../../../data/projects";
import ImageCarousel from "../../../components/ImageCarousel";
import ProjectHero from "./ProjectHero";
import styles from "./ProjectDetail.module.css";


export async function generateStaticParams() {

  return projectsData.map(project => ({
    id: String(project.id)
  }));
}

export default async function Project1Page({ params }) {
   const { id } = await params; 
  const project = projectsData.find(p => String(p.id) === id);
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

    <div  className={styles.imageContainer}>
    <ImageCarousel>
  {project?.images?.map((img, index) => (
    <div key={`img-${index}`} > 
      <img src={img} alt="project_img" width={300} />
    </div>
  ))}
</ImageCarousel>
    </div>
 <div className={styles.descriptionCard}>

  <h2 className={styles.sectionTitle}>Description</h2>

  <div className={styles.descriptionContent}>
    {project.description.map((paragraph, index) => (
      <p key={index} className={styles.projectDescription}>
        {paragraph}
      </p>
    ))}
  </div>
</div>
  </div>
</section>
</div>
        
    
   
  );
}