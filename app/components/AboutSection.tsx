import { ca } from "react-day-picker/locale";
import { SectionHeading } from "./SectionHeading";
import { useTranslations } from "next-intl";

export function AboutSection() {
  const t = useTranslations('about');

  const skillGroups = [
    {
      key: "frontend",
      title: t('skills.categories.frontend'),
      skills: ["React", "Next.js", "TypeScript", "TailwindCSS"],
    },
    {
      key: "backend",
      title: t('skills.categories.backend'),
      skills: ["Spring Boot", "Django", "Node.js", "PostgreSQL", "PHP"],
    },
    {
      key: "tools",
      title: t('skills.categories.tools'),
      skills: ["Git", "GitHub", "Docker", "VSCode"],
    },
    {
      key: "learning",
      title: t('skills.categories.learning'),
      skills: ["C#", "Unity"],
    },
  ];

  return (
    <section id="acerca" className="section-shell px-6 py-10 md:px-10 md:py-12">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr]">
        <div className="space-y-8">
          <SectionHeading
            kicker={t('kicker')}
            title={t('title')}
            description={t('description')}
          />

          <div className="space-y-5 text-base leading-8 text-muted-foreground md:text-lg">
            <p>
              {t('content.p1')}
            </p>
            <p>
              {t('content.p2')}
            </p>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-border bg-background/60 p-6 md:p-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              {t('skills.subtitle')}
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-foreground">
              {t('skills.title')}
            </h3>
          </div>

          <div className="mt-8 space-y-6">
            {skillGroups.map((group) => (
              <div key={group.key}>
                <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {t(`skills.categories.${group.key}`)}
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
