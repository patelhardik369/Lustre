const stats = [
  { value: "2014", label: "Established" },
  { value: "6,000+", label: "Cars detailed" },
  { value: "4.9★", label: "Average rating" },
  { value: "5-yr", label: "Coating warranty" },
];

const creds = [
  "Gtechniq Accredited",
  "IDA Certified",
  "Ceramic Pro Installer",
  "XPEL Authorized",
  "Written Warranty",
  "Pickup & Delivery",
];

export default function TrustStrip() {
  const row = [...creds, ...creds];
  return (
    <section aria-label="Track record" className="border-y border-line bg-paper-200">
      <div className="container-x">
        <div className="grid grid-cols-2 divide-line lg:grid-cols-4 lg:divide-x">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col items-center py-9 text-center ${i < 2 ? "border-b border-line lg:border-b-0" : ""} ${i % 2 === 1 ? "border-l border-line lg:border-l-0" : ""}`}
            >
              <span className="font-display text-4xl font-semibold text-ink sm:text-5xl">
                {s.value}
              </span>
              <span className="mt-2 font-mono text-[0.66rem] uppercase tracking-[0.2em] text-muted">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-line py-4">
        <div className="mask-fade-x overflow-hidden">
          <div className="flex w-max animate-marquee items-center">
            {row.map((c, i) => (
              <span key={i} className="flex items-center font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink/50">
                {c}
                <span className="mx-6 h-1 w-1 rounded-full bg-flame" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
