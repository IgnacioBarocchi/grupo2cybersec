export const titleSlide = {
  institution: "Instituto de Formación Técnica Superior n° 11",
  career: "Carrera: Técnico en Desarrollo de Software",
  date: "Abril de 2026",
  topic: "Roles profesionales de la ciberseguridad",
  members: [    "Cantero Esteban",
    "Mamani Juan",
    "Belmonte Ian",
    "Araujo Facundo",
    "Ocampo Cristian",
    "Barocchi Ignacio",],
};

export const sourcesData = [
  { name: "NoboJobs", url: "https://nobojobs.com/cybersecurity-career-roadmap-2026" },
  { name: "TechGig", url: "https://content.techgig.com/career-advice/cybersecurity-career-roadmap-2026-soc-vs-blue-team-vs-red-team/articleshow/127599960.cms" },
  { name: "Hadess.io Roadmap", url: "https://hadess.io/cyber-career-roadmap/" },
  { name: "UniHackers", url: "https://unihackers.com/es/blog/cybersecurity-career-path-2026" },
  { name: "Business Insider", url: "https://www.businessinsider.com/ai-agents-are-changing-cybersecurity-jobs-and-cutting-workloads-2026-3" },
  { name: "Trios Cyber", url: "https://trioscyber.com/cybersecurity-career-roadmap-2026" },
  { name: "Hadess.io Learning", url: "https://hadess.io/cybersecurity-learning-path/" },
  { name: "Medium InfoSec", url: "https://medium.com/infosec-writes-up/how-to-start-a-cybersecurity-career-in-2026-a-practical-roadmap-829dfbf7eb72" },
  { name: "CyberNexora", url: "https://blog.cybernexora.com/cybersecurity-learning-roadmap-2026" },
  { name: "Pluralsight", url: "https://www.pluralsight.com/resources/blog/cybersecurity/cybersecurity-career-guide-2025" },
  { name: "Coursera", url: "https://www.coursera.org/resources/job-leveling-matrix-for-cybersecurity-career-pathways" },
  { name: "TechTarget", url: "https://www.techtarget.com/searchsecurity/tip/Cybersecurity-career-path-5-step-guide-to-success" },
  { name: "Dice", url: "https://www.dice.com/career-advice/how-to-craft-your-cybersecurity-career-roadmap" },
];

export const whatIsSlide = {
  title: "¿Qué es la ciberseguridad?",
  points: [
    "Protección de sistemas, redes y datos frente a ataques digitales",
    {
      text: "Busca garantizar:",
      subpoints: ["Confidencialidad (que la información no se filtre)", "Integridad (que no se altere)", "Disponibilidad (que esté accesible)"],
    },
    {
      text: "Abarca:",
      subpoints: ["Software", "Hardware", "Usuarios"],
    },
  ],
};

export const whyImportantSlide = {
  title: "¿Por qué es importante hoy?",
  points: [
    "Crecimiento de internet y digitalización global",
    {
      text: "Aumento de ataques:",
      subpoints: ["Phishing", "Ransomware", "Robo de datos"],
    },
    {
      text: "Dependencia total de sistemas digitales:",
      subpoints: ["Bancos", "Hospitales", "Gobiernos"],
    },
    {
      text: "Impacto real:",
      subpoints: ["Económico", "Social", "Político"],
    },
  ],
  callout: "La seguridad pasó de ser técnica a ser crítica",
};

export const transitionSlide = {
  title: "De ataques aislados a amenazas globales",
  points: [
    "Antes: incidentes puntuales y aislados",
    "Hoy: ataques organizados, constantes y coordinados",
    {
      text: "Participan:",
      subpoints: ["Grupos criminales", "Empresas", "Estados nacionales"],
    },
  ],
};

export const organizationSlide = {
  title: "Organización en empresas reales",
  points: [
    {
      text: "Las empresas dividen la ciberseguridad en áreas especializadas:",
      subpoints: [
        "Operaciones (SOC): monitoreo y respuesta en tiempo real",
        "Defensa (Blue Team): protección de sistemas",
        "Ataque (Red Team): pruebas de vulnerabilidad",
        "Ingeniería: diseño de sistemas seguros",
        "GRC: normas, auditorías y gestión de riesgo",
      ],
    },
  ],
  callout: "No es un solo rol, es un ecosistema",
};

export const depthTrendsSlide = {
  title: "Tendencias en profundidad",
  points: [
    "La IA automatiza la detección y el análisis de amenazas",
    "Los ataques son más sofisticados: usan IA y deepfakes",
    "La nube se convirtió en el nuevo perímetro de seguridad",
    "La seguridad se integra desde el desarrollo (DevSecOps)",
  ],
};

export const roadmapSlide = {
  title: "¿Cómo empezar en ciberseguridad?",
  steps: [
    {
      number: 1,
      title: "Fundamentos",
      items: ["Redes", "Sistemas operativos", "Seguridad básica"],
    },
    {
      number: 2,
      title: "Primer rol",
      items: ["SOC Analyst", "Soporte IT"],
    },
    {
      number: 3,
      title: "Especialización",
      items: ["Blue Team", "Red Team", "Cloud Security"],
    },
    {
      number: 4,
      title: "Nivel avanzado",
      items: ["Security Engineer", "Security Architect"],
    },
    {
      number: 5,
      title: "Liderazgo",
      items: ["CISO (Chief Information Security Officer)"],
    },
  ],
};

export const heroSlide = {
  title: "Plan de Carrera en Ciberseguridad",
  subtitle: "Roadmap 2026",
  description:
    "La ciberseguridad es uno de los sectores tecnológicos con mayor crecimiento, debido al aumento de ataques como phishing, malware y robo de datos.",
  source: "NoboJobs — Cybersecurity Career Roadmap 2026",
};

export const timelineData = [
  {
    year: 1988,
    title: "Morris Worm",
    description: "Primer gusano de Internet que afectó miles de sistemas",
    icon: "bug",
  },
  {
    year: 2000,
    title: "ILOVEYOU Virus",
    description: "Virus que infectó millones de computadoras vía email",
    icon: "mail",
  },
  {
    year: 2007,
    title: "Ataque a Estonia",
    description: "Primer ciberataque a infraestructura nacional",
    icon: "globe",
  },
  {
    year: 2010,
    title: "Stuxnet",
    description: "Malware que atacó instalaciones nucleares de Irán",
    icon: "zap",
  },
  {
    year: 2013,
    title: "Snowden Revelations",
    description: "Exposición de programas de vigilancia masiva",
    icon: "eye",
  },
  {
    year: 2017,
    title: "WannaCry",
    description: "Ransomware que afectó hospitales y empresas globalmente",
    icon: "lock",
  },
  {
    year: 2020,
    title: "SolarWinds Hack",
    description: "Ataque a cadena de suministro que afectó agencias gubernamentales",
    icon: "server",
  },
  {
    year: 2023,
    title: "AI en Ciberseguridad",
    description: "Adopción masiva de IA para detección de amenazas",
    icon: "brain",
  },
  {
    year: 2026,
    title: "Era Post-Cuántica",
    description: "Nuevos sistemas de cifrado preparados para computadoras cuánticas",
    icon: "shield",
  },
];

export const trendsData = {
  title: "¿Qué está cambiando en ciberseguridad?",
  subtitle: "Tendencias para 2026",
  trends: [
    {
      title: "Inteligencia Artificial en Seguridad",
      description: "La IA ayuda a detectar ataques más rápido, pero también los atacantes usan IA",
      icon: "brain",
    },
    {
      title: "Seguridad Cuántica",
      description: "Nuevos sistemas de cifrado preparados para computadoras cuánticas",
      icon: "atom",
    },
    {
      title: "Identidades Digitales",
      description: "Deepfakes y robo de identidad representan nuevos desafíos",
      icon: "fingerprint",
    },
    {
      title: "Arquitectura Zero Trust",
      description: "Modelo donde nadie es confiable por defecto, todos deben verificarse",
      icon: "shield-check",
    },
  ],
};

export const teamsData = {
  title: "Principales áreas de trabajo",
  subtitle: "en ciberseguridad",
  teams: [
    {
      name: "Blue Team",
      color: "blue",
      role: "Defensa de sistemas",
      description: "Protege la infraestructura tecnológica de una empresa",
      responsibilities: [
        "Monitorear sistemas y redes",
        "Detectar ataques o intrusiones",
        "Responder a incidentes",
        "Fortalecer la seguridad",
        "Análisis forense digital",
      ],
      examples: ["Analista SOC", "Ingeniero de seguridad"],
    },
    {
      name: "Purple Team",
      color: "purple",
      role: "Mezcla ataque y defensa",
      description: "Actúa como puente entre equipos para optimizar la seguridad",
      responsibilities: [
        "Coordinar pruebas de seguridad",
        "Analizar resultados",
        "Mejorar la defensa",
        "Compartir conocimiento",
      ],
      examples: ["Purple Team Lead", "Security Architect"],
    },
    {
      name: "Seguridad Cloud",
      color: "cyan",
      role: "Protección en la nube",
      description: "Protege información y servicios en servidores remotos",
      responsibilities: [
        "Proteger datos en la nube",
        "Seguridad de aplicaciones web",
        "Gestión de servidores virtuales",
        "Control de accesos",
      ],
      examples: ["Cloud Security Analyst", "DevSecOps Engineer"],
    },
    {
      name: "AppSec",
      color: "green",
      role: "Seguridad de aplicaciones",
      description: "Detecta y corrige fallas en software antes de ser explotadas",
      responsibilities: [
        "Validación de datos",
        "Autenticación segura",
        "Actualizaciones y parches",
        "Pruebas de seguridad",
      ],
      examples: ["Application Security Engineer", "Pentester"],
    },
    {
      name: "Red Team",
      color: "red",
      role: "Ataque y ofensiva",
      description: "Simula ataques reales para encontrar vulnerabilidades antes que los atacantes",
      responsibilities: [
        "Pruebas de penetración (pentesting)",
        "Explotación de vulnerabilidades",
        "Ingeniería social controlada",
        "Análisis de vectores de ataque",
      ],
      examples: ["Pentester", "Ethical Hacker"],
    },
    {
      name: "GRC",
      color: "orange",
      role: "Gobernanza, Riesgo y Cumplimiento",
      description: "Organiza la seguridad a nivel estratégico y legal",
      responsibilities: [
        "Crear políticas de seguridad",
        "Realizar auditorías",
        "Cumplir regulaciones",
        "Gestionar riesgos",
      ],
      examples: ["Analista GRC", "Compliance Officer"],
    },
  ],
};

export const skillsData = {
  title: "Habilidades necesarias",
  subtitle: "Fundamentos y soft skills",
  technical: [
    { name: "Redes", level: 90 },
    { name: "Sistemas Operativos", level: 85 },
    { name: "Seguridad Informática", level: 95 },
    { name: "Programación Básica", level: 75 },
    { name: "Seguridad en la Nube", level: 80 },
    { name: "Gestión de Riesgos", level: 70 },
  ],
  soft: ["Comunicación", "Trabajo en equipo", "Pensamiento crítico", "Resolución de problemas"],
};

export const certificationsData = {
  title: "Certificaciones importantes",
  subtitle: "Credenciales reconocidas en la industria",
  certifications: [
    {
      name: "CompTIA Security+",
      level: "Entrada",
      description: "Certificación base para iniciar en ciberseguridad",
    },
    {
      name: "ISC2 Certified in Cybersecurity",
      level: "Entrada",
      description: "Certificación gratuita para principiantes",
    },
    {
      name: "CompTIA CySA+",
      level: "Intermedio",
      description: "Analista de ciberseguridad",
    },
    {
      name: "CISSP",
      level: "Avanzado",
      description: "Profesional certificado en seguridad de sistemas de información",
    },
  ],
};

export const rolesData = {
  title: "Puestos importantes",
  subtitle: "Roles profesionales en el sector",
  roles: [
    {
      title: "Analista SOC",
      description: "Monitorea alertas de seguridad y analiza incidentes",
      salary: "$60K - $90K",
      growth: "+31%",
    },
    {
      title: "Ingeniero de Seguridad",
      description: "Diseña sistemas de protección y gestiona vulnerabilidades",
      salary: "$90K - $140K",
      growth: "+28%",
    },
    {
      title: "Analista Cloud Security",
      description: "Protege sistemas en AWS, Azure o Google Cloud",
      salary: "$100K - $150K",
      growth: "+35%",
    },
    {
      title: "Analista GRC",
      description: "Controla que la empresa cumpla normas de seguridad",
      salary: "$70K - $110K",
      growth: "+24%",
    },
  ],
};

export const statsData = {
  title: "El mercado de ciberseguridad",
  subtitle: "Números que importan",
  stats: [
    { value: 3500000, label: "Puestos sin cubrir", suffix: "", prefix: "" },
    { value: 265, label: "Costo de cibercrimen", suffix: "B", prefix: "$" },
    { value: 31, label: "Crecimiento anual", suffix: "%", prefix: "+" },
    { value: 95, label: "Amenazas por error humano", suffix: "%", prefix: "" },
  ],
};

export const conclusionData = {
  title: "Conclusión",
  points: [
    "La ciberseguridad es una de las carreras tecnológicas con mayor crecimiento en el mundo",
    "Para trabajar en este campo es necesario aprender fundamentos de redes, sistemas y seguridad",
    "Las certificaciones y habilidades prácticas son esenciales para el desarrollo profesional",
    "Con el aumento de ataques informáticos, las organizaciones necesitan cada vez más profesionales",
  ],
  // cta: "El futuro de la seguridad digital está en tus manos",
};
