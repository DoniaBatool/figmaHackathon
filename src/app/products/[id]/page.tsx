import Club from "@/app/components/club";
import Feature from "@/app/components/feature";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import ProductCard from "@/app/components/productCard";
import Image from "next/image"
import Link from "next/link";
import { TbTruckDelivery } from "react-icons/tb";
import { RxAvatar } from "react-icons/rx";
import { IoCartOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";

const SingleProduct = () => {
  return (
    <main>
      
      <div className="max-w-[1440px] h-[41px] flex gap-[8px] items-center justify-center bg-mytext text-white font-satoshi text-[14px]">
      <div><TbTruckDelivery size={16} color="white"/></div>
      <div>Free delivery on all orders over £50 with code easter checkout</div>
      </div>
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
      <Link href="/"><p className='text-[24px] text-[#22202E] font-clash '>Avion</p></Link>
      <Navbar/>
      <div className='flex gap-5' >
      <IoIosSearch size={20} color="#2A254B" className="cursor-pointer"/>
        <Link href="/cart"><IoCartOutline size={20} color="#2A254B" className="cursor-pointer"/></Link>
        <RxAvatar size={20} color="#2A254B" className="cursor-pointer" />
        </div>
      </div>
    <div className="flex">
      <div>
        <Image src="/singleProduct/Image1.png" alt="main image" width={721} height={759}/>
        </div>
        <div className="ml-[90px] mt-[90px]">
          <div className="flex flex-col">
         <p>The Dandy Chair</p>
         <br/>
         <p>£250</p>
         <br/>
         <p>
         Description
         </p>
         <br/>
         <p>
         A timeless design, with premium materials features as one of our most<br/> 
         popular and iconic pieces. The dandy chair is perfect for any stylish<br/> 
         living space with beech legs and lambskin leather upholstery.
         </p>
         <br/>
         <ul>
        <li>Premium material</li>
         <li> Handmade upholstery</li>
          <li>Quality timeless classic</li>
         </ul>
         </div>
        </div>
        </div>
        <div className="max-w-[1200px] mx-auto">
        <div className="max-w-[1200px] mx-auto">
    <div className="mt-[50px] mb-[20px]">
          <p className="text-[32px] text-mytext font-clash">You might also like</p>
          </div>
      </div>
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
          <div className="flex justify-center mb-[20px]">
          <button className="cursor-pointer bg-[#F9F9F9]/100 px-[32px] py-[16px] text-mytext font-satoshi text-[16px] leading-[150%] w-[170px] h-[56px]">
            View collection
          </button>
        </div>
        <Feature/>
        </div>
        <Club/>
        <Footer/>
    </main>
  )
}

export default SingleProduct