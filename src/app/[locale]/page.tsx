import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Access } from "@/components/home/Access";
import { Close } from "@/components/home/Close";
import { Hero } from "@/components/home/Hero";
import { Method } from "@/components/home/Method";
import { Proof } from "@/components/home/Proof";
import { Train } from "@/components/home/Train";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale, type Locale } from "@/lib/site";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const dict = getDictionary(raw);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      languages: {
        es: "/es",
        en: "/en",
      },
    },
  };
}

export default async function HomePage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);

  return (
    <>
      <Hero locale={locale} dict={dict} />
      <Proof dict={dict} />
      <Method dict={dict} />
      <Train dict={dict} />
      <Access dict={dict} />
      <Close dict={dict} />
    </>
  );
}
