export const projectsData = [

  {
    id: "project1",
    title: "Wine E-commerce",
    description: [
     "End-to-end e-commerce solution developed for a winery, focused on delivering a seamless purchasing experience and driving business growth.",
     "The platform integrates Mercado Pago for secure payment processing and SendGrid for automated transactional and marketing email campaigns. Social authentication and JWT-based authentication were implemented to ensure secure user access and session management.",
     "On the frontend, Redux was used for centralized state management, enabling efficient handling of user sessions, cart state, and application data flow.",
     "Additionally, the system includes an analytics dashboard to monitor sales performance, identify top-selling products, and support data-driven decision-making."
    ],
    images: [
      "/img/ecomerce/port_1.png",
      "/img/ecomerce/admin1.png",
      "/img/ecomerce/admin2.png",
      "/img/ecomerce/admin3.png",
      "/img/ecomerce/admin4.png",
      "/img/ecomerce/analiticas.jpg",
      "/img/ecomerce/analiticas2.jpg",
      "/img/ecomerce/analiticas3.jpg",
      "/img/ecomerce/carrito2.png",
      "/img/ecomerce/carrito3.png",
      "/img/ecomerce/carrito4.png",
    ],
    projectUrl: "https://ecommerce.antonellabrochini.com/",
    repo: "https://github.com/antonella-brochini/be-MonteBravo",
    technologies: "Spring Boot, Next.js, PostgreSQL, Tailwind CSS",
  },

  {
    id: "project2",
    title: "Reservation Management System ",
    description: [
     "Developed a reservation management application using GeneXus.",
     "Designed and structured business logic for booking workflows.",
     "Managed database interactions and transactional processes.",
     "Focused on functional correctness and structured data handling.",
     "Implemented validation rules and user interaction flows."
    ],
    images: ["/img/appReservasGX/page1.png", "/img/appReservasGX/page2.png", "/img/appReservasGX/page3.png"],
    projectUrl: "https://github.com/antonella-brochini/GestorReservasGX",
    repo: "https://github.com/antonella-brochini/GestorReservasGX",
    technologies: "Genexus",
  },

  {
    id: "project3",
    title: "Application Deployment on AWS",
    description: [
      "Application deployment workflow using Kubernetes on the master branch.",
      "Testing workflow integrated with SonarCloud.",
      "Load testing using Docker Compose to spin up services and Apache Benchmark to evaluate performance.",
      "Load testing workflow with k6.",
    ],
    images: ["/img/deploy-app-github.jpg"],
    projectUrl: "https://github.com/antonella-brochini/example-voting-app",
    repo: "https://github.com/antonella-brochini/example-voting-app",
    technologies: "Kubernetes, Docker, SonarCloud, Apache Benchmark, k6",
  },

  {
    id: "project4",
  title: "Infrastructure as Code with Terraform on AWS",
description: [
  "Provisioned two Kubernetes clusters with identical configurations across isolated networks.",
  "Configured one cluster for production workloads.",
  "Segmented the second cluster using namespaces for development and testing environments."
],
    images: ["/img/infra-github.jpg"],
    projectUrl: "https://github.com/antonella-brochini/voting-app-infra",
    repo: "https://github.com/antonella-brochini/voting-app-infra",
    technologies: "Terraform, AWS, Kubernetes",
  },
{
id: "project11",
title: "E-commerce Backend with Keycloak",
description: [
   "Developed a secure e-commerce REST API integrated with Keycloak for authentication and role-based access control (RBAC).",
   "Implemented protected endpoints and authorization rules for different user roles (e.g., admin/customer).",
   "Designed scalable backend architecture for core e-commerce flows (products, orders, and users).",
   "Documented setup and deployment workflow to run locally with environment-based configuration (Docker-ready if applicable)."
],
images: ["/img/keycloak.png"],
projectUrl: "https://github.com/antonella-brochini/ecommerce-api-portafolio",
repo: "https://github.com/antonella-brochini/ecommerce-api-portafolio",
technologies: "Spring Boot, PostgreSQL, Keycloak, Docker",


},
  {
    id: "project5",
    title: "Portfolio v1",
    description: [
      "Designed and developed my first personal portfolio using Next.js.",
      "Built with a clean, responsive layout and a sober, professional design approach.",
      "Statically exported for deployment on GitHub Pages.",  
    "This project represents the foundation of my frontend development journey and was later rebuilt with improved scalability and architectural thinking."
    ],
    images: ["/img/porfolioV1/page1.png", "/img/porfolioV1/page2.png", "/img/porfolioV1/page3.png" , "/img/porfolioV1/page4.png", "/img/porfolioV1/page5.png", "/img/porfolioV1/page6.png", "/img/porfolioV1/page7.png", "/img/porfolioV1/page8.png"],
    projectUrl: "https://github.com/antonella-brochini/deploy-portafolio",
    repo: "https://github.com/antonella-brochini/deploy-portafolio",
    technologies: "Next.js, Bootstrap, HTML",
  },
  {
    id: "project6",
    title: "Digital Wallet",
    description: [
     "Developed a mobile digital wallet application using React Native with Expo.",
     "Integrated a custom REST API built with Node.js and Express for transaction and account management.",
     "Implemented local storage for user session persistence and offline data handling.",
     "Designed a modern and intuitive UI focused on usability and smooth user experience.",
     "Implemented transaction management, balance tracking, and structured financial data handling.",
     "Applied component-based architecture to ensure scalability and maintainability.",
     "Optimized performance across mobile devices."
    ],
    images: ["/img/digitalWallet/page1.png", "/img/digitalWallet/page2.png", "/img/digitalWallet/page3.png", "/img/digitalWallet/page4.png", "/img/digitalWallet/page5.png", "/img/digitalWallet/page6.png", "/img/digitalWallet/page7.png", "/img/digitalWallet/page8.png"],
    projectUrl: "https://github.com/antonella-brochini/FEsimuladorWallet",
    repo: "https://github.com/antonella-brochini/FEsimuladorWallet",
    technologies: "React Native, Expo, Tailwind CSS",
  },
  {
   id: "project7",
    title: "Nice Design",
    description: [
    ""
    ],
    images: ["/img/juegos/page1.png", "/img/juegos/page2.png", "/img/juegos/page3.png", "/img/juegos/page4.png", ],
    projectUrl: "https://www.noticiasydestinos.com/index.php/es",
    repo: "https://www.noticiasydestinos.com/index.php/es",
    technologies: "Next.js, Bootstrap, HTML",
    
  },
  {
    id: "project8",
    title: "New Portfolio",
    description: [
    "Designed and developed a modern personal portfolio using Next.js.",
    "Implemented advanced animations with Framer Motion to enhance user interaction and visual flow.",
    "Created custom SVG graphics and animated elements to deliver a distinctive and dynamic user experience.",
    "Focused on component reusability, clean architecture, and scalable structure.",
    "Optimized performance and responsiveness across devices.",
    "Deployed using modern frontend best practices."
    ],
    images: ["/img/newPorfolio/page1.png", "/img/newPortfolio/page2.png", "/img/newPortfolio/page3.png", "/img/newPortfolio/page4.png", "/img/newPortfolio/page5.png", "/img/newPortfolio/page6.png", "/img/newPortfolio/page7.png", "/img/newPortfolio/page8.png"],
    projectUrl: "https://github.com/antonella-brochini/portafolio",
    repo: "https://github.com/antonella-brochini/portafolio",
    technologies: "Next.js, Bootstrap, HTML",
  },
  {
    id: "project9",
    title: "News Website",
    description: [
      "Developed and customized a news website using Joomla CMS.",
      "Configured content structures, categories, and dynamic article management.",
      "Implemented responsive templates and layout adjustments.",   
      "Managed plugins and extensions to enhance functionality and performance.",
      "Handled deployment and configuration for production environment."
    ],
    images: ["/img/noticiasWebsite/page1.png", "/img/noticiasWebsite/page2.png", "/img/noticiasWebsite/page3.png", "/img/noticiasWebsite/page4.png", "/img/noticiasWebsite/page5.png"],
     projectUrl: "https://www.noticiasydestinos.com/index.php/es/",
    repo: "https://www.noticiasydestinos.com/index.php/es/",
    technologies: "Next.js, Bootstrap, HTML",
  },
   {
    id: "project10",
    title: "Reservation Management App",
    description: [
      "First academic project developed using pure HTML, CSS, and JavaScript.",
    "Web application designed to manage reservations across different venues (restaurants, theaters, or museums).",
    "Includes two user roles: Venue and Customer.",
    "Venue role: login with preloaded credentials; enable or disable reservations based on maximum capacity.",
    'Venue role: update reservation status from "pending" to "completed", search reservations by customer name, and modify maximum capacity (if no pending reservations exist).',
    "Venue role: view statistics including occupancy rate, ratings, and total reservations.",
    "Customer role: register and log in with a unique username and secure password.",
    "Customer role: request and cancel reservations at available venues, rate completed reservations, and view personal statistics."
    ],
    images: ["/img/port_2.png"],
    projectUrl: "https://antonella-brochini.github.io/app-reservas/",
    repo: "https://antonella-brochini.github.io/app-reservas/",
    technologies: "HTML, CSS, JavaScript",
  },





];