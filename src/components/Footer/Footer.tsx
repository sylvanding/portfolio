import Logo from "../Header/Logo";
import { useTranslation } from "../../i18n";

export default function Footer() {
  const year = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="flex flex-col items-center justify-between gap-4 bg-black px-5 py-6 text-white md:flex-row md:px-20 lg:px-[112px] dark:bg-neutral-900">
      <Logo variant="signature" invertAlways />
      <div className="flex flex-col items-center gap-1 text-sm text-zinc-400 md:items-end">
        <p>
          &copy; {year} {t.footer.copyright}
        </p>
        <p className="text-xs text-zinc-600">{t.footer.icp}</p>
      </div>
    </footer>
  );
}
