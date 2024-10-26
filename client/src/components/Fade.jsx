import React, { useEffect } from 'react';
import './Fade.css';

export default function Fade() {
  useEffect(() => {
    const faders = document.querySelectorAll('.fade-in'); 
    const sliders = document.querySelectorAll('.slide-in');

    const appearOptions = {
      threshold: 0,
      rootMargin: "0px 0px -200px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add('appear');
          appearOnScroll.unobserve(entry.target);
        }
      });
    }, appearOptions);

    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });

    sliders.forEach(slider => {
      appearOnScroll.observe(slider);
    });

  }, []);

  return (
    <div className=' overflow-hidden py-5 px-5'>
      
      <div className='row align-items-center'>
        <div className='col-12 col-md-6 slide-in from-left'>
          <h1 className='ms-5 hh1 '>ABOUT SHAUKAT ALI  <span className='inspirations' >& SONS</span></h1>
       

          <p className='ms-5 pp '>
            SAS delivers end-to-end turnkey solutions for high and extra high voltage grid projects,
            specializing in transmission systems up to 220kV. Our comprehensive services range
            from route surveys and cable laying to installation and testing, focusing on LPOF
            and XLPE technologies. Trust SAS for efficient and effective power project management.
          </p>
        </div>
        <div className='col-12 col-md-6 slide-in from-right'>
          <img src="./images/about1.jpg" className="  img-about shadow" alt="Lighting" />
        </div>
      </div>
    </div>
  );
}
