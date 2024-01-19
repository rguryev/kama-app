import React from "react";
import Image from "next/image";
import TitleContainer from "./title-container";
import MaxWidthWrapper from "./max-width-wrapper";

const Reviews = () => {
  return (
    <section id="reviews">
      <MaxWidthWrapper className="mb-8 mt-24 text-center">
        <TitleContainer>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
            Отзывы наших клиентов
          </h1>
          <p className="mt-6 max-w-prose text-lg text-gray-700 dark:text-white">
            Почему вы можете нам доверять
          </p>
        </TitleContainer>
        <ul className="my-10 flex flex-col sm:flex-row">
          <li>
            <Image src="/review1.png" width={400} height={400} alt="review1" />
          </li>
          <li>
            <Image src="/review2.jpg" width={400} height={400} alt="review2" />
          </li>
          <li>
            <Image src="/review3.jpg" width={400} height={400} alt="review3" />
          </li>
          <li>
            <Image src="/review4.jpg" width={400} height={400} alt="review4" />
          </li>
        </ul>
      </MaxWidthWrapper>
    </section>
  );
};

export default Reviews;
