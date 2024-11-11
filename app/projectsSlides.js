'use client'
import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import Projects from "./projects.js"


import 'swiper/css';
import 'swiper/css/navigation';

import './swiper.css';


import { Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >  
        <SwiperSlide><Projects/></SwiperSlide>
        <SwiperSlide><Projects/></SwiperSlide>
        <SwiperSlide><Projects/></SwiperSlide>
        <SwiperSlide><Projects/></SwiperSlide>
        <SwiperSlide><Projects/></SwiperSlide>
        <SwiperSlide><Projects/></SwiperSlide>
        <SwiperSlide><Projects/></SwiperSlide>
        <SwiperSlide><Projects/></SwiperSlide>
        <SwiperSlide><Projects/></SwiperSlide>
      </Swiper>
    </>
  );
}
