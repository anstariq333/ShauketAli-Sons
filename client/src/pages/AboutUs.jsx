import React, { useEffect } from 'react';
import '../components/Fade.css';

export default function AboutUs() {
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
   <>
      <div className='about-img  row flex-wrap' >
          <div></div>
          <div>
          <h1 className=' heading1 text-light' >About Us</h1>
          </div>
          </div>
          

    <div className=' overflow-hidden py-5 px-5'>


      
      
      <div className='row align-items-center  d-none d-md-flex'>
        <div className='col-12 col-md-6 slide-in from-left'>
        <img src="./images/about1.jpg" className="img-fluid slider-img img-about shadow" alt="Lighting" />
          
        </div>
        <div className='col-12 col-md-6 slide-in from-right'>
          <h1 className='ms-5 hh1 '>About Us</h1>
          <p className='ms-5 pp  fs-4'>

          SAS delivers end-to-end turnkey solutions for high and extra high voltage grid projects, 
          specializing in transmission systems up to 220kV.
           Our comprehensive services range from route surveys and cable laying to installation
            and testing, focusing on LPOF and XLPE technologies. 
          Trust SAS for efficient and effective power project management.
          
          </p>
        </div>
      </div>
      <div className='row align-items-center d-md-none '>

        <div className='col-12 col-md-6 slide-in from-right'>
          <h1 className='ms-5 hh1'>About Us</h1>
          <p className='ms-5 pp  fs-4'>

          SAS delivers end-to-end turnkey solutions for high and extra high voltage grid projects, 
          specializing in transmission systems up to 220kV.
           Our comprehensive services range from route surveys and cable laying to installation
            and testing, focusing on LPOF and XLPE technologies. 
          Trust SAS for efficient and effective power project management.
          
          </p>
        </div>
           
        <div className='col-12 col-md-6 slide-in from-left'>
        <img src="./images/about1.jpg" className="img-fluid slider-img img-about shadow" alt="Lighting" />
          
        </div>

      </div>
      
      <div className='row align-items-center'>
        <div className='col-12 col-md-6 slide-in from-left mt-5'>
          <h1 className='ms-5 hh1 '>Our Promise</h1>
          <p className='ms-5 pp  fs-4'>We will plan and execute complete projects from start to
           finish while building a strong relationship with our clients. We take complete charge from design, engineering,
            and testing, to supply, commissioning and maintenance by using a tailored approach for specific client & project requirements.
             We guarantee timely delivery with attention to detail,
           post-project maintenance, and an optimized financial plan.

          </p>
        </div>
        <div className='col-12 col-md-6 slide-in from-right'>
          <img src="./images/promise.jpg" className="img-fluid slider-img img-about shadow" alt="Lighting" />
        </div>
      </div>
      
     
     <div className='row align-items-center d-none d-md-flex'>
        <div className='col-12 col-md-6 slide-in from-left'>
        <img src="./images/cable2.jpg" className="img-fluid slider-img img-about shadow" alt="Lighting" />
          
        </div>
        <div className='col-12 col-md-6 slide-in from-right'>
          <h1 className='ms-5 hh1 '>Our Vision</h1>
          <p className='ms-5 pp  fs-4'>

          To be the leading global provider of innovative and reliable high voltage solutions,
           pioneering advancements in underground and overhead transmission and distribution systems,
           while ensuring unparalleled quality and customer satisfaction.


        
          </p>
        </div>
      </div>
      
     <div className='row align-items-center d-md-none mt-5'>
       
        <div className='col-12 col-md-6 slide-in from-right'>
          <h1 className='ms-5 hh1'>Our Vision</h1>
          <p className='ms-5 pp  fs-4'>

          To be the leading global provider of innovative and reliable high voltage solutions,
           pioneering advancements in underground and overhead transmission and distribution systems,
           while ensuring unparalleled quality and customer satisfaction.


        
          </p>
        </div>
          
        <div className='col-12 col-md-6 slide-in from-left'>
        <img src="./images/cable2.jpg" className="img-fluid slider-img img-about shadow" alt="Lighting" />
          
        </div>

      </div>
      
      <div className='row align-items-center mt-5'>
        <div className='col-12 col-md-6 slide-in from-left'>
          <h1 className='ms-5 hh1 '>Our Mission</h1>
          <p className='ms-5 pp  fs-4'>
        
          At SAS, our mission is to deliver comprehensive, turnkey solutions for high voltage grid stations and transmission lines,
           from conception to completion. We are committed to engineering excellence,
            sustainable practices, and the highest standards of safety. By leveraging our extensive expertise and advanced technologies, 
            we aim to empower our clients with efficient and resilient high voltage infrastructure that meets the evolving demands of modern energy networks.
          </p>
        </div>
        <div className='col-12 col-md-6 slide-in from-right'>
          <img src="./images/mission.jpg" className="img-fluid slider-img img-about shadow" alt="Lighting" />
        </div>
      </div>


      <div className='row align-items-center d-none d-md-flex'>
        <div className='col-12 col-md-6 slide-in from-left'>
        <img src="./images/quality1.jpg" className="img-fluid slider-img img-about shadow" alt="Lighting" />
          
        </div>
        <div className='col-12 col-md-6 slide-in from-right'>
          <h1 className='ms-5 hh1 '>Quality</h1>
          <p className='ms-5 pp fs-4'>
          At SAS, quality is our top priority. We adhere to strict industry standards, ensuring precise and excellent execution in every project. 
          Through advanced engineering and rigorous testing, we deliver reliable and efficient high voltage solutions,
           making us a trusted partner in the energy sector.


          </p>
        </div>
      </div>

      <div className='row align-items-center d-md-none mt-5 '>
      
        <div className='col-12 col-md-6 slide-in from-right'>
          <h1 className='ms-5 hh1 '>Quality</h1>
          <p className='ms-5 pp  fs-4'>
          At SAS, quality is our top priority. We adhere to strict industry standards, ensuring precise and excellent execution in every project. 
          Through advanced engineering and rigorous testing, we deliver reliable and efficient high voltage solutions,
           making us a trusted partner in the energy sector.


          </p>
         </div>
         
         <div className='col-12 col-md-6 slide-in from-left'>
        <img src="./images/quality1.jpg" className="img-fluid slider-img img-about shadow" alt="Lighting" />
          
        </div>

      </div>
      
      
    </div>
</>

  );
}
