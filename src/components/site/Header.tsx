import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV, WHATSAPP_URL } from "../../lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? "border-b bg-background/90 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10">
        <a href="#inicio" className="font-display text-3xl tracking-[0.3em]" aria-label="ELORA Estética — início">
          ELORA
        </a>
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex gap-10">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="group relative text-xs uppercase tracking-[0.22em] text-foreground/80 hover:text-foreground">
                  {n.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-rose-deep transition-all duration-500 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary hidden !py-3 lg:inline-flex">
          Agendar avaliação
        </a>
        <button
          className="lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden lg:hidden"
            aria-label="Menu móvel"
          >
            <ul className="flex flex-col gap-6 px-6 pb-10 pt-4">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} onClick={() => setOpen(false)} className="font-display text-3xl">
                    {n.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary mt-2">
                  Agendar avaliação
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
