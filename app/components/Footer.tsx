import { BriefcaseBusiness, GitBranch, Mail, MessageCircleMore } from "lucide-react";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/AndresMira21",
    icon: GitBranch,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/andres-camilo-miranda-estrada-364490296",
    icon: BriefcaseBusiness,
  },
  {
    label: "Email",
    href: "mailto:andresestrada0630@gmail.com",
    icon: Mail,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/573162740777",
    icon: MessageCircleMore,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border/80 bg-background/90 px-4 py-10 backdrop-blur md:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 rounded-[2rem] border border-border/80 bg-card/70 px-6 py-8 shadow-[0_24px_70px_-45px_rgba(15,23,42,0.8)] md:flex-row md:items-end md:justify-between md:px-8">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            Andrés Miranda
          </p>
          <p className="max-w-md text-sm leading-7 text-muted-foreground md:text-base">
            Estudiante de Ingeniería de Software con interés en desarrollo web,
            inteligencia artificial y soluciones tecnológicas innovadoras.
          </p>
          <p className="text-sm text-muted-foreground">
            andresestrada0630@gmail.com • +57 3162740777 • Pasto, Colombia
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/70 text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                  aria-label={item.label}
                  title={item.label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <a href="#inicio" className="hover:text-primary">Inicio</a>
            <a href="#acerca" className="hover:text-primary">Acerca</a>
            <a href="#experiencia" className="hover:text-primary">Experiencia</a>
            <a href="#proyectos" className="hover:text-primary">Proyectos</a>
            <a href="#contacto" className="hover:text-primary">Contacto</a>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 Andrés Miranda. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
