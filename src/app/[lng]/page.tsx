import About from "@/components/about";
import Contact from "@/components/contact";
import CoursePricing from "@/components/course-pricing";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";
import Reviews from "@/components/reviews";
import Solutions from "@/components/solutions";
import Target from "@/components/target";
import Workflow from "@/components/workflow";
import { useTranslation } from "../i18n";
import { Bento } from "@/components/bento";

export default async function Home({ params: { lng } }: any) {
  const { t } = await useTranslation(lng);
  return (
    <>
      <Hero lng={lng} />
      <Bento />
      <About />
      <Solutions />
      <Workflow />
      <Pricing />
      <Reviews />
      <Target />
      <CoursePricing />
      <Contact />
    </>
  );
}
