import React from "react";
import Cabang from "./Cabang";
import Kontak from "./Kontak";

function FooterKontak() {
  return (
    <div>
      <h3 className="text-center mb-5 font-bold text-2xl">Kantor pusat</h3>
      <Kontak />
      <div className="flex items-center justify-center flex-wrap mt-10 mb-10">
        <Cabang
          asal="Cabang Gorontalo"
          alamat="Komplek Blok Plan Perkantoran Desa Palopo, Kec. Marisa Kab. Pohuwato,
      Prov. Gorontalo"
        />
        <Cabang
          asal="Cabang Sulawesi Utara"
          alamat="Darussalam Ling. 2 RT/RW 08/04 Kel. Molinow, Kec. Kotamobagu Barat,
      Kota Mobagu, Prov. Sulawesi Tengah"
        />
        <Cabang
          asal="Cabang Sulawesi Tengah"
          alamat="Jl.Dewi Sartika No. 178 Kel. Petobo, Kec. Palu Selatan, Kota Palu,
      Prov. Sulawesi Tengah"
        />
        <Cabang
          asal="Cabang Maluku Utara"
          alamat="Jl. Kapitana Patimura No.9 Kel. Kalumpang, Kec. Ternate Tengah, Kota
      Ternate, Prov. Maluku Utara"
        />
        <Cabang
          asal="Cabang Papua Barat"
          alamat="Perum Manonan Reremi Puncak Desa Manokwari Barat, Kec. Manokwari
      Barat, Kab. Manokwari, Prov. Papua Barat"
        />
        <Cabang
          asal="Cabang Lampung"
          alamat="Pon-Pes Al-Fatah Kebun Kelapa Desa Negeri Agung, Kec. Talang Padang,
      Kab. Tanggamus, Prov. Lampung"
        />
      </div>
    </div>
  );
}

export default FooterKontak;
