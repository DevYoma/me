import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Ogheneyoma | Product Engineer",
    template: "%s | Ogheneyoma"
  },
  description: "Ogheneyoma is a Software Engineer and Technical Writer passionate about building products that solve real-world problems.",
  keywords: ["Ogheneyoma", "Software Engineer", "Product Engineer", "Lagos", "Nigeria", "FYBVault", "Web Development"],
  authors: [{ name: "Ogheneyoma" }],
  openGraph: {
    title: "Ogheneyoma | Product Engineer",
    description: "Building scalable web applications and documenting the process.",
    url: "https://yoma.xyz",
    siteName: "Ogheneyoma Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ogheneyoma | Product Engineer",
    description: "Software Engineer and Technical Writer passionate about building products.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches === true;
                  if (!theme && supportDarkMode) theme = 'dark';
                  if (!theme) theme = 'light';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <div className="container">
          <Navbar />
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
