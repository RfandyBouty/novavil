import React from "react";
import Image from "next/image";

interface Pesan {
  image: any;
  nama: string;
  jabatan: string;
  text: string;
}
function Testimoni({ image, nama, jabatan, text }: Pesan) {
  return (
    <section className="dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <figure className="max-w-screen-md mx-auto">
          <svg
            className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
          <blockquote>
            <p className="text-sm lg:text-xl font-medium text-gray-900 indent-5 dark:text-white">
              {text}
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3">
            <Image src={image} width={6} height={6} alt={nama} />
            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              <div className="pr-3 font-medium text-gray-900 dark:text-white">
                {nama}
              </div>
              <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                {jabatan}
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default Testimoni;
