"use client"
import Image from "next/image";
import Link from "next/link"
import { useEffect , useState} from 'react';
import { FaGithub, FaLinkedin  } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false); // hamburguesa
  const [scroll, setScroll] = useState(false); // menú fijo al hacer scroll
  const [dropdownOpen, setDropdownOpen] = useState(false); // dropdown mobile

  // efecto scroll
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`main_menu home_menu ${scroll ? 'menu_fixed animated fadeInDown' : ''}`}>
      <div className="mi-container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link className="navbar-brand" href="/">
                <Image src="/deploy-portafolio/img/logo.png" alt="logo" width={250} height={30} />
              </Link>

              <button
                className="navbar-toggler"
                type="button"
                onClick={() => setOpen(!open)}
                aria-label="Toggle navigation"
              >
               <span className="menu_icon">
                  <div></div>
                  <div></div>
                  <div></div>
                </span>
              </button>

              {/* Menú */}
              <div className={`collapse navbar-collapse main-menu-item ${open ? 'show' : ''}`}>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" href="/">Home</Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setDropdownOpen(!dropdownOpen);
                      }}
                    >
                      Pages
                    </a>
                    <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                      <Link className="dropdown-item" href="/aboutt/">About</Link>
                      <Link className="dropdown-item" href="/portafolio">Portfolio</Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>

              <div className="social_icon">
                <a href="https://www.linkedin.com/in/antonella-brochini/" target="_blank">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/antonella-brochini" target="_blank">
                  <FaGithub  />
                </a>
              </div>

            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
