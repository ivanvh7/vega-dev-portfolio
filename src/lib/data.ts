import type { NavItem, Project, Service, Testimonial, FaqItem, ValueProposition, WorkStep } from '@/lib/types';
import { ShieldCheck, Zap, HeartHandshake, Code, Search, GitBranch, Briefcase, Lightbulb, TrendingUp, Wrench, Handshake, BotMessageSquare, Sparkles } from 'lucide-react';

export const navItems: NavItem[] = [
  { title: 'Inicio', href: '/' },
  { title: 'Proyectos', href: '/proyectos' },
  { title: 'Sobre mí', href: '/sobre-mi' },
  { title: 'Servicios', href: '/servicios' },
  { title: 'Contacto', href: '/contacto' },
];

export const homePage = {
  hero: {
    h1: 'Iván Vega Hernández — Desarrollador Web Full-Stack',
    h2: 'Construyo aplicaciones web rápidas, accesibles y escalables con JavaScript/TypeScript, React y Node.js.',
    intro: 'Soy desarrollador web con experiencia en proyectos reales del sector tecnológico. Actualmente trabajo en Contactel mientras sigo formándome en tecnologías modernas de frontend y backend. Me apasiona crear interfaces usables y APIs robustas que aportan valor medible al negocio.',
    ctaPrimary: 'Ver proyectos',
    ctaSecondary: 'Contáctame',
    accessibilityMicrocopy: 'Código semántico, imágenes con alt, contraste AA, navegación por teclado.',
  },
  trustStrip: {
    title: 'He trabajado en:',
    logos: [
      { name: 'Contactel', text: 'Contactel' },
      { name: 'Inerza', text: 'Inerza' }
    ]
  },
  valueProps: [
    { icon: Zap, title: 'Rendimiento y SEO desde el diseño.' },
    { icon: HeartHandshake, title: 'UI/UX enfocada en conversión y accesibilidad (WCAG).' },
    { icon: GitBranch, title: 'Arquitecturas mantenibles con React/Next.js y Node.js/Express.' },
    { icon: ShieldCheck, title: 'Integraciones limpias y testables.' },
    { icon: Code, title: 'Entrega continua y buenas prácticas.' },
  ] as ValueProposition[],
  testimonials: [
    { quote: 'Comunicación excelente y entregas puntuales. Entendió perfectamente las necesidades del proyecto.', name: 'Ana Pérez', company: 'Startup X' },
    { quote: 'Mejoró el rendimiento y la conversión del sitio de una manera que no creíamos posible. Un gran profesional.', name: 'Carlos García', company: 'E-commerce Y' },
  ] as Testimonial[],
  cta: {
    title: '¿Tienes una idea?',
    subtitle: 'Vamos a construir algo increíble juntos.',
    buttonText: 'Hablemos',
    buttonLink: '/contacto',
  }
};

export const projects: Project[] = [
  {
    title: 'FindDkey',
    githubUrl: 'https://github.com/ivanvh7/FindDkey',
    summary: 'Herramienta práctica orientada a resolver una necesidad concreta del usuario, con énfasis en rendimiento y simplicidad de interfaz.',
    technologies: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
    features: [
      'Arquitectura clara y componentes reutilizables.',
      'Buenas métricas Core Web Vitals (LCP, CLS).',
      'Documentación y scripts de despliegue.',
    ],
    result: 'Tiempo de carga <1s en conexiones rápidas, interfaz intuitiva que reduce el tiempo de búsqueda del usuario.',
    image: 'https://picsum.photos/seed/react/600/400',
    imageHint: 'react code',
  },
  {
    title: 'Proyect1-JavaScript',
    githubUrl: 'https://github.com/ivanvh7/Proyect1-JavaScript',
    summary: 'Aplicación vanilla JavaScript para afianzar fundamentos: estado, eventos, asincronía y manipulación del DOM con buenas prácticas.',
    technologies: ['JavaScript', 'HTML5', 'CSS3'],
    learnings: ['Modulación de código', 'Patrones de diseño simples', 'Testing básico con Jest.'],
    image: 'https://picsum.photos/seed/javascript/600/400',
    imageHint: 'javascript code',
  },
  {
    title: 'Proyect2-bd-php',
    githubUrl: 'https://github.com/ivanvh7/Proyect2-bd-php',
    summary: 'CRUD completo con PHP y base de datos. Enfoque en seguridad (validación, sanitización) y consultas eficientes.',
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS'],
    learnings: ['Patrón MVC liviano', 'Control de sesiones y autenticación', 'Sentencias SQL preparadas para evitar inyección.'],
    image: 'https://picsum.photos/seed/php/600/400',
    imageHint: 'php code',
  },
  {
    title: 'Proyect3-soap-api',
    githubUrl: 'https://github.com/ivanvh7/Proyect3-soap-api',
    summary: 'Servicio SOAP interoperable con manejo de esquemas y contratos. Demuestra integración con sistemas legados.',
    technologies: ['PHP', 'SOAP', 'WSDL', 'XML'],
    learnings: ['Definición de contratos de API (WSDL)', 'Versionado de servicios web', 'Logs y manejo de errores robusto.'],
    image: 'https://picsum.photos/seed/soap/600/400',
    imageHint: 'api soap',
  },
];

export const projectsPage = {
  title: 'Proyectos destacados',
  intro: 'Selección de proyectos que reflejan mi forma de trabajar: foco en la experiencia de usuario, rendimiento y calidad del código. Repos públicos en GitHub: @ivanvh7.',
  cta: {
    title: '¿Tienes una idea?',
    subtitle: 'Hablemos de cómo puedo ayudarte a hacerla realidad.',
    buttonText: 'Contáctame',
    buttonLink: '/contacto',
  }
};

export const aboutPage = {
  title: 'Hola, soy Iván',
  p1: 'Desarrollador web con experiencia en Contactel e Inerza. Disfruto convirtiendo requisitos complejos en productos claros, rápidos y fáciles de usar.',
  p2: 'Trabajo principalmente con JavaScript/TypeScript, React.js/Next.js y Node.js/Express. Me mantengo en formación continua para dominar nuevas prácticas y herramientas que aporten valor.',
  p3: 'Me enfoco en la colaboración, la comunicación clara y el detalle. Para mí, “listo” significa medible, mantenible y accesible para todos los usuarios.',
  fullBio: [
    '¡Hola! Soy Iván Vega, un desarrollador web apasionado por crear soluciones digitales que no solo funcionen bien, sino que también ofrezcan una experiencia de usuario excepcional. Mi objetivo es transformar ideas y requisitos complejos en productos intuitivos, eficientes y accesibles.',
    'Con experiencia profesional en entornos como Contactel e Inerza, he tenido la oportunidad de trabajar en proyectos reales, enfrentando desafíos técnicos y de negocio que han forjado mi perfil. Me especializo en el ecosistema de JavaScript, con un fuerte dominio de React, Next.js para el frontend y Node.js con Express para el backend.',
    'Creo firmemente en la importancia de un código limpio, mantenible y escalable. Por eso, dedico tiempo a la arquitectura, las buenas prácticas y la documentación. Además, considero que el rendimiento (Core Web Vitals) y la accesibilidad (WCAG) no son extras, sino pilares fundamentales de cualquier proyecto de calidad.',
    'Siempre estoy aprendiendo. El mundo del desarrollo web evoluciona a una velocidad vertiginosa y me esfuerzo por estar al día, no por seguir modas, sino para elegir la herramienta adecuada para cada problema. Si buscas a alguien proactivo, comunicativo y comprometido con los resultados, hemos conectado.'
  ],
  stack: {
    title: 'Stack y herramientas',
    frontend: {
      title: 'Frontend',
      tools: 'React.js, Next.js, HTML5, CSS3, TypeScript, Accesibilidad (WCAG), Rendimiento Web.'
    },
    backend: {
      title: 'Backend',
      tools: 'Node.js, Express, REST/SOAP APIs, Autenticación (JWT), Testing (Jest).'
    },
    data: {
      title: 'Datos & DevOps',
      tools: 'MySQL/MariaDB, CI/CD, Git, Docker, Vercel.'
    },
    methodologies: {
      title: 'Metodologías',
      tools: 'Component-driven, TDD/BDD (cuando aplica), Code Review, Scrum.'
    }
  },
  cta: {
    primaryText: 'Ver mi CV',
    primaryLink: '/cv-ivan-vega.pdf',
    secondaryText: 'Conecta en GitHub',
    secondaryLink: 'https://github.com/ivanvh7',
  },
  image: '/images/73824E49-1107-4E8D-BD76-7A6C0A492A05.JPG',
  imageHint: 'portrait man'
};

export const services: Service[] = [
  { icon: Briefcase, title: 'Desarrollo Frontend (React/Next.js)', description: 'Interfaces accesibles, SEO-ready y optimizadas para conversión, construidas con las mejores prácticas de la industria.' },
  { icon: GitBranch, title: 'Backends y APIs (Node/Express)', description: 'Sistemas robustos con arquitecturas REST/SOAP, autenticación segura, integración con terceros, logging y tests.' },
  { icon: TrendingUp, title: 'Performance & SEO técnico', description: 'Optimización de Core Web Vitals, indexación, marcado estructurado, sitemaps y todo lo necesario para un ranking óptimo.' },
  { icon: Wrench, title: 'Mantenimiento y mejora continua', description: 'Refactors de código, auditorías de accesibilidad, configuración de CI/CD para automatizar y mejorar la calidad del producto.' },
];

export const servicesPage = {
  title: '¿En qué puedo ayudarte?',
  workProcess: {
    title: 'Mi proceso de trabajo',
    steps: [
      { step: 1, title: 'Descubrimiento', description: 'Entendemos tus objetivos, audiencia y requisitos técnicos.' },
      { step: 2, title: 'Diseño técnico', description: 'Definimos la arquitectura, el stack y un plan de acción claro.' },
      { step: 3, title: 'Implementación iterativa', description: 'Desarrollamos en ciclos cortos con entregas frecuentes y feedback constante.' },
      { step: 4, title: 'Entrega y medición', description: 'Desplegamos el producto y medimos su impacto para futuras mejoras.' },
    ] as WorkStep[],
  },
  cta: {
    title: '¿Listo para empezar?',
    subtitle: 'Solicita un presupuesto sin compromiso.',
    buttonText: 'Solicitar presupuesto',
    buttonLink: '/contacto',
    microcopy: 'Entregas iterativas, comunicación clara y foco en resultados.',
  },
  faqs: {
    title: 'Preguntas frecuentes',
    items: [
      { question: '¿Trabajas con proyectos desde cero y también sobre código existente?', answer: 'Sí. Puedo crear un producto desde la concepción o unirme a un proyecto existente para mejorarlo, refactorizarlo o añadir nuevas funcionalidades.' },
      { question: '¿Qué plazos de entrega manejas?', answer: 'Depende del alcance del proyecto. Siempre defino un roadmap con entregas iterativas y prioridades claras para que veas el progreso constantemente.' },
      { question: '¿Puedes integrarte con mi equipo de desarrollo actual?', answer: 'Por supuesto. Me adapto con agilidad a equipos y herramientas existentes, colaborando a través de Git, Slack, Jira o la plataforma que utilicéis.' },
      { question: '¿Ofreces planes de mantenimiento y soporte?', answer: 'Sí, ofrezco bolsas de horas o planes mensuales para soporte técnico, actualizaciones de seguridad y mejora continua de la aplicación.' },
      { question: '¿Trabajas con presupuestos cerrados o por horas?', answer: 'Ambos. Para proyectos con un alcance bien definido, prefiero un presupuesto cerrado. Para tareas de consultoría o mantenimiento, el modelo por horas es más flexible.' },
    ] as FaqItem[],
  }
};

export const contactPage = {
  title: 'Hablemos',
  description: 'Cuéntame tu idea o proyecto. Respondo con una propuesta clara y tiempos estimados en menos de 48 horas.',
  form: {
    name: 'Nombre',
    email: 'Email',
    company: 'Empresa (Opcional)',
    budget: 'Presupuesto aproximado (Opcional)',
    message: 'Mensaje',
    consent: 'Acepto la política de privacidad.',
    submit: 'Enviar mensaje',
  },
  fallback: 'También puedes escribirme por GitHub: @ivanvh7.',
  microcopy: 'Responderé lo antes posible con los próximos pasos.',
  aiAnalysis: {
    title: 'Análisis de Consultas (Demo)',
    description: 'Esta es una demostración. Cada vez que se envía un formulario, un modelo de IA analiza todas las consultas enviadas en esta sesión para identificar tendencias. En una aplicación real, esto se conectaría a una base de datos para obtener insights de negocio.',
    themes: 'Temas comunes',
    sentiment: 'Sentimiento general',
    improvements: 'Sugerencias de mejora',
    icon: Sparkles
  }
};

export const privacyPolicyPage = {
  title: 'Política de Privacidad',
  summary: 'Tus datos se usarán únicamente para responder a tu consulta. No se compartirán con terceros. Puedes solicitar acceso o eliminación cuando quieras.',
  lastUpdated: '1 de Julio de 2024',
};

export const footer = {
  text: '© {year} Iván Vega Hernández. Todo el código con foco en accesibilidad, rendimiento y buenas prácticas.',
  github: 'https://github.com/ivanvh7',
};
