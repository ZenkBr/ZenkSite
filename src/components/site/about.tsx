import { Reveal, SectionHeading } from "./reveal";

const adaptables = [
  "Layout e estrutura da página",
  "Imagens e elementos visuais",
  "Animações e transições",
  "Cores e identidade visual",
  "Responsividade para celular, tablet e computador",
  "Funcionalidades específicas",
  "Ajustes e alterações durante o desenvolvimento",
];

export function About() {
  return (
    <section
      id="sobre"
      className="border-y border-hairline bg-surface/60"
    >
      <div className="mx-auto max-w-[90rem] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <SectionHeading
          eyebrow="Sobre"
          title="Desenvolvimento pensado para cada projeto."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
            <Reveal>
              <p className="text-foreground">
                Sou Rodrigo, criador de sites profissionais. Desenvolvo projetos
                personalizados buscando equilibrar qualidade visual, funcionalidade,
                responsividade e desempenho.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p>
                Meu trabalho é focado principalmente em desenvolvimento, desempenho,
                responsividade, qualidade visual e funcionalidade. Cada site é construído
                de acordo com o objetivo do cliente, podendo incluir diferentes layouts,
                imagens, animações, interações e funcionalidades.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p>
                Não trabalho com um modelo único para todos os clientes. O projeto é
                definido de acordo com o que precisa ser desenvolvido.
              </p>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <span className="eyebrow">O projeto pode ser adaptado em</span>
            </Reveal>
            <ul className="mt-6">
              {adaptables.map((a, i) => (
                <Reveal as="li" key={a} delay={i * 0.05}>
                  <div className="group flex items-baseline gap-5 border-b border-hairline py-4">
                    <span className="font-mono text-[0.65rem] text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm transition-transform duration-500 group-hover:translate-x-1">
                      {a}
                    </span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
