import React from "react";
import Image from "next/image";
import pic1 from "../../Images/toppic.png";
import pic2 from "../../Images/toppic2.png";
import pic3 from "../../Images/toppic3.png";
import pic4 from "../../Images/toppic4.png";
import Link from "next/link";

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

// Define props type
interface TopPicksForYouProps {
  heading: string;
  showParagraph?: boolean;
}

const TopPicksForYou: React.FC<TopPicksForYouProps> = ({ heading, showParagraph = true }) => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-3xl font-bold">{heading}</h1>
        {showParagraph && (
          <p className="font-sans text-zinc-400 mt-3 px-4">
            Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
          </p>
        )}
      </div>

      {/* Products Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 px-5 max-w-7xl">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4">
           <Link href='/Shop'>
           <Image
              src={product.image}
              alt={product.title}
              width={300}
              height={200}
              className="mx-auto"
            /></Link>
            <h2 className="mt-4 text-lg font-sans">{product.title}</h2>
            <p className="text-black font-bold font-sans my-3">{product.price}</p>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="viewmore flex justify-center flex-col items-center mt-10">
        <Link href='/Shop' className="mt-3">View More</Link>
        <div className="w-16 h-[1px] bg-black mt-2"></div>
      </div>
    </div>
  );
};

export default TopPicksForYou;
