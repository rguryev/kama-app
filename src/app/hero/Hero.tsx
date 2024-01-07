import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <MaxWidthWrapper>
      <div className="py-40 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Помощь в оформлении ВНЖ, ПМЖ и гражданства{" "}
          <span className="text-orange-600  ">Республики Польша</span>
        </h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground">
          Привет👋 Мы помогаем оформить ВНЖ, ПМЖ и гражданство Польши,
          сопровождаем ваши документы и консультируем вас по всем сопутствующим
          вопросам.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href="/products" className={buttonVariants()}>
            Записаться
          </Link>
          <Button variant="outline">Отзывы о нас &rarr;</Button>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Hero;
