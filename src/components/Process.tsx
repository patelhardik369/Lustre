import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const steps = [
  { t: "Inspect & decontaminate", d: "Paint-depth readings, a clay treatment and iron-fallout removal strip the surface truly clean." },
  { t: "Wash & dry", d: "A pH-neutral foam bath and two-bucket hand wash, finished with a filtered air dry." },
  { t: "Correct", d: "Multi-stage machine polishing removes swirls and oxidation to unlock the paint's real depth." },
  { t: "Coat", d: "Layered 9H ceramic is applied panel-by-panel, then infrared-cured to bond hard." },
  { t: "Cure & deliver", d: "A final white-light inspection, your written warranty and an aftercare kit to keep it flawless." },
];

export default function Process() {
  return (
    <section id="process" className="section bg-paper-100">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <SectionHeading
                num="03"
                kicker="The Process"
                title={
                  <>
                    No shortcuts.{" "}
                    <span className="italic text-flame">Ever.</span>
                  </>
                }
                sub="Every car moves through the same meticulous five-step process — the difference between a coating that lasts and one that fails in months."
              />
              <Reveal delay={0.1}>
                <figure className="mt-9 hidden lg:block">
                  <div className="overflow-hidden rounded-2xl border border-line shadow-soft">
                    <img
                      src="/images/coating.jpg"
                      alt="A detailer applying ceramic coating by hand"
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>
                  <figcaption className="mt-3 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-muted">
                    Applying the 9H ceramic, panel by panel
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>

          <ol className="lg:col-span-7">
            {steps.map((s, i) => (
              <Reveal key={s.t} delay={i * 0.05}>
                <li className="grid grid-cols-[auto_1fr] gap-5 border-t border-line py-7 sm:gap-8">
                  <span className="pt-1 font-mono text-sm font-bold text-flame">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-ink sm:text-[1.7rem]">
                      {s.t}
                    </h3>
                    <p className="mt-2 max-w-xl leading-relaxed text-muted">{s.d}</p>
                  </div>
                </li>
              </Reveal>
            ))}
            <div className="rule" />
          </ol>
        </div>
      </div>
    </section>
  );
}
