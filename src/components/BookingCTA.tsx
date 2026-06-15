import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, ChevronDown } from "lucide-react";

const services = [
  "Express Hand Wash",
  "Full Detail",
  "Paint Correction",
  "Ceramic Coating",
  "Interior Deep Clean",
  "Wheels & Protection Film",
  "Not sure yet",
];

const darkField =
  "w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-sm text-paper outline-none transition placeholder:text-paper/40 focus:border-flame";

export default function BookingCTA() {
  const empty = { name: "", phone: "", vehicle: "", service: services[3], date: "" };
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");

  function set(k: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));
  }
  function submit(e: React.FormEvent) {
    e.preventDefault();
    const errs: { name?: string; phone?: string } = {};
    if (!form.name.trim()) errs.name = "Please enter your name";
    if (!form.phone.trim()) errs.phone = "Please enter a phone number";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setStatus("submitting");
    setTimeout(() => setStatus("done"), 1100);
  }

  return (
    <section id="book" className="section">
      <div className="container-x">
        <div className="overflow-hidden rounded-[1.8rem] bg-ink text-paper shadow-lift">
          <div className="grid lg:grid-cols-2">
            {/* image */}
            <div className="relative hidden min-h-[28rem] lg:block">
              <img
                src="/images/wash.jpg"
                alt="A car being rinsed during a detail"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
              <div className="absolute bottom-7 left-7 right-7">
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-flame-400">
                  No deposit to book
                </span>
                <p className="mt-2 font-display text-2xl font-semibold text-paper">
                  Most cars booked in under 48 hours.
                </p>
              </div>
            </div>

            {/* form */}
            <div className="p-8 sm:p-12">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[0.72rem] font-bold tracking-[0.1em] text-flame">10</span>
                <span className="h-px w-8 bg-flame" />
                <span className="font-mono text-[0.72rem] uppercase tracking-[0.2em] text-paper/60">Book a detail</span>
              </div>

              {status === "done" ? (
                <div className="flex flex-col items-start py-10">
                  <motion.span
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    className="grid h-16 w-16 place-items-center rounded-full bg-flame text-ink"
                  >
                    <Check className="h-8 w-8" strokeWidth={2.5} />
                  </motion.span>
                  <h2 className="mt-5 font-display text-3xl font-semibold">Request received</h2>
                  <p className="mt-2 max-w-sm text-paper/70">
                    Thanks {form.name.split(" ")[0] || "there"} — we'll confirm your{" "}
                    {form.service.toLowerCase()} booking by text shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setForm(empty);
                      setErrors({});
                      setStatus("idle");
                    }}
                    className="btn-accent mt-7"
                  >
                    Book another vehicle
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="mt-5 font-display text-3xl font-semibold leading-tight sm:text-4xl">
                    Ready to bring your paint{" "}
                    <span className="italic text-flame">back to life?</span>
                  </h2>
                  <p className="mt-3 max-w-md text-paper/70">
                    Tell us about your car and we'll confirm your slot — usually within one business hour.
                  </p>

                  <form onSubmit={submit} noValidate className="mt-7 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-1.5 block font-mono text-[0.66rem] uppercase tracking-wider text-paper/60">
                          Name <span className="text-flame">*</span>
                        </label>
                        <input id="name" type="text" autoComplete="name" value={form.name} onChange={set("name")} placeholder="Alex Morgan" className={darkField} aria-invalid={!!errors.name} />
                        {errors.name && <p role="alert" className="mt-1.5 text-xs text-flame-400">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="phone" className="mb-1.5 block font-mono text-[0.66rem] uppercase tracking-wider text-paper/60">
                          Phone <span className="text-flame">*</span>
                        </label>
                        <input id="phone" type="tel" autoComplete="tel" value={form.phone} onChange={set("phone")} placeholder="(555) 000-0000" className={darkField} aria-invalid={!!errors.phone} />
                        {errors.phone && <p role="alert" className="mt-1.5 text-xs text-flame-400">{errors.phone}</p>}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="vehicle" className="mb-1.5 block font-mono text-[0.66rem] uppercase tracking-wider text-paper/60">Vehicle</label>
                      <input id="vehicle" type="text" value={form.vehicle} onChange={set("vehicle")} placeholder="2021 BMW M340i" className={darkField} />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="service" className="mb-1.5 block font-mono text-[0.66rem] uppercase tracking-wider text-paper/60">Service</label>
                        <div className="relative">
                          <select id="service" value={form.service} onChange={set("service")} className={`${darkField} cursor-pointer appearance-none pr-10`}>
                            {services.map((s) => (
                              <option key={s} value={s} className="bg-ink text-paper">{s}</option>
                            ))}
                          </select>
                          <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-paper/70" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="date" className="mb-1.5 block font-mono text-[0.66rem] uppercase tracking-wider text-paper/60">Preferred date</label>
                        <input id="date" type="date" value={form.date} onChange={set("date")} className={darkField} style={{ colorScheme: "dark" }} />
                      </div>
                    </div>

                    <button type="submit" disabled={status === "submitting"} className="btn-accent group mt-2 w-full disabled:opacity-70">
                      {status === "submitting" ? (
                        <>
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-ink/40 border-t-ink" />
                          Sending…
                        </>
                      ) : (
                        <>
                          Request my booking
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                    <p className="text-center font-mono text-[0.62rem] uppercase tracking-wider text-paper/40">
                      We reply within 1 business hour · No spam
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
