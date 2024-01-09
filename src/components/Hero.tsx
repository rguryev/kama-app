import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import styles from "../app/style";

const Hero = () => {
  return (
    <section id="hero">
      <MaxWidthWrapper>
        <div className="mx-auto flex max-w-3xl flex-col items-center pb-28 pt-48 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Помощь в оформлении <br />
            <span className="text-gradient">ВНЖ, ПМЖ и гражданства </span>
            Республики Польша
          </h1>
          <p className="mt-6 max-w-prose text-lg text-muted-foreground">
            Привет👋 Мы помогаем оформить ВНЖ, ПМЖ и гражданство Польши,
            сопровождаем ваши документы и консультируем вас по всем
            сопутствующим вопросам.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <Link href="/products" className={buttonVariants()}>
              Записаться
            </Link>
            <Button variant="outline">Отзывы о нас &rarr;</Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
