"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  message: string;
  company?: string;
}

export function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
      id: 1,
      name: "Andrés Miranda",
      role: "Full-stack Developer",
      company: "Proyecto Personal",
      message:
        "Excelente experiencia colaborando y resolviendo retos con enfoque práctico. Recomendado para equipos ágiles.",
    },
    {
      id: 2,
      name: "María Pérez",
      role: "Ingeniera de Software",
      company: "Proyectos Académicos",
      message:
        "Implementó soluciones robustas con buena arquitectura y documentación clara. Muy profesional.",
    },
    {
      id: 3,
      name: "Carlos Torres",
      role: "Analista de Datos",
      company: "Scripting y Automatización",
      message:
        "Generó scripts eficientes para automatización y reportes. Gran calidad en código y eficiencia.",
    },
  ]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [isPaused, setIsPaused] = useState(false);

  const activeTestimonial = testimonials[activeIndex] || testimonials[0];
  const dots = useMemo(
    () => testimonials.map((testimonial, index) => ({ id: testimonial.id, index })),
    [testimonials],
  );

  useEffect(() => {
    if (isPaused || testimonials.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 4500);

    return () => window.clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim() || !role.trim() || !message.trim()) {
      return;
    }

    const nextEntry: Testimonial = {
      id: testimonials.length ? Math.max(...testimonials.map((item) => item.id)) + 1 : 1,
      name: name.trim(),
      role: role.trim(),
      company: company.trim() || "Independiente",
      message: message.trim(),
    };

    setTestimonials((prev) => [...prev, nextEntry]);
    setName("");
    setRole("");
    setCompany("");
    setMessage("");
    setActiveIndex(testimonials.length);
  };

  return (
    <section
      id="testimonios"
      className="section-shell px-6 py-10 md:px-10 md:py-12"
    >
      <SectionHeading
        kicker="Testimonios"
        title="Opiniones que hablan de colaboración, ejecución y criterio técnico."
        description="Mantengo esta sección como un espacio vivo para registrar feedback de proyectos personales y académicos."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div
          className="rounded-[1.75rem] border border-border bg-background/70 p-6 md:p-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Testimonio destacado
          </p>
          <blockquote className="mt-6 text-2xl font-medium leading-10 text-foreground md:text-3xl">
            “{activeTestimonial.message}”
          </blockquote>
          <div className="mt-8 flex items-center justify-between gap-4">
            <div>
              <p className="text-lg font-semibold text-foreground">
                {activeTestimonial.name}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {activeTestimonial.role} • {activeTestimonial.company}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() =>
                  setActiveIndex((prev) =>
                    prev === 0 ? testimonials.length - 1 : prev - 1,
                  )
                }
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground hover:border-primary/40 hover:text-primary"
                aria-label="Testimonio anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() =>
                  setActiveIndex((prev) =>
                    prev === testimonials.length - 1 ? 0 : prev + 1,
                  )
                }
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground hover:border-primary/40 hover:text-primary"
                aria-label="Siguiente testimonio"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-6 flex gap-2">
            {dots.map((dot) => (
              <button
                key={dot.id}
                type="button"
                onClick={() => setActiveIndex(dot.index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === dot.index ? "w-8 bg-primary" : "w-2.5 bg-border"
                }`}
                aria-label={`Ir al testimonio ${dot.index + 1}`}
              />
            ))}
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-[1.75rem] border border-border bg-background/70 p-6 md:p-8"
        >
          <h3 className="text-2xl font-semibold text-foreground">Añadir testimonio</h3>
          <div className="mt-6 grid gap-4">
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Nombre"
              className="h-12 rounded-2xl border border-border bg-card px-4 text-foreground outline-none focus:border-primary"
              required
            />
            <input
              type="text"
              value={role}
              onChange={(event) => setRole(event.target.value)}
              placeholder="Rol"
              className="h-12 rounded-2xl border border-border bg-card px-4 text-foreground outline-none focus:border-primary"
              required
            />
            <input
              type="text"
              value={company}
              onChange={(event) => setCompany(event.target.value)}
              placeholder="Empresa / Proyecto"
              className="h-12 rounded-2xl border border-border bg-card px-4 text-foreground outline-none focus:border-primary"
            />
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Testimonio"
              rows={5}
              className="min-h-32 rounded-[1.5rem] border border-border bg-card px-4 py-3 text-foreground outline-none focus:border-primary"
              required
            />
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
          >
            Enviar testimonio
          </button>
        </form>
      </div>
    </section>
  );
}
