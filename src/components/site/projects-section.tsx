import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/lib/projects";
import { Reveal, SectionHeading } from "./reveal";
import { cn } from "@/lib/utils";

function Card({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal
      delay={(index % 2) * 0.1}
      className={cn(
        "group",
        project.span === "wide" && "lg:col-span-7",
        project.span === "tall" && "lg:col-span-5",
        project.span === "regular" && "lg:col-span-6",
      )}
    >
      <button
        type="button"
        data-project={project.id}
        className="block w-full cursor-pointer text-left"
      >
        <div className="relative overflow-hidden rounded-sm border border-hairline bg-surface">
          <div
            className={cn(
              "overflow-hidden",
              project.span === "tall" ? "aspect-[3/4]" : "aspect-[4/3]",
            )}
          >
            <img
              src={project.image}
              alt={`${project.name} — ${project.concept}`}
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 flex items-end justify-end p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <span className="flex items-center gap-2 rounded-full bg-background/90 px-4 py-2 font-mono text-[0.65rem] tracking-[0.18em] uppercase backdrop-blur-md">
              Explorar <ArrowUpRight size={12} />
            </span>
          </div>
        </div>
        <div className="mt-5 flex items-baseline justify-between gap-6 border-t border-hairline pt-4">
          <h3 className="text-2xl sm:text-3xl">{project.name}</h3>
          <span className="font-mono text-[0.65rem] tracking-[0.18em] text-muted-foreground uppercase">
            {project.category}
          </span>
        </div>
        <p className="mt-2 max-w-md text-sm text-muted-foreground">{project.concept}</p>
      </button>
    </Reveal>
  );
}

export function ProjectsSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const open = projects.find((p) => p.id === openId) ?? null;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenId(null);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <section
      id="projetos"
      className="mx-auto max-w-[90rem] px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
    >
      <SectionHeading
        eyebrow="Projetos conceituais"
        title="Demonstrações visuais de possibilidades."
        subtitle="Os projetos abaixo são conceitos criados para demonstrar estilos e possibilidades de desenvolvimento. Não representam clientes ou empresas reais."
      />

      <div
        className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-12"
        onClick={(e) => {
          const el = (e.target as HTMLElement).closest("[data-project]");
          if (el) setOpenId(el.getAttribute("data-project"));
        }}
      >
        {projects.map((p, i) => (
          <Card key={p.id} project={p} index={i} />
        ))}
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[80] overflow-y-auto bg-background/95 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            role="dialog"
            aria-modal="true"
            aria-label={open.name}
          >
            <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <span className="eyebrow">{open.category}</span>
                    <h3 className="mt-3 text-4xl sm:text-6xl">{open.name}</h3>
                  </div>
                  <button
                    onClick={() => setOpenId(null)}
                    aria-label="Fechar"
                    className="flex size-11 shrink-0 items-center justify-center rounded-full border border-hairline transition-colors hover:border-accent hover:text-accent"
                  >
                    <X size={16} />
                  </button>
                </div>

                <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  {open.description}
                </p>

                <div className="mt-10 overflow-hidden rounded-sm border border-hairline">
                  <img
                    src={open.image}
                    alt={`${open.name} — ${open.concept}`}
                    className="w-full"
                  />
                </div>

                <div className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                  {open.traits.map((t, i) => (
                    <div
                      key={t}
                      className="flex items-baseline gap-4 border-t border-hairline pt-4"
                    >
                      <span className="font-mono text-[0.65rem] text-accent">
                        0{i + 1}
                      </span>
                      <span className="text-sm text-muted-foreground">{t}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-12 flex justify-center">
                  <button
                    onClick={() => setOpenId(null)}
                    className="rounded-full border border-hairline px-7 py-3.5 font-mono text-[0.7rem] tracking-[0.18em] uppercase transition-colors hover:border-accent hover:text-accent"
                  >
                    Fechar
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
