import Link from "next/link";
import type { Dictionary } from "@/lib/dictionaries";
import { site, type Locale } from "@/lib/site";

type Props = {
  locale: Locale;
  dict: Dictionary;
};

export function SiteFooter({ locale, dict }: Props) {
  return (
    <footer className="border-t border-line bg-elevated">
      <div className="section-pad mx-auto grid max-w-[1400px] gap-10 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="display text-3xl text-ink">{site.brand}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            {site.academy}
          </p>
          <p className="mt-4 text-xs tracking-[0.18em] uppercase text-accent">
            {site.tagline}
          </p>
        </div>

        <div>
          <p className="text-xs tracking-[0.16em] uppercase text-muted">
            {dict.footer.visit}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink">
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
            className="mt-3 inline-block text-sm text-accent hover:underline"
          >
            {dict.close.maps}
          </a>
        </div>

        <div>
          <p className="text-xs tracking-[0.16em] uppercase text-muted">
            {dict.footer.connect}
          </p>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            <a href={site.whatsapp} target="_blank" rel="noreferrer" className="hover:text-accent">
              WhatsApp
            </a>
            <a href={`mailto:${site.email}`} className="hover:text-accent">
              {site.email}
            </a>
            <a href={site.instagram} target="_blank" rel="noreferrer" className="hover:text-accent">
              Instagram
            </a>
            <Link href={`/${locale}/contact`} className="hover:text-accent">
              {dict.nav.contact}
            </Link>
          </div>
        </div>
      </div>
      <div className="section-pad border-t border-line py-5 text-center text-xs text-muted">
        © {new Date().getFullYear()} {site.academy}. {dict.footer.rights}
      </div>
    </footer>
  );
}
