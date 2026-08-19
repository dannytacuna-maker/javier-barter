import type { Dictionary } from "@/lib/dictionaries";

type Props = {
  dict: Dictionary;
};

export function Access({ dict }: Props) {
  return (
    <section className="border-t border-line bg-void py-20 md:py-28">
      <div className="section-pad mx-auto max-w-[1400px]">
        <p className="text-xs tracking-[0.2em] uppercase text-accent">
          {dict.access.eyebrow}
        </p>
        <h2 className="display mt-4 max-w-3xl text-[clamp(2.1rem,4.8vw,3.8rem)] text-ink">
          {dict.access.headline}
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
          {dict.access.support}
        </p>

        <div className="mt-12 grid gap-px bg-line md:grid-cols-2">
          {dict.access.faqs.map((faq) => (
            <article key={faq.q} className="bg-void p-6 md:p-8">
              <h3 className="text-base font-medium text-ink md:text-lg">{faq.q}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                {faq.a}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
