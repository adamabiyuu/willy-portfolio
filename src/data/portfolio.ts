export const portfolio = {
  name: "Willy",
  email: "willy@example.com",
  location: "Indonesia",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
  roles: ["Frontend Developer", "Full Stack Developer", "React Developer"],
};

export const skills = ["React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML & CSS", "Node.js", "REST API", "Git & GitHub"];

export const projects = [
  {
    number: "01",
    name: "Personal Portfolio",
    category: "Web Development",
    description: "A responsive portfolio website to showcase profile, skills, and projects.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    image: "/images/projects/project1.png",
    link: "https://github.com/",
  },
  {
    number: "02",
    name: "Dashboard Application",
    category: "Frontend Development",
    description: "A modern dashboard interface designed to present information in a structured way.",
    technologies: ["React", "JavaScript", "CSS"],
    image: "/images/projects/dashboard.png",
    link: "https://github.com/",
  },
  {
    number: "03",
    name: "Full Stack Application",
    category: "Full Stack Development",
    description: "A web application featuring an interactive frontend and REST API integration.",
    technologies: ["React", "Node.js", "REST API"],
    image: "/images/projects/fullstack-app.png",
    link: "https://github.com/",
  },
  {
    number: "04",
    name: "E-Commerce Website",
    category: "Full Stack",
    description: "A responsive e-commerce website.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    image: "/images/projects/ecommerce.png",
    link: "https://github.com/username/repository",
  },
];

export const certificates = [
  {
    number: "01",
    name: "Data Science Bootcamp",
    category: "Data Science",
    description: "Successfully completed a Data Science Bootcamp covering essential concepts and practical applications.",
    technologies: ["Python", "SQL", "Data Analysis"],
    image: "/images/certificates/Certificate-Digital-Skola.png",
    link: "https://drive.google.com/file/d/1CqbYPMdQycTfWtD0NiCH3jjFdf_PHoc9/view?usp=drive_link",
  },
  {
    number: "02",
    name: "Certificate Name 2",
    category: "Data Science",
    description: "Description of the certificate and the skills acquired.",
    technologies: ["Python", "SQL", "Data Analysis"],
    image: "/images/certificates/certificate-2.png",
    link: "https://example.com/certificate-2",
  },
  {
    number: "03",
    name: "Certificate Name 3",
    category: "Programming",
    description: "Description of the certificate and the skills acquired.",
    technologies: ["Programming", "Problem Solving"],
    image: "/images/certificates/certificate-3.png",
    link: "https://example.com/certificate-3",
  },
  {
    number: "04",
    name: "Certificate Name 4",
    category: "Technology",
    description: "Description of the certificate and the skills acquired.",
    technologies: ["Technology", "Development"],
    image: "/images/certificates/certificate-4.png",
    link: "https://example.com/certificate-4",
  },
];

export const experiences = [
  {
    id: 1,
    year: "2026",
    duration: "September 25, 2026 – November 2, 2026 | Serang, Banten (Remote)",
    company: "CV Bank Sampah Digital",
    position: "Data Scientist Intern",
    description: [
      "Analyzed historical social media data to identify patterns and characteristics of high-performing content.",
      "Performed data cleaning and preprocessing to prepare datasets for analysis.",
      "Processed engagement metrics to measure and evaluate content performance.",
      "Analyzed content performance by content type, theme, and publication day through data visualization.",
      "Identified factors associated with content performance to provide data-driven publishing strategy recommendations.",
    ],
  },
  {
    id: 2,
    year: "2024",
    duration: "July 1, 2024 – July 31, 2024 | Bululawang, Malang (On-site)",
    company: "PT PG Rajawali I – Krebet Baru Sugar Factory",
    position: "Web Development Intern",
    description: [
      "Developed an employee leave management system to digitize administrative processes.",
      "Designed a database to manage employee records and leave requests systematically.",
      "Built an integrated workflow for leave submissions, verification, and approval.",
      "Implemented role-based access control for three user roles: Employees, HR Administrators, and Management.",
      "Automated leave letter generation in PDF format with QR Code integration.",
    ],
  },
];
