import { SectionHeading } from "./SectionHeading";

const skillGroups = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "TailwindCSS"],
  },
  {
    category: "Backend",
    skills: ["Spring Boot", "Django", "Node.js", "PostgreSQL", "PHP"],
  },
  {
    category: "Herramientas",
    skills: ["Git", "GitHub", "Docker", "VSCode"],
  },
  {
    category: "Aprendiendo",
    skills: ["Java avanzado", "MongoDB"],
  },
];

export function AboutSection() {
  return (
    <section id="acerca" className="section-shell px-6 py-10 md:px-10 md:py-12">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr]">
        <div className="space-y-8">
          <SectionHeading
            kicker="Acerca"
            title="Construyo experiencias web limpias, útiles y con intención."
            description="Una base sólida en desarrollo full stack y una curiosidad constante por sistemas modernos, automatización e inteligencia artificial aplicada."
          />

          <div className="space-y-5 text-base leading-8 text-muted-foreground md:text-lg">
            <p>
              Soy estudiante de Ingeniería de Software con enfoque en desarrollo
              full stack y soluciones basadas en inteligencia artificial. Me
              caracterizo por ser autodidacta, proactivo y orientado a
              resultados.
            </p>
            <p>
              He trabajado en diversos proyectos académicos y personales que me
              han permitido desarrollar habilidades sólidas en programación,
              diseño de sistemas y resolución de problemas.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-border bg-background/70 p-6">
            <h3 className="text-lg font-semibold text-foreground">
              Me interesa especialmente
            </h3>
            <ul className="mt-4 grid gap-3 text-sm text-muted-foreground md:grid-cols-2 md:text-base">
              <li className="rounded-2xl border border-border bg-card/80 px-4 py-3">
                Desarrollo de software escalable
              </li>
              <li className="rounded-2xl border border-border bg-card/80 px-4 py-3">
                Inteligencia artificial aplicada
              </li>
              <li className="rounded-2xl border border-border bg-card/80 px-4 py-3">
                Sistemas web modernos
              </li>
              <li className="rounded-2xl border border-border bg-card/80 px-4 py-3">
                Automatización de procesos
              </li>
            </ul>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-border bg-background/60 p-6 md:p-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Skills / Tecnologías
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-foreground">
              Stack actual y siguiente paso
            </h3>
          </div>

          <div className="mt-8 space-y-6">
            {skillGroups.map((group) => (
              <div key={group.category}>
                <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {group.category}
                </h4>
                <div className="mt-3 flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
