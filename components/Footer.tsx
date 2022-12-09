import React from "react";
import Fb from "../public/icons/facebook.svg";
import Ig from "../public/icons/instagram.svg";
import Wa from "../public/icons/whatsapp.svg";
import Image from "next/image";
import Link from "next/link";
import Share from "./Share";

function Footer() {
  return (
    <div className="px-5">
      <div className="max-w-7xl mx-auto flex flex-wrap lg:flex-nowrap justify-between md:space-x-5 lg:p-5 p-2 space-y-2">
        <div>
          <div className="">
            <h1 className="font-semibold lg:text-2xl tracking-tighter text-gray-500 drop-shadow-md">
              Novavil
            </h1>
            <p className="italic tracking-tight -mt-2 font-light text-xs text-yellow-400 drop-shadow-md">
              Tour & Travel
            </p>
          </div>
          <p className="text-sm text-gray-400 mt-2 lg:w-96">
            “PT. Novavil Mutiara Utama” bergerak di bidang jasa perjalanan
            wisata religi umroh dan haji khusus yang dikenal dengan “Novavil
            Tour and Travel”
          </p>
        </div>
        <div className="lg:w-96">
          <h3 className="font-bold text-sm">Contact Us</h3>
          <p className="text-xs md:text-sm text-gray-400 mt-2 ">
            Grand Galaxy City, Ruko, Jl. Rose Garden 5 No.97, RT.002/RW.017,
            Jaka Setia, Kec. Bekasi Sel., Kota Bks, Jawa Barat 17148
          </p>
          <p className="text-xs md:text-sm text-gray-400">(021) 39711157</p>
        </div>
        <div>
          <h3 className="font-bold text-sm">Follow Us</h3>
          <div className="flex items-center space-x-2 mt-2">
            <Share
              linkTo="https://www.facebook.com/AgenTravelHajiUmroh"
              imgUrl={Fb}
            />
            <Share
              linkTo="https://www.instagram.com/travel.novavil"
              imgUrl={Ig}
            />
            <Share
              linkTo="https://api.whatsapp.com/send?phone=+6285255276632"
              imgUrl={Wa}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
