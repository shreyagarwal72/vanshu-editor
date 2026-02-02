import { Variants } from "framer-motion";

// iOS/Android 16 Spring configs
export const springConfig = {
  gentle: { type: "spring" as const, stiffness: 120, damping: 20 },
  bouncy: { type: "spring" as const, stiffness: 300, damping: 24 },
  snappy: { type: "spring" as const, stiffness: 400, damping: 30 },
  smooth: { type: "spring" as const, stiffness: 100, damping: 15 },
};

// Stagger children animations
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerFaster: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

// Fade up with spring
export const fadeUpSpring: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: springConfig.gentle,
  },
};

// Scale fade (iOS app icon style)
export const scaleUp: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: springConfig.bouncy,
  },
};

// Slide from left
export const slideFromLeft: Variants = {
  hidden: { 
    opacity: 0, 
    x: -60,
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: springConfig.gentle,
  },
};

// Slide from right
export const slideFromRight: Variants = {
  hidden: { 
    opacity: 0, 
    x: 60,
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: springConfig.gentle,
  },
};

// Card hover effect (3D tilt)
export const cardHover = {
  rest: {
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    transition: springConfig.snappy,
  },
  hover: {
    scale: 1.02,
    transition: springConfig.bouncy,
  },
};

// Button press effect (iOS style)
export const buttonPress = {
  rest: { scale: 1 },
  pressed: { scale: 0.95 },
  hover: { scale: 1.02 },
};

// Blur fade in (Android 16 style)
export const blurFadeIn: Variants = {
  hidden: { 
    opacity: 0, 
    filter: "blur(10px)",
    y: 20,
  },
  visible: { 
    opacity: 1, 
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Text reveal character by character
export const textRevealContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.02,
      delayChildren: 0.1,
    },
  },
};

export const textRevealChar: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: springConfig.gentle,
  },
};

// Floating animation (continuous)
export const floatingAnimation = {
  y: [0, -8, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

// Glow pulse animation
export const glowPulse = {
  boxShadow: [
    "0 0 20px hsl(210 100% 60% / 0.2)",
    "0 0 40px hsl(210 100% 60% / 0.4)",
    "0 0 20px hsl(210 100% 60% / 0.2)",
  ],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

// Progress bar fill animation
export const progressFill = (width: number) => ({
  initial: { width: 0, opacity: 0 },
  animate: { 
    width: `${width}%`, 
    opacity: 1,
    transition: {
      width: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
      opacity: { duration: 0.3 },
    },
  },
});

// Page transition
export const pageTransition: Variants = {
  initial: { 
    opacity: 0,
    y: 20,
  },
  animate: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: { 
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
    },
  },
};

// Magnetic effect for buttons
export const magneticEffect = (x: number, y: number) => ({
  x: x * 0.3,
  y: y * 0.3,
  transition: springConfig.snappy,
});
