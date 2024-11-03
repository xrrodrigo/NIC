"use client";
import React from 'react';

function Play() {
const video = document.getElementById("vid");

    if (video.paused) {
        video.play() 
    }else{
        video.pause()
    }

}

export default function CustomVideo() {
    return (
        <div className=''>
            <video id='vid' onClick={Play} className="rounded-2xl w-2/5 w-lg">
                <source src="/vid/main-video.mp4" type="video/mp4"/>
            </video>

        </div>
    );
}
