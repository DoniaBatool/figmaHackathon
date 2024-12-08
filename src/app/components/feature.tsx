import Card from "./card"


const Feature = () => {
  return (
    <section className="flex flex-col justify-center mt-[40px] mb-[130px]">
        <div className="my-[60px] mx-auto">
       <h3 className="w-[368px] h-[34px]  font-clash text-[24px] leading-[140%] text-[#2A254B]">
        What makes our brand different</h3>
       </div>
       <div className="flex justify-between gap-[60px]">
        <Card 
         image="/card/Delivery.png"
         heading="Next day as standard"
         line1="Order before 3pm and get your order"
         line2="the next day as standard"
        />
        <Card 
         image="/card/Checkmark.png"
         heading="Made by true artisans"
         line1="Handmade crafted goods made with"
         line2="real passion and craftmanship"
        />
        <Card 
         image="/card/Purchase.png"
         heading="Unbeatable prices"
         line1="For our materials and quality you "
         line2="won&apos;t find better prices anywhere"
        />
        <Card 
         image="/card/Sprout.png"
         heading="Recycled packaging"
         line1="We use 100% recycled packaging to"
         line2="ensure our footprint is manageable"
        />

       
       </div>
    </section>
  )
}

export default Feature