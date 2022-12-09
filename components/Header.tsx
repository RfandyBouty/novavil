import { Carousel } from "flowbite-react";
import Image from "next/image";

import Logo from "../public/logoaja.png";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";

function Header() {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-2xl shadow-md ">
      <div className="flex select-none max-w-7xl mx-auto justify-between items-center px-5 py-2 lg:p-4 text-black">
        <Link href="/">
          <div className="flex items-center space-x-2 cursor-pointer">
            <Image src={Logo} className="w-10" alt="Logo" />
            <div className="">
              <h1 className="font-semibold lg:text-2xl tracking-tighter text-gray-500 drop-shadow-md">
                Novavil
              </h1>
              <p className="italic tracking-tight -mt-2 font-light text-xs text-yellow-400 drop-shadow-md">
                Tour & Travel
              </p>
            </div>
          </div>
        </Link>
        <div className=" text-xs font-bold uppercase hidden md:inline-flex">
          <Link href="/">
            <h3 className="cursor-pointer px-5 py-2 rounded-md drop-shadow-md hover:bg-yellow-200/80 hover:text-black transition-all ease-in-out duration-200">
              Beranda
            </h3>
          </Link>
          <Link href="/article">
            <h3 className="cursor-pointer px-5 py-2 rounded-md drop-shadow-md hover:bg-yellow-200/80 hover:text-black transition-all ease-in-out duration-200">
              Artikel
            </h3>
          </Link>
          <Link href="/paket">
            <h3 className="cursor-pointer px-5 py-2 rounded-md drop-shadow-md hover:bg-yellow-200/80 hover:text-black transition-all ease-in-out duration-200">
              Paket Tour & Travel
            </h3>
          </Link>
          <Link href="/about">
            <h3 className="cursor-pointer px-5 py-2 rounded-md drop-shadow-md hover:bg-yellow-200/80 hover:text-black transition-all ease-in-out duration-200">
              Tentang Kami
            </h3>
          </Link>
        </div>
        <div className="md:hidden inline-flex">
          <Bars3Icon className="hover:bg-slate-100 transition-colors duration-200 p-2 rounded-full w-10 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Header;
