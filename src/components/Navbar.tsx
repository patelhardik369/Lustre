import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Packages", href: "#packages" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

function Wordmark() {
  return (
    <a href="#top" className="flex flex-col leading-none" aria-label="LUSTRE home">
      <span className="font-display text-[1.6rem] font-semibold tracking-tight text-ink">
        Lustre<span className="text-flame">.</span>
      </span>
      <span className="mt-0.5 font-mono text-[0.58rem] uppercase tracking-[0.3em] text-muted">
        Auto Spa
      </span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="relative z-50">
      {/* announcement bar */}
      <div className="bg-ink text-paper">
        <div className="container-x flex h-9 items-center justify-center gap-2 text-center sm:justify-between">
          <p className="flex items-center gap-2 font-mono text-[0.66rem] uppercase tracking-[0.18em]">
            <span className="h-1.5 w-1.5 rounded-full bg-flame" />
            Now booking spring ceramic slots — limited availability
          </p>
          <a href="tel:+15550123456" className="hidden font-mono text-[0.66rem] uppercase tracking-[0.18em] text-paper/80 transition-colors hover:text-paper sm:block">
            (555) 012-3456
          </a>
        </div>
      </div>

      {/* nav */}
      <div
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "border-b border-line bg-paper/85 backdrop-blur-md" : "border-b border-transparent bg-paper/0"
        }`}
      >
        <nav className="container-x flex h-[68px] items-center justify-between">
          <Wordmark />

          <ul className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm font-medium text-ink/70 transition-colors duration-200 hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a href="#book" className="btn-ink hidden h-11 px-5 sm:inline-flex">
              Book a detail
              <ArrowRight className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 text-ink transition-colors hover:bg-ink hover:text-paper lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="sticky top-[68px] z-40 container-x lg:hidden"
          >
            <div className="card mt-2 overflow-hidden p-2 shadow-lift">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-ink transition-colors hover:bg-paper-200"
                >
                  {l.label}
                </a>
              ))}
              <a href="#book" onClick={() => setOpen(false)} className="btn-ink mt-2 w-full">
                Book a detail
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
