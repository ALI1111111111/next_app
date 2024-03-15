'use client'
import React from 'react';
import YouTube from 'react-youtube';

export default function Header(){
    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
          autoplay: 1, 
          loop: 1, 
          muted: 1, 
          controls: 0,
          showinfo: 0,
          autohide: 1,
          allowfullscreen: true,
          mode: 'transparent', 
        },
      };
        return (
<div>

            <div className="header18 cid-u6ScmHnFKA mbr-fullscreen" id="hero-15-u6ScmHnFKA">
<YouTube videoId="2NR4_5dt7JA" opts={opts} />

              <div className="mbr-overlay" style={{ opacity: 0.3, backgroundColor: 'rgb(0, 0, 0)' }} />
              <div className="container-fluid">
                <div className="row">
                  <div className="content-wrap col-12 col-md-8">
                    <h1 className="mbr-section-title mbr-fonts-style mbr-white mb-4 display-1 animate__animated animate__delay-1s animate__fadeInUp">
                      <strong>Wellness Hub</strong>
                    </h1>
                    <p className="mbr-fonts-style mbr-text mbr-white mb-4 display-7 animate__animated animate__delay-1s animate__fadeInUp">
                      Your Ultimate Destination for Health and Happiness - Dive into a World of Wellness Wonders!
                    </p>
                    <div className="mbr-section-btn">
                      <a className="btn btn-white-outline display-7 animate__animated animate__delay-1s animate__fadeInUp" href="#">
                        Discover
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          );
      };


