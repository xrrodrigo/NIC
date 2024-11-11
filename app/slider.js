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

import car1 from "/public/img/car1.png"
import car2 from "/public/img/car2.png"
import car3 from "/public/img/car3.png"


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
        <SwiperSlide><Image src={car1} alt="NIC" /></SwiperSlide>
        <SwiperSlide><Image src={car2} alt="NIC" /></SwiperSlide>
        <SwiperSlide><Image src={car3} alt="NIC" /></SwiperSlide>
      </Swiper>
    </>
  );
}

