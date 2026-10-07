import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../components/site/Header";
import { About, Faq, Features, FinalCta, Footer, Hero, HowItWorks, Results, Treatments } from "../components/site/Sections";

const title = "AURA Estética — Clínica de estética personalizada";
const description =
  "Limpeza de pele, harmonização facial, depilação a laser e tratamentos corporais com atendimento personalizado. Agende sua avaliação pelo WhatsApp.";

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

export default function Index() {
  return (
    <>
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-background focus:p-3">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Treatments />
        <About />
        <Results />
        <HowItWorks />
        <Features />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}

