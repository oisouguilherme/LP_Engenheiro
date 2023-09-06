"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

export function Depoimentos() {
  return (
    <div className="py-24 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold text-center pb-8">DEPOIMENTOS</h2>
      <div>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper md:h-[440px]"
        >
          <SwiperSlide>
            <Depoimento />
          </SwiperSlide>
          <SwiperSlide>
            <Depoimento />
          </SwiperSlide>
          <SwiperSlide>
            <Depoimento />
          </SwiperSlide>
          <SwiperSlide>
            <Depoimento />
          </SwiperSlide>
          <SwiperSlide>
            <Depoimento />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex justify-center pt-12">
        <Link
          href={"#"}
          className="bg-laranja-400 hover:bg-orange-500 duration-300 text-center px-16 py-2 text-lg text-white"
        >
          SOLICITAR ORÇAMENTO
        </Link>
      </div>
    </div>
  );
}

export function Depoimento() {
  return (
    <div className="flex gap-12 justify-center flex-wrap text-center">
      <div className="w-80">
        <p className="bg-zinc-50 p-4 text-zinc-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          suscipit et alias, odio exercitationem libero ratione cumque dolores
          error sequi beatae. Dolor asperiores voluptatum maxime aut! Eaque
          perferendis a quidem!
        </p>
        <p className="pt-2 text-zinc-700">Raul Teste - Buritis MG</p>
      </div>
      <div className="w-80">
        <p className="bg-zinc-50 p-4 text-zinc-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          suscipit et alias, odio exercitationem libero ratione cumque dolores
          error sequi beatae. Dolor asperiores voluptatum maxime aut! Eaque
          perferendis a quidem!uscipit et alias, odio exercitationem libero
          ratione cumque dolores error sequi beatae. Dolor asperiores voluptatum
          maxime aut! Eaque perferendis a quidem!uscipit et alias, odio
          exercitationem libero ratione cumque dolores error sequi beatae.
        </p>
        <p className="pt-2 text-zinc-700">Raul Teste - Buritis MG</p>
      </div>
      <div className="w-80">
        <p className="bg-zinc-50 p-4 text-zinc-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          suscipit et alias, odio exercitationem libero ratione cumque dolores
          error sequi beatae. Dolor asperiores voluptatum maxime aut! Eaque
          perferendis a quidem!
        </p>
        <p className="pt-2 text-zinc-700">Raul Teste - Buritis MG</p>
      </div>
    </div>
  );
}
