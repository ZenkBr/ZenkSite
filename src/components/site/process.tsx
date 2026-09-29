import { Reveal, SectionHeading } from "./reveal";

const steps = [
  {
    n: "01",
    title: "Entendimento",
    text: "Conversa inicial para entender o objetivo do site e o que precisa ser desenvolvido.",
  },
  {
    n: "02",
    title: "Planejamento",
    text: "Definição de estrutura, seções, conteúdo e direção visual do projeto.",
  },
  {
    n: "03",
    title: "Desenvolvimento",
    text: "Construção do site, com layout, responsividade, animações e funcionalidades.",
  },
  {
    n: "04",
    title: "Ajustes",
    text: "Revisões e alterações durante o desenvolvimento até chegar ao resultado desejado.",
  },
  {
    n: "05",
    title: "Entrega",
    text: "Finalização do projeto e entrega do site pronto para uso.",
  },
];

export function Process() {
  return (
    <section
      id="processo"
      className="border-y border-hairline bg-surface/60"
    >
      <div className="mx-auto max-w-[90rem] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <SectionHeading eyebrow="Processo" title="Do primeiro contato à entrega." />

        <ol className="mt-14">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 0.06}>
              <div className="group grid grid-cols-1 items-baseline gap-2 border-t border-hairline py-8 transition-colors duration-500 sm:grid-cols-[6rem_16rem_1fr] sm:gap-8">
                <span className="font-mono text-[0.7rem] tracking-[0.2em] text-accent">
                  {s.n}
                </span>
                <h3 className="text-2xl transition-transform duration-500 group-hover:translate-x-1 sm:text-3xl">
                  {s.title}
                </h3>
                <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
