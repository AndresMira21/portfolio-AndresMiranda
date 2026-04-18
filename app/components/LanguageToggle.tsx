"use client";

import { Languages } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function LanguageToggle() {
  const locale = useLocale();
  const t = useTranslations('language');

  const handleLanguageChange = (newLocale: string) => {
    const currentPath = window.location.pathname;
    // Remove the locale prefix and keep the rest of the path
    const pathWithoutLocale = currentPath.replace(/^\/(es|en)/, '') || '/';
    const newPath = `/${newLocale}${pathWithoutLocale}`;
    window.location.href = newPath;
  };

  return (
    <Select value={locale} onValueChange={handleLanguageChange}>
      <SelectTrigger
        className="inline-flex h-11 w-auto items-center justify-between gap-2 rounded-full border border-border bg-card/90 px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
        aria-label={t('select')}
      >
        <Languages className="h-4 w-4 transition-transform duration-300 hover:rotate-12" />
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="es">{t('spanish')}</SelectItem>
        <SelectItem value="en">{t('english')}</SelectItem>
      </SelectContent>
    </Select>
  );
}