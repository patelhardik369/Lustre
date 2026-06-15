import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Plan = {
  name: string;
  tagline: string;
  once: number;
  month: number;
  features: string[];
  popular?: boolean;
};

const plans: Plan[] = [
  {
    name: "Refresh Wash",
    tagline: "A spotless, contact-safe weekly clean.",
    once: 49,
    month: 39,
    features: ["pH-neutral foam hand wash", "Wheels, tyres & arches", "Glass, jambs & hand dry", "Quick interior vacuum", "~30 minute turnaround"],
  },
  {
    name: "Signature Detail",
    tagline: "Inside and out, like new again.",
    once: 289,
    month: 99,
    popular: true,
    features: ["Everything in Refresh", "Full interior deep clean", "Clay + iron decontamination", "6-month gloss sealant", "Engine bay & trim dressing", "Priority weekday slots"],
  },
  {
    name: "Ceramic Elite",
    tagline: "Maximum gloss and lasting protection.",
    once: 1290,
    month: 149,
    features: ["Everything in Signature", "Multi-stage paint correction", "9H ceramic coating (5-year)", "Annual maintenance detail", "Free pickup & delivery", "Written warranty certificate"],
  },
];

function PlanCard({ p, mode }: { p: Plan; mode: "once" | "month" }) {
  const price = mode === "once" ? p.once : p.month;
  return (
    <div
      className={`relative flex h-full flex-col rounded-2xl border p-8 transition-all duration-300 ${
        p.popular ? "border-ink bg-white shadow-lift lg:-translate-y-3" : "border-line bg-white/60 hover:bg-white"
      }`}
    >
      {p.popular && (
        <span className="absolute -top-3 left-8 rounded-full bg-flame px-3 py-1 font-mono text-[0.6rem] font-bold uppercase tracking-[0.14em] text-ink">
          Most Popular
        </span>
      )}
      <h3 className="font-display text-2xl font-semibold text-ink">{p.name}</h3>
      <p className="mt-1.5 text-sm text-muted">{p.tagline}</p>

      <div className="mt-6 flex items-end gap-1.5">
        <span className="font-display text-5xl font-semibold text-ink">${price}</span>
        <span className="mb-2 font-mono text-xs uppercase tracking-wider text-muted">
          {mode === "once" ? "one-time" : "/ month"}
        </span>
      </div>

      <a href="#book" className={`${p.popular ? "btn-ink" : "btn-outline"} mt-6 w-full`}>
        Choose {p.name}
      </a>

      <div className="rule my-7" />

      <ul className="space-y-3.5">
        {p.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-ink/80">
            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-flame/12 text-flame">
              <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
            </span>
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Packages() {
  const [mode, setMode] = useState<"once" | "month">("once");

  return (
    <section id="packages" className="section">
      <div className="container-x">
        <SectionHeading
          num="07"
          kicker="Packages"
          title={
            <>
              Simple pricing for a <span className="italic text-flame">serious finish</span>
            </>
          }
          sub="Transparent, all-in packages — no hidden add-ons, just exceptional work."
        />

        <Reveal className="mt-9">
          <div className="inline-flex rounded-full border border-line bg-white p-1">
            {(["once", "month"] as const).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMode(m)}
                aria-pressed={mode === m}
                className="relative rounded-full px-5 py-2 text-sm font-semibold transition-colors"
              >
                {mode === m && (
                  <motion.span
                    layoutId="pricing-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-ink"
                    transition={{ type: "spring", stiffness: 320, damping: 30 }}
                  />
                )}
                <span className={mode === m ? "text-paper" : "text-ink/60"}>
                  {m === "once" ? "Pay once" : "Membership"}
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08} className="h-full">
              <PlanCard p={p} mode={mode} />
            </Reveal>
          ))}
        </div>

        <p className="mt-8 font-mono text-xs uppercase tracking-[0.14em] text-muted">
          Free pickup &amp; delivery within 15 miles on Signature &amp; Ceramic packages.
        </p>
      </div>
    </section>
  );
}
