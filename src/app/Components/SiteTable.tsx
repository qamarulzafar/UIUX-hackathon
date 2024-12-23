import Image from 'next/image';
import React from 'react';
import sitetable1 from "../../Images/Granite square side table 1.png";
import sitetable2 from '../../Images/Cloud sofa three seater + ottoman_3 1.png';
import Link from 'next/link';

// Product Data
const products = [
  {
    id: 1,
    imageSrc: sitetable1, // Use the variable directly
    imageAlt: 'Granite Square Side Table',
    title: 'Side Table',
    buttonText: 'View More',
  },
  {
    id: 2,
    imageSrc: sitetable2, // Use the variable directly
    imageAlt: 'Cloud Sofa Three Seater',
    title: 'Side Table',
    buttonText: 'View More',
  },
];

const SiteTable = () => {
  return (
    <div className="flex w-full justify-center md:justify-around flex-col md:flex-row px-10 items-start pt-10 bg-[#FAF4F4]">
      {products.map((product) => (
        <div key={product.id} className="pb-10">
          <div className="flex justify-center">
            <Link href='/Shop'>
            <Image
              src={product.imageSrc} // Correctly reference the image source
              alt={product.imageAlt}
              width={400}
              height={100}
            /></Link>
          </div>
          <h1 className="text-2xl mt-4">{product.title}</h1>
          <Link href='/Shop'><button className="mt-3 text-lg">{product.buttonText}</button></Link>
          <div className="w-16 h-[1px] bg-black mt-2"></div>
        </div>
      ))}
    </div>
  );
};

export default SiteTable;
