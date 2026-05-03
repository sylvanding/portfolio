import boy from "../../assets/personal/boy.svg";
import coffeeIcon from "../../assets/loves/coffee.svg";
import photoIcon from "../../assets/loves/photograph.svg";
import travelIcon from "../../assets/loves/travel.svg";
import { useCursorHover } from "../../hooks/useCursorHover";
import { useTranslation } from "../../i18n";
import { motion } from "motion/react";

export default function AboutMe() {
  const { handleMouseEnter, handleMouseLeave } = useCursorHover();
  const { t } = useTranslation();

  const hobbies = [
    { icon: coffeeIcon, label: t.about.hobby.coffee },
    { icon: photoIcon, label: t.about.hobby.photo },
    { icon: travelIcon, label: t.about.hobby.travel }
  ];

  return (
    <section
      className="flex flex-col gap-10 bg-black px-4 py-10 text-white sm:p-6 md:p-20 lg:flex-row lg:px-28 dark:bg-neutral-900"
      id="about"
    >
      <div className="flex-center lg:w-1/2">
        <img
          src={boy}
          alt="Sylvan Ding illustration"
          className="w-full max-w-xl invert"
          loading="lazy"
        />
      </div>
      <div className="lg:w-1/2">
        <h2 className="mb-6 text-[28px]/[114%] tracking-tight lg:text-5xl/[117%]">
          <span className="pr-2 md:pr-4">{t.about.title1}</span>{" "}
          <span className="font-extrabold">{t.about.title2}</span>
        </h2>

        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-zinc-600 px-4 py-2">
          <span className="text-sm font-bold tracking-wider text-emerald-400">{t.about.mbti}</span>
          <span className="text-sm text-zinc-400">—</span>
          <span className="text-sm text-zinc-300">{t.about.mbtiLabel}</span>
        </div>

        <article
          className="flex flex-col gap-4 text-zinc-300"
          onMouseEnter={() => handleMouseEnter(150)}
          onMouseLeave={() => handleMouseLeave(40)}
        >
          {[t.about.p1, t.about.p2, t.about.p3].map((text, i) => (
            <motion.p
              key={i}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
              viewport={{ once: true }}
            >
              {text}
            </motion.p>
          ))}
        </article>

        <div className="mt-10 flex flex-wrap gap-4">
          {hobbies.map((h, i) => (
            <motion.div
              key={h.label}
              className="flex items-center gap-3 rounded-full border border-zinc-700 bg-zinc-800/50 px-5 py-2.5"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1, type: "spring" }}
              viewport={{ once: true }}
            >
              <img src={h.icon} alt="" className="h-5 w-5 brightness-0 invert" aria-hidden="true" />
              <span className="text-sm font-medium text-zinc-200">{h.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
