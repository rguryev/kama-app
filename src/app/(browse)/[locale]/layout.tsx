import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@/components/ui/sonner";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import Providers from "@/providers/providers";
import ThemeProvider from "@/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

const locales = ["en", "ru"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

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
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className="h-full">
      <NextIntlClientProvider messages={messages}>
        <body
          className={cn(
            "relative h-full font-sans antialiased",
            inter.className,
          )}
        >
          <Providers>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >
              <div className="absolute right-[11rem] top-[13rem] -z-10 h-[50rem] w-[31.25rem] rounded-full bg-[#fbd2d3] blur-[10rem] sm:w-[68.75rem] dark:bg-[#e15a8b]"></div>
              <div className="absolute left-[-35rem] top-[8rem] -z-10 h-[50rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#5b2573]"></div>

              <main className="relative flex min-h-screen flex-col ">
                {children}
                <Toaster />
              </main>
            </ThemeProvider>
          </Providers>

          <SpeedInsights />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
