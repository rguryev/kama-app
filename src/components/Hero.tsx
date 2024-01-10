import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import styles from "../app/style";

const Hero = () => {
  return (
    <section id="hero">
      <MaxWidthWrapper>
        <div className="mx-auto flex max-w-3xl flex-col items-center pb-24 pt-48 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
            Помощь в оформлении <br />
            <span className="text-gradient dark:text-gradient-dark">
              ВНЖ, ПМЖ и гражданства{" "}
            </span>
            Республики Польша
          </h1>
          <p className="mt-6 max-w-prose text-lg text-muted-foreground dark:text-white">
            Привет! 👋 Меня зовут Катя Матвеева, моя команда специализируется на
            ВНЖ, ПМЖ и гражданстве в Польше. Наша цель - обеспечить вам
            профессиональное сопровождение в подаче документов и консультации по
            всем вопросам, связанным с процессом. Доверьтесь нам, чтобы сделать
            ваш переезд максимально комфортным и успешным.
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
