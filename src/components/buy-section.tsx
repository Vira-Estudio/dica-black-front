import card01 from '@/assets/cards/CARD-01.webp'
import logo from '@/assets/logo.webp'
import { Button } from '@/components/ui/button'
import { MaterialSymbol } from '@/components/ui/material-symbol'
import { MotionInView } from '@/components/ui/motion-in-view'

const trustItems = [
  {
    icon: 'encrypted',
    label: (
      <>
        Compra <br /> <strong>Segura</strong>
      </>
    ),
  },
  {
    icon: 'lock',
    label: (
      <>
        Privacidade <br /> <strong>Protegida</strong>
      </>
    ),
  },
  {
    icon: 'star',
    label: (
      <>
        Satisfação <br /> <strong>Garantida</strong>
      </>
    ),
  },
]

export function BuySection() {
  return (
    <section className="bg-brand-muted300 py-12 md:py-16">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <h2 className="sr-only">Garantir meu acesso ao Dica Black</h2>
        <div className="bg-brand-muted200 grid items-center overflow-hidden rounded-2xl shadow-md md:grid-cols-2">
          <MotionInView
            className="flex items-center justify-center"
            delay={0.25}
            preset="fadeScale"
          >
            <img
              alt="Mockups de celular do Dica Black"
              className="h-auto w-full max-w-xs object-contain md:max-w-sm"
              decoding="async"
              height={600}
              loading="lazy"
              src={card01}
              width={300}
            />
          </MotionInView>

          <div className="flex flex-col items-center justify-center gap-5 p-8 text-center">
            <MotionInView delay={0.3} preset="fadeUp">
              <img
                alt="Logo Dica Black"
                className="aspect-[250/28] h-auto w-full max-w-64"
                decoding="async"
                height={28}
                loading="lazy"
                src={logo}
                width={250}
              />
            </MotionInView>

            <MotionInView delay={0.4} preset="fadeUp">
              <p className="text-brand-green border-y-2 border-y-zinc-400 px-5 py-8 text-xl font-bold text-balance md:text-3xl">
                Apenas R$ 47,90
              </p>
            </MotionInView>

            <MotionInView
              className="w-full max-w-xs"
              delay={0.5}
              preset="fadeUp"
            >
              <Button
                className="h-12 w-full font-bold uppercase md:text-base"
                size="lg"
                type="button"
                variant="brand"
              >
                Eu quero o meu
              </Button>
            </MotionInView>

            <div className="mt-2 grid w-full max-w-sm grid-cols-3 gap-3">
              {trustItems.map((item, index) => (
                <MotionInView
                  delay={0.55 + index * 0.1}
                  key={item.icon}
                  preset="fadeUp"
                >
                  <div className="flex flex-col items-center gap-1">
                    <MaterialSymbol
                      aria-hidden
                      className="text-zinc-600"
                      icon={item.icon}
                      size={20}
                    />
                    <p className="text-brand-black text-xs font-medium">
                      {item.label}
                    </p>
                  </div>
                </MotionInView>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
