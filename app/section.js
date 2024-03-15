'use client'


import React from 'react';
import Image from 'next/image'; // Import Next.js Image component
import photo1 from './assets/images/photo-1603206004639-22635b71ac08.jpeg';
import photo2 from './assets/images/photo-1546440765-e7e3c881b5fe.jpeg';
import photo3 from './assets/images/photo-1538240175502-ec4eb4455f34.jpeg';
import photo4 from './assets/images/photo-1617796110702-9a4998a89d51.jpeg';


const Section = () => {


  return (
    <div className="gallery07 cid-u6ScmHnkoB" id="gallery-16-u6ScmHnkoB">
    <div className="container-fluid gallery-wrapper">
      <div className="row justify-content-center">
        <div className="col-12 content-head">
          <div className="mbr-section-head mb-5">
            <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
              <strong>Wellness in Pictures</strong>
            </h4>
          </div>
        </div>
      </div>
      <div className="grid-container">
        <div className="grid-container-3 t-form" >
          <div className="grid-item">
          <Image
              src={photo1}
              />
          </div>
          <div className="grid-item">
          <Image
              src={photo2}
              />
          </div>
          <div className="grid-item">
          <Image
              src={photo3}
              />
          </div>
          <div className="grid-item">
          <Image
              src={photo4}
              />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Section;
