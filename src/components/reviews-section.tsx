import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const reviews = [
  {
    alt: 'Print do comentário de warmesloures no Instagram',
    src: 'https://placehold.co/360x480?text=Review+1',
  },
  {
    alt: 'Print do comentário de lucasbraganti no Instagram',
    src: 'https://placehold.co/360x480?text=Review+2',
  },
  {
    alt: 'Print do comentário de leonardoalves0 no Instagram',
    src: 'https://placehold.co/360x480?text=Review+3',
  },
  {
    alt: 'Print do comentário de lsgarrido13 no Instagram',
    src: 'https://placehold.co/360x480?text=Review+4',
  },
  {
    alt: 'Print do comentário de ali_0st no Instagram',
    src: 'https://placehold.co/360x480?text=Review+5',
  },
]

export function ReviewsSection() {
  return (
    <section className="bg-brand-red overflow-x-hidden py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
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
        >
          <CarouselContent>
            {reviews.map((review) => (
              <CarouselItem
                className="basis-full sm:basis-1/2 lg:basis-1/3"
                key={review.src}
              >
                <img
                  alt={review.alt}
                  className="h-auto w-full rounded-xl bg-white object-cover"
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
