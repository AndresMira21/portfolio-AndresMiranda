import { SectionHeading } from "./SectionHeading";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  bullets: string[];
}

const academicExperience: ExperienceItem[] = [
  {
    title: "Ingeniería de Software",
    company: "Universidad Cooperativa de Colombia - Campus Pasto",
    period: "2024 - Presente",
    bullets: [],
  },
  {
    title: "Técnico Laboral en Soporte, Sistemas e Informática",
    company: "CINAR Sistemas",
    period: "2023 - 2025",
    bullets: [],
  },
  {
    title: "Bachiller Académico",
    company: "Instituto San Francisco de Asís",
    period: "Finalizado 2023",
    bullets: [],
  },
];

const workExperience: ExperienceItem[] = [
  {
    title: "Auxiliar en Soporte y Sistemas",
    company: "Politécnico San Juan de Pasto",
    period: "Feb 2025 - Jun 2025",
    bullets: [
      "Mantenimientos preventivos y correctivos a equipos de cómputo",
      "Instalación/configuración de redes cableadas e inalámbricas",
      "Instalación y configuración de cámaras de seguridad",
      "Soporte a usuarios en plataformas digitales",
    ],
  },
  {
    title: "Auxiliar Administrativo",
    company: "Mundo Click",
    period: "2018 - 2020",
    bullets: [
      "Monitoreo y control de inventario de materiales y productos",
      "Organización y gestión de recursos administrativos",
    ],
  },
];

function TimelineItem({ item }: { item: ExperienceItem }) {
  return (
    <article className="relative rounded-[1.75rem] border border-border bg-background/70 p-6 shadow-[0_16px_60px_-42px_rgba(15,23,42,0.7)]">
      <div className="absolute left-[-2rem] top-8 h-4 w-4 rounded-full bg-primary md:left-[-2.55rem]" />
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
        {item.period}
      </p>
      <h3 className="mt-3 text-2xl font-semibold text-foreground">
        {item.title}
      </h3>
      <p className="mt-2 text-base font-medium text-muted-foreground">
        {item.company}
      </p>
      {item.bullets.length ? (
        <ul className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground md:text-base">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

export function ExperienceSection() {
  return (
    <section
      id="experiencia"
      className="section-shell px-6 py-10 md:px-10 md:py-12"
    >
      <SectionHeading
        kicker="Experiencia"
        title="Una trayectoria que mezcla formación técnica, academia y soporte real."
        description="Un recorrido enfocado en sistemas, soporte tecnológico y aprendizaje continuo, con experiencia académica y laboral que aterriza en proyectos funcionales."
      />

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {/* Columna Académica */}
        <div className="relative pl-8 md:pl-12">
          <h3 className="mb-6 text-xl font-semibold text-foreground">Formación Académica</h3>
          <div className="absolute bottom-0 left-3 top-2 w-px bg-gradient-to-b from-primary via-primary/30 to-transparent md:left-4" />
          <div className="space-y-6">
            {academicExperience.map((item) => (
              <TimelineItem key={`${item.title}-${item.period}`} item={item} />
            ))}
          </div>
        </div>

        {/* Columna Laboral */}
        <div className="relative pl-8 md:pl-12">
          <h3 className="mb-6 text-xl font-semibold text-foreground">Experiencia Laboral</h3>
          <div className="absolute bottom-0 left-3 top-2 w-px bg-gradient-to-b from-primary via-primary/30 to-transparent md:left-4" />
          <div className="space-y-6">
            {workExperience.map((item) => (
              <TimelineItem key={`${item.title}-${item.period}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
