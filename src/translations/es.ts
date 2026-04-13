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
        "Solución e-commerce end-to-end desarrollada para una bodega, orientada a una experiencia de compra fluida y al crecimiento del negocio.",
        "La plataforma integra Mercado Pago para pagos seguros y SendGrid para correos transaccionales y de marketing. Se implementó autenticación social y sesiones con JWT para un acceso seguro.",
        "En el frontend se usó Redux para el estado global, gestionando sesión, carrito y flujo de datos de forma eficiente.",
        "Incluye un panel de analíticas para ventas, productos más vendidos y decisiones basadas en datos.",
        "Backend desplegado en AWS con Docker.",
        "https://api.antonellabrochini.com/swagger-ui/index.html para documentación y pruebas de la API. Usuario de prueba: user1 y contraseña: password1",
      ],
    },
    "2": {
      title: "App de pedidos de comida",
      description: [
        "Aplicación web para pedir comida: menú, personalización, carrito y checkout.",
        "Incluye autenticación: el usuario debe registrarse o iniciar sesión antes de pedir. Luego puede personalizar ingredientes, agregar al carrito y completar la compra.",
        "El checkout admite tarjeta, PayPal o pago en efectivo al repartidor.",
        "Usuario de prueba: demo@pizzeria.com y contraseña: 12345678",
      ],
    },
    "3": {
      title: "App OrderFood",
      description: [
        "Plataforma web para centralizar y optimizar pedidos de restaurantes, incluyendo reparto propio.",
        "Permite que varios restaurantes usen el sistema, cada uno con pedidos, productos y flujos independientes.",
        "Unifica pedidos de WhatsApp, teléfono y presencial en un solo sistema para mejorar organización y eficiencia.",
        "Incluye menú digital con QR para que el cliente pida y el pedido llegue directo a cocina.",
        "Ofrece seguimiento de datos e informes de ventas, pedidos y desempeño.",
        "En desarrollo y validación con usuarios reales (restaurantes).",
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
      "Me gusta entender los sistemas de punta a punta y seguir mejorando bases técnicas mientras construyo soluciones funcionales, eficientes y escalables.",
    ],
    linkedIn: "LinkedIn",
    skillsOpen: "<skills>",
    stackTitle: "Mi stack",
    stackSubtitle:
      "Desarrolladora fullstack enfocada en productos con diseño, rendimiento y claridad.",
    skillsClose: "</skills>",
    profileName: "Antonella Brochini",
    profileRole: "Desarrolladora Full Stack",
    profileNote:
      "Busco especializarme en sistemas digitales escalables que combinen buena ingeniería con decisiones basadas en datos.",
    mindsetLabel: "<Mindset />",
    howIWork: "Cómo trabajo",
    stats: [
      { value: "Full Stack", label: "Perfil" },
      { value: "Next.js", label: "Frontend" },
      { value: "Spring Boot", label: "Backend" },
      { value: "PostgreSQL", label: "BD" },
    ],
    pills: [
      { icon: "⚛️", text: "React / Next.js" },
      { icon: "🍃", text: "Spring Boot" },
      { icon: "🗄️", text: "SQL / PostgreSQL" },
      { icon: "🐳", text: "Docker / Git" },
      { icon: "☁️", text: "AWS / Cloud" },
      { icon: "☁️", text: "Salesforce" },
      { icon: "🎨", text: "Tailwind / Bootstrap" },
      { icon: "🌍", text: "Inglés" },
      { icon: "🇪🇸", text: "Español (nativo)" },
    ],
    timeline: [
      {
        title: "Pienso en sistemas, no solo en features",
        desc: "Antes de codificar analizo el problema, el contexto de negocio y el impacto a largo plazo. Alineo tecnología con estrategia.",
      },
      {
        title: "Construyo con intención",
        desc: "Diseño experiencias modernas, accesibles y de alto rendimiento pensadas para escalar, no solo para publicar.",
      },
      {
        title: "Ingeniería con excelencia",
        desc: "Arquitectura limpia, componentes reutilizables, pruebas y buenas prácticas son la base del crecimiento sostenible.",
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
