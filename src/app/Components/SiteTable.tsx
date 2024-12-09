import Image from 'next/image';
import React from 'react';
import sitetable1 from "../../Images/Granite square side table 1.png";
import sitetable2 from '../../Images/Cloud sofa three seater + ottoman_3 1.png';

const SiteTable = () => {
  return (
    <div className="flex w-full justify-center md:justify-around flex-col md:flex-row px-10 items-start pt-10 bg-[#FAF4F4]">
      {/* Product 1 */}
      <div className="product-1 pb-10">
        <div className="flex justify-center">
          <Image src={sitetable1} alt="Granite Square Side Table" width={400} height={100} />
        </div>
        <h1 className="text-2xl mt-4">Side table</h1>
        <button className="mt-3 text-lg">View More</button>
        <div className="w-16 h-[1px] bg-black mt-2 "></div>
      </div>

      {/* Product 2 */}
      <div className="product-2 pb-10">
        <div className="flex justify-center">
          <Image src={sitetable2} alt="Cloud Sofa Three Seater" width={400} height={100} />
        </div>
        <h1 className="text-2xl mt-4">Side table</h1>
        <button className="mt-3 text-lg">View More</button>
        <div className="w-16 h-[1px] bg-black mt-2 "></div>
      </div>
    </div>
  );
};

export default SiteTable;
