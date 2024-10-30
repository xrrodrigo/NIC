"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import Car1 from "/public/img/car1.png";
import Car2 from "/public/img/car2.png";
import Car3 from "/public/img/car3.png";

export default function Slider() {
    useEffect(() => {
        let count = 1;
        document.getElementById("radio1").checked = true;

        const interval = setInterval(() => {
            nextImage();
        }, 7000);

        function nextImage() {
            count++;
            if (count > 3) {
                count = 1;
            }
            document.getElementById("radio" + count).checked = true;
        }

        return () => clearInterval(interval);
    }, []);

    const nextImage = () => {
        let count = 1;
        count++;
        if (count > 3) {
            count = 1;
        }
        document.getElementById("radio" + count).checked = true;
    };

    const handleClick = () => {
        nextImage();
        console.log("Button clicked!");
    };

    return (
        <div className="w-full h-72 bg-black flex">
            <div className="slider">
                <div className="slides">
                    <input type="radio" name="radio-btn" id="radio1" />
                    <input type="radio" name="radio-btn" id="radio2" />
                    <input type="radio" name="radio-btn" id="radio3" />
                    <div className="slide first">
                        <Image src={Car1} alt="NIC" width={300} height={300} />
                    </div>
                    <div className="slide">
                        <Image src={Car2} alt="NIC" width={300} height={300} />
                    </div>
                    <div className="slide">
                        <Image src={Car3} alt="NIC" width={300} height={300} />
                    </div>
                    <div className="navigation-auto">
                        <div className="auto-btn1"></div>
                        <div className="auto-btn2"></div>
                        <div className="auto-btn3"></div>
                    </div>
                </div>
                <div className="manual-navigation">
                    <label htmlFor="radio1" className="manual-btn"></label>
                    <label htmlFor="radio2" className="manual-btn"></label>
                    <label htmlFor="radio3" className="manual-btn"></label>
                </div>
            </div>
            <button onClick={handleClick}>TESTE</button>
        </div>
    );
}
