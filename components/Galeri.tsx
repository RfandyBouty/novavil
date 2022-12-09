import Image from "next/image";
import React from "react";
import imgGaleri from "../public/img/galeri/imgGaleri.jpg";
import imgGaleri2 from "../public/img/galeri/imgGaleri2.jpg";
import imgGaleri3 from "../public/img/galeri/imgGaleri3.jpg";
import imgGaleri4 from "../public/img/galeri/imgGaleri4.jpg";
import imgGaleri5 from "../public/img/galeri/imgGaleri5.jpg";
import imgGaleri6 from "../public/img/galeri/imgGaleri6.jpg";
import imgGaleri7 from "../public/img/galeri/imgGaleri7.jpg";
import imgGaleri8 from "../public/img/galeri/imgGaleri8.jpg";
import imgGaleri9 from "../public/img/galeri/img.jpg";

function Galeri() {
  return (
    <div className="px-2">
      <div className="grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-3 gap-4">
        <div className=" col-span-2 rounded-md overflow-hidden">
          <div className="relative w-full h-60">
            <Image
              alt=""
              layout="fill"
              objectFit="cover"
              className="rounded-md"
              src={imgGaleri}
            />
          </div>
        </div>
        {/* https://scontent.fmdc3-1.fna.fbcdn.net/v/t39.30808-6/283323774_4523396837759847_4053240734801452777_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFPWgsQbktaOOinfgO4MLvGbK8ESoawwy1srwRKhrDDLVTk7MvLEfOtdYWrz4L7r-nYZUBCnRR0hpnsO8fDDNYw&_nc_ohc=uS9QYeVepU8AX_bsSr0&_nc_ht=scontent.fmdc3-1.fna&oh=00_AT8Lq-y6OKQJfXnrLXHV-4EC1jlFZxv-71C8L3BKKgsT-A&oe=632126AD */}
        <div className=" rounded-md overflow-hidden">
          <div className="relative w-full h-60">
            <Image
              alt=""
              layout="fill"
              objectFit="cover"
              className="rounded-md"
              src={imgGaleri2}
            />
          </div>
        </div>
        <div className=" rounded-md overflow-hidden">
          <div className="relative w-full h-60">
            <Image
              alt=""
              layout="fill"
              objectFit="cover"
              className="rounded-md"
              src={imgGaleri3}
            />
          </div>
        </div>
        <div className=" rounded-md overflow-hidden">
          <div className="relative w-full h-60">
            <Image
              alt=""
              layout="fill"
              objectFit="cover"
              className="rounded-md"
              src={imgGaleri4}
            />
          </div>
        </div>
        <div className=" col-span-2 rounded-md overflow-hidden">
          <div className="relative w-full h-60">
            <Image
              alt=""
              layout="fill"
              objectFit="cover"
              className="rounded-md"
              src={imgGaleri5}
            />
          </div>
        </div>
        <div className="  rounded-md overflow-hidden">
          <div className="relative w-full h-60 ">
            <Image
              alt=""
              layout="fill"
              objectFit="cover"
              className="rounded-md"
              src={imgGaleri6}
            />
          </div>
        </div>
        <div className=" rounded-md overflow-hidden">
          <div className="relative w-full h-60">
            <Image
              alt=""
              layout="fill"
              objectFit="cover"
              className="rounded-md"
              src={imgGaleri7}
            />
          </div>
        </div>
        <div className=" rounded-md overflow-hidden">
          <div className="relative w-full h-60">
            <Image
              alt=""
              layout="fill"
              objectFit="cover"
              className="rounded-md"
              src={imgGaleri8}
            />
          </div>
        </div>
        <div className="  col-span-2 rounded-md overflow-hidden">
          <div className="relative w-full h-60 ">
            <Image
              alt=""
              layout="fill"
              objectFit="cover"
              className="rounded-md"
              src={imgGaleri9}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Galeri;
