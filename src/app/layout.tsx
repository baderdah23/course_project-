import type { Metadata, Viewport } from "next";
import { League_Spartan, Poppins } from "next/font/google";
import { SITE } from "@/lib/site";
import "./globals.css";

const spartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-spartan",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `Courses | ${SITE.name}`, template: `%s | ${SITE.name}` },
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: `Courses | ${SITE.name}`,
    description: SITE.description,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spartan.variable} ${poppins.variable}`}>
      <body className="bg-surface font-sans text-base leading-body tracking-wide text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:start-2 focus:top-2 focus:z-(--z-modal) focus:rounded-sm focus:bg-ink focus:px-4 focus:py-3 focus:text-white"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
