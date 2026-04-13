export const en = {
  nav: {
    home: "Home",
    projects: "Projects",
    about: "About me",
    contact: "Contact",
  },
  header: {
    menuToggle: "Toggle menu",
  },
  theme: {
    toggleAria: "Toggle theme",
  },
  language: {
    switchLabel: "Language",
    es: "ES",
    en: "EN",
  },
  home: {
    subtitle: "Designing digital experiences beyond limits.",
    titleLine1: "Building Today.",
    titleLine2: "Leading Tomorrow.",
    cta: "View My Work",
  },
  portfolio: {
    selectedProjects: "Selected Projects",
  },
  projectDetail: {
    description: "Description",
    notFound: "Project not found",
    github: "GitHub",
    viewProject: "View Project",
    imageAlt: "Project screenshot",
  },
  projects: {
    "1": {
      title: "Wine E-commerce",
      description: [
        "End-to-end e-commerce solution developed for a winery, focused on delivering a seamless purchasing experience and driving business growth.",
        "The platform integrates Mercado Pago for secure payment processing and SendGrid for automated transactional and marketing email campaigns. Social authentication and JWT-based authentication were implemented to ensure secure user access and session management.",
        "On the frontend, Redux was used for centralized state management, enabling efficient handling of user sessions, cart state, and application data flow.",
        "Additionally, the system includes an analytics dashboard to monitor sales performance, identify top-selling products, and support data-driven decision-making.",
        "Backend deployed on AWS with Docker",
        "https://api.antonellabrochini.com/swagger-ui/index.html for API documentation and testing. Rol user: user1 and password1",
      ],
    },
    "2": {
      title: "Order Food App",
      description: [
        "Food ordering web application that allows users to browse a menu, customize food items, manage a shopping cart and complete orders through a checkout process.",
        "The application includes user authentication, so users must register or log in before placing an order. Once authenticated, they can personalize their food by selecting ingredients, add items to the cart and complete the purchase.",
        "The checkout system supports multiple payment options including credit card, PayPal or cash payment to the delivery person.",
        "user : demo@pizzeria.com  and Password: 12345678 to test the app",
      ],
    },
    "3": {
      title: "OrderFood App",
      description: [
        "Web-based platform designed to centralize and optimize restaurant order management, including in-house delivery operations.",
        "Allows multiple restaurants to use the system, each managing their own orders, products, and workflows independently.",
        "Unifies orders from different channels (WhatsApp, phone, and in-person) into a single system, improving organization and efficiency.",
        "Includes a QR-based digital menu where customers can place orders directly, sending them instantly to the kitchen.",
        "Provides data tracking and reporting features to analyze sales, orders, and business performance.",
        "Currently in development and being validated with real users (restaurants).",
      ],
    },
    "4": {
      title: "Digital Wallet",
      description: [
        "Developed a mobile digital wallet application using React Native with Expo.",
        "Integrated a custom REST API built with Node.js and Express for transaction and account management.",
        "Implemented local storage for user session persistence and offline data handling.",
        "Designed a modern and intuitive UI focused on usability and smooth user experience.",
        "Implemented transaction management, balance tracking, and structured financial data handling.",
        "Applied component-based architecture to ensure scalability and maintainability.",
        "Optimized performance across mobile devices.",
      ],
    },
    "5": {
      title: "Application Deployment on AWS",
      description: [
        "Application deployment workflow using Kubernetes on the master branch.",
        "Testing workflow integrated with SonarCloud.",
        "Load testing using Docker Compose to spin up services and Apache Benchmark to evaluate performance.",
        "Load testing workflow with k6.",
      ],
    },
    "6": {
      title: "IaC with Terraform on AWS",
      description: [
        "Provisioned two Kubernetes clusters with identical configurations across isolated networks.",
        "Configured one cluster for production workloads.",
        "Segmented the second cluster using namespaces for development and testing environments.",
      ],
    },
    "7": {
      title: "E-commerce Backend with Keycloak",
      description: [
        "Developed a secure e-commerce REST API integrated with Keycloak for authentication and role-based access control (RBAC).",
        "Implemented protected endpoints and authorization rules for different user roles (e.g., admin/customer).",
        "Designed scalable backend architecture for core e-commerce flows (products, orders, and users).",
        "Documented setup and deployment workflow to run locally with environment-based configuration (Docker-ready if applicable).",
      ],
    },
    "8": {
      title: "One page Nice Design",
      description: [
        "Modern responsive one-page website built with Next.js and TypeScript.",
        "It features a clean component-based architecture, smooth UI animations, and optimized performance.",
        "The project focuses on modern frontend practices, reusable components, and scalable styling for building elegant web interfaces.",
      ],
    },
    "9": {
      title: "Reservation Management System GX",
      description: [
        "Developed a reservation management application using GeneXus.",
        "Designed and structured business logic for booking workflows.",
        "Managed database interactions and transactional processes.",
        "Focused on functional correctness and structured data handling.",
        "Implemented validation rules and user interaction flows.",
      ],
    },
    "10": {
      title: "News Website",
      description: [
        "Developed and customized a news website using Joomla CMS.",
        "Configured content structures, categories, and dynamic article management.",
        "Implemented responsive templates and layout adjustments.",
        "Managed plugins and extensions to enhance functionality and performance.",
        "Handled deployment and configuration for production environment.",
      ],
    },
    "11": {
      title: "New Portfolio",
      description: [
        "Designed and developed a modern personal portfolio using Next.js.",
        "Implemented advanced animations with Framer Motion to enhance user interaction and visual flow.",
        "Created custom SVG graphics and animated elements to deliver a distinctive and dynamic user experience.",
        "Focused on component reusability, clean architecture, and scalable structure.",
        "Optimized performance and responsiveness across devices.",
        "Deployed using modern frontend best practices.",
      ],
    },
    "12": {
      title: "Portfolio v1",
      description: [
        "Designed and developed my first personal portfolio using Next.js.",
        "Built with a clean, responsive layout and a sober, professional design approach.",
        "Statically exported for deployment on GitHub Pages.",
        "This project represents the foundation of my frontend development journey and was later rebuilt with improved scalability and architectural thinking.",
      ],
    },
  },
  about: {
    titleAbout: "About",
    titleMe: "Me",
    heroParagraphs: [
      "I’m a Software Developer with hands-on experience building scalable web applications using Next.js, Spring Boot, and relational databases.",
      "I work across both frontend and backend, with a strong focus on writing clean, maintainable code and designing efficient system architectures.",
      "I enjoy understanding how systems work end-to-end and continuously improving my technical foundations while building solutions that are functional, efficient, and scalable.",
    ],
    linkedIn: "LinkedIn",
    skillsOpen: "<skills>",
    stackTitle: "My stack",
    stackSubtitle:
      "Fullstack Developer focused on building products with design, performance, and clarity.",
    skillsClose: "</skills>",
    profileName: "Antonella Brochini",
    profileRole: "Full Stack Developer",
    profileNote:
      "I aim to specialize in developing scalable digital systems that combine strong engineering principles with data-driven decision making.",
    mindsetLabel: "<Mindset />",
    howIWork: "How I Work",
    stats: [
      { value: "Full Stack", label: "Profile" },
      { value: "Next.js", label: "Frontend" },
      { value: "Spring Boot", label: "Backend" },
      { value: "PostgreSQL", label: "DB" },
    ],
    pills: [
      { icon: "⚛️", text: "React / Next.js" },
      { icon: "🍃", text: "Spring Boot" },
      { icon: "🗄️", text: "SQL / PostgreSQL" },
      { icon: "🐳", text: "Docker / Git" },
      { icon: "☁️", text: "AWS / Cloud" },
      { icon: "☁️", text: "Salesforce" },
      { icon: "🎨", text: "Tailwind / Bootstrap" },
      { icon: "🌍", text: "English" },
      { icon: "🇪🇸", text: "Spanish (Native)" },
    ],
    timeline: [
      {
        title: "I think in systems, not features",
        desc: "Before writing code, I analyze the problem, the business context, and the long-term impact. I build solutions that align technology with strategy.",
      },
      {
        title: "I build with intention",
        desc: "I design modern, accessible, high-performance experiences that are built to scale — not just to ship.",
      },
      {
        title: "I engineer for excellence",
        desc: "Clean architecture, reusable components, testing, and best practices are not optional — they are the foundation for sustainable growth.",
      },
    ],
  },
  contact: {
    title: "Contact",
    placeholders: {
      name: "Your name",
      email: "Your email",
      subject: "Subject",
      message: "Your message",
    },
    submit: "Send Message",
    success: "Message sent successfully!",
    sendError: "Failed to send message",
    errors: {
      name: "Name is required",
      emailRequired: "Email is required",
      emailInvalid: "Email is invalid",
      subject: "Subject is required",
      message: "Message is required",
    },
    locationTitle: "Montevideo, Uruguay.",
    locationAddress: "Av. Italia 1234, Montevideo 11600",
    phoneHours: "Mon to Fri 9am to 6pm",
    emailPrompt: "Send us your query anytime!",
  },
};
