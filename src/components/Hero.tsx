import { motion } from "framer-motion";
import { ArrowRight, Star, ShieldCheck } from "lucide-react";
import { EASE } from "../lib/motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

export default function Hero() {
  return (
    <section id="top" className="section pt-10 sm:pt-14 lg:pt-16">
      <div className="container-x">
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-10">
          {/* copy */}
          <motion.div variants={container} initial="hidden" animate="show" className="lg:col-span-7">
            <motion.div variants={item} className="flex items-center gap-3">
              <span className="kicker-num">01</span>
              <span className="h-px w-8 bg-flame" />
              <span className="kicker">Auto Spa &amp; Ceramic Coating</span>
            </motion.div>

            <motion.h1
              variants={item}
              className="display mt-6 text-[3rem] leading-[0.95] sm:text-[4.4rem] lg:text-[5.6rem]"
            >
              The deepest gloss
              <br />
              your car has{" "}
              <span className="relative inline-block italic">
                ever worn
                <span className="absolute -bottom-1 left-0 h-[4px] w-full bg-flame" />
              </span>
              .
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-7 max-w-xl text-lg leading-relaxed text-muted"
            >
              LUSTRE is a precision auto spa. We hand-wash, correct and ceramic-coat
              your paint so it beads water, shrugs off grime and shines for years —
              not weeks.
            </motion.p>

            <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
              <a href="#book" className="btn-ink group">
                Book a detail
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a href="#packages" className="btn-outline">
                See packages &amp; pricing
              </a>
            </motion.div>

            <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3">
              <div className="flex items-center gap-2">
                <div className="flex text-flame">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-ink">4.9</span>
                <span className="font-mono text-xs uppercase tracking-wider text-muted">
                  600+ reviews
                </span>
              </div>
              <span className="hidden h-4 w-px bg-line-dark sm:block" />
              <span className="font-mono text-xs uppercase tracking-wider text-muted">
                Mobile service available
              </span>
            </motion.div>
          </motion.div>

          {/* image */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] border border-line bg-paper-200 shadow-lift">
                <img
                  src="/images/hero.jpg"
                  alt="Freshly detailed sports car gleaming in a studio"
                  className="h-full w-full object-cover"
                  fetchPriority="high"
                />
                <span className="absolute left-4 top-4 rounded-full bg-paper/85 px-3 py-1 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-ink backdrop-blur">
                  Studio · Ceramic 9H
                </span>
              </div>

              {/* floating stat card */}
              <div className="absolute -bottom-6 -left-4 hidden items-center gap-3 rounded-2xl border border-line bg-white px-5 py-4 shadow-lift sm:flex">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-flame/10 text-flame">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div className="leading-tight">
                  <p className="font-display text-lg font-semibold text-ink">5-year</p>
                  <p className="font-mono text-[0.62rem] uppercase tracking-wider text-muted">
                    written warranty
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
