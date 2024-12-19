import Club from "@/app/components/club";
import Feature from "@/app/components/feature";
import Navbar from "@/app/components/navbar";
import ProductCard from "@/app/components/productCard";
import Image from "next/image"

const SingleProduct = () => {
  return (
    <main>
      
      <Navbar/>
      <div className="hidden sm:flex sm:flex-col md:flex-row max-w-[1440px] w-full mx-auto ">
  {/* Left div (Main Image) */}
  <div className="w-full">
  <Image
    src="/singleProduct/Image1.png"
    alt="main image"
    width={721}
    height={759}
    className="mx-auto w-[721px]  md:h-[600px] lg:h-[700px]"
  />
</div>

  
  {/* Right div (Product details) */}
  <div className="w-full md:ml-[30px] lg:ml-[60px] lg:mt-[20px] flex flex-col gap-[20px] lg:gap-[50px]  px-6">
    
    {/* Product Name and Price */}
    <div className="gap-[13px]">
      <p className="text-mytext font-clash text-[36px]">The Dandy Chair</p>
      <p className="text-[24px] font-satoshi text-[#12131A]">£250</p>
    </div>

    {/* Product Description */}
    <div className="flex flex-col gap-[10px]">
      <p className="font-clash text-[16px] text-mytext ">Description</p>
      <p className="text-[16px] font-satoshi text-[#505977]">
        A timeless design, with premium materials features as one of our most<br/> 
        popular and iconic pieces. The dandy chair is perfect for any stylish<br/> 
        living space with beech legs and lambskin leather upholstery.
      </p>
      <ul className="text-[16px] font-satoshi text-[#505977]">
        <li>Premium material</li>
        <li> Handmade upholstery</li>
        <li>Quality timeless classic</li>
      </ul>
    </div>

    {/* Product Dimensions */}
    <div className="flex flex-col gap-[30px]">
      <div><p className="font-clash text-[16px] text-mytext">Dimensions</p></div>
      <div className="flex flex-col gap-[12px]">
        <div>
          <ul className="flex gap-[60px] font-clash text-mytext text-[14px]">
            <li>Height</li>
            <li>Width</li>
            <li>Depth</li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-[55px] font-satoshi text-[#505977] text-[16px]">
            <li>110cm</li>
            <li>75cm</li>
            <li>50cm</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Amount and Add to Cart */}
    <div className="flex gap-[5px] sm:gap-[100px] md:gap-[40px] items-center ">
      <div className="flex gap-[5px] sm:gap-[50px] md:gap-[20px] items-center">
        <p className="font-clash text-[16px] text-mytext">Amount</p>
        <div className="flex gap-[30px] w-[122px] h-[46px] cursor-pointer px-[16px] py-[12px] bg-[#F9F9F9] hover:border hover:border-[#4E4D93]">
          <p className="font-satoshi text-[18px] text-[#CAC6DA]">+</p>
          <p className="font-satoshi text-[16px] text-mytext">1</p>
          <p className="font-satoshi text-[18px] text-[#CAC6DA]">-</p>
        </div>
      </div>
      <button className="w-[143px] h-[46px] px-[16px] py-[12px] bg-mytext  text-white font-satoshi leading-[150%] text-[16px] border border-[#4E4D93] text-nowrap">Add to cart</button>
    </div>
  </div>
</div>



       
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
    <div className="mt-[50px] mb-[20px]">
          <p className="text-[32px] text-mytext font-clash  text-left lg:text-left sm:text-center">You might also like</p>
          </div>
      </div>
      
      <div className="max-w-[1280px] text-nowrap mx-auto px-4 gap-x-4 sm:gap-x-10 md:gap-x-4 sm:justify-center sm:place-items-center grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
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

<div className="flex justify-center mb-5">
  <button className="cursor-pointer bg-[#F9F9F9] text-nowrap  px-8 py-4 text-mytext font-satoshi text-lg leading-[150%] w-[342px] sm:w-[170px] h-[56px]">
    View collection
  </button>
</div>

         <div className="max-w-[1280px] mx-auto">
        <Feature/>
        </div>
        <Club/>
        
    </main>
  )
}

export default SingleProduct