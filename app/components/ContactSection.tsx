'use client';

import { BriefcaseBusiness, GitBranch, Mail, MessageCircleMore } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useTranslations } from "next-intl";

export function ContactSection() {
  const t = useTranslations('contact');

  const contactItems = [
    {
      labelKey: "contacts.email",
      value: "andresestrada0630@gmail.com",
      href: "mailto:andresestrada0630@gmail.com",
      icon: Mail,
    },
    {
      labelKey: "contacts.github",
      value: "AndresMira21",
      href: "https://github.com/AndresMira21",
      icon: GitBranch,
    },
    {
      labelKey: "contacts.linkedin",
      value: "Andres Camilo Miranda Estrada",
      href: "https://www.linkedin.com/in/andres-camilo-miranda-estrada-364490296",
      icon: BriefcaseBusiness,
    },
    {
      labelKey: "contacts.whatsapp",
      value: "+57 3162740777",
      href: "https://wa.me/573162740777",
      icon: MessageCircleMore,
    },
  ];

  return (
    <section id="contacto" className="section-shell px-6 py-10 md:px-10 md:py-12">
      <SectionHeading
        kicker={t('kicker')}
        title={t('title')}
        description={t('description')}
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.labelKey}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-3xl border border-border bg-background/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_24px_50px_-38px_rgba(59,130,246,0.35)]"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    {t(item.labelKey)}
                  </span>
                  <span className="mt-1 block break-all text-base font-medium text-foreground group-hover:text-primary">
                    {item.value}
                  </span>
                </span>
              </a>
            );
          })}
        </div>

        <form className="rounded-[1.75rem] border border-border bg-background/65 p-6 md:p-8">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="md:col-span-1">
              <label className="mb-2 block text-sm font-medium text-foreground">
                {t('form.name')}
              </label>
              <Input
                type="text"
                placeholder={t('form.namePlaceholder')}
                className="h-12 rounded-2xl border-border bg-card px-4"
              />
            </div>
            <div className="md:col-span-1">
              <label className="mb-2 block text-sm font-medium text-foreground">
                {t('form.email')}
              </label>
              <Input
                type="email"
                placeholder={t('form.emailPlaceholder')}
                className="h-12 rounded-2xl border-border bg-card px-4"
              />
            </div>
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-foreground">
                {t('form.subject')}
              </label>
              <Input
                type="text"
                placeholder={t('form.subjectPlaceholder')}
                className="h-12 rounded-2xl border-border bg-card px-4"
              />
            </div>
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-foreground">
                {t('form.message')}
              </label>
              <Textarea
                placeholder={t('form.messagePlaceholder')}
                className="min-h-36 rounded-3xl border-border bg-card px-4 py-3"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
          >
            {t('form.submit')}
          </button>
        </form>
      </div>
    </section>
  );
}
