import type { Translation } from "./types";

export const es: Translation = {
  nav: {
    home: "Inicio",
    projects: "Proyectos",
    about: "Sobre mí",
    contact: "Contacto",
  },
  header: {
    menuToggle: "Abrir o cerrar menú",
  },
  theme: {
    toggleAria: "Cambiar tema",
  },
  language: {
    switchLabel: "Idioma",
    es: "ES",
    en: "EN",
  },
  home: {
    subtitle: "Diseño experiencias digitales que van más allá de los límites.",
    titleLine1: "Construyo hoy.",
    titleLine2: "Lidero el mañana.",
    cta: "Ver mi trabajo",
  },
  portfolio: {
    selectedProjects: "Proyectos destacados",
  },
  projectDetail: {
    description: "Descripción",
    notFound: "Proyecto no encontrado",
    github: "GitHub",
    viewProject: "Ver proyecto",
    imageAlt: "Captura del proyecto",
  },
  projects: {
    "1": {
      title: "E-commerce de vinos",
      description: [
       "Acceso de prueba:  Usuario: admin  |  Contraseña: adminPass  |  https://fe-monte-bravo.vercel.app",
        "Solución e-commerce end-to-end desarrollada para una bodega, orientada a una experiencia de compra fluida y al crecimiento del negocio.",
        "Integración con Mercado Pago para pagos seguros y SendGrid para comunicaciones transaccionales y de marketing.",
        "Implementación de mecanismos de autenticación incluyendo login social y gestión de sesiones mediante JWT.",
        "Frontend desarrollado con Redux para la gestión del estado global, incluyendo sesiones, carrito de compras y flujo de datos.",
        "Diseño e implementación de modelos de datos relacionales para pedidos, usuarios, productos y transacciones.",
        "Desarrollo de dashboards analíticos para el seguimiento de métricas clave como ventas, productos más vendidos y comportamiento de clientes.",
        "Enfoque basado en datos para la toma de decisiones y optimización del negocio.",
        "Backend desplegado en AWS utilizando Docker, garantizando escalabilidad y confiabilidad.",
        "Diseño de API siguiendo principios REST, con documentación disponible en Swagger.",
        "https://api.antonellabrochini.com/swagger-ui/index.html para documentación y pruebas de la API. Usuario de prueba: user1 y contraseña: password1",
      ],
    },
   
    "2": {
      title: "App OrderFlow",
      description: [
      "Acceso de prueba:  Usuario: donvito@gmail.com  |  Contraseña: 12345678  |  https://orderflow.com.uy",
        "Plataforma web para centralizar y optimizar pedidos de restaurantes, incluyendo reparto propio.",
        "Sistema multi-tenant que permite a múltiples restaurantes operar de forma independiente (productos, pedidos, usuarios y configuraciones).",
        "Integración de múltiples canales de entrada de pedidos (WhatsApp, teléfono y presencial), unificando los datos en una sola base estructurada.",
        "Implementación de modelos de datos relacionales para gestión de pedidos, clientes, productos y ventas.",
        "Desarrollo de dashboards y reportes analíticos para seguimiento de métricas clave: volumen de pedidos, ingresos, productos más vendidos y comportamiento de clientes.",
        "Procesamiento y análisis de datos en tiempo real para optimizar la toma de decisiones en restaurantes.",
        "Identificación de patrones de consumo y generación de insights para mejorar eficiencia operativa.",
        "Menú digital con QR que captura datos de comportamiento del cliente y automatiza el flujo de pedidos hacia cocina.",
        "Proyecto en desarrollo con validación en usuarios reales (restaurantes), incluyendo recolección de datos reales para análisis.",
        "Enfoque en escalabilidad y estructuración de datos para futuras integraciones con herramientas de Business Intelligence."
      ],
    },
    "3": {
      title: "App de pedidos de comida",
      description: [
        "Aplicación web para pedir comida: menú, personalización, carrito y checkout.",
        "Incluye autenticación: el usuario debe registrarse o iniciar sesión antes de pedir. Luego puede personalizar ingredientes, agregar al carrito y completar la compra.",
        "El checkout admite tarjeta, PayPal o pago en efectivo al repartidor.",
        "Usuario de prueba: demo@pizzeria.com y contraseña: 12345678",
      ],
    },
    "4": {
      title: "Billetera digital",
      description: [
        "Aplicación móvil de billetera digital con React Native y Expo.",
        "API REST propia con Node.js y Express para transacciones y cuentas.",
        "Almacenamiento local para persistencia de sesión y manejo offline.",
        "UI moderna e intuitiva centrada en usabilidad.",
        "Gestión de transacciones, saldos y datos financieros estructurados.",
        "Arquitectura por componentes para escalar y mantener el código.",
        "Rendimiento optimizado en dispositivos móviles.",
      ],
    },
    "5": {
      title: "Despliegue de aplicaciones en AWS",
      description: [
        "Flujo de despliegue con Kubernetes en la rama principal.",
        "Integración de pruebas con SonarCloud.",
        "Pruebas de carga con Docker Compose y Apache Benchmark.",
        "Flujo de pruebas de carga con k6.",
      ],
    },
    "6": {
      title: "IaC con Terraform en AWS",
      description: [
        "Dos clústeres de Kubernetes con configuración equivalente en redes aisladas.",
        "Un clúster para cargas de producción.",
        "El segundo segmentado con namespaces para desarrollo y pruebas.",
      ],
    },
    "7": {
      title: "Backend e-commerce con Keycloak",
      description: [
        "API REST de e-commerce segura integrada con Keycloak y control de acceso por roles (RBAC).",
        "Endpoints protegidos y reglas para distintos roles (por ejemplo admin/cliente).",
        "Arquitectura escalable para productos, pedidos y usuarios.",
        "Documentación de instalación y despliegue local con variables de entorno (lista para Docker si aplica).",
      ],
    },
    "8": {
      title: "One page — buen diseño",
      description: [
        "Sitio one-page moderno y responsive con Next.js y TypeScript.",
        "Arquitectura de componentes clara, animaciones fluidas y buen rendimiento.",
        "Buenas prácticas de frontend, componentes reutilizables y estilos escalables.",
      ],
    },
    "9": {
      title: "Sistema de reservas GX",
      description: [
        "Aplicación de gestión de reservas desarrollada con GeneXus.",
        "Lógica de negocio y flujos de reserva estructurados.",
        "Interacción con base de datos y procesos transaccionales.",
        "Énfasis en corrección funcional y datos estructurados.",
        "Reglas de validación y flujos de interacción con el usuario.",
      ],
    },
    "10": {
      title: "Sitio de noticias",
      description: [
        "Sitio de noticias desarrollado y personalizado con Joomla.",
        "Estructuras de contenido, categorías y artículos dinámicos.",
        "Plantillas responsive y ajustes de maquetación.",
        "Plugins y extensiones para funcionalidad y rendimiento.",
        "Despliegue y configuración para producción.",
      ],
    },
    "11": {
      title: "Nuevo portafolio",
      description: [
        "Portafolio personal moderno con Next.js.",
        "Animaciones avanzadas con Framer Motion.",
        "Gráficos SVG y elementos animados para una experiencia distintiva.",
        "Componentes reutilizables, arquitectura limpia y estructura escalable.",
        "Rendimiento y responsive en todos los dispositivos.",
        "Despliegue siguiendo buenas prácticas de frontend.",
      ],
    },
    "12": {
      title: "Portafolio v1",
      description: [
        "Mi primer portafolio personal con Next.js.",
        "Layout limpio y responsive, diseño sobrio y profesional.",
        "Exportación estática para GitHub Pages.",
        "Base de mi camino en frontend; luego lo reconstruí con mejor arquitectura y escalabilidad.",
      ],
    },
  },
  about: {
    titleAbout: "Sobre",
    titleMe: "mí",
    heroParagraphs: [
      "Soy desarrolladora de software con experiencia construyendo aplicaciones web escalables con Next.js, Spring Boot y bases de datos relacionales.",
      "Trabajo en frontend y backend, con foco en código limpio y mantenible y arquitecturas eficientes.",
      "Además, diseño sistemas orientados a la generación y análisis de datos, desarrollando dashboards y métricas que permiten la toma de decisiones basada en información real.",
      "Me gusta entender los sistemas de punta a punta y seguir mejorando mis bases técnicas mientras construyo soluciones funcionales, eficientes y orientadas a datos.",
    ],
    linkedIn: "LinkedIn",
    skillsOpen: "<skills>",
    stackTitle: "Mi stack",
    stackSubtitle:
      "Desarrolladora fullstack con enfoque en productos, rendimiento y análisis de datos.",
    
    skillsClose: "</skills>",
    
    profileName: "Antonella Brochini",
    
    profileRole: "Full Stack Developer | Data Analysis",
    
    profileNote:
      "Busco especializarme en sistemas digitales escalables que combinen buena ingeniería con análisis de datos y toma de decisiones basada en métricas.",
    
    mindsetLabel: "<Mindset />",
    
    howIWork: "Cómo trabajo",
    
    stats: [
      { value: "Full Stack + Data", label: "Perfil" },
      { value: "Next.js", label: "Frontend" },
      { value: "Spring Boot", label: "Backend" },
      { value: "PostgreSQL", label: "BD" },
      { value: "Python / Power BI", label: "Data" },
    ],
    
    pills: [
      { icon: "⚛️", text: "React / Next.js" },
      { icon: "🍃", text: "Spring Boot" },
      { icon: "🗄️", text: "SQL / PostgreSQL" },
      { icon: "🐍", text: "Python (Pandas / Data Analysis)" },
      { icon: "📊", text: "Power BI / Dashboards" },
      { icon: "🐳", text: "Docker / Git" },
      { icon: "☁️", text: "AWS / Cloud" },
      { icon: "☁️", text: "Salesforce" },
      { icon: "🎨", text: "Tailwind / Bootstrap" },
      { icon: "🌍", text: "Inglés" },
      { icon: "🇪🇸", text: "Español (nativo)" },
    ],
    
    timeline: [
      {
        title: "Pienso en sistemas y datos",
        desc: "Antes de codificar analizo el problema, el contexto de negocio y los datos disponibles para tomar decisiones informadas.",
      },
      {
        title: "Construyo con intención",
        desc: "Diseño productos escalables que no solo funcionan, sino que generan y estructuran datos para análisis posterior.",
      },
      {
        title: "Ingeniería orientada a datos",
        desc: "Aplico buenas prácticas, modelos de datos y herramientas analíticas para construir soluciones eficientes y medibles.",
      },
    ],
  },
  contact: {
    title: "Contacto",
    placeholders: {
      name: "Tu nombre",
      email: "Tu correo",
      subject: "Asunto",
      message: "Tu mensaje",
    },
    submit: "Enviar mensaje",
    success: "¡Mensaje enviado con éxito!",
    sendError: "No se pudo enviar el mensaje",
    errors: {
      name: "El nombre es obligatorio",
      emailRequired: "El correo es obligatorio",
      emailInvalid: "El correo no es válido",
      subject: "El asunto es obligatorio",
      message: "El mensaje es obligatorio",
    },
    locationTitle: "Montevideo, Uruguay.",
    locationAddress: "Av. Italia 1234, Montevideo 11600",
    phoneHours: "Lun a vie 9:00 a 18:00",
    emailPrompt: "¡Escríbenos cuando quieras!",
  },
};
