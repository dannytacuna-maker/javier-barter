import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import "./globals.css";

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Javier Barter — IBJJF No-Gi World Champion",
  description:
    "Train No-Gi with IBJJF No-Gi World Champion Javier Barter in Panama City.",
  icons: {
    icon: "/brand/logo-mark.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full bg-void text-ink antialiased">
        <div className="noise" aria-hidden />
        {children}
      </body>
    </html>
  );
}
