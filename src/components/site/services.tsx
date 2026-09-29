import { Reveal, SectionHeading } from "./reveal";

const services = [
  {
    n: "01",
    title: "Landing Pages",
    text: "Páginas focadas em um objetivo claro, com estrutura direta e leitura rápida.",
  },
  {
    n: "02",
    title: "Sites institucionais",
    text: "Apresentação completa de uma marca, com seções organizadas e navegação simples.",
  },
  {
    n: "03",
    title: "Sites para negócios",
    text: "Estrutura construída a partir do que o negócio precisa comunicar e oferecer.",
  },
  {
    n: "04",
    title: "Interfaces personalizadas",
    text: "Layouts desenvolvidos do zero, sem depender de um modelo pronto.",
  },
  {
    n: "05",
    title: "Redesign de sites",
    text: "Atualização visual e estrutural de projetos já existentes.",
  },
  {
    n: "06",
    title: "Experiências interativas",
    text: "Animações, transições e microinterações aplicadas com propósito.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="mx-auto max-w-[90rem] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <SectionHeading
        eyebrow="O que eu desenvolvo"
        title={
          <>
            Cada projeto é definido
            <br />
            pelo que precisa ser feito.
          </>
        }
        subtitle="Não trabalho com um modelo único para todos os clientes. O escopo é montado de acordo com o objetivo de cada site."
      />

      <div className="mt-16 grid grid-cols-1 border-t border-hairline sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal
            key={s.n}
            delay={(i % 3) * 0.08}
            className="group relative overflow-hidden border-b border-hairline p-8 sm:odd:border-r lg:odd:border-r-0 lg:[&:not(:nth-child(3n))]:border-r"
          >
            <div className="absolute inset-0 origin-bottom scale-y-0 bg-surface transition-transform duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100" />
            <div className="relative">
              <span className="font-mono text-[0.65rem] tracking-[0.2em] text-accent">
                {s.n}
              </span>
              <h3 className="mt-5 text-2xl transition-transform duration-500 group-hover:translate-x-1">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
