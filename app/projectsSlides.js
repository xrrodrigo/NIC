"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Projects from "./projects.js";

import "swiper/css";
import "swiper/css/navigation";

import "./swiper.css";

import { Navigation } from "swiper/modules";

import { CaretRight, CaretLeft } from "@phosphor-icons/react";

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

  const projects = [
    {
      name: "Vozes de águia",
      firstDay: "Quarta",
      secondDay: "Sexta",
      unity: "Quinquim do Mandú",
      neighborhood: "Novo Progresso",
    },
    {
      name: "Coral Juvenil",
      firstDay: "Terça",
      secondDay: "Quinta",
      unity: "Centro Cultural",
      neighborhood: "Bairro Central",
    },
    {
      name: "Muay Thai",
      firstDay: "Quarta",
      secondDay: "Sexta",
      unity: "Quinquim do Mandú",
      neighborhood: "Novo Progresso",
    },
    {
      name: "Futebol",
      firstDay: "Terça",
      secondDay: "Quinta",
      unity: "Cruzeiro do Sul",
      neighborhood: "Balneário do Ressaca",
    },
    {
      name: "Pilates Solo",
      firstDay: "Terça",
      secondDay: "Quinta",
      unity: "Bragança",
      neighborhood: "Contagem",
    },
  ];

  return (
    <div className="swiperBlackNext">
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
        {projects.map((projects, index) => (
          <SwiperSlide key={index}>
            <Projects
              name={projects.name}
              firstDay={projects.firstDay}
              secondDay={projects.secondDay}
              unity={projects.unity}
              neighborhood={projects.neighborhood}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="pt-4">
        <button onClick={handlePrev}>
          <CaretLeft color="#001f3f" size={26} />
        </button>
        <button onClick={handleNext}>
          <CaretRight color="#001f3f" size={26} />
        </button>
      </div>
    </div>
  );
}
