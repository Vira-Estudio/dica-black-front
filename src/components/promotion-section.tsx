import { MaterialSymbol } from '@/components/ui/material-symbol'
import {
  MotionInView,
  MotionStaggerItem,
  MotionStaggerList,
} from '@/components/ui/motion-in-view'

const items = [
  {
    label: 'Biblioteca completa Dica Black',
    price: 'R$ 120,00',
  },
  {
    label: 'Técnicas de ataque e defesa',
    price: 'R$ 97,00',
  },
  {
    label: 'Estratégias para evoluir no rola',
    price: 'R$ 85,00',
  },
  {
    label: 'Videoaulas para revisar quando quiser',
    price: 'R$ 137,00',
  },
  {
    label: 'Bônus: E-book Braganti Academy',
    price: 'R$ 117,00',
  },
  {
    label: 'Conteúdos de preparação e finalizações',
    price: 'R$ 93,00',
  },
]

export function PromotionSection() {
  return (
    <section className="bg-brand-muted200 py-12 md:py-16">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 md:px-8">
        <article className="w-full rounded-2xl border border-zinc-400 bg-white p-6 md:p-8">
          <MotionInView delay={0.25} preset="fadeScale">
            <h2 className="text-brand-black text-center text-xl font-extrabold text-balance">
              Recapitulando tudo o que você vai receber com o Dica Black
            </h2>
          </MotionInView>

          <MotionStaggerList className="mt-8 flex flex-col gap-4">
            {items.map((item) => (
              <MotionStaggerItem
                className="flex items-center justify-between gap-4"
                key={item.label}
              >
                <span className="flex items-center gap-3">
                  <span className="bg-brand-red flex size-6 shrink-0 items-center justify-center rounded-full text-white">
                    <MaterialSymbol aria-hidden icon="check" size={16} />
                  </span>
                  <span className="text-brand-black text-sm font-medium text-pretty md:text-base">
                    {item.label}
                  </span>
                </span>
                <span className="text-brand-red shrink-0 text-sm font-semibold line-through md:text-base">
                  {item.price}
                </span>
              </MotionStaggerItem>
            ))}
          </MotionStaggerList>
        </article>

        <MotionInView delay={0.5} preset="fadeUp">
          <article className="mt-6 rounded-2xl border border-zinc-400 bg-white px-6 py-4 md:px-8 md:py-5">
            <p className="text-brand-black text-center text-base font-bold text-pretty">
              Tudo isso deveria custar:{' '}
              <span className="text-brand-red line-through">R$ 649,00</span>
            </p>
          </article>
        </MotionInView>

        <MotionInView delay={0.6} preset="fadeUp">
          <p className="mt-8 text-center text-lg font-bold text-balance text-black md:text-2xl">
            Mas, somente hoje, você pode ter acesso ao Dica Black por um valor
            muito mais acessível!
          </p>
        </MotionInView>
      </div>
    </section>
  )
}
