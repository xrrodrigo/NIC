'use client'
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './partner.css';


import Image from "next/image";


import contagemLogo from "/public/img/contagem.png"
import MesaBrasil from "/public/img/mesabrasil.svg"
import tambasa from "/public/img/logo-tambasa.webp"
import benassi from "/public/img/logo-benassi.webp"
import prodal from "/public/img/logo-prodal.webp"
import serparte from "/public/img/logo-ser_parte.png"
import toshiba from "/public/img/logo-toshiba.png"


import { Autoplay, FreeMode } from 'swiper/modules';

export default function App() {
  return (
<div className='partner-slide'>
      <Swiper
       slidesPerView={5}
        freeMode={true}
        loop={true}
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: false }}
        modules={[Autoplay, FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide><Image src={contagemLogo} className='logo' alt="NIC" /></SwiperSlide>
        <SwiperSlide><Image src={MesaBrasil} className='logo' alt="NIC" /></SwiperSlide>
        <SwiperSlide><Image src={tambasa} className='logo' alt="NIC" /></SwiperSlide>
        <SwiperSlide><Image src={benassi} className='logo' alt="NIC" /></SwiperSlide>
        <SwiperSlide><Image src={prodal} className='logo' alt="NIC" /></SwiperSlide>
        <SwiperSlide><Image src={serparte} className='logo' alt="NIC" /></SwiperSlide>
        <SwiperSlide><Image src={toshiba} className='logo' alt="NIC" /></SwiperSlide>
      </Swiper>
      </div>
  );
}

