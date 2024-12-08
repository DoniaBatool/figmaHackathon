
import ProductCard, { ProductCard2 } from './productCard'

const PopularProducts = () => {
  return (
    <section>
        <div className='mt-[50px] mb-[20px]'>
        <p className='text-[32px] text-mytext font-clash '>Our popular products</p>
        </div>
        <div className=' flex justify-between gap-4'>

        <ProductCard2
        image="/popular/sofa.png"
        proname="The Poplar suede sofa"
        proprice="&pound;980"
        
        />

       <ProductCard
        image="/popular/chair.png"
        proname="The Dandy chair"
        proprice="&pound;250"
        />

       <ProductCard
        image="/popular/chairblk.png"
        proname="The Dandy chair"
        proprice="&pound;250"
        />
         </div>

        <div className='flex justify-center mb-[20px]'>
   <button className=' cursor-pointer bg-[#F9F9F9]/100 px-[32px] py-[16px]
    text-mytext font-satoshi text-[16px] leading-[150%] w-[170px] h-[56px]'>
     View collection
   </button>
   </div>

    </section>
  )
}

export default PopularProducts