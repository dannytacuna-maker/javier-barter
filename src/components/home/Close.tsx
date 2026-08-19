import Image from "next/image";
import type { Dictionary } from "@/lib/dictionaries";
import { site } from "@/lib/site";

type Props = {
  dict: Dictionary;
};

export function Close({ dict }: Props) {
  return (
    <section className="relative overflow-hidden border-t border-line">
      <div className="absolute inset-0">
        <Image
          src="/gallery/javier-takedown-480.jpg"
          alt=""
          fill
          sizes="100vw"
          className="scale-110 object-cover opacity-40 blur-[1px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/85 to-void/70" />
      </div>

      <div className="section-pad relative z-10 mx-auto flex max-w-[1400px] flex-col items-start py-24 md:py-32">
        <h2 className="display max-w-3xl text-[clamp(2.4rem,6vw,5rem)] text-ink">
          {dict.close.headline}
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
          {dict.close.support}
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            {dict.close.cta}
          </a>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            {dict.close.maps}
          </a>
        </div>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
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
      </div>
    </section>
  );
}
