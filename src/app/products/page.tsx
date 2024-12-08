
import Topbar from '../components/topbar';
import Divider from '../components/divider';
import Navbar from '../components/navbar';
import Image from 'next/image';
import { RiArrowDropDownFill } from "react-icons/ri";
import ProductCard from '../components/productCard';
import Footer from '../components/footer';
import Link from "next/link"

const Productspage = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      {/* Topbar and Divider */}
      <div className="max-w-[1386px] mx-auto">
        <Topbar />
        <Divider />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Header Image */}
      <Image src="/products/Frame.png" alt="frame" width={1440} height={209} />

      {/* Filters and Sorting */}
      <div className="flex">
        {/* Filter Buttons */}
        <div className="flex ml-[24px] gap-[12px] font-satoshi text-mytext text-[16px] leading-[150%]">
          <Link href="/products/1"><button className="flex items-center px-[24px] py-[12px] gap-1">
            Category <RiArrowDropDownFill />
          </button></Link>
          <Link href="/products/1"><button className="flex items-center px-[24px] py-[12px] gap-1">
            Product type <RiArrowDropDownFill />
          </button></Link>
          <button className="flex items-center px-[24px] py-[12px] gap-1">
            Price <RiArrowDropDownFill />
          </button>
          <button className="flex items-center px-[24px] py-[12px] gap-1">
            Brand <RiArrowDropDownFill />
          </button>
        </div>

        {/* Sorting Options */}
        <div className="flex gap-[16px] items-center ml-[500px] mr-[24px] font-satoshi text-mytext text-[16px] leading-[150%]">
          <div className="text-[14px]">Sorting by :</div>
          <button className="flex items-center px-[24px] py-[12px] gap-1">
            Date added <RiArrowDropDownFill />
          </button>
        </div>
      </div>
      <br/>
      
      <div className=" max-w-[1200px] flex mx-auto gap-4">
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
          <div className="max-w-[1200px] flex mx-auto gap-4">
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

        <div className="max-w-[1200px] flex mx-auto gap-4">
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
        <div className="flex justify-center mb-[20px]">
          <button className="cursor-pointer bg-[#F9F9F9]/100 px-[32px] py-[16px] text-mytext font-satoshi text-[16px] leading-[150%] w-[170px] h-[56px]">
            View collection
          </button>
        </div>
        <Footer/>
      </div>
    
  );
};

export default Productspage;
