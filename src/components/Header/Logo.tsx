import FaviconIcon from "../../assets/favicon/favicon.svg?react";
import signSvg from "../../assets/sign/sign-sylvanding.svg";

export default function Logo({
  variant = "icon",
  invertAlways
}: {
  variant?: "icon" | "signature";
  invertAlways?: boolean;
}) {
  return (
    <div
      className="inline-flex cursor-pointer items-center transition-all duration-300 ease-in hover:scale-110"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      role="button"
      tabIndex={0}
      aria-label="Scroll to top"
    >
      {variant === "icon" ? (
        <FaviconIcon className="h-9 w-auto" />
      ) : (
        <img
          src={signSvg}
          alt="Sylvan Ding"
          className={`h-10 w-auto ${invertAlways ? "invert" : "dark:invert"}`}
        />
      )}
    </div>
  );
}
