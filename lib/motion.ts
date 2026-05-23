/** Motion presets — never hide content with opacity: 0 (causes blank pages) */
export const motionFast = {
  duration: 0.28,
  ease: [0.22, 1, 0.36, 1] as const,
}

export const motionSpring = {
  type: 'spring' as const,
  stiffness: 420,
  damping: 32,
  mass: 0.8,
}

/** Subtle slide only — always fully visible */
export const fadeUp = {
  initial: { y: 10 },
  animate: { y: 0 },
  transition: motionFast,
}

export const fadeUpStagger = (index: number) => ({
  initial: { y: 10 },
  animate: { y: 0 },
  transition: { ...motionFast, delay: index * 0.05 },
})

export const inViewReveal = {
  initial: { y: 12 },
  animate: { y: 0 },
  transition: motionFast,
}
