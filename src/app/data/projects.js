export const projectsData = [

  {
    id: "project1",
    title: "Wine E-commerce",
    description: [
      "End-to-end e-commerce solution developed for a winery, focused on delivering a seamless purchasing experience and driving business growth.",
      "The platform includes secure payment processing, automated marketing campaigns, and social authentication for enhanced user experience.",
      "It also features an analytics dashboard to monitor sales performance, identify top-selling products, and support data-driven decision-making.",
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
      "/img/ecomerce/carrito1.png",
      "/img/ecomerce/carrito2.png",
      "/img/ecomerce/carrito3.png",
      "/img/ecomerce/carrito4.png",
    ],
    projectUrl: "https://ecommerce.antonellabrochini.com/",
    repo: "https://ecommerce.antonellabrochini.com/",
    technologies: "Spring Boot, Next.js, PostgreSQL, Tailwind CSS",
  },

  {
    id: "project2",
    title: "App de reservas",
    description: [
      "Primer proyecto académico realizado con HTML, CSS y JavaScript puro.",
      "Aplicación web para gestionar reservas en distintos locales (restaurantes, teatros o museos).",
      "Incluye dos perfiles: Local y Persona.",
      "Perfil Local: ingreso con usuario y contraseña precargados; habilitar o deshabilitar reservas según cupo máximo.",
      'Perfil Local: cambiar estado de reservas de "pendiente" a "finalizada", buscarlas por nombre de cliente y modificar cupo máximo (si no hay reservas pendientes).',
      "Perfil Local: visualización de estadísticas (ocupación, calificaciones y total de reservas).",
      "Perfil Persona: registro e ingreso con usuario único y contraseña segura.",
      "Perfil Persona: solicitar y cancelar reservas en locales disponibles, calificar reservas finalizadas y ver estadísticas personales.",
    ],
    images: ["/img/port_2.png"],
    projectUrl: "https://antonella-brochini.github.io/app-reservas/",
    repo: "https://antonella-brochini.github.io/app-reservas/",
  },

  {
    id: "project3",
    title: "Deploy de App de Votación en AWS",
    description: [
      "Workflow de deploy de la aplicación con Kubernetes en rama master.",
      "Workflow de testing con SonarCloud.",
      "Test de carga usando Docker Compose para levantar servicios y Apache Benchmark para evaluar rendimiento.",
      "Workflow de test de carga con k6.",
    ],
    images: ["/img/deploy-app-github.jpg"],
    projectUrl: "https://github.com/antonella-brochini/example-voting-app",
    repo: "https://github.com/antonella-brochini/example-voting-app",
  },

  {
    id: "project4",
    title: "Infraestructura con Terraform en AWS",
    description: [
      "Creación de dos clusters con iguales características pero en redes distintas.",
      "Un cluster es de producción.",
      "El otro está dividido por namespaces para desarrollo y testing.",
    ],
    images: ["/img/infra-github.jpg"],
    projectUrl: "https://github.com/antonella-brochini/voting-app-infra",
    repo: "https://github.com/antonella-brochini/voting-app-infra",
  },

  {
    id: "project5",
    title: "Portafolio",
    description: [
      "Desarrollo de un portafolio web usando Next.js para mostrar proyectos académicos y prácticos.",
      "Incluye navegación dinámica y diseño responsivo.",
    ],
    images: ["/img/porfolio.jpg"],
    projectUrl: "https://github.com/antonella-brochini/portafolio",
    repo: "https://github.com/antonella-brochini/portafolio",
  },
];