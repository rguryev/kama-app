import { FC } from "react";

interface CardProps {
  children: React.ReactNode;
}

const Card: FC<CardProps> = ({ children }) => {
  return (
    <div className="border-sm h-[20rem] w-[10rem] rounded-3xl border-2 border-gray-400 bg-gray-200 p-8 opacity-100">
      {children}
    </div>
  );
};

export default Card;
