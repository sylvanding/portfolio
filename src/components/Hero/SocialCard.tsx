import { type ReactNode, type MouseEvent } from "react";

export default function SocialCard({
  path,
  label,
  children,
  onClick
}: {
  path: string;
  label: string;
  children?: ReactNode;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}) {
  return (
    <a
      href={path}
      className="flex-center group h-12 w-12 cursor-pointer rounded border-2 border-black p-1 text-black transition-all duration-300 hover:scale-105 hover:bg-black hover:text-white active:scale-90 md:h-auto md:w-auto md:p-3 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
      target={onClick ? undefined : "_blank"}
      rel={onClick ? undefined : "noopener noreferrer"}
      aria-label={label}
      onClick={onClick}
    >
      {children}
    </a>
  );
}
