import Image from "next/image";
import type { Dictionary } from "@/lib/dictionaries";
import { site, type Locale } from "@/lib/site";

type Props = {
  locale: Locale;
  dict: Dictionary;
};

export function Hero({ locale, dict }: Props) {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/gallery/javier-ibjjf-nogi-1200.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_22%] sm:object-[68%_18%] md:object-[74%_16%]"
        />
        <div className="hero-shade absolute inset-0" />
        <div className="mat-grid absolute inset-0 opacity-40" />
      </div>

      <div className="section-pad relative z-10 mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end pb-16 pt-28 md:pb-24 md:pt-32">
        <p className="animate-rise display text-[clamp(3.4rem,12vw,9rem)] text-ink">
          {dict.hero.brand}
        </p>
        <h1 className="animate-rise animate-rise-delay-1 mt-5 max-w-3xl text-[clamp(1.45rem,3.4vw,2.4rem)] font-medium leading-tight tracking-[-0.02em] text-ink">
          {dict.hero.headline}
        </h1>
        <p className="animate-rise animate-rise-delay-2 mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
          {dict.hero.support}
        </p>
        <div className="animate-rise animate-rise-delay-3 mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            {dict.hero.ctaPrimary}
          </a>
          <a href={`/${locale}#schedule`} className="btn-secondary">
            {dict.hero.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
