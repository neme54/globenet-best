'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const phrases = [
  'Responsive Websites',
  'E-Commerce Stores',
  'Business Portfolios',
  'AI-Powered Solutions',
]

export function AnimatedText() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length)
    }, 2200)
    return () => clearInterval(timer)
  }, [])

  return (
    <span className="inline-block min-h-[1.2em] text-logo">
      <AnimatePresence mode="wait">
        <motion.span
          key={phrases[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.25 }}
          className="inline-block font-bold"
        >
          {phrases[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
