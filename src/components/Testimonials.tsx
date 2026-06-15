import { Star } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type R = { name: string; car: string; quote: string };

const featured: R = {
  name: "Marcus T.",
  car: "Porsche Cayenne",
  quote:
    "I've used three detailers in the city. Nobody comes close to the gloss LUSTRE pulled out of my paint — it genuinely looks wet.",
};

const more: R[] = [
  { name: "Priya N.", car: "Tesla Model Y", quote: "A year after the ceramic package, water still beads like day one. Washing the car takes me ten minutes now." },
  { name: "Dani R.", car: "BMW M340i", quote: "They corrected swirl marks the dealer 'detail' left behind. Obsessive in the best possible way." },
  { name: "Will A.", car: "Audi S4", quote: "The depth of colour after correction is unreal — strangers keep asking me what I did to it." },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-flame">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
    </div>
  );
}

function Avatar({ name }: { name: string }) {
  const initials = name.split(" ").map((p) => p[0]).join("");
  return (
    <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-xs font-bold text-paper">
      {initials}
    </span>
  );
}

function Meta({ name, car }: R) {
  return (
    <div className="leading-tight">
      <p className="text-sm font-semibold text-ink">{name}</p>
      <p className="font-mono text-[0.66rem] uppercase tracking-wider text-muted">{car}</p>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" className="section">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            num="08"
            kicker="Reviews"
            title={
              <>
                Owners who can't stop <span className="italic text-flame">looking</span>
              </>
            }
          />
          <Reveal>
            <div className="flex items-center gap-3">
              <Stars />
              <span className="font-display text-2xl font-semibold text-ink">4.9</span>
              <span className="font-mono text-[0.66rem] uppercase tracking-wider text-muted">
                600+ reviews
              </span>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          <Reveal className="lg:col-span-3">
            <blockquote className="card p-8 shadow-soft sm:p-12">
              <Stars />
              <p className="mt-5 max-w-4xl font-display text-2xl italic leading-snug text-ink sm:text-[2rem]">
                “{featured.quote}”
              </p>
              <footer className="mt-7 flex items-center gap-3">
                <Avatar name={featured.name} />
                <Meta {...featured} />
              </footer>
            </blockquote>
          </Reveal>

          {more.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.06} className="h-full">
              <blockquote className="card flex h-full flex-col p-6 shadow-soft">
                <Stars />
                <p className="mt-4 flex-1 leading-relaxed text-ink/85">“{r.quote}”</p>
                <footer className="mt-6 flex items-center gap-3">
                  <Avatar name={r.name} />
                  <Meta {...r} />
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
