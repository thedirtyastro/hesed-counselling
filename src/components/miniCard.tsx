import React from "react";
import Check from "../../public/images/check.png";
import Image from "next/image";

interface probs {
  title: string;
  description: string;
}

const miniCard: React.FC<probs> = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row gap-2  items-center">
        <Image src={Check} alt="Check" width={24} height={20} />
        <span className="text-xl font-semibold"> {title}</span>
      </div>
      <div className="text-sm">{description}</div>
    </div>
  );
};

export default miniCard;
