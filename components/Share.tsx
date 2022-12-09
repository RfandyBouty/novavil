import Image from "next/image";
import Link from "next/link";
import React from "react";

interface share {
  linkTo: string;
  imgUrl: any;
}
function Share({ linkTo, imgUrl }: share) {
  return (
    <div>
      <Link target="_blank" href={linkTo}>
        <Image
          src={imgUrl}
          className="cursor-pointer w-10 grayscale duration-200 hover:grayscale-0"
          alt="Facebook"
        />
      </Link>
    </div>
  );
}

export default Share;
