"use client";

import { useState } from "react";
import { BriefcaseBusiness, GitBranch, Mail, MessageCircleMore } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useTranslations } from "next-intl";

export function ContactSection() {
  const t = useTranslations("contact");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

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
        kicker={t("kicker")}
        title={t("title")}
        description={t("description")}
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

        <form
          onSubmit={handleSubmit}
          className="rounded-[1.75rem] border border-border bg-background/65 p-6 md:p-8"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div className="md:col-span-1">
              <label className="mb-2 block text-sm font-medium text-foreground">
                {t("form.name")}
              </label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t("form.namePlaceholder")}
                className="h-12 rounded-2xl border-border bg-card px-4"
                required
              />
            </div>
            <div className="md:col-span-1">
              <label className="mb-2 block text-sm font-medium text-foreground">
                {t("form.email")}
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t("form.emailPlaceholder")}
                className="h-12 rounded-2xl border-border bg-card px-4"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-foreground">
                {t("form.subject")}
              </label>
              <Input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder={t("form.subjectPlaceholder")}
                className="h-12 rounded-2xl border-border bg-card px-4"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-foreground">
                {t("form.message")}
              </label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t("form.messagePlaceholder")}
                className="min-h-36 rounded-3xl border-border bg-card px-4 py-3"
                required
              />
            </div>
          </div>

          {/* Feedback al usuario */}
          {status === "success" && (
            <p className="mt-4 text-sm font-medium text-green-500">
              ✅ {t("form.successMessage")}
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 text-sm font-medium text-red-500">
              ❌ {t("form.errorMessage")}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "loading" ? t("form.sending") : t("form.submit")}
          </button>
        </form>
      </div>
    </section>
  );
}