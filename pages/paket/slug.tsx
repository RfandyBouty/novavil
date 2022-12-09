import {
  HomeModernIcon,
  InboxIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";
import Banner from "../../components/Banner";
import Deskripsi from "../../components/Deskripsi";
import PriceTag from "../../components/PriceTag";
import Wa from "../../public/icons/whatsapp.svg";

function slug() {
  return (
    <div className="">
      <Banner />
      <div className="flex flex-wrap justify-between max-w-7xl mx-auto p-5 space-x-5">
        <div className="md:flex-1">
          <h3 className="font-bold text-xl lg:text-4xl">Umroh Ajib 16 Hari</h3>
          <hr className="my-3" />
          <h5>Deskripsi</h5>
          <div className="my-2 space-x-5 flex">
            <Deskripsi Icon={HomeModernIcon} title="Pilihan Hotel" />
            <Deskripsi Icon={InboxIcon} title="Pilihan Kamar" />
            <Deskripsi Icon={PaperAirplaneIcon} title="Maskapai" />
          </div>

          {/* Terms & Cond */}
          <hr className="w-40 mt-3 md:mt-8 mb-3" />
          <div className="text-xs">
            <p>*Harga dapat berubah sewaktu-waktu menyesuaikan kondisi</p>
            <p>*Jadwal Program dapat berubah sewaktu-waktu</p>
            <p>*Syarat & Ketentuan Berlaku</p>
          </div>
        </div>

        <div className="border p-5 md:sticky mt-5 lg:mt-0">
          <h3>Harga Paket</h3>
          <h3 className="font-bold text-3xl">Rp. 39.900.000</h3>
          <p className="text-xs">Quad / Room</p>
          <PriceTag price="30.000.000" type="Triple / Room" />
          <PriceTag price="30.000.000" type="Triple / Room" />
          <hr className="my-3" />
          <div className="px-5 space-x-2 cursor-pointer items-center py-3 flex bg-green-300 hover:bg-green-200 transition-all duration-200 rounded-md">
            <Image src={Wa} alt="" />
            <h3 className="font-bold text-gray-600 text-sm">Booking Now</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default slug;
