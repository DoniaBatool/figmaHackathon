import ProductCard, { ProductCard2 } from './productCard';

const PopularProducts = () => {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mt-[50px] mb-[20px]">
        <p className="text-[32px] text-mytext font-clash">Our popular products</p>
      </div>

      {/* CSS Grid container for the product items */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* Product 1 (sofa image takes up full width on mobile and smaller screens, 2 columns on larger screens) */}
        <div className="col-span-2">
          <ProductCard2
            image="/popular/sofa.png"
            proname="The Poplar suede sofa"
            proprice="&pound;980"
          />
        </div>

        {/* Product 2 */}
        <ProductCard
          image="/popular/chair.png"
          proname="The Dandy chair"
          proprice="&pound;250"
        />

        {/* Product 3 */}
        <ProductCard
          image="/popular/chairblk.png"
          proname="The Dandy chair"
          proprice="&pound;250"
        />
      </div>

      {/* View Collection Button */}
      <div className="flex justify-center mb-[20px]">
        <button className="cursor-pointer bg-[#F9F9F9]/100 px-[32px] py-[16px] text-mytext font-satoshi text-[16px] leading-[150%] w-full sm:w-[170px] h-[56px]">
          View collection
        </button>
      </div>
    </section>
  );
};

export default PopularProducts;
