import React from "react";

interface Why {
  Icon: any;
  title: string;
  text: string;
}
function WhyUs({ Icon, title, text }: Why) {
  return (
    <div className="bg-gray-100 p-10 rounded-md text-center md:w-72 lg:w-96 space-x-2 mx-auto lg:mr-5 my-2 hover:shadow-lg duration-200 transition-all hover:bg-yellow-200 hover:text-white">
      <div className="w-12 mx-auto">
        <Icon />
      </div>
      <h3 className="">{title}</h3>
      <p className="text-gray-400 font-light text-sm">{text}</p>
    </div>
  );
}

export default WhyUs;
