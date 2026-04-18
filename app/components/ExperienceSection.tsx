'use client';

import { SectionHeading } from "./SectionHeading";
import { useTranslations } from "next-intl";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  bullets: string[];
}

function TimelineItem({ item }: { item: ExperienceItem }) {
  return (
    <article className="relative rounded-[1.75rem] border border-border bg-background/70 p-6 shadow-[0_16px_60px_-42px_rgba(15,23,42,0.7)]">
      <div className="absolute left-8 top-8 h-4 w-4 rounded-full bg-primary md:left-[-2.55rem]" />
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
  const t = useTranslations('experience');

  const academicExperience: ExperienceItem[] = [
    {
      title: t('academic_items.engineering.title'),
      company: t('academic_items.engineering.company'),
      period: t('academic_items.engineering.period'),
      bullets: [],
    },
    {
      title: t('academic_items.technical.title'),
      company: t('academic_items.technical.company'),
      period: t('academic_items.technical.period'),
      bullets: [],
    },
    {
      title: t('academic_items.bachelor.title'),
      company: t('academic_items.bachelor.company'),
      period: t('academic_items.bachelor.period'),
      bullets: [],
    },
  ];

  const workExperience: ExperienceItem[] = [
    {
      title: t('work_items.support.title'),
      company: t('work_items.support.company'),
      period: t('work_items.support.period'),
      bullets: [
        t('work_items.support.bullets.preventive'),
        t('work_items.support.bullets.networks'),
        t('work_items.support.bullets.security'),
        t('work_items.support.bullets.support'),
      ],
    },
    {
      title: t('work_items.admin.title'),
      company: t('work_items.admin.company'),
      period: t('work_items.admin.period'),
      bullets: [
        t('work_items.admin.bullets.inventory'),
        t('work_items.admin.bullets.management'),
      ],
    },
  ];

  return (
    <section
      id="experiencia"
      className="section-shell px-6 py-10 md:px-10 md:py-12"
    >
      <SectionHeading
        kicker={t('kicker')}
        title={t('title')}
        description={t('description')}
      />

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {/* Columna Académica */}
        <div className="relative pl-8 md:pl-12">
          <h3 className="mb-6 text-xl font-semibold text-foreground">{t('sections.academic')}</h3>
          <div className="absolute bottom-0 left-3 top-2 w-px bg-linear-to-b from-primary via-primary/30 to-transparent md:left-4" />
          <div className="space-y-6">
            {academicExperience.map((item) => (
              <TimelineItem key={`${item.title}-${item.period}`} item={item} />
            ))}
          </div>
        </div>

        {/* Columna Laboral */}
        <div className="relative pl-8 md:pl-12">
          <h3 className="mb-6 text-xl font-semibold text-foreground">{t('sections.work')}</h3>
          <div className="absolute bottom-0 left-3 top-2 w-px bg-linear-to-b from-primary via-primary/30 to-transparent md:left-4" />
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
