export function TwoOptionsSection() {
  return (
    <section className="bg-brand-muted100 py-12 pt-0 md:py-16 md:pt-0">
      <div className="">
        <h2 className="bg-brand-black px-4 py-12 text-center text-xl font-extrabold text-balance text-white md:px-8 md:py-16 md:text-3xl">
          Agora você tem{' '}
          <span className="text-brand-orange">duas escolhas:</span>
        </h2>

        <div className="mx-auto mt-10 grid max-w-5xl gap-6 px-4 md:grid-cols-2 md:px-8">
          <article className="rounded-2xl border border-zinc-400 bg-white p-6 md:p-8">
            <p className="w-full max-w-32 rounded-full bg-black px-5 py-2 text-center text-sm font-bold text-white uppercase md:max-w-40 md:text-base">
              Opção 01
            </p>
            <h3 className="mt-2 text-lg font-extrabold text-pretty text-black md:text-xl">
              Continuar travando na hora do rola
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-balance text-black md:text-base">
              Continuar esquecendo as técnicas, repetindo os mesmos erros e
              sentindo que não evolui, mesmo treinando toda semana.
            </p>
          </article>

          <article className="bg-brand-orange relative rounded-2xl p-6 text-white md:p-8">
            <p className="bg-brand-green w-full max-w-32 rounded-full px-5 py-2 text-center text-sm font-bold text-white uppercase md:max-w-40 md:text-base">
              Opção 02
            </p>
            <h3 className="mt-2 text-lg font-extrabold text-pretty md:text-xl">
              Começar a evoluir com o Dica Black
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-balance text-white/90 md:text-base">
              Acessar o Dica Black, revisar as técnicas quando quiser e chegar
              aos treinos com mais clareza e confiança.
            </p>
          </article>
        </div>

        <div className="mt-10 px-4 text-center text-balance md:px-8">
          <p className="text-lg font-bold text-black md:text-2xl">
            Eu sei (e você também sabe):
          </p>
          <p className="text-brand-orange text-lg font-bold md:text-2xl">
            a opção 2 é a mais inteligente.
          </p>
          <p className="mx-auto mt-2 w-full max-w-md text-sm text-black md:text-base">
            Então clique no botão abaixo e comece agora mesmo a aprimorar seu
            Jiu-Jitsu com o Dica Black.
          </p>
        </div>
      </div>
    </section>
  )
}
