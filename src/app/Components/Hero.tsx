import Image from "next/image";
import React from "react";
import sofa from "../../Images/Rocket single seater 1.png";

const Hero = () => {
  return (
    <div>
      <div className="w-full px-5 md:px-20 min-h-screen bg-[#FBEBB5] flex flex-col md:flex-row justify-center items-center ">
        <div className="side-1">
          <p className="text-5xl text-center md:text-start mt-10 pt-20">
            Rocket single seater
          </p>
          <div className="text-center md:text-start">
            <button className="mt-3">shop Now</button>
            <div className="w-16 h-[1px] m-auto md:m-0 bg-black mt-2"></div>
          </div>
        </div>
        <div className="side-2 z-0">
          <Image src={sofa} alt="Sofa Image" width={600} height={100} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
