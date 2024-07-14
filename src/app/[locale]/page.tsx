import About from "@/components/about";
import CoursePricing from "@/components/course-pricing";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";
import Reviews from "@/components/reviews";
import Solutions from "@/components/solutions";
import Target from "@/components/target";
import Workflow from "@/components/workflow";
import Bento from "@/components/bento";
import Contact from "@/components/contact";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Layout from "@/components/layouts/layout";
export default function Home({ params: { locale } }: any) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Header");
  return (
    <Layout>
      {/* Test */}
      <Hero />
      <Bento />
      <About />

      <Solutions />
      <Workflow />

      <Pricing />

      <Reviews />
      <Target />
      <CoursePricing />
      <Contact />
    </Layout>
  );
}
