import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'

type MaterialSymbolProps = {
  icon: string
  size?: number
  fill?: boolean
  weight?: number
} & ComponentPropsWithoutRef<'span'>

export function MaterialSymbol({
  icon,
  size = 24,
  fill = false,
  weight = 400,
  className,
  style,
  ...props
}: MaterialSymbolProps) {
  return (
    <span
      className={cn('material-symbols', className)}
      style={{
        fontSize: size,
        fontVariationSettings: `'FILL' ${fill ? 1 : 0}, 'wght' ${weight}, 'GRAD' 0, 'opsz' ${size}`,
        ...style,
      }}
      {...props}
    >
      {icon}
    </span>
  )
}
