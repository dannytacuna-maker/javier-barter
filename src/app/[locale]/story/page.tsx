import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale, site } from "@/lib/site";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const dict = getDictionary(raw);
  return {
    title: `${dict.storyPage.title} · ${site.brand}`,
    description: dict.meta.description,
  };
}

export default async function StoryPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const dict = getDictionary(raw);

  return (
    <div className="pt-24 md:pt-28">
      <section className="section-pad mx-auto grid max-w-[1400px] gap-10 pb-16 md:grid-cols-[0.9fr_1.1fr] md:items-end md:pb-20">
        <div className="relative aspect-[4/5] overflow-hidden border border-line">
          <Image
            src="/instructor/javier.webp"
            alt={dict.storyPage.headline}
            fill
            priority
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-accent">
            {dict.storyPage.title}
          </p>
          <h1 className="display mt-4 text-[clamp(3rem,8vw,6rem)] text-ink">
            {dict.storyPage.headline}
          </h1>
          <p className="mt-4 text-base text-muted">{dict.storyPage.role}</p>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="section-pad mx-auto max-w-[900px] space-y-14 py-16 md:py-24">
          {dict.storyPage.sections.map((section) => (
            <article key={section.title}>
              <h2 className="display text-3xl text-ink md:text-4xl">{section.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
                {section.body}
              </p>
            </article>
          ))}

          <article>
            <h2 className="display text-3xl text-ink md:text-4xl">
              {dict.storyPage.lineageTitle}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              {dict.storyPage.lineage}
            </p>
          </article>

          <blockquote className="border-l border-accent pl-6">
            <p className="display text-2xl leading-snug text-ink md:text-3xl">
              “{dict.method.quote}”
            </p>
            <footer className="mt-5 text-sm text-muted">{dict.method.quoteAttr}</footer>
          </blockquote>

          <article className="border border-line bg-elevated p-6 md:p-8">
            <p className="text-xs tracking-[0.18em] uppercase text-muted">
              {dict.proof.pressMeta}
            </p>
            <h2 className="display mt-3 text-3xl text-ink">{dict.proof.pressTitle}</h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              {dict.proof.pressBody}
            </p>
            <a
              href={site.ibjjfFeature}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary mt-6 inline-flex text-sm"
            >
              {dict.proof.pressCta}
            </a>
          </article>
        </div>
      </section>
    </div>
  );
}
