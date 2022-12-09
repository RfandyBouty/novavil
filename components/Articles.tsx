import Image from "next/image";
import Link from "next/link";
import React from "react";
import imgArticle from "../public/img/article/img.jpg";

function Articles() {
  return (
    <div className="bg-white border w-72 md:w-96 rounded-lg lg:first:ml-0 first:ml-5 hover:-translate-y-4 hover:shadow-md transition-all duration-200 ease-in">
      <Image
        src={imgArticle}
        className="rounded-t h-60 object-cover opacity-80 hover:opacity-100"
        alt=""
      />
      <div className="py-3 px-5">
        <h3 className="text-xl font-bold">Lorem Ipsum Dolor</h3>
        <p className="text-sm tracking-tight text-justify mt-2 h-auto line-clamp-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero eum
          neque accusamus! Vero, reprehenderit? Ipsum dolore hic nemo voluptas
          facilis iure eius, omnis nihil laboriosam qui culpa ex eos pariatur.
        </p>
        <Link href="/article/slug">
          <div className="rounded-md cursor-pointer text-center font-bold text-sm border text-gray-700 hover:bg-yellow-300/60 hover:text-gray-50 duration-200 mt-8 py-3">
            Baca Selengkapnya
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Articles;
