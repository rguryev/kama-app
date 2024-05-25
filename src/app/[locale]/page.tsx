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
export default function Home({ params: { lng } }: any) {
  const t = useTranslations("Header");
  return (
    <>
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
    </>
  );
}
