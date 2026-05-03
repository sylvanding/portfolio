import { useEffect, useContext } from "react";
import { motion, useMotionValue } from "motion/react";
import CursorContext from "../../contexts/CursorContext";

const COLOR_MAP: Record<string, string> = {
  "primary-white": "#fff",
  "primary-black": "#000",
  white: "#fff",
  black: "#000"
};

export default function Cursor() {
  const { size, color } = useContext(CursorContext);
  const mouseX = useMotionValue(200);
  const mouseY = useMotionValue(200);

  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      mouseX.set(event.clientX - size / 2);
      mouseY.set(event.clientY - size / 2);
    }

    if (window.innerWidth >= 1024) {
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [mouseX, mouseY, size]);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[60] hidden rounded-full mix-blend-exclusion lg:block"
      style={{
        width: size,
        height: size,
        x: mouseX,
        y: mouseY,
        backgroundColor: COLOR_MAP[color] ?? color
      }}
      initial={{ scale: 0.1, opacity: 0 }}
      animate={{ scale: 1, opacity: 1, width: size, height: size }}
      transition={{
        scale: { duration: 2, type: "spring" },
        opacity: { duration: 2, type: "spring" },
        width: { type: "spring", stiffness: 1000, damping: 100 },
        height: { type: "spring", stiffness: 1000, damping: 100 }
      }}
    />
  );
}
