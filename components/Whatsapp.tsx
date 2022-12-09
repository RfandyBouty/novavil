import Image from "next/image";
import Link from "next/link";
import React from "react";
import Wa from "../public/Whatsapp.svg.png";

function Whatsapp() {
  return (
    <div className="fixed bottom-0 right-0 mr-5 cursor-pointer ">
      <Link href="https://api.whatsapp.com/send?phone=+6285255276632&text=Hallo%20ka%20pian%20saya%20butuh%20bantuan%20bagaimana%20cara%20mendaftar%20travel%20umroh%20di%20Novavil">
        <div className="flex items-center bg-green-100 p-2 rounded-lg mb-2">
          <div className="w-8">
            <Image src={Wa} alt="Whatsapp" priority />
          </div>
          <h5 className="text-xs">Butuh bantuan?</h5>
        </div>
      </Link>
    </div>
  );
}

export default Whatsapp;
