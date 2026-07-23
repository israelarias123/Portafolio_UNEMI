import { Project, SkillCategory, StatItem } from './types';

export const HERO_DATA = {
  title: "Information Technology Student & Web Developer",
  description: "Estudiante de 6to semestre de Tecnologías de la Información en Línea en la UNEMI. Enfocado en desarrollo frontend, arquitectura de sistemas y resolución de problemas lógicos through clean code.",
  githubUrl: "https://github.com/israelarias123/israelarias123",
  email: "gariase2@unemi.edu.ec",
  location: "Ecuador (UNEMI - Modalidad en Línea)",
  avatarUrl: "/images/avatar.png",
};

export const STATS_DATA: StatItem[] = [
  {
    number: "6th",
    label: "Semester",
    subtext: "Carrera TI en Línea"
  },
  {
    number: "12+",
    label: "Repositories",
    subtext: "Proyectos en GitHub"
  },
  {
    number: "3",
    label: "Core Languages",
    subtext: "JavaScript, Python, SQL"
  },
  {
    number: "UNEMI",
    label: "University",
    subtext: "Milagro, Ecuador"
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "unemi-schedule-scraper",
    title: "UNEMI Schedule Scraper",
    category: "CLI Tool & Automation",
    tags: ["Python", "BeautifulSoup", "CLI"],
    description: "Herramienta CLI para automatizar la extracción, parsing y exportación estructurada de horarios universitarios desde la plataforma académica.",
    longDescription: "Script desarrollado en Python que autentica peticiones HTTP para extraer el calendario de clases y horarios de asignaturas del sistema SGA UNEMI. Estructura la información procesada en formatos JSON y CSV para su consulta rápida en la terminal.",
    image: "/images/schedule-scraper.png",
    githubUrl: "https://github.com/israelarias123/israelarias123",
    highlights: [
      "Parsing de HTML mediante BeautifulSoup y Requests",
      "Exportación automatizada a formatos JSON y CSV",
      "Manejo de errores HTTP y sesiones persistentes",
      "Interfaz de línea de comandos ligera"
    ],
    codeSnippet: `import requests
from bs4 import BeautifulSoup
import json

def fetch_schedule(session_cookie):
    headers = {'User-Agent': 'UNEMI-CLI-Scraper/1.0'}
    response = requests.get('https://sga.unemi.edu.ec/horario', headers=headers)
    soup = BeautifulSoup(response.content, 'html.parser')
    
    schedule = []
    for row in soup.select('table.schedule-grid tr'):
        cols = [c.text.strip() for c in row.find_all('td')]
        if len(cols) >= 4:
            schedule.append({'materia': cols[0], 'aula': cols[1], 'hora': cols[2]})
    return json.dumps(schedule, indent=2)`
  },
  {
    id: "inventory-management-api",
    title: "Inventory Management API",
    category: "Backend Services",
    tags: ["Node.js", "Express", "SQL"],
    description: "API RESTful para el control de inventarios, gestión de stock, operaciones CRUD y autenticación con roles de usuario.",
    longDescription: "Servidor backend construido en Node.js y Express con integración a base de datos relacional SQL. Implementa arquitectura por capas (Controladores, Servicios, Modelos) y autenticación basada en tokens JWT.",
    image: "/images/inventory-api.png",
    githubUrl: "https://github.com/israelarias123/israelarias123",
    highlights: [
      "Endpoints RESTful para productos, categorías y proveedores",
      "Autenticación segura con JWT y bcrypt",
      "Consultas SQL optimizadas con transacciones",
      "Middleware de validación de entradas HTTP"
    ],
    codeSnippet: `const express = require('express');
const router = express.Router();
const db = require('../config/database');

router.get('/products', async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;
    const query = 'SELECT id, name, price, stock FROM products LIMIT ? OFFSET ?';
    const [rows] = await db.execute(query, [parseInt(limit), offset]);
    res.json({ success: true, data: rows });
  } catch (error) {
    res.status(500).json({ error: 'Database query execution failed' });
  }
});`
  },
  {
    id: "student-portal-ui",
    title: "Student Portal UI",
    category: "Frontend Application",
    tags: ["React", "Tailwind CSS", "Fetch API"],
    description: "Interfaz web responsiva de alto contraste para consulta de notas, créditos acumulados y calendario académico.",
    longDescription: "Aplicación de una sola página desarrollada en React y Tailwind CSS enfocada en la usabilidad y velocidad de carga. Incluye tableros de rendimiento académico, cálculo automático de promedios y estado de materias en curso.",
    image: "/images/student-portal-ui.png",
    githubUrl: "https://github.com/israelarias123/israelarias123",
    highlights: [
      "Componentes modulares reutilizables en React",
      "Diseño adaptable para dispositivos móviles y escritorio",
      "Consumo de datos vía Fetch API con manejo de estado local",
      "Sin dependencias innecesarias de UI para maximizar rendimiento"
    ],
    codeSnippet: `export function GradeCalculator({ grades }: { grades: number[] }) {
  const average = grades.reduce((a, b) => a + b, 0) / grades.length;
  const isPassing = average >= 70;

  return (
    <div className="p-4 bg-[#141418] border border-[#2A2A35] rounded-md">
      <span className="text-[#A0A0B0] text-sm">Promedio General:</span>
      <p className={\`text-2xl font-bold \${isPassing ? 'text-[#00E5FF]' : 'text-red-400'}\`}>
        {average.toFixed(2)} / 100
      </p>
    </div>
  );
}`
  },
  {
    id: "github-profile-fetcher",
    title: "GitHub Profile Fetcher",
    category: "Web Application",
    tags: ["JavaScript", "REST API", "DOM"],
    description: "Aplicación cliente ligera para inspección de métricas de repositorios y actividades en la API pública de GitHub.",
    longDescription: "Herramienta desarrollada en JavaScript vainilla que interactúa directamente con la API REST v3 de GitHub. Muestra estadísticas de lenguajes utilizados, forks, estrellas y commits recientes sin librerías externas.",
    image: "/images/github-profile-fetcher.png",
    githubUrl: "https://github.com/israelarias123/israelarias123",
    highlights: [
      "Manipulación eficiente del DOM en JS Nativo",
      "Peticiones asíncronas optimizadas con async/await",
      "Manejo de límites de tasa de API y estados de carga",
      "Formato limpio de fechas y contadores numéricos"
    ],
    codeSnippet: `async function fetchGithubStats(username) {
  const res = await fetch(\`https://api.github.com/users/\${username}/repos?per_page=100\`);
  if (!res.ok) throw new Error('Usuario no encontrado');
  const repos = await res.json();
  
  const languages = repos.reduce((acc, repo) => {
    if (repo.language) {
      acc[repo.language] = (acc[repo.language] || 0) + 1;
    }
    return acc;
  }, {});
  return { totalRepos: repos.length, languages };
}`
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "Frontend Development",
    summary: "Construcción de interfaces accesibles, estructuración semántica y estilos de alto rendimiento.",
    technologies: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Tailwind CSS", "DOM API"],
    iconName: "Code2"
  },
  {
    title: "Backend Architecture",
    summary: "Desarrollo de APIs RESTful, lógica de negocio y procesamiento de datos en el servidor.",
    technologies: ["Node.js", "Express", "Python", "REST APIs", "Web Scraping", "Middleware"],
    iconName: "Server"
  },
  {
    title: "Database Design",
    summary: "Modelado relacional, consultas SQL estructuradas y almacenamiento persistente.",
    technologies: ["SQL", "PostgreSQL Basics", "MongoDB Basics", "Data Normalization", "CRUD Operations"],
    iconName: "Database"
  }
];

export const ACADEMIC_INFO = {
  institution: "Universidad Estatal de Milagro (UNEMI)",
  program: "Ingeniería en Tecnologías de la Información (Modalidad en Línea)",
  currentSemester: "6to Semestre",
  academicLocation: "Milagro, Guayas, Ecuador",
  coursesCompleted: [
    "Programación Orientada a Objetos",
    "Estructura de Datos",
    "Bases de Datos Relacionales",
    "Redes de Computadoras",
    "Sistemas Operativos",
    "Desarrollo Web"
  ]
};
