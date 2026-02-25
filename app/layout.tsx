import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { siteConfig } from "@/site.config";
import { ThemeProvider } from "@/lib/theme";

const spaceGrotesk = localFont({
  src: [
    { path: "../public/fonts/space-grotesk-400.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/space-grotesk-500.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/space-grotesk-600.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/space-grotesk-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-space-grotesk",
  display: "swap",
});

const syne = localFont({
  src: [
    { path: "../public/fonts/syne-700.woff2", weight: "700", style: "normal" },
    { path: "../public/fonts/syne-800.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: `${siteConfig.name} — ${siteConfig.role}`,
  description: siteConfig.bio,
  keywords: ["Frontend Developer", "React", "Next.js", "TypeScript", siteConfig.name],
  authors: [{ name: siteConfig.name, url: siteConfig.siteUrl }],
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.bio,
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.bio,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: [
      { url: siteConfig.icons.icon16, sizes: "16x16", type: "image/png" },
      { url: siteConfig.icons.icon32, sizes: "32x32", type: "image/png" },
      { url: siteConfig.favicon, sizes: "any" }, // Fallback for older browsers
    ],
    apple: [
      { url: siteConfig.icons.apple, sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "android-chrome-192x192", url: siteConfig.icons.android192 },
      { rel: "android-chrome-512x512", url: siteConfig.icons.android512 },
    ],
  },
};

// Blocking script — runs before paint to prevent flash of wrong theme
const themeScript = `
(function() {
  try {
    var saved = localStorage.getItem('theme');
    var preferred = saved || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    document.documentElement.setAttribute('data-theme', preferred);
  } catch(e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${syne.variable}`} suppressHydrationWarning>
      <head>
        {/* Blocking script must run before any CSS is applied */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
