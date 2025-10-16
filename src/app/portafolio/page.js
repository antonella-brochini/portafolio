"use client"
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { projectsData } from "../data/projects"


export default function PortfolioPage() {

    

const ITEMS_PER_PAGE = 4;
const totalPages = Math.ceil(projectsData.length / ITEMS_PER_PAGE);

const [currentPage, setCurrentPage] = useState(1);

const indexOfLast = currentPage * ITEMS_PER_PAGE;
const indexOfFirst = indexOfLast - ITEMS_PER_PAGE;
const currentProjects = projectsData.slice(indexOfFirst, indexOfLast);

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
            <div className="row align-items-center">
                 <div className="col-lg-6">
                    <div className="section_tittle">
              <p>My portfolio</p>
              <h2>Take a look around some of my awesome works</h2>
            </div>
            </div>
            </div>
                
             <div className="row mt-4">
<div className="col-12">
  {currentProjects.map((p, i) => (
    <div
      key={i}
      className="project-card d-flex flex-column flex-md-row align-items-start mb-3"
      style={{ cursor: "pointer" }}
    >
    
      <Link
        href={`/portafolio/project1/${p.id}`}
        className="d-flex flex-md-row align-items-start text-decoration-none flex-1"
      >
        <div
          className="thumb me-md-3"
          style={{
            width: 360,
            height: 240,
            flex: "0 0 auto",
            position: "relative",
            overflow: "hidden",
            borderRadius: 8,
          }}
        >
          <Image
            src={p.image}
            alt={p.title}
            fill
            className="imagen"
          />
        </div>

        <div className="project-content p-3 d-flex flex-column">
          <h3 className="h5 mb-1">{p.title}</h3>
          <p
            className="text-muted mb-2 description"
          >
            {p.description}
          </p> 
                      
        </div>
      </Link> 
    </div>
  ))}
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