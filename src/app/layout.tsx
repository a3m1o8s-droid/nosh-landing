import type { Metadata, Viewport } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nosh — ה-AI שמחליט בשבילך מה לאכול | כשר",
  description:
    "כל יום ב-17:00 מקבלים המלצה אחת לאוכל כשר — משלוח, מתכון מהיר, או מוצר מהסופר. בלי לחשוב.",
  keywords: [
    "אוכל כשר",
    "מה לאכול",
    "AI אוכל",
    "משלוח כשר",
    "תכנון ארוחות",
    "nosh",
  ],
  authors: [{ name: "Nosh" }],
  openGraph: {
    type: "website",
    locale: "he_IL",
    siteName: "Nosh",
    title: "Nosh — ה-AI שמחליט בשבילך מה לאכול",
    description:
      "כל יום ב-17:00 מקבלים המלצה אחת. כשר. אישי. בלי לחשוב.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nosh — ה-AI שמחליט בשבילך מה לאכול",
    description:
      "כל יום ב-17:00 מקבלים המלצה אחת. כשר. אישי. בלי לחשוב.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FF6B35",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${heebo.variable} font-heebo antialiased`}>
        {children}
      </body>
    </html>
  );
}
