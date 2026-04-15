"use client";

import { Languages } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

export function LanguageToggle() {
  const locale = useLocale();
  const t = useTranslations('language');

  const toggleLanguage = () => {
    const newLocale = locale === 'es' ? 'en' : 'es';
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^\/(es|en)/, `/${newLocale}`);
    window.location.href = newPath;
  };

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/90 text-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
      aria-label={locale === 'es' ? t('toEnglish') : t('toSpanish')}
      title={locale === 'es' ? t('toEnglish') : t('toSpanish')}
    >
      <span className="sr-only">
        {t('toggle')}
      </span>
      <Languages className="h-5 w-5 transition-transform duration-300 hover:rotate-12" />
    </button>
  );
}