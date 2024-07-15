import About from "@/app/(browse)/[locale]/(home)/about";
import Hero from "@/app/(browse)/[locale]/(home)/hero";
import Reviews from "@/app/(browse)/[locale]/(home)/reviews";
import Solutions from "@/app/(browse)/[locale]/(home)/solutions";
import Target from "@/app/(browse)/[locale]/(home)/target";
import Workflow from "@/app/(browse)/[locale]/(home)/workflow";
import Contact from "@/app/(browse)/[locale]/(home)/contact";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import CoursePricing from "./_course-pricing/course-pricing";
import Pricing from "./_pricing/pricing";
import Layout from "@/layouts/layout";
import Bento from "./_bento/bento";
export default function Home({ params: { locale } }: any) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Header");
  return (
    <Layout>
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
