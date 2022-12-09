import React from "react";

interface Title {
  title: string;
  subtitle: string;
  // btn: string;
  // btnHref: string;
}
function Title({ title, subtitle }: Title) {
  return (
    <div className="">
      <div>
        <h3 className="font-semibold text-xl lg:text-2xl ">{title}</h3>
        <p className="lg:w-[800px] text-xs md:text-base font-light drop-shadow-md">
          {subtitle}
        </p>
      </div>
      {/* <a href={btnHref} className="">
        {btn}
      </a> */}
    </div>
  );
}

export default Title;
