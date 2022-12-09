import Image from "next/image";
import React from "react";
import imgArticle from "../public/img/article/photo.avif";
import Fb from "../public/icons/facebook.svg";
import Ig from "../public/icons/instagram.svg";
import Wa from "../public/icons/whatsapp.svg";
import Link from "next/link";

function Article() {
  return (
    <div className="">
      <div className="relative">
        <Image
          src={imgArticle}
          alt=""
          className="w-full h-60 lg:h-96 object-cover brightness-75"
        />
        <div className="absolute lg:-mt-52 lg:ml-40 md:ml-40 md:-mt-20 ml-10 -mt-20">
          <h3 className="text-white text-center font-bold rounded-lg text-2xl bg-slate-300/50 p-5 md:text-3xl lg:text-5xl drop-shadow-md">
            Jammah umrah membludak
          </h3>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="relative lg:-mt-20 bg-white p-4 lg:p-10 rounded-md shadow-md">
          <div className="flex flex-col">
            {/* Subtitle */}
            <h3 className="text-xl font-bold ">
              375 Jemaah Umrah Samira Travel Berangkat dari Bandara Kertajati
            </h3>
            {/* Penulis */}
            <p className="text-gray-600 text-sm">Penulis: Pian sugiarto</p>
            <hr className="my-3" />
            {/* Isi Berita */}
            <p className="indent-10 text-gray-800 text-justify font-serif">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
              dolorum voluptas consequatur aliquid magni nihil explicabo maxime
              vitae nemo nostrum. Aliquid amet aspernatur vel molestias qui
              atque officia id neque. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dicta, asperiores, at perspiciatis doloribus
              repellat quo amet dolorum voluptatibus provident quas aspernatur
              iste libero error debitis, quibusdam iure nam atque quam. Saepe
              esse assumenda voluptatum distinctio corrupti rerum doloribus quo
              veritatis, consequatur tenetur, quas, tempora doloremque nemo
              cumque ad expedita temporibus quibusdam maxime dolores non
              consectetur ab perspiciatis. Facilis, nam totam. Deserunt
              similique ea amet, minima aliquid illo assumenda iusto odio
              dolorum id distinctio? Doloribus est sapiente ut ipsam eveniet
              fugiat saepe perspiciatis distinctio porro soluta, voluptate
              voluptates, aspernatur fugit delectus? Perferendis, tempore eos.
              Animi debitis libero asperiores sequi repellat ratione, veniam
              quam velit tenetur similique corrupti quae, in consequuntur, modi
              neque iure sunt exercitationem dolore nesciunt eligendi itaque?
              Repudiandae, error? Eligendi pariatur repellendus voluptas cum!
              Expedita eum ipsa aperiam molestias asperiores assumenda culpa
              praesentium nobis consequatur blanditiis temporibus nesciunt
              placeat necessitatibus, atque eius excepturi animi ipsum explicabo
              magni at deserunt. Aspernatur voluptas adipisci quam quaerat
              dolore a ducimus saepe iure natus dolorum cumque repudiandae
              tenetur nam unde accusantium beatae earum, libero voluptatum
              officiis, explicabo quisquam quibusdam! Nemo nostrum atque
              reprehenderit! Nemo, amet eaque aut repellat, ratione rem eum
              aliquid ea saepe velit nisi voluptate sit a repellendus! Aut
              provident aperiam quasi illo, mollitia quos vel assumenda deleniti
              accusantium possimus labore! Maiores, ea quia ullam voluptas
              corporis quos aliquam culpa ipsa id, facere vero eos, beatae qui
              error. Iste optio porro eligendi necessitatibus excepturi! Est
              nobis, laboriosam doloribus aspernatur fugiat repellendus! Magnam
              ex ducimus et vitae repellat ratione explicabo deserunt voluptatum
              dignissimos exercitationem, vel distinctio earum unde adipisci.
              Sit quidem iste, consequuntur perspiciatis tempore est excepturi
              ipsa, incidunt, atque beatae autem? Praesentium quis nam soluta
              aut ullam distinctio minus, quisquam quasi nihil eius porro.
              Temporibus itaque unde alias ratione ullam, aperiam placeat, illo
              exercitationem explicabo cupiditate excepturi natus assumenda.
              Dolore, aspernatur. Quo eum quos porro iusto vel quaerat sapiente
              aut, est doloremque facere mollitia ducimus quidem perspiciatis
              possimus nisi nostrum minus ut? Minima officiis est ipsum numquam
              voluptatum natus atque enim. Harum quae officiis tempore fugit
              incidunt provident deserunt eius quaerat ad veniam quas inventore
              similique omnis, voluptate excepturi odit quia placeat nisi magni
              nulla quisquam. Voluptatum dolor inventore reiciendis! Voluptatem.
            </p>
            <div className="flex items-center space-x-2 pt-3 pb-6 justify-start mt-10">
              <p className="text-sm tracking-tight">Bagikan: </p>
              <Link href=""></Link>
              <Image src={Fb} className="cursor-pointer" alt="Facebook" />
              <Image src={Ig} className="cursor-pointer" alt="Instagram" />
              <Image src={Wa} className="cursor-pointer" alt="Whatsapp" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
