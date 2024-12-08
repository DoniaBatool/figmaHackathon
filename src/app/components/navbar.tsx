import Link from "next/link"

const Navbar = () => {
  return (
    <div className='w-full max-w-[675px] mx-auto my-5'>
        <ul className='flex justify-between text-[#726E8D]/100 text-[16px] font-satoshi'>
            <Link href="/products"><li>Plant pots</li></Link>
            <Link href="/products"><li>Ceramics</li></Link>
            <Link href="/products"><li>Tables</li></Link>
            <Link href="/products/2"><li>Chairs</li></Link>
            <Link href="/products"><li>Crockery</li></Link>
            <Link href="/products"><li>Tableware</li></Link>
            <Link href="/products"><li>Cutlery</li></Link>
        </ul>
    </div>
  )
}

export default Navbar