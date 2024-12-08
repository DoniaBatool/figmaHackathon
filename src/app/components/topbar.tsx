
import { IoIosSearch } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { IoCartOutline } from "react-icons/io5";
import Link from "next/link";
const Topbar = () => {
  return (
    <div className='flex justify-between mx-7 my-5'>
        <IoIosSearch size={20} color="#2A254B" className="cursor-pointer"/>
        <Link href="/"><p className='text-[24px] text-[#22202E] font-clash '>Avion</p></Link>
        <div className='flex gap-5' >
        <Link href="/cart"><IoCartOutline size={20} color="#2A254B" className="cursor-pointer"/></Link>
        <RxAvatar size={20} color="#2A254B" className="cursor-pointer" />
        </div>
        
    </div>
  )
}
export default Topbar
