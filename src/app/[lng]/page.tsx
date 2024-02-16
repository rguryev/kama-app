import About from "@/components/about";
import Bento from "@/components/bento";
import Contact from "@/components/contact";
import CoursePricing from "@/components/course-pricing";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";
import Reviews from "@/components/reviews";
import Solutions from "@/components/solutions";
import Target from "@/components/target";
import Workflow from "@/components/workflow";
import Link from "next/link";
import { useTranslation } from "../i18n";

export default async function Home({ params: { lng } }: any) {
  const { t } = await useTranslation(lng);
  return (
    <>
      {/* <div>
        <h1>{t("title")}</h1>
        <Link href={`/${lng}/second-page`}>{t("to-second-page")}</Link>
      </div> */}
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
