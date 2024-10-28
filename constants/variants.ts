import { Variants } from "framer-motion";

export const fadeIn = (
  direction: "up" | "down" | "left" | "right",
  delay: number,
): Variants => ({
  hidden: {
    y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
    opacity: 0,
    x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
    transition: {
      type: "tween",
      duration: 1.5,
      delay,
      ease: [0.25, 0.6, 0.3, 0.8],
    },
  },
  show: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 1.4,
      delay,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
});
