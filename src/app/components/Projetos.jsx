"use client";

import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import ImageCasa from "../../assets/casa2.webp";

export function Projetos() {
  return (
    <div className="grid md:grid-cols-2 gap-8 bg-[url('/bgMarmore.webp')] bg-cover py-24 items-center px-4">
      <div className="lg:pl-64">
        <h2 className="text-5xl uppercase text-orange-500">Projetos</h2>
        <p className="text-zinc-600 py-4">
          Explore nosso portfólio de projetos e mergulhe em um mundo de inovação e excelência. Cada imagem conta uma história de sucesso, e cada projeto é uma prova de nosso compromisso com a qualidade. 
        </p>
        <Link href={"#"} className="underline">
          Veja mais projetos
        </Link>
      </div>
      <div className="">
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween:10
            },
            768: {
              slidesPerView: 3,
              spaceBetween:20
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="h-[430px] w-72 md:w-full"
        >
          <SwiperSlide>
            <Image
              src={ImageCasa}
              alt="Projeto"
              className="object-cover h-96 md:w-80"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={ImageCasa}
              alt="Projeto"
              className="object-cover h-96 md:w-80"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={ImageCasa}
              alt="Projeto"
              className="object-cover h-96 md:w-80"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={ImageCasa}
              alt="Projeto"
              className="object-cover h-96 md:w-80"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={ImageCasa}
              alt="Projeto"
              className="object-cover h-96 md:w-80"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={ImageCasa}
              alt="Projeto"
              className="object-cover h-96 md:w-80"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
