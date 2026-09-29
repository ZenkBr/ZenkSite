import { useState } from "react";
import { motion } from "motion/react";
import { Reveal, SectionHeading } from "./reveal";
import { cn } from "@/lib/utils";

const factors = [
  { id: "paginas", label: "Quantidade de páginas" },
  { id: "funcionalidades", label: "Funcionalidades específicas" },
  { id: "animacoes", label: "Animações e interações" },
  { id: "conteudo", label: "Criação de conteúdo visual" },
  { id: "integracoes", label: "Integrações e formulários" },
  { id: "personalizacao", label: "Nível de personalização" },
];

export function Pricing() {
  const [selected, setSelected] = useState<string[]>(["paginas"]);
  const level = Math.min(selected.length / factors.length, 1);

  return (
    <section className="mx-auto max-w-[90rem] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Prazo e orçamento"
            title="A partir de R$ 800"
            subtitle="O valor final depende da complexidade, quantidade de páginas, funcionalidades e nível de personalização. O prazo varia conforme o projeto: projetos menores podem ser concluídos mais rapidamente, enquanto projetos maiores exigem mais tempo."
          />
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground">
              O valor é definido individualmente após entender o que será necessário
              desenvolver — não há pacotes fechados.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="border border-hairline p-7 sm:p-10">
            <span className="eyebrow">Selecione o que o seu projeto pode incluir</span>
            <div className="mt-6 flex flex-wrap gap-2">
              {factors.map((f) => {
                const on = selected.includes(f.id);
                return (
                  <button
                    key={f.id}
                    onClick={() =>
                      setSelected((prev) =>
                        on ? prev.filter((x) => x !== f.id) : [...prev, f.id],
                      )
                    }
                    aria-pressed={on}
                    className={cn(
                      "rounded-full border px-4 py-2 text-left text-xs transition-colors duration-400",
                      on
                        ? "border-accent bg-accent/10 text-accent"
                        : "border-hairline text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-10">
              <div className="flex items-baseline justify-between">
                <span className="eyebrow">Complexidade estimada</span>
                <span className="font-mono text-[0.7rem] tracking-[0.18em] text-accent uppercase">
                  {level < 0.34 ? "Menor" : level < 0.67 ? "Intermediária" : "Maior"}
                </span>
              </div>
              <div className="mt-4 h-px w-full bg-hairline">
                <motion.div
                  className="h-px bg-accent"
                  animate={{ width: `${Math.max(level, 0.08) * 100}%` }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                Quanto mais itens o projeto envolve, maior tende a ser o tempo de
                desenvolvimento e o investimento. Este indicador é apenas ilustrativo — o
                orçamento é definido depois de entender o projeto.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
