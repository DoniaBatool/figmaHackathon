import Divider from '../components/divider'
import Topbar from '../components/topbar'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Image from 'next/image'

const Cartpage = () => {
  return (
    
        <div className="max-w-[1440px] mx-auto ">
        <div className="max-w-[1386px] mx-auto">
        <Topbar/>
        <Divider/>
    </div>
         <Navbar/>
      <div className='max-w-1064px h-[730px] mx-auto bg-[#F9F9F9]/100 '>
      <div className='pt-[64px] ml-[160px]'>
       <h1 className='font-clash text-[36px] leading-[140%] text-mytext'>Your shopping cart</h1>
       </div>
       <div className='flex mt-[50px] text-[14px] leading-[140%] font-clash text-mytext'>
       <div className='ml-[150px]'><h6>Product</h6></div>
       <div className='ml-[550px]'><h6>Quantity</h6></div>
       <div className='ml-[350px]'><h6>Total</h6></div>
       </div>
       <br/>
       
       <div className="w-[1064px] border border-[#EBE8F4] mx-auto "></div>
       <br/>

       <div className='flex ml-[150px]'>
       <div className='flex gap-[21px]'>
        <div>
        <Image src="/cart/Product1.png" alt="product image" width={109} height={134}/>
        </div>
        <div>
            <h4 className='text-mytext font-clash text-[20px] leading-[140%]'>Graystone vase</h4>
            <p className='text-[14px] leading-[150%] font-satoshi text-mytext'>A timeless ceramic vase with<br/>
            a tri color grey glaze.</p>
            <p  className='text-[14px] leading-[150%] font-satoshi text-mytext'>£85</p>
        </div>
       </div>
       <div className='ml-[300px] font-satoshi text-[16px] text-slate-500 flex gap-6'><div>-</div> <p className='text-[16px] font-satoshi text-mytext'>1</p> <div>+</div> </div>
       <div className='ml-[320px] text-[18px] font-satoshi text-mytext'>&pound;85</div>
       </div>
   <br/>
       <div className='flex ml-[150px]'>
       <div className='flex gap-[21px]'>
        <div>
        <Image src="/cart/Product2.png" alt="product image" width={109} height={134}/>
        </div>
        <div>
            <h4 className='text-mytext font-clash text-[20px] leading-[140%]'>Basic white vase</h4>
            <p className='text-[14px] leading-[150%] font-satoshi text-mytext'>Beautiful and simple this is<br/>
            one for the classics</p>
            <p className='text-[14px] leading-[150%] font-satoshi text-mytext'>£85</p>
        </div>
       </div>
       <div className='ml-[313px] font-satoshi text-[16px] text-slate-500 flex gap-6'><div>-</div> <p className='text-[16px] font-satoshi text-mytext'>1</p> <div>+</div> </div>
       <div className='ml-[320px] text-[18px] font-satoshi text-mytext'>&pound;125</div>
       </div>
       <br/>
      <div className="w-[1064px] border border-[#EBE8F4] mx-auto "></div>
      <br/>
      <div className='flex flex-col place-items-end mr-[140px] gap-[10px]'>
        <div className='flex gap-[16px] items-center'>
           <h4 className='text-[#4E4D93] text-[20px] font-clash leading-[140%]'>Subtotal</h4> 
           <h3 className='text-[24px] font-clash text-mytext'>£210</h3>
        </div>
        <div className='text-[#4E4D93] font-satoshi text-[14px] leading-[150%]'>
        Taxes and shipping are calculated at checkout
        </div>
        <div>
            <button className='text-white text-[16px] font-satoshi leading-[150%] cursor-pointer 
            px-[32px] bg-mytext py-[16px] hover:border hover:border-[#4E4D93]'>
                Go to checkout</button>
        </div>
      </div>
      </div>
    
         <Footer/>
    </div>
  )
}

export default Cartpage