import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Service = {
  title: string;
  desc: string;
  price: string;
  img: string;
  featured?: boolean;
};

const services: Service[] = [
  { title: "Express Hand Wash", desc: "pH-neutral foam bath, contact-safe hand wash, streak-free hand dry, wheels & glass.", price: "from $39", img: "/images/wash.jpg" },
  { title: "Full Detail", desc: "A complete top-to-bottom reset — exterior decontamination and a deep interior revival.", price: "from $189", img: "/images/detail.jpg" },
  { title: "Paint Correction", desc: "Multi-stage machine polishing erases swirls and scratches to restore true depth.", price: "from $349", img: "/images/correction.jpg" },
  { title: "Ceramic Coating", desc: "Our signature 9H nano-ceramic — mirror gloss and hydrophobic protection that lasts years.", price: "from $899", img: "/images/coating.jpg", featured: true },
  { title: "Interior Deep Clean", desc: "Steam, extract and condition every surface for a cabin that looks and smells new.", price: "from $149", img: "/images/products.jpg" },
  { title: "Wheels & Protection Film", desc: "Off-the-car wheel detailing plus self-healing film against rock chips and scuffs.", price: "from $1,200", img: "/images/wheel.jpg" },
];

function Row({ s }: { s: Service }) {
  return (
    <a
      href="#book"
      className="group -mx-3 grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-2xl border-t border-line px-3 py-5 transition-colors duration-200 hover:bg-white sm:gap-7 sm:py-7"
    >
      <div className="h-16 w-20 shrink-0 overflow-hidden rounded-xl border border-line sm:h-[4.5rem] sm:w-28">
        <img
          src={s.img}
          alt={s.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2.5">
          <h3 className="font-display text-xl font-semibold text-ink transition-colors duration-200 group-hover:text-flame sm:text-2xl">
            {s.title}
          </h3>
          {s.featured && (
            <span className="rounded-full bg-flame/12 px-2.5 py-0.5 font-mono text-[0.58rem] uppercase tracking-[0.16em] text-flame">
              Signature
            </span>
          )}
        </div>
        <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted">{s.desc}</p>
      </div>
      <div className="flex items-center gap-3 sm:gap-6">
        <span className="hidden whitespace-nowrap font-mono text-sm text-ink sm:block">{s.price}</span>
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-ink/15 text-ink transition-all duration-300 group-hover:bg-ink group-hover:text-paper">
          <ArrowUpRight className="h-5 w-5" />
        </span>
      </div>
    </a>
  );
}

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container-x">
        <SectionHeading
          num="02"
          kicker="Services"
          title={
            <>
              From a quick rinse to a <span className="italic text-flame">full ceramic transformation</span>
            </>
          }
          sub="Every service is performed by hand, by certified detailers, using pro-grade products. Choose a single treatment or a complete restoration."
        />

        <div className="mt-14">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.04}>
              <Row s={s} />
            </Reveal>
          ))}
          <div className="rule" />
        </div>
      </div>
    </section>
  );
}
