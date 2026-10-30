import { useEffect, useRef, useState } from 'react'
import heroVideo from '@/assets/hero.mp4'
import iconKimonoSmall from '@/assets/icon-kimono-small.webp'
import { MotionInView } from '@/components/ui/motion-in-view'

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoSrc, setVideoSrc] = useState<string | undefined>()

  useEffect(() => {
    let cancelled = false
    const load = () => {
      if (!cancelled) {
        setVideoSrc(heroVideo)
      }
    }

    if (typeof window.requestIdleCallback === 'function') {
      const id = window.requestIdleCallback(load, { timeout: 1500 })
      return () => {
        cancelled = true
        window.cancelIdleCallback(id)
      }
    }

    const timer = window.setTimeout(load, 200)
    return () => {
      cancelled = true
      window.clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    if (!(videoSrc && videoRef.current)) {
      return
    }
    void videoRef.current.play().catch(() => undefined)
  }, [videoSrc])

  return (
    <section className="bg-brand-muted200 relative z-0">
      <div className="bg-brand-red px-4 py-3 text-center md:px-8">
        <MotionInView delay={0.15} preset="fadeDown">
          <p className="text-sm font-semibold text-balance text-white md:text-base">
            Você aprende as técnicas de Jiu-jitsu na aula, mas trava na hora do
            rola?
          </p>
        </MotionInView>
      </div>

      <div className="mx-auto flex w-full max-w-xl flex-col justify-center gap-2 px-4 pt-12 md:px-8 md:pt-16">
        <div className="flex flex-col items-center gap-6">
          <MotionInView delay={0.3} preset="fadeUp">
            <h1 className="text-center text-xl leading-tight font-extrabold text-balance text-black sm:text-nowrap">
              Aprenda a organizar e revisar as{' '}
              <br className="hidden sm:block" />
              <span className="text-brand-red">técnicas de Jiu-Jitsu</span> para
              lembrar melhor <br className="hidden sm:block" /> do que fazer na
              hora do rola.
            </h1>
          </MotionInView>

          <MotionInView delay={0.45} preset="fadeUp">
            <div className="border-border flex w-fit items-center gap-3 rounded-full border bg-white px-4 py-2">
              <img
                alt="Ícone de kimono"
                className="size-6 object-contain"
                decoding="async"
                height={46}
                src={iconKimonoSmall}
                width={48}
              />
              <p className="text-brand-black text-sm font-medium md:text-base">
                Revise suas técnicas mesmo fora do tatame
              </p>
            </div>
          </MotionInView>
        </div>

        <MotionInView
          className="relative z-0 mx-auto -mb-16 w-fit overflow-hidden md:-mb-24"
          delay={0.55}
          preset="fadeScale"
        >
          <div className="relative z-0 mx-auto aspect-[1280/2304] w-72 [clip-path:inset(3.5%_0)] md:w-96">
            <video
              autoPlay
              className="absolute inset-0 size-full object-cover"
              loop
              muted
              playsInline
              preload="none"
              ref={videoRef}
              src={videoSrc}
            >
              <track kind="captions" />
            </video>
          </div>
        </MotionInView>
      </div>
    </section>
  )
}
