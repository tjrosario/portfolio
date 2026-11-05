import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { siteConfig } from "@/site.config";
import { ThemeProvider } from "@/lib/theme";

const inter = localFont({
  src: "../public/fonts/inter-variable.woff2",
  weight: "100 900",
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = localFont({
  src: "../public/fonts/jetbrains-mono-variable.woff2",
  weight: "100 800",
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const sora = localFont({
  src: "../public/fonts/sora-variable.woff2",
  weight: "100 800",
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: `${siteConfig.name} — ${siteConfig.role}`,
  description: siteConfig.metaDescription,
  alternates: { canonical: "/" },
  authors: [{ name: siteConfig.name, url: siteConfig.siteUrl }],
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.metaDescription,
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.metaDescription,
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

// Runs on each visit so a static page still follows the date; ?season=<id> previews any season
const seasonScript = `
(function() {
  try {
    var seasons = ${JSON.stringify(siteConfig.seasons.map(({ id, from, to }) => [id, from, to]))};
    var now = new Date();
    var pad = function(n) { return (n < 10 ? '0' : '') + n; };
    var today = pad(now.getMonth() + 1) + '-' + pad(now.getDate());
    var preview = new URLSearchParams(location.search).get('season');
    var match = seasons.find(function(s) { return s[0] === preview; }) || seasons.find(function(s) {
      return s[1] <= s[2] ? today >= s[1] && today <= s[2] : today >= s[1] || today <= s[2];
    });
    if (match) document.documentElement.setAttribute('data-season', match[0]);
  } catch(e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${sora.variable}`} suppressHydrationWarning>
      <head>
        {/* Blocking script must run before any CSS is applied */}
        <script dangerouslySetInnerHTML={{ __html: themeScript + seasonScript }} />
      </head>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
