'use client'
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import Projects from "./projects.js";

import 'swiper/css';
import 'swiper/css/navigation';

import './swiper.css';

import { Navigation } from 'swiper/modules';

export default function App() {
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className='swiperBlackNext'>
      <Swiper
        ref={swiperRef} // Adiciona a referência aqui
        slidesPerView={4}
        spaceBetween={20}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Navigation]}
        className="mySwiperProject"
      >
        <SwiperSlide><Projects /></SwiperSlide>
        <SwiperSlide><Projects /></SwiperSlide>
        <SwiperSlide><Projects /></SwiperSlide>
        <SwiperSlide><Projects /></SwiperSlide>
        <SwiperSlide><Projects /></SwiperSlide>
        <SwiperSlide><Projects /></SwiperSlide>
        <SwiperSlide><Projects /></SwiperSlide>
        <SwiperSlide><Projects /></SwiperSlide>
        <SwiperSlide><Projects /></SwiperSlide>
      </Swiper>
      <button onClick={handlePrev}>Voltar</button>
      <button onClick={handleNext}>Avançar</button>
    </div>
  );
}
