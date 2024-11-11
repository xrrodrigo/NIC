'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

import './partner.css';


import Image from "next/image";

import logo from "/public/img/logo.svg"
import contagemLogo from "/public/img/contagem.png"
import MesaBrasil from "/public/img/mesabrasil.svg"
import tambasa from "/public/img/logo-tambasa.webp"


import { Autoplay, FreeMode } from 'swiper/modules';

export default function App() {
  return (
<div className='container'>
      <Swiper
       slidesPerView={5}
        freeMode={true}
        loop={true}
        speed={4000}
        autoplay={{
          delay: 0,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide><Image src={contagemLogo} className='logo' alt="NIC" /></SwiperSlide>
        <SwiperSlide><Image src={MesaBrasil} className='logo' alt="NIC" /></SwiperSlide>
        <SwiperSlide><Image src={tambasa} className='logo' alt="NIC" /></SwiperSlide>
        <SwiperSlide><Image src={logo} className='logo' alt="NIC" /></SwiperSlide>
        <SwiperSlide><Image src={logo} className='logo' alt="NIC" /></SwiperSlide>
        <SwiperSlide><Image src={logo} className='logo' alt="NIC" /></SwiperSlide>
        <SwiperSlide><Image src={logo} className='logo' alt="NIC" /></SwiperSlide>
        <SwiperSlide><Image src={logo} className='logo' alt="NIC" /></SwiperSlide>
        <SwiperSlide><Image src={logo} className='logo' alt="NIC" /></SwiperSlide>
        <SwiperSlide><Image src={logo} className='logo' alt="NIC" /></SwiperSlide>
      </Swiper>
      </div>
  );
}

