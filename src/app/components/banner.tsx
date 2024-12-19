
import Image from "next/image";

const Banner = () => {
  return (
    <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row mt-[80px] bg-[#2A254B] h-auto sm:h-[545px] items-center sm:items-start">
      {/* Left side */}
      <div className="w-full sm:w-[60%] px-5 sm:px-[40px] py-[40px] sm:py-[60px] flex flex-col gap-[40px]">
        <h2 className="text-[28px] sm:text-[32px] text-white leading-[140%] font-clash  sm:text-left">
          The furniture brand for the <br />
          future, with timeless designs
        </h2>
        <div className="flex justify-center sm:justify-start">
          <button
            className="w-full sm:w-[170px] h-[56px] bg-[#F9F9F9]/15 text-white font-satoshi text-[16px] leading-[150%] px-[32px] py-[16px]"
          >
            View collection
          </button>
        </div>
        <p className="text-[14px] sm:text-[18px] text-white leading-[150%] font-satoshi  sm:text-left">
          A new era in eco-friendly furniture with Avelon, the French luxury retail brand.
          Nice fonts, tasteful colors, and a beautiful way to display things digitally
          using modern web technologies.
        </p>
      </div>

      {/* Right side */}
      <div className="hidden ml-[10px] sm:flex w-[40%] h-full">
        <Image
          src="/hero/chairhero.png"
          alt="chair"
          width={520}
          height={500}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default Banner;
