import { stats } from "@/data/portfolio";
import { scrollToSection } from "@/lib/scroll-to-section";

const statTone: Record<string, string> = {
  sun: "bg-sun/25",
  accent: "bg-accent/15",
  brand: "bg-brand/15",
  mint: "bg-mint/15",
};

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-16 pb-20 md:pt-24">
      <h1 className="mt-6 font-display text-[13vw] leading-[0.92] font-bold tracking-tight md:text-8xl">
        Fullstack
        <br />
        <span className="text-brand">PHP·Laravel</span>
        <br />
        <span className="text-accent">+ React</span>
      </h1>
      <p className="mt-8 max-w-md text-lg text-muted-foreground">
        Olá, me chamo Matheus. Construo aplicações web bem estruturadas e escaláveis, do banco de dados ao pixel.
        Também faço APIs com arquitetura bem definida com mais planejamento e menos retrabalho.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => scrollToSection("projetos")}
          className="group shadow-hard inline-flex cursor-pointer items-center gap-3 rounded-full bg-brand px-7 py-4 text-lg font-semibold text-brand-foreground transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
        >
          Ver os projetos
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </button>
        <button
          type="button"
          onClick={() => scrollToSection("contato")}
          className="inline-flex cursor-pointer items-center gap-2 rounded-full border-2 border-foreground px-7 py-4 text-lg font-semibold transition-colors hover:bg-foreground hover:text-background"
        >
          Fale comigo
        </button>
      </div>
    </section>
  );
}
