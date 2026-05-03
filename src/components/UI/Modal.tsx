import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Modal({
  children,
  open,
  onClose
}: {
  children: React.ReactNode;
  open: string;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    const id = setTimeout(() => onClose(), 3000);
    return () => clearTimeout(id);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="absolute top-1/2 left-1/2 z-50 m-auto flex min-h-56 w-72 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-between rounded-md bg-white p-5 text-zinc-500 shadow-2xl/30 shadow-black dark:bg-neutral-800 dark:text-zinc-300 dark:shadow-neutral-950"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex w-full flex-col justify-between gap-4 text-center">
            {children}
            <button
              onClick={onClose}
              className="active:shadow-bottom w-full rounded border-2 border-black bg-black px-4 py-3 font-semibold text-white transition-colors hover:bg-zinc-800 active:bg-white active:text-black dark:border-white dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              Ok
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
