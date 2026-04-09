import type { Transition, Variants } from "framer-motion";

export const transition: Transition = {
  duration: 0.45,
  ease: [0.16, 1, 0.3, 1],
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};
