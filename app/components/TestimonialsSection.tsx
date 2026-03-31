"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  message: string;
  company?: string;
}

export function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    { id: 1, name: "Andrés Miranda", role: "Full-stack Developer", company: "Proyecto Personal", message: "Excelente experiencia colaborando y resolviendo retos con enfoque práctico. Recomendado para equipos ágiles." },
    { id: 2, name: "María Pérez", role: "Ingeniera de Software", company: "Proyectos Académicos", message: "Implementó soluciones robustas con buena arquitectura y documentación clara. Muy profesional." },
    { id: 3, name: "Carlos Torres", role: "Analista de Datos", company: "Scripting y Automatización", message: "Generó scripts eficientes para automatización y reportes. Gran calidad en código y eficiencia." },
  ]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [isPaused, setIsPaused] = useState(false);
  const [isFading, setIsFading] = useState(false);

  const activeTestimonial = testimonials[activeIndex] || testimonials[0];

  const transitionToIndex = (nextIndex: number) => {
    setIsFading(true);
    const timeoutId = window.setTimeout(() => {
      setActiveIndex(nextIndex);
      setIsFading(false);
    }, 350);
    return () => window.clearTimeout(timeoutId);
  };

  useEffect(() => {
    if (isPaused || testimonials.length <= 1) return;
    const interval = window.setInterval(() => {
      setIsFading(true);
      window.setTimeout(() => {
        setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
        setIsFading(false);
      }, 350);
    }, 4000);

    return () => window.clearInterval(interval);
  }, [testimonials.length, isPaused]);

  const dots = useMemo(() => testimonials.map((t, index) => ({ id: t.id, index })), [testimonials]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name.trim() || !role.trim() || !message.trim()) return;

    const nextEntry: Testimonial = {
      id: testimonials.length ? Math.max(...testimonials.map((t) => t.id)) + 1 : 1,
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

    // Mostrar el nuevo testimonio con animación
    setIsFading(true);
    const nextIndex = testimonials.length;
    window.setTimeout(() => {
      setActiveIndex(nextIndex);
      setIsFading(false);
    }, 350);
  };

  return (
    <section className="bg-white p-4 sm:p-8 rounded-lg shadow-sm mb-6 max-w-6xl mx-auto" id="testimonios">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center text-gray-900">Testimonios</h2>

      <div className="relative mb-6" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        <div className={`border-2 border-gray-300 rounded-xl p-6 transition-all duration-500 ${isFading ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"}`}>
          <p className="text-black text-base sm:text-lg font-semibold mb-3">"{activeTestimonial.message}"</p>
          <p className="font-bold text-slate-900 text-lg">{activeTestimonial.name}</p>
          <p className="text-blue-900 font-medium text-sm">{activeTestimonial.role} • {activeTestimonial.company}</p>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <button
            className="px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-900"
            onClick={() => transitionToIndex(activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1)}
            aria-label="Testimonio anterior"
          >
            ◀ Anterior
          </button>
          <button
            className="px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-900"
            onClick={() => transitionToIndex(activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1)}
            aria-label="Siguiente testimonio"
          >
            Siguiente ▶
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {dots.map((dot) => (
            <button
              key={dot.id}
              onClick={() => transitionToIndex(dot.index)}
              aria-label={`Ir al testimonio ${dot.index + 1}`}
              className={`w-3 h-3 rounded-full ${activeIndex === dot.index ? "bg-blue-600" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>

      <div className="border-2 border-blue-300 bg-blue-100 rounded-xl p-6">
        <h3 className="font-bold text-lg text-blue-900 mb-4">Añadir Testimonio</h3>
        <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className="flex flex-col text-sm text-slate-900 font-semibold">
            Nombre
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 p-2 border rounded-lg focus:outline-none focus:border-blue-400"
              required
            />
          </label>

          <label className="flex flex-col text-sm text-slate-900 font-semibold">
            Rol
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="mt-1 p-2 border rounded-lg focus:outline-none focus:border-blue-400"
              required
            />
          </label>

          <label className="flex flex-col text-sm sm:col-span-2 text-slate-900 font-semibold">
            Empresa / Proyecto
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="mt-1 p-2 border rounded-lg focus:outline-none focus:border-blue-400"
            />
          </label>

          <label className="flex flex-col text-sm sm:col-span-2 text-slate-900 font-semibold">
            Testimonio
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 p-2 border rounded-lg focus:outline-none focus:border-blue-400"
              rows={4}
              required
            />
          </label>

          <button type="submit" className="sm:col-span-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Enviar Testimonio
          </button>
        </form>
      </div>
    </section>
  );
}