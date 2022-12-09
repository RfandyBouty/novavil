import React from "react";

function Kontak() {
  return (
    <div className="flex justify-between">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7931.931483548342!2d106.976439!3d-6.268236!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf41882098da5ff03!2sNovavil%20Tour%20and%20Travel!5e0!3m2!1sid!2sid!4v1670149819555!5m2!1sid!2sid"
        allowFullScreen={true}
        loading="lazy"
        className="w-full h-52 rounded-md"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div></div>
    </div>
  );
}

export default Kontak;
