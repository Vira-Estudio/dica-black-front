import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'
import { useInView } from 'react-intersection-observer'
import {
  entranceInViewOptions,
  entranceSpring,
  entranceTransition,
  fadeDown,
  fadeLeft,
  fadeRight,
  fadeScale,
  fadeUp,
} from '@/utils/motion-entrance'

const presets = {
  fadeDown,
  fadeLeft,
  fadeRight,
  fadeScale,
  fadeUp,
} as const

type EntrancePreset = keyof typeof presets

type InViewOptions = {
  rootMargin?: string
  threshold?: number | number[]
  triggerOnce?: boolean
}

type MotionInViewProps = {
  children: ReactNode
  preset?: EntrancePreset
  delay?: number
  className?: string
  /** Sobrescreve o observer padrão (ex.: opções strict para seções altas) */
  inViewOptions?: InViewOptions
}

export function MotionInView({
  children,
  preset = 'fadeUp',
  delay = 0.3,
  className,
  inViewOptions = entranceInViewOptions,
}: MotionInViewProps) {
  const reduceMotion = useReducedMotion()
  const { ref, inView } = useInView(inViewOptions)
  const entrance = presets[preset]

  if (reduceMotion) {
    return (
      <div className={className} ref={ref}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      animate={inView ? entrance.animate : undefined}
      className={className}
      initial={entrance.initial}
      ref={ref}
      transition={entranceTransition(delay)}
    >
      {children}
    </motion.div>
  )
}

const staggerContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.1,
    },
  },
} as const

const staggerItemVariants = {
  hidden: fadeUp.initial,
  visible: {
    ...fadeUp.animate,
    transition: entranceSpring,
  },
} as const

type MotionStaggerListProps = {
  children: ReactNode
  className?: string
  inViewOptions?: InViewOptions
}

/** Lista com um único inView: itens entram em cascata (checks / bullets) */
export function MotionStaggerList({
  children,
  className,
  inViewOptions = entranceInViewOptions,
}: MotionStaggerListProps) {
  const reduceMotion = useReducedMotion()
  const { ref, inView } = useInView(inViewOptions)

  if (reduceMotion) {
    return (
      <ul className={className} ref={ref}>
        {children}
      </ul>
    )
  }

  return (
    <motion.ul
      animate={inView ? 'visible' : 'hidden'}
      className={className}
      initial="hidden"
      ref={ref}
      variants={staggerContainerVariants}
    >
      {children}
    </motion.ul>
  )
}

type MotionStaggerItemProps = {
  children: ReactNode
  className?: string
}

export function MotionStaggerItem({
  children,
  className,
}: MotionStaggerItemProps) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <li className={className}>{children}</li>
  }

  return (
    <motion.li className={className} variants={staggerItemVariants}>
      {children}
    </motion.li>
  )
}
