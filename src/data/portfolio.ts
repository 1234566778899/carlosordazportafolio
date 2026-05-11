export const PROFILE = {
  name: "Carlos Ordaz Hoyos",
  handle: "carlos-ordaz-hoyos",
  role: "Full Stack Developer",
  level: "Semi-Senior Frontend",
  company: "Corsusa International",
  location: "Lima, Perú",
  years: "3+",
  status: "disponible para nuevos proyectos",
  intro:
    "Desarrollador peruano con más de 3 años construyendo productos de extremo a extremo: " +
    "del componente React al pipeline en la nube. Me gusta el código sobrio, los sistemas " +
    "que se mantienen solos y automatizar lo que aburre. Actualmente liderando frontend en " +
    "Corsusa International mientras exploro proyectos personales con BLE, IoT y herramientas dev.",
  email: "carlos.jesus.ordaz.hoyos@gmail.com",
  phone: "+51 904 435 631",
  linkedin: "linkedin.com/in/carlos-jesús-ordaz-hoyos-904576284",
  github: "github.com/1234566778899",
  site: "carlosordaz.vercel.app",
};

export const STATS = [
  { v: "3+", k: "años de experiencia", note: "desde 2022" },
  { v: "6+", k: "proyectos personales", note: "open source / privados" },
  { v: "3",  k: "empresas",            note: "Corsusa · Acomo · UPC" },
  { v: "4",  k: "certificaciones",     note: "IBM · MS · UTEC · Cibertec" },
];

export const SPECIALTIES = [
  {
    id: "fullstack",
    no: "01",
    title: "Full Stack",
    blurb:
      "Productos web completos con React/Next, Node/.NET y bases SQL. " +
      "Diseño la arquitectura, escribo el código y lo dejo deployado.",
    keywords: ["React", "Next.js", "Node", ".NET", "PostgreSQL"],
  },
  {
    id: "cloud",
    no: "02",
    title: "Cloud / DevOps",
    blurb:
      "Contenedores, pipelines CI/CD e infraestructura en AWS y Azure. " +
      "Despliegues reproducibles y monitoreo desde día uno.",
    keywords: ["AWS", "Docker", "GitHub Actions", "Vercel", "Nginx"],
  },
  {
    id: "automation",
    no: "03",
    title: "Automatización",
    blurb:
      "Scripts, bots y workflows que devuelven horas a las personas. " +
      "Integraciones con APIs, scraping ético y RPA ligero.",
    keywords: ["Python", "n8n", "Selenium", "Cron", "Webhooks"],
  },
];

export const TIMELINE = [
  {
    co: "Corsusa International",
    role: "Semi-Senior Frontend Developer",
    range: "2024 — presente",
    place: "Lima · Híbrido",
    bullets: [
      "Liderando refactor del frontend hacia Next.js 14 con Server Components.",
      "Diseño del sistema de componentes interno y librería de iconografía.",
      "Mentoría a 2 frontend juniors; revisiones de PR y guías de estilo.",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    current: true,
  },
  {
    co: "Acomo Negocios Financieros",
    role: "Full Stack Developer",
    range: "2022 — 2024",
    place: "Lima · Remoto",
    bullets: [
      "Construí el portal de clientes y APIs internas para flujos crediticios.",
      "Integré pasarelas de pago locales y procesos de validación KYC.",
      "Reduje 40% el tiempo de aprobación con automatizaciones en Python.",
    ],
    tags: ["React", "Node", "PostgreSQL", "Docker"],
    current: false,
  },
  {
    co: "Universidad Peruana de Ciencias Aplicadas",
    role: "Tutor Académico — Programación",
    range: "2021 — 2022",
    place: "UPC · Lima",
    bullets: [
      "Tutorías 1-a-1 y grupales para cursos de algoritmos y POO.",
      "Diseño de material complementario en GitHub para 60+ alumnos.",
    ],
    tags: ["Java", "C++", "Python"],
    current: false,
  },
];

export const EDUCATION = {
  degree: {
    school: "Universidad Peruana de Ciencias Aplicadas (UPC)",
    title: "Ingeniería de Software",
    range: "2020 — 2025",
    note: "Tesis: arquitecturas event-driven aplicadas a fintech",
  },
  certs: [
    { issuer: "IBM",       title: "Full Stack Software Developer",  year: "2024", code: "IBM-FS24" },
    { issuer: "Microsoft", title: "Azure Fundamentals (AZ-900)",    year: "2023", code: "AZ-900" },
    { issuer: "UTEC",      title: "Cloud Computing & DevOps",       year: "2023", code: "UTEC-CD23" },
    { issuer: "Cibertec",  title: "Desarrollo Móvil con Flutter",   year: "2022", code: "CTC-FLT" },
  ],
};

export const PROJECTS = [
  {
    no: "001",
    name: "FLYFAR",
    blurb: "Plataforma de búsqueda y reservas de vuelos con comparador de tarifas en tiempo real.",
    role: "Full Stack · Lead",
    year: "2025",
    status: "live",
    tags: ["Next.js", "Node", "PostgreSQL", "Stripe"],
    repo: "github.com/carlosordaz/flyfar",
  },
  {
    no: "002",
    name: "WASYPAY",
    blurb: "Wallet digital con QR interoperable y split de pagos entre comercios.",
    role: "Backend + Móvil",
    year: "2024",
    status: "beta",
    tags: ["React Native", "NestJS", "MongoDB"],
    repo: "github.com/carlosordaz/wasypay",
  },
  {
    no: "003",
    name: "Preguntas Anónimas",
    blurb: "App social de mensajes anónimos con moderación asistida por LLM.",
    role: "Full Stack",
    year: "2024",
    status: "live",
    tags: ["Next.js", "Supabase", "OpenAI"],
    repo: "github.com/carlosordaz/preguntas",
  },
  {
    no: "004",
    name: "SmartBuy",
    blurb: "Asistente de compras inteligente con historial, comparador y alertas de precio.",
    role: "Full Stack",
    year: "2023",
    status: "archivado",
    tags: ["Vue", "Express", "MySQL", "Telegram Bot"],
    repo: "github.com/carlosordaz/smartbuy",
  },
  {
    no: "005",
    name: "Midoc Virtual",
    blurb: "Plataforma de telemedicina con historia clínica electrónica y videoconsulta.",
    role: "Frontend Lead",
    year: "2023",
    status: "live",
    tags: ["React", ".NET", "SignalR", "Azure"],
    repo: "privado",
  },
  {
    no: "006",
    name: "BLE Companion",
    blurb: "App móvil que descubre, empareja y opera dispositivos BLE con dashboard de telemetría.",
    role: "Móvil + Firmware",
    year: "2026",
    status: "en desarrollo",
    tags: ["Flutter", "BLE", "Rust", "MQTT"],
    repo: "github.com/carlosordaz/ble-companion",
  },
];

export const STACK = [
  {
    id: "frontend",
    no: "01",
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Vue 3", "Tailwind", "Astro", "Radix", "Framer Motion"],
  },
  {
    id: "backend",
    no: "02",
    label: "Backend",
    items: ["Node.js", "Express", "NestJS", ".NET 8", "Python", "FastAPI", "GraphQL"],
  },
  {
    id: "db",
    no: "03",
    label: "Bases de Datos",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase", "Prisma"],
  },
  {
    id: "cloud",
    no: "04",
    label: "Cloud / DevOps",
    items: ["AWS", "Azure", "Docker", "GitHub Actions", "Vercel", "Nginx", "Terraform"],
  },
  {
    id: "mobile",
    no: "05",
    label: "Móvil",
    items: ["React Native", "Flutter", "Capacitor", "Expo", "BLE"],
  },
  {
    id: "tools",
    no: "06",
    label: "Herramientas",
    items: ["Git", "Figma", "Postman", "Linux", "n8n", "Jira", "Notion"],
  },
];

export const NAV = [
  { id: "sobre-mi",    label: "sobre-mi" },
  { id: "trayectoria", label: "trayectoria" },
  { id: "educacion",   label: "educacion" },
  { id: "proyectos",   label: "proyectos" },
  { id: "stack",       label: "stack" },
  { id: "contacto",    label: "contacto" },
];
