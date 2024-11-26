"use client";
import React from 'react';

export default function CustomVideo() {
    return (
        <div>
            <video id='vid' controls className="rounded-2xl w-2/5 w-lg">
                <source src="/vid/main-video.mp4" type="video/mp4"/>
            </video>

        </div>
    );
}
