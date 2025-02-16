import "./globals.css";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Footer from "../components/Footer";
import { ThemeProvider } from "../components/theme-provider";

/** @type {import("next").Metadata} */
export const metadata = {
  title: "Dillon Walsh - Web Developer",
  description: "Dillon Walsh- Professional Web Developer. Come see what I've been up to!",
  openGraph: {
    title: "Dillon Walsh - Web Developer",
    description: "Professional Web Developer showcasing projects and blog posts.",
    url: "https://www.dillonwalsh.com",
    siteName: "Dillon Walsh Portfolio",
    images: [
      {
        url: "https://www.dillonwalsh.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dillon Walsh - Web Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "/twitter-img.png",
    title: "Dillon Walsh - Web Developer",
    description: "Professional Web Developer.",
    creator: "@dillonpw",
    images: "/twitter-img.png",
  },

  keywords: [
    "Dillon",
    "Walsh",
    "dillonwalsh.com",
    "dillonwalsh",
    "dylan",
    "dillonpw",
    "dylanwalsh",
    "portfolio",
    "web",
    "developer",
    "web developer",
    "first responder",
    "ios",
    "mobile",
    "react native",
    "expo",
    "tauri",
    "blog",
    "programming",
    "personal interests",
    "computer",
    "science",
    "computer science",
    "technology",
    "projects",
    "next.js",
    "first",
    "responder",
    "ReactJS",
    "Astro Framework",
    "Front-End Development",
    "CSS3",
    "JavaScript",
    "E-Commerce Development",
    "Responsive Design",
    "UI/UX Design",
    "Web Design",
    "HTML5",
    "SEO Optimization",
    "Modern Web Technologies",
    "Dynamic Websites",
    "Client-Side Routing",
    "Web Performance",
    "Cross-Browser Compatibility",
    "Web Accessibility",
    "Custom Web Solutions",
    "Interactive Websites",
    "Digital Portfolio",
  ],
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
  },
  referrer: "origin-when-cross-origin",
  authors: ["Dillon Walsh"],
  creator: "Dillon Walsh",
  publisher: "Dillon Walsh",
  metadataBase: new URL("https://www.dillonwalsh.com"),
  alternates: {
    canonical: "/",
  },
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className} relative min-h-full w-[100vw] bg-neutral-50 p-0 text-slate-900 transition-all dark:bg-neutral-950 dark:text-gray-200`}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
