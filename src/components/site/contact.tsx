import { Mail, MessageCircle } from "lucide-react";
import { Reveal } from "./reveal";
import { MagneticButton } from "./magnetic-button";

export const EMAIL = "portedreina@gmail.com";
export const PHONE_DISPLAY = "+55 51 9155-2635";
export const WHATSAPP_URL = "https://wa.me/5551991552635";

export function Contact() {
  return (
    <section
      id="contato"
      className="grain border-t border-hairline bg-surface/60"
    >
      <div className="mx-auto max-w-[90rem] px-5 py-28 sm:px-8 sm:py-40 lg:px-12">
        <Reveal>
          <span className="eyebrow">Contato</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 max-w-4xl text-[clamp(2.4rem,7vw,5.5rem)] leading-[1] tracking-[-0.03em]">
            Tem um projeto em mente?
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
            Entre em contato para apresentar sua ideia e entender o que pode ser
            desenvolvido.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-12 flex flex-wrap gap-3">
            <MagneticButton href={WHATSAPP_URL} external>
              <MessageCircle size={14} /> WhatsApp
            </MagneticButton>
            <MagneticButton href={`mailto:${EMAIL}`} variant="outline">
              <Mail size={14} /> E-mail
            </MagneticButton>
          </div>
        </Reveal>

        <div className="mt-16 grid max-w-2xl gap-6 sm:grid-cols-2">
          <Reveal delay={0.3}>
            <div className="border-t border-hairline pt-4">
              <span className="eyebrow">E-mail</span>
              <a
                href={`mailto:${EMAIL}`}
                className="link-underline mt-2 block text-base break-all"
              >
                {EMAIL}
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.36}>
            <div className="border-t border-hairline pt-4">
              <span className="eyebrow">WhatsApp</span>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="link-underline mt-2 block text-base"
              >
                {PHONE_DISPLAY}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
