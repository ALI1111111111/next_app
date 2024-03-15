'use client'

import { Dai_Banna_SIL } from "next/font/google";
import { useState,useRef ,useEffect} from "react";

const Section2 = () => {
    const videoRef = useRef(null);
    const itemContent = [
        'Expert Articles Galore *',
        'Holistic Tips Bonanza *',
        'Empowering Resources Hub *',
        'Supportive Community Vibes *',
        'Inspiring Wellness Journey *',
        'Trusted Health Oasis *',
      ]
  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.autoplay = true;
      video.loop = true;
      video.muted = true;
    }

  
    return () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0; 
          }
    };
  }, [])
  ;

  return (
    <div>

    <div className="gallery10 cid-u6ScmHnDIg" id="features-61-u6ScmHnDIg">
      <div className="container-fluid">
        <div className="loop-container">
          {itemContent.map((item, index) => (
              <div key={index} className="item display-1" data-linewords={item} data-direction="-1" data-speed="0.05">
              {item} 
            </div>
          ))}
        </div>
      </div>
    </div>
    <section
    className="header18 cid-u6ScmHnRUl mbr-fullscreen"
    data-bg-video="https://www.youtube.com/embed/xoqp-5nBFXM?autoplay=1&loop=1&playlist=xoqp-5nBFXM&t=20&mute=1&playsinline=1&controls=0&showinfo=0&autohide=1&allowfullscreen=true&mode=transparent"
    id="video-5-u6ScmHnRUl"
    >
    <div className="mbr-overlay" style={{ opacity: 0.3, backgroundColor: 'rgb(0, 0, 0)' }} />
    <div className="container-fluid">
      <div className="row" /> 
    </div>
  </section>
      </div>
  );
};

export default Section2;
