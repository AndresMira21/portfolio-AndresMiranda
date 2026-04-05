import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="section-shell relative overflow-hidden px-6 py-12 md:px-10 md:py-16"
    >
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/12 via-primary/5 to-transparent" />
      <div className="absolute -right-14 top-12 h-40 w-40 rounded-full bg-primary/15 blur-3xl" />
      <div className="relative grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="max-w-3xl">
          <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-balance text-foreground md:text-7xl">
            Hola, soy Andrés Miranda
          </h1>

          <div className="relative mt-8 max-w-28xl overflow-hidden rounded-3xl border border-border/70 bg-background/70 px-5 py-8 text-8xl font-semibold text-foreground shadow-[0_20px_60px_-35px_rgba(15,23,42,0.35)] md:text-9xl">
            <span className="role-fade">Front-end</span>
            <span className="role-fade">Back-end</span>
            <span className="role-fade">Full Stack</span>
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

        <div className="relative mx-auto flex w-full max-w-sm justify-center lg:justify-end lg:-mr-6">
          <div className="absolute inset-4 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-full border-4 border-primary/80 bg-card p-3 shadow-[0_30px_80px_-35px_rgba(59,130,246,0.6)]">
            <Image
              src="/profile-portrait.svg"
              alt="Retrato ilustrado de Andrés Miranda"
              width={360}
              height={360}
              className="h-[220px] w-[220px] rounded-full object-cover md:h-[280px] md:w-[280px]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
