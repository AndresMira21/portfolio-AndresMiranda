"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('navbar');

  const navigation = [
    { href: "#inicio", label: t('home') },
    { href: "#acerca", label: t('about') },
    { href: "#experiencia", label: t('experience') },
    { href: "#proyectos", label: t('projects') },
    { href: "#contacto", label: t('contact') },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-border/80 bg-background/75 px-5 py-3 shadow-[0_14px_40px_-24px_rgba(15,23,42,0.85)] backdrop-blur-xl">
        <a
          href="#inicio"
          className="text-sm font-semibold tracking-[0.24em] text-foreground uppercase"
        >
          Andrés Miranda
        </a>

        <div className="hidden items-center gap-2 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-all duration-300 hover:bg-accent hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <LanguageToggle />
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/90 text-foreground shadow-sm"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {isOpen ? (
        <div className="mx-auto mt-3 max-w-6xl rounded-[1.75rem] border border-border/80 bg-card/95 p-4 shadow-[0_24px_60px_-36px_rgba(15,23,42,0.85)] backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-2">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
