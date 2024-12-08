
import Image from 'next/image';

const Banner = () => {
  return (
    <div className="w-[1200px] mx-auto flex mt-[80px] bg-[#2A254B] h-[545px] justify-between items-center">
      {/* Left side */}
      <div className="p-8 w-[760px]">
        <div className="flex flex-col gap-[41px] w-[513px] h-[187px]">
          <h2 className="text-[32px] text-white leading-[140%] font-clash">
            The furniture brand for the <br />
            future, with timeless designs
          </h2>
          <button
            className="w-[170px] h-[56px] px-[32px] py-[16px] bg-[#F9F9F9]/15 text-white font-satoshi 
         text-[16px] leading-[150%]"
          >
            View collection
          </button>
        </div>

        <div className="mt-[150px] w-[602px] h-[81px] text-nowrap mr-11">
          <p className="text-white font-satoshi text-[18px] leading-[150%]">
            A new era in eco friendly furniture with Avelon, the French luxury retail brand
            <br />
            with nice fonts, tasteful colors and a beautiful way to display things digitally
            <br />
            using modern web technologies.
          </p>
        </div>
      </div>
      <div className='w-[520px]'>
        <Image src="/hero/chairhero.png" alt="chair" width={520} height={584} />
      </div>
    </div>
  );
};

export default Banner;
