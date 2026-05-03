import { useRef, useState } from "react";
import Input from "./Input";
import FormActions from "./FormActions";
import { emailRegex } from "../../constants";
import { useTranslation } from "../../i18n";

export default function Form() {
  const [isInvalidMessage, setIsInvalidMessage] = useState(false);
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const { t } = useTranslation();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsInvalidMessage(false);
    setIsInvalidEmail(false);

    const formData = new FormData(form.current!);
    const name = (formData.get("name") as string).trim();
    const email = (formData.get("email") as string).trim();
    const subject = (formData.get("title") as string).trim();
    const message = (formData.get("message") as string).trim();

    if (!message.length || !email.length || !emailRegex.test(email)) {
      if (!message.length) setIsInvalidMessage(true);
      if (!email.length || !emailRegex.test(email)) setIsInvalidEmail(true);
      return;
    }

    const body = name
      ? `Hi Sylvan,\n\n${message}\n\nFrom: ${name} <${email}>`
      : `Hi Sylvan,\n\n${message}\n\nFrom: ${email}`;

    const mailto = `mailto:dingsylv@gmail.com?subject=${encodeURIComponent(subject || "Hello Sylvan")}&body=${encodeURIComponent(body)}`;
    window.open(mailto, "_self");
  };

  return (
    <form ref={form} onSubmit={handleSubmit} className="relative flex w-full flex-col gap-5">
      <Input type="text" placeholder={t.contact.form.name} name="name" />
      <Input
        type="email"
        placeholder={t.contact.form.email}
        name="email"
        invalid={isInvalidEmail}
      />
      <Input type="text" placeholder={t.contact.form.subject} name="title" />
      <textarea
        className={`w-full rounded border-2 px-6 py-4 text-base/[125%] tracking-tight transition-all duration-300 ${
          isInvalidMessage
            ? "border-red-700 text-red-700 placeholder:text-red-700"
            : "border-black text-zinc-800 placeholder:text-zinc-400 dark:border-white dark:bg-neutral-950 dark:text-zinc-200 dark:placeholder:text-zinc-500"
        } focus:text-zinc-800 dark:focus:text-zinc-200`}
        id="message"
        name="message"
        placeholder={t.contact.form.message}
        rows={5}
        required
      />
      <FormActions />
    </form>
  );
}
