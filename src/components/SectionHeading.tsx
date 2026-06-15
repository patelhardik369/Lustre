import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  num: string;
  kicker: string;
  title: ReactNode;
  sub?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  num,
  kicker,
  title,
  sub,
  align = "left",
  className = "",
}: Props) {
  const center = align === "center";
  return (
    <div className={`${center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}>
      <Reveal>
        <div className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}>
          <span className="kicker-num">{num}</span>
          <span className="h-px w-8 bg-flame" />
          <span className="kicker">{kicker}</span>
        </div>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="display mt-5 text-[2.3rem] sm:text-5xl lg:text-[3.5rem]">{title}</h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.12}>
          <p className={`mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg ${center ? "mx-auto" : ""}`}>
            {sub}
          </p>
        </Reveal>
      )}
    </div>
  );
}
