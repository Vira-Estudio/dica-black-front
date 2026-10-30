import { MaterialSymbol } from '@/components/ui/material-symbol'
import {
  MotionInView,
  MotionStaggerItem,
  MotionStaggerList,
} from '@/components/ui/motion-in-view'

const items = [
  'Quer lembrar das técnicas e aplicá-las com mais confiança no rola.',
  'Esquece as posições quando começa a lutar e acaba ficando perdido.',
  'Treina há meses, mas sente que seu Jiu-Jitsu não está evoluindo.',
  'Entende a explicação, mas não consegue executar durante o rola.',
  'Quer reconhecer ataques e defesas sem ficar pensando tanto tempo.',
  'Tem pouco tempo para treinar e quer aproveitar melhor cada aula.',
]

export function ChecklistSection() {
  return (
    <section>
      <div className="bg-brand-black py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <article className="bg-brand-black950 rounded-2xl border border-zinc-400 p-6 md:p-8">
            <MotionInView delay={0.25} preset="fadeScale">
              <h2 className="text-center text-xl font-extrabold text-balance text-white">
                O Dica Black é para você que:
              </h2>
            </MotionInView>

            <MotionStaggerList className="mx-auto mt-8 flex w-fit max-w-full flex-col gap-4">
              {items.map((item) => (
                <MotionStaggerItem
                  className="flex items-start gap-3"
                  key={item}
                >
                  <span className="bg-brand-red mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-sm text-white">
                    <MaterialSymbol aria-hidden icon="check" size={16} />
                  </span>
                  <p className="text-base text-pretty text-white">{item}</p>
                </MotionStaggerItem>
              ))}
            </MotionStaggerList>
          </article>
        </div>
      </div>

      <div className="bg-brand-black950 py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
          <MotionInView
            className="mx-auto mb-6 inline-block w-full max-w-32"
            delay={0.2}
            preset="fadeDown"
          >
            <p className="rounded-lg border border-zinc-500 bg-transparent px-5 py-2 text-xs font-bold tracking-wide text-white uppercase">
              Enfim...
            </p>
          </MotionInView>

          <MotionInView delay={0.35} preset="fadeUp">
            <h3 className="text-xl font-extrabold text-balance text-white md:text-2xl">
              Se você quer parar de esquecer as técnicas e{' '}
              <span className="text-brand-red">COMEÇAR A EVOLUIR</span> de
              verdade no tatame...
            </h3>
          </MotionInView>

          <MotionInView delay={0.5} preset="fadeUp">
            <p className="mt-6 text-lg font-bold text-balance text-white md:text-2xl">
              O Dica Black é para você!
            </p>
          </MotionInView>
        </div>
      </div>
    </section>
  )
}
