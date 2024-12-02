'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './swiper.css';


import Image from "next/image";

import firstslide from "/public/img/grafite-projeto.png"
import secondslide from "/public/img/car2.png"
import thirtslide from "/public/img/car3.png"


import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>

      <Swiper
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Image src={firstslide} alt="NIC" /></SwiperSlide>
        <SwiperSlide><Image src={secondslide} alt="NIC" /></SwiperSlide>
        <SwiperSlide><Image src={thirtslide} alt="NIC" /></SwiperSlide>
      </Swiper>
    </>
  );
}

