import Image from "next/image";
import { ArrowUpRight, GitBranch } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const projects = [
  {
    id: 1,
    title: "LegalConnect",
    description:
      "Plataforma tecnológica orientada al apoyo del trabajo legal. Permite analizar cláusulas contractuales, identificar posibles riesgos y facilitar la toma de decisiones informadas mediante el uso de inteligencia artificial.",
    technologies: ["Java", "Spring Boot", "React", "PostgreSQL", "APIs REST"],
    githubFront:
      "https://github.com/AndresMira21/analyzer-contract-frontend.git",
    githubBack:
      "https://github.com/AndresMira21/analyzer-contract-backend.git",
    demo: "https://analyzer-contract-frontend-kohl.vercel.app",
    image: "/LegalConnect.png",
  },
  {
    id: 2,
    title: "FinAssistant",
    description:
      "Aplicación basada en inteligencia artificial diseñada para resolver problemas de matemáticas financieras. Permite realizar cálculos complejos, explicar procedimientos paso a paso y apoyar el aprendizaje en temas financieros de manera interactiva.",
    technologies: ["Django", "APIs de IA"],
    github: "https://github.com/AndresMira21/AIFinAssistant.git",
    demo: "https://aifinassistant.onrender.com",
    image: "/AIFinAssistant.png",
  },
  {
    id: 3,
    title: "Sistema de Historia Clínica",
    description:
      "Sistema web para la gestión de historias clínicas digitales, que permite almacenar información de pacientes, registros médicos, consentimientos informados y resultados de pruebas. Diseñado para mejorar la organización, seguridad y acceso a la información en entornos de salud.",
    technologies: ["PHP", "SQL", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/AndresMira21/intracond_HCE",
    image: "/intracondHC.png",
  },
];

export function ProjectsSection() {
  return (
    <section
      id="proyectos"
      className="section-shell px-6 py-10 md:px-10 md:py-12"
    >
      <SectionHeading
        kicker="Proyectos"
        title="Proyectos donde convierto ideas en productos funcionales."
        description="Trabajo con interfaces claras, backend sólido y una capa de producto pensada para problemas reales en legaltech, salud y educación financiera."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group overflow-hidden rounded-[1.75rem] border border-border bg-background/70 shadow-[0_16px_60px_-42px_rgba(15,23,42,0.75)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_-38px_rgba(59,130,246,0.28)]"
          >
            <a
              href={
                project.demo ||
                project.githubFront ||
                project.githubBack ||
                project.github
              }
              target="_blank"
              rel="noopener noreferrer"
              className="relative block aspect-[16/10] overflow-hidden"
            >
              <Image
                src={project.image}
                alt={`Vista previa de ${project.title}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            </a>

            <div className="space-y-5 p-6">
              <div>
                <h3 className="text-2xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground md:text-base">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-primary"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {project.githubFront ? (
                  <>
                    <a
                      href={project.githubFront}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary"
                    >
                      <GitBranch className="h-4 w-4" />
                      GitHub Frontend
                    </a>
                    <a
                      href={project.githubBack}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary"
                    >
                      <GitBranch className="h-4 w-4" />
                      GitHub Backend
                    </a>
                  </>
                ) : project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary"
                  >
                    <GitBranch className="h-4 w-4" />
                    GitHub
                  </a>
                ) : null}

                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
                  >
                    Demo
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-[1.75rem] border border-primary/20 bg-primary/8 p-6 md:p-8">
        <h3 className="text-2xl font-semibold text-foreground">
          Otros proyectos académicos y personales
        </h3>
        <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">
          Además de los proyectos principales, he desarrollado múltiples
          aplicaciones y scripts que abarcan desde CRUD completos hasta
          automatizaciones de tareas. En el ámbito académico construí sistemas
          como gestores de biblioteca y plataformas de encuestas, aplicando
          arquitectura MVC, autenticación de usuarios y bases de datos
          relacionales.
        </p>
        <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">
          En proyectos independientes he creado CRUDs funcionales (productos,
          contactos) con interfaces limpias y lógica de negocio, así como
          scripts de automatización en Python y Node.js para generación de
          reportes, envío de correos y procesamiento de datos.
        </p>
        <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">
          Estos trabajos consolidan habilidades en desarrollo full-stack,
          manejo de bases de datos, validaciones y eficiencia en tareas
          repetitivas.
        </p>
      </div>
    </section>
  );
}
