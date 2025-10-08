"use client"
import Image from "next/image";
import Link from "next/link"
import { useEffect } from 'react';


export default function Header() {


 useEffect(() => {
    const handleScroll = () => {
      const menu = document.querySelector('.main_menu');
      if (!menu) return; // por si no existe aún

      if (window.scrollY > 50) {
        menu.classList.add('menu_fixed', 'animated', 'fadeInDown');
      } else {
        menu.classList.remove('menu_fixed', 'animated', 'fadeInDown');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // cleanup al desmontar el componente
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (

    <header className="main_menu home_menu ">
        <div className="mi-container">
            <div className="row align-items-center">
                <div className="col-lg-12">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <Link className="navbar-brand" href="/"> <Image src="/img/logo.png" alt="logo"  width={250} height={30}/> </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="menu_icon"><i className="ti-menu"></i></span>
                        </button>

                        <div className="collapse navbar-collapse main-menu-item" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" href="/">Home</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown_1"
                                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        pages
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown_1">
                                        <Link className="dropdown-item" href="/aboutt/"> about</Link>
                                        <Link className="dropdown-item" href="/portafolio">portfolio</Link>
                                     
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="social_icon">
                            <a href="https://www.linkedin.com/in/antonella-brochini/" target="_blank">
                            <i className="fab fa-linkedin"></i>
                            </a>
                             <a href="https://github.com/antonella-brochini" target="_blank">
                            <i className="fab fa-github"></i>
                            </a>
                        </div>
                        
                    </nav>
                </div>
            </div>
        </div>
    </header>

  );
}