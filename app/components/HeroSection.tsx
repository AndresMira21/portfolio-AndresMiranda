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
          <span className="section-kicker">Andrés Camilo Miranda Estrada</span>
          <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-balance text-foreground md:text-7xl">
            Hola, soy Andrés Miranda
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
            Estudiante de Ingeniería de Software apasionado por el desarrollo
            web, la inteligencia artificial y la creación de soluciones
            tecnológicas innovadoras.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
            Me especializo en el desarrollo de aplicaciones modernas,
            combinando backend robusto y frontend interactivo. Me interesa
            especialmente aplicar la tecnología para resolver problemas reales
            en áreas como finanzas, salud y sistemas inteligentes.
          </p>
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

        <div className="relative mx-auto flex w-full max-w-md justify-center">
          <div className="absolute inset-4 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-full border-4 border-primary/80 bg-card p-3 shadow-[0_30px_80px_-35px_rgba(59,130,246,0.6)]">
            <Image
              src="/profile-portrait.svg"
              alt="Retrato ilustrado de Andrés Miranda"
              width={420}
              height={420}
              className="h-[260px] w-[260px] rounded-full object-cover md:h-[340px] md:w-[340px]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
