
import localFont from "next/font/local";

import "./globals.css";

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
  title: " Umair Zakria Web Developer",
  description: "",
  icons: {
    icon: "ui/favicon.png", // Path to your favicon

  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
