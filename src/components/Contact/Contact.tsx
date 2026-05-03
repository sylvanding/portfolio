import Form from "./Form";
import EmailIcon from "../../assets/email.svg?react";
import { motion } from "motion/react";
import { useTranslation } from "../../i18n";
import { useCursorHover } from "../../hooks/useCursorHover";

export default function Contact() {
  const { t } = useTranslation();
  const { handleMouseEnter, handleMouseLeave } = useCursorHover();

  return (
    <>
      <div className="h-16 bg-black md:h-20 dark:bg-neutral-900" />
      <section
        id="contact"
        className="relative px-4 py-10 sm:px-6 md:px-10 md:py-20 lg:px-20 xl:px-28"
      >
        <h2 className="mb-10 text-center text-[28px]/[114%] tracking-tight lg:text-5xl/[117%]">
          <span className="pr-2 md:pr-4">{t.contact.title1}</span>{" "}
          <span className="font-extrabold">{t.contact.title2}</span>
        </h2>
        <div className="md:flex-row-reverse md:items-center md:gap-15 lg:flex xl:gap-28">
          <div className="my-8 flex w-full flex-col gap-8">
            <motion.h3
              className="text-[28px]/[114%] font-extrabold tracking-tight lg:text-5xl/[117%]"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 100, damping: 20 }}
              viewport={{ once: true }}
            >
              {t.contact.heading}
              <span className="text-stroke-1 text-stroke-primary-black dark:text-stroke-[white] px-3 text-white dark:text-neutral-950">
                {t.contact.headingHighlight}
              </span>
              <br />
              {t.contact.headingEnd}
            </motion.h3>
            <p
              className="text-base/[150%] text-zinc-500 dark:text-zinc-400"
              onMouseEnter={() => handleMouseEnter(150)}
              onMouseLeave={() => handleMouseLeave(40)}
            >
              {t.contact.description}
            </p>
            <p className="flex items-center transition-all duration-300 hover:pl-3">
              <EmailIcon className="mr-3 h-5 w-5" />
              <a href={`mailto:${t.contact.email}`} className="hover:underline">
                {t.contact.email}
              </a>
            </p>
          </div>
          <Form />
        </div>
      </section>
    </>
  );
}
