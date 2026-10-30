import card01 from '@/assets/cards/CARD-01.webp'
import card02 from '@/assets/cards/CARD-02.webp'
import card03 from '@/assets/cards/CARD-03.webp'
import card04 from '@/assets/cards/CARD-04.webp'
import card05 from '@/assets/cards/CARD-05.webp'
import card06 from '@/assets/cards/CARD-06.webp'
import { MotionInView } from '@/components/ui/motion-in-view'

const mainItems = [
  {
    alt: 'Plataforma Dica Black',
    description:
      'Tenha acesso a uma biblioteca de técnicas de Jiu-Jitsu para revisar as posições, entender os detalhes e estudar quando e onde quiser.',
    image: card01,
    imageRight: false,
    title: 'Plataforma Dica Black: suas técnicas de Jiu-Jitsu em um só lugar',
    tone: 'muted',
  },
  {
    alt: 'Aprenda Jiu-Jitsu com Lucas Braganti',
    description:
      'Aprenda com a experiência de Lucas Braganti e tenha acesso a técnicas e detalhes que vão ajudar você a desenvolver seu jogo no tatame.',
    image: card02,
    imageRight: true,
    title: 'Aprenda Jiu-Jitsu com Lucas Braganti',
    tone: 'black',
  },
  {
    alt: 'Equipe Braganti',
    description:
      'Tenha acesso ao conhecimento da equipe Braganti e aprenda a revisar posições para treinar com mais clareza e confiança.',
    image: card03,
    imageRight: false,
    title: 'Aprenda com quem vive o Jiu-Jitsu todos os dias',
    tone: 'muted',
  },
] as const

const bonusItems = [
  {
    alt: 'Detalhes técnicos que fazem a diferença',
    description:
      'Aprenda a identificar erros, entender os movimentos e descobrir detalhes técnicos que podem mudar a forma como você enfrenta seus adversários.',
    image: card04,
    imageRight: false,
    title: 'Os detalhes que fazem a diferença entre escapar e ser finalizado',
    tone: 'muted',
  },
  {
    alt: 'Veja, pause e repita as demonstrações',
    description:
      'Perdeu um detalhe durante a explicação? Reveja as demonstrações, acompanhe cada etapa da posição e estude no seu próprio ritmo, quantas vezes precisar.',
    image: card05,
    imageRight: true,
    title: 'Veja, pause e repita até entender cada movimento',
    tone: 'black',
  },
  {
    alt: 'Jogo mais completo no tatame',
    description:
      'Explore conteúdos sobre finalizações, preparação e desafios para ampliar seu repertório e descobrir novas possibilidades dentro do tatame.',
    image: card06,
    imageRight: false,
    title: 'Muito além das posições: desenvolva um jogo mais completo',
    tone: 'muted',
  },
] as const

const toneClass = {
  black: 'bg-brand-black text-white',
  muted: 'bg-brand-muted300 text-black',
} as const

const descriptionClass = {
  black: 'text-white/90',
  muted: 'text-black/80',
} as const

function FeatureCard({
  item,
}: {
  item: (typeof mainItems)[number] | (typeof bonusItems)[number]
}) {
  return (
    <article
      className={`relative grid min-h-64 items-stretch overflow-hidden rounded-2xl md:grid-cols-2 ${toneClass[item.tone]}`}
    >
      <div
        className={`relative overflow-hidden max-md:aspect-[4/5] ${item.imageRight ? 'md:order-2' : ''}`}
      >
        <img
          alt={item.alt}
          className="size-full object-cover object-center md:absolute md:inset-0"
          decoding="async"
          height={400}
          loading="lazy"
          src={item.image}
          width={600}
        />
      </div>
      <div
        className={`flex flex-col justify-center gap-3 p-6 text-balance md:p-8 ${item.imageRight ? 'md:order-1' : ''}`}
      >
        <h3 className="text-lg font-extrabold md:text-xl">{item.title}</h3>
        <p
          className={`text-sm leading-relaxed md:text-base ${descriptionClass[item.tone]}`}
        >
          {item.description}
        </p>
      </div>
    </article>
  )
}

export function WillReceiveSection() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <div className="mb-10 text-center">
          <MotionInView
            className="mx-auto mb-6 w-full max-w-40"
            delay={0.2}
            preset="fadeDown"
          >
            <p className="w-full rounded-lg border border-zinc-500 bg-zinc-200 px-5 py-2 text-center text-xs font-bold text-black uppercase">
              E tem mais...
            </p>
          </MotionInView>
          <MotionInView delay={0.3} preset="fadeDown">
            <h2 className="text-brand-black mx-auto w-full max-w-2xl text-xl font-extrabold text-balance md:text-3xl">
              Veja tudo o que você vai receber com o{' '}
              <span className="text-brand-red">DICA BLACK</span>
            </h2>
          </MotionInView>
        </div>

        <div className="flex flex-col gap-6">
          {mainItems.map((item, index) => (
            <MotionInView
              delay={0.35 + index * 0.15}
              key={item.title}
              preset="fadeScale"
            >
              <FeatureCard item={item} />
            </MotionInView>
          ))}
        </div>
      </div>

      <MotionInView delay={0.25} preset="fadeUp">
        <div className="bg-brand-black mt-14 px-4 py-12 text-center md:px-8 md:py-16">
          <p className="mx-auto mb-6 w-full max-w-48 rounded-lg border border-zinc-500 bg-white/10 px-5 py-2 text-center text-xs font-bold text-white uppercase">
            Ainda não acabou!
          </p>
          <h3 className="text-xl font-extrabold text-balance text-white md:text-3xl">
            Você também vai receber:
          </h3>
        </div>
      </MotionInView>

      <div className="mx-auto mt-10 max-w-5xl px-4 md:px-8">
        <div className="flex flex-col gap-6">
          {bonusItems.map((item, index) => (
            <MotionInView
              delay={0.35 + index * 0.15}
              key={item.title}
              preset="fadeScale"
            >
              <FeatureCard item={item} />
            </MotionInView>
          ))}
        </div>
      </div>
    </section>
  )
}
