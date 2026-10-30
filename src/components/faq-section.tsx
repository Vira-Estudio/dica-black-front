import { Minus, Plus } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    answer: 'Você pode fazer o pagamento pelo PIX ou cartão de crédito.',
    question: 'Qual é a forma de pagamento?',
    value: 'pagamento',
  },
  {
    answer:
      'Sim. O checkout é feito em ambiente seguro, com criptografia e proteção dos seus dados em todas as etapas da compra.',
    question: 'O pagamento é seguro?',
    value: 'seguro',
  },
  {
    answer:
      'Se você treina Jiu-Jitsu e sente dificuldade em lembrar das técnicas na hora do rola, o Dica Black foi feito para você — independentemente da faixa ou do tempo de treino.',
    question: 'Funciona pra mim?',
    value: 'funciona',
  },
  {
    answer:
      'Assim que a compra for confirmada, você recebe o acesso no e-mail cadastrado e pode começar a estudar imediatamente pela plataforma.',
    question: 'Como vou acessar o mini curso?',
    value: 'acesso',
  },
]

export function FaqSection() {
  return (
    <section className="bg-brand-muted200 py-12 md:py-16">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <h2 className="text-brand-black text-center text-xl font-extrabold md:text-3xl">
          Perguntas Frequentes
        </h2>

        <Accordion className="mt-10 gap-3" defaultValue={['pagamento']}>
          {faqs.map((faq) => (
            <AccordionItem
              className="border-border rounded-xl border bg-white px-4 not-last:border-b-0"
              key={faq.value}
              value={faq.value}
            >
              <AccordionTrigger className="py-4 hover:no-underline **:data-[slot=accordion-trigger-icon]:hidden">
                <span className="flex items-center gap-3">
                  <span className="bg-brand-red flex size-7 shrink-0 items-center justify-center rounded-full text-white group-aria-expanded/accordion-trigger:hidden">
                    <Plus className="size-4" />
                  </span>
                  <span className="bg-brand-red hidden size-7 shrink-0 items-center justify-center rounded-full text-white group-aria-expanded/accordion-trigger:flex">
                    <Minus className="size-4" />
                  </span>
                  <span className="text-brand-black text-base font-bold text-pretty">
                    {faq.question}
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4 text-pretty">
                <p>{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
