import aboutImage from '@/assets/about.webp'

export function AboutSection() {
  return (
    <section className="bg-brand-black py-12 md:py-16">
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 text-balance md:grid-cols-2 md:gap-12 md:px-8">
        <div>
          <h2 className="text-xl font-extrabold text-white md:text-3xl">
            Por trás do Dica Black está Lucas Braganti.
          </h2>

          <p className="mt-6 text-base leading-relaxed text-white">
            Faixa-preta de Jiu-Jitsu, professor desde 2012 e medalhista em
            competições, Lucas Braganti construiu sua trajetória dentro e fora
            dos tatames.
          </p>

          <p className="mt-4 text-base leading-relaxed text-white">
            Com anos de experiência ensinando alunos de diferentes níveis,
            conhece de perto as dificuldades de quem treina, mas ainda trava na
            hora de colocar as técnicas em prática.
          </p>

          <p className="mt-4 text-base leading-relaxed text-white">
            Agora, com o Dica Black, compartilha seu conhecimento para ajudar
            praticantes a compreender melhor as posições, revisar detalhes
            importantes e desenvolver um Jiu-Jitsu mais consciente.
          </p>
        </div>

        <img
          alt="Lucas Braganti, faixa-preta de Jiu-Jitsu"
          className="mx-auto h-auto w-full max-w-md rounded-2xl object-cover"
          height={640}
          src={aboutImage}
          width={480}
        />
      </div>
    </section>
  )
}
