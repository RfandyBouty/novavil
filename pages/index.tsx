import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Title from "../components/Title";
import WhyUs from "../components/WhyUs";
import { HandThumbUpIcon, TrophyIcon } from "@heroicons/react/24/solid";
import Paket from "../components/Paket";
import Testimoni from "../components/Testimoni";

import { Carousel } from "flowbite-react";
import Delia from "../public/delia.jpg";
import Marquee from "../components/Marquee";
import NovImg from "../public/img/novavil.webp";
import AliImg from "../public/img/alindra.png";
import AmtImg from "../public/img/amitra.png";
import AmpImg from "../public/img/amphuri.png";
import HalImg from "../public/img/halal.jpg";
import IatImg from "../public/img/iata.webp";
import SisImg from "../public/img/sisko.webp";
import Articles from "../components/Articles";
import Galeri from "../components/Galeri";
import Whatsapp from "../components/Whatsapp";
import Slider from "../components/Slider";
import Link from "next/link";
import FooterKontak from "../components/FooterKontak";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Paket Umrah */}
      <Slider />
      <section className="bg-umrah bg-no-repeat bg-cover bg-center bg-fixed">
        <div className="max-w-7xl mx-auto">
          <div className="py-12 space-y-5 lg:mx-8 ">
            <Link href="/paket">
              <div className="bg-yellow-200 relative cursor-pointer py-2 mt-8 w-60 text-center mx-auto text-gray-700 font-semibold px-5 rounded-md hover:-translate-y-2 hover:shadow-lg transition-all duration-300 ease-in-out">
                Paket Tour & Travel
                <span className="animate-pulse absolute top-0 right-0 -mt-5 -mr-5 text-xs bg-gray-800 text-yellow-200 p-2 rounded-md">
                  Lebih banyak
                </span>
              </div>
            </Link>
            <div className="flex flex-nowrap overflow-x-scroll whitespace-nowrap">
              <Link href="/paket/slug">
                <Paket
                  title="Umrah 9 Hari - Starting Gorontalo"
                  price="Rp. 26.900.000"
                />
              </Link>
              <Link href="/paket/slug">
                <Paket
                  title="Umrah 10 Hari - Starting Gorontalo"
                  price="Rp. 29.900.000"
                />
              </Link>
              <Link href="/paket/slug">
                <Paket title="Haji Regular" price="Rp. 34.500.000" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto py-10 space-y-16">
        <div className="lg:mx-8">
          <div className="px-5">
            <Title title="Artikel Novavil" subtitle="" />
          </div>
          <div className="flex flex-wrap py-6 mt-10 space-x-5 space-y-2 justify-center">
            <Articles />
            <Articles />
            <Articles />
          </div>
        </div>
        {/* Kenapa Novavil */}
        <section className="lg:mt-10 px-5">
          <Title
            title="Mengapa Memilih Kami ?"
            subtitle=" Membantu saudara muslim sebanyak-banyaknya untuk bisa berangkat Umrah & Haji dengan mudah dan nyaman. "
          />
          <div className="flex flex-wrap mt-12">
            <WhyUs
              Icon={TrophyIcon}
              title="Terpercaya"
              text="Resmi terdaftar di Kementrian Agama Republik Indonesia dengan izin Umrah No.263 th.2018"
            />
            <WhyUs
              Icon={HandThumbUpIcon}
              title="Pasti Berangkatnya"
              text="Resmi terdaftar di Kementrian Agama Republik Indonesia dengan izin Umrah No.263 th.2018"
            />
            <WhyUs
              Icon={HandThumbUpIcon}
              title="Dijamin uang bisa kembali"
              text="Resmi terdaftar di Kementrian Agama Republik Indonesia dengan izin Umrah No.263 th.2018"
            />
            <WhyUs
              Icon={HandThumbUpIcon}
              title="Terpercaya"
              text="Resmi terdaftar di Kementrian Agama Republik Indonesia dengan izin Umrah No.263 th.2018"
            />
            <WhyUs
              Icon={HandThumbUpIcon}
              title="Terpercaya"
              text="Resmi terdaftar di Kementrian Agama Republik Indonesia dengan izin Umrah No.263 th.2018"
            />
            <WhyUs
              Icon={HandThumbUpIcon}
              title="Terpercaya"
              text="Resmi terdaftar di Kementrian Agama Republik Indonesia dengan izin Umrah No.263 th.2018"
            />
          </div>
        </section>
      </main>

      <section className="max-w-7xl mx-auto px-5">
        <Title title="Potret Novival" subtitle="foto kegiatan" />
        <div className="mt-10">
          <Galeri />
        </div>
      </section>

      {/* Testimoni */}
      <section className="bg-gray-100 mt-10 lg:rounded-tr-[350px] lg:rounded-bl-[350px]">
        <div className="max-w-7xl mx-auto px-5 py-10">
          <Title
            title="Apa Kata Jemaah"
            subtitle="Beberapa testimonial dari mereka yang telah mempercayakan Kami sebagai teman Perjalanan Anda "
          />
          <div className="lg:h-[600px]">
            <Carousel>
              <Testimoni
                image={Delia}
                nama="Delia Septianti"
                jabatan="Ex Vocalist Ecoutez"
                text="Assalamualaikum Wr, Wb. Alhamdulillah saya sudah selesai menjalankan ibadah Umroh bersama Novavil Tour & Travel dan Alhamdulillah saya dan mama papa begitu puas dengan semua pelayanan yang ada di Novavil Tour & Travel dari awal Manasik yang begitu jelas dan detail. terus juga dari perjalanan Umroh yang begitu khusuk dan begitu kompak, penjelasan dari para Ustadz juga begitu detail kita sangat bisa berdo'a dengan baik dan benar, sangat memuaskan Insyaallah mudah-mudahan bisa kembali kesini lagi kerumah Allah dengan Novavil Tour & Travel. Jadi buat anda yang ingin Umroh Novavil Pilihannya, Wassalamualaikum."
              />
              <Testimoni
                image={Delia}
                nama="Adipura"
                jabatan="Pesinetron"
                text="Assalamualaikum Wr, Wb. 
                saya beserta istri saya mempergunakan travel Novavil Tour & Travel, susunan acara yang dilakukan oleh Novavil sangat bagus yang pertama kita melakukan manasik tanggal 23 February 2018 di hotel sekitar bandara, kami dijelaskan oleh Ustad cerita makna daripada Umroh tesebut yang diawali dengan Niat kemudian Ikhrom, Tawaf dan sa'i. Begitu detailnya Ustadz menjelaskan semua secara Hukumnya, secara Hukum Fiqih rukun-rukun Umroh. Saya juga memberikan motivasi kenapa kita harus Umroh?. Insyaallah kedepan kita bisa Umroh lagi, saran saya Umroh Solusinya adalah Novavil , Wassalamualaikum Wr.Wb."
              />
              <Testimoni
                image={Delia}
                nama="Hatta Wardana"
                jabatan="Kepala Bea Cukai Bekasi"
                text="Assalamualaikum Wr, Wb. 
                saya kali ini pergi Umroh bersama Istri dengan menggunakan Jasa travel Novavil Mutiara Utama, Saya merasa terkesan dengan pelayanan yang Bagus dan Profesional dari tim Novavil Mutiara Utama manasiknya juga dilakukan dengan secara jelas kepada Jamaah sebelum keberangkatan dan juga pada saat di Maddinah kemudian perjalanan juga sangat menyenangkan, fasilitas yang digunakan mulai dari Hotel, Kendaraan dan semuanya sangat Profesional kemudian kami juga sangat terbantu sekali dengan Wireless jadi selama pelaksanaan Umroh keren sekali, sangat Jelas buat kami dan saat di Mekkah, Maddinah kami tidak hanya menjalankan Ibadah Ritual Umroh tetapi juga dapat Pembelajaran. Sukses buat Novavil Mutiara Utama, Mau Umroh ? Novavil Solusinya."
              />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Supported By */}
      <section className="py-10">
        <div className="text-center">
          <Title title="Supported and Partner" subtitle="" />
        </div>
        <div className="relative flex overflow-x-hidden grayscale">
          <div className="py-12 animate-marquee whitespace-nowrap">
            <div className="flex space-x-10">
              <Image src={NovImg} className="w-36 h-20" alt="" />
              <Image src={AliImg} className="w-36 h-20" alt="" />
              <Image src={AmtImg} className="w-36 h-20" alt="" />
              <Image src={HalImg} className="w-36 h-20" alt="" />
              <Image src={AmpImg} className="w-36 h-20" alt="" />
              <Image src={IatImg} className="w-36 h-20" alt="" />
              <Image src={SisImg} className="w-36 h-20" alt="" />
            </div>
          </div>

          <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
            <div className="flex space-x-10">
              <Image src={NovImg} className="w-36 h-20" alt="" />
              <Image src={AliImg} className="w-36 h-20" alt="" />
              <Image src={AmtImg} className="w-36 h-20" alt="" />
              <Image src={HalImg} className="w-36 h-20" alt="" />
              <Image src={AmpImg} className="w-36 h-20" alt="" />
              <Image src={IatImg} className="w-36 h-20" alt="" />
              <Image src={SisImg} className="w-36 h-20" alt="" />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Marquee />
        </div>
      </section>

      <hr />

      <section className="max-w-7xl mx-auto py-10 px-5">
        <FooterKontak />
      </section>
      <Whatsapp />
    </div>
  );
};

export default Home;
