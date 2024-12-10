"use client"
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full max-w-[675px] mx-auto my-5">
      {/* Desktop Navbar */}
      <ul className="hidden md:flex justify-between text-[#726E8D]/100 text-[16px] font-satoshi">
        <Link href="/products"><li>Plant pots</li></Link>
        <Link href="/products"><li>Ceramics</li></Link>
        <Link href="/products"><li>Tables</li></Link>
        <Link href="/products/2"><li>Chairs</li></Link>
        <Link href="/products"><li>Crockery</li></Link>
        <Link href="/products"><li>Tableware</li></Link>
        <Link href="/products"><li>Cutlery</li></Link>
      </ul>

      {/* Mobile Hamburger Icon */}
      <div className="flex md:hidden justify-end">
        <button
          className="text-[24px] text-[#726E8D] cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          &#9776; {/* Hamburger icon */}
        </button>
      </div>

      {/* Sidebar */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-3/4 h-full bg-white z-50 shadow-lg">
          <div className="flex justify-between items-center p-4">
            <h2 className="text-[20px] font-satoshi">Menu</h2>
            <button
              className="text-[24px] text-[#726E8D] cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              &times; {/* Close icon */}
            </button>
          </div>
          <ul className="mt-4 space-y-4 text-[#726E8D]/100 text-[16px] font-satoshi pl-4">
            <Link href="/products"><li onClick={() => setIsOpen(false)}>Plant pots</li></Link>
            <Link href="/products"><li onClick={() => setIsOpen(false)}>Ceramics</li></Link>
            <Link href="/products"><li onClick={() => setIsOpen(false)}>Tables</li></Link>
            <Link href="/products/2"><li onClick={() => setIsOpen(false)}>Chairs</li></Link>
            <Link href="/products"><li onClick={() => setIsOpen(false)}>Crockery</li></Link>
            <Link href="/products"><li onClick={() => setIsOpen(false)}>Tableware</li></Link>
            <Link href="/products"><li onClick={() => setIsOpen(false)}>Cutlery</li></Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
