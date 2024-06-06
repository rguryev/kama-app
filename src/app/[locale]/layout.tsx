import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ThemeProvider from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import Layout from "@/components/layouts/layout";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KaMa documents",
  description: "Помощь в оформлении ВНЖ, ПМЖ и гражданства Республики Польша",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale} className="h-full">
      <body
        className={cn("relative h-full font-sans antialiased", inter.className)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="absolute right-[11rem] top-[13rem] -z-10 h-[50rem] w-[31.25rem] rounded-full bg-[#fbd2d3] blur-[10rem] sm:w-[68.75rem] dark:bg-[#e15a8b]"></div>
          <div className="absolute left-[-35rem] top-[8rem] -z-10 h-[50rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#5b2573]"></div>

          <main className="relative flex min-h-screen flex-col ">
            <Layout>{children}</Layout>
            <Toaster />
          </main>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
