import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { MotionInView } from '@/components/ui/motion-in-view'
import { faqs } from '@/data/faq'

function PlusIcon() {
  return (
    <svg
      aria-hidden
      fill="none"
      height="16"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.5"
      viewBox="0 0 24 24"
      width="16"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}

function MinusIcon() {
  return (
    <svg
      aria-hidden
      fill="none"
      height="16"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.5"
      viewBox="0 0 24 24"
      width="16"
    >
      <path d="M5 12h14" />
    </svg>
  )
}

export function FaqSection() {
  return (
    <section className="bg-brand-muted200 py-12 md:py-16">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <MotionInView delay={0.25} preset="fadeDown">
          <h2 className="text-brand-black text-center text-xl font-extrabold md:text-3xl">
            Perguntas Frequentes
          </h2>
        </MotionInView>

        <Accordion className="mt-10 gap-3" defaultValue={['pagamento']}>
          {faqs.map((faq, index) => (
            <MotionInView
              delay={0.35 + index * 0.12}
              key={faq.value}
              preset="fadeUp"
            >
              <AccordionItem
                className="border-border rounded-xl border bg-white px-4 not-last:border-b-0"
                value={faq.value}
              >
                <AccordionTrigger className="py-4 hover:no-underline **:data-[slot=accordion-trigger-icon]:hidden">
                  <span className="flex items-center gap-3">
                    <span className="bg-brand-red flex size-7 shrink-0 items-center justify-center rounded-full text-white group-aria-expanded/accordion-trigger:hidden">
                      <PlusIcon />
                    </span>
                    <span className="bg-brand-red hidden size-7 shrink-0 items-center justify-center rounded-full text-white group-aria-expanded/accordion-trigger:flex">
                      <MinusIcon />
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
            </MotionInView>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
