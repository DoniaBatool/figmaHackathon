import Image from "next/image";

interface ProductCardProps {
  image: string;
  proname: string;
  proprice: string;
}

const ProductCard = ({ image, proname, proprice }: ProductCardProps) => {
  return (
    <div className="w-full max-w-[305px] h-[auto] sm:h-[480px] ">
      <Image
        src={image}
        alt="product image"
        width={305}
        height={375}
        className="w-full h-auto object-cover"
      />
      <h4 className="pt-[24px] font-clash text-mytext text-[20px] leading-[140%]">
        {proname}
      </h4>
      <p className="pt-[8px] text-[18px] font-satoshi text-mytext leading-[150%]">
        {proprice}
      </p>
    </div>
  );
};

export default ProductCard;

export const ProductCard2 = ({ image, proname, proprice }: ProductCardProps) => {
  return (
    <div className="w-full max-w-[630px] h-auto sm:h-[480px] ">
      <Image
        src={image}
        alt="product image"
        width={630}
        height={375}
        
      />
      <h4 className="pt-[24px] font-clash text-mytext text-[20px] leading-[140%]">
        {proname}
      </h4>
      <p className="pt-[8px] text-[18px] font-satoshi text-mytext leading-[150%]">
        {proprice}
      </p>
    </div>
  );
};
  