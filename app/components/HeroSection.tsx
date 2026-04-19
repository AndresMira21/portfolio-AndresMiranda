"use client";

import { ArrowRight, Mail } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section
      id="inicio"
      className="section-shell relative overflow-hidden px-6 py-12 md:px-10 md:py-16"
    >
      <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-primary/12 via-primary/5 to-transparent" />
      <div className="absolute -right-14 top-12 h-40 w-40 rounded-full bg-primary/15 blur-3xl" />

      <div className="relative flex flex-col-reverse items-center gap-10 md:flex-row md:items-center md:justify-between w-full max-w-7xl">
        
        {/* Texto izquierda */}
        <div className="w-full md:flex-1">
          <p className="text-base font-medium text-muted-foreground mb-1">
            {t('greeting.pre')}
          </p>
          <h1 className="text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Andrés Miranda
          </h1>

          <div className="min-h-14 text-4xl md:text-6xl mb-8 font-black text-transparent bg-clip-text bg-linear-to-r from-[#4352f1] to-[#9003bb]">
            <TypeAnimation
              sequence={[
                t('roles.fullStack'),
                1000,
                t('roles.backend'),
                1000,
                t('roles.frontend'),
                1000,
              ]}
              wrapper="span"
              speed={50}
              cursor={true}
              repeat={Infinity}
            />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#proyectos"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
            >
              {t('cta.projects')}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/80 px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
            >
              {t('cta.contact')}
              <Mail className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-muted-foreground">
            <span className="rounded-full border border-border bg-background/70 px-4 py-2">
              {t('tags.fullStack')}
            </span>
            <span className="rounded-full border border-border bg-background/70 px-4 py-2">
              {t('tags.ai')}
            </span>
            <span className="rounded-full border border-border bg-background/70 px-4 py-2">
              {t('tags.location')}
            </span>
          </div>
        </div>

        {/* Foto derecha */}
        <div className="shrink-0">
          <div className="relative h-52 w-52 md:h-64 md:w-64 lg:h-72 lg:w-72">
            <div className="absolute inset-0 rounded-full bg-linear-to-r from-[#4352f1] to-[#9003bb] p-0.75">
              <div className="relative h-full w-full rounded-full overflow-hidden bg-background">
                <Image
                  src="/profile2.jpg"
                  alt="Andrés Miranda"
                  fill
                  className="object-cover rounded-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}