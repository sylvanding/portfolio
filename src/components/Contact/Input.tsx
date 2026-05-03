export default function Input({
  type,
  placeholder,
  name,
  required,
  invalid
}: {
  type: string;
  placeholder: string;
  name: string;
  required?: boolean;
  invalid?: boolean;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      required={required}
      className={`h-14 w-full rounded border-2 px-6 py-4 text-base/[125%] tracking-tight transition-all duration-300 ${
        invalid
          ? "border-red-700 text-red-700 placeholder:text-red-700"
          : "border-black text-zinc-800 placeholder:text-zinc-400 dark:border-white dark:bg-neutral-950 dark:text-zinc-200 dark:placeholder:text-zinc-500"
      }`}
    />
  );
}
