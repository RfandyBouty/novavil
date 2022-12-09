import {
  ArrowLongRightIcon,
  CalendarDaysIcon,
  ClockIcon,
  HomeModernIcon,
  MapPinIcon,
  PaperAirplaneIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PaketInfo from "./PaketInfo";

interface listPaket {
  img: any;
  title: string;
  price: string;
}
function PaketList({ img, title, price }: listPaket) {
  return (
    <div className="md:w-72 lg:w-96 bg-white shadow-lg mr-2 lg:mr-4 mt-5 rounded-md">
      <div className="">
        <Image src={img} className="" alt="" />
      </div>
      <div className="space-y-2 p-5">
        <div className="h-16 md:h-24">
          <h3 className="text-2xl tracking-tight font-bold">{title}</h3>
          <span className="text-sm text-gray-400">
            Harga mulai dari{" "}
            <span className="font-bold underline decoration-yellow-200 text-gray-900 ">
              {price}
            </span>
            / Orang
          </span>
        </div>
        <Link href="/slug">
          <div className="text-xs lg:text-base mt-5 bg-yellow-200 flex justify-between p-4 rounded-md text-gray-600 cursor-pointer hover:text-gray-900 hover:shadow-lg hover:-translate-y-2 duration-200 transition-all">
            Pesan Sekarang
            <div className="w-4 lg:w-6">
              <ArrowLongRightIcon />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default PaketList;
