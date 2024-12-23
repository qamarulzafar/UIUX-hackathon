import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import newarrivalpic from '../../Images/Asgaard sofa 1.png';

const NewArrival = () => {
  return (
    <div className="bg-[#fef7e4] flex flex-col lg:flex-row items-center justify-between  px-6 lg:px-20 pb-10 md:pb-0">
      {/* Image Section */}
      <div className="flex justify-center w-full lg:w-4/3">
        <Image
          src={newarrivalpic}
          alt="Asgaard sofa"
          className="max-w-full h-auto"
          priority={true}
        />
      </div>

      {/* Text Section */}
      <div className="text-center w-full lg:w-1/2 mt-6 lg:mt-0">
        <h2 className="text-base font-sans font-medium">New Arrivals</h2>
        <h1 className="text-4xl font-bold mt-2 font-sans">Asgaard sofa</h1>
        <Link href='/Shop'><button className="mt-6 px-7 py-2 border border-black text-black font-medium hover:bg-gray-800 hover:text-white transition">
          Order Now
        </button></Link>
      </div>
    </div>
  );
};

export default NewArrival;
