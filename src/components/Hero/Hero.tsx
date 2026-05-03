import SocialMedia from "./SocialMedia";
import boyWithLaptop from "../../assets/personal/boyWithLaptop.svg";
import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";
import { useTranslation } from "../../i18n";
import { useCursorHover } from "../../hooks/useCursorHover";

export default function Hero() {
  const { t } = useTranslation();
  const { handleMouseEnter, handleMouseLeave } = useCursorHover();

  const sequence = t.hero.names.flatMap((name) => [name, 2500]);

  return (
    <section className="flex-center min-h-[calc(100vh-72px)] flex-col-reverse justify-evenly px-4 sm:px-6 md:flex-row md:px-20 md:pt-10 lg:px-28">
      <motion.div
        className="flex flex-col gap-8 md:w-1/2"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 80, damping: 18 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col gap-3 text-[28px]/[114%] tracking-tight lg:gap-5 lg:text-5xl/[117%]">
          <h1>
            <span>{t.hero.greeting}</span>
            <TypeAnimation
              key={t.hero.names[0]}
              sequence={sequence}
              wrapper="span"
              speed={50}
              className="block min-h-[1.2em]"
              style={{ fontWeight: 800 }}
              repeat={Infinity}
            />
          </h1>
          <p>
            <span className="font-extrabold">{t.hero.role1} </span>
            <span className="text-stroke-1 text-stroke-primary-black dark:text-stroke-[white] font-extrabold text-white dark:text-neutral-950">
              {t.hero.role2}
            </span>
          </p>
          <p>
            <span>{t.hero.based} </span>
            <span className="font-extrabold">{t.hero.location}</span>
          </p>
        </div>
        <p
          className="text-base/6 font-normal text-zinc-500 dark:text-zinc-400"
          onMouseEnter={() => handleMouseEnter(150)}
          onMouseLeave={() => handleMouseLeave(40)}
        >
          {t.hero.intro}
        </p>
        <div className="lg:mt-10">
          <SocialMedia />
        </div>
      </motion.div>

      <motion.div
        className="flex-center md:w-1/2"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.15, type: "spring", stiffness: 80, damping: 18 }}
        viewport={{ once: true }}
      >
        <img
          src={boyWithLaptop}
          alt="Sylvan Ding illustration"
          fetchPriority="high"
          className="max-h-[750px] pb-8 sm:w-[539px] xl:w-630 dark:invert"
        />
      </motion.div>
    </section>
  );
}
