import React, { ReactNode } from "react";
import Image from "next/image";
import Card from "./Card";

interface TitleProps {
  children: ReactNode;
}

interface DescriptionProps {
  children: ReactNode;
}

interface CardProps {
  title?: string;
  description?: string;
  width?: number;
  height?: number;
  children?: (props: {
    Image: React.FC<{ src: string; alt: string }>;
  }) => ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return <h2>{children}</h2>;
};

const Description: React.FC<DescriptionProps> = ({ children }) => {
  return (
    <p style={{ border: "1px dashed #ccc", padding: "10px" }}>{children}</p>
  );
};

const CardsSection: React.FC<CardProps> = ({}) => {
  return (
    <div className="flex h-[40rem] flex-row items-center justify-center bg-slate-300">
      <Card>
        {<Title>Hello</Title>}
        {<Description>World</Description>}
        {<Image src="/check.svg" alt="alt" width={50} height={50} />}
      </Card>
    </div>
  );
};

export default CardsSection;
