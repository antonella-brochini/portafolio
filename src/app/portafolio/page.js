"use client"
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import FallingStars from '../components/FallingStars';
import { projectsData } from "../data/projects"
import HeroReveal from "../components/HeroReveal";
import '../../styles/portafolio.css'


export default function PortfolioPage() {

    

const ITEMS_PER_PAGE = 9;
const totalPages = Math.ceil(projectsData.length / ITEMS_PER_PAGE);

const [currentPage, setCurrentPage] = useState(1);

const indexOfLast = currentPage * ITEMS_PER_PAGE;
const indexOfFirst = indexOfLast - ITEMS_PER_PAGE;
const currentProjects = projectsData.slice(indexOfFirst, indexOfLast);



  return (
    <div>
      <FallingStars />
      <section className="banner_part">
        <div className="mi-container">
                <div className="row align-items-center">
                    <div className="col-lg-8">
                        <div className="banner_text">
                          <HeroReveal className="banner_text_iner">
                            <h1><span className="gradient-text">Selected Projects</span></h1>
                          </HeroReveal>
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
              <h4>Take a look around some of my awesome works</h4>
            </div>
            </div>
            </div>
                
             <div className="row mt-4">
<div className="col-12">
  <div className="projects-grid">
  {currentProjects.map((p, i) => (
    <div
      key={i}
      className="project-card"
      style={{ cursor: "pointer" }}
    >
    
      <Link
        href={`/portafolio/project1/${p.id}`}
        className="text-decoration-none"
      >
        <div
          className="thumb"
          style={{
            width: '100%',
            height: 200,
            position: "relative",
            overflow: "hidden",
            borderRadius: 8,
            marginBottom: 16
          }}
        >
          <Image
            src={p.images?.[0] || p.image}
            alt={p.title}
            fill
            className="imagen"
          />
        </div>

        <div className="project-content d-flex flex-column">
          <h3 className="h5 mb-2">{p.title}</h3>
        </div>
      </Link> 
    </div>
  ))}
  </div>
</div>

        </div>
      </div>
    
    </section>  
    <div className="pagination">
  <button
    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
    disabled={currentPage === 1}
  >
    {"<"}
  </button>

  <span>{currentPage} / {totalPages}</span>

  <button
    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
    disabled={currentPage === totalPages}
  >
    {">"}
    </button>
   </div>
  
    </div>

  )
}