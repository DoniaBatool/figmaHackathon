import Link from "next/link";
import { Divider2 } from "./divider";
import { TiSocialLinkedin } from "react-icons/ti";
import { SlSocialSkype } from "react-icons/sl";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialPinterest } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";

const Footer = () => {
  return (
    <section className="max-w-[1440px] bg-[#2A254B] px-4 sm:px-[85px] mx-auto">
      <div className="flex flex-col h-full justify-between">
        {/* Top Section */}
        <div className="flex flex-wrap pt-8 xl:flex-nowrap">
          {/* Main Grid Container */}
          <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 text-[14px] text-white font-satoshi">
            {/* Column 1 */}
            <div>
              <ul className="flex flex-col gap-2">
                <li className="font-clash text-[16px]">
                  <Link href={"/"}>Menu</Link>
                </li>
                <li>
                  <Link href={"/products"}>New arrivals</Link>
                </li>
                <li>
                  <Link href={"/products/1"}>Best sellers</Link>
                </li>
                <li>
                  <Link href={"/cart"}>Recently viewed</Link>
                </li>
                <li>
                  <Link href={"/products/1"}>Popular this week</Link>
                </li>
                <li>
                  <Link href={"/products"}>All products</Link>
                </li>
              </ul>
            </div>
            {/* Column 2 */}
            <div>
              <ul className="flex flex-col gap-2">
                <li className="font-clash text-[16px]">
                  <Link href={"/products"}>Categories</Link>
                </li>
                <li>
                  <Link href={"/products/1"}>Categories</Link>
                </li>
                <li>
                  <Link href={"/products"}>New arrivals</Link>
                </li>
                <li>
                  <Link href={"/products/1"}>Best sellers</Link>
                </li>
                <li>
                  <Link href={"/cart"}>Recently viewed</Link>
                </li>
                <li>
                  <Link href={"/products/1"}>Popular this week</Link>
                </li>
                <li>
                  <Link href={"/products"}>All products</Link>
                </li>
              </ul>
            </div>
            {/* Column 3 */}
            <div>
              <ul className="flex flex-col gap-2">
                <li className="font-clash text-[16px]">
                  <Link href={"/"}>Our company</Link>
                </li>
                <li>
                  <Link href={"/products"}>New arrivals</Link>
                </li>
                <li>
                  <Link href={"/products/1"}>Best sellers</Link>
                </li>
                <li>
                  <Link href={"/cart"}>Recently viewed</Link>
                </li>
                <li>
                  <Link href={"/products/1"}>Popular this week</Link>
                </li>
                <li>
                  <Link href={"/products"}>All products</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Column 4 */}
          <div className="text-[16px] text-white font-clash mt-8 xl:mt-0">
            <ul className="flex flex-col gap-2">
              <li className="font-clash text-[16px]">
                <Link href={"/"}>Join our mailing list</Link>
              </li>
              <li>
                <div className="flex w-full  h-[56px] border border-[#4E4D93]">
                  <input
                    type="text"
                    placeholder="your@email.com"
                    className="w-full md:w-[509px] h-[56px] bg-[#FFFFFF]/15 font-satoshi text-[16px] text-white pl-4"
                  />
                  <button
                    type="submit"
                    className="w-[100px] h-[56px] text-mytext font-satoshi text-[14px] bg-white"
                  >
                    Sign up
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <Divider2 />

        {/* Footer Bottom */}
        <div className="flex flex-wrap justify-center gap-6 mt-4">
          {/* Social Icons */}
          <div className="hidden sm:flex gap-4">
            <div className="bg-white rounded-sm">
              <TiSocialLinkedin size={20} color="#2A254B" />
            </div>
            <div className="bg-white rounded-sm">
              <TiSocialFacebook size={20} color="#2A254B" />
            </div>
            <div className="bg-[#2A254B]">
              <SlSocialInstagram size={20} color="#FFFFFF" />
            </div>
            <div className="bg-[#2A254B]">
              <SlSocialSkype size={20} color="#FFFFFF" />
            </div>
            <div className="bg-[#2A254B]">
              <SlSocialTwitter size={20} color="#FFFFFF" />
            </div>
            <div className="bg-white rounded-full">
              <TiSocialPinterest size={20} color="#2A254B" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-[14px] text-white text-center mt-4">
          Copyright 2022 Avion LTD
        </div>
      </div>
    </section>
  );
};

export default Footer;
