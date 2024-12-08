import React from 'react';
import ProductCard from './productCard';

const Ceramics = () => {
  return (
    <section>
      
        {/* Section title */}
        <div className="mt-[50px] mb-[20px]">
          <p className="text-[32px] text-mytext font-clash">New ceramics</p>
        </div>

        {/* Product grid */}
        <div className="flex justify-between gap-4">
          <ProductCard
            image="/ceramics/chair.png"
            proname="The Dandy chair"
            proprice="&pound;250"
          />

          <ProductCard
            image="/ceramics/pots3.png"
            proname="Rustic Vase Set"
            proprice="&pound;155"
          />

          <ProductCard
            image="/ceramics/pot1.png"
            proname="The Silky Vase"
            proprice="&pound;125"
          />

          <ProductCard
            image="/ceramics/lamp.png"
            proname="The Lucy Lamp"
            proprice="&pound;399"
          />
        </div>

        {/* View Collection Button */}
        <div className="flex justify-center mb-[20px]">
          <button className="cursor-pointer bg-[#F9F9F9]/100 px-[32px] py-[16px] text-mytext font-satoshi text-[16px] leading-[150%] w-[170px] h-[56px]">
            View collection
          </button>
        </div>
      
    </section>
  );
};

export default Ceramics;
