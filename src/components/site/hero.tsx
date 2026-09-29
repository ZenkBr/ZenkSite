import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { MagneticButton } from "./magnetic-button";
import { projects } from "@/lib/projects";

const words = ["Sites", "que", "transformam", "ideias", "em", "experiências", "digitais."];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yA = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-22%"]);
  const yB = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-40%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="inicio"
      ref={ref}
      className="grain relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-28 pb-16"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.5]">
        <motion.div
          style={{ y: yA }}
          className="absolute -right-16 top-24 hidden h-[26rem] w-60 overflow-hidden rounded-sm border border-hairline md:block lg:right-10 lg:w-72"
        >
          <img
            src={projects[1]!.image}
            alt=""
            aria-hidden
            className="h-full w-full object-cover"
          />
        </motion.div>
        <motion.div
          style={{ y: yB }}
          className="absolute -left-20 bottom-4 hidden h-72 w-52 overflow-hidden rounded-sm border border-hairline lg:left-6 lg:block"
        >
          <img
            src={projects[4]!.image}
            alt=""
            aria-hidden
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>

      <motion.div
        style={{ opacity: fade }}
        className="mx-auto w-full max-w-[90rem] px-5 sm:px-8 lg:px-12"
      >
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="eyebrow"
        >
          Rodrigo — Criador de sites
        </motion.span>

        <h1 className="mt-6 max-w-5xl text-[clamp(2.6rem,9vw,7rem)] leading-[0.98] tracking-[-0.03em]">
          {words.map((w, i) => (
            <span key={w + i} className="mr-[0.25em] inline-block overflow-hidden">
              <motion.span
                className="inline-block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  delay: 1.25 + i * 0.07,
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {w === "experiências" ? <em className="text-accent not-italic">{w}</em> : w}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.8 }}
          className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Desenvolvimento web profissional, personalizado e responsivo, construído de
          acordo com o objetivo de cada projeto.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.05, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <MagneticButton href="#projetos">Ver projetos</MagneticButton>
          <MagneticButton href="#contato" variant="outline">
            Fale comigo
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4 }}
        className="mx-auto mt-16 flex w-full max-w-[90rem] items-center gap-4 px-5 sm:px-8 lg:px-12"
      >
        <span className="font-mono text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
          Role
        </span>
        <div className="relative h-px flex-1 overflow-hidden bg-hairline">
          <motion.span
            className="absolute inset-y-0 left-0 w-16 bg-accent"
            animate={{ x: ["-4rem", "100%"] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
