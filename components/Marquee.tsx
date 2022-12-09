import Image from "next/image";
import React from "react";
import Emirates from "../public/img/emirates.webp";
import Etihad from "../public/img/etihad.webp";
import Garuda from "../public/img/garuda.webp";
import Lion from "../public/img/lion.png";
import Oman from "../public/img/oman.webp";
import Qatar from "../public/img/qatar.webp";
import Saudia from "../public/img/saudia.webp";
import Turkish from "../public/img/turkish.webp";

interface Marquee {}
function Marquee() {
  return (
    <div className="relative flex overflow-x-hidden grayscale">
      <div className="py-12 animate-marquee3 whitespace-nowrap">
        <div className="flex space-x-12">
          <Image src={Emirates} className="w-24 h-12" alt="" />
          <Image src={Etihad} className="w-24 h-12" alt="" />
          <Image src={Garuda} className="w-24 h-12" alt="" />
          <Image src={Lion} className="w-24 h-12" alt="" />
          <Image src={Oman} className="w-24 h-12" alt="" />
          <Image src={Qatar} className="w-24 h-12" alt="" />
          <Image src={Saudia} className="w-24 h-12" alt="" />
          <Image src={Turkish} className="w-24 h-12 mr-5" alt="" />
        </div>
      </div>

      <div className="absolute top-0 py-12 animate-marquee4 whitespace-nowrap">
        <div className="flex space-x-12">
          <Image src={Emirates} className="w-24 h-12" alt="" />
          <Image src={Etihad} className="w-24 h-12" alt="" />
          <Image src={Garuda} className="w-24 h-12" alt="" />
          <Image src={Lion} className="w-24 h-12" alt="" />
          <Image src={Oman} className="w-24 h-12" alt="" />
          <Image src={Qatar} className="w-24 h-12" alt="" />
          <Image src={Saudia} className="w-24 h-12" alt="" />
          <Image src={Turkish} className="w-24 h-12" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Marquee;
