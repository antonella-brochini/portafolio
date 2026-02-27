
import type { Variants } from "framer-motion";

/**
 * Framer Motion (con tu versión) NO acepta ease como string.
 * Usamos cubic-bezier equivalente a "easeInOut".
 */
const EASE_IN_OUT: [number, number, number, number] = [0.42, 0, 0.58, 1];

export const slideUp: Variants = {
  hidden: { y: 100, opacity: 0 },
  visible: (i = 0) => ({
    y: 0,
    opacity: 1,
    transition: {
      ease: EASE_IN_OUT,
      duration: 0.9,
      delay: i,
    },
  }),
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: {
      ease: EASE_IN_OUT,
      duration: 0.9,
      delay: i,
    },
  }),
};

export const slideToRight: Variants = {
  hidden: { x: -100, opacity: 0 },
  visible: (i = 0) => ({
    x: 0,
    opacity: 1,
    transition: {
      ease: EASE_IN_OUT,
      duration: 0.9,
      delay: i,
    },
  }),
};

export const slideToLeft: Variants = {
  hidden: { x: 100, opacity: 0 },
  visible: (i = 0) => ({
    x: 0,
    opacity: 1,
    transition: {
      ease: EASE_IN_OUT,
      duration: 0.9,
      delay: i,
    },
  }),
};

export const slideDown: Variants = {
  hidden: { y: -100, opacity: 0 },
  visible: (i = 0) => ({
    y: 0,
    opacity: 1,
    transition: {
      ease: EASE_IN_OUT,
      duration: 0.9,
      delay: i,
    },
  }),
};

export const list: Variants = {
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      delay: 0.6,
    },
  },
};

export const item: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: EASE_IN_OUT,
      duration: 0.9,
    },
  },
};

export const itemSlideUp: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: EASE_IN_OUT,
      duration: 0.9,
    },
  },
};