// Shared Framer Motion presets — kept outside component files so the
// react-refresh/only-export-components lint rule stays happy.

export const EASE = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.35, ease: EASE } },
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};

export const hoverLift = {
  y: -6,
  transition: { type: "spring", stiffness: 320, damping: 22 },
};

export const tapScale = { scale: 0.98 };
