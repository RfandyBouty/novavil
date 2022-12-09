import Image from "next/image";
import React from "react";
import PaketInfo from "./PaketInfo";
import {
  ArrowLongRightIcon,
  CalendarDaysIcon,
  ClockIcon,
  HomeModernIcon,
  MapPinIcon,
  PaperAirplaneIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

interface Paket {
  title: string;
  price: string;
}
function Paket({ title, price }: Paket) {
  return (
    <div className="p-5 lg:py-10 w-[750px] md:w-96 bg-white shadow-lg mr-4 mt-5 rounded-md first:ml-4">
      <div className="space-y-2 lg:space-y-5">
        <div className="h-16 md:h-24">
          <h3 className="md:text-xl leading-tight">{title}</h3>
          <span className="underline decoration-yellow-200 text-2xl md:text-3xl font-bold">
            {price}
          </span>
        </div>
        <hr />
        <PaketInfo
          Icon={CalendarDaysIcon}
          info="Jadwal Keberangkatan"
          ket="01 Jan 2022"
        />
        <PaketInfo Icon={ClockIcon} info="Durasi" ket="23 Hari" />
        <PaketInfo Icon={HomeModernIcon} info="Hotel" ket="Mirage As-salam" />
        <PaketInfo Icon={UserGroupIcon} info="Total Seat" ket="40 pax" />
        <PaketInfo Icon={MapPinIcon} info="Berangkat Dari" ket="Jakarta" />
        <PaketInfo
          Icon={PaperAirplaneIcon}
          info="Maskapai"
          ket="Garuda Indonesia"
        />
      </div>
      <div className="text-xs lg:text-base mt-8 bg-yellow-200 flex justify-between p-4 rounded-md text-gray-600 cursor-pointer hover:text-gray-900 hover:shadow-lg hover:-translate-y-2 duration-200 transition-all">
        Lihat Selengkapnya
        <div className="w-4 lg:w-6">
          <ArrowLongRightIcon />
        </div>
      </div>
    </div>
  );
}

export default Paket;
