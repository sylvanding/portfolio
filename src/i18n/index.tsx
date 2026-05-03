import { createContext, useContext, useState, type PropsWithChildren } from "react";
import type { Translations } from "./types";
import en from "./locales/en";
import zh from "./locales/zh";

export type Locale = "en" | "zh";

const translations: Record<Locale, Translations> = { en, zh };

interface LanguageContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "en",
  setLocale: () => {},
  t: en
});

export function LanguageProvider({ children }: PropsWithChildren) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    const saved = localStorage.getItem("locale");
    if (saved === "en" || saved === "zh") return saved;
    return navigator.language.startsWith("zh") ? "zh" : "en";
  });

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    localStorage.setItem("locale", l);
    document.documentElement.lang = l;
  };

  return (
    <LanguageContext value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </LanguageContext>
  );
}

export function useTranslation() {
  return useContext(LanguageContext);
}
