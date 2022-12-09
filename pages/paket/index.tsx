import React from "react";
import PaketList from "../../components/PaketList";
import Title from "../../components/Title";
import umrohAjib from "../../public/img/paket/umrohAjib.png";
import umrohAqsa from "../../public/img/paket/umrohAqsa.png";
import umrohBerkah from "../../public/img/paket/umrohBerkah9.png";
import umrohDubai from "../../public/img/paket/umrohDubai.png";
import umrohHasanah from "../../public/img/paket/umrohHasanah.png";
import umrohMumtaz from "../../public/img/paket/umrohMumtaz.png";
import umrohMumtazTwo from "../../public/img/paket/umrohMumtaz12.png";
import umrohMumtazSix from "../../public/img/paket/umrohMumtaz16.png";
import umrohNuzul from "../../public/img/paket/umrohNuzul.png";
import umrohQadar from "../../public/img/paket/umrohQadar.png";
import umrohRamadhan from "../../public/img/paket/umrohRmdn2.png";
import umrohTurki from "../../public/img/paket/umrohTurki.png";

function paket() {
  return (
    <div className="max-w-7xl mx-auto p-5 ">
      <div className="text-center mb-5">
        <Title title="Paket Tour & Travel " subtitle="" />
      </div>
      <hr />
      <div className="flex flex-wrap items-center justify-center ">
        <PaketList
          img={umrohAjib}
          title="Umroh Ajib 16 Hari"
          price="39.900.000"
        />
        <PaketList
          img={umrohAqsa}
          title="Umroh + Al Aqsa 12 Hari"
          price="45.900.000"
        />
        <PaketList
          img={umrohBerkah}
          title="Umroh Berkah 9 Hari"
          price="31.900.000"
        />
        <PaketList
          img={umrohHasanah}
          title="Umroh Hasanah 12 Hari"
          price="33.900.000"
        />
        <PaketList
          img={umrohMumtaz}
          title="Umroh Mumtaz 9 Hari"
          price="36.900.000"
        />
        <PaketList
          img={umrohMumtazTwo}
          title="Umroh Mumtaz 12 Hari"
          price="38.900.000"
        />
        <PaketList
          img={umrohMumtazSix}
          title="Umroh Mumtaz 16 Hari"
          price="42.900.000"
        />
        <PaketList
          img={umrohNuzul}
          title="Umroh Nuzul Quran 13 Hari"
          price="42.950.000"
        />
        <PaketList
          img={umrohQadar}
          title="Umroh Lailatul Qadar 21 Hari"
          price="40.900.000"
        />
        <PaketList
          img={umrohRamadhan}
          title="Umroh Awal Ramadhan 12 Hari"
          price="40.900.000"
        />
        <PaketList
          img={umrohTurki}
          title="Umroh + Turki 12 Hari"
          price="43.900.000"
        />
        <PaketList
          img={umrohDubai}
          title="Umroh + Dubai 12 Hari"
          price="44.900.000"
        />
      </div>
    </div>
  );
}

export default paket;
