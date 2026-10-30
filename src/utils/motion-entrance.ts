/** Spring padrão de entrada do projeto (espelha Authomix) */
export const entranceSpring = {
  damping: 100,
  stiffness: 100,
} as const

/** Dispara só quando o bloco entra na área útil (margem só embaixo p/ não quebrar o topo) */
export const entranceInViewOptions = {
  rootMargin: '0px 0px -25% 0px',
  threshold: 0.25,
  triggerOnce: true,
} as const

/** Mais estrito: só anima quando o bloco já está bem na viewport (seções altas / abaixo do fold) */
export const entranceInViewOptionsStrict = {
  rootMargin: '0px 0px -40% 0px',
  threshold: 0.4,
  triggerOnce: true,
} as const

/** Fim da página: sem margem inferior (senão o footer nunca dispara e fica em opacity 0) */
export const entranceInViewOptionsEnd = {
  rootMargin: '0px',
  threshold: 0.05,
  triggerOnce: true,
} as const

export const fadeDown = {
  animate: { opacity: 1, translateY: 0 },
  initial: { opacity: 0, translateY: -20 },
} as const

export const fadeUp = {
  animate: { opacity: 1, translateY: 0 },
  initial: { opacity: 0, translateY: 20 },
} as const

export const fadeScale = {
  animate: { opacity: 1, scale: 1 },
  initial: { opacity: 0, scale: 0.92 },
} as const

export const fadeRight = {
  animate: { opacity: 1, translateX: 0 },
  initial: { opacity: 0, translateX: -20 },
} as const

export const fadeLeft = {
  animate: { opacity: 1, translateX: 0 },
  initial: { opacity: 0, translateX: 20 },
} as const

export const entranceTransition = (delay = 0.3) => ({
  ...entranceSpring,
  delay,
})
