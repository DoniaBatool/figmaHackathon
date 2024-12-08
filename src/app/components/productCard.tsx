import Image from "next/image"

interface productcard{
    image:string;
    proname:string,
    proprice:string,
    

}
const ProductCard = ({image,proname,proprice}:productcard) => {
  return (
    <div className="w-[305px] h-[562px]">
        <Image src={image} alt="product image" width={305} height={375}/>
         <h4 className="pt-[24px] font-clash text-mytext text-[20px] leading-[140%]">{proname}</h4>
         <p className="pt-[8px] text-[18px] font-satoshi text-mytext leading-[150%]">{proprice}</p>
    </div>
  )
}

export default ProductCard


export const ProductCard2 = ({image,proname,proprice}:productcard) => {
    return (
      <div className="w-[630px] h-[562px]">
          <Image src={image} alt="product image" width={630} height={375}/>
           <h4 className="pt-[24px] font-clash text-mytext text-[20px] leading-[140%]">{proname}</h4>
           <p className="pt-[8px] text-[18px] font-satoshi text-mytext leading-[150%]">{proprice}</p>
      </div>
    )
  }
  
  