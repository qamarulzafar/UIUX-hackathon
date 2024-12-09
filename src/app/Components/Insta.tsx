import React from 'react';
import Image from 'next/image';
import bgimg from '../../Images/Rectangle 17.png';

const Insta = () => {
  return (
    <div className="relative w-full h-[400px] bg-gray-100">
      {/* Background Image */}
      <Image
        src={bgimg}
        alt="Instagram Background"
        layout="fill"
        objectFit="cover"
        className="opacity-90"
      />
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-black">Our Instagram</h2>
        <p className="text-gray-800 text-xl mt-2">
          Follow our store on Instagram
        </p>
        <button className="mt-6 px-14 py-3 bg-[#FAF4F4] text-black rounded-3xl shadow-md hover:shadow-lg">
          Follow Us
        </button>
      </div>
    </div>
  );
};

export default Insta;
