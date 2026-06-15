import { Check } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const benefits = [
  { t: "9H surface hardness", d: "A rigid nano-ceramic shell that resists the swirl marks and micro-scratches of everyday washing." },
  { t: "UV & oxidation shield", d: "Blocks the sun from fading paint, plastics and trim, keeping colour rich for years." },
  { t: "Self-cleaning hydrophobics", d: "A slick, low-energy surface lets water, mud and grime slide off instead of bonding." },
  { t: "Showroom-deep gloss", d: "Adds the candy-like depth and reflection that flat, untreated paint simply can't reach." },
  { t: "Backed in writing", d: "Professionally installed with a warranty of up to five years — not a weekend spray wax." },
];

export default function WhyUs() {
  return (
    <section id="why" className="section">
      <div className="container-x">
        <SectionHeading
          num="05"
          kicker="Why ceramic"
          title={
            <>
              Protection you can <span className="italic text-flame">see and feel</span>
            </>
          }
          sub="A LUSTRE coating isn't a shinier wash — it's a permanent upgrade to how your paint looks, behaves and ages."
        />

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <figure className="relative">
              <div className="overflow-hidden rounded-[1.4rem] border border-line shadow-lift">
                <img
                  src="/images/beading.jpg"
                  alt="Water beading on a freshly ceramic-coated panel"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover sm:aspect-[5/5]"
                />
              </div>
              <figcaption className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border border-line bg-white/90 px-4 py-3 backdrop-blur">
                <span className="font-display text-2xl font-semibold text-ink">110°</span>
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted">
                  water contact angle
                </span>
              </figcaption>
            </figure>
          </Reveal>

          <div>
            {benefits.map((b, i) => (
              <Reveal key={b.t} delay={i * 0.05}>
                <div className="grid grid-cols-[auto_1fr] gap-4 border-t border-line py-5">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-flame/12 text-flame">
                    <Check className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-ink">{b.t}</h3>
                    <p className="mt-1.5 leading-relaxed text-muted">{b.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
            <div className="rule" />
          </div>
        </div>
      </div>
    </section>
  );
}
