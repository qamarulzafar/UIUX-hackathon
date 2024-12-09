import React from 'react';
import Image from 'next/image';
import pic1 from '../../Images/TopPicks (1).png';
import pic2 from '../../Images/TopPicks (2).png';
import pic3 from '../../Images/TopPicks (3).png';
import pic4 from '../../Images/TopPicks (4).png';

// Array of product data
const products = [
  {
    id: 1,
    image: pic1,
    title: "Trenton modular sofa_3",
    price: "Rs. 25,000.00",
  },
  {
    id: 2,
    image: pic2,
    title: "Granite dining table with dining chair",
    price: "Rs. 25,000.00",
  },
  {
    id: 3,
    image: pic3,
    title: "Outdoor bar table and stool",
    price: "Rs. 25,000.00",
  },
  {
    id: 4,
    image: pic4,
    title: "Plain console with teak mirror",
    price: "Rs. 25,000.00",
  },
];

const TopPicksForYou = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-3xl font-bold">Top Picks For You</h1>
        <p className="font-sans text-zinc-400 mt-3 px-4">
          Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
        </p>
      </div>

      {/* Products Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 px-5 max-w-7xl">
        {products.map((product) => (
          <div
            key={product.id}
            className=" bg-white p-4"
          >
            <Image
              src={product.image}
              alt={product.title}
              width={300}
              height={200}
              className="mx-auto"
            />
            <h2 className="mt-4 text-lg font-sans">{product.title}</h2>
            <p className="text-black font-bold font-sans my-3">{product.price}</p>
          </div>
        ))}
      </div>
      <div className="viewmore flex justify-center flex-col items-center mt-10">
            <button className="mt-3">View More</button>
            <div className="w-16 h-[1px] bg-black mt-2"></div>
      </div>
    </div>
  );
};

export default TopPicksForYou;
