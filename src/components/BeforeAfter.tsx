import { useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const IMG = "/images/work-red.jpg";

export default function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  function setFromClientX(clientX: number) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  }
  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    dragging.current = true;
    e.currentTarget.setPointerCapture?.(e.pointerId);
    setFromClientX(e.clientX);
  }
  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (dragging.current) setFromClientX(e.clientX);
  }
  function endDrag() {
    dragging.current = false;
  }
  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 3));
    if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 3));
  }

  return (
    <section id="work" className="section">
      <div className="container-x">
        <SectionHeading
          num="04"
          kicker="See the difference"
          title={
            <>
              Drag to reveal a <span className="italic text-flame">real correction</span>
            </>
          }
          sub="Same panel, same light. Neglected, oxidised paint on the left — corrected and ceramic-coated to a wet, liquid gloss on the right."
        />

        <Reveal className="mt-12">
          <div
            ref={ref}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            className="relative aspect-[16/10] w-full cursor-ew-resize select-none overflow-hidden rounded-[1.4rem] border border-line shadow-lift"
            style={{ touchAction: "pan-y" }}
          >
            {/* after — crisp */}
            <img
              src={IMG}
              alt="Corrected and ceramic-coated paint"
              className="absolute inset-0 h-full w-full object-cover"
              style={{ filter: "saturate(1.08) contrast(1.04)" }}
              draggable={false}
            />

            {/* before — dull, hazy, clipped to the left */}
            <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
              <img
                src={IMG}
                alt="Neglected paint before correction"
                className="absolute inset-0 h-full w-full object-cover"
                style={{ filter: "grayscale(0.5) brightness(0.78) contrast(0.9)" }}
                draggable={false}
              />
              <div className="absolute inset-0 bg-[#6b6256]/25 mix-blend-multiply" />
              <div
                className="absolute inset-0 opacity-50"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 30% 40%, rgba(255,255,255,0.12) 0 1px, transparent 2px), radial-gradient(circle at 70% 60%, rgba(255,255,255,0.10) 0 1px, transparent 2px)",
                  backgroundSize: "60px 60px, 90px 90px",
                }}
              />
            </div>

            {/* labels */}
            <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-white backdrop-blur">
              Before
            </span>
            <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-flame px-3 py-1 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-ink">
              After
            </span>

            {/* handle */}
            <div
              className="absolute inset-y-0 z-20 w-0.5 bg-white shadow-[0_0_16px_rgba(0,0,0,0.5)]"
              style={{ left: `${pos}%`, transform: "translateX(-1px)" }}
            >
              <div
                role="slider"
                tabIndex={0}
                aria-label="Reveal the coated result"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(pos)}
                onKeyDown={onKeyDown}
                className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize place-items-center rounded-full border-2 border-white bg-white/20 text-white backdrop-blur-md transition-transform duration-200 hover:scale-105"
              >
                <MoveHorizontal className="h-5 w-5" />
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-5 text-center font-mono text-xs uppercase tracking-[0.16em] text-muted">
            Ferrari · single-stage correction + 9H ceramic · ~14 hours
          </p>
        </Reveal>
      </div>
    </section>
  );
}
