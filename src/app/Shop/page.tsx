import React from "react";
import ShopHero from "../Components/ShopHero";
import ShopListHeader from "../Components/ShopListHeader";
import ShopProducts from "../Components/ShopProducts";
import FeaturesSection from "../Components/FeaturesSec";


const page = () => {
  return (
    <div>
      <ShopHero title="Shop" location="Shop" />
      <ShopListHeader />
      {/* <ShopProduct/> */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Our Sofa Collection</h1>
        <ShopProducts />
      </div>
        <FeaturesSection/>
    </div>
  );
};

export default page;
