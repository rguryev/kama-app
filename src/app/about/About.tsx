import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="py-20 border-1 border-gray-200">
      <div className="relative isolate">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-50 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
          />
        </div>

        <section className="dark:bg-gray-800 dark:text-gray-100">
          <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-around">
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
              <Image
                src="/kate-matveeva.jpg"
                alt="product preview"
                width={1364 / 3}
                height={866 / 3}
                quality={100}
                className="rounded-md bg-white p-2 sm:p-8 md:p-8 shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
              <h3 className="text-3xl font-bold">Обо мне</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                et optio provident consectetur, sapiente hic repellat. Incidunt
                fugiat ex iure impedit! Libero ab quam ad odit fuga dignissimos
                laudantium inventore, rerum, possimus magnam dicta labore
                dolore.
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
