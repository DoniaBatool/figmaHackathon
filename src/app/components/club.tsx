

const Club = () => {
    return (
      <section className="max-w-[1440px] h-[481px] bg-[#F9F9F9]/100 flex justify-center items-center">
        <div className="w-[1200px] h-[364px] bg-white my-[52px] ">
          {/* Heading and Text */}
          <div className="flex flex-col gap-[16px] mt-[68px]  items-center">
            <div>
              <h1 className="font-clash text-[36px] leading-[140%] text-mytext">
                Join the club and get the benefits
              </h1>
            </div>
            <div className="flex flex-col items-center font-satoshi text-[16px] leading-[150%] text-mytext">
              <p>Sign up for our newsletter and receive exclusive offers on new</p>
              <p>ranges, sales, pop up stores and more</p>
            </div>
          </div>
  
          {/* Input and Button */}
          <div className="ml-[350px] mt-[70px] flex text-black">
            <input
              type="text"
              placeholder="your@email.com"
              className="w-[354px] h-[56px] bg-[#F9F9F9]/100 font-satoshi text-[16px] text-mytext pl-[32px] border border-[#4E4D93]"
            />
            <button
              type="submit"
              className="w-[118px] h-[56px] text-white font-satoshi text-[16px] leading-[150%] bg-mytext border border-[#4E4D93]"
            >
              Sign up
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default Club;
  