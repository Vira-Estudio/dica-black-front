import { CircleCheck, Mail, ShieldCheck } from 'lucide-react'

const steps = [
  {
    description:
      'Assim que finalizar a compra, você vai receber seu acesso no email.',
    icon: Mail,
    title: 'Acesse seu e-mail',
  },
  {
    description: 'Você vai receber todos os entregáveis imediatamente.',
    icon: ShieldCheck,
    title: 'Acesso ao produto',
  },
  {
    description:
      'Agora é só acessar e começar a aprimorar seu Jiu-Jitsu ainda hoje!',
    icon: CircleCheck,
    title: 'Tudo pronto!',
  },
]

export function ReceiveAccessSection() {
  return (
    <section className="bg-brand-muted200 py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <h2 className="text-brand-black mx-auto max-w-xl text-center text-xl font-extrabold text-balance md:text-3xl">
          Compre agora e receba seu acesso no e-mail imediatamente!
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon

            return (
              <article
                className="rounded-2xl border border-zinc-400 bg-white p-6 text-center"
                key={step.title}
              >
                <Icon
                  aria-hidden
                  className="text-brand-orange mx-auto size-14"
                  strokeWidth={1.5}
                />
                <h3 className="mt-4 text-lg font-bold text-balance text-black">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-balance text-black">
                  {step.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
