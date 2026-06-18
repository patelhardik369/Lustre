import { ArrowUp } from "lucide-react";

const socials = [
  { name: "Instagram", href: "#", path: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.43-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 3.68A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84Zm0 10.16A4 4 0 1 1 12 8a4 4 0 0 1 0 8Zm6.4-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z" },
  { name: "Facebook", href: "#", path: "M15.12 5.32H17V2.14A26.11 26.11 0 0 0 14.26 2c-2.72 0-4.58 1.66-4.58 4.7v2.6H6.61v3.56h3.07V22h3.68v-9.14h3.06l.46-3.56h-3.52V7.05c0-1.03.29-1.73 1.76-1.73z" },
  { name: "YouTube", href: "#", path: "M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z" },
  { name: "X", href: "#", path: "M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.63 7.58H.47l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93Zm-1.29 19.49h2.04L6.49 3.24H4.3l13.31 17.4Z" },
];

const columns = [
  { title: "Services", links: ["Hand Wash", "Full Detail", "Paint Correction", "Ceramic Coating", "Protection Film"] },
  { title: "Company", links: ["About LUSTRE", "Our Work", "Reviews", "Careers", "Gift Cards"] },
];

export default function Footer() {
  return (
    <footer className="bg-ink pt-16 text-paper">
      <div className="container-x">
        <div className="grid gap-12 pb-14 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div>
            <a href="#top" className="flex flex-col leading-none">
              <span className="font-display text-3xl font-semibold tracking-tight">
                Lustre<span className="text-flame">.</span>
              </span>
              <span className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-paper/60">
                Auto Spa &amp; Ceramic Coating
              </span>
            </a>
            <p className="mt-5 max-w-xs leading-relaxed text-paper/60">
              A precision auto spa for people who love their cars. Hand washing,
              paint correction and ceramic coating — done obsessively.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-paper/70 transition-all duration-300 hover:border-flame hover:bg-flame hover:text-ink"
                >
                  <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden>
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.18em] text-paper/50">{col.title}</h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-paper/75 transition-colors hover:text-flame">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.18em] text-paper/50">Stay glossy</h3>
            <p className="mt-5 text-sm text-paper/60">Seasonal detailing tips and members-only offers. No spam.</p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex items-center gap-2 rounded-full border border-white/15 bg-white/5 p-1.5 pl-4 focus-within:border-flame">
              <input type="email" required aria-label="Email address" placeholder="you@email.com" className="min-w-0 flex-1 bg-transparent text-sm text-paper outline-none placeholder:text-paper/40" />
              <button type="submit" aria-label="Subscribe" className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-flame text-ink transition-transform hover:scale-105">
                <ArrowUp className="h-4 w-4 rotate-45" />
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 sm:flex-row">
          <div className="flex flex-col items-center gap-1.5 sm:items-start">
            <p className="font-mono text-[0.66rem] uppercase tracking-wider text-paper/50">
              © {new Date().getFullYear()} LUSTRE Auto Spa — All rights reserved
            </p>
            <p className="font-mono text-[0.66rem] uppercase tracking-wider text-paper/40">
              Made by 👨‍💻{" "}
              <a
                href="https://www.hardikpatel.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-flame"
              >
                Hardik Patel
              </a>
            </p>
          </div>
          <div className="flex items-center gap-6 font-mono text-[0.66rem] uppercase tracking-wider text-paper/50">
            <a href="#" className="transition-colors hover:text-paper">Privacy</a>
            <a href="#" className="transition-colors hover:text-paper">Terms</a>
            <a href="#top" className="flex items-center gap-1.5 transition-colors hover:text-flame">
              Back to top <ArrowUp className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
