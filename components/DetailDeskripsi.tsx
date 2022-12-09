import React from "react";

interface detail {
  isi: string;
}
function DetailDeskripsi({ isi }: detail) {
  return (
    <div className="flex space-x-3 mt-2">
      <p className="font-bold text-xs lg:text-md">{isi}</p>
    </div>
  );
}

export default DetailDeskripsi;
