"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { Dictionary } from "@/lib/dictionaries";
import { locales, site, type Locale } from "@/lib/site";

type Props = {
  locale: Locale;
  dict: Dictionary;
};

export function SiteHeader({ locale, dict }: Props) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const switchLocale = (next: Locale) => {
    const parts = pathname.split("/");
    parts[1] = next;
    return parts.join("/") || `/${next}`;
  };

  const links = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/story`, label: dict.nav.story },
    { href: `/${locale}/gallery`, label: dict.nav.gallery },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-transparent bg-void/55 backdrop-blur-md">
      <div className="section-pad mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-4 md:h-20">
        <Link href={`/${locale}`} className="relative z-10 flex items-center gap-3">
          <Image
            src="/brand/logo-mark.png"
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
            priority
          />
          <span className="display text-sm tracking-[0.08em] uppercase text-ink md:text-base">
            {site.brand}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active =
              link.href === `/${locale}`
                ? pathname === link.href
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  active ? "text-accent" : "text-muted hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <div className="flex items-center gap-2 text-xs tracking-[0.14em] uppercase text-muted">
            {locales.map((l) => (
              <Link
                key={l}
                href={switchLocale(l)}
                className={l === locale ? "text-accent" : "hover:text-ink"}
              >
                {l}
              </Link>
            ))}
          </div>
          <a href={site.whatsapp} target="_blank" rel="noreferrer" className="btn-primary text-sm">
            {dict.nav.freeTrial}
          </a>
        </div>

        <button
          type="button"
          className="relative z-10 flex h-10 w-10 items-center justify-center border border-line text-ink md:hidden"
          aria-expanded={open}
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-4 flex-col gap-1.5">
            <span className={`h-px bg-ink transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-px bg-ink transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-line bg-void/95 px-5 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="display text-2xl text-ink"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-3 pt-2 text-xs tracking-[0.14em] uppercase text-muted">
              {locales.map((l) => (
                <Link key={l} href={switchLocale(l)} onClick={() => setOpen(false)}>
                  {l}
                </Link>
              ))}
            </div>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-2 text-center text-sm"
              onClick={() => setOpen(false)}
            >
              {dict.nav.freeTrial}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
