import Target from "./target/Target";
import About from "./about/About";
import Hero from "./hero/Hero";
import Pricing from "./pricing/Pricing";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Target />
      <Pricing />
    </>
  );
}
