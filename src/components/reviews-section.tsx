import Autoplay from 'embla-carousel-autoplay'
import { useRef } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const reviewModules = import.meta.glob<{ default: string }>(
  '@/assets/reviews/review-*.webp',
  { eager: true }
)

const reviews = Object.entries(reviewModules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([path, mod], index) => ({
    alt: `Print de avaliação ${index + 1}`,
    key: path,
    src: mod.default,
  }))

export function ReviewsSection() {
  const autoplay = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  )

  return (
    <section className="bg-brand-red relative z-10 overflow-x-hidden py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="mx-auto max-w-3xl text-center text-xl font-extrabold text-balance text-white md:text-2xl">
          Veja o que mudou na rotina de quem queria evoluir, mas não conseguia
          lembrar das técnicas.
        </h2>

        <Carousel
          className="mt-8 w-full px-10 md:mt-10 md:px-12"
          opts={{
            align: 'start',
            loop: true,
          }}
          plugins={[autoplay.current]}
        >
          <CarouselContent className="items-start">
            {reviews.map((review) => (
              <CarouselItem
                className="basis-full sm:basis-1/2 lg:basis-1/3"
                key={review.key}
              >
                <img
                  alt={review.alt}
                  className="block h-auto w-full rounded-xl"
                  height={480}
                  src={review.src}
                  width={360}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 size-10 border-0 bg-transparent text-white shadow-none hover:bg-transparent hover:text-white disabled:text-white/40" />
          <CarouselNext className="right-0 size-10 border-0 bg-transparent text-white shadow-none hover:bg-transparent hover:text-white disabled:text-white/40" />
        </Carousel>
      </div>
    </section>
  )
}
