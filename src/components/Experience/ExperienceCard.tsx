import { motion } from "motion/react";
import { useCursorHover } from "../../hooks/useCursorHover";
import { useTranslation } from "../../i18n";
import { experienceLogos, type ExperienceKey } from "../../constants";

const logoModules = import.meta.glob("../../assets/jobs/*.svg", {
  eager: true,
  query: "?url",
  import: "default"
}) as Record<string, string>;

function getLogoUrl(filename: string): string {
  const key = Object.keys(logoModules).find((k) => k.endsWith(filename));
  return key ? logoModules[key] : "";
}

export default function ExperienceCard({
  expKey,
  index = 0
}: {
  expKey: ExperienceKey;
  index?: number;
}) {
  const { handleMouseEnter, handleMouseLeave } = useCursorHover();
  const { t } = useTranslation();
  const data = t.experience.items[expKey];
  const logoFile = experienceLogos[expKey];
  const logoUrl = getLogoUrl(logoFile);

  return (
    <motion.article
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: index * 0.12, type: "spring" }}
      viewport={{ once: true }}
      className="flex flex-col gap-6 rounded-xl border-2 border-black bg-black p-6 text-white md:p-10 dark:border-neutral-700 dark:bg-neutral-900"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <a
            href={data.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2"
          >
            <h3 className="text-xl font-extrabold tracking-tight transition-colors group-hover:text-zinc-300 md:text-2xl">
              {data.company}
            </h3>
            <svg
              className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10.8335 9.16671L17.6668 2.33337" />
              <path d="M18.3335 5.66663V1.66663H14.3335" />
            </svg>
          </a>
          <p className="mt-1 text-sm font-medium text-zinc-300">{data.role}</p>
        </div>
        {logoUrl && (
          <img
            src={logoUrl}
            alt={`${data.company} logo`}
            className="h-12 w-12 flex-shrink-0 rounded-lg object-contain brightness-0 invert sm:h-16 sm:w-16"
            loading="lazy"
          />
        )}
      </div>

      <p
        className="leading-relaxed text-zinc-400"
        onMouseEnter={() => handleMouseEnter(150)}
        onMouseLeave={() => handleMouseLeave(40)}
      >
        {data.description}
      </p>
    </motion.article>
  );
}
