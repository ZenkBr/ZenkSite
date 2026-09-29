import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

const links = [
  { id: "inicio", label: "Início" },
  { id: "projetos", label: "Projetos" },
  { id: "servicos", label: "Serviços" },
  { id: "sobre", label: "Sobre" },
  { id: "processo", label: "Processo" },
  { id: "contato", label: "Contato" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("inicio");
  const { theme, toggle } = useTheme();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-700",
          scrolled
            ? "border-b border-hairline bg-background/80 backdrop-blur-xl"
            : "border-b border-transparent",
        )}
      >
        <nav className="mx-auto flex h-16 max-w-[90rem] items-center justify-between px-5 sm:h-20 sm:px-8 lg:px-12">
          <a
            href="#inicio"
            className="font-display text-xl tracking-tight sm:text-2xl"
            aria-label="Rodrigo — início"
          >
            RODRIGO
            <span className="text-accent">.</span>
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className={cn(
                    "relative font-mono text-[0.7rem] tracking-[0.18em] uppercase transition-colors duration-400",
                    active === l.id
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {l.label}
                  {active === l.id ? (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute -bottom-2 left-0 h-px w-full bg-accent"
                    />
                  ) : null}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
              className="relative flex size-10 items-center justify-center rounded-full border border-hairline transition-colors duration-500 hover:border-accent hover:text-accent"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute"
                >
                  {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                </motion.span>
              </AnimatePresence>
            </button>

            <button
              onClick={() => setOpen(true)}
              aria-label="Abrir menu"
              className="flex size-10 items-center justify-center rounded-full border border-hairline lg:hidden"
            >
              <Menu size={16} />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ clipPath: "circle(0% at 92% 6%)" }}
            animate={{ clipPath: "circle(145% at 92% 6%)" }}
            exit={{ clipPath: "circle(0% at 92% 6%)" }}
            transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[60] bg-background lg:hidden"
          >
            <div className="flex h-16 items-center justify-between px-5 sm:h-20 sm:px-8">
              <span className="font-display text-xl">
                RODRIGO<span className="text-accent">.</span>
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Fechar menu"
                className="flex size-10 items-center justify-center rounded-full border border-hairline"
              >
                <X size={16} />
              </button>
            </div>
            <ul className="mt-6 px-5 sm:px-8">
              {links.map((l, i) => (
                <motion.li
                  key={l.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18 + i * 0.06, duration: 0.5 }}
                  className="border-b border-hairline"
                >
                  <a
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between py-5 font-display text-4xl"
                  >
                    {l.label}
                    <span className="font-mono text-[0.65rem] text-muted-foreground">
                      0{i + 1}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="px-5 pt-10 sm:px-8"
            >
              <p className="eyebrow">Contato</p>
              <p className="mt-3 text-sm">portedreina@gmail.com</p>
              <p className="text-sm">+55 51 9155-2635</p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
