import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale, site } from "@/lib/site";

type Props = {
  params: Promise<{ locale: string }>;
};

const images = [
  {
    src: "/gallery/javier-ibjjf-nogi-1200.webp",
    alt: "Javier Barter — IBJJF No-Gi",
  },
  {
    src: "/gallery/javier-takedown-480.jpg",
    alt: "Javier Barter — competition",
  },
  {
    src: "/gallery/academy-mat-talk-1200.jpg",
    alt: "Academy training",
  },
  {
    src: "/instructor/javier.webp",
    alt: "Javier Barter",
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const dict = getDictionary(raw);
  return {
    title: `${dict.galleryPage.title} · ${site.brand}`,
    description: dict.galleryPage.support,
  };
}

export default async function GalleryPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const dict = getDictionary(raw);

  return (
    <div className="pt-24 md:pt-28">
      <section className="section-pad mx-auto max-w-[1400px] pb-10 md:pb-14">
        <p className="text-xs tracking-[0.2em] uppercase text-accent">
          {dict.galleryPage.title}
        </p>
        <h1 className="display mt-4 text-[clamp(2.8rem,7vw,5.5rem)] text-ink">
          {dict.galleryPage.headline}
        </h1>
        <p className="mt-4 max-w-xl text-base text-muted">{dict.galleryPage.support}</p>
      </section>

      <section className="section-pad mx-auto grid max-w-[1400px] gap-3 pb-20 md:grid-cols-2 md:gap-4 md:pb-28">
        {images.map((image, index) => (
          <div
            key={image.src}
            className={`relative overflow-hidden border border-line ${
              index === 0 ? "md:col-span-2 aspect-[16/9]" : "aspect-[4/3]"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 70vw"
              className="object-cover transition duration-700 hover:scale-[1.03]"
            />
          </div>
        ))}
      </section>
    </div>
  );
}
