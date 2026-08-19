import Image from "next/image";
import type { Dictionary } from "@/lib/dictionaries";

type Props = {
  dict: Dictionary;
};

export function Method({ dict }: Props) {
  return (
    <section className="relative overflow-hidden border-t border-line py-20 md:py-28">
      <div className="absolute inset-0">
        <Image
          src="/gallery/academy-mat-talk-1200.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/90 to-void/70" />
      </div>

      <div className="section-pad relative z-10 mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-accent">
            {dict.method.eyebrow}
          </p>
          <h2 className="display mt-4 text-[clamp(2.1rem,4.5vw,3.8rem)] text-ink">
            {dict.method.headline}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
            {dict.method.support}
          </p>
          <p className="mt-6 text-sm text-ink">{dict.method.role}</p>
        </div>

        <blockquote className="border-l border-accent pl-6 md:pl-8">
          <p className="display text-[clamp(1.5rem,3vw,2.35rem)] leading-snug text-ink">
            “{dict.method.quote}”
          </p>
          <footer className="mt-6 text-sm tracking-[0.08em] text-muted">
            {dict.method.quoteAttr}
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
