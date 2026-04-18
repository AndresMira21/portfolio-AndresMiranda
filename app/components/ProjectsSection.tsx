import Image from "next/image";
import { ArrowUpRight, GitBranch } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { useTranslations } from "next-intl";

export function ProjectsSection() {
  const t = useTranslations('projects');

  const projects = [
    {
      id: 1,
      title: t('items.legalconnect.title'),
      description: t('items.legalconnect.description'),
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
      title: t('items.finassistant.title'),
      description: t('items.finassistant.description'),
      technologies: ["Django", "APIs de IA"],
      github: "https://github.com/AndresMira21/AIFinAssistant.git",
      demo: "https://aifinassistant.onrender.com",
      image: "/AIFinAssistant.png",
    },
    {
      id: 3,
      title: t('items.clinicalrecords.title'),
      description: t('items.clinicalrecords.description'),
      technologies: ["PHP", "SQL", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/AndresMira21/intracond_HCE",
      image: "/intracondHC.png",
    },
  ];

  return (
    <section
      id="proyectos"
      className="section-shell px-6 py-10 md:px-10 md:py-12"
    >
      <SectionHeading
        kicker={t('kicker')}
        title={t('title')}
        description={t('description')}
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
              className="relative block aspect-16/10 overflow-hidden"
            >
              <Image
                src={project.image}
                alt={`Vista previa de ${project.title}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading={project.id === 2 ? "eager" : "lazy"}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/70 via-transparent to-transparent" />
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
                      {t('buttons.frontend')}
                    </a>
                    <a
                      href={project.githubBack}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary"
                    >
                      <GitBranch className="h-4 w-4" />
                      {t('buttons.backend')}
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
                    {t('buttons.github')}
                  </a>
                ) : null}

                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
                  >
                    {t('buttons.demo')}
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
          {t('moreProjects.heading')}
        </h3>
        <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">
          {t('moreProjects.p1')}
        </p>
        <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">
          {t('moreProjects.p2')}
        </p>
        <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">
          {t('moreProjects.p3')}
        </p>
      </div>
    </section>
  );
}
