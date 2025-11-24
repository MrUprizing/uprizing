import type { Metadata } from "next";
import { Doto, Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { ViewTransitions } from "next-view-transitions";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const doto = Doto({
  variable: "--font-doto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "uprizing",
  description: "Backend Developer, Cloud Developer, Api Architect",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html
        lang="en"
        className="overflow-x-hidden touch-manipulation"
        suppressHydrationWarning
      >
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${doto.variable} text-sm leading-6 sm:text-[15px] sm:leading-7 md:text-base md:leading-7 antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="w-full p-6 sm:p-10 md:p-14">
              <div className="fixed sm:hidden h-6 sm:h-10 md:h-14 w-full top-0 left-0 z-30 pointer-events-none bg-gradient-to-b from-background to-transparent" />
              <div className="flex flex-col sm:flex-row">
                <Navbar />
                <main className="relative flex-1 max-w-2xl">
                  <div className="absolute w-full h-px bg-border right-0 sm:right-auto sm:left-0 sm:w-px sm:h-full" />
                  <article className="pl-0 pt-6 sm:pt-0 sm:pl-6 md:pl-10 lg:pl-14">
                    {children}
                  </article>
                </main>
              </div>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
