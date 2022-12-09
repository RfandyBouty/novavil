import React from "react";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import SlideImg from "../public/banner.webp";
import SlideImgBlack from "../public/banner-hitam.webp";

function Slider() {
  return (
    <div className="xl:h-[800px] lg:h-[600px] lg:-mt-36 md:h-96 h-56">
      <Carousel slideInterval={7000}>
        <Image src={SlideImg} className="object-contain" alt="" />
        <Image src={SlideImgBlack} className="object-contain" alt="" />
      </Carousel>
    </div>
  );
}

export default Slider;
