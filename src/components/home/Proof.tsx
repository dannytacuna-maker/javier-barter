import type { Dictionary } from "@/lib/dictionaries";
import { site } from "@/lib/site";

type Props = {
  dict: Dictionary;
};

export function Proof({ dict }: Props) {
  return (
    <section className="relative border-t border-line bg-void py-20 md:py-28">
      <div className="section-pad mx-auto max-w-[1400px]">
        <p className="text-xs tracking-[0.2em] uppercase text-accent">
          {dict.proof.eyebrow}
        </p>
        <h2 className="display mt-4 max-w-4xl text-[clamp(2.2rem,5vw,4.2rem)] text-ink">
          {dict.proof.headline}
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          {dict.proof.support}
        </p>

        <div className="mt-12 overflow-hidden border-y border-line">
          <ul className="divide-y divide-line md:grid md:grid-cols-3 md:divide-x md:divide-y-0">
            {dict.proof.items.map((item) => (
              <li key={`${item.event}-${item.year}`} className="px-1 py-8 md:px-8 md:py-10">
                <p className="display text-4xl text-accent md:text-5xl">{item.result}</p>
                <p className="mt-3 text-xs tracking-[0.18em] uppercase text-muted">
                  {item.year}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink md:text-base">
                  {item.event}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <article className="mt-14 grid gap-6 border border-line bg-elevated/70 p-6 md:grid-cols-[1.4fr_1fr] md:p-10">
          <div>
            <p className="text-xs tracking-[0.18em] uppercase text-muted">
              {dict.proof.pressMeta}
            </p>
            <h3 className="display mt-3 text-3xl text-ink md:text-4xl">
              {dict.proof.pressTitle}
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted md:text-base">
              {dict.proof.pressBody}
            </p>
          </div>
          <div className="flex items-end md:justify-end">
            <a
              href={site.ibjjfFeature}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary text-sm"
            >
              {dict.proof.pressCta}
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
