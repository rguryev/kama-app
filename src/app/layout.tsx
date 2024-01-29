import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KaMa documents",
  description: "Помощь в оформлении ВНЖ, ПМЖ и гражданства Республики Польша",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
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
          {/* <div className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] sm:w-[68.75rem] dark:bg-[#fccdcf]"></div>
          <div className="absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#ecd0ff]"></div> */}

          <main className="relative flex min-h-screen flex-col ">
            <Navbar />
            <div className="flex-1 flex-grow">{children}</div>
            {/* <Footer /> */}
          </main>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
