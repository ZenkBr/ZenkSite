import { useState } from "react";
import { motion } from "motion/react";
import { Reveal, SectionHeading } from "./reveal";
import { cn } from "@/lib/utils";

const palettes = [
  { id: "bronze", label: "Bronze", bg: "#141312", fg: "#f4f1ea", accent: "#c08a4e" },
  { id: "areia", label: "Areia", bg: "#f5f2ec", fg: "#1b1a18", accent: "#8a6a45" },
  { id: "noite", label: "Noite", bg: "#0e131c", fg: "#e9eef7", accent: "#cbb583" },
  { id: "verde", label: "Verde", bg: "#101a17", fg: "#eaf2ee", accent: "#8fb9a3" },
];

const radii = [
  { id: "reto", label: "Reto", value: "0px" },
  { id: "suave", label: "Suave", value: "10px" },
  { id: "pill", label: "Arredondado", value: "999px" },
];

const layouts = [
  { id: "left", label: "Alinhado à esquerda" },
  { id: "center", label: "Centralizado" },
];

export function Customizer() {
  const [palette, setPalette] = useState(palettes[0]!);
  const [radius, setRadius] = useState(radii[2]!);
  const [layout, setLayout] = useState(layouts[0]!);
  const [animated, setAnimated] = useState(true);

  return (
    <section className="mx-auto max-w-[90rem] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <SectionHeading
        eyebrow="Personalização"
        title="Seu projeto. Sua direção."
        subtitle="Cores, layout, tipografia, animações, estrutura e funcionalidades são definidos junto com você. Experimente abaixo algumas alterações possíveis."
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-[22rem_1fr]">
        <Reveal className="space-y-8">
          <Control label="Identidade visual">
            <div className="flex flex-wrap gap-2">
              {palettes.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setPalette(p)}
                  aria-pressed={palette.id === p.id}
                  className={cn(
                    "flex items-center gap-2 rounded-full border px-3 py-2 font-mono text-[0.65rem] tracking-[0.14em] uppercase transition-colors",
                    palette.id === p.id
                      ? "border-accent text-accent"
                      : "border-hairline text-muted-foreground hover:text-foreground",
                  )}
                >
                  <span
                    className="size-3 rounded-full"
                    style={{ background: p.accent }}
                    aria-hidden
                  />
                  {p.label}
                </button>
              ))}
            </div>
          </Control>

          <Control label="Cantos e botões">
            <Segmented
              options={radii}
              activeId={radius.id}
              onSelect={(id) => setRadius(radii.find((r) => r.id === id)!)}
            />
          </Control>

          <Control label="Layout">
            <Segmented
              options={layouts}
              activeId={layout.id}
              onSelect={(id) => setLayout(layouts.find((l) => l.id === id)!)}
            />
          </Control>

          <Control label="Animações">
            <Segmented
              options={[
                { id: "on", label: "Ativas" },
                { id: "off", label: "Reduzidas" },
              ]}
              activeId={animated ? "on" : "off"}
              onSelect={(id) => setAnimated(id === "on")}
            />
          </Control>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className="flex min-h-[26rem] flex-col justify-center overflow-hidden border border-hairline p-8 transition-colors duration-700 sm:p-14"
            style={{ background: palette.bg, color: palette.fg }}
          >
            <motion.div
              key={`${palette.id}-${layout.id}-${animated}`}
              initial={animated ? { opacity: 0, y: 18 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "flex flex-col gap-5",
                layout.id === "center" ? "items-center text-center" : "items-start",
              )}
            >
              <span
                className="font-mono text-[0.65rem] tracking-[0.22em] uppercase"
                style={{ color: palette.accent }}
              >
                Pré-visualização
              </span>
              <h3
                className="max-w-md font-display text-4xl leading-tight sm:text-5xl"
                style={{ color: palette.fg }}
              >
                Uma interface construída para o seu objetivo.
              </h3>
              <p className="max-w-sm text-sm opacity-70">
                Cada elemento desta prévia muda conforme as escolhas ao lado — é assim que
                a direção do projeto é definida.
              </p>
              <div
                className={cn(
                  "flex flex-wrap gap-3",
                  layout.id === "center" && "justify-center",
                )}
              >
                <span
                  className="px-6 py-3 font-mono text-[0.65rem] tracking-[0.18em] uppercase"
                  style={{
                    background: palette.accent,
                    color: palette.bg,
                    borderRadius: radius.value,
                  }}
                >
                  Ação principal
                </span>
                <span
                  className="px-6 py-3 font-mono text-[0.65rem] tracking-[0.18em] uppercase"
                  style={{
                    border: `1px solid ${palette.accent}`,
                    color: palette.accent,
                    borderRadius: radius.value,
                  }}
                >
                  Secundária
                </span>
              </div>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Control({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <span className="eyebrow">{label}</span>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function Segmented({
  options,
  activeId,
  onSelect,
}: {
  options: { id: string; label: string }[];
  activeId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={o.id}
          onClick={() => onSelect(o.id)}
          aria-pressed={activeId === o.id}
          className={cn(
            "rounded-full border px-4 py-2 font-mono text-[0.65rem] tracking-[0.14em] uppercase transition-colors",
            activeId === o.id
              ? "border-accent text-accent"
              : "border-hairline text-muted-foreground hover:text-foreground",
          )}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
