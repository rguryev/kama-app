import About from "@/components/about";
import CardsSection from "@/components/cards-section";
import Contact from "@/components/contact";
import CoursePricing from "@/components/course-pricing";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";
import Reviews from "@/components/reviews";
import Solutions from "@/components/solutions";
import Target from "@/components/target";
import Workflow from "@/components/workflow";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Target />
      <CardsSection />
      <CoursePricing />
      <Reviews />
      <Solutions />
      <Workflow />
      <Contact />
      <Pricing />
    </>
  );
}
