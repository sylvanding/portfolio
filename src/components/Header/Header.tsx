import { useEffect, useState } from "react";
import Logo from "./Logo";
import BlogLink from "./BlogLink";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import MenuIcon from "../../assets/menu.svg?react";
import CrossIcon from "../../assets/cross.svg?react";
import { linksInfo } from "../../constants";
import { useTranslation } from "../../i18n";
import Link from "./Link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.paddingRight = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.paddingRight = "";
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`${
        isMenuOpen
          ? "fixed inset-0 z-20 flex flex-col bg-white dark:bg-neutral-950"
          : "sticky top-0 z-20 bg-white/80 backdrop-blur-md transition-all duration-300 dark:bg-neutral-950/80"
      }`}
    >
      <div className="flex items-center px-5 py-4 md:px-20 lg:px-[112px]">
        <div className="flex flex-1 items-center">
          <div className="lg:hidden">
            <Logo variant="signature" />
          </div>
          <div className="hidden lg:block">
            <Logo variant="icon" />
          </div>
        </div>

        <nav className="hidden lg:block">
          <ul className="flex gap-8 text-[16px]/[20px]">
            {linksInfo.map((link) => (
              <Link key={link.path} title={t.nav[link.titleKey]} path={link.path} />
            ))}
          </ul>
        </nav>

        <div className="flex flex-1 items-center justify-end gap-3">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex-center h-11 w-11 cursor-pointer rounded border-2 border-black transition-all duration-300 active:scale-90 lg:hidden dark:border-white"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <CrossIcon className="h-5 w-5" aria-hidden="true" />
            ) : (
              <MenuIcon className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
          <div className="hidden items-center gap-3 lg:flex">
            <LanguageToggle />
            <BlogLink />
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="flex flex-1 flex-col items-center justify-center gap-10 lg:hidden">
          <ul className="flex flex-col items-center gap-7 text-2xl font-semibold">
            {linksInfo.map((link) => (
              <li key={link.path}>
                <a
                  href={link.path}
                  className="transition-colors hover:text-zinc-500 dark:hover:text-zinc-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.nav[link.titleKey]}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <BlogLink />
          </div>
        </nav>
      )}
    </header>
  );
}
