import Image from "next/image";
import React from "react";
import Article from "../../components/Article";
import Articles from "../../components/Articles";

function slug() {
  return (
    <div className="bg-[#F6FAFF]">
      <Article />
      <div className=" max-w-7xl mx-auto mt-10">
        <h3 className="text-xl text-center text-gray-600 font-bold">
          Artikel lainnya
        </h3>
        <div className="flex whitespace-nowrap overflow-x-scroll lg:justify-center py-4 space-x-3 px-5">
          <Articles />
          <Articles />
          <Articles />
        </div>
      </div>
    </div>
  );
}

export default slug;
