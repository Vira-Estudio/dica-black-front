import athlete from '@/assets/athlete.webp'
import athleteTransparent from '@/assets/athlete-transparent.webp'
import iconArrow from '@/assets/icon-arrow.webp'
import iconKimonoLarge from '@/assets/icon-kimono-large.webp'
import { MaterialSymbol } from '@/components/ui/material-symbol'

const benefits = [
  {
    icon: 'cognition_2',
    text: 'Memorizar melhor as técnicas que aprende durante os treinos.',
  },
  {
    icon: 'mobile_check',
    text: 'Revisar suas posições quando e onde quiser.',
  },
  {
    icon: 'ads_click',
    text: 'Ter mais clareza para reconhecer oportunidades durante o rola.',
  },
  {
    icon: 'book_ribbon',
    text: 'Organizar seu aprendizado sem depender só da memória.',
  },
]

const thoughts = [
  {
    align: 'text-center xl:text-left',
    position: 'left-top',
    text: 'O professor acabou de ensinar e eu já esqueci metade.',
    toneClass: 'bg-brand-red text-white',
    width: 'mx-auto max-w-md xl:mx-0 xl:max-w-none xl:w-[34rem]',
    zIndex: 'xl:z-10',
  },
  {
    align: 'text-center xl:text-right',
    position: 'right-top',
    text: 'Na hora do rola, minha cabeça fica em branco.',
    toneClass: 'text-brand-red bg-white',
    width: 'mx-auto max-w-md xl:mx-0 xl:max-w-none xl:w-[28rem]',
    zIndex: 'xl:z-10',
  },
  {
    align: 'text-center',
    position: 'left-bottom',
    text: 'Parece que todo mundo evolui, menos eu.',
    toneClass: 'bg-brand-red text-white xl:bg-white xl:text-brand-red',
    width: 'mx-auto w-full max-w-md xl:max-w-fit',
    zIndex: 'xl:z-30',
  },
  {
    align: 'text-center',
    position: 'right-bottom',
    text: 'Eu treino tanto, mas continuo cometendo os mesmos erros.',
    toneClass: 'bg-white text-brand-red xl:bg-brand-red xl:text-white',
    width: 'mx-auto w-full max-w-md xl:max-w-fit',
    zIndex: 'xl:z-30',
  },
] as const

const thoughtPositionClass = {
  'left-bottom': 'xl:top-[58%] xl:left-36 xl:-translate-y-1/2',
  'left-top': 'xl:top-[18%] xl:left-6 xl:-translate-y-1/2',
  'right-bottom': 'xl:top-[78%] xl:right-20 xl:-translate-y-1/2',
  'right-top': 'xl:top-[38%] xl:right-20 xl:-translate-y-1/2',
} as const

export function PresentationSection() {
  return (
    <>
      <section className="bg-brand-black py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <p className="mx-auto mb-6 w-full max-w-40 rounded-lg border border-zinc-500 bg-transparent px-5 py-2 text-center text-xs font-bold text-white uppercase">
            Seja sincero...
          </p>

          <h2 className="mx-auto max-w-3xl text-center text-xl font-extrabold text-balance text-white md:text-2xl">
            Você treina Jiu-Jitsu, mas{' '}
            <span className="text-brand-red">TRAVA</span> na hora de colocar as
            técnicas em prática...
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base font-medium text-balance text-white md:text-lg">
            Por isso, toda vez que começa um rola, você pensa:
          </p>

          <div className="relative mx-auto mt-10 max-w-7xl">
            <div className="relative mx-auto w-full max-w-sm md:max-w-md">
              <img
                alt="Homem ajoelhado de kimono"
                className="relative z-0 mx-auto block h-auto w-full rounded-xl object-cover"
                height={640}
                src={athlete}
                width={480}
              />
              <img
                alt=""
                aria-hidden
                className="pointer-events-none absolute inset-0 z-20 mx-auto h-full w-full rounded-xl object-cover"
                height={640}
                src={athleteTransparent}
                width={480}
              />
            </div>

            <div className="mt-6 flex flex-col gap-3 xl:mt-0 xl:contents">
              {thoughts.map((thought) => (
                <p
                  className={`w-full rounded-2xl p-6 text-sm font-semibold text-pretty xl:absolute ${
                    thought.align
                  } ${thought.width} ${thoughtPositionClass[thought.position]} ${thought.zIndex} ${thought.toneClass}`}
                  key={thought.text}
                >
                  {thought.text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-black950 py-12 md:py-16">
        <div className="mx-auto max-w-2xl px-4 md:px-8">
          <div className="relative">
            <div className="bg-brand-red h-24 w-full rounded-2xl md:h-28" />

            <div className="relative -mt-10 w-full rounded-2xl bg-white px-6 pt-16 pb-8 shadow-sm md:-mt-12 md:px-10 md:pt-20 md:pb-10">
              <img
                alt="Ícone de kimono"
                className="absolute top-2 left-1/2 size-24 -translate-x-1/2 -translate-y-1/2 object-contain md:top-3"
                height={80}
                src={iconKimonoLarge}
                width={80}
              />

              <p className="text-center text-base font-bold text-balance text-black md:text-lg">
                Você treina Jiu-Jitsu, se dedica e aprende novas posições. Mas,
                quando começa o rola, sua cabeça fica em branco e parece que
                todo o esforço foi em vão.
              </p>
              <p className="mt-4 text-center text-sm text-balance text-black md:text-base">
                Mas e se você pudesse revisar as técnicas que aprende, entender
                melhor cada detalhe e chegar ao próximo treino mais preparado,
                sem precisar passar <strong>horas estudando</strong> ou viver
                dentro da academia? Isso faria diferença na sua evolução?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-muted200 py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <h2 className="text-brand-black text-center text-xl font-extrabold text-balance md:text-3xl">
            Com o Dica Black você vai:
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <article
                className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-zinc-400 bg-white p-6"
                key={benefit.text}
              >
                <MaterialSymbol
                  aria-hidden
                  className="text-brand-red shrink-0"
                  icon={benefit.icon}
                  size={48}
                />
                <p className="text-brand-black text-center text-base font-semibold text-balance">
                  {benefit.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="relative z-10 -mt-6 -mb-6 flex justify-center md:-mt-8 md:-mb-8">
        <img
          alt=""
          aria-hidden
          className="size-14 object-contain md:size-16"
          height={80}
          src={iconArrow}
          width={80}
        />
      </div>
    </>
  )
}
