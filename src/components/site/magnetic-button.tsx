import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  href: string;
  variant?: "solid" | "outline";
  className?: string;
  external?: boolean;
  onClick?: () => void;
};

export function MagneticButton({
  children,
  href,
  variant = "solid",
  className,
  external,
  onClick,
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduce = useReducedMotion();
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 });

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick}
      style={{ x, y }}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
      onMouseMove={(e) => {
        if (reduce || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * 0.22);
        y.set((e.clientY - (r.top + r.height / 2)) * 0.28);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className={cn(
        "group inline-flex items-center justify-center gap-3 rounded-full px-7 py-3.5 font-mono text-[0.7rem] tracking-[0.18em] uppercase transition-colors duration-500",
        variant === "solid"
          ? "bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground"
          : "border border-hairline text-foreground hover:border-accent hover:text-accent",
        className,
      )}
    >
      {children}
    </motion.a>
  );
}
