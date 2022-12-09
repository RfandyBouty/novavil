import React from "react";
import DetailDeskripsi from "./DetailDeskripsi";

interface desk {
  Icon: any;
  title: string;
}
function Deskripsi({ Icon, title }: desk) {
  return (
    <div>
      <div className="flex space-x-2 items-center">
        <Icon src={Icon} className="w-4 lg:w-6" />
        <p className="text-sm">{title} :</p>
      </div>
      <div className="ml-8">
        <DetailDeskripsi isi="Mirage As-salam" />
        <DetailDeskripsi isi="Azka Al-Safa" />
      </div>
    </div>
  );
}

export default Deskripsi;
