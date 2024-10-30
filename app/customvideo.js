"use client";
import React from 'react';

function Play() {
const video = document.getElementById("vid");

    if (video == video.paused) {
        video.pause() 
        alert("if")

    }else{
        video.play()
        alert("ekse")
    }

}

export default function CustomVideo() {
    return (
        <div>
            <video id='vid' className="rounded-2xl w-2/5 w-lg">
                <source src="/vid/main-video.mp4" type="video/mp4"/>
            </video>
            <button onClick={Play}>
               Play
            </button>

        </div>
    );
}
