import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { Services } from "@/components/site/services";
import { ProjectsSection } from "@/components/site/projects-section";
import { About } from "@/components/site/about";
import { Customizer } from "@/components/site/customizer";
import { Process } from "@/components/site/process";
import { Pricing } from "@/components/site/pricing";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";
import { ScrollProgress, BackToTop, IntroCurtain } from "@/components/site/chrome";

const title = "Rodrigo — Criador de sites profissionais";
const description =
  "Portfólio de Rodrigo: desenvolvimento web profissional, personalizado e responsivo, com projetos conceituais, processo de trabalho e contato direto.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <IntroCurtain />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Services />
        <ProjectsSection />
        <About />
        <Customizer />
        <Process />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
