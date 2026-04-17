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
      title: "OrderFlow App",
      summary:
        "Multi-tenant platform for restaurant order management with analytics, trend detection, and actionable business insights from real operational data.",
      data: [
        "Implementation of temporal analysis (week-over-week, month-over-month and 7-day moving windows).",
  "Automatic detection of business trends (growth, decline, stability) based on real order data.",
  "Identification of operational patterns such as:\n  • High and low demand days\n  • Peak order hours\n  • Revenue concentration in few days or products",
  "Calculation of key metrics:\n  • Total revenue\n  • Average ticket\n  • Order volume\n  • Best-selling products",
  "Automatic generation of business insights from operational data.",
  "Actionable business-oriented recommendations:\n  • Apply promotions on low-activity days\n  • Boost highest-performing products\n  • Optimize operations during peak hours",
  "Reports with executive summary synthesizing business status, key findings and suggested actions.",
  "Analysis adapted to low-volume data scenarios, including interpretation of early business stages.",],
      description: [
        "Demo access: https://orderflow.com.uy  |  User: donvito@gmail.com  |  Password: 12345678",

        "OrderFlow is a web platform designed to centralize and optimize restaurant order management, including in-house delivery operations.",

        "Multi-tenant architecture allowing multiple restaurants to operate independently, each with their own products, orders, customers, and configurations.",

        "Integration of multiple order channels (WhatsApp, phone and in-person) into a unified and structured data system.",

        "Design and implementation of relational data models for managing orders, customers, products, and sales data.",

        "Development of analytical dashboards and reporting systems to track key business metrics such as revenue, order volume, top-selling products, and customer behavior.",

        "Implementation of an analytical layer with time-based comparisons (week-over-week, month-over-month), trend detection, and pattern recognition to support data-driven decision-making.",

        "Automatic generation of business insights and actionable recommendations based on real operational data (e.g., demand concentration, peak hours, low-activity periods).",

        "Identification of consumption patterns and operational inefficiencies to improve restaurant performance and decision-making.",

        "QR-based digital menu system that captures customer behavior data and automates the order flow to the kitchen.",

        "Real-world validation with restaurant users, including real data collection for analysis and continuous product iteration.",

        "Designed with scalability in mind, enabling future integration with Business Intelligence tools and advanced analytics pipelines."
      ]
    },
    "2": {
      title: "Retail Data Analysis",
      summary:
      "End-to-end sales data analysis project using Python and Power BI, focused on data cleaning, validation, and business insight generation through interactive visualizations.",
      data: [
       
          "Sales trend analysis:\n  • Clear growth from 2010 to 2011\n  • Stable behavior with seasonal peaks",
          
          "Geographic distribution:\n  • Strong revenue concentration in United Kingdom\n  • Lower contribution from Netherlands, EIRE, Germany and France\n  • Potential market expansion opportunities",
          
          "Market risk detection:\n  • High dependency on a single country (UK)\n  • Exposure to demand changes in that market",
          
          "Product performance:\n  • Identification of top-selling products\n  • High-demand items include PAPER CRAFT, LITTLE BIRDIE and MEDIUM CERAMIC TOP STORAGE JAR",
          
          "Product concentration patterns:\n  • Small group of products generates large share of sales\n  • Opportunity to optimize inventory and marketing focus",
          
          "Business insights generation:\n  • Data-driven understanding of sales behavior\n  • Support for decision-making and growth strategies"
        
      ],
      description: [
        "End-to-end sales data analysis project using Python (Pandas) and Power BI.",

        "The project includes data cleaning, type validation, and correction of data modeling issues to ensure accurate calculations. Key insights were generated through interactive dashboards, including sales trends over time, revenue by country, and top-selling products.",
        
        "This analysis highlights business patterns such as strong geographic concentration and product demand distribution, providing valuable insights for decision-making.",
      ],
    },
    "3": {
      title: "Wine E-commerce",
      summary:
        "Full-stack winery e-commerce with secure payments, JWT and social auth, analytics, and a documented REST API deployed on AWS with Docker.",
      data: [],
      description: [
        "Demo access:  User: admin  |  Password: adminPass  |  https://fe-monte-bravo.vercel.app",
        "End-to-end e-commerce solution developed for a winery, focused on delivering a seamless purchasing experience and business growth.",
        "Integration with Mercado Pago for secure payments and SendGrid for transactional and marketing communications.",
        "Implementation of authentication mechanisms including social login and JWT-based session management.",
        "Frontend built with Redux for global state management, handling user sessions, shopping cart, and data flow efficiently.",
        "Design and implementation of relational data models for orders, users, products, and transactions.",
        "Development of analytics dashboards to track key business metrics such as sales performance, top-selling products, and customer behavior.",
        "Data-driven approach to support decision-making and optimize business performance.",
        "Backend deployed on AWS using Docker, ensuring scalability and reliability.",
        "API design following REST principles with documentation available via Swagger.",
        "https://api.antonellabrochini.com/swagger-ui/index.html for API documentation and testing. Rol user: user1 and password1",
      ],
    },
    "4": {
      title: "Order Food App",
      summary:
        "Food ordering web app with menu browsing, customization, cart, authentication, and checkout supporting card, PayPal, or cash on delivery.",
      data: [],
      description: [
        "Food ordering web application that allows users to browse a menu, customize food items, manage a shopping cart and complete orders through a checkout process.",
        "The application includes user authentication, so users must register or log in before placing an order. Once authenticated, they can personalize their food by selecting ingredients, add items to the cart and complete the purchase.",
        "The checkout system supports multiple payment options including credit card, PayPal or cash payment to the delivery person.",
        "user : demo@pizzeria.com  and Password: 12345678 to test the app",
      ],
    },
    "5": {
      title: "Digital Wallet",
      summary:
        "React Native (Expo) mobile wallet with a custom Node.js API, local persistence, and a clean UI for balances and transactions.",
      data: [],
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
    "6": {
      title: "Application Deployment on AWS",
      summary:
        "DevOps pipeline with Kubernetes deployment, SonarCloud quality gates, and load testing via Docker Compose, Apache Bench, and k6.",
      data: [],
      description: [
        "Application deployment workflow using Kubernetes on the master branch.",
        "Testing workflow integrated with SonarCloud.",
        "Load testing using Docker Compose to spin up services and Apache Benchmark to evaluate performance.",
        "Load testing workflow with k6.",
      ],
    },
    "7": {
      title: "IaC with Terraform on AWS",
      summary:
        "Terraform-defined AWS infrastructure with twin Kubernetes clusters and namespace isolation for production versus dev and test workloads.",
      data: [],
      description: [
        "Provisioned two Kubernetes clusters with identical configurations across isolated networks.",
        "Configured one cluster for production workloads.",
        "Segmented the second cluster using namespaces for development and testing environments.",
      ],
    },
    "8": {
      title: "E-commerce Backend with Keycloak",
      summary:
        "Secure Spring Boot e-commerce API with Keycloak RBAC, protected endpoints by role, and a scalable domain model for products and orders.",
      data: [],
      description: [
        "Developed a secure e-commerce REST API integrated with Keycloak for authentication and role-based access control (RBAC).",
        "Implemented protected endpoints and authorization rules for different user roles (e.g., admin/customer).",
        "Designed scalable backend architecture for core e-commerce flows (products, orders, and users).",
        "Documented setup and deployment workflow to run locally with environment-based configuration (Docker-ready if applicable).",
      ],
    },
    "9": {
      title: "One page Nice Design",
      summary:
        "Responsive one-page site built with Next.js and TypeScript—component-driven layout, subtle motion, and performance-minded frontend structure.",
      data: [],
      description: [
        "Modern responsive one-page website built with Next.js and TypeScript.",
        "It features a clean component-based architecture, smooth UI animations, and optimized performance.",
        "The project focuses on modern frontend practices, reusable components, and scalable styling for building elegant web interfaces.",
      ],
    },
    "10": {
      title: "Reservation Management System GX",
      summary:
        "Reservation workflows and transactional booking logic implemented in GeneXus with validation rules and structured data handling.",
      data: [],
      description: [
        "Developed a reservation management application using GeneXus.",
        "Designed and structured business logic for booking workflows.",
        "Managed database interactions and transactional processes.",
        "Focused on functional correctness and structured data handling.",
        "Implemented validation rules and user interaction flows.",
      ],
    },
    "11": {
      title: "News Website",
      summary:
        "Joomla-based news portal with categories, responsive templates, extensions, and a production-ready deployment workflow.",
      data: [],
      description: [
        "Developed and customized a news website using Joomla CMS.",
        "Configured content structures, categories, and dynamic article management.",
        "Implemented responsive templates and layout adjustments.",
        "Managed plugins and extensions to enhance functionality and performance.",
        "Handled deployment and configuration for production environment.",
      ],
    },
    "12": {
      title: "New Portfolio",
      summary:
        "This portfolio: Next.js, Framer Motion animations, custom SVG work, and a modular structure focused on UX and maintainability.",
      data: [],
      description: [
        "Designed and developed a modern personal portfolio using Next.js.",
        "Implemented advanced animations with Framer Motion to enhance user interaction and visual flow.",
        "Created custom SVG graphics and animated elements to deliver a distinctive and dynamic user experience.",
        "Focused on component reusability, clean architecture, and scalable structure.",
        "Optimized performance and responsiveness across devices.",
        "Deployed using modern frontend best practices.",
      ],
    },
    "13": {
      title: "Portfolio v1",
      summary:
        "First static Next.js portfolio on GitHub Pages—a clean baseline that later evolved into a more scalable architecture.",
      data: [],
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
      "I also design systems oriented toward data generation and analysis, developing dashboards and metrics to support data-driven decision-making.",
      "I enjoy understanding systems end-to-end and continuously improving my technical foundations while building functional, efficient, and data-oriented solutions.",
    ],
    linkedIn: "LinkedIn",
    skillsOpen: "<skills>",
    stackTitle: "My Stack",

    stackSubtitle:
      "Full-stack developer focused on product quality, performance, and data analysis.",

    skillsClose: "</skills>",

    profileName: "Antonella Brochini",

    profileRole: "Full Stack Developer | Data Analysis",

    profileNote:
      "I aim to specialize in scalable digital systems that combine solid engineering with data analysis and data-driven decision-making.",

    mindsetLabel: "<Mindset />",

    howIWork: "How I Work",

    stats: [
      { value: "Full Stack + Data", label: "Profile" },
      { value: "Next.js", label: "Frontend" },
      { value: "Spring Boot", label: "Backend" },
      { value: "PostgreSQL", label: "DB" },
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
      { icon: "🌍", text: "English" },
      { icon: "🇪🇸", text: "Spanish (Native)" },
    ],

    timeline: [
      {
        title: "I think in systems and data",
        desc: "Before coding, I analyze the problem, business context, and available data to support informed decisions.",
      },
      {
        title: "I build with intention",
        desc: "I design scalable products that not only function well but also generate and structure data for future analysis.",
      },
      {
        title: "Data-oriented engineering",
        desc: "I apply best practices, data modeling, and analytical tools to build efficient and measurable solutions.",
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
