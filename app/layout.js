
import localFont from "next/font/local";

import "./globals.css";
import Script from "next/script";

import { ThemeProvider } from "../components/theme-provider"


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const brittany = localFont({
  src: "./fonts/Brittany.otf",
  variable: "--font-brittany",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const ubuntu = localFont({
  src: "./fonts/Ubuntu.ttf",
  variable: "--font-ubuntu",
  weight: "100 900",
});

export const metadata = {
  title: "Umair Zakria | Web Developer Portfolio",
  description: "Explore Umair Zakria's web development portfolio, showcasing projects built with React, Next.js, Tailwind CSS, and MongoDB. Offering expertise in front-end and back-end development with a focus on responsive design, seamless user experiences, and dynamic web applications.",

  keywords: "Umair Zakria, Web Developer, React Developer, Next.js Portfolio, Tailwind CSS, MongoDB, Front-end Developer, Back-end Developer",
  icons: {
    icon: "ui/favicon.png", // Path to your favicon
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-NYBTL36LZ3"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NYBTL36LZ3');
          `}
        </Script>

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${brittany.variable} ${ubuntu.variable} overflow-x-hidden `}
      >
        <ThemeProvider>

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
