import SocialMedia from "../Hero/SocialMedia";
import { useTranslation } from "../../i18n";

export default function FormActions() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-between gap-5 md:flex-row">
      <button
        type="submit"
        className="flex-center group hover:shadow-bottom dark:hover:shadow-bottom-inv relative h-14 w-[153px] cursor-pointer gap-2 rounded border-2 border-black bg-black px-4 py-3 font-semibold text-white transition-all hover:bg-white hover:text-black active:translate-y-1 xl:w-44 dark:border-white dark:bg-white dark:text-black dark:hover:bg-neutral-950 dark:hover:text-white"
      >
        {t.contact.form.send}
      </button>
      <SocialMedia />
    </div>
  );
}
