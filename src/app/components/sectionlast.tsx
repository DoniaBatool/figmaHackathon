import Image from "next/image"

const Sectionlast = () => {
  return (
    <section className="flex max-w-[1440px] h-[568px]">
        
         <div className="flex flex-col gap-[25px]  mt-[72px] mx-20 w-[536px] h-[225px] text-nowrap">
            <p className="font-clash leading-[140%] text-[24px] text-mytext ">From a studio in London to a global brand with<br/>
            over 400 outlets</p>
            <p className="font-satoshi text-[16px] text-[#505977]">When we started Avion, the idea was simple. Make high quality furniture<br/>
             affordable and available for the mass market.</p>
           <p className="font-satoshi text-[16px] text-[#505977]">Handmade, and lovingly crafted furniture and homeware is what we live,<br/>
            breathe and design so our Chelsea boutique become the hotbed for the<br/>
            London interior design community. </p>
            <button className="mt-[100px] bg-[#F9F9F9]/100  w-[150px] h-[56px] text-center 
             px-[32px] py-[16px] text-[16px] font-satoshi leading-[150%] text-mytext"> Get in touch</button>
         </div>
    
      <div>
        <Image src="/lastsec/last.png" alt="image" width={720} height={603} className="ml-[100px]"/>
      </div>
    </section>
  )
}

export default Sectionlast