
import Image from 'next/image';
import { RiArrowDropDownFill } from "react-icons/ri";
import ProductCard from '../components/productCard';
import Link from "next/link";
import Topbar from '../components/topbar';

const Productspage = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Topbar/>
      {/* Header Image */}
      <Image
        src="/products/Frame.png"
        alt="frame"
        width={1440}
        height={209}
        className="w-full"
      />

      {/* Filters and Sorting */}
      <div className="flex flex-wrap justify-between items-center px-4 sm:px-6 lg:px-8 gap-y-4 mt-8">
        {/* Filter and Sorting Button (Visible on Mobile) */}
        <div className="flex sm:hidden justify-between gap-4 w-full ">
          <button className="bg-gray-100  w-[163px] rounded-sm px-[16px] py-[12px] text-[14px] sm:text-[16px] font-satoshi text-mytext flex justify-center place-items-center ">
            Filters <RiArrowDropDownFill />
          </button>
          <button className="bg-gray-100 w-[163px] rounded-sm px-[16px] py-[12px] text-[14px] sm:text-[16px] font-satoshi text-mytext flex justify-center items-center">
            Sorting <RiArrowDropDownFill />
          </button>
        </div>

        {/* Filter Buttons (Hidden on Mobile) */}
        <div className=" flex-wrap gap-4 sm:gap-[12px] font-satoshi text-mytext text-[14px] sm:text-[16px] leading-[150%] hidden sm:flex">
          <Link href="/products/1">
            <button className="flex items-center px-[16px] sm:px-[24px] py-[10px] sm:py-[12px] gap-1 text-center">
              Category <RiArrowDropDownFill />
            </button>
          </Link>
          <Link href="/products/1">
            <button className="flex items-center px-[16px] sm:px-[24px] py-[10px] sm:py-[12px] gap-1 text-center">
              Product type <RiArrowDropDownFill />
            </button>
          </Link>
          <button className="flex items-center px-[16px] sm:px-[24px] py-[10px] sm:py-[12px] gap-1 text-center">
            Price <RiArrowDropDownFill />
          </button>
          <button className="flex items-center px-[16px] sm:px-[24px] py-[10px] sm:py-[12px] gap-1 text-center">
            Brand <RiArrowDropDownFill />
          </button>
        </div>

        {/* Sorting Options (Hidden on Mobile) */}
        <div className=" flex-wrap justify-start gap-4 sm:gap-[16px] items-center font-satoshi text-mytext text-[14px] sm:text-[16px] leading-[150%] hidden sm:flex">
          <div className="text-[14px]">Sorting by :</div>
          <button className="flex items-center px-[16px] sm:px-[24px] py-[10px] sm:py-[12px] gap-1">
            Date added <RiArrowDropDownFill />
          </button>
        </div>
      </div>
      <br />

      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        {/* First Product Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 place-items-center">
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

        {/* Second Product Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4 place-items-center">
          <ProductCard
            image="/products/Photo1.png"
            proname="The Dandy chair"
            proprice="&pound;250"
          />
          <ProductCard
            image="/products/pfoto2.png"
            proname="Rustic Vase Set"
            proprice="&pound;155"
          />
          <ProductCard
            image="/products/Photo3.png"
            proname="The Silky Vase"
            proprice="&pound;125"
          />
          <ProductCard
            image="/products/photo4.png"
            proname="The Lucy Lamp"
            proprice="&pound;399"
          />
        </div>

        {/* Third Product Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4 place-items-center">
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

        {/* Button */}
        <div className="flex justify-center pb-4 md:pb-11 mt-4 sm:mt-2 md:mt-0 lg:mt-5">
          <button className="cursor-pointer bg-[#F9F9F9]/100 px-[32px] py-[16px] text-mytext font-satoshi text-[16px] leading-[150%] w-[342px] sm:w-[170px] h-[56px]">
            View collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default Productspage;
