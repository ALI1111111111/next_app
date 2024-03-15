'use client'


import Image from "next/image";
import Header from "./header";

 import "./assets/parallax/jarallax.js"
 import "./assets/bootstrap/js/bootstrap.bundle.min.js"
 import "./assets/dropdown/js/navbar-dropdown.js"
 import "./assets/scrollgallery/scroll-gallery.js"
 import "./assets/mbr-switch-arrow/mbr-switch-arrow.js"
 import  "./assets/smoothscroll/smooth-scroll.js"
  import "./assets/ytplayer/index.js"
 import  "./assets/theme/js/script.js"
   import "./assets/formoid/formoid.min.js"

import  "./assets/web/assets/mobirise-icons2/mobirise2.css";
import './assets/parallax/jarallax.css'
import './assets/bootstrap/css/bootstrap.min.css'
import './assets/bootstrap/css/bootstrap-grid.min.css'
import  './assets/bootstrap/css/bootstrap-reboot.min.css'
import  './assets/dropdown/css/style.css'
import  './assets/socicon/css/styles.css'
import './assets/animatecss/animate.css'
import './assets/theme/css/style.css'
import './assets/mobirise/css/additional.css'
import styles from "./page.module.css";
import photo from './assets/images/photo-1552650272-b8a34e21bc4b.jpeg'
import Section from "./section";
import Section2 from "./section2";
import Article from "./article";
import ContactForm from "./ContactForm"
import Footer from "./footer";
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [hasAnimationInput, setHasAnimationInput] = useState(false);

  useEffect(() => {
    
    if (!hasAnimationInput) {
      const animationInput = document.createElement('input');
      animationInput.setAttribute('name', 'animation');
      animationInput.setAttribute('type', 'hidden');
      document.body.appendChild(animationInput);
      setHasAnimationInput(true);
    }
  }, []);
  return (
    <main>
      <div>
  <div className="menu menu2 cid-u6ScmHmWam" once="menu" id="menu-5-u6ScmHmWam">
  <nav className="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
    <div className="container">
      <div className="navbar-brand">
        <span className="navbar-logo">
					<a href="https://mobiri.se">
						{/* <img src="assets/images/photo-1552650272-b8a34e21bc4b.jpeg" style="height: 4.3rem;"> */}
              <Image
              src={photo}
              />
					</a>
				</span>
				<span className="navbar-caption-wrap">
          <a className="navbar-caption text-black display-4" href="https://mobiri.se">Wellvibe</a>
        </span>
      </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse"
        data-bs-toggle="collapse" data-target="#navbarSupportedContent"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarNavAltMarkup" aria-expanded="false"
        aria-label="Toggle navigation">
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav nav-dropdown" data-app-modern-menu="true">
          <li className="nav-item">
            <a className="nav-link link text-black display-4" href="#">Articles</a>
          </li>
          <li className="nav-item">
            <a className="nav-link link text-black display-4" href="#"
              aria-expanded="false">Tips</a>
          </li>
          <li className="nav-item">
            <a className="nav-link link text-black display-4" href="#">Resources</a>
          </li>
        </ul>
        <div className="navbar-buttons mbr-section-btn">
          <a className="btn btn-primary display-4" href="https://mobiri.se">Explore</a>
        </div>
      </div>
    </div>
  </nav>
</div>
<Header/>
<Section/>
{/* <Section2/> */}
<Article/>
<ContactForm/>
<Footer/>

      </div>

      

      
    </main>
  );
}
