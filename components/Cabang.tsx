import React from "react";

interface cabang {
  asal: string;
  alamat: string;
}
function Cabang({ asal, alamat }: cabang) {
  return (
    <div className="w-96 bg-slate-200/50 p-5 mr-2 rounded-md mt-2">
      <h3 className="font-bold text-gray-700 tracking-tight text-center mb-2">
        {asal}
      </h3>
      <p className="text-gray-600 text-xs indent-3 text-justify">{alamat}</p>
    </div>
  );
}

export default Cabang;
