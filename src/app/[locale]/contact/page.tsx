import type { Metadata } from "next";
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
    title: `${dict.contactPage.title} · ${site.brand}`,
    description: dict.contactPage.bookBody,
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const dict = getDictionary(raw);

  return (
    <div className="pt-24 md:pt-28">
      <section className="section-pad mx-auto max-w-[1400px] pb-12 md:pb-16">
        <p className="text-xs tracking-[0.2em] uppercase text-accent">
          {dict.contactPage.title}
        </p>
        <h1 className="display mt-4 max-w-3xl text-[clamp(2.8rem,7vw,5.5rem)] text-ink">
          {dict.contactPage.headline}
        </h1>
      </section>

      <section className="section-pad mx-auto grid max-w-[1400px] gap-6 pb-24 md:grid-cols-2 md:pb-32">
        <article className="border border-line bg-elevated p-7 md:p-10">
          <h2 className="text-xs tracking-[0.18em] uppercase text-muted">
            {dict.contactPage.where}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink">
            {site.address.venue}
            <br />
            {site.address.line1}
            <br />
            {site.address.line2}
            <br />
            {site.address.city}
          </p>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary mt-6 inline-flex text-sm"
          >
            {dict.close.maps}
          </a>
        </article>

        <article className="border border-line bg-elevated p-7 md:p-10">
          <h2 className="text-xs tracking-[0.18em] uppercase text-muted">
            {dict.contactPage.reach}
          </h2>
          <div className="mt-4 flex flex-col gap-3 text-lg text-ink">
            <a href={`tel:${site.phoneTel}`} className="hover:text-accent">
              {site.phoneDisplay}
            </a>
            <a href={`mailto:${site.email}`} className="hover:text-accent">
              {site.email}
            </a>
            <a href={site.instagram} target="_blank" rel="noreferrer" className="hover:text-accent">
              {site.instagramHandle}
            </a>
          </div>
        </article>

        <article className="border border-accent/40 bg-void p-7 md:col-span-2 md:p-12">
          <h2 className="display text-3xl text-ink md:text-5xl">
            {dict.contactPage.bookTitle}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {dict.contactPage.bookBody}
          </p>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="btn-primary mt-8 inline-flex"
          >
            {dict.contactPage.bookCta}
          </a>
        </article>
      </section>
    </div>
  );
}
