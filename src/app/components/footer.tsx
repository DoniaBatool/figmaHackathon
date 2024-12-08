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
    <section className="max-w-[1440px] bg-[#2A254B] px-[85px] h-[390px] justify-center items-center ">
     <div className="flex pt-[58px] ">
      {/* Main Grid Container */}
      <div
        className="w-full max-w-[1280px] grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4
        gap-x-[50px] text-nowrap text-[14px] text-white font-satoshi">
        {/* Column 1 */}
        <div>
          <ul className="flex flex-col gap-[12px] text-[14px]">
            <li className="font-clash text-[16px]">
              <Link href={"/"}>Menu</Link>
            </li>
            <li>
              <Link href={"/"}>New arrivals</Link>
            </li>
            <li>
              <Link href={"/"}>Best sellers</Link>
            </li>
            <li>
              <Link href={"/"}>Recently viewed</Link>
            </li>
            <li>
              <Link href={"/"}>Popular this week</Link>
            </li>
            <li>
              <Link href={"/"}>All products</Link>
            </li>
          </ul>
        </div>
        {/* Column 2 */}
        <div>
          <ul className="flex flex-col gap-[12px]">
            <li className="font-clash text-[16px]">
              <Link href={"/"}>Categories</Link>
            </li>
            <li>
              <Link href={"/"}>Categories</Link>
            </li>
            <li>
              <Link href={"/"}>New arrivals</Link>
            </li>
            <li>
              <Link href={"/"}>Best sellers</Link>
            </li>
            <li>
              <Link href={"/"}>Recently viewed</Link>
            </li>
            <li>
              <Link href={"/"}>Popular this week</Link>
            </li>
            <li>
              <Link href={"/"}>All products</Link>
            </li>
          </ul>
        </div>
        {/* Column 3 */}
        <div>
          <ul className="flex flex-col gap-[12px]">
            <li className="font-clash text-[16px]">
              <Link href={"/"}>Our company</Link>
            </li>
            <li>
              <Link href={"/"}>New arrivals</Link>
            </li>
            <li>
              <Link href={"/"}>Best sellers</Link>
            </li>
            <li>
              <Link href={"/"}>Recently viewed</Link>
            </li>
            <li>
              <Link href={"/"}>Popular this week</Link>
            </li>
            <li>
              <Link href={"/"}>All products</Link>
            </li>
          </ul>
        </div>
        </div>
        {/* Column 4 */}
        <div className="text-[16px] text-white font-clash">
        
          <ul className="flex flex-col gap-[12px]">
            <li className="font-clash text-[16px]">
              <Link href={"/"}>Join our mailing list</Link>
            </li>
            <li>
              <div className="flex w-[509px] h-[56px]">
                <input
                  type="text"
                  placeholder="your@email.com"
                  className="flex-grow h-[56px] bg-[#FFFFFF]/15 font-satoshi text-[16px] text-white pl-[32px]"
                />
                <button
                  type="submit"
                  className="w-[118px] h-[56px] text-mytext font-satoshi text-[16px] leading-[150%] bg-white"
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
      <div className="flex justify-between mb-[50px] ">
        <div className="font-satoshi text-[14px] text-white">
          Copyright 2022 Avion LTD
        </div>
        <div className="flex justify-between gap-[24px]">
          <div className="bg-white rounded-sm">
            <TiSocialLinkedin size={24} color="#2A254B" />
          </div>
          <div className="bg-white rounded-sm">
            <TiSocialFacebook size={24} color="#2A254B" />
          </div>
          <div className="bg-[#2A254B]">
            <SlSocialInstagram size={24} color="#FFFFFF" />
          </div>
          <div className="bg-[#2A254B]">
            <SlSocialSkype size={24} color="#FFFFFF" />
          </div>
          <div className="bg-[#2A254B]">
            <SlSocialTwitter size={24} color="#FFFFFF" />
          </div>
          <div className="bg-white rounded-full">
            <TiSocialPinterest size={24} color="#2A254B" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
