import { useTranslation } from "../../i18n";
import { skillsData } from "../../constants";
import { motion } from "motion/react";

const skillIcons = import.meta.glob("../../assets/skills/*.svg", {
  eager: true,
  query: "?url",
  import: "default"
}) as Record<string, string>;

function getIconUrl(filename: string): string {
  const key = Object.keys(skillIcons).find((k) => k.endsWith(`/${filename}`));
  return key ? skillIcons[key] : "";
}

const skills = skillsData.map((s) => ({ ...s, src: getIconUrl(s.file) })).filter((s) => s.src);

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section className="py-10 lg:pb-20" id="skills">
      <motion.h2
        className="mb-10 text-center text-[28px]/[114%] tracking-tight lg:text-[48px]/[114%]"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 20 }}
        viewport={{ once: true }}
      >
        <span className="pr-2 md:pr-4">{t.skills.title1}</span>
        <span className="font-extrabold">{t.skills.title2}</span>
      </motion.h2>

      <div
        className="group relative overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)"
        }}
      >
        <div className="animate-scroll-left flex w-max gap-6 py-4 group-hover:[animation-play-state:paused]">
          {[...skills, ...skills].map((skill, i) => (
            <div
              key={`${skill.file}-${i}`}
              className="flex h-[5.5rem] w-20 flex-shrink-0 flex-col items-center gap-1.5 rounded-xl border border-zinc-200 bg-white px-2 pt-4 shadow-sm transition-all duration-300 hover:shadow-md sm:h-[6.5rem] sm:w-24 sm:px-3 sm:pt-5 dark:border-neutral-700 dark:bg-neutral-900"
            >
              <img
                src={skill.src}
                alt={skill.name}
                className="h-8 w-8 flex-shrink-0 object-contain brightness-0 sm:h-10 sm:w-10 dark:invert"
                loading="lazy"
              />
              <span className="flex max-w-full flex-1 items-center justify-center text-center text-[9px] leading-tight font-medium text-zinc-600 sm:text-[10px] dark:text-zinc-400">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
