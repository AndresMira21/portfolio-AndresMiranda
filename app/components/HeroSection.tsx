"use client";

import { ArrowRight, Mail } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="section-shell relative overflow-hidden px-6 py-12 md:px-10 md:py-16"
    >
      <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-primary/12 via-primary/5 to-transparent" />
      <div className="absolute -right-14 top-12 h-40 w-40 rounded-full bg-primary/15 blur-3xl" />
      <div className="relative flex flex-col items-start gap-10 w-full max-w-7xl">
        <div className="w-full">
          <h1 className="text-5xl font-semibold tracking-tight text-balance text-foreground md:text-7xl">
            Hola, soy Andrés Miranda
          </h1>

          <div className="min-h-24 text-5xl md:text-8xl mb-8 font-black text-transparent bg-clip-text bg-linear-to-r from-[#4352f1] to-[#9003bb]">
            <TypeAnimation
              sequence={[
                "Full stack Developer",
                1000,
                "Back-end Developer",
                1000,
                "Front-end Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              cursor={false}
              repeat={Infinity}
            />
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#proyectos"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
            >
              Ver proyectos
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/80 px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
            >
              Contactarme
              <Mail className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-3 text-sm text-muted-foreground">
            <span className="rounded-full border border-border bg-background/70 px-4 py-2">
              Full stack
            </span>
            <span className="rounded-full border border-border bg-background/70 px-4 py-2">
              IA aplicada
            </span>
            <span className="rounded-full border border-border bg-background/70 px-4 py-2">
              Pasto, Colombia
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
