import { EMAIL, PHONE_DISPLAY, WHATSAPP_URL } from "./contact";

const links = [
  { id: "projetos", label: "Projetos" },
  { id: "servicos", label: "Serviços" },
  { id: "sobre", label: "Sobre" },
  { id: "contato", label: "Contato" },
];

export function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto flex max-w-[90rem] flex-col gap-10 px-5 py-14 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12">
        <div>
          <span className="font-display text-3xl">
            RODRIGO<span className="text-accent">.</span>
          </span>
          <p className="eyebrow mt-3">Criador de sites</p>
        </div>

        <nav aria-label="Rodapé">
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className="link-underline font-mono text-[0.7rem] tracking-[0.18em] text-muted-foreground uppercase hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-sm text-muted-foreground">
          <a href={`mailto:${EMAIL}`} className="link-underline block break-all">
            {EMAIL}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="link-underline mt-1 block"
          >
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-[90rem] px-5 pb-10 sm:px-8 lg:px-12">
        <p className="border-t border-hairline pt-6 font-mono text-[0.65rem] tracking-[0.16em] text-muted-foreground uppercase">
          Projetos apresentados são conceitos visuais, não representam clientes reais.
        </p>
      </div>
    </footer>
  );
}
