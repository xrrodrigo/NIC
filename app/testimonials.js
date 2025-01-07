'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';



import './swiper.css';

import Image from "next/image";

import volunteer from "/public/img/testimonial.avif"

import { Navigation, Pagination } from 'swiper/modules';

export default function Testimonials() {
    return (
        <div  className="w-full flex flex-col items-center pt-12 px-12 teste">

<Swiper navigation={true} modules={[ Pagination, Navigation]}>
        <SwiperSlide>
        <div className="flex flex-col items-center text-center w-8/12">
                <Image
                    src={volunteer}
                    alt="NIC"
                    className="rounded-full object-cover testimonialImage"
                />
            <div className="flex opacity-70  pb-6 pt-3">
            <h1>Cláudio</h1>
            <h1 className="px-1.5">-</h1>
                <h1>Aluno</h1>
            </div>
            <h1 className="text-2xl">“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”</h1>
        </div>
            </SwiperSlide>

            <SwiperSlide>
        <div className="flex flex-col items-center text-center w-8/12">
                <Image
                    src={volunteer}
                    alt="NIC"
                    className="rounded-full object-cover testimonialImage"
                />
            <div className="flex opacity-70  pb-6 pt-3">
            <h1>Luana</h1>
            <h1 className="px-1.5">-</h1>
                <h1>Professora</h1>
            </div>
            <h1 className="text-2xl	">“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”</h1>
        </div>
            </SwiperSlide>
      </Swiper>
        </div>
    );
}