import logo from '@/assets/logo.webp'
import { MotionInView } from '@/components/ui/motion-in-view'

export function Header() {
  return (
    <header className="bg-white py-6">
      <MotionInView
        className="mx-auto flex max-w-6xl justify-center px-4 md:px-8"
        delay={0.15}
        preset="fadeDown"
      >
        <img
          alt="Dica Black"
          className="w-full max-w-58"
          height={48}
          src={logo}
          width={200}
        />
      </MotionInView>
    </header>
  )
}
