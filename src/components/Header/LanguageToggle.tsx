import { useTranslation } from "../../i18n";

export default function LanguageToggle() {
  const { locale, setLocale } = useTranslation();

  return (
    <button
      onClick={() => setLocale(locale === "en" ? "zh" : "en")}
      className="flex-center h-11 cursor-pointer rounded border-2 border-black px-3 text-sm font-semibold transition-all duration-300 hover:bg-black hover:text-white active:scale-90 dark:border-white dark:hover:bg-white dark:hover:text-black"
      aria-label={`Switch to ${locale === "en" ? "Chinese" : "English"}`}
    >
      {locale === "en" ? "中" : "EN"}
    </button>
  );
}
