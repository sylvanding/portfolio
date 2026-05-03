import { useTranslation } from "../../i18n";
import { experienceKeys } from "../../constants";
import { motion } from "motion/react";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  const { t } = useTranslation();

  return (
    <section className="px-4 py-10 sm:px-6 md:px-15 md:py-20 xl:px-28" id="experience">
      <motion.h2
        className="mb-10 pt-5 text-center text-[28px]/[114%] tracking-tight md:pt-0 lg:text-[48px]/[114%]"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 20 }}
        viewport={{ once: true }}
      >
        <span className="pr-2 md:pr-4">{t.experience.title1}</span>
        <span className="font-extrabold">{t.experience.title2}</span>
      </motion.h2>
      <div className="grid gap-6 md:gap-10 lg:grid-cols-2 lg:gap-12">
        {experienceKeys.map((key, index) => (
          <ExperienceCard key={key} expKey={key} index={index} />
        ))}
      </div>
    </section>
  );
}
