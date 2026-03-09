export const projectsData = [

  {
    id: "1",
    title: "Wine E-commerce",
    description: [
     "End-to-end e-commerce solution developed for a winery, focused on delivering a seamless purchasing experience and driving business growth.",
     "The platform integrates Mercado Pago for secure payment processing and SendGrid for automated transactional and marketing email campaigns. Social authentication and JWT-based authentication were implemented to ensure secure user access and session management.",
     "On the frontend, Redux was used for centralized state management, enabling efficient handling of user sessions, cart state, and application data flow.",
     "Additionally, the system includes an analytics dashboard to monitor sales performance, identify top-selling products, and support data-driven decision-making.",
     "Backend deployed on AWS with Docker",
     "https://api.antonellabrochini.com/swagger-ui/index.html for API documentation and testing. Rol user: user1 and password1"
    ],
    images: [
      "/img/ecomerce/landing1.png",
      "/img/ecomerce/landing2.png",
      "/img/ecomerce/landing3.png",
      "/img/ecomerce/admin0.png",
      "/img/ecomerce/admin1.png",
      "/img/ecomerce/admin2.png",
      "/img/ecomerce/admin3.png",
      "/img/ecomerce/admin4.png",
       "/img/ecomerce/admin5.png",
      "/img/ecomerce/analiticas.jpg",
      "/img/ecomerce/analiticas2.jpg",
      "/img/ecomerce/analiticas3.jpg",
       "/img/ecomerce/carrito1.png",
      "/img/ecomerce/carrito2.png",
      "/img/ecomerce/carrito3.png",
      "/img/ecomerce/carrito4.png",
      "/img/ecomerce/carrito5.png",
      "/img/ecomerce/user1.png",
      "/img/ecomerce/user2.png",
       "/img/ecomerce/user3.png",
      "/img/ecomerce/user4.png",

    ],
    projectUrl: "https://fe-monte-bravo.vercel.app",
    repo: "https://github.com/antonella-brochini/be-MonteBravo",
    technologies: "Spring Boot, Next.js, PostgreSQL, Tailwind CSS",
  },
{
id: "2",
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
    id: "3",
    title: "Reservation Management System GX",
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
    id: "4",
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
    id: "5",
  title: "IaC with Terraform on AWS",
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
    id: "6",
    title: "Order Food App",
    description: [
      "Food ordering web application that allows users to browse a menu, customize food items, manage a shopping cart and complete orders through a checkout process.",

      "The application includes user authentication, so users must register or log in before placing an order. Once authenticated, they can personalize their food by selecting ingredients, add items to the cart and complete the purchase.",
      "The checkout system supports multiple payment options including credit card, PayPal or cash payment at the store.",
      "user : demo@pizzeria.com  and Password: 12345678 to test the app",
    ],
    images: ["/img/pizzeria/page1.png", "/img/pizzeria/page2.png", "/img/pizzeria/page3.png", "/img/pizzeria/page4.png", "/img/pizzeria/page5.png", "/img/pizzeria/page6.png", "/img/pizzeria/page7.png", "/img/pizzeria/page8.png", "/img/pizzeria/page9.png", "/img/pizzeria/page10.png"],
    projectUrl: "https://pizzeria-omega-khaki.vercel.app/",
    repo: "https://github.com/antonella-brochini/pizzeria",
    technologies: "Next.js, React, Redux y Tailwind CSS",
  },

  
{
    id: "7",
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
   id: "8",
    title: "One page Nice Design",
    description: [
    "Modern responsive one-page website built with Next.js and TypeScript. ",
    "It features a clean component-based architecture, smooth UI animations, and optimized performance. ",
    "The project focuses on modern frontend practices, reusable components, and scalable styling for building elegant web interfaces."
    ],
    images: ["/img/juegos/page1.png", "/img/juegos/page2.png", "/img/juegos/page3.png", "/img/juegos/page4.png", ],
    projectUrl: "https://one-page-rust.vercel.app/",
    repo: "https://github.com/antonella-brochini/one-page",
    technologies: "Next.js, TypeScript, CSS, HTML",
    
  },
  {
    id: "9",
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
    technologies: "Joomla, Bootstrap, CSS, HTML",
  },
  {
    id: "10",
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
    id: "11",
    title: "New Portfolio",
    description: [
    "Designed and developed a modern personal portfolio using Next.js.",
    "Implemented advanced animations with Framer Motion to enhance user interaction and visual flow.",
    "Created custom SVG graphics and animated elements to deliver a distinctive and dynamic user experience.",
    "Focused on component reusability, clean architecture, and scalable structure.",
    "Optimized performance and responsiveness across devices.",
    "Deployed using modern frontend best practices."
    ],
    images: ["/img/newPortfolio/page1.png", "/img/newPortfolio/page2.png", "/img/newPortfolio/page3.png", "/img/newPortfolio/page4.png", "/img/newPortfolio/page5.png", "/img/newPortfolio/page6.png", "/img/newPortfolio/page7.png", "/img/newPortfolio/page8.png"],
    projectUrl: "https://github.com/antonella-brochini/portafolio",
    repo: "https://github.com/antonella-brochini/portafolio",
    technologies: "Next.js, Bootstrap, HTML",
  },
  
  
];