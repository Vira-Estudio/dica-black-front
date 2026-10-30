import { Brain, Eye, ListChecks, RefreshCw } from 'lucide-react'

const benefits = [
  {
    icon: Brain,
    text: 'Memorizar melhor as técnicas que aprende durante os treinos.',
  },
  {
    icon: RefreshCw,
    text: 'Revisar suas posições quando e onde quiser.',
  },
  {
    icon: Eye,
    text: 'Ter mais clareza para reconhecer oportunidades durante o rola.',
  },
  {
    icon: ListChecks,
    text: 'Organizar seu aprendizado sem depender só da memória.',
  },
]

const thoughts = [
  {
    position: 'left-top',
    text: 'O professor acabou de ensinar e eu já esqueci metade.',
    tone: 'red',
  },
  {
    position: 'right-top',
    text: 'Na hora do rola, minha cabeça fica em branco.',
    tone: 'white',
  },
  {
    position: 'left-bottom',
    text: 'Parece que todo mundo evolui, menos eu.',
    tone: 'red',
  },
  {
    position: 'right-bottom',
    text: 'Eu treino tanto, mas continuo cometendo os mesmos erros.',
    tone: 'white',
  },
] as const

const thoughtPositionClass = {
  'left-bottom': 'md:top-2/3 md:left-0 md:-translate-y-1/2',
  'left-top': 'md:top-1/4 md:left-0 md:-translate-y-1/2',
  'right-bottom': 'md:top-3/4 md:right-0 md:-translate-y-1/2',
  'right-top': 'md:top-1/3 md:right-0 md:-translate-y-1/2',
} as const

export function PresentationSection() {
  return (
    <>
      <section className="bg-brand-black py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
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

          <div className="relative mx-auto mt-10 max-w-5xl">
            <img
              alt="Homem ajoelhado de kimono"
              className="mx-auto h-auto w-full max-w-sm rounded-xl object-cover md:max-w-md"
              height={640}
              src="https://placehold.co/480x640?text=Kimono"
              width={480}
            />

            <div className="mt-6 flex flex-col gap-3 md:mt-0 md:contents">
              {thoughts.map((thought) => (
                <p
                  className={`w-full max-w-xs rounded-2xl px-5 py-4 text-sm font-medium text-pretty md:absolute md:z-10 md:w-72 lg:w-80 ${
                    thoughtPositionClass[thought.position]
                  } ${
                    thought.tone === 'red'
                      ? 'bg-brand-red text-white'
                      : 'text-brand-red bg-white'
                  }`}
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
            <div className="bg-brand-red h-20 w-full rounded-2xl" />

            <div className="relative -mt-12 w-full rounded-2xl bg-white px-6 pt-14 pb-8 shadow-sm md:px-10 md:pt-16 md:pb-10">
              <img
                alt="Ícone de kimono"
                className="absolute top-0 left-1/2 size-14 -translate-x-1/2 -translate-y-1/2 object-contain md:size-16"
                height={64}
                src="https://placehold.co/64x64?text=Gi"
                width={64}
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
            {benefits.map((benefit) => {
              const Icon = benefit.icon

              return (
                <article
                  className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-zinc-400 bg-white p-6"
                  key={benefit.text}
                >
                  <Icon
                    aria-hidden
                    className="text-brand-red size-12 shrink-0"
                    strokeWidth={1.5}
                  />
                  <p className="text-brand-black text-center text-base font-semibold text-balance">
                    {benefit.text}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
