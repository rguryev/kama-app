import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";

export function Bento() {
  return (
    <BentoGrid className="mx-auto mt-[10rem] w-full md:auto-rows-[5rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex h-[50rem] w-full items-center justify-center bg-background dark:bg-background">
    {/* Radial gradient for the container to give a faded look */}
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
  </div>
);
const items = [
  {
    title:
      "Привет! 👋 Меня зовут Катя Матвеева, я - миграционный эксперт, и моя команда специализируется на ВНЖ, ПМЖ и гражданстве в Польше.",
    description:
      "Наша цель - обеспечить вам профессиональное сопровождение в подаче документов и консультации по всем вопросам, связанным с процессом. Доверьтесь нам, чтобы сделать ваш переезд максимально комфортным и успешным.",
    header: (
      <div className="relative m-2 mb-0 h-[12rem] flex-shrink-0 rounded-3xl bg-white dark:bg-background">
        <Image
          className="rounded-3xl object-cover object-center"
          //   style={{ objectFit: "cover", objectPosition: "top center" }}
          src="/images/kate-matveeva-nobg.png"
          alt="equipments"
          fill
        />
      </div>
    ),
    className: "md:col-span-3 md:row-span-4",
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    button: "Learn More",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    description: "Dive into the transformative power of technology.",
    className: "md:col-span-3 md:row-span-2",
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    className: "md:col-span-1 md:row-span-2",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    className: "md:col-span-1 md:row-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    className: "md:col-span-1 md:row-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    className: "md:col-span-2 md:row-span-4",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    className: "md:col-span-2 md:row-span-2",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    className: "md:col-span-2 md:row-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    className: "md:col-span-2 md:row-span-1",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    className: "md:col-span-2 md:row-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    className: "md:col-span-2 md:row-span-2",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    className: "md:col-span-2 md:row-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
];
