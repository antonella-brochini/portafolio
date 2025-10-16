export const projectsData = [
{
    id:"project1",
    title: "E-commerce de vinos",
    description: `E-commerce completo para una bodega, con backend en Spring Boot, frontend en Next.js y base de datos PostgreSQL.
    La plataforma incluye: Pasarela de pagos con Mercado Pago para compras seguras. 
    Envío de emails promocionales para fidelizar clientes y comunicar ofertas. Panel de métricas y estadísticas para analizar ventas, identificar productos más vendidos y tomar decisiones basadas en datos.`,
    image: "/img/port_1.png",
    repo: "https://ecommerce.antonellabrochini.com/"
  },
 {
    id:"project2",
    title: "App de reservas",
    description: `Este es mi primer poryecto academico realizado con HTML, CSS y JavaScript puro. Aplicación web que permite a los usuarios gestionar reservas en distintos locales (restaurants, teatros o museos). La app cuenta con dos tipos de perfiles: Local y Persona.  
    Perfil Local: Ingreso con usuario y contraseña precargados. Habilitar o deshabilitar disponibilidad de reservas según cupo máximo. Cambiar el estado de reservas de “pendiente” a “finalizada” y buscarlas por nombre de cliente. Modificar cupo máximo (si no hay reservas pendientes).
    Visualizar estadísticas: ocupación, calificaciones y total de reservas. Perfil Persona: Registro e ingreso con usuario único y contraseña segura. Solicitar y cancelar reservas en locales disponibles.
    Calificar reservas finalizadas. Ver listado de reservas pendientes y estadísticas personales de uso.`,
    image: "/img/port_2.png",
    repo: "https://antonella-brochini.github.io/app-reservas/"
  },
{
    id:"project3",
    title: "Deploy de App de Votación en AWS",
    description: `Workflow de deploy de applicacion con kubernet en rama master, worflow de testing con SonarCloud y test de carga usando Docker Compose para levantar los servicios y Apache Benchmark para evaluar su rendimiento. workflow de test de carga con k6`,
    image: "/img/deploy-app-github.jpg",
    repo: "https://github.com/antonella-brochini/example-voting-app"
  },
 {
    id:"project4",
    title: "Infraestructura con Terraform en AWS",
    description: `Creacion de dos cluster de iguales carcateristicas pero reder distintas. Un cluster es de produccion y el otro esta dividido por namespace para desarrollo y testing`,
    image: "/img/infra-github.jpg",
    repo: "https://github.com/antonella-brochini/voting-app-infra"
  },
 {
    id:"project5",
    title: "Portafolio",
    description: `Desarrollo de un portafolio web usando Next.js para mostrar proyectos académicos y prácticos. Incluye navegación dinámica, diseño responsivo.`,
    image: "/img/porfolio.jpg",
    repo: "https://github.com/antonella-brochini/portafolio"
  }
];