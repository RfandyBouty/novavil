import React from "react";

interface Info {
  Icon: any;
  info: string;
  ket: string;
}
function PaketInfo({ Icon, info, ket }: Info) {
  return (
    <div className="flex justify-between items-center text-gray-500 text-sm">
      <div className="flex space-x-2 items-center">
        <div className="w-6 ">
          <Icon />
        </div>
        <p className="font-light text-xs md:text-sm">{info}</p>
      </div>
      <p className="font-bold md:font-medium text-xs md:text-sm">{ket}</p>
    </div>
  );
}

export default PaketInfo;
