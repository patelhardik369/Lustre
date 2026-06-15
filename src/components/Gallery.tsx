import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Work = { img: string; car: string; service: string };

const works: Work[] = [
  { img: "/images/work-porsche.jpg", car: "Porsche Cayman", service: "9H Ceramic Coating" },
  { img: "/images/work-red.jpg", car: "Ferrari F8", service: "Paint Correction" },
  { img: "/images/work-yellow.jpg", car: "Audi R8", service: "Full Ceramic Package" },
  { img: "/images/work-grey.jpg", car: "McLaren GT", service: "Gloss Enhancement" },
  { img: "/images/work-silver.jpg", car: "Aston Martin", service: "Nano Coating" },
  { img: "/images/work-classic.jpg", car: "Mercedes Classic", service: "Restoration Detail" },
];

function Card({ w }: { w: Work }) {
  return (
    <figure className="group relative overflow-hidden rounded-2xl border border-line">
      <img
        src={w.img}
        alt={`${w.car} — ${w.service}`}
        loading="lazy"
        className="aspect-[3/2] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-90" />
      <figcaption className="absolute inset-x-0 bottom-0 p-5">
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-flame-400">
          {w.service}
        </span>
        <h3 className="mt-1 font-display text-xl font-semibold text-paper">{w.car}</h3>
      </figcaption>
      <span className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-flame/0 transition-all duration-300 group-hover:ring-flame/70" />
    </figure>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="section bg-paper-100">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            num="06"
            kicker="Recent work"
            title={
              <>
                Finishes that turn <span className="italic text-flame">heads</span>
              </>
            }
            sub="A glimpse of paint we've brought back to life — corrected, coated and protected."
          />
          <Reveal>
            <a href="#book" className="btn-outline shrink-0">
              Start your transformation
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((w, i) => (
            <Reveal key={w.car} delay={i * 0.05}>
              <Card w={w} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
