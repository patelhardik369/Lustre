import type { Variants } from "framer-motion";

/** Standard easing curves used across the site. */
export const EASE = [0.22, 1, 0.36, 1] as const; // expressive ease-out

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: EASE } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: EASE } },
};

/** Parent container that staggers its children on reveal. */
export const stagger = (gap = 0.09, delay = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: gap, delayChildren: delay },
  },
});

/** Sensible defaults for whileInView reveals. */
export const inViewport = { once: true, amount: 0.3 } as const;
