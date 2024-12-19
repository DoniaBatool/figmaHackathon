
"use client"
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Link from "next/link";
import Divider from "./divider";

const Topbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to control menu visibility

  return (
    <div>
      {/* Topbar */}
      <div className="flex justify-between items-center px-5 py-4 max-w-[1386px] mx-auto">
        {/* Left Section (Search Icon) */}
        <div className="flex items-center">
          <IoIosSearch size={20} color="#2A254B" className="cursor-pointer" />
        </div>

        {/* Center Section (Logo) */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/">
            <p className="text-[24px] text-[#22202E] font-clash cursor-pointer">
              Avion
            </p>
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-5">
          {/* Mobile (Search + Hamburger or Close) */}
          <div className="flex md:hidden gap-5 items-center">
            <IoIosSearch size={20} color="#2A254B" className="cursor-pointer" />
            {menuOpen ? (
              <HiOutlineX
                size={24}
                color="#2A254B"
                className="cursor-pointer"
                onClick={() => setMenuOpen(false)} // Close the menu
              />
            ) : (
              <HiOutlineMenu
                size={24}
                color="#2A254B"
                className="cursor-pointer"
                onClick={() => setMenuOpen(true)} // Open the menu
              />
            )}
          </div>

          {/* Desktop (Cart + Avatar) */}
          <div className="hidden md:flex gap-5 items-center">
            <Link href="/cart">
              <IoCartOutline size={20} color="#2A254B" className="cursor-pointer" />
            </Link>
            <RxAvatar size={20} color="#2A254B" className="cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Divider */}
      <Divider />

      {/* Navbar (Hidden on Mobile, Visible on Desktop) */}
      <nav className="hidden md:block relative w-full max-w-[675px] mx-auto my-5">
        <ul className="flex justify-between text-[#726E8D]/100 text-[16px] font-satoshi">
          <Link href="/products"><li>Plant pots</li></Link>
          <Link href="/products"><li>Ceramics</li></Link>
          <Link href="/products"><li>Tables</li></Link>
          <Link href="/products/2"><li>Chairs</li></Link>
          <Link href="/products"><li>Crockery</li></Link>
          <Link href="/products"><li>Tableware</li></Link>
          <Link href="/products"><li>Cutlery</li></Link>
        </ul>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-gray-100 px-5 py-4">
          <ul className="flex flex-col gap-4 text-[#726E8D]/100 text-[16px] font-satoshi">
            <Link href="/products"><li onClick={() => setMenuOpen(false)}>Plant pots</li></Link>
            <Link href="/products"><li onClick={() => setMenuOpen(false)}>Ceramics</li></Link>
            <Link href="/products"><li onClick={() => setMenuOpen(false)}>Tables</li></Link>
            <Link href="/products/2"><li onClick={() => setMenuOpen(false)}>Chairs</li></Link>
            <Link href="/products"><li onClick={() => setMenuOpen(false)}>Crockery</li></Link>
            <Link href="/products"><li onClick={() => setMenuOpen(false)}>Tableware</li></Link>
            <Link href="/products"><li onClick={() => setMenuOpen(false)}>Cutlery</li></Link>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Topbar;
