import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Phone } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { EASE } from "../lib/motion";

const faqs = [
  { q: "How long does a ceramic coating actually last?", a: "Our standard coating is warrantied for 5 years and, with basic maintenance washes, routinely performs beyond that. We hand you simple aftercare guidance so it keeps performing year after year." },
  { q: "Is a ceramic coating scratch-proof?", a: "No coating is bulletproof. A 9H ceramic dramatically resists swirl marks and light scratches from washing, but it won't stop rock chips or careless contact — that's what paint protection film is for." },
  { q: "How long will my car be with you?", a: "An express wash is about 30 minutes. A full detail takes a few hours. A paint correction and ceramic coating package typically takes 1–3 days, because the paint must be corrected and the coating properly cured." },
  { q: "Do I need to do anything to maintain it?", a: "Just wash it sensibly. Skip automatic brush washes, use a pH-neutral shampoo, and book an annual maintenance detail — which is included with the Ceramic Elite package." },
  { q: "Do you offer pickup and delivery?", a: "Yes. Free pickup and delivery is included within 15 miles on Signature and Ceramic packages. Beyond that radius a small travel fee applies, quoted upfront." },
  { q: "Why not just wax my car?", a: "Wax lasts weeks and offers minimal protection. A ceramic coating chemically bonds to your clear coat for years, with far more gloss, hardness and hydrophobic performance." },
];

function Item({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-t border-line">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-6 py-5 text-left"
      >
        <span className="font-display text-lg font-semibold text-ink sm:text-xl">{q}</span>
        <span
          className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-ink/20 text-ink transition-all duration-300 ${
            isOpen ? "rotate-45 border-flame bg-flame text-ink" : ""
          }`}
        >
          <Plus className="h-4 w-4" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-6 pr-8 leading-relaxed text-muted">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section bg-paper-100">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <SectionHeading
              num="09"
              kicker="FAQ"
              title={
                <>
                  Questions, <span className="italic text-flame">answered</span>
                </>
              }
              sub="Everything worth knowing before you book. Still unsure? We're happy to talk it through."
            />
            <Reveal delay={0.1}>
              <a href="tel:+15550123456" className="link-arrow mt-7">
                <Phone className="h-4 w-4" />
                Call us at (555) 012-3456
              </a>
            </Reveal>
          </div>

          <Reveal>
            <div>
              {faqs.map((f, i) => (
                <Item
                  key={f.q}
                  q={f.q}
                  a={f.a}
                  isOpen={open === i}
                  onToggle={() => setOpen(open === i ? null : i)}
                />
              ))}
              <div className="rule" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
