import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Plus, MessageCircle, MapPin, Clock } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import hero from "../../assets/hero.png";
import about from "../../assets/about.png";
import { FAQ, FEATURES, NAV, STEPS, TREATMENTS, WHATSAPP_URL } from "../../lib/site";
import { Reveal, SectionHeading } from "./Reveal";
import texturaAntes from "../../assets/antes-textura&vico.png";
import texturaDepois from "../../assets/depois-textura&vico.png";
import firmezaAntes from  "../../assets/antes-firmeza-corporal.png";
import firmezaDepois from "../../assets/depois-firmeza-corporal.png";
import antesContorno from "../../assets/antes-contorno.png";
import depoisContorno from "../../assets/depois-contorno.png";
import antesLaser from "../../assets/antes-reducao-pelos.png";
import depoisLaser from "../../assets/depois-reducao-pelos.png";
import antesOlhar from "../../assets/antes-olhar.png";
import depoisOlhar from "../../assets/depois-olhar.png";

export const RESULTADOS = [
  {
    title: "Textura e viço",
    category: "Facial",
    imgBefore: texturaAntes,  
    imgAfter: texturaDepois, 
    sessions: "4 sessões",
  },
  {
    title: "Contorno mandibular",
    category: "Facial",
    imgBefore: antesContorno,
    imgAfter: depoisContorno,
    sessions: "1 sessão",
  },
  {
    title: "Redução de pelos",
    category: "Laser",
    imgBefore: antesLaser,
    imgAfter: depoisLaser,
    sessions: "8 sessões",
  },
  {
    title: "Firmeza corporal",
    category: "Corporal",
    imgBefore: firmezaAntes,
    imgAfter: firmezaDepois,
    sessions: "10 sessões",
  },
  {
    title: "Olhar definido",
    category: "Facial",
    imgBefore: antesOlhar,
    imgAfter: depoisOlhar,
    sessions: "1 sessão",
  }
];


const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 md:pt-32">
      <div className="mx-auto grid max-w-7xl items-end gap-12 px-6 pb-20 md:px-10 lg:grid-cols-12 lg:pb-28">
        <div className="lg:col-span-6 lg:pb-16">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="eyebrow">
            Clínica de estética · Fortaleza
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.15, ease }}
            className="mt-6 text-6xl leading-[0.95] sm:text-7xl xl:text-8xl"
          >
            Realce sua beleza. <em className="text-rose-deep">Cuide de você.</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease }}
            className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground"
          >
            Protocolos de estética desenhados para você, com tecnologia, escuta atenta e resultados que respeitam a sua naturalidade.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Agendar avaliação <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#tratamentos" className="btn-ghost">Conhecer tratamentos</a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease }}
          className="relative lg:col-span-6"
        >
          <div className="absolute -left-6 -top-6 hidden h-full w-full rounded-t-[999px] bg-secondary lg:block" aria-hidden />
          <img
            src={hero}
            alt="Mulher com pele luminosa e natural após cuidados estéticos"
            width={1200}
            height={1504}
            className="relative aspect-[4/5] w-full rounded-t-[999px] object-cover"
          />
          <div className="absolute -bottom-6 left-4 bg-background px-6 py-5 shadow-sm md:left-[-2rem]">
            <p className="font-display text-4xl">+2.400</p>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">clientes atendidas</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Treatments() {
  return (
    <section id="tratamentos" className="bg-card py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading eyebrow="Tratamentos" title={<>Cuidados pensados <em>para cada detalhe</em></>} />
          <Reveal><p className="max-w-sm text-muted-foreground">Faciais, corporais e a laser — sempre a partir de uma avaliação individual.</p></Reveal>
        </div>
        <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {TREATMENTS.map((t, i) => (
            <Reveal key={t.title} delay={(i % 3) * 0.1} className={i === 1 ? "lg:mt-16" : i === 4 ? "lg:mt-16" : ""}>
              <article className="group">
                <div className="overflow-hidden">
                  <img src={t.img} alt={t.title} loading="lazy" width={912} height={1104} className="aspect-[4/5] w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105" />
                </div>
                <div className="mt-6 flex items-baseline justify-between gap-4">
                  <h3 className="text-3xl">{t.title}</h3>
                  <span className="font-display text-lg text-rose-deep">0{i + 1}</span>
                </div>
                <p className="mt-3 text-muted-foreground">{t.text}</p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 border-b border-foreground pb-1 text-xs uppercase tracking-[0.2em] transition-colors hover:border-rose-deep hover:text-rose-deep" aria-label={`Agendar ${t.title}`}>
                  Agendar <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </article>
            </Reveal>
          ))}
          <Reveal delay={0.2} className="flex flex-col justify-center bg-primary p-10 text-primary-foreground lg:mt-32">
            <p className="eyebrow !text-rose">Não sabe por onde começar?</p>
            <p className="mt-4 font-display text-4xl leading-tight">Na avaliação, indicamos o protocolo ideal para você.</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-rose hover:text-primary-foreground">
              Falar com a equipe <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="sobre" className="py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:px-10 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <img src={about} alt="Sala de atendimento da Elora, clara e serena" loading="lazy" width={1200} height={1504} className="aspect-[4/5] w-full object-cover" />
        </Reveal>
        <div className="order-1 lg:order-2">
          <SectionHeading eyebrow="Sobre a Elora " title={<>Beleza que nasce do <em>cuidado</em></>} />
          <Reveal delay={0.1}>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              A Elora nasceu da vontade de oferecer uma estética mais humana. Aqui, cada atendimento começa com escuta: entender sua rotina, seus desejos e o que faz você se sentir bem.
            </p>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Unimos tecnologia de ponta a técnicas refinadas para alcançar resultados naturais — nada exagerado, apenas a sua melhor versão.
            </p>
            <dl className="mt-12 grid grid-cols-3 gap-6 border-t pt-8">
              {[["9", "anos de história"], ["12", "especialistas"], ["98%", "satisfação"]].map(([n, l]) => (
                <div key={l}>
                  <dt className="sr-only">{l}</dt>
                  <dd className="font-display text-4xl md:text-5xl">{n}</dd>
                  <dd className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">{l}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const CATS = ["Todos", "Facial", "Corporal", "Laser"];

export function Results() {
  const [cat, setCat] = useState("Todos");
  const items = RESULTADOS.filter((r) => cat === "Todos" || r.category === cat);
  return (
    <section id="resultados" className="bg-secondary py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading eyebrow="Resultados" title={<>Transformações <em>sutis e reais</em></>} align="center" />
        <Reveal className="mt-10 flex flex-wrap justify-center gap-3" role="group" aria-label="Filtrar resultados">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              aria-pressed={cat === c}
              className={`rounded-full border px-5 py-2 text-xs uppercase tracking-[0.2em] transition-colors ${
                cat === c ? "border-foreground bg-foreground text-background" : "border-foreground/30 hover:border-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </Reveal>
        <motion.div layout className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {items.map((r) => (
              <motion.figure
                layout
                key={r.title}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, ease }}
                className="group bg-background p-3"
              >
                <div className="grid grid-cols-2 gap-1 overflow-hidden">
                  <div className="relative">
                    <img src={r.imgBefore} alt={`${r.title} — antes`} loading="lazy" className="aspect-[3/4] w-full object-cover saturate-[0.6] contrast-[0.92] brightness-[0.95]" />
                    <span className="absolute left-2 top-2 bg-background/90 px-2 py-1 text-[10px] uppercase tracking-[0.2em]">Antes</span>
                  </div>
                  <div className="relative">
                    <img src={r.imgAfter} alt={`${r.title} — depois`} loading="lazy" className="aspect-[3/4] w-full object-cover" />
                    <span className="absolute left-2 top-2 bg-foreground px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-background">Depois</span>
                  </div>
                </div>
                <figcaption className="flex items-baseline justify-between px-2 pb-2 pt-5">
                  <span className="font-display text-2xl">{r.title}</span>
                  <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{r.sessions}</span>
                </figcaption>
              </motion.figure>
            ))}
          </AnimatePresence>
        </motion.div>
        <p className="mt-8 text-center text-xs text-muted-foreground">Imagens demonstrativas. Resultados variam de pessoa para pessoa.</p>
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section className="py-24 md:py-36" aria-labelledby="como">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading eyebrow="Como funciona" title={<span id="como">Sua jornada, <em>passo a passo</em></span>} />
        <div role="list" className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1} className="group bg-background p-8 transition-colors duration-500 hover:bg-card md:p-10">
              <div role="listitem">
                <span className="font-display text-6xl text-rose-deep transition-transform duration-500 group-hover:-translate-y-1 inline-block">{s.n}</span>
                <h3 className="mt-8 text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Features() {
  return (
    <section className="bg-primary py-24 text-primary-foreground md:py-36" aria-labelledby="diferenciais">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:px-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow !text-rose">Diferenciais</p>
          <h2 id="diferenciais" className="mt-5 text-4xl leading-[1.05] md:text-6xl">Por que escolher <em className="text-rose">a Elora</em></h2>
        </Reveal>
        <div className="grid gap-12 sm:grid-cols-2 lg:col-span-7">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08} className="border-t border-primary-foreground/20 pt-6">
              <h3 className="text-2xl">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">{f.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading eyebrow="FAQ" title={<>Dúvidas <em>frequentes</em></>} />
        </div>
        <Reveal className="lg:col-span-8">
          <ul className="border-t">
            {FAQ.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q} className="border-b">
                  <h3 className="font-sans">
                    <button
                      className="flex w-full items-center justify-between gap-6 py-7 text-left"
                      aria-expanded={isOpen}
                      aria-controls={`faq-${i}`}
                      onClick={() => setOpen(isOpen ? null : i)}
                    >
                      <span className="font-display text-2xl md:text-3xl">{f.q}</span>
                      <Plus className={`h-5 w-5 shrink-0 transition-transform duration-500 ${isOpen ? "rotate-45 text-rose-deep" : ""}`} />
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-8 leading-relaxed text-muted-foreground">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="bg-rose py-28 md:py-40">
      <Reveal className="mx-auto max-w-4xl px-6 text-center">
        <p className="eyebrow">Agende agora</p>
        <h2 className="mt-6 text-5xl leading-[1] md:text-8xl">Seu próximo cuidado <em>começa aqui.</em></h2>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary mt-12 !px-10 !py-5 !text-sm">
          <MessageCircle className="h-5 w-5" /> Agendar pelo WhatsApp
        </a>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-4 md:px-10">
        <div>
          <p className="font-display text-4xl tracking-[0.3em]">ELORA</p>
          <p className="mt-4 text-sm text-primary-foreground/60">Estética personalizada, resultados naturais.</p>
        </div>
        <nav aria-label="Rodapé">
          <p className="eyebrow !text-rose">Navegue</p>
          <ul className="mt-5 space-y-3 text-sm">
            {NAV.map((n) => <li key={n.href}><a href={n.href} className="text-primary-foreground/80 hover:text-rose">{n.label}</a></li>)}
          </ul>
        </nav>
        <div>
          <p className="eyebrow !text-rose">Contato</p>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-rose"><FaInstagram /> @eloraestetica</a></li>
            <li><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-rose"><MessageCircle className="h-4 w-4" /> (85) 99999-0000</a></li>
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" /> Av. Dom Luís, 1200 — Sala 804<br />Aldeota, Fortaleza — CE</li>
          </ul>
        </div>
        <div>
          <p className="eyebrow !text-rose">Horários</p>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-2"><Clock className="mt-0.5 h-4 w-4" /> Seg a Sex · 9h às 20h</li>
            <li className="pl-6">Sábado · 9h às 14h</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 px-6 py-6 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Elora Estética. Projeto demonstrativo.
      </div>
    </footer>
  );
}
