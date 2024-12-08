import Banner from "./components/banner";
import Ceramics from "./components/ceramics";
import Club from "./components/club";
import Divider from "./components/divider";
import Feature from "./components/feature";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import PopularProducts from "./components/popularProducts";
import Sectionlast from "./components/sectionlast";
import Topbar from "./components/topbar";


export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto ">
      <div className="max-w-[1386px] mx-auto">
      <Topbar/>
      <Divider/>
      </div>
      <Navbar/>
      <div className="w-[1200px] mx-auto">
      <Banner/>
     
     <Feature/>
     <Ceramics/>
     <PopularProducts/>
     </div>
     
    
     <Club/>
     <Sectionlast/>
     
     <Footer/>
     
    </div>
  );
}
