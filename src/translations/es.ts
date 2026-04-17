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
      title: "App OrderFlow",
      summary:
        "Plataforma multi-restaurante para gestionar pedidos, analítica operativa, detección de tendencias e insights accionables a partir de datos reales.",
      data: [
        "Implementación de análisis temporal (week-over-week, month-over-month y ventanas móviles de 7 días).",
  "Detección automática de tendencias de negocio (crecimiento, caída, estabilidad) basada en datos reales de pedidos.",
  "Identificación de patrones operativos como:\n  • Días de alta y baja demanda\n  • Horas pico de pedidos\n  • Concentración de ingresos en pocos días o productos",
  "Cálculo de métricas clave:\n  • Ingresos totales\n  • Ticket promedio\n  • Volumen de pedidos\n  • Productos más vendidos",
  "Generación automática de insights de negocio a partir de datos operativos.",
  "Recomendaciones accionables orientadas a negocio:\n  • Aplicar promociones en días de baja actividad\n  • Potenciar productos con mayor rendimiento\n  • Optimizar operación en horarios pico",
  "Desarrollo de reportes con resumen ejecutivo que sintetiza el estado del negocio, hallazgos clave y acciones sugeridas.",
  "Análisis adaptado a escenarios de bajo volumen de datos, incluyendo interpretación de etapas iniciales del negocio.",
],
      description: [
        "Acceso de prueba: https://orderflow.com.uy  |  Usuario: donvito@gmail.com  |  Contraseña: 12345678",

        "OrderFlow es una plataforma web diseñada para centralizar y optimizar la gestión de pedidos de restaurantes, incluyendo operaciones de reparto propio.",

        "Arquitectura multi-tenant que permite a múltiples restaurantes operar de forma independiente, gestionando sus propios productos, pedidos, clientes y configuraciones.",

        "Integración de múltiples canales de entrada de pedidos (WhatsApp, teléfono y presencial) en un sistema unificado y estructurado de datos.",

        "Diseño e implementación de modelos de datos relacionales para la gestión de pedidos, clientes, productos y ventas.",

        "Desarrollo de dashboards analíticos y sistemas de reporte para el seguimiento de métricas clave de negocio: ingresos, volumen de pedidos, productos más vendidos y comportamiento de clientes.",

        "Implementación de una capa analítica con comparaciones temporales (semana a semana, mes a mes), detección de tendencias y análisis de patrones para apoyar la toma de decisiones basada en datos.",

        "Generación automática de insights de negocio y recomendaciones accionables a partir de datos reales operativos (ej: concentración de demanda, horas pico, períodos de baja actividad).",

        "Identificación de patrones de consumo y oportunidades de mejora para optimizar la eficiencia operativa de los restaurantes.",

        "Sistema de menú digital con QR que captura datos de comportamiento del cliente y automatiza el flujo de pedidos hacia cocina.",

        "Validación en entorno real con restaurantes, incluyendo recolección de datos reales para análisis y mejora continua del producto.",

        "Diseñado con foco en escalabilidad, permitiendo futuras integraciones con herramientas de Business Intelligence y pipelines de análisis avanzado."
      ]
    },
    "2": {
      title: "Análisis de datos de retail",
      summary:
      "Proyecto de análisis de datos de ventas utilizando Python y Power BI, enfocado en limpieza de datos, validación y generación de insights de negocio mediante visualizaciones interactivas.",
      data: [
        "Análisis de tendencia de ventas:\n  • Crecimiento claro entre 2010 y 2011\n  • Comportamiento estable con picos estacionales",
  
  "Distribución geográfica:\n  • Alta concentración de revenue en Reino Unido\n  • Menor participación de Netherlands, EIRE, Germany y France\n  • Oportunidades de expansión a otros mercados",
  
  "Detección de riesgo de mercado:\n  • Fuerte dependencia de un solo país (UK)\n  • Exposición a cambios en la demanda de ese mercado",
  
  "Rendimiento de productos:\n  • Identificación de productos más vendidos\n  • Productos destacados como PAPER CRAFT, LITTLE BIRDIE y MEDIUM CERAMIC TOP STORAGE JAR",
  
  "Patrones de concentración de productos:\n  • Un grupo reducido genera gran parte de las ventas\n  • Oportunidad de optimizar inventario y marketing",
  
  "Generación de insights de negocio:\n  • Comprensión del comportamiento de ventas\n  • Apoyo a la toma de decisiones y crecimiento"
      ],
      description: [
        "Proyecto de análisis de datos de ventas de extremo a extremo utilizando Python (Pandas) y Power BI.",

        "Incluye limpieza de datos, validación de tipos y corrección de errores de modelado para asegurar cálculos precisos. Se generaron insights clave mediante dashboards interactivos, como tendencias de ventas, revenue por país y productos más vendidos.",
        
        "El análisis permite identificar patrones de negocio como la concentración geográfica y la distribución de la demanda, aportando valor para la toma de decisiones.",
      ],
    },
    "3": {
      title: "E-commerce de vinos",
      summary:
        "E-commerce full stack para bodega con pagos seguros, autenticación JWT y social, analítica y API REST documentada desplegada en AWS con Docker.",
      data: [],
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

    "4": {
      title: "App de pedidos de comida",
      summary:
        "Web de pedidos con menú, personalización, carrito, autenticación y checkout con tarjeta, PayPal o efectivo al repartidor.",
      data: [],
      description: [
        "Aplicación web para pedir comida: menú, personalización, carrito y checkout.",
        "Incluye autenticación: el usuario debe registrarse o iniciar sesión antes de pedir. Luego puede personalizar ingredientes, agregar al carrito y completar la compra.",
        "El checkout admite tarjeta, PayPal o pago en efectivo al repartidor.",
        "Usuario de prueba: demo@pizzeria.com y contraseña: 12345678",
      ],
    },
    "5": {
      title: "Billetera digital",
      summary:
        "Billetera móvil en React Native (Expo) con API Node.js propia, persistencia local e interfaz clara para saldos y transacciones.",
      data: [],
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
    "6": {
      title: "Despliegue de aplicaciones en AWS",
      summary:
        "Pipeline DevOps con despliegue en Kubernetes, calidad con SonarCloud y pruebas de carga con Docker Compose, Apache Bench y k6.",
      data: [],
      description: [
        "Flujo de despliegue con Kubernetes en la rama principal.",
        "Integración de pruebas con SonarCloud.",
        "Pruebas de carga con Docker Compose y Apache Benchmark.",
        "Flujo de pruebas de carga con k6.",
      ],
    },
    "7": {
      title: "IaC con Terraform en AWS",
      summary:
        "Infraestructura en AWS definida con Terraform: dos clústeres Kubernetes equivalentes y aislamiento por namespaces para prod y no prod.",
      data: [],
      description: [
        "Dos clústeres de Kubernetes con configuración equivalente en redes aisladas.",
        "Un clúster para cargas de producción.",
        "El segundo segmentado con namespaces para desarrollo y pruebas.",
      ],
    },
    "8": {
      title: "Backend e-commerce con Keycloak",
      summary:
        "API REST de e-commerce en Spring Boot con Keycloak y RBAC, endpoints protegidos por rol y modelo escalable de productos y pedidos.",
      data: [],
      description: [
        "API REST de e-commerce segura integrada con Keycloak y control de acceso por roles (RBAC).",
        "Endpoints protegidos y reglas para distintos roles (por ejemplo admin/cliente).",
        "Arquitectura escalable para productos, pedidos y usuarios.",
        "Documentación de instalación y despliegue local con variables de entorno (lista para Docker si aplica).",
      ],
    },
    "9": {
      title: "One page — Cool Diseño ",
      summary:
        "Sitio one-page responsive con Next.js y TypeScript: arquitectura por componentes, animaciones discretas y buenas prácticas de frontend.",
      data: [],
      description: [
        "Sitio one-page moderno y responsive con Next.js y TypeScript.",
        "Arquitectura de componentes clara, animaciones fluidas y buen rendimiento.",
        "Buenas prácticas de frontend, componentes reutilizables y estilos escalables.",
      ],
    },
    "10": {
      title: "Sistema de reservas GX",
      summary:
        "Flujos de reservas y lógica transaccional en GeneXus con reglas de validación y datos estructurados.",
      data: [],
      description: [
        "Aplicación de gestión de reservas desarrollada con GeneXus.",
        "Lógica de negocio y flujos de reserva estructurados.",
        "Interacción con base de datos y procesos transaccionales.",
        "Énfasis en corrección funcional y datos estructurados.",
        "Reglas de validación y flujos de interacción con el usuario.",
      ],
    },
    "11": {
      title: "Sitio de noticias",
      summary:
        "Portal de noticias en Joomla con categorías, plantillas responsive, extensiones y despliegue listo para producción.",
      data: [],
      description: [
        "Sitio de noticias desarrollado y personalizado con Joomla.",
        "Estructuras de contenido, categorías y artículos dinámicos.",
        "Plantillas responsive y ajustes de maquetación.",
        "Plugins y extensiones para funcionalidad y rendimiento.",
        "Despliegue y configuración para producción.",
      ],
    },
    "12": {
      title: "Nuevo portafolio",
      summary:
        "Este portafolio en Next.js con Framer Motion, gráficos SVG y estructura modular pensada para UX y mantenibilidad.",
      data: [],
      description: [
        "Portafolio personal moderno con Next.js.",
        "Animaciones avanzadas con Framer Motion.",
        "Gráficos SVG y elementos animados para una experiencia distintiva.",
        "Componentes reutilizables, arquitectura limpia y estructura escalable.",
        "Rendimiento y responsive en todos los dispositivos.",
        "Despliegue siguiendo buenas prácticas de frontend.",
      ],
    },
    "13": {
      title: "Portafolio v1",
      summary:
        "Primer portafolio estático en Next.js para GitHub Pages: base clara que luego evolucionó hacia una arquitectura más escalable.",
      data: [],
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
