import Image from "next/image";



export default function Home() {
  return (
    <div >
      <main >

    <header className="main_menu home_menu">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a className="navbar-brand" href="index.html"> <Image src="/img/logo.png" alt="logo"  width={250} height={30}/> </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="menu_icon"><i className="ti-menu"></i></span>
                        </button>

                        <div className="collapse navbar-collapse main-menu-item" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="index.html">Home</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown"
                                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Bloglas
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown_1"
                                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        pages
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown_1">
                                        <a className="dropdown-item" href="about.html"> about</a>
                                        <a className="dropdown-item" href="portfolio.html">portfolio</a>
                                        <a className="dropdown-item" href="portfolio_details.html">portfolio details</a>
                                        <a className="dropdown-item" href="elements.html">Elements</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="contact.html">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="social_icon">
                            <a href="#"><i className="fab fa-facebook-square"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-behance"></i></a>
                            <a href="#"><i className="fas fa-globe"></i></a>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
 
    <section className="banner_part">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-7">
                    <div className="banner_text">
                        <div className="banner_text_iner">
                            <h5>Hi there, This is Anto</h5>
                            <h1>Digital product
                                    designer</h1>
                            <div className="banner_btn">
                                <a href="#" className="btn_1">Contact me</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="about_part section_padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="about_text">
                        <h4>about me</h4>
                        <p>Good lights it very to above. Days image to sea. Over there seasons and spirit beast in. Greater bearing creepeth very behold fourth night morning seed moved.</p>
                        <div className="experiance">
                            <h2>07</h2>
                            <p>Years of <span>Experiences</span></p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="experiance_list">
                        <h4>Experiences</h4>
                        <div className="experiance_list_iner">
                            <div className="single_experiance_list">
                                <h5>Product designer</h5>
                                <p>at apple from 2011 to present</p>
                            </div>
                            <div className="single_experiance_list">
                                <h5>UI designer </h5>
                                <p>at theme from 2011 to present</p>
                            </div>
                            <div className="single_experiance_list">
                                <h5>Print designert</h5>
                                <p>at envato from 2011 to present</p>
                            </div>
                            <div className="single_experiance_list">
                                <h5>Product designer</h5>
                                <p>at apple from 2011 to present</p>
                            </div>
                            <div className="single_experiance_list">
                                <h5>UI designer </h5>
                                <p>at theme from 2011 to present</p>
                            </div>
                            <div className="single_experiance_list">
                                <h5>Print designert</h5>
                                <p>at envato from 2011 to present</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="portfolio_part section_padding">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="section_tittle">
                        <p>My portfolio</p>
                        <h2>Take a look around some of my awesome works</h2>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="section_btn text-right">
                        <a href="#" className="btn_2">More works</a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="mesonary_part">
                        <div className="grid">
                            <div className="grid-sizer"></div>
                            <a href="portfolio_details.html" className="grid-item">
                                <Image src="/img/port_1.png" alt="" width={50} height={50}/>
                                <div className="portfolio_hover_text">
                                    <i className="ti-plus"></i>
                                </div>
                            </a>
                            <a href="portfolio_details.html" className="grid-item big_height big_weight">
                                <Image src="/img/port_2.png" alt="" width={50} height={50}/>
                                <div className="portfolio_hover_text">
                                    <i className="ti-plus"></i>
                                </div>
                            </a>
                            <a href="portfolio_details.html" className="grid-item">
                                <Image src="/img/port_3.png" alt="" width={50} height={50}/>
                                <div className="portfolio_hover_text">
                                    <i className="ti-plus"></i>
                                </div>
                            </a>
                            <a href="portfolio_details.html" className="grid-item big_weight">
                                <Image src="/img/port_4.png" alt="" width={50} height={50}/>
                                <div className="portfolio_hover_text">
                                    <i className="ti-plus"></i>
                                </div>
                            </a>
                            <a href="portfolio_details.html" className="grid-item">
                                <Image src="/img/port_5.png" alt="" width={50} height={50}/>
                                <div className="portfolio_hover_text">
                                    <i className="ti-plus"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="service_part padding_bottom">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="section_tittle text-center">
                        <p>My portfolio</p>
                        <h2>Take a look around some of my awesome works</h2>
                    </div>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-lg-4 col-sm-6">
                    <div className="single_service_part">
                        <div className="single_service_text">
                            <span className="flaticon-layers"></span>
                            <h2>User experience design</h2>
                            <p>There winged grass midst moving earth seed herb fifth you multiply you divide cattle.</p>
                            <a href="#" className="learn_btn">learn more</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="single_service_part active">
                        <div className="single_service_text">
                            <span className="flaticon-design"></span>
                            <h2>Digital art</h2>
                            <p>There winged grass midst moving earth seed herb fifth you multiply you divide cattle.</p>
                            <a href="#" className="learn_btn">learn more</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="single_service_part">
                        <div className="single_service_text">
                            <span className="flaticon-speaker"></span>
                            <h2>Social media marketing</h2>
                            <p>There winged grass midst moving earth seed herb fifth you multiply you divide cattle.</p>
                            <a href="#" className="learn_btn">learn more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="review_part section_padding">
        <div className="container">
           <div className="row">
              <div className="col-xl-5">
                 <div className="section_tittle">
                    <p>Word from my clients</p>
                 </div>
              </div>
           </div>
           <div className="row">
              <div className="col-lg-12">
                 <div className="client_review_part owl-carousel">
                    <div className="client_review_single">
                       <div className="client_review_text">
                          <p>
                           
                          </p>
                          <div className="client_review_img">
                            <Image src="/img/client/client_1.png" alt="#" width={50} height={50}/>
                            <h4>Mosan Cameron</h4>
                            <p>Critive director</p>
                          </div>
                       </div>
                    </div>
                    <div className="client_review_single">
                       <div className="client_review_text">
                          <p>
                         
                          </p>
                          <div className="client_review_img">
                             <Image src="/img/client/client_2.png" alt="#" width={50} height={50}/>
                             <h4>Mosan Cameron</h4>
                             <p>Critive director</p>
                          </div>
                       </div>
                    </div>
                    <div className="client_review_single">
                       <div className="client_review_text">
                          <p>
                           
                          </p>
                          <div className="client_review_img">
                             <Image src="/img/client/client_2.png" alt="#" width={50} height={50}/>
                             <h4>Mosan Cameron</h4>
                             <p>Critive director</p>
                          </div>
                       </div>
                    </div>
                    <div className="client_review_single">
                       <div className="client_review_text">
                          <p>
                           
                          </p>
                          <div className="client_review_img">
                             <Image src="/img/client/client_2.png" alt="#" width={50} height={50}/>
                             <h4>Mosan Cameron</h4>
                             <p>Critive director</p>
                          </div>
                       </div>
                    </div>
                    <div className="client_review_single">
                       <div className="client_review_text">
                            <p>
                           
                            </p>
                          <div className="client_review_img">
                             <Image src="/img/client/client_3.png" alt="#" width={50} height={50}/>
                             <h4>Mosan Cameron</h4>
                             <p>Critive director</p>
                          </div>
                       </div>
                    </div>
                    <div className="client_review_single">
                       <div className="client_review_text">
                          <p>
                            There winged grass midst moving earth seed herb fifth you multiply you divide cattle stars first cattle was had spirit you re thing, night darkness. Which itself stars 
                          </p>
                          <div className="client_review_img">
                             <Image src="/img/client/client_3.png" alt="#" width={50} height={50}/>
                             <h4>Mosan Cameron</h4>
                             <p>Critive director</p>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
    </section>
    
      </main>
    </div>
  );
}
