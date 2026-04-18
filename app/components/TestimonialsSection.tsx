"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { useTranslations } from "next-intl";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  message: string;
  company?: string;
}

export function TestimonialsSection() {
  const t = useTranslations('testimonials');

  const [testimonials] = useState<Testimonial[]>([
    {
      id: 1,
      name: t('items.andres.name'),
      role: t('items.andres.role'),
      company: t('items.andres.company'),
      message: t('items.andres.message'),
    },
    {
      id: 2,
      name: t('items.maria.name'),
      role: t('items.maria.role'),
      company: t('items.maria.company'),
      message: t('items.maria.message'),
    },
    {
      id: 3,
      name: t('items.carlos.name'),
      role: t('items.carlos.role'),
      company: t('items.carlos.company'),
      message: t('items.carlos.message'),
    },
  ]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeTestimonial = testimonials[activeIndex] || testimonials[0];

  useEffect(() => {
    if (isPaused || testimonials.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => window.clearInterval(interval);
  }, [isPaused, testimonials.length]);

  return (
    <section
      id="testimonios"
      className="section-shell px-6 py-10 md:px-10 md:py-12"
    >
      <SectionHeading
        kicker={t('kicker')}
        title={t('title')}
        description={t('description')}
      />

      <div
        className="mt-12 rounded-4xl border border-border/40 bg-linear-to-br from-background/80 via-background to-background/60 p-8 md:p-12 shadow-xl backdrop-blur-sm transition-all duration-300"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex flex-col gap-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Quote className="h-8 w-8 shrink-0 text-primary/60" />
              <blockquote className="text-3xl font-semibold leading-relaxed text-foreground md:text-4xl">
                "{activeTestimonial.message}"
              </blockquote>
            </div>

            <div className="flex flex-col gap-3 border-t border-border/30 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xl font-bold text-foreground">
                  {activeTestimonial.name}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {activeTestimonial.role}
                  {activeTestimonial.company && ` • ${activeTestimonial.company}`}
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex((prev) =>
                      prev === 0 ? testimonials.length - 1 : prev - 1,
                    )
                  }
                  className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card/50 text-foreground transition-all duration-300 hover:border-primary/60 hover:bg-primary/10 hover:text-primary"
                  aria-label={t('nav.previous')}
                >
                  <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-0.5" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex((prev) =>
                      prev === testimonials.length - 1 ? 0 : prev + 1,
                    )
                  }
                  className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card/50 text-foreground transition-all duration-300 hover:border-primary/60 hover:bg-primary/10 hover:text-primary"
                  aria-label={t('nav.next')}
                >
                  <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Indicator Dots */}
          <div className="flex items-center justify-center gap-2 pt-4">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-300 ${
                  activeIndex === index
                    ? "h-3 w-10 rounded-full bg-primary shadow-lg shadow-primary/50"
                    : "h-3 w-3 rounded-full bg-border/60 hover:bg-border"
                }`}
                aria-label={t('aria.gotoTestimonial', { number: index + 1 })}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <button
            key={testimonial.id}
            onClick={() => setActiveIndex(index)}
            className={`group rounded-xl border-2 p-6 text-left transition-all duration-300 ${
              activeIndex === index
                ? "border-primary bg-primary/10 shadow-lg shadow-primary/20"
                : "border-border/50 bg-card/40 hover:border-primary/40 hover:bg-card/70"
            }`}
          >
            <div className="space-y-3">
              <p className="line-clamp-3 text-sm leading-relaxed text-foreground group-hover:text-primary transition-colors">
                "{testimonial.message}"
              </p>
              <div className="border-t border-border/30 pt-3">
                <p className="font-semibold text-foreground text-sm">
                  {testimonial.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
