import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface CardProps {
  imageSrc: string | StaticImageData; // Accept both string and StaticImageData types
    heading: string;
    description: string;
  }
  
  const Card: React.FC<CardProps> = ({ imageSrc, heading, description }) => {
    return (
    <div className="w-full bg-background flex flex-col py-8 px-6 gap-6 rounded-md hover:shadow-2xl">
      {/* Dynamic Image */}
      <Image src={imageSrc} alt={heading} width={72} height={72} />
      
      <div className='flex flex-col gap-2'>
        {/* Dynamic Heading */}
        <div className="text-2xl font-semibold ">
          {heading}
        </div>
        
        {/* Dynamic Description */}

        <div >
          {description}
        </div>
      </div>
    </div>
  );
};

export default Card;
