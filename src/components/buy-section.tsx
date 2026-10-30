import { LockKeyhole, ShieldCheck, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function BuySection() {
  return (
    <section className="bg-brand-muted300 py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <div className="bg-brand-muted200 grid overflow-hidden rounded-2xl shadow-md md:grid-cols-2">
          <div className="bg-brand-red flex items-center justify-center p-8">
            <img
              alt="Mockups de celular do Dica Black"
              className="h-auto w-48 md:w-56"
              height={600}
              src="https://placehold.co/300x600?text=Mockups"
              width={300}
            />
          </div>

          <div className="flex flex-col items-center justify-center gap-5 p-8 text-center">
            <img
              alt="Logo Dica Black"
              className="h-10 w-auto"
              height={48}
              src="https://placehold.co/200x48?text=DICA+BLACK"
              width={200}
            />

            <p className="text-brand-green border-y-2 border-y-zinc-400 px-5 py-8 text-xl font-bold text-balance md:text-3xl">
              Apenas R$ 47,90
            </p>

            <Button
              className="h-12 w-full max-w-xs font-bold uppercase md:text-base"
              size="lg"
              type="button"
              variant="brand"
            >
              Eu quero o meu
            </Button>

            <div className="mt-2 grid w-full max-w-sm grid-cols-3 gap-3">
              <div className="flex flex-col items-center gap-1">
                <LockKeyhole className="size-5 text-zinc-600" />
                <p className="text-brand-black text-xs font-medium">
                  Compra <br /> <strong>Segura</strong>
                </p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <ShieldCheck className="size-5 text-zinc-600" />
                <p className="text-brand-black text-xs font-medium">
                  Privacidade <br /> <strong>Protegida</strong>
                </p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Star className="size-5 text-zinc-600" />
                <p className="text-brand-black text-xs font-medium">
                  Satisfação <br /> <strong>Garantida</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
