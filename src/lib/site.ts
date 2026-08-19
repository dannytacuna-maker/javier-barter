export const site = {
  brand: "Javier Barter",
  academy: "Javier Barter Jiu Jitsu Academy",
  tagline: "sic parvis magna",
  whatsapp: "https://wa.link/g2h8aa",
  phoneDisplay: "+507 6745-1634",
  phoneTel: "+50767451634",
  email: "javierbarter45@gmail.com",
  instagram: "https://www.instagram.com/javierbarterjiujitsu/",
  instagramHandle: "@javierbarterjiujitsu",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Tropical+Barbell+Ciudad+de+Panama",
  address: {
    venue: "Tropical Barbell",
    line1: "Av. 31 Sur, entre Calle 76 y 77",
    line2: "San Francisco",
    city: "Ciudad de Panamá, Panamá",
  },
  ibjjfFeature: "https://ibjjf.com/news/barter-s-absolute-ambition",
} as const;

export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
