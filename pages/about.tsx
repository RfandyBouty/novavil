import React from "react";
import FooterKontak from "../components/FooterKontak";

function about() {
  return (
    <div className="max-w-7xl mx-auto mt-10 z-0">
      <div className="p-5 py-10 bg-white rounded-md shadow-md">
        <h1 className="text-2xl text-center font-bold">
          Sejarah Singkat Novavil Tour & Travel NOVAVIL
        </h1>
        <p className="indent-5 mt-3 text-justify px-4">
          Memulai bisnisnya dari Koperasi Pegadaian milik keluarga pada tahun
          2007 yang di kenal dangan “KSP Novavil” di Desa Bakia Kec. Marisa Kab.
          Pohuwato Provinsi Gorontalo. Kemudian tumbuh berkembang merintis usaha
          jual beli rumah, kos-kosan, dan terus berkembang ke unit usaha foto
          copy percetakan dan penyedia alat tulis kantor serta butik muslimah
          yang di beri nama “UD Novavil” terletak di komplek Blok Plan
          perkantoran Kab. Pohuwato. Usaha tumbuh dan terus berkembang sampai
          akhirnya pada bulan Oktober 2017 sang menantu dari pemilik Novavil
          membangun Perusahaan baru yang di beri nama “PT. Novavil Mutiara
          Utama” bergerak di bidang jasa perjalanan wisata religi umroh dan haji
          khusus yang dikenal dengan “Novavil Tour and Travel” dari sebuah
          kantor kecil di Jl.Cikur Raya No.64 Jakamulya Bekasi Selatan Kota
          Bekasi, Novavil Tour and Travel merintis usahanya yang lebih fokus di
          bidang umroh dan haji. Alhamdulillah berkat dukungan keluarga dan tim
          yang solid saat ini Novavil Tour and Travel pada usia belia 1 tahun
          sudah memiliki Cabang di beberapa wilayah provinsi di Indonesia
          diantaranya; Cabang Jakarta, Gorontalo, Sulawesi Utara, Papua Barat,
          Kalimantan,Provinsi Riau dan insyallah terus berkembang.
        </p>
      </div>

      <hr className="my-10" />

      <div className="mt-5 lg:mt-10">
        <FooterKontak />
      </div>
    </div>
  );
}

export default about;
