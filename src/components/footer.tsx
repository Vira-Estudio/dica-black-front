import logo from '@/assets/logo.webp'
import { MotionInView } from '@/components/ui/motion-in-view'
import { entranceInViewOptionsEnd } from '@/utils/motion-entrance'

export function Footer() {
  return (
    <footer className="bg-brand-red-dark text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-16">
        <MotionInView
          delay={0.15}
          inViewOptions={entranceInViewOptionsEnd}
          preset="fadeUp"
        >
          <img
            alt="Dica Black"
            className="mx-auto w-full max-w-58"
            decoding="async"
            height={48}
            loading="lazy"
            src={logo}
            width={200}
          />
        </MotionInView>

        <MotionInView
          delay={0.3}
          inViewOptions={entranceInViewOptionsEnd}
          preset="fadeUp"
        >
          <p className="mt-6 text-center text-sm text-balance md:text-base">
            Ficou com alguma dúvida? Entre em contato pelo e-mail:
          </p>
          <a
            className="mt-2 block text-center text-base font-bold underline underline-offset-4"
            href="mailto:dicablack@gmail.com"
          >
            dicablack@gmail.com
          </a>
        </MotionInView>

        <MotionInView
          delay={0.4}
          inViewOptions={entranceInViewOptionsEnd}
          preset="fadeUp"
        >
          <p className="mt-8 text-center text-xs leading-relaxed text-balance text-white/80 md:text-sm">
            Os conteúdos do Dica Black têm finalidade educacional e são
            destinados ao aprimoramento dos conhecimentos e técnicas de
            Jiu-Jitsu. Os resultados podem variar conforme a dedicação, a
            frequência de treinamento e a experiência de cada praticante. O Dica
            Black não substitui a orientação presencial de um professor
            qualificado. Recomendamos que todas as técnicas sejam praticadas em
            ambiente adequado e com supervisão profissional.
          </p>
        </MotionInView>
      </div>

      <div className="bg-brand-black py-4">
        <p className="text-center text-xs text-white/80 md:text-sm">
          Todos os Direitos Reservados ©
        </p>
      </div>
    </footer>
  )
}
