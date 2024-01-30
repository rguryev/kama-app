import MaxWidthWrapper from "@/components/max-width-wrapper";
import React from "react";

const Hero = () => {
  return (
    <section id="hero">
      <MaxWidthWrapper>
        <div className="flex flex-col justify-between pb-1 pt-16 text-left">
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            Помощь в оформлении <br />
            <span className="text-gradient dark:text-gradient-dark">
              ВНЖ, ПМЖ и гражданства{" "}
            </span>
            Республики Польша
          </h1>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
