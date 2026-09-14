export function Summary() {
  return (
    <section id="resumo" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-16">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-foreground p-8 text-background md:p-14">
        <div className="animate-bob absolute -top-10 -right-10 size-40 rounded-full bg-brand opacity-30" />
        <div className="absolute bottom-0 left-10 size-24 rounded-full bg-accent opacity-20" />
        <span className="relative font-display text-sm tracking-[0.2em] text-brand uppercase">
          Resumo profissional
        </span>
        <h2 className="relative mt-4 max-w-3xl font-display text-3xl leading-tight font-bold tracking-tight sm:text-4xl md:text-5xl">
          Trabalho há seis anos com PHP/Laravel tirando ideias do papel e melhorando projetos existentes.
        </h2>
        <p className="relative mt-6 max-w-2xl text-lg opacity-75">
          Entrego soluções completas em Laravel/PHP, ReactJs ou NodeJs com planejamento, entendimento do contexto do negócio e projeto,
          comunicação ativa para não ter espaço para dúvidas e uma experiência de ter um ótimo profissional que trabalha com honestidade, comprometimento e imersão.
        </p>
      </div>
    </section>
  );
}
