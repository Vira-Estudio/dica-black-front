export function Hero() {
  return (
    <section className="bg-brand-muted200 overflow-hidden">
      <div className="bg-brand-red px-4 py-3 text-center md:px-8">
        <p className="text-sm font-semibold text-balance text-white md:text-base">
          Você aprende as técnicas de Jiu-jitsu na aula, mas trava na hora do
          rola?
        </p>
      </div>

      <div className="mx-auto flex w-full max-w-xl flex-col justify-center gap-10 px-4 pt-12 md:gap-12 md:px-8 md:pt-16">
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-center text-xl leading-tight font-extrabold text-balance text-black sm:text-nowrap">
            Aprenda a organizar e revisar as <br className="hidden sm:block" />
            <span className="text-brand-red">técnicas de Jiu-Jitsu</span> para
            lembrar melhor <br className="hidden sm:block" /> do que fazer na
            hora do rola.
          </h1>

          <div className="border-border flex w-fit items-center gap-3 rounded-full border bg-white px-4 py-2">
            <img
              alt="Ícone de kimono"
              className="size-6 rounded-full object-cover"
              height={40}
              src="https://placehold.co/40x40?text=Kimono"
              width={40}
            />
            <p className="text-brand-black text-sm font-medium md:text-base">
              Revise suas técnicas mesmo fora do tatame
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <img
            alt="Mockup de celular com o app Dica Black"
            className="mx-auto h-auto w-56 md:w-72"
            height={600}
            src="https://placehold.co/300x600?text=Celular"
            width={300}
          />
        </div>
      </div>
    </section>
  )
}
