import { useEffect, useCallback, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "../../i18n";

import wechatQR from "../../assets/social/wechat-url.svg";
import telegramQR from "../../assets/social/telegram-url.svg";

const QR_CONFIG = {
  wechat: {
    qrSrc: wechatQR,
    copyText: "sylvand",
    titleKey: "wechat" as const,
    copiedKey: "wechat" as const
  },
  telegram: {
    qrSrc: telegramQR,
    copyText: "sylvanding",
    titleKey: "telegram" as const,
    copiedKey: "telegram" as const
  }
};

export default function QRCodeModal({
  type,
  onClose
}: {
  type: "wechat" | "telegram" | null;
  onClose: () => void;
}) {
  const { t } = useTranslation();
  const [toast, setToast] = useState("");

  const handleClose = useCallback(() => {
    setToast("");
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!type) return;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.paddingRight = "";
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKey);
    };
  }, [type, handleClose]);

  useEffect(() => {
    if (!type) return;
    const config = QR_CONFIG[type];
    navigator.clipboard
      .writeText(config.copyText)
      .then(() => setToast(t.qr[config.copiedKey].copied))
      .catch(() => {});
  }, [type, t]);

  return (
    <AnimatePresence>
      {type && (
        <motion.div
          className="fixed inset-0 z-50 flex cursor-default items-center justify-center bg-black/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={handleClose}
        >
          <motion.div
            className="relative mx-4 flex max-w-sm cursor-default flex-col items-center gap-4 rounded-2xl bg-white p-8 shadow-2xl dark:bg-neutral-900"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 cursor-pointer text-zinc-400 transition-colors hover:text-black dark:hover:text-white"
              aria-label="Close"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <h3 className="text-lg font-bold dark:text-white">
              {t.qr[QR_CONFIG[type].titleKey].title}
            </h3>

            <img
              src={QR_CONFIG[type].qrSrc}
              alt={`${type} QR code`}
              className="h-48 w-48 rounded-lg dark:invert"
            />

            <AnimatePresence>
              {toast && (
                <motion.p
                  className="rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                >
                  {toast}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
